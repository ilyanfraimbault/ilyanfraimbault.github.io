import type { InjectionKey, Ref } from 'vue'

export interface CoursExemplesApi {
  /** Un exemple se déclare au montage pour devenir la cible d'un renvoi. */
  enregistrer: (id: string, ouvrir: () => void) => void
  oublier: (id: string) => void
  /** Ouvre l'exemple `id` et y amène la vue, en mémorisant d'où l'on vient. */
  voir: (id: string, depuisQuestion?: string | null) => void
  /** Exemple à mettre brièvement en évidence après un renvoi. */
  flash: Ref<string | null>
  /** Couple exemple/question du dernier renvoi, pour proposer le retour. */
  retour: Ref<{ exemple: string, question: string } | null>
  revenir: () => void
}

export const coursExemplesKey: InjectionKey<CoursExemplesApi> = Symbol('cours-exemples')

/**
 * La fiche de révision fournit de quoi se déplier elle-même : un exemple qu'on
 * cible depuis un indice doit pouvoir ouvrir le conteneur qui l'héberge avant
 * de s'ouvrir à son tour, sinon le défilement viserait un élément replié.
 */
export const coursFicheKey: InjectionKey<() => void> = Symbol('cours-fiche')

async function amenerEnVue(id: string) {
  // `nextTick` garantit que le bloc visé est bien déplié dans le DOM avant de
  // viser sa position. Déplier la fiche insère ensuite des milliers de pixels
  // au-dessus de la cible, et le navigateur compense de son côté par l'ancrage
  // de défilement : une position calculée en une seule fois serait fausse. On
  // recentre donc quelques fois, le temps que la mise en page se stabilise.
  // Le déplacement est volontairement instantané : animer un saut de plusieurs
  // écrans est long et désorientant, et la mise en évidence signale l'arrivée.
  await nextTick()

  const centrer = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'center' })
  }

  centrer()
  for (const delai of [16, 60, 150]) setTimeout(centrer, delai)
}

/** Registre des exemples d'une page de cours, partagé avec les indices. */
export function provideCoursExemples(): CoursExemplesApi {
  const registre = new Map<string, () => void>()
  const flash = ref<string | null>(null)
  const retour = ref<{ exemple: string, question: string } | null>(null)
  let minuteur: ReturnType<typeof setTimeout> | undefined

  const api: CoursExemplesApi = {
    enregistrer: (id, ouvrir) => { registre.set(id, ouvrir) },
    oublier: (id) => { registre.delete(id) },
    voir: (id, depuisQuestion) => {
      const ouvrir = registre.get(id)
      if (!ouvrir) return
      ouvrir()

      retour.value = depuisQuestion ? { exemple: id, question: depuisQuestion } : null

      flash.value = id
      clearTimeout(minuteur)
      minuteur = setTimeout(() => {
        if (flash.value === id) flash.value = null
      }, 2000)

      amenerEnVue(`exemple-${id}`)
    },
    flash,
    retour,
    revenir: () => {
      const question = retour.value?.question
      retour.value = null
      if (question) amenerEnVue(question)
    }
  }

  provide(coursExemplesKey, api)

  return api
}

/** Renvoie null hors d'une page de cours. */
export function useCoursExemples(): CoursExemplesApi | null {
  return inject(coursExemplesKey, null)
}
