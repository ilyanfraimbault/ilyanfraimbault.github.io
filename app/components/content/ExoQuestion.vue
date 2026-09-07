<script setup lang="ts">
const props = defineProps<{
  /** Numéro affiché devant l'énoncé, par exemple « 1. ». */
  label?: string
  /** Identifiant de l'extrait de cours à déployer, s'il y en a un. */
  cours?: string
  /**
   * Lettre attendue. Sa présence fait de la question un choix corrigé sur-le-champ ;
   * son absence laisse la question ouverte, à s'auto-évaluer après lecture de la
   * solution — ce qui reste le seul régime tenable pour une démonstration ou un
   * tableau de variations.
   */
  bonne?: string
}>()

const slots = useSlots()

const hasIndice = computed(() => !!slots.indice)
const hasExemple = computed(() => !!slots.exemple)
const hasSolution = computed(() => !!slots.solution)

const LETTRES = ['a', 'b', 'c', 'd', 'e'] as const

// Une question peut n'avoir que trois propositions : on ne rend que les slots fournis.
const choixPossibles = computed(() => LETTRES.filter(l => !!slots[l]))
const aChoix = computed(() => !!props.bonne && choixPossibles.value.length > 0)

const uid = useId()
const indiceOuvert = ref(false)
const solutionOuverte = ref(false)
// L'exemple similaire vit dans le panneau d'indice, replié : on lit d'abord la
// piste, et on ne déroule le calcul complet que si elle n'a pas suffi.
const exempleDeplie = ref(false)
// L'auto-évaluation ne s'ouvre qu'une fois la solution lue : se noter avant
// reviendrait à se noter à l'aveugle.
const solutionLue = ref(false)

const extraits = useCoursExtraits()
const progression = useProgression()
const bloc = useBloc()
const route = useRoute()

const identite = computed(() => identiteQuestion(route.path, bloc?.slug.value ?? null, props.label))

// Ce que la mémoire du navigateur sait de cette question : la lettre trouvée, ou
// « auto » si elle s'est auto-évaluée juste.
const memoire = computed(() => progression?.memoire(identite.value) ?? null)
const trouve = computed(() => memoire.value !== null)

const choisi = ref<string | null>(null)
const errones = ref<string[]>([])

// Une fois la question trouvée, c'est la mémoire qui fait foi : au rechargement
// de la page, la bonne lettre se rallume sans qu'on ait eu à recliquer.
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
  // Se tromper n'ouvre pas la réponse : ça ouvre la piste, et on recommence.
  if (hasIndice.value) indiceOuvert.value = true
}

function seNoter(juste: boolean) {
  if (juste) progression?.reussir(identite.value, 'auto')
  else progression?.annuler(identite.value)
}

// La solution reste en fenêtre : elle est longue, et on ne la lit qu'une fois.
// Son contenu étant téléporté dans <body>, hors de `.cours-body`, la classe doit
// l'y suivre — sans quoi les formules en bloc ne seraient plus défilables.
const uiSolution = { content: 'cours-body max-w-3xl' }

watch(indiceOuvert, (ouvert) => {
  if (!ouvert) exempleDeplie.value = false
})

watch(solutionOuverte, (ouvert) => {
  if (ouvert) solutionLue.value = true
})
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

    <div class="flex flex-wrap gap-2 mt-3">
      <UButton
        v-if="hasIndice"
        size="xs"
        color="warning"
        variant="soft"
        :icon="indiceOuvert ? 'i-lucide-lightbulb-off' : 'i-lucide-lightbulb'"
        :label="indiceOuvert ? 'Masquer l\'indice' : 'Indice'"
        :aria-expanded="indiceOuvert"
        :aria-controls="`${uid}-indice`"
        @click="indiceOuvert = !indiceOuvert"
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

    <!-- Question ouverte : rien à cocher, donc on se note soi-même, mais
         seulement une fois la solution lue. -->
    <div
      v-if="!aChoix && solutionLue"
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

    <!-- L'indice se déplie sur place plutôt qu'en fenêtre : une modale à chaque
         mauvaise réponse casserait le geste « je relis et je retente aussitôt ». -->
    <Transition name="cours-reveal">
      <div
        v-show="indiceOuvert"
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

        <div
          v-if="hasExemple"
          class="mt-4 rounded-lg border border-default bg-default"
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
            class="cours-panel-body border-t border-default px-3 py-3"
          >
            <slot name="exemple" />
          </div>
        </div>
      </div>
    </Transition>

    <UModal
      v-model:open="solutionOuverte"
      title="Solution détaillée"
      :description="label ? `Question ${label}` : undefined"
      :ui="uiSolution"
    >
      <template #body>
        <p
          v-if="aChoix && affiche"
          class="mb-4 text-sm text-muted"
        >
          Ta réponse : la <strong class="text-highlighted uppercase">{{ affiche }}</strong>.
          <template v-if="affiche !== bonne">
            La bonne est la <strong class="text-highlighted uppercase">{{ bonne }}</strong>.
          </template>
        </p>
        <div class="cours-panel-body cours-overlay-corps">
          <slot name="solution" />
        </div>
      </template>
    </UModal>
  </div>
</template>
