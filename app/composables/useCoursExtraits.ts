import type { InjectionKey } from 'vue'

export interface CoursExtraitsApi {
  /** Un extrait se déclare au montage pour devenir la cible d'un bouton « Cours ». */
  enregistrer: (id: string, ouvrir: () => void) => void
  oublier: (id: string) => void
  /** Déploie le tiroir de l'extrait `id`. */
  ouvrir: (id: string) => void
}

export const coursExtraitsKey: InjectionKey<CoursExtraitsApi> = Symbol('cours-extraits')

/**
 * Registre des extraits de cours d'une fiche d'exercices, partagé avec les
 * questions. Le même rappel sert souvent à plusieurs questions d'un niveau :
 * on l'écrit une fois dans le Markdown, et chaque question le vise par
 * identifiant plutôt que de le recopier dans un slot.
 */
export function provideCoursExtraits(): CoursExtraitsApi {
  const registre = new Map<string, () => void>()

  const api: CoursExtraitsApi = {
    enregistrer: (id, ouvrir) => { registre.set(id, ouvrir) },
    oublier: (id) => { registre.delete(id) },
    ouvrir: (id) => { registre.get(id)?.() }
  }

  provide(coursExtraitsKey, api)

  return api
}

/** Renvoie null hors d'une page de cours. */
export function useCoursExtraits(): CoursExtraitsApi | null {
  return inject(coursExtraitsKey, null)
}
