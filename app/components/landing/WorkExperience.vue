<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="flex flex-col gap-2 border-b border-muted/30 pb-4 last:border-b-0 items-start text-right sm:items-end"
        >
          <p class="text-xs sm:text-sm text-muted">
            {{ experience.date }}
          </p>
          <ULink
            class="flex flex-col gap-1 text-right text-muted hover:text-muted items-start sm:items-end"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm text-foreground">{{ experience.position }}</span>
            <div
              class="inline-flex items-center gap-2 text-sm justify-end"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <template v-if="experience.company.logo?.startsWith('/')">
                <NuxtImg
                  :src="experience.company.logo"
                  :alt="experience.company.name"
                  class="h-4 w-auto shrink-0"
                />
              </template>
              <template v-else>
                <UIcon
                  :name="experience.company.logo"
                  class="shrink-0 text-muted"
                />
              </template>
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
