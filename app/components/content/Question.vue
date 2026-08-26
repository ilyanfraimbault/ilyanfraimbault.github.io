<script setup lang="ts">
defineProps<{
  /** Numéro ou repère affiché devant l'énoncé, par exemple « 1. » ou « a) ». */
  label?: string
}>()

const slots = useSlots()

const hasIndice = computed(() => !!slots.indice)
const hasSolution = computed(() => !!slots.solution)

const uid = useId()
const showIndice = ref(false)
const showSolution = ref(false)

const reveal = useCoursReveal()

if (reveal) {
  watch(reveal.openTick, () => {
    showIndice.value = hasIndice.value
    showSolution.value = hasSolution.value
  })
  watch(reveal.closeTick, () => {
    showIndice.value = false
    showSolution.value = false
  })
}
</script>

<template>
  <div
    :id="uid"
    class="cours-question scroll-mt-24 border-l-2 border-default hover:border-primary/60 transition-colors pl-4 sm:pl-5 py-1 my-7"
  >
    <div class="flex gap-3 items-baseline">
      <span
        v-if="label"
        class="shrink-0 font-semibold text-highlighted tabular-nums"
      >{{ label }}</span>
      <div class="min-w-0 flex-1 cours-enonce">
        <slot />
      </div>
    </div>

    <div
      v-if="hasIndice || hasSolution"
      class="flex flex-wrap gap-2 mt-3"
    >
      <UButton
        v-if="hasIndice"
        size="xs"
        color="warning"
        variant="soft"
        :icon="showIndice ? 'i-lucide-lightbulb-off' : 'i-lucide-lightbulb'"
        :label="showIndice ? 'Masquer l\'indice' : 'Indice'"
        :aria-expanded="showIndice"
        :aria-controls="`${uid}-indice`"
        @click="showIndice = !showIndice"
      />
      <UButton
        v-if="hasSolution"
        size="xs"
        color="primary"
        variant="soft"
        :icon="showSolution ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        :label="showSolution ? 'Masquer la solution' : 'Voir la solution'"
        :aria-expanded="showSolution"
        :aria-controls="`${uid}-solution`"
        @click="showSolution = !showSolution"
      />
    </div>

    <Transition name="cours-reveal">
      <div
        v-show="showIndice"
        :id="`${uid}-indice`"
        class="cours-panel cours-panel-indice"
      >
        <p class="cours-panel-title">
          <UIcon
            name="i-lucide-lightbulb"
            class="size-4 shrink-0"
          />
          <span>Indice</span>
        </p>
        <div class="cours-panel-body">
          <slot name="indice" />
        </div>
      </div>
    </Transition>

    <Transition name="cours-reveal">
      <div
        v-show="showSolution"
        :id="`${uid}-solution`"
        class="cours-panel cours-panel-solution"
      >
        <p class="cours-panel-title">
          <UIcon
            name="i-lucide-circle-check"
            class="size-4 shrink-0"
          />
          <span>Solution détaillée</span>
        </p>
        <div class="cours-panel-body">
          <slot name="solution" />
        </div>
      </div>
    </Transition>
  </div>
</template>
