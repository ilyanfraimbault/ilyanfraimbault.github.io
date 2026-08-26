<script setup lang="ts">
const props = defineProps<{
  /** Identifiant stable, cible des renvois depuis les indices. */
  id: string
  /** Intitulé de l'exemple (texte simple, pas de LaTeX : c'est un attribut). */
  titre: string
  /** Une ligne décrivant quand s'en servir. */
  pour?: string
}>()

const uid = useId()
const ouvert = ref(false)

const exemples = useCoursExemples()
const ouvrirFiche = inject(coursFicheKey, null)

function ouvrir() {
  ouvrirFiche?.()
  ouvert.value = true
}

onMounted(() => exemples?.enregistrer(props.id, ouvrir))
onBeforeUnmount(() => exemples?.oublier(props.id))

const enEvidence = computed(() => exemples?.flash.value === props.id)
const retourPossible = computed(() => exemples?.retour.value?.exemple === props.id)

const reveal = useCoursReveal()

if (reveal) {
  watch(reveal.openTick, () => {
    ouvert.value = true
  })
  watch(reveal.closeTick, () => {
    ouvert.value = false
  })
}
</script>

<template>
  <div
    :id="`exemple-${id}`"
    class="cours-exemple scroll-mt-24"
    :class="enEvidence && 'cours-exemple-cible'"
  >
    <button
      type="button"
      class="flex w-full items-baseline gap-2 px-3 py-2 text-left"
      :aria-expanded="ouvert"
      :aria-controls="`${uid}-exemple`"
      @click="ouvert = !ouvert"
    >
      <UIcon
        name="i-lucide-square-function"
        class="size-4 shrink-0 translate-y-0.5 text-primary"
      />
      <span class="min-w-0 flex-1">
        <span class="block text-sm font-medium text-highlighted">{{ titre }}</span>
        <span
          v-if="pour"
          class="mt-0.5 block text-xs text-muted"
        >{{ pour }}</span>
      </span>
      <UIcon
        name="i-lucide-chevron-down"
        class="size-4 shrink-0 translate-y-0.5 text-dimmed transition-transform"
        :class="ouvert && 'rotate-180'"
      />
    </button>

    <div
      v-show="ouvert"
      :id="`${uid}-exemple`"
      class="cours-exemple-corps border-t border-default px-3 py-2"
    >
      <div class="cours-panel-body">
        <slot />
      </div>
      <UButton
        v-if="retourPossible"
        class="mt-3"
        size="xs"
        color="neutral"
        variant="ghost"
        icon="i-lucide-corner-down-left"
        label="Revenir à la question"
        @click="exemples?.revenir()"
      />
    </div>
  </div>
</template>
