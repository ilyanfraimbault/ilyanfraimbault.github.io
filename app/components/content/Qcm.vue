<script setup lang="ts">
const props = defineProps<{
  /** Intitulé du QCM, par exemple « QCM 1 — Trigonométrie ». */
  titre?: string
  /** Thème affiché en sous-titre. */
  theme?: string
  /** Durée conseillée, affichée telle quelle : « 25 min ». */
  duree?: string
  /** Icône Lucide facultative. */
  icone?: string
  /** Version allégée, pour un contrôle de trois questions inséré dans un cours. */
  compact?: boolean
}>()

// Une page de cours porte un QCM par section : l'ancre du résultat doit être
// propre à chaque instance, sinon « Corriger » remonte toujours vers la première.
const idResultat = `qcm-resultat-${useId()}`

const { corrige, total, repondues, justes, ratees, corriger, recommencer } = provideQcm()

const pourcentage = computed(() => total.value ? Math.round(100 * justes.value / total.value) : 0)

// Le ton du bandeau suit la note, pour que le résultat se lise avant d'être lu.
const couleur = computed(() => {
  if (pourcentage.value >= 80) return 'success'
  if (pourcentage.value >= 50) return 'warning'
  return 'error'
})

const verdict = computed(() => {
  if (props.compact) {
    if (pourcentage.value === 100) return 'Section acquise : passe à la suivante.'
    if (pourcentage.value >= 50) return 'Presque. Relis le point raté juste au-dessus avant de continuer.'
    return 'Reprends cette section avant de passer à la suivante : le moment de la comprendre est maintenant.'
  }
  if (pourcentage.value >= 90) return 'Le thème est acquis.'
  if (pourcentage.value >= 70) return 'Presque : reprends les questions ratées, elles suffisent.'
  if (pourcentage.value >= 50) return 'La moitié tient. Relis le cours des questions ratées avant de refaire ce QCM.'
  return 'Reprends le cours de ce thème avant de refaire le QCM : les erreurs sont trop nombreuses pour être des étourderies.'
})

function allerA(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function corrigerEtRemonter() {
  corriger()
  nextTick(() => {
    document.getElementById(idResultat)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}
</script>

<template>
  <section
    class="cours-qcm scroll-mt-24"
    :class="compact ? 'cours-qcm-compact my-8 rounded-lg border border-default bg-elevated/25 px-4 py-4 sm:px-5' : 'my-10'"
  >
    <div class="flex items-center gap-2">
      <UIcon
        :name="icone || (compact ? 'i-lucide-circle-check-big' : 'i-lucide-list-checks')"
        class="shrink-0 text-primary"
        :class="compact ? 'size-4' : 'size-5'"
      />
      <h3
        v-if="titre && compact"
        class="m-0! text-base! font-semibold text-highlighted"
      >
        {{ titre }}
      </h3>
      <h2
        v-else-if="titre"
        class="m-0! text-xl! font-semibold text-highlighted"
      >
        {{ titre }}
      </h2>
      <UBadge
        v-if="duree"
        color="neutral"
        variant="subtle"
        size="sm"
        class="shrink-0"
        :label="duree"
      />
    </div>
    <p
      v-if="theme"
      class="mt-1! mb-0! text-sm text-muted"
    >
      {{ theme }}
    </p>

    <div :class="compact ? 'mt-2' : 'mt-4'">
      <slot />
    </div>

    <div
      :id="idResultat"
      class="cours-qcm-pied scroll-mt-24 rounded-lg border border-default bg-elevated/40 px-4 py-4"
      :class="compact ? 'mt-4' : 'mt-8'"
    >
      <template v-if="!corrige">
        <p
          v-if="!compact"
          class="cours-panel-title text-highlighted!"
        >
          <UIcon
            name="i-lucide-send"
            class="size-4 shrink-0 text-primary"
          />
          <span>Rendre la copie</span>
        </p>
        <p
          class="text-sm text-muted"
          :class="compact ? 'mt-0 mb-3' : 'mt-1 mb-3'"
        >
          {{ repondues }} réponse{{ repondues > 1 ? 's' : '' }} sur {{ total }}.
          <template v-if="repondues < total">
            Les questions sans réponse compteront comme fausses.
          </template>
          <template v-else>
            Tout est rempli.
          </template>
        </p>
        <UButton
          color="primary"
          icon="i-lucide-check-check"
          :size="compact ? 'xs' : 'md'"
          :disabled="repondues === 0"
          :label="compact ? 'Vérifier' : `Corriger mes ${repondues} réponses`"
          @click="corrigerEtRemonter"
        />
      </template>

      <template v-else>
        <p class="cours-panel-title text-highlighted!">
          <UIcon
            name="i-lucide-award"
            class="size-4 shrink-0 text-primary"
          />
          <span>Résultat</span>
        </p>

        <p
          class="mt-2 mb-0 font-semibold text-highlighted tabular-nums"
          :class="compact ? 'text-xl' : 'text-2xl'"
        >
          {{ justes }} / {{ total }}
          <UBadge
            :color="couleur"
            variant="subtle"
            size="lg"
            class="ml-2 align-middle"
            :label="`${pourcentage} %`"
          />
        </p>
        <p class="mt-2 mb-0 text-sm text-muted">
          {{ verdict }}
        </p>

        <template v-if="ratees.length">
          <p class="mt-4 mb-2 text-sm font-medium text-highlighted">
            <template v-if="compact">
              À revoir — la solution s'ouvre depuis la question :
            </template>
            <template v-else>
              À revoir — chaque question ratée porte maintenant son indice, sa solution et son rappel de cours :
            </template>
          </p>
          <div class="flex flex-wrap gap-2">
            <UButton
              v-for="fiche in ratees"
              :key="fiche.id"
              size="xs"
              color="error"
              variant="soft"
              :label="fiche.label || '?'"
              @click="allerA(fiche.id)"
            />
          </div>
        </template>
        <p
          v-else
          class="mt-4 mb-0 text-sm text-muted"
        >
          {{ compact ? 'Sans faute.' : 'Sans faute. Passe au thème suivant.' }}
        </p>

        <UButton
          class="mt-4"
          color="neutral"
          variant="subtle"
          :size="compact ? 'xs' : 'md'"
          icon="i-lucide-rotate-ccw"
          label="Recommencer"
          @click="recommencer"
        />
      </template>
    </div>
  </section>
</template>
