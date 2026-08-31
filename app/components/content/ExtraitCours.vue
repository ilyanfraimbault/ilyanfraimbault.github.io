<script setup lang="ts">
const props = defineProps<{
  /** Identifiant stable, cible du bouton « Cours » des questions. */
  id: string
  /** Intitulé du tiroir (texte simple, pas de LaTeX : c'est un attribut). */
  titre: string
  /** Lien vers la section complète du chapitre de cours. */
  source?: string
}>()

const ouvert = ref(false)

const extraits = useCoursExtraits()

function ouvrir() {
  ouvert.value = true
}

onMounted(() => extraits?.enregistrer(props.id, ouvrir))
onBeforeUnmount(() => extraits?.oublier(props.id))

// Sur grand écran, un panneau latéral laisse l'énoncé visible à côté du rappel ;
// sur mobile, le tiroir du bas est le geste attendu et laisse toute la largeur
// aux formules. `useMediaQuery` renvoie false au rendu serveur, où le tiroir est
// de toute façon fermé.
const grandEcran = useMediaQuery('(min-width: 48rem)')
const direction = computed(() => grandEcran.value ? 'right' : 'bottom')

// Le contenu d'un overlay est téléporté dans <body>, hors de `.cours-body` : les
// règles qui rendent les formules en bloc défilables ne s'appliqueraient plus.
// On reporte donc la classe sur le contenu lui-même.
const ui = computed(() => ({
  content: grandEcran.value
    ? 'cours-body w-full max-w-xl'
    : 'cours-body max-h-[85vh]'
}))
</script>

<template>
  <UDrawer
    v-model:open="ouvert"
    :direction="direction"
    :title="titre"
    :handle="!grandEcran"
    :ui="ui"
  >
    <template #body>
      <div class="cours-panel-body cours-overlay-corps">
        <slot />
      </div>
    </template>

    <!-- UDrawer ne pose pas de croix de fermeture, contrairement à UModal : sans
         ce bouton, il ne resterait que la touche Échap ou le clic sur le voile. -->
    <template #footer>
      <div class="flex flex-wrap items-center gap-2">
        <UButton
          v-if="source"
          :to="source"
          size="sm"
          color="neutral"
          variant="outline"
          icon="i-lucide-book-open-text"
          trailing-icon="i-lucide-arrow-up-right"
          label="Lire la section complète dans le cours"
          @click="ouvert = false"
        />
        <UButton
          size="sm"
          color="neutral"
          variant="ghost"
          icon="i-lucide-x"
          label="Fermer"
          @click="ouvert = false"
        />
      </div>
    </template>
  </UDrawer>
</template>
