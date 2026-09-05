<script setup lang="ts">
defineProps<{
  /** Numérateur, par exemple « 5π ». Porte le signe éventuel. */
  haut: string
  /** Dénominateur, ou rien quand l'angle est un multiple entier de π. */
  bas?: string | null
}>()
</script>

<template>
  <span
    v-if="!bas"
    class="tabular-nums"
  >{{ haut }}</span>
  <span
    v-else
    class="ct-frac"
  >
    <span class="ct-frac-haut">{{ haut }}</span>
    <span class="ct-frac-bas">{{ bas }}</span>
  </span>
</template>
