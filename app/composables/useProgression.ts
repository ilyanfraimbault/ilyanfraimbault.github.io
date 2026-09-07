import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue'

/**
 * Ce qu'une fiche retient d'elle-même entre deux visites. Le `total` y est
 * délibérément recopié : une carte de lien ne connaît pas le contenu de la page
 * qu'elle vise, et c'est la fiche, en s'affichant, qui le lui apprend.
 */
export interface ProgressionFiche {
  total: number
  /** Identité de question → lettre trouvée, ou « auto » pour une auto-évaluation. */
  faites: Record<string, string>
  maj: number
}

/** Bump à changer si la forme évolue : les anciens enregistrements seront ignorés. */
const VERSION = 'v1'

function cleStockage(chemin: string) {
  return `progression:${VERSION}:${cheminCanonique(chemin)}`
}

/**
 * Toutes les lectures et écritures passent par ici. En navigation privée, avec
 * le stockage bloqué ou le quota plein, `localStorage` lève : une fiche sans
 * mémoire reste parfaitement utilisable, donc on avale l'erreur.
 */
function lire(chemin: string): ProgressionFiche | null {
  try {
    const brut = localStorage.getItem(cleStockage(chemin))
    if (!brut) return null
    const donnees = JSON.parse(brut)
    if (!donnees || typeof donnees.total !== 'number' || typeof donnees.faites !== 'object') return null
    const faites: Record<string, string> = {}
    for (const [id, reponse] of Object.entries(donnees.faites as Record<string, unknown>)) {
      if (typeof reponse === 'string') faites[id] = reponse
    }
    return { total: donnees.total, faites, maj: typeof donnees.maj === 'number' ? donnees.maj : 0 }
  } catch {
    return null
  }
}

function ecrire(chemin: string, fiche: ProgressionFiche) {
  try {
    localStorage.setItem(cleStockage(chemin), JSON.stringify(fiche))
  } catch {
    // Rien à faire : la progression est un confort, pas une donnée à sauver.
  }
}

export interface ProgressionApi {
  /** Une question se déclare au montage. Une identité nulle n'est pas comptée. */
  declarer: (id: string | null) => void
  oublier: (id: string | null) => void
  /** Signale une question trouvée : la lettre, ou « auto » en auto-évaluation. */
  reussir: (id: string | null, reponse: string) => void
  /** Retire une question de la progression — l'auto-évaluation permet de se dédire. */
  annuler: (id: string | null) => void
  /** Ce que la mémoire sait de cette question, ou null si elle reste à faire. */
  memoire: (id: string | null) => string | null
}

export const progressionKey: InjectionKey<ProgressionApi> = Symbol('progression')

/**
 * Progression d'une fiche : combien de ses questions ont fini par être trouvées.
 *
 * Les blocs déclarent leurs questions au montage et signalent les réussites ; la
 * page n'a ainsi qu'un seul endroit où compter, et le décompte vaut aussi bien
 * pour un exercice à correction immédiate que pour un QCM corrigé d'un bloc.
 */
export function provideProgression(chemin: MaybeRefOrGetter<string>) {
  // Les questions présentes sur la page, et parmi elles celles qui sont trouvées.
  const declarees = reactive(new Set<string>())
  const faites = reactive(new Map<string, string>())
  const chargee = ref(false)

  // Le rendu serveur n'a pas de `localStorage` : on ne lit qu'au montage, ce qui
  // évite aussi toute divergence d'hydratation sur un site prérendu. Les enfants
  // se montent avant le parent, donc les questions sont déjà déclarées ici.
  onMounted(() => {
    const enregistre = lire(toValue(chemin))
    if (enregistre) {
      for (const [id, reponse] of Object.entries(enregistre.faites)) faites.set(id, reponse)
    }
    chargee.value = true
  })

  const api: ProgressionApi = {
    declarer: (id) => { if (id) declarees.add(id) },
    oublier: (id) => { if (id) declarees.delete(id) },
    reussir: (id, reponse) => { if (id) faites.set(id, reponse) },
    annuler: (id) => { if (id) faites.delete(id) },
    memoire: id => (id ? faites.get(id) ?? null : null)
  }

  provide(progressionKey, api)

  const total = computed(() => declarees.size)
  const reussies = computed(() => [...declarees].filter(id => faites.has(id)).length)
  const pourcentage = computed(() => total.value ? Math.round(100 * reussies.value / total.value) : 0)

  // On n'écrit qu'une fois la mémoire lue : persister avant reviendrait à effacer
  // ce qu'on n'a pas encore chargé. Les entrées dont la question a disparu du
  // contenu sont élaguées au passage, sinon le décompte gonflerait sans fin.
  watch([chargee, total, () => faites.size], () => {
    // Une page sans question — un index, un sommaire — n'a rien à mémoriser, et
    // écrire pour elle sèmerait des clés vides dans le stockage.
    if (!chargee.value || !total.value) return
    const retenues: Record<string, string> = {}
    for (const id of declarees) {
      const reponse = faites.get(id)
      if (reponse) retenues[id] = reponse
    }
    ecrire(toValue(chemin), { total: total.value, faites: retenues, maj: Date.now() })
  })

  function oublierProgression() {
    faites.clear()
  }

  return { total, reussies, pourcentage, oublierProgression }
}

/** Renvoie null hors d'une page de cours. */
export function useProgression(): ProgressionApi | null {
  return inject(progressionKey, null)
}

export interface BlocApi {
  /** Slug du titre du bloc, seconde pièce de l'identité de ses questions. */
  slug: Readonly<Ref<string | null>>
  ajouter: (id: string | null) => void
  retirer: (id: string | null) => void
}

export const blocKey: InjectionKey<BlocApi> = Symbol('bloc-questions')

/**
 * Un bloc de questions — un exercice, un QCM — prête son titre à ses questions
 * pour qu'elles composent une identité stable, et tient la liste de celles qu'il
 * contient afin d'afficher son propre décompte.
 */
export function provideBloc(titre: MaybeRefOrGetter<string | undefined>) {
  const slug = computed(() => {
    const valeur = toValue(titre)
    return valeur ? slugifier(valeur) : null
  })
  const ids = reactive(new Set<string>())

  provide(blocKey, {
    slug,
    ajouter: (id) => { if (id) ids.add(id) },
    retirer: (id) => { if (id) ids.delete(id) }
  })

  return { slug, ids }
}

/** Renvoie null pour une question posée hors d'un bloc. */
export function useBloc(): BlocApi | null {
  return inject(blocKey, null)
}

/**
 * Nombre de questions de chaque fiche, compté au build (voir le hook
 * `content:file:afterParse` de nuxt.config.ts). C'est ce qui permet à une carte
 * d'annoncer « 0 / 34 » sur une fiche jamais ouverte, et de rendre sa barre dès
 * le serveur plutôt que de la faire surgir après l'hydratation.
 *
 * La clé d'`useAsyncData` est fixe : les quinze cartes d'un index partagent donc
 * une seule requête, sérialisée une fois dans la charge utile de la page.
 */
export function useComptesQuestions() {
  const { data } = useAsyncData('cours-comptes', async () => {
    const lignes = await queryCollection('cours').select('path', 'questions').all()
    return Object.fromEntries(lignes.map(l => [cheminCanonique(l.path), l.questions ?? 0]))
  }, { default: () => ({} as Record<string, number>) })

  return data
}

/**
 * Lecture seule de la progression d'une autre fiche, pour les cartes de lien.
 * Tant que la fiche n'a jamais été ouverte, il n'y a rien à afficher — et c'est
 * exactement l'information juste.
 */
export function useProgressionFiche(chemin: MaybeRefOrGetter<string>) {
  const fiche = ref<ProgressionFiche | null>(null) as Ref<ProgressionFiche | null>

  onMounted(() => {
    fiche.value = lire(toValue(chemin))
  })

  const total = computed(() => fiche.value?.total ?? 0)
  const reussies = computed(() => {
    const f = fiche.value
    if (!f) return 0
    // Le total fait foi : une mémoire plus vieille que le contenu ne doit pas
    // afficher « 23 / 20 ».
    return Math.min(Object.keys(f.faites).length, f.total)
  })
  const commencee = computed(() => total.value > 0 && reussies.value > 0)

  return { total, reussies, commencee }
}
