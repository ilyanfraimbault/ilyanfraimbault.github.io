<script setup lang="ts">
const route = useRoute()

// Les hébergeurs statiques (GitHub Pages comme le serveur de prévisualisation)
// redirigent /page vers /page/ : sans normalisation, le chemin stocké en base
// ne correspondrait plus et la page tomberait en 404 après hydratation.
const contentPath = computed(() => route.path.replace(/\/+$/, '') || '/')

const { data: page } = await useAsyncData(`cours-${contentPath.value}`, () =>
  queryCollection('cours').path(contentPath.value).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page non trouvée', fatal: true })
}

const { openAll, closeAll } = provideCoursReveal()

const parent = computed(() => {
  const segments = contentPath.value.split('/').filter(Boolean)
  return segments.length > 1 ? `/${segments.slice(0, -1).join('/')}` : null
})

const tocLinks = computed(() => page.value?.body?.toc?.links ?? [])

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  robots: 'noindex, nofollow, noarchive'
})
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          v-if="parent"
          :to="parent"
          class="text-sm flex items-center gap-1 text-muted hover:text-default"
        >
          <UIcon name="i-lucide-chevron-left" />
          Retour
        </ULink>

        <div class="mt-8 flex flex-col gap-3">
          <h1 class="text-3xl sm:text-4xl font-medium text-highlighted">
            {{ page.title }}
          </h1>
          <p
            v-if="page.description"
            class="text-muted"
          >
            {{ page.description }}
          </p>
          <div
            v-if="page.interactif"
            class="flex flex-wrap items-center gap-2 pt-2"
          >
            <UButton
              size="xs"
              color="neutral"
              variant="outline"
              icon="i-lucide-eye"
              label="Tout afficher"
              @click="openAll"
            />
            <UButton
              size="xs"
              color="neutral"
              variant="ghost"
              icon="i-lucide-eye-off"
              label="Tout masquer"
              @click="closeAll"
            />
          </div>
        </div>

        <UPageBody class="cours-body">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />
        </UPageBody>

        <template
          v-if="tocLinks.length"
          #right
        >
          <UContentToc
            title="Sur cette page"
            :links="tocLinks"
            highlight
          />
        </template>
      </UPage>
    </UContainer>
  </UMain>
</template>
