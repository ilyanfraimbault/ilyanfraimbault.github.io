<script setup lang="ts">
export interface LigneTableau {
  /** Intitulé affiché dans la colonne de gauche, par exemple « f′(x) ». */
  nom: string
  /** « signe » pour une ligne de signes, « variation » pour la ligne de la fonction. */
  type?: 'signe' | 'variation'
  /**
   * Contenu de chaque intervalle, de longueur `bornes − 1` : un signe, une
   * flèche, ou « ‖ » lorsque l'intervalle est hors du domaine. Sur une ligne de
   * variation, se déduit de la ligne de signes précédente s'il est omis.
   */
  entre?: (string | number | null)[]
  /**
   * Contenu à chaque borne, de longueur `bornes`. Sur une borne barrée, une
   * paire `[limite à gauche, limite à droite]`.
   */
  aux?: (string | number | null | (string | number)[])[]
}

const props = defineProps<{
  /** Légende affichée au-dessus du tableau. */
  titre?: string
  /** Intitulé de la première ligne. Par défaut : « x ». */
  variable?: string
  /** Les valeurs de la variable, dans l'ordre croissant. */
  bornes: (string | number)[]
  /** Indices des bornes exclues du domaine : elles reçoivent une double barre. */
  barres?: (number | string)[]
  lignes: LigneTableau[]
}>()

const BARRE = '‖'

const texte = (v: unknown) => v === null || v === undefined ? '' : String(v)
const estBarre = (v: string) => v === BARRE || v === '||'

const bornes = computed(() => (props.bornes ?? []).map(texte))
const nb = computed(() => bornes.value.length)
const barres = computed(() => new Set((props.barres ?? []).map(Number)))

/**
 * Les colonnes alternent borne et intervalle. La première piste porte les
 * intitulés de ligne ; les intervalles se partagent la place restante, avec une
 * largeur plancher pour que les signes ne se collent pas aux barres.
 */
const gabarit = computed(() => [
  'minmax(3rem, auto)',
  ...bornes.value.flatMap((_, j) => j === 0 ? ['auto'] : ['var(--tv-largeur)', 'auto'])
].join(' '))

/** Complète un tableau à la longueur voulue, sans jamais le tronquer en silence. */
function caler<T>(source: readonly T[] | undefined, taille: number, vide: T): T[] {
  const out = Array.from({ length: taille }, (_, i) => source?.[i] ?? vide)
  return out
}

/* ---------------------------------------------------------------- Flèches */

/* Les cases d'intervalle ont une taille fixe, et le viewBox reprend exactement
   leurs proportions : l'étirement est donc uniforme et la pointe de la flèche
   n'est jamais déformée — sans qu'aucune mesure du DOM soit nécessaire, ce qui
   vaut aussi au rendu serveur et dans un panneau encore replié. */
const LARGEUR = 88
const HAUTEUR = 80
const MARGE_X = 9
const MARGE_Y = 15
const VUE = `0 0 ${LARGEUR} ${HAUTEUR}`

const arrondi = (v: number) => Math.round(v * 10) / 10

/** Segment allant d'une hauteur relative à l'autre, pointe comprise. */
function trace(depuis: number, vers: number) {
  const y = (p: number) => arrondi(MARGE_Y + p * (HAUTEUR - 2 * MARGE_Y))
  const x1 = MARGE_X
  const x2 = LARGEUR - MARGE_X
  const y1 = y(depuis)
  const y2 = y(vers)

  const angle = Math.atan2(y2 - y1, x2 - x1)
  const aile = (ecart: number) => [
    arrondi(x2 - 10 * Math.cos(angle + ecart)),
    arrondi(y2 - 10 * Math.sin(angle + ecart))
  ]
  const [ax, ay] = aile(0.45)
  const [bx, by] = aile(-0.45)

  return {
    segment: `M ${x1} ${y1} L ${x2} ${y2}`,
    fleche: `M ${ax} ${ay} L ${x2} ${y2} L ${bx} ${by}`
  }
}

/* ----------------------------------------------------------------- Lignes */

const lignes = computed(() => {
  let signesPrecedents: string[] = []

  return (props.lignes ?? []).map((ligne) => {
    const variation = ligne.type === 'variation'
    let entre = caler((ligne.entre ?? []).map(texte), Math.max(nb.value - 1, 0), '')

    if (variation && !ligne.entre?.length) {
      // Une ligne de variation sans flèches explicites suit le signe de la
      // dérivée : c'est la lecture même du tableau, autant l'automatiser.
      entre = signesPrecedents.map(s => estBarre(s) ? BARRE : s === '+' ? '↗' : s === '−' ? '↘' : '')
    }
    if (!variation) signesPrecedents = entre

    /** Sens sur l'intervalle `i`, ou null s'il est hors domaine ou absent. */
    const sens = (i: number) => {
      const v = entre[i]
      return i < 0 || i >= entre.length || !v || estBarre(v) ? null : v
    }

    /** Hauteur d'une valeur : 0 en haut, 1 en bas, 0,5 sur une branche monotone. */
    const hauteur = (avant: string | null, apres: string | null) => {
      if (avant && apres) return avant === apres ? 0.5 : avant === '↗' ? 0 : 1
      if (apres) return apres === '↗' ? 1 : 0
      if (avant) return avant === '↗' ? 0 : 1
      return 0.5
    }

    const colonnes = bornes.value.map((_, j) => {
      const avant = sens(j - 1)
      const apres = sens(j)
      const brut = ligne.aux?.[j]
      const paire = Array.isArray(brut)
      const barree = barres.value.has(j)

      return {
        barree,
        // Une borne barrée porte deux limites, chacune à la hauteur de sa branche.
        gauche: texte(paire ? brut[0] : brut),
        droite: paire ? texte(brut[1]) : '',
        // Seule une ligne de variation code une information dans la hauteur ;
        // sur une ligne de signes, tout reste centré.
        pGauche: !variation ? 0.5 : barree ? hauteur(avant, null) : hauteur(avant, apres),
        pDroite: !variation ? 0.5 : barree ? hauteur(null, apres) : hauteur(avant, apres)
      }
    })

    return {
      nom: ligne.nom,
      variation,
      colonnes,
      intervalles: entre.map((v, i) => {
        const depuis = colonnes[i]?.pDroite ?? 0.5
        const vers = colonnes[i + 1]?.pGauche ?? 0.5
        return {
          barre: estBarre(v),
          signe: variation ? '' : v,
          montante: depuis > vers,
          trace: variation ? trace(depuis, vers) : null
        }
      })
    }
  })
})
</script>

<template>
  <figure class="tableau-variations not-prose my-6">
    <figcaption
      v-if="titre"
      class="mb-2 text-sm font-medium text-highlighted"
    >
      {{ titre }}
    </figcaption>

    <div class="tv-cadre">
      <div
        class="tv-grille"
        :style="{ gridTemplateColumns: gabarit }"
      >
        <div class="tv-nom">
          {{ variable || 'x' }}
        </div>
        <template
          v-for="(b, j) in bornes"
          :key="`x-${j}`"
        >
          <div
            class="tv-borne"
            :class="j === 0 && 'tv-premiere'"
          >
            <span
              class="tv-trait"
              :class="barres.has(j) && 'tv-trait-double'"
            />
            <span class="tv-etiquette">{{ b }}</span>
          </div>
          <div
            v-if="j < bornes.length - 1"
            class="tv-intervalle"
          />
        </template>

        <template
          v-for="(ligne, i) in lignes"
          :key="`l-${i}`"
        >
          <div class="tv-nom tv-separateur">
            {{ ligne.nom }}
          </div>
          <template
            v-for="(col, j) in ligne.colonnes"
            :key="`c-${i}-${j}`"
          >
            <div
              class="tv-borne tv-separateur"
              :class="[j === 0 && 'tv-premiere', ligne.variation && 'tv-haute']"
            >
              <span
                class="tv-trait"
                :class="col.barree && 'tv-trait-double'"
              />
              <!-- Les valeurs sont positionnées en absolu, donc invisibles au
                   calcul des colonnes : ce gabarit leur réserve la largeur. -->
              <span
                class="tv-gabarit"
                aria-hidden="true"
              >
                <span>{{ col.gauche }}</span>
                <span
                  v-if="col.barree"
                  class="tv-gabarit-ecart"
                />
                <span v-if="col.droite">{{ col.droite }}</span>
              </span>
              <span
                v-if="col.gauche"
                class="tv-valeur"
                :class="col.barree ? 'tv-valeur-gauche' : 'tv-valeur-centre'"
                :style="{ '--tv-p': col.pGauche }"
              >{{ col.gauche }}</span>
              <span
                v-if="col.droite"
                class="tv-valeur tv-valeur-droite"
                :style="{ '--tv-p': col.pDroite }"
              >{{ col.droite }}</span>
            </div>

            <div
              v-if="j < ligne.intervalles.length"
              class="tv-intervalle tv-separateur"
              :class="ligne.variation && 'tv-haute'"
            >
              <span
                v-if="ligne.intervalles[j]!.barre"
                class="tv-trait tv-trait-double tv-trait-plein"
              />
              <template v-else-if="ligne.intervalles[j]!.trace">
                <svg
                  class="tv-fleche"
                  :viewBox="VUE"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path :d="ligne.intervalles[j]!.trace!.segment" />
                  <path :d="ligne.intervalles[j]!.trace!.fleche" />
                </svg>
                <span class="sr-only">{{ ligne.intervalles[j]!.montante ? 'croissante' : 'décroissante' }}</span>
              </template>
              <span
                v-else
                class="tv-signe"
                :class="ligne.intervalles[j]!.signe === '−' ? 'tv-signe-moins' : 'tv-signe-plus'"
              >{{ ligne.intervalles[j]!.signe }}</span>
            </div>
          </template>
        </template>
      </div>
    </div>
  </figure>
</template>
