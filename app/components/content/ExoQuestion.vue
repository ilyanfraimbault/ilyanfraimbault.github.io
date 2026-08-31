<script setup lang="ts">
defineProps<{
  /** Numéro affiché devant l'énoncé, par exemple « 1. ». */
  label?: string
  /** Identifiant de l'extrait de cours à déployer, s'il y en a un. */
  cours?: string
}>()

const slots = useSlots()

const hasIndice = computed(() => !!slots.indice)
const hasExemple = computed(() => !!slots.exemple)
const hasSolution = computed(() => !!slots.solution)

const uid = useId()
const indiceOuvert = ref(false)
const solutionOuverte = ref(false)
// L'exemple similaire vit dans la modale d'indice, replié : on lit d'abord la
// piste, et on ne déroule le calcul complet que si elle n'a pas suffi.
const exempleDeplie = ref(false)

const extraits = useCoursExtraits()

// Le contenu d'un overlay est téléporté dans <body>, hors de `.cours-body` : sans
// ce report de classe, les formules en bloc ne seraient plus défilables.
const uiIndice = { content: 'cours-body max-w-2xl' }
const uiSolution = { content: 'cours-body max-w-3xl' }

watch(indiceOuvert, (ouvert) => {
  if (!ouvert) exempleDeplie.value = false
})
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

    <div class="flex flex-wrap gap-2 mt-3">
      <UButton
        v-if="hasIndice"
        size="xs"
        color="warning"
        variant="soft"
        icon="i-lucide-lightbulb"
        label="Indice"
        @click="indiceOuvert = true"
      />
      <UButton
        v-if="hasSolution"
        size="xs"
        color="primary"
        variant="soft"
        icon="i-lucide-eye"
        label="Voir la solution"
        @click="solutionOuverte = true"
      />
      <UButton
        v-if="cours"
        size="xs"
        color="neutral"
        variant="ghost"
        icon="i-lucide-book-open-text"
        label="Cours"
        @click="extraits?.ouvrir(cours)"
      />
    </div>

    <UModal
      v-model:open="indiceOuvert"
      title="Indice"
      description="Une piste pour démarrer, sans le résultat."
      :ui="uiIndice"
    >
      <template #body>
        <div class="cours-panel-body cours-overlay-corps">
          <slot name="indice" />
        </div>

        <div
          v-if="hasExemple"
          class="mt-5 rounded-lg border border-default"
        >
          <button
            type="button"
            class="flex w-full items-center gap-2 px-3 py-2 text-left"
            :aria-expanded="exempleDeplie"
            :aria-controls="`${uid}-exemple`"
            @click="exempleDeplie = !exempleDeplie"
          >
            <UIcon
              name="i-lucide-square-function"
              class="size-4 shrink-0 text-primary"
            />
            <span class="min-w-0 flex-1 text-sm font-medium text-highlighted">
              Exemple similaire, entièrement traité
            </span>
            <UIcon
              name="i-lucide-chevron-down"
              class="size-4 shrink-0 text-dimmed transition-transform"
              :class="exempleDeplie && 'rotate-180'"
            />
          </button>

          <div
            v-show="exempleDeplie"
            :id="`${uid}-exemple`"
            class="cours-panel-body cours-overlay-corps border-t border-default px-3 py-3"
          >
            <slot name="exemple" />
          </div>
        </div>
      </template>
    </UModal>

    <UModal
      v-model:open="solutionOuverte"
      title="Solution détaillée"
      :description="label ? `Question ${label}` : undefined"
      :ui="uiSolution"
    >
      <template #body>
        <div class="cours-panel-body cours-overlay-corps">
          <slot name="solution" />
        </div>
      </template>
    </UModal>
  </div>
</template>
