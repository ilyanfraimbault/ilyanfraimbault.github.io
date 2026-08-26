<script setup lang="ts">
defineProps<{
  /** Titre de l'encadré. Par défaut : « Rappel de cours ». */
  titre?: string
  /** Icône Lucide facultative. */
  icone?: string
}>()
</script>

<template>
  <aside class="cours-rappel my-6 rounded-lg border border-default bg-elevated/40 px-4 py-3">
    <p class="cours-panel-title text-highlighted!">
      <UIcon
        :name="icone || 'i-lucide-book-open'"
        class="size-4 shrink-0 text-primary"
      />
      <span>{{ titre || 'Rappel de cours' }}</span>
    </p>
    <div class="cours-panel-body">
      <slot />
    </div>
  </aside>
</template>
