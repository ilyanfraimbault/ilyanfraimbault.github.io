<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: project } = await useAsyncData(`project-${slug.value}`, () =>
  queryCollection('projects').where('slug', '=', slug.value).first()
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true
  })
}

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('fr', { month: 'long', year: 'numeric' }).format(
    new Date(project.value!.date)
  )
)

const galleryImages = computed(() => project.value?.gallery ?? [])
const allImages = computed(() => [
  {
    src: project.value?.image ?? '',
    alt: project.value?.title ?? ''
  },
  ...(galleryImages.value || [])
])

const isModalOpen = ref(false)
const activeImage = ref<{ src: string, alt?: string } | null>(null)

const openImage = (image: { src: string, alt?: string }) => {
  activeImage.value = image
  isModalOpen.value = true
}

const closeImage = () => {
  isModalOpen.value = false
  activeImage.value = null
}

useSeoMeta({
  title: `${project.value.title} - Projet`,
  ogTitle: `${project.value.title} - Projet`,
  description: project.value.description,
  ogDescription: project.value.description,
  ogImage: project.value.image,
  twitterImage: project.value.image
})
</script>

<template>
  <UPage v-if="project">
    <UPageHero
      :title="project.title"
      :description="project.description"
      align="left"
      :links="project.links"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left max-w-3xl',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div class="flex flex-wrap gap-2">
          <UBadge
            color="neutral"
            variant="soft"
            size="sm"
          >
            {{ formattedDate }}
          </UBadge>
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            color="primary"
            variant="soft"
            size="sm"
          >
            {{ tag }}
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="space-y-3 lg:col-span-2">
          <p class="text-base text-muted leading-relaxed">
            {{ project.description }}
          </p>
          <div
            v-if="project.links?.length"
            class="flex flex-wrap gap-2"
          >
            <UButton
              v-for="(link, index) in project.links"
              :key="index"
              v-bind="link"
            />
          </div>
        </div>
        <div class="space-y-6">
          <div v-if="project.highlights?.length">
            <h3 class="text-lg font-semibold mb-2">
              Points clés
            </h3>
            <ul class="space-y-2 text-sm text-muted">
              <li
                v-for="item in project.highlights"
                :key="item"
                class="flex gap-2 items-start"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div v-if="project.stack?.length">
            <h3 class="text-lg font-semibold mb-2">
              Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tech in project.stack"
                :key="tech"
                size="sm"
                variant="subtle"
                color="neutral"
              >
                {{ tech }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      v-if="allImages.length"
      :ui="{
        container: '!pt-0'
      }"
    >
      <div class="grid grid-cols-1 gap-8">
        <button
          v-for="(image, index) in allImages"
          :key="index"
          type="button"
          class="group text-left space-y-2 w-full"
          @click="openImage(image)"
        >
          <div class="relative w-full overflow-hidden rounded-2xl border border-muted shadow-lg bg-(--ui-bg-elevated)">
            <NuxtImg
              :src="image.src"
              :alt="image.alt || `${project.title} - capture ${index + 1}`"
              class="w-full h-auto max-h-[640px] object-contain mx-auto"
            />
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
              Cliquer pour agrandir
            </div>
          </div>
          <p class="text-sm text-muted">
            {{ image.alt || `${project.title} - capture ${index + 1}` }}
          </p>
        </button>
      </div>
    </UPageSection>

    <div
      v-if="isModalOpen && activeImage"
      class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      @click.self="closeImage"
    >
      <div class="relative max-w-5xl w-full">
        <button
          type="button"
          class="absolute top-4 right-4 text-white/80 hover:text-white"
          aria-label="Fermer"
          @click="closeImage"
        >
          <UIcon
            name="i-lucide-x"
            class="size-6"
          />
        </button>
        <img
          :src="activeImage.src"
          :alt="activeImage.alt || project.title"
          class="w-full max-h-[85vh] object-contain rounded-lg border border-muted bg-(--ui-bg-elevated)"
        >
        <p class="text-sm text-muted mt-3 text-center">
          {{ activeImage.alt || project.title }}
        </p>
      </div>
    </div>
  </UPage>
</template>
