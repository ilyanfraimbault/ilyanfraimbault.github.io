import type { MaybeRefOrGetter, Ref } from 'vue'

export interface QcmTentative {
  /** Horodatage de la correction, en millisecondes. */
  t: number
  justes: number
  total: number
  /** Repères des questions ratées, « 12. » par exemple. */
  ratees: string[]
}

/** Bump à changer si la forme d'une tentative évolue : les anciennes seront ignorées. */
const VERSION = 'v1'

/** Au-delà, les plus anciennes tentatives partent : la progression récente suffit. */
const MAX_TENTATIVES = 24

function cleStockage(id: string) {
  return `qcm-historique:${VERSION}:${id}`
}

/**
 * Toutes les lectures et écritures passent par ici : en navigation privée, avec
 * les cookies bloqués ou le quota plein, `localStorage` lève. Un QCM sans
 * historique reste parfaitement utilisable, donc on avale l'erreur.
 */
function lire(id: string): QcmTentative[] {
  try {
    const brut = localStorage.getItem(cleStockage(id))
    if (!brut) return []
    const donnees = JSON.parse(brut)
    if (!Array.isArray(donnees)) return []
    return donnees.filter((t): t is QcmTentative =>
      !!t && typeof t.t === 'number' && typeof t.justes === 'number'
      && typeof t.total === 'number' && Array.isArray(t.ratees))
  } catch {
    return []
  }
}

function ecrire(id: string, tentatives: QcmTentative[]) {
  try {
    localStorage.setItem(cleStockage(id), JSON.stringify(tentatives))
  } catch {
    // Rien à faire : l'historique est un confort, pas une donnée à sauver.
  }
}

/**
 * Mémorise les passages successifs sur un même QCM, dans le navigateur.
 *
 * L'identifiant peut être `null` — un QCM sans titre n'a pas de clé stable
 * d'une visite à l'autre —, auquel cas la mémoire est simplement inactive.
 */
export function useQcmHistorique(identifiant: MaybeRefOrGetter<string | null>) {
  const tentatives = ref<QcmTentative[]>([]) as Ref<QcmTentative[]>

  // Le rendu serveur n'a pas de `localStorage` : on ne charge qu'au montage,
  // ce qui évite aussi toute divergence d'hydratation.
  onMounted(() => {
    const id = toValue(identifiant)
    tentatives.value = id ? lire(id) : []
  })

  function ajouter(tentative: QcmTentative) {
    const id = toValue(identifiant)
    if (!id) return
    tentatives.value = [...tentatives.value, tentative].slice(-MAX_TENTATIVES)
    ecrire(id, tentatives.value)
  }

  function effacer() {
    const id = toValue(identifiant)
    tentatives.value = []
    if (!id) return
    try {
      localStorage.removeItem(cleStockage(id))
    } catch {
      // Idem : l'effacement en mémoire suffit pour la session en cours.
    }
  }

  return { tentatives, ajouter, effacer }
}
