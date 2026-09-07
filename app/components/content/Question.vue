<script setup lang="ts">
const props = defineProps<{
  /** Numéro ou repère affiché devant l'énoncé, par exemple « 1. » ou « a) ». */
  label?: string
  /** Lettre attendue. Absente, la question s'auto-évalue après lecture de la solution. */
  bonne?: string
}>()

const slots = useSlots()

const hasIndice = computed(() => !!slots.indice)
const hasSolution = computed(() => !!slots.solution)

const LETTRES = ['a', 'b', 'c', 'd', 'e'] as const
const choixPossibles = computed(() => LETTRES.filter(l => !!slots[l]))
const aChoix = computed(() => !!props.bonne && choixPossibles.value.length > 0)

const uid = useId()
const showIndice = ref(false)
const showSolution = ref(false)

const reveal = useCoursReveal()
const progression = useProgression()
const bloc = useBloc()
const route = useRoute()

const identite = computed(() => identiteQuestion(route.path, bloc?.slug.value ?? null, props.label))
const memoire = computed(() => progression?.memoire(identite.value) ?? null)
const trouve = computed(() => memoire.value !== null)

const choisi = ref<string | null>(null)
const errones = ref<string[]>([])
const affiche = computed(() => (trouve.value ? memoire.value : choisi.value))

onMounted(() => {
  progression?.declarer(identite.value)
  bloc?.ajouter(identite.value)
})
onBeforeUnmount(() => {
  progression?.oublier(identite.value)
  bloc?.retirer(identite.value)
})

function choisir(lettre: string) {
  if (trouve.value) return
  choisi.value = lettre
  if (lettre === props.bonne) {
    progression?.reussir(identite.value, lettre)
    return
  }
  if (!errones.value.includes(lettre)) errones.value = [...errones.value, lettre]
  // Se tromper ouvre la piste, jamais la réponse : on relit et on retente.
  if (hasIndice.value) showIndice.value = true
}

function seNoter(juste: boolean) {
  if (juste) progression?.reussir(identite.value, 'auto')
  else progression?.annuler(identite.value)
}

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
    class="cours-question scroll-mt-24 border-l-2 transition-colors pl-4 sm:pl-5 py-1 my-7"
    :class="trouve ? 'border-success' : 'border-default hover:border-primary/60'"
  >
    <div class="flex gap-3 items-baseline">
      <span
        v-if="label"
        class="shrink-0 font-semibold text-highlighted tabular-nums"
      >{{ label }}</span>
      <div class="min-w-0 flex-1 cours-enonce">
        <slot />
      </div>
      <UIcon
        v-if="trouve"
        name="i-lucide-check"
        class="size-5 shrink-0 text-success"
      />
    </div>

    <ChoixReponses
      v-if="aChoix"
      :lettres="choixPossibles"
      :bonne="bonne!"
      :choisi="affiche"
      :errones="errones"
      :revele="trouve"
      :fige="trouve"
      :intitule="label ? `Propositions de la question ${label}` : undefined"
      @choisir="choisir"
    >
      <template #default="{ lettre }">
        <slot :name="lettre" />
      </template>
    </ChoixReponses>

    <p
      v-if="aChoix && !trouve && errones.length"
      class="mt-3 mb-0 text-sm text-muted"
    >
      Ce n'est pas ça.
      <template v-if="hasIndice">
        L'indice est ouvert : relis-le, puis retente — autant de fois qu'il faudra.
      </template>
      <template v-else>
        Retente : rien ne limite le nombre d'essais.
      </template>
    </p>

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

    <!-- Question ouverte : rien à cocher, donc on se note soi-même, mais
         seulement une fois la solution lue. -->
    <div
      v-if="!aChoix && showSolution"
      class="mt-3 flex flex-wrap items-center gap-2"
    >
      <template v-if="trouve">
        <span class="text-sm text-success">Comptée comme réussie.</span>
        <UButton
          size="xs"
          color="neutral"
          variant="ghost"
          icon="i-lucide-undo-2"
          label="Me dédire"
          @click="seNoter(false)"
        />
      </template>
      <template v-else>
        <span class="text-sm text-muted">Après lecture :</span>
        <UButton
          size="xs"
          color="success"
          variant="soft"
          icon="i-lucide-check"
          label="J'avais bon"
          @click="seNoter(true)"
        />
        <UButton
          size="xs"
          color="neutral"
          variant="subtle"
          icon="i-lucide-x"
          label="J'avais faux"
          @click="seNoter(false)"
        />
      </template>
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
