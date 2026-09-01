<script setup lang="ts">
interface TimelineItem {
  date: string
  position: string
  organization: {
    name: string
    url: string
    logo: string
    color: string
  }
}

defineProps<{
  title: string
  items: TimelineItem[]
}>()
</script>

<template>
  <UPageSection
    :title="title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(item, index) in items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="flex flex-col gap-2 border-b border-muted/30 pb-4 last:border-b-0 items-start text-right sm:items-end"
        >
          <p class="text-xs sm:text-sm text-muted">
            {{ item.date }}
          </p>
          <ULink
            class="flex flex-col gap-1 text-right text-muted hover:text-muted items-start sm:items-end"
            :to="item.organization.url"
            target="_blank"
          >
            <span class="text-sm text-foreground">{{ item.position }}</span>
            <div
              class="inline-flex items-center gap-2 text-sm justify-end"
            >
              <span class="font-medium">{{ item.organization.name }}</span>
              <template v-if="item.organization.logo?.startsWith('/')">
                <NuxtImg
                  :src="item.organization.logo"
                  :alt="item.organization.name"
                  class="h-4 w-auto shrink-0"
                />
              </template>
              <template v-else>
                <UIcon
                  :name="item.organization.logo"
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
