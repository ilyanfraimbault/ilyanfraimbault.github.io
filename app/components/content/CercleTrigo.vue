<script setup lang="ts">
type Onglet = 'explorer' | 'symetries' | 'equations' | 'reciproques'

const props = defineProps<{
  /** Titre du bloc. Par défaut : « Le cercle trigonométrique ». */
  titre?: string
  /** Phrase d'accroche affichée sous le titre. */
  resume?: string
  /** Angle de départ, en degrés (les attributs MDC arrivent en chaîne). */
  angle?: string | number
  /** Onglet ouvert au chargement. Nommé `mode` : MDC supprime les attributs
   * commençant par « on », qu'il prend pour des gestionnaires d'événement. */
  mode?: string
  /** Onglets à conserver, séparés par des virgules. Tous par défaut. */
  modes?: string
}>()

const uid = useId()

/* -------------------------------------------------------------- Géométrie */

/** Rayon du cercle dans le repère SVG. Le viewBox laisse 65 unités de marge. */
const RAYON = 100

const arrondiSvg = (v: number) => Math.round(v * 100) / 100

function normaliser(d: number): number {
  return ((Math.round(d) % 360) + 360) % 360
}

/** Point du cercle : l'axe des ordonnées SVG descend, d'où le signe du sinus. */
function pt(d: number, r: number = RAYON) {
  const a = d * Math.PI / 180
  return { x: arrondiSvg(r * Math.cos(a)), y: arrondiSvg(-r * Math.sin(a)) }
}

/** Arc parcouru dans le sens direct : anti-horaire à l'écran, donc sweep 0. */
function arc(depuis: number, vers: number, r: number): string {
  const a = pt(depuis, r)
  const b = pt(vers, r)
  const ecart = ((vers - depuis) % 360 + 360) % 360
  return `M ${a.x} ${a.y} A ${r} ${r} 0 ${ecart > 180 ? 1 : 0} 0 ${b.x} ${b.y}`
}

/* ----------------------------------------------------------- Vocabulaire */

const REMARQUABLES = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]

function pgcd(a: number, b: number): number {
  return b === 0 ? a : pgcd(b, a % b)
}

/** « 0 », « π/3 », « 5π/6 », « 3π/2 »… pour un angle entier en degrés. */
function enRadians(d: number): string {
  const v = normaliser(d)
  if (v === 0) return '0'
  const g = pgcd(v, 180)
  const num = v / g
  const den = 180 / g
  const haut = num === 1 ? 'π' : `${num}π`
  return den === 1 ? haut : `${haut}/${den}`
}

const EXACTS = [
  { v: 0, t: '0', approche: false },
  { v: 0.5, t: '1/2', approche: false },
  { v: Math.SQRT1_2, t: '√2/2', approche: true },
  { v: Math.sqrt(3) / 2, t: '√3/2', approche: true },
  { v: 1, t: '1', approche: false },
  { v: Math.sqrt(3) / 3, t: '√3/3', approche: true },
  { v: Math.sqrt(3), t: '√3', approche: true }
]

function nombre(v: number, decimales = 3): string {
  return v.toFixed(decimales).replace('.', ',').replace('-', '−')
}

/** Valeur exacte quand elle est remarquable, décimale approchée sinon. */
function valeurTexte(v: number): string {
  const abs = Math.abs(v)
  const trouve = EXACTS.find(e => Math.abs(abs - e.v) < 1e-9)
  if (!trouve) return `≈ ${nombre(v)}`
  const texte = trouve.v === 0 ? '0' : (v < 0 ? '−' : '') + trouve.t
  return trouve.approche ? `${texte} ≈ ${nombre(v)}` : texte
}

/** Les fonctions inverses renvoient 60,000000000000014 : on recolle aux entiers. */
function arrondiAngle(a: number): number {
  const entier = Math.round(a)
  return Math.abs(a - entier) < 1e-6 ? entier : Math.round(a * 100) / 100
}

/** Un arcsin ou un arctan renvoie un angle négatif : on le garde tel quel,
 *  sans le ramener dans [0, 2π[ — ce serait sortir de son intervalle. */
function angleCourt(a: number): string {
  const v = arrondiAngle(a)
  if (!Number.isInteger(v)) return `${nombre(v, 1)}°`
  return v < 0 ? `−${enRadians(-v)}` : enRadians(v)
}

function angleTexte(a: number): string {
  const v = arrondiAngle(a)
  return Number.isInteger(v) ? `${angleCourt(v)} (${v}°)` : `≈ ${nombre(v, 1)}°`
}

/** « = 1/2 » mais « ≈ 0,819 » : le signe suit la nature de la valeur. */
function egalite(v: number): string {
  const t = valeurTexte(v)
  return t.startsWith('≈') ? t : `= ${t}`
}

/* ------------------------------------------------------------------- État */

const ONGLETS: { id: Onglet, label: string }[] = [
  { id: 'explorer', label: 'Lire le cercle' },
  { id: 'symetries', label: 'Symétries' },
  { id: 'equations', label: 'Équations' },
  { id: 'reciproques', label: 'arccos / arcsin' }
]

const ongletsVisibles = computed(() => {
  const demandes = props.modes?.split(',').map(s => s.trim()).filter(Boolean)
  if (!demandes?.length) return ONGLETS
  const gardes = ONGLETS.filter(o => demandes.includes(o.id))
  return gardes.length ? gardes : ONGLETS
})

const actif = ref<Onglet>(
  ongletsVisibles.value.find(o => o.id === props.mode)?.id ?? ongletsVisibles.value[0]!.id
)

const angleInitial = Number(props.angle)
const deg = ref(Number.isFinite(angleInitial) ? normaliser(angleInitial) : 60)

const aimanter = ref(true)
const montrerRepere = ref(true)
const montrerTangente = ref(false)

const propre = (v: number) => Math.abs(v) < 1e-12 ? 0 : v

const rad = computed(() => deg.value * Math.PI / 180)
const cosV = computed(() => propre(Math.cos(rad.value)))
const sinV = computed(() => propre(Math.sin(rad.value)))
const tanV = computed(() => cosV.value === 0 ? null : propre(sinV.value / cosV.value))
const M = computed(() => pt(deg.value))

const deplacable = computed(() => actif.value !== 'equations')

/* ------------------------------------------------------- Tracés dérivés */

const cheminSecteur = computed(() => {
  if (deg.value === 0) return ''
  const a = pt(0, 28)
  const b = pt(deg.value, 28)
  return `M 0 0 L ${a.x} ${a.y} A 28 28 0 ${deg.value > 180 ? 1 : 0} 0 ${b.x} ${b.y} Z`
})

const cheminArc = computed(() => deg.value === 0 ? '' : arc(0, deg.value, 28))

const etiquetteAngle = computed(() => pt(deg.value / 2, 44))

/** On efface l'étiquette d'une projection trop courte pour la porter. */
const etiquetteCos = computed(() => {
  if (Math.abs(cosV.value) < 0.2) return null
  return { x: arrondiSvg(M.value.x * 0.62), y: sinV.value >= 0 ? 16 : -9 }
})

const etiquetteSin = computed(() => {
  if (Math.abs(sinV.value) < 0.2) return null
  return {
    x: cosV.value >= 0 ? -9 : 9,
    y: arrondiSvg(M.value.y * 0.62 + 4),
    ancre: cosV.value >= 0 ? 'end' : 'start'
  }
})

/** Le rayon prolongé coupe la droite d'équation x = 1 à l'ordonnée tan θ. */
const pointTangente = computed(() => {
  if (tanV.value === null) return null
  const brut = -RAYON * tanV.value
  return { y: arrondiSvg(Math.max(Math.min(brut, 146), -146)), depasse: Math.abs(brut) > 146 }
})

const quadrantTexte = computed(() => {
  const d = deg.value
  if (d === 0) return 'Sur l’axe des cosinus, à droite : cos θ = 1 et sin θ = 0.'
  if (d === 90) return 'En haut de l’axe des sinus : cos θ = 0 et sin θ = 1.'
  if (d === 180) return 'Sur l’axe des cosinus, à gauche : cos θ = −1 et sin θ = 0.'
  if (d === 270) return 'En bas de l’axe des sinus : cos θ = 0 et sin θ = −1.'
  if (d < 90) return '1ᵉʳ quadrant — cosinus positif, sinus positif.'
  if (d < 180) return '2ᵉ quadrant — cosinus négatif, sinus positif.'
  if (d < 270) return '3ᵉ quadrant — cosinus négatif, sinus négatif.'
  return '4ᵉ quadrant — cosinus positif, sinus négatif.'
})

/* ------------------------------------------------------------ Symétries */

const SYMETRIES = [
  {
    id: 'oppose',
    titre: '−θ',
    miroir: 'symétrique de M par rapport à l’axe des cosinus',
    variable: '--ct-cos',
    versAngle: (d: number) => normaliser(-d),
    formules: (c: string, s: string) => [`cos(−θ) = cos θ ${c}`, `sin(−θ) = −sin θ ${s}`]
  },
  {
    id: 'supplementaire',
    titre: 'π − θ',
    miroir: 'symétrique de M par rapport à l’axe des sinus',
    variable: '--ct-sin',
    versAngle: (d: number) => normaliser(180 - d),
    formules: (c: string, s: string) => [`cos(π − θ) = −cos θ ${c}`, `sin(π − θ) = sin θ ${s}`]
  },
  {
    id: 'antipode',
    titre: 'π + θ',
    miroir: 'symétrique de M par rapport au centre O',
    variable: '--ct-tan',
    versAngle: (d: number) => normaliser(180 + d),
    formules: (c: string, s: string) => [`cos(π + θ) = −cos θ ${c}`, `sin(π + θ) = −sin θ ${s}`]
  },
  {
    id: 'complementaire',
    titre: 'π/2 − θ',
    miroir: 'symétrique de M par rapport à la diagonale y = x',
    variable: '--ct-angle',
    versAngle: (d: number) => normaliser(90 - d),
    formules: (c: string, s: string) => [`cos(π/2 − θ) = sin θ ${c}`, `sin(π/2 − θ) = cos θ ${s}`]
  }
]

const symetriesActives = ref(SYMETRIES.map(s => s.id))

function basculerSymetrie(id: string) {
  const i = symetriesActives.value.indexOf(id)
  if (i === -1) symetriesActives.value.push(id)
  else symetriesActives.value.splice(i, 1)
}

const symetriesRendues = computed(() => SYMETRIES.map((s) => {
  const image = s.versAngle(deg.value)
  const c = propre(Math.cos(image * Math.PI / 180))
  const sn = propre(Math.sin(image * Math.PI / 180))
  return {
    ...s,
    actif: symetriesActives.value.includes(s.id),
    image,
    point: pt(image),
    couleur: `var(${s.variable})`,
    lignes: s.formules(egalite(c), egalite(sn))
  }
}))

const diagonale = computed(() => symetriesRendues.value.find(s => s.id === 'complementaire')?.actif)
const diametre = computed(() => symetriesRendues.value.find(s => s.id === 'antipode')?.actif)

/* ------------------------------------------------------------ Équations */

const eqFonction = ref<'cos' | 'sin'>('cos')
const eqValeur = ref(0.5)

const VALEURS_CLES = [
  { v: -1, t: '−1' },
  { v: -Math.sqrt(3) / 2, t: '−√3/2' },
  { v: -Math.SQRT1_2, t: '−√2/2' },
  { v: -0.5, t: '−1/2' },
  { v: 0, t: '0' },
  { v: 0.5, t: '1/2' },
  { v: Math.SQRT1_2, t: '√2/2' },
  { v: Math.sqrt(3) / 2, t: '√3/2' },
  { v: 1, t: '1' }
]

const eqSolutions = computed<number[]>(() => {
  const k = eqValeur.value
  if (Math.abs(k) > 1) return []
  const brutes = eqFonction.value === 'cos'
    ? [Math.acos(k) * 180 / Math.PI, -Math.acos(k) * 180 / Math.PI]
    : [Math.asin(k) * 180 / Math.PI, 180 - Math.asin(k) * 180 / Math.PI]
  const vues = new Set<number>()
  return brutes
    .map(a => arrondiAngle(((a % 360) + 360) % 360))
    .filter((a) => {
      if (vues.has(a)) return false
      vues.add(a)
      return true
    })
})

/** L'angle « de référence » : celui que renvoie la calculatrice. */
const eqReference = computed(() => arrondiAngle(
  eqFonction.value === 'cos'
    ? Math.acos(eqValeur.value) * 180 / Math.PI
    : Math.asin(eqValeur.value) * 180 / Math.PI
))

const eqLigne = computed(() => arrondiSvg(
  eqFonction.value === 'cos' ? eqValeur.value * RAYON : -eqValeur.value * RAYON
))

const eqFamilles = computed(() => {
  if (Math.abs(eqValeur.value) > 1) return []
  const a = angleCourt(eqReference.value)
  return eqFonction.value === 'cos'
    ? [`x = ${a} + 2kπ`, `x = −${a} + 2kπ`]
    : [`x = ${a} + 2kπ`, `x = π − ${a} + 2kπ`]
})

const memeValeur = (a: number, b: number) => Math.abs(a - b) < 1e-9

/* ---------------------------------------------------------- Réciproques */

const REC_FONCTIONS = ['arccos', 'arcsin', 'arctan'] as const

const recFonction = ref<typeof REC_FONCTIONS[number]>('arccos')

const REC = {
  arccos: { intervalle: '[0, π]', depuis: 0, vers: 180, source: 'cosinus' },
  arcsin: { intervalle: '[−π/2, π/2]', depuis: 270, vers: 90, source: 'sinus' },
  arctan: { intervalle: ']−π/2, π/2[', depuis: 270, vers: 90, source: 'tangente' }
}

const recResultat = computed<number | null>(() => {
  if (recFonction.value === 'arccos') return arrondiAngle(Math.acos(cosV.value) * 180 / Math.PI)
  if (recFonction.value === 'arcsin') return arrondiAngle(Math.asin(sinV.value) * 180 / Math.PI)
  return tanV.value === null ? null : arrondiAngle(Math.atan(tanV.value) * 180 / Math.PI)
})

const recArc = computed(() => {
  const { depuis, vers } = REC[recFonction.value]
  return arc(depuis, vers, RAYON)
})

const recPoint = computed(() => recResultat.value === null ? null : pt(recResultat.value))

const recEtiquette = computed(() => recResultat.value === null ? null : pt(recResultat.value, 140))

const recTexte = computed(() => recResultat.value === null ? '' : angleCourt(recResultat.value))

const recIdentique = computed(() => recResultat.value !== null
  && normaliser(recResultat.value) === deg.value)

const recCommentaire = computed(() => {
  const f = recFonction.value
  const i = REC[f].intervalle
  if (recResultat.value === null) {
    return 'La tangente n’est pas définie pour cet angle : le rayon est vertical, il ne coupe jamais la droite x = 1.'
  }
  if (recIdentique.value) {
    return `θ appartient déjà à ${i} : ${f}(${f === 'arccos' ? 'cos' : f === 'arcsin' ? 'sin' : 'tan'} θ) = θ. C’est le seul cas où la simplification est immédiate.`
  }
  return `θ n’est pas dans ${i}. ${f} renvoie donc l’autre angle de ${i} qui a le même ${REC[f].source} — pas θ.`
})

/* ------------------------------------------------------------ Interaction */

const svgRef = ref<SVGSVGElement | null>(null)
const enDeplacement = ref(false)

function distanceAngulaire(a: number, b: number): number {
  const d = Math.abs(normaliser(a) - normaliser(b))
  return Math.min(d, 360 - d)
}

function aimante(d: number): number {
  if (!aimanter.value) return d
  const proche = REMARQUABLES.find(r => distanceAngulaire(d, r) <= 5)
  return proche === undefined ? d : proche
}

function angleDepuis(e: PointerEvent | MouseEvent): number | null {
  const svg = svgRef.value
  const matrice = svg?.getScreenCTM()
  if (!svg || !matrice) return null
  const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(matrice.inverse())
  if (p.x === 0 && p.y === 0) return null
  return normaliser(Math.atan2(-p.y, p.x) * 180 / Math.PI)
}

function placer(e: PointerEvent | MouseEvent) {
  const a = angleDepuis(e)
  if (a !== null) deg.value = aimante(a)
}

function clicCercle(e: MouseEvent) {
  if (deplacable.value && !enDeplacement.value) placer(e)
}

function debutDeplacement(e: PointerEvent) {
  const cible = e.currentTarget as Element
  cible.setPointerCapture?.(e.pointerId)
  enDeplacement.value = true
  placer(e)
}

function pendantDeplacement(e: PointerEvent) {
  if (!enDeplacement.value) return
  e.preventDefault()
  placer(e)
}

function finDeplacement(e: PointerEvent) {
  enDeplacement.value = false
  const cible = e.currentTarget as Element
  if (cible.hasPointerCapture?.(e.pointerId)) cible.releasePointerCapture(e.pointerId)
}

function auClavier(e: KeyboardEvent) {
  const pas = e.shiftKey ? 15 : 1
  let suivant: number | null = null
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp') suivant = deg.value + pas
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') suivant = deg.value - pas
  else if (e.key === 'PageUp') suivant = deg.value + 15
  else if (e.key === 'PageDown') suivant = deg.value - 15
  else if (e.key === 'Home') suivant = 0
  if (suivant === null) return
  e.preventDefault()
  deg.value = normaliser(suivant)
}

/**
 * Les onglets « Équations » et « Réciproques » étiquettent eux-mêmes les angles
 * qu'ils désignent : on efface l'étiquette grise de l'anneau quand elle ferait
 * doublon, sans retirer le repère lui-même.
 */
const anglesOccultes = computed(() => {
  const vus: number[] = []
  if (actif.value === 'equations') vus.push(...eqSolutions.value)
  if (actif.value === 'reciproques' && recResultat.value !== null) vus.push(recResultat.value)
  return new Set(vus.map(a => normaliser(a)))
})

const descriptionA11y = computed(
  () => `Cercle trigonométrique. Angle θ = ${enRadians(deg.value)}, soit ${deg.value} degrés. `
    + `Cosinus ${nombre(cosV.value, 2)}, sinus ${nombre(sinV.value, 2)}.`
)
</script>

<template>
  <figure class="cercle-trigo not-prose my-6 rounded-xl border border-default bg-elevated/30">
    <figcaption class="border-b border-default px-4 py-3">
      <p class="flex items-center gap-2 font-medium text-highlighted">
        <UIcon
          name="i-lucide-compass"
          class="size-4 shrink-0 text-primary"
        />
        <span>{{ titre || 'Le cercle trigonométrique' }}</span>
      </p>
      <p class="mt-1 text-sm text-muted">
        {{ resume || 'Déplace le point M sur le cercle : cos θ se lit sur l’axe horizontal, sin θ sur l’axe vertical.' }}
      </p>
    </figcaption>

    <div
      v-if="ongletsVisibles.length > 1"
      class="flex flex-wrap gap-1 border-b border-default px-3 py-2"
    >
      <button
        v-for="o in ongletsVisibles"
        :key="o.id"
        type="button"
        class="ct-onglet"
        :class="actif === o.id && 'ct-onglet-actif'"
        :aria-current="actif === o.id ? 'true' : undefined"
        @click="actif = o.id"
      >
        {{ o.label }}
      </button>
    </div>

    <div class="grid gap-5 p-4 lg:grid-cols-[minmax(0,1fr)_19rem]">
      <div class="min-w-0">
        <svg
          ref="svgRef"
          class="ct-svg"
          viewBox="-165 -152 330 304"
          role="group"
          :aria-label="descriptionA11y"
          @click="clicCercle"
        >
          <!-- Repère : axes, graduations, cercle unité. -->
          <g class="ct-axes">
            <line
              x1="-146"
              y1="0"
              x2="146"
              y2="0"
            />
            <line
              x1="0"
              y1="146"
              x2="0"
              y2="-146"
            />
          </g>

          <g class="ct-graduations">
            <line
              x1="100"
              y1="-4"
              x2="100"
              y2="4"
            />
            <line
              x1="-100"
              y1="-4"
              x2="-100"
              y2="4"
            />
            <line
              x1="-4"
              y1="-100"
              x2="4"
              y2="-100"
            />
            <line
              x1="-4"
              y1="100"
              x2="4"
              y2="100"
            />
            <text
              x="102"
              y="15"
            >1</text>
            <text
              x="-102"
              y="15"
              text-anchor="end"
            >−1</text>
            <text
              x="7"
              y="-102"
            >1</text>
            <text
              x="7"
              y="110"
            >−1</text>
          </g>

          <text
            class="ct-nom-axe ct-texte-cos"
            x="152"
            y="-26"
            text-anchor="end"
          >axe des cos</text>
          <text
            class="ct-nom-axe ct-texte-sin"
            x="9"
            y="-150"
          >axe des sin</text>

          <circle
            class="ct-cercle"
            cx="0"
            cy="0"
            r="100"
          />

          <!-- Les seize angles usuels, cliquables comme le reste du cercle. -->
          <g
            v-if="montrerRepere"
            class="ct-remarquables"
          >
            <template
              v-for="r in REMARQUABLES"
              :key="r"
            >
              <circle
                :cx="pt(r).x"
                :cy="pt(r).y"
                r="2.5"
              />
              <text
                v-if="!anglesOccultes.has(r)"
                :x="pt(r, 123).x"
                :y="pt(r, 123).y + 3"
              >{{ enRadians(r) }}</text>
            </template>
          </g>

          <!-- Diagonale et diamètre servant d'axes de symétrie. -->
          <line
            v-if="actif === 'symetries' && diagonale"
            class="ct-miroir"
            x1="-108"
            y1="108"
            x2="108"
            y2="-108"
          />
          <line
            v-if="actif === 'symetries' && diametre"
            class="ct-miroir"
            :x1="-M.x"
            :y1="-M.y"
            :x2="M.x"
            :y2="M.y"
          />

          <!-- Droite tangente : elle porte tan θ, et fuit à l'infini en π/2. -->
          <g
            v-if="actif === 'explorer' && montrerTangente"
            class="ct-tangente"
          >
            <line
              class="ct-droite-tangente"
              x1="100"
              y1="-148"
              x2="100"
              y2="148"
            />
            <template v-if="pointTangente">
              <line
                class="ct-pointille ct-trait-tan"
                x1="0"
                y1="0"
                x2="100"
                :y2="pointTangente.y"
              />
              <line
                class="ct-segment-tan"
                x1="100"
                y1="0"
                x2="100"
                :y2="pointTangente.y"
              />
              <text
                class="ct-texte-tan"
                x="107"
                :y="pointTangente.y / 2 + 4"
              >tan θ</text>
            </template>
          </g>

          <!-- Angle, projections et point courant. -->
          <g v-if="actif !== 'equations'">
            <path
              v-if="cheminSecteur"
              class="ct-secteur"
              :d="cheminSecteur"
            />
            <path
              v-if="cheminArc"
              class="ct-arc"
              :d="cheminArc"
            />
            <text
              v-if="cheminArc"
              class="ct-texte-angle"
              :x="etiquetteAngle.x"
              :y="etiquetteAngle.y + 4"
              text-anchor="middle"
            >θ</text>

            <line
              class="ct-pointille ct-trait-sin"
              :x1="M.x"
              :y1="M.y"
              x2="0"
              :y2="M.y"
            />
            <line
              class="ct-pointille ct-trait-cos"
              :x1="M.x"
              :y1="M.y"
              :x2="M.x"
              y2="0"
            />
            <line
              class="ct-segment-cos"
              x1="0"
              y1="0"
              :x2="M.x"
              y2="0"
            />
            <line
              class="ct-segment-sin"
              x1="0"
              y1="0"
              x2="0"
              :y2="M.y"
            />
            <text
              v-if="etiquetteCos"
              class="ct-texte-cos"
              :x="etiquetteCos.x"
              :y="etiquetteCos.y"
              text-anchor="middle"
            >cos θ</text>
            <text
              v-if="etiquetteSin"
              class="ct-texte-sin"
              :x="etiquetteSin.x"
              :y="etiquetteSin.y"
              :text-anchor="etiquetteSin.ancre"
            >sin θ</text>

            <line
              class="ct-rayon"
              x1="0"
              y1="0"
              :x2="M.x"
              :y2="M.y"
            />
          </g>

          <!-- Symétriques de M : chaque couleur rappelle son axe de symétrie. -->
          <g v-if="actif === 'symetries'">
            <template
              v-for="s in symetriesRendues"
              :key="s.id"
            >
              <template v-if="s.actif">
                <line
                  class="ct-rayon-sym"
                  x1="0"
                  y1="0"
                  :x2="s.point.x"
                  :y2="s.point.y"
                  :style="{ stroke: s.couleur }"
                />
                <circle
                  class="ct-point-sym"
                  :cx="s.point.x"
                  :cy="s.point.y"
                  r="4.5"
                  :style="{ fill: s.couleur }"
                />
              </template>
            </template>
          </g>

          <!-- Résolution d'équation : une droite, deux intersections. -->
          <g v-if="actif === 'equations'">
            <line
              v-if="eqFonction === 'cos'"
              class="ct-droite-eq ct-trait-cos"
              :x1="eqLigne"
              y1="-142"
              :x2="eqLigne"
              y2="142"
            />
            <line
              v-else
              class="ct-droite-eq ct-trait-sin"
              x1="-142"
              :y1="eqLigne"
              x2="142"
              :y2="eqLigne"
            />
            <template
              v-for="s in eqSolutions"
              :key="s"
            >
              <line
                class="ct-rayon"
                x1="0"
                y1="0"
                :x2="pt(s).x"
                :y2="pt(s).y"
              />
              <circle
                class="ct-point"
                :cx="pt(s).x"
                :cy="pt(s).y"
                r="5"
              />
              <text
                class="ct-texte-solution"
                :x="pt(s, 140).x"
                :y="pt(s, 140).y + 4"
                text-anchor="middle"
              >{{ angleCourt(s) }}</text>
            </template>
          </g>

          <!-- Réciproques : l'arc de restriction et l'angle effectivement renvoyé. -->
          <g v-if="actif === 'reciproques'">
            <path
              class="ct-arc-restriction"
              :d="recArc"
            />
            <line
              v-if="recFonction === 'arccos'"
              class="ct-droite-eq ct-trait-cos"
              :x1="M.x"
              y1="-142"
              :x2="M.x"
              y2="142"
            />
            <line
              v-else-if="recFonction === 'arcsin'"
              class="ct-droite-eq ct-trait-sin"
              x1="-142"
              :y1="M.y"
              x2="142"
              :y2="M.y"
            />
            <line
              v-else
              class="ct-droite-eq ct-trait-tan"
              :x1="-M.x * 1.4"
              :y1="-M.y * 1.4"
              :x2="M.x * 1.4"
              :y2="M.y * 1.4"
            />
            <template v-if="recPoint">
              <line
                class="ct-rayon-resultat"
                x1="0"
                y1="0"
                :x2="recPoint.x"
                :y2="recPoint.y"
              />
              <circle
                class="ct-point-resultat"
                :cx="recPoint.x"
                :cy="recPoint.y"
                r="5.5"
              />
              <text
                v-if="recEtiquette"
                class="ct-texte-solution"
                :x="recEtiquette.x"
                :y="recEtiquette.y + 4"
                text-anchor="middle"
              >{{ recTexte }}</text>
            </template>
          </g>

          <!-- Point M au-dessus de tout, avec sa zone de préhension. -->
          <circle
            v-if="actif !== 'equations'"
            class="ct-point"
            :cx="M.x"
            :cy="M.y"
            r="5.5"
          />
          <circle
            v-if="deplacable"
            class="ct-poignee"
            :cx="M.x"
            :cy="M.y"
            r="15"
            tabindex="0"
            role="slider"
            aria-label="Angle θ, en degrés"
            aria-valuemin="0"
            aria-valuemax="359"
            :aria-valuenow="deg"
            :aria-valuetext="`${enRadians(deg)}, soit ${deg} degrés`"
            @pointerdown="debutDeplacement"
            @pointermove="pendantDeplacement"
            @pointerup="finDeplacement"
            @pointercancel="finDeplacement"
            @keydown="auClavier"
          />
        </svg>

        <!-- Commandes de l'angle : curseur, angles usuels, options d'affichage. -->
        <div
          v-if="deplacable"
          class="mt-3 space-y-3"
        >
          <div class="flex items-center gap-3">
            <label
              :for="`${uid}-angle`"
              class="shrink-0 text-xs text-muted"
            >Angle θ</label>
            <input
              :id="`${uid}-angle`"
              v-model.number="deg"
              class="ct-curseur"
              type="range"
              min="0"
              max="359"
              step="1"
            >
            <output class="w-24 shrink-0 text-right text-xs tabular-nums text-highlighted">
              {{ enRadians(deg) }} · {{ deg }}°
            </output>
          </div>

          <div class="flex flex-wrap gap-1">
            <button
              v-for="r in REMARQUABLES"
              :key="r"
              type="button"
              class="ct-puce"
              :class="deg === r && 'ct-puce-active'"
              @click="deg = r"
            >
              {{ enRadians(r) }}
            </button>
          </div>
        </div>

        <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          <label class="ct-case">
            <input
              v-model="montrerRepere"
              type="checkbox"
            >
            <span>Angles usuels</span>
          </label>
          <label
            v-if="deplacable"
            class="ct-case"
          >
            <input
              v-model="aimanter"
              type="checkbox"
            >
            <span>Aimanter</span>
          </label>
          <label
            v-if="actif === 'explorer'"
            class="ct-case"
          >
            <input
              v-model="montrerTangente"
              type="checkbox"
            >
            <span>Montrer tan θ</span>
          </label>
        </div>
      </div>

      <!-- Colonne de lecture : ce que le dessin dit, écrit en toutes lettres. -->
      <div class="ct-lecture min-w-0">
        <template v-if="actif === 'explorer' || actif === 'symetries'">
          <p class="ct-titre-lecture">
            θ = {{ enRadians(deg) }} <span class="text-dimmed">({{ deg }}°)</span>
          </p>
          <dl class="ct-valeurs">
            <dt class="ct-texte-cos">
              cos θ
            </dt>
            <dd>{{ valeurTexte(cosV) }}</dd>
            <dt class="ct-texte-sin">
              sin θ
            </dt>
            <dd>{{ valeurTexte(sinV) }}</dd>
            <dt class="ct-texte-tan">
              tan θ
            </dt>
            <dd>{{ tanV === null ? 'non définie (cos θ = 0)' : valeurTexte(tanV) }}</dd>
          </dl>
          <p class="ct-note">
            {{ quadrantTexte }}
          </p>
        </template>

        <template v-if="actif === 'explorer'">
          <p class="ct-note">
            Le point a pour coordonnées <strong class="text-highlighted">M(cos θ ; sin θ)</strong>.
            Comme il est à distance 1 de l’origine, Pythagore donne
            <strong class="text-highlighted">cos²θ + sin²θ = 1</strong>, pour tout angle.
          </p>
          <p class="ct-note">
            Un tour complet vaut 2π : ajouter 2π à θ ramène au même point, d’où la périodicité
            de cos et sin. Et tan θ = sin θ / cos θ se lit sur la droite verticale d’abscisse 1.
          </p>
        </template>

        <template v-if="actif === 'symetries'">
          <p class="ct-note">
            Les formules d’angles associés ne sont rien d’autre que quatre symétries du cercle.
            Coche-les pour voir où atterrit le point.
          </p>
          <ul class="ct-legende">
            <li
              v-for="s in symetriesRendues"
              :key="s.id"
            >
              <button
                type="button"
                class="ct-legende-bouton"
                :class="!s.actif && 'ct-legende-eteinte'"
                :aria-pressed="s.actif"
                @click="basculerSymetrie(s.id)"
              >
                <span
                  class="ct-pastille"
                  :style="{ backgroundColor: s.couleur }"
                />
                <span class="min-w-0 flex-1">
                  <span class="block font-medium text-highlighted">
                    {{ s.titre }} = {{ enRadians(s.image) }}
                    <span class="text-dimmed">({{ s.image }}°)</span>
                  </span>
                  <span class="block text-xs text-dimmed">{{ s.miroir }}</span>
                  <span
                    v-for="l in s.lignes"
                    :key="l"
                    class="block text-xs tabular-nums"
                  >{{ l }}</span>
                </span>
              </button>
            </li>
          </ul>
        </template>

        <template v-if="actif === 'equations'">
          <p class="ct-titre-lecture">
            Résoudre {{ eqFonction }} x = k
          </p>
          <div class="flex gap-1">
            <button
              type="button"
              class="ct-onglet"
              :class="eqFonction === 'cos' && 'ct-onglet-actif'"
              @click="eqFonction = 'cos'"
            >
              cos x = k
            </button>
            <button
              type="button"
              class="ct-onglet"
              :class="eqFonction === 'sin' && 'ct-onglet-actif'"
              @click="eqFonction = 'sin'"
            >
              sin x = k
            </button>
          </div>

          <div class="mt-3 flex items-center gap-3">
            <label
              :for="`${uid}-k`"
              class="shrink-0 text-xs text-muted"
            >k</label>
            <input
              :id="`${uid}-k`"
              v-model.number="eqValeur"
              class="ct-curseur"
              type="range"
              min="-1.3"
              max="1.3"
              step="0.01"
            >
            <output class="w-14 shrink-0 text-right text-xs tabular-nums text-highlighted">
              {{ nombre(eqValeur, 2) }}
            </output>
          </div>

          <div class="mt-2 flex flex-wrap gap-1">
            <button
              v-for="v in VALEURS_CLES"
              :key="v.t"
              type="button"
              class="ct-puce"
              :class="memeValeur(eqValeur, v.v) && 'ct-puce-active'"
              @click="eqValeur = v.v"
            >
              {{ v.t }}
            </button>
          </div>

          <p
            v-if="!eqSolutions.length"
            class="ct-note"
          >
            Aucune solution : un cosinus comme un sinus reste toujours entre −1 et 1. La droite
            ne coupe plus le cercle.
          </p>
          <template v-else>
            <p class="ct-note">
              La droite coupe le cercle en
              <strong class="text-highlighted">{{ eqSolutions.length === 1 ? 'un seul point' : 'deux points' }}</strong> :
              il y a donc {{ eqSolutions.length === 1 ? 'une' : 'deux' }} solution{{ eqSolutions.length === 1 ? '' : 's' }}
              par tour, et non une seule.
            </p>
            <p class="ct-note">
              Dans [0, 2π[ :
              <strong class="text-highlighted">{{ eqSolutions.map(angleCourt).join('  et  ') }}</strong>
            </p>
            <p class="ct-note">
              Toutes les solutions, avec k ∈ ℤ :
            </p>
            <ul class="ct-familles">
              <li
                v-for="f in eqFamilles"
                :key="f"
              >
                {{ f }}
              </li>
            </ul>
          </template>
        </template>

        <template v-if="actif === 'reciproques'">
          <div class="flex flex-wrap gap-1">
            <button
              v-for="f in REC_FONCTIONS"
              :key="f"
              type="button"
              class="ct-onglet"
              :class="recFonction === f && 'ct-onglet-actif'"
              @click="recFonction = f"
            >
              {{ f }}
            </button>
          </div>

          <p class="ct-note">
            <strong class="text-highlighted">{{ recFonction }}</strong> ne renvoie jamais qu’un
            angle de <strong class="text-highlighted">{{ REC[recFonction].intervalle }}</strong> —
            l’arc épais sur le cercle. C’est le seul moyen d’en faire une vraie fonction.
          </p>
          <p class="ct-titre-lecture">
            θ = {{ enRadians(deg) }} <span class="text-dimmed">({{ deg }}°)</span>
          </p>
          <dl class="ct-valeurs">
            <dt v-if="recFonction === 'arccos'">
              cos θ
            </dt>
            <dt v-else-if="recFonction === 'arcsin'">
              sin θ
            </dt>
            <dt v-else>
              tan θ
            </dt>
            <dd>
              {{ recFonction === 'arccos'
                ? valeurTexte(cosV)
                : recFonction === 'arcsin'
                  ? valeurTexte(sinV)
                  : (tanV === null ? 'non définie' : valeurTexte(tanV)) }}
            </dd>
            <dt>{{ recFonction }}(…)</dt>
            <dd>{{ recResultat === null ? 'non définie' : angleTexte(recResultat) }}</dd>
          </dl>
          <p class="ct-note">
            {{ recCommentaire }}
          </p>
          <p class="ct-note">
            Dans l’autre sens en revanche, aucun piège :
            {{ recFonction === 'arccos' ? 'cos(arccos x) = x' : recFonction === 'arcsin' ? 'sin(arcsin x) = x' : 'tan(arctan x) = x' }}
            sur tout le domaine.
          </p>
        </template>
      </div>
    </div>

    <p class="border-t border-default px-4 py-2 text-xs text-dimmed">
      Clique n’importe où dans le cercle pour y placer M, ou fais-le glisser. Au clavier :
      flèches pour 1°, Maj + flèches pour 15°.
    </p>
  </figure>
</template>
