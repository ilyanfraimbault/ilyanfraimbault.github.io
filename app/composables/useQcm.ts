import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue'
import type { QcmTentative } from './useQcmHistorique'

export interface QcmFiche {
  /** Identifiant DOM de la question, cible des liens du récapitulatif. */
  id: string
  /** Repère affiché, par exemple « 12. ». */
  label?: string
  /** Lettre attendue. */
  bonne: string
  /** Rang d'apparition, pour ordonner le récapitulatif. */
  ordre: number
  /** Lettre choisie, ou null tant que la question n'a pas été traitée. */
  choix: string | null
}

export interface QcmApi {
  enregistrer: (fiche: Omit<QcmFiche, 'ordre' | 'choix'>) => void
  oublier: (id: string) => void
  repondre: (id: string, choix: string | null) => void
  /** Passe à vrai quand la copie est rendue : c'est ce qui déverrouille les corrections. */
  corrige: Readonly<Ref<boolean>>
  /** Repères ratés au passage précédent, pour que chaque question sache d'où elle vient. */
  ratesPrecedents: Readonly<Ref<string[]>>
}

export const qcmKey: InjectionKey<QcmApi> = Symbol('qcm')

/**
 * État partagé d'un QCM. Les questions se déclarent au montage et signalent
 * chaque changement de réponse ; le conteneur n'a ainsi qu'un seul endroit où
 * compter les réponses et le score, et les questions ignorent tout du barème
 * tant que la copie n'est pas rendue.
 *
 * L'identifiant, s'il est fourni, sert à retrouver dans le navigateur les
 * passages précédents sur ce même QCM : c'est ce qui permet de comparer la
 * copie rendue à la précédente plutôt que de la juger dans le vide.
 */
export function provideQcm(identifiant?: MaybeRefOrGetter<string | null>) {
  const fiches = reactive(new Map<string, QcmFiche>())
  const corrige = ref(false)
  let compteur = 0

  const { tentatives, ajouter, effacer } = useQcmHistorique(() => toValue(identifiant ?? null))

  // Le point de comparaison est figé au chargement, puis ne bouge qu'entre deux
  // passages : sans cela, enregistrer la copie en cours ferait d'elle sa propre
  // référence et toute progression disparaîtrait au moment même de l'afficher.
  const reference = ref<QcmTentative | null>(null)
  onMounted(() => {
    reference.value = tentatives.value.at(-1) ?? null
  })

  const api: QcmApi = {
    enregistrer: ({ id, label, bonne }) => {
      fiches.set(id, { id, label, bonne, ordre: compteur++, choix: null })
    },
    oublier: (id) => { fiches.delete(id) },
    repondre: (id, choix) => {
      const fiche = fiches.get(id)
      // Une réponse ne se change plus une fois la copie rendue.
      if (fiche && !corrige.value) fiche.choix = choix
    },
    corrige: readonly(corrige),
    ratesPrecedents: computed(() => reference.value?.ratees ?? [])
  }

  provide(qcmKey, api)

  const liste = computed(() => [...fiches.values()].sort((a, b) => a.ordre - b.ordre))
  const total = computed(() => liste.value.length)
  const repondues = computed(() => liste.value.filter(f => f.choix !== null).length)
  const justes = computed(() => liste.value.filter(f => f.choix === f.bonne).length)
  const ratees = computed(() => liste.value.filter(f => f.choix !== f.bonne))

  /** Repères ratés cette fois-ci, dans la forme retenue par l'historique. */
  const reperesRates = computed(() => ratees.value.map(f => f.label).filter((l): l is string => !!l))

  const precedente = computed(() => reference.value)
  const ecart = computed(() => precedente.value ? justes.value - precedente.value.justes : null)

  /** Ratées la fois d'avant et encore aujourd'hui : ce sont elles qui coûtent. */
  const encoreRatees = computed(() =>
    precedente.value ? ratees.value.filter(f => f.label && precedente.value!.ratees.includes(f.label)) : [])

  /** Ratées la fois d'avant, justes aujourd'hui : le terrain effectivement gagné. */
  const rattrapees = computed(() => {
    if (!precedente.value) return []
    return precedente.value.ratees.filter(label =>
      liste.value.some(f => f.label === label && f.choix === f.bonne))
  })

  function corriger() {
    corrige.value = true
    ajouter({ t: Date.now(), justes: justes.value, total: total.value, ratees: reperesRates.value })
  }

  function recommencer() {
    // La copie qu'on vient de rendre devient la référence du passage suivant.
    reference.value = tentatives.value.at(-1) ?? null
    corrige.value = false
    for (const fiche of fiches.values()) fiche.choix = null
  }

  function oublierHistorique() {
    effacer()
    reference.value = null
  }

  return {
    corrige,
    total,
    repondues,
    justes,
    ratees,
    corriger,
    recommencer,
    tentatives,
    precedente,
    ecart,
    encoreRatees,
    rattrapees,
    oublierHistorique
  }
}

/** Renvoie null hors d'un bloc `qcm`. */
export function useQcm(): QcmApi | null {
  return inject(qcmKey, null)
}
