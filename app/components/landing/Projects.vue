<script setup lang="ts">
import type { IndexCollectionItem, ProjectsCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('landing-projects', () =>
  queryCollection('projects').order('date', 'DESC').limit(3).all()
)

const projectLink = (project: ProjectsCollectionItem & { _path?: string }) =>
  project.url ?? project._path ?? `/projects/${project.slug ?? ''}`

if (!projects.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projects not found',
    fatal: true
  })
}

const formatYear = (date: ProjectsCollectionItem['date']) => {
  return new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(new Date(date))
}
</script>

<template>
  <UPageSection
    :title="page.projects.title"
    :description="page.projects.description"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #links>
      <UButton
        v-if="page.projects.links?.[0]"
        v-bind="page.projects.links[0]"
      />
    </template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Motion
        v-for="(project, index) in projects"
        :key="project.slug || project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UCard
          class="h-full flex flex-col justify-between"
          :ui="{ body: 'flex flex-col gap-3 h-full' }"
        >
          <div class="flex items-center justify-between text-xs text-muted">
            <span>{{ formatYear(project.date) }}</span>
            <div class="flex flex-wrap gap-1">
              <UBadge
                v-for="tag in project.tags"
                :key="tag"
                size="xs"
                variant="soft"
                color="neutral"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg font-semibold leading-tight">
              {{ project.title }}
            </h3>
            <p class="text-sm text-muted">
              {{ project.description }}
            </p>
          </div>
          <div class="flex items-center justify-between pt-2">
            <ULink
              :to="projectLink(project)"
              class="text-sm text-primary flex items-center gap-1"
            >
              Voir le projet
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all group-hover:translate-x-1"
              />
            </ULink>
          </div>
        </UCard>
      </Motion>
    </div>
  </UPageSection>
</template>
