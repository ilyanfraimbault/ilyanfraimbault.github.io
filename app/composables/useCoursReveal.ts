import type { InjectionKey, Ref } from 'vue'

export interface CoursRevealApi {
  openTick: Ref<number>
  closeTick: Ref<number>
  openAll: () => void
  closeAll: () => void
}

export const coursRevealKey: InjectionKey<CoursRevealApi> = Symbol('cours-reveal')

/**
 * Fournit les commandes « tout afficher / tout masquer » à l'ensemble des
 * questions d'une page de cours. Les questions réagissent aux compteurs plutôt
 * qu'à un booléen partagé, ce qui leur laisse leur état individuel entre deux
 * commandes globales.
 */
export function provideCoursReveal(): CoursRevealApi {
  const openTick = ref(0)
  const closeTick = ref(0)

  const api: CoursRevealApi = {
    openTick,
    closeTick,
    openAll: () => { openTick.value++ },
    closeAll: () => { closeTick.value++ }
  }

  provide(coursRevealKey, api)

  return api
}

/** Renvoie null lorsqu'une question est utilisée hors d'une page de cours. */
export function useCoursReveal(): CoursRevealApi | null {
  return inject(coursRevealKey, null)
}
