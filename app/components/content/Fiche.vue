<script setup lang="ts">
const props = defineProps<{
  /** Intitulé du bandeau, par exemple « Fiche de révision ». */
  titre?: string
  /** Phrase d'accroche affichée sous l'intitulé. */
  resume?: string
  /** Icône Lucide facultative. */
  icone?: string
}>()

const uid = useId()
const ouvert = ref(false)

// Un indice peut renvoyer vers un exemple situé dans la fiche : celle-ci doit
// alors se déplier d'elle-même avant que l'exemple ne s'ouvre.
provide(coursFicheKey, () => {
  ouvert.value = true
})

const reveal = useCoursReveal()

if (reveal) {
  watch(reveal.openTick, () => {
    ouvert.value = true
  })
  watch(reveal.closeTick, () => {
    ouvert.value = false
  })
}

const libelle = computed(() => props.titre || 'Fiche de révision')

const racine = ref<HTMLElement | null>(null)

/**
 * Les titres de la fiche alimentent le sommaire de la page. Un clic sur l'un
 * d'eux alors que la fiche est repliée viserait une ancre invisible : on la
 * déplie donc avant de laisser le navigateur faire défiler.
 */
function surClicAncre(event: MouseEvent) {
  if (ouvert.value) return

  const lien = (event.target as HTMLElement | null)?.closest?.('a[href*="#"]')
  if (!lien) return

  const ancre = (lien as HTMLAnchorElement).hash?.slice(1)
  if (!ancre) return

  const cible = document.getElementById(decodeURIComponent(ancre))
  if (cible && racine.value?.contains(cible)) ouvert.value = true
}

onMounted(() => document.addEventListener('click', surClicAncre, true))
onBeforeUnmount(() => document.removeEventListener('click', surClicAncre, true))
</script>

<template>
  <section
    ref="racine"
    class="cours-fiche my-8 scroll-mt-24 rounded-xl border border-default bg-elevated/30"
  >
    <button
      type="button"
      class="flex w-full items-center gap-3 px-4 py-3 text-left"
      :aria-expanded="ouvert"
      :aria-controls="`${uid}-fiche`"
      @click="ouvert = !ouvert"
    >
      <UIcon
        :name="icone || 'i-lucide-book-open-text'"
        class="size-5 shrink-0 text-primary"
      />
      <span class="min-w-0 flex-1">
        <span class="block font-medium text-highlighted">{{ libelle }}</span>
        <span
          v-if="resume"
          class="mt-0.5 block text-sm text-muted"
        >{{ resume }}</span>
      </span>
      <span class="shrink-0 text-xs text-dimmed">{{ ouvert ? 'Replier' : 'Déplier' }}</span>
      <UIcon
        name="i-lucide-chevron-down"
        class="size-4 shrink-0 text-dimmed transition-transform"
        :class="ouvert && 'rotate-180'"
      />
    </button>

    <div
      v-show="ouvert"
      :id="`${uid}-fiche`"
      class="cours-fiche-corps border-t border-default px-4 pb-4 pt-1 sm:px-5"
    >
      <slot />
    </div>
  </section>
</template>
