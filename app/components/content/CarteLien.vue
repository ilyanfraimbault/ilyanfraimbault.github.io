<script setup lang="ts">
const props = defineProps<{
  to: string
  titre: string
  description?: string
  icone?: string
  /** Mention courte affichée à droite, par exemple « 10 exercices ». */
  meta?: string
  /** Nature de la page visée : « cours », « exercices » ou « entrainement ». */
  type?: string
}>()

// La pastille de type porte déjà une icône parlante : quand elle est là, elle
// tient lieu d'icône de carte, et la propriété `icone` reste pour les liens qui
// ne désignent pas une page typée — une matière, une année, un guide externe.
const typeInfo = computed(() => coursTypeInfo(props.type))
const icone = computed(() => props.icone || typeInfo.value?.icone || 'i-lucide-file-text')

const comptes = useComptesQuestions()
const { reussies } = useProgressionFiche(() => props.to)

// Le dénominateur vient du build ; le numérateur, du navigateur. Le plafond
// protège d'une mémoire plus vieille que le contenu, qui afficherait « 23 / 20 ».
const total = computed(() => comptes.value[cheminCanonique(props.to)] ?? 0)
const faites = computed(() => Math.min(reussies.value, total.value))

const couleur = computed(() => {
  if (!faites.value) return 'neutral'
  return faites.value === total.value ? 'success' : 'primary'
})
</script>

<template>
  <div class="not-prose my-3">
    <ULink
      :to="to"
      class="group flex items-start gap-3 rounded-lg border border-default bg-default px-4 py-3 transition-colors hover:border-primary/60 hover:bg-elevated/50"
    >
      <UIcon
        :name="icone"
        class="size-5 shrink-0 mt-0.5 text-primary"
      />
      <span class="min-w-0 flex-1">
        <span class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span class="flex flex-wrap items-center gap-2">
            <span class="font-medium text-highlighted">{{ titre }}</span>
            <UBadge
              v-if="typeInfo"
              :color="typeInfo.couleur"
              variant="subtle"
              size="sm"
              :label="typeInfo.label"
            />
          </span>
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

    <!-- La barre reste hors du lien : `role="progressbar"` à l'intérieur d'un
         <a> en fausserait le nom accessible. Les chiffres à côté disent la même
         chose en toutes lettres, d'où l'`aria-hidden` sur la barre. -->
    <div
      v-if="total"
      class="mt-1.5 flex items-center gap-2 px-4"
    >
      <UProgress
        class="flex-1"
        size="xs"
        aria-hidden="true"
        :color="couleur"
        :model-value="faites"
        :max="total"
      />
      <span class="shrink-0 text-xs text-dimmed tabular-nums">{{ faites }} / {{ total }}</span>
    </div>
  </div>
</template>
