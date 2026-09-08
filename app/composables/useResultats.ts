import type { QcmTentative } from './useQcmHistorique'
import type { ProgressionFiche } from './useProgression'

/**
 * Le format d'export. Il est fait pour être relu par un humain ou par un
 * assistant, pas seulement réimporté : d'où les chemins en clair, les dates en
 * ISO, et les intitulés des fiches recopiés à côté de leur chemin.
 */
export const FORMAT_RESULTATS = 'resultats-cours'
export const VERSION_RESULTATS = 1

export interface FicheResultat {
  chemin: string
  titre?: string
  /** cours, exercices, entrainement ou qcm. */
  type?: string
  /** Nombre de questions de la fiche au moment de la dernière visite. */
  total: number
  reussies: number
  /** Repères des questions trouvées, sous la forme « bloc#label ». */
  questions: string[]
  /** Dernière modification, en ISO 8601. */
  maj: string
}

export interface QcmResultat {
  chemin: string
  titre?: string
  /** Slug du bloc, utile quand une page porte plusieurs QCM. */
  bloc: string
  tentatives: { date: string, justes: number, total: number, ratees: string[] }[]
}

export interface ResultatsExport {
  format: typeof FORMAT_RESULTATS
  version: number
  exporte_le: string
  fiches: FicheResultat[]
  qcm: QcmResultat[]
}

/** Métadonnées d'une fiche, telles que la collection les connaît. */
export type Repertoire = Record<string, { titre?: string, type?: string }>

const PREFIXE_PROGRESSION = 'progression:v1:'
const PREFIXE_HISTORIQUE = 'qcm-historique:v1:'

function iso(t: number) {
  return new Date(t || Date.now()).toISOString()
}

/**
 * Rassemble tout ce que le navigateur a retenu. Comme partout ailleurs, la
 * lecture est gardée : un stockage inaccessible rend un export vide plutôt
 * qu'une erreur.
 */
export function rassemblerResultats(repertoire: Repertoire = {}): ResultatsExport {
  const fiches: FicheResultat[] = []
  const qcm: QcmResultat[] = []

  try {
    for (const cle of Object.keys(localStorage)) {
      if (cle.startsWith(PREFIXE_PROGRESSION)) {
        const chemin = cle.slice(PREFIXE_PROGRESSION.length)
        const donnees = JSON.parse(localStorage.getItem(cle) || 'null') as ProgressionFiche | null
        if (!donnees || typeof donnees.total !== 'number' || !donnees.faites) continue
        // Les identités stockées portent le chemin de la fiche en préfixe : il
        // est déjà dans `chemin`, on ne le répète pas sur chaque question.
        // Tri naturel : sans lui, « 10. » passerait avant « 2. » et la liste ne
        // suivrait plus l'ordre de la fiche.
        const questions = Object.keys(donnees.faites)
          .map(id => (id.startsWith(chemin + '#') ? id.slice(chemin.length + 1) : id))
          .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))
        fiches.push({
          chemin,
          ...repertoire[chemin],
          total: donnees.total,
          reussies: questions.length,
          questions,
          maj: iso(donnees.maj)
        })
      } else if (cle.startsWith(PREFIXE_HISTORIQUE)) {
        const identifiant = cle.slice(PREFIXE_HISTORIQUE.length)
        const [chemin = identifiant, bloc = ''] = identifiant.split('#')
        const donnees = JSON.parse(localStorage.getItem(cle) || 'null') as QcmTentative[] | null
        if (!Array.isArray(donnees) || !donnees.length) continue
        qcm.push({
          chemin,
          ...repertoire[chemin],
          bloc,
          tentatives: donnees
            .filter(t => t && typeof t.justes === 'number' && typeof t.total === 'number')
            .map(t => ({
              date: iso(t.t),
              justes: t.justes,
              total: t.total,
              ratees: Array.isArray(t.ratees) ? t.ratees : []
            }))
        })
      }
    }
  } catch {
    // Stockage inaccessible : on rend ce qu'on a pu lire.
  }

  fiches.sort((a, b) => a.chemin.localeCompare(b.chemin))
  qcm.sort((a, b) => (a.chemin + a.bloc).localeCompare(b.chemin + b.bloc))

  return {
    format: FORMAT_RESULTATS,
    version: VERSION_RESULTATS,
    exporte_le: new Date().toISOString(),
    fiches,
    qcm
  }
}

/**
 * Intitulé et nature de chaque fiche, pour que l'export se lise sans avoir le
 * dépôt sous les yeux. Clé fixe : plusieurs blocs d'export sur une même page se
 * partagent la requête.
 */
export function useRepertoireFiches() {
  const { data } = useAsyncData('cours-repertoire', async () => {
    const lignes = await queryCollection('cours').select('path', 'title', 'type').all()
    return Object.fromEntries(lignes.map(l => [cheminCanonique(l.path), { titre: l.title, type: l.type }])) as Repertoire
  }, { default: () => ({} as Repertoire) })

  return data
}
