import type { InjectionKey, Ref } from 'vue'

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
}

export const qcmKey: InjectionKey<QcmApi> = Symbol('qcm')

/**
 * État partagé d'un QCM. Les questions se déclarent au montage et signalent
 * chaque changement de réponse ; le conteneur n'a ainsi qu'un seul endroit où
 * compter les réponses et le score, et les questions ignorent tout du barème
 * tant que la copie n'est pas rendue.
 */
export function provideQcm() {
  const fiches = reactive(new Map<string, QcmFiche>())
  const corrige = ref(false)
  let compteur = 0

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
    corrige: readonly(corrige)
  }

  provide(qcmKey, api)

  const liste = computed(() => [...fiches.values()].sort((a, b) => a.ordre - b.ordre))
  const total = computed(() => liste.value.length)
  const repondues = computed(() => liste.value.filter(f => f.choix !== null).length)
  const justes = computed(() => liste.value.filter(f => f.choix === f.bonne).length)
  const ratees = computed(() => liste.value.filter(f => f.choix !== f.bonne))

  function corriger() {
    corrige.value = true
  }

  function recommencer() {
    corrige.value = false
    for (const fiche of fiches.values()) fiche.choix = null
  }

  return { corrige, total, repondues, justes, ratees, corriger, recommencer }
}

/** Renvoie null hors d'un bloc `qcm`. */
export function useQcm(): QcmApi | null {
  return inject(qcmKey, null)
}
