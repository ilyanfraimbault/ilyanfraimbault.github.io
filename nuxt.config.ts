// https://nuxt.com/docs/api/configuration/nuxt-config

/** Les trois balises qui posent une question, quel que soit le format de la fiche. */
const BALISES_QUESTION = new Set(['exo-question', 'qcm-question', 'question'])

/**
 * Compte les questions d'une page en parcourant son arbre minimark, dont chaque
 * nœud a la forme `['balise', props, ...enfants]`. On préfère ce parcours à une
 * expression rationnelle sur la source : il ignore les blocs de code et suit
 * exactement ce qui sera rendu.
 *
 * Le comptage a lieu au build pour qu'une carte de lien connaisse le
 * dénominateur d'une fiche que l'on n'a jamais ouverte — c'est justement sur
 * l'index qu'on choisit quoi ouvrir.
 */
function compterQuestions(noeuds: unknown): number {
  if (!Array.isArray(noeuds)) return 0
  let total = 0
  for (const noeud of noeuds) {
    if (!Array.isArray(noeud)) continue
    if (typeof noeud[0] === 'string' && BALISES_QUESTION.has(noeud[0])) total += 1
    total += compterQuestions(noeud.slice(2))
  }
  return total
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  pages: true,

  components: [
    // Composants utilisables directement dans le Markdown (MDC).
    { path: '~/components/content', global: true, pathPrefix: false },
    '~/components'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {}
        },
        rehypePlugins: {
          // throwOnError: false => une formule fautive s'affiche en rouge
          // au lieu de faire échouer `nuxi generate`.
          'rehype-katex': {
            throwOnError: false,
            strict: false
          }
        }
      }
    }
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    // GitHub Pages preset outputs static site to ./dist with proper asset handling
    preset: 'github_pages',
    prerender: {
      routes: [
        '/',
        // Les pages de cours ne sont liées depuis aucune page publique : sans
        // cette liste elles ne seraient jamais générées. `crawlLinks` prend
        // ensuite le relais pour tout ce qui est lié depuis ces pages.
        '/cours',
        '/cours/a1',
        '/cours/a1/remise-a-niveau-maths'
      ],
      crawlLinks: true
    }
  },

  hooks: {
    'content:file:afterParse'(ctx: { content?: Record<string, unknown> }) {
      const contenu = ctx.content as { path?: string, body?: { value?: unknown }, questions?: number } | undefined
      if (!contenu?.path?.startsWith('/cours/')) return
      contenu.questions = compterQuestions(contenu.body?.value)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
