/**
 * Nature d'une page de la section « cours ». Une matière mélange plusieurs sortes
 * de pages qui ne se lisent pas de la même façon : on les distingue par une
 * pastille, dans les listes de liens comme en tête de la page elle-même.
 */
export type CoursType = 'cours' | 'exercices' | 'entrainement' | 'qcm'

export interface CoursTypeInfo {
  label: string
  icone: string
  couleur: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
  /** Une ligne qui dit à quoi sert cette sorte de page. */
  aide: string
}

export const coursTypes: Record<CoursType, CoursTypeInfo> = {
  cours: {
    label: 'Cours',
    icone: 'i-lucide-book-open-text',
    couleur: 'info',
    aide: 'Le cours du chapitre, à lire ou à consulter au besoin.'
  },
  exercices: {
    label: 'Exercices',
    icone: 'i-lucide-pencil-line',
    couleur: 'primary',
    aide: 'Les exercices du TD, corrigés, avec indice et solution en fenêtre.'
  },
  entrainement: {
    label: 'Entraînement',
    icone: 'i-lucide-list-checks',
    couleur: 'success',
    aide: 'Des questions en paliers de difficulté croissante, à faire dans l\'ordre.'
  },
  qcm: {
    label: 'QCM',
    icone: 'i-lucide-circle-check-big',
    couleur: 'warning',
    aide: 'Vingt questions à choix unique : on répond à tout, puis on corrige d\'un coup.'
  }
}

export function coursTypeInfo(type?: string | null): CoursTypeInfo | null {
  if (!type) return null
  return coursTypes[type as CoursType] ?? null
}
