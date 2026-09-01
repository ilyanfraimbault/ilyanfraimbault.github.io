// https://nuxt.com/docs/api/configuration/nuxt-config
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

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
