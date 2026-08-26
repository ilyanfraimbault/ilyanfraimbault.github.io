<script setup lang="ts">
const props = defineProps<{
  /** Identifiant de l'exemple ciblé, tel que déclaré dans la fiche. */
  id: string
}>()

const exemples = useCoursExemples()
const racine = ref<HTMLElement | null>(null)

function clic() {
  // La question englobante sert d'ancre de retour : on la retrouve dans le DOM
  // plutôt que de la faire descendre par le contenu Markdown.
  const question = racine.value?.closest('.cours-question')?.id || null
  exemples?.voir(props.id, question)
}
</script>

<template>
  <button
    ref="racine"
    type="button"
    class="cours-renvoi"
    @click="clic"
  >
    <UIcon
      name="i-lucide-book-open-text"
      class="size-3.5 shrink-0"
    />
    <span><slot>Voir l'exemple</slot></span>
  </button>
</template>
