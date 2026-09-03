<script setup lang="ts">
const props = defineProps<{
  /** Repère affiché devant l'énoncé, par exemple « 12. ». */
  label?: string
  /** Lettre de la bonne réponse : « a », « b », « c » ou « d ». */
  bonne: string
  /** Identifiant de l'extrait de cours à déployer après correction. */
  cours?: string
}>()

const slots = useSlots()

const LETTRES = ['a', 'b', 'c', 'd', 'e'] as const

// Une question peut n'avoir que trois propositions : on ne rend que les slots fournis.
const choixPossibles = computed(() => LETTRES.filter(l => !!slots[l]))

const uid = useId()
const choisi = ref<string | null>(null)
const indiceOuvert = ref(false)
const solutionOuverte = ref(false)

const qcm = useQcm()
const extraits = useCoursExtraits()

const corrige = computed(() => qcm?.corrige.value ?? false)
const juste = computed(() => choisi.value === props.bonne)

onMounted(() => qcm?.enregistrer({ id: uid, label: props.label, bonne: props.bonne }))
onBeforeUnmount(() => qcm?.oublier(uid))

// Le conteneur remet les réponses à zéro en sortant du mode corrigé : la question
// suit le mouvement plutôt que de garder un choix orphelin.
watch(corrige, (actif) => {
  if (!actif) choisi.value = null
})

function choisir(lettre: string) {
  if (corrige.value) return
  // Recliquer sa propre réponse la retire, ce qui permet de laisser une question blanche.
  choisi.value = choisi.value === lettre ? null : lettre
  qcm?.repondre(uid, choisi.value)
}

/** Habillage d'une proposition : neutre avant correction, verdict après. */
function classesChoix(lettre: string) {
  const base = 'flex w-full items-start gap-3 rounded-lg border px-3 py-2 text-left transition-colors'
  if (!corrige.value) {
    return choisi.value === lettre
      ? `${base} border-primary bg-primary/10`
      : `${base} border-default hover:border-primary/60 hover:bg-elevated/50`
  }
  if (lettre === props.bonne) return `${base} border-success bg-success/10`
  if (lettre === choisi.value) return `${base} border-error bg-error/10`
  return `${base} border-default opacity-60`
}

function icone(lettre: string) {
  if (!corrige.value) return choisi.value === lettre ? 'i-lucide-circle-dot' : 'i-lucide-circle'
  if (lettre === props.bonne) return 'i-lucide-circle-check'
  if (lettre === choisi.value) return 'i-lucide-circle-x'
  return 'i-lucide-circle'
}

function classesIcone(lettre: string) {
  if (!corrige.value) return choisi.value === lettre ? 'text-primary' : 'text-dimmed'
  if (lettre === props.bonne) return 'text-success'
  if (lettre === choisi.value) return 'text-error'
  return 'text-dimmed'
}

// Le contenu d'un overlay est téléporté dans <body>, hors de `.cours-body` : sans
// ce report de classe, les formules en bloc ne seraient plus défilables.
const uiIndice = { content: 'cours-body max-w-2xl' }
const uiSolution = { content: 'cours-body max-w-3xl' }
</script>

<template>
  <div
    :id="uid"
    class="cours-question cours-qcm-question scroll-mt-24 border-l-2 transition-colors pl-4 sm:pl-5 py-1 my-7"
    :class="corrige ? (juste ? 'border-success' : 'border-error') : 'border-default hover:border-primary/60'"
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
        v-if="corrige"
        :name="juste ? 'i-lucide-check' : 'i-lucide-x'"
        class="size-5 shrink-0"
        :class="juste ? 'text-success' : 'text-error'"
      />
    </div>

    <div
      class="mt-3 flex flex-col gap-2"
      role="radiogroup"
      :aria-label="label ? `Propositions de la question ${label}` : 'Propositions'"
    >
      <button
        v-for="lettre in choixPossibles"
        :key="lettre"
        type="button"
        role="radio"
        :aria-checked="choisi === lettre"
        :disabled="corrige"
        :class="classesChoix(lettre)"
        @click="choisir(lettre)"
      >
        <UIcon
          :name="icone(lettre)"
          class="size-4 shrink-0 mt-1"
          :class="classesIcone(lettre)"
        />
        <span class="shrink-0 font-medium text-muted uppercase">{{ lettre }}</span>
        <span class="min-w-0 flex-1 cours-qcm-choix">
          <slot :name="lettre" />
        </span>
      </button>
    </div>

    <p
      v-if="corrige && !juste"
      class="mt-3 mb-0 text-sm text-muted"
    >
      <template v-if="choisi === null">
        Aucune réponse donnée. La bonne était la <strong class="text-highlighted uppercase">{{ bonne }}</strong>.
      </template>
      <template v-else>
        Réponse attendue : la <strong class="text-highlighted uppercase">{{ bonne }}</strong>.
      </template>
    </p>

    <div
      v-if="corrige"
      class="flex flex-wrap gap-2 mt-3"
    >
      <UButton
        v-if="slots.indice"
        size="xs"
        color="warning"
        variant="soft"
        icon="i-lucide-lightbulb"
        label="Indice"
        @click="indiceOuvert = true"
      />
      <UButton
        v-if="slots.solution"
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
      description="Le raisonnement à tenir, sans le résultat."
      :ui="uiIndice"
    >
      <template #body>
        <div class="cours-panel-body cours-overlay-corps">
          <slot name="indice" />
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
