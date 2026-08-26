<script setup lang="ts">
defineProps<{
  to: string
  titre: string
  description?: string
  icone?: string
  /** Mention courte affichée à droite, par exemple « 10 exercices ». */
  meta?: string
}>()
</script>

<template>
  <ULink
    :to="to"
    class="not-prose group flex items-start gap-3 rounded-lg border border-default bg-default px-4 py-3 my-3 transition-colors hover:border-primary/60 hover:bg-elevated/50"
  >
    <UIcon
      :name="icone || 'i-lucide-file-text'"
      class="size-5 shrink-0 mt-0.5 text-primary"
    />
    <span class="min-w-0 flex-1">
      <span class="flex items-baseline justify-between gap-3">
        <span class="font-medium text-highlighted">{{ titre }}</span>
        <span
          v-if="meta"
          class="shrink-0 text-xs text-dimmed"
        >{{ meta }}</span>
      </span>
      <span
        v-if="description"
        class="mt-0.5 block text-sm text-muted"
      >{{ description }}</span>
    </span>
    <UIcon
      name="i-lucide-chevron-right"
      class="size-4 shrink-0 mt-1 text-dimmed transition-transform group-hover:translate-x-0.5"
    />
  </ULink>
</template>
