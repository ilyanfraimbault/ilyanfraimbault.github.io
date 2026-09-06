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

const route = useRoute()

// Clé de l'historique : elle doit survivre à un rebuild du site, donc pas de
// `useId()` ici. Le chemin de la page et le titre du bloc suffisent à distinguer
// les onze contrôles express d'une même page de cours. Sans titre, pas de
// mémoire — mieux vaut aucun historique qu'un historique qui se mélange.
const identifiant = computed(() => {
  if (!props.titre) return null
  const slug = props.titre.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return `${route.path}#${slug}`
})

const {
  corrige, total, repondues, justes, ratees, corriger, recommencer,
  tentatives, precedente, ecart, encoreRatees, rattrapees, oublierHistorique
} = provideQcm(identifiant)

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

/** « 14/20 » lisible d'un coup d'œil dans la frise des passages. */
function noteCourte(t: { justes: number, total: number }) {
  return `${t.justes}/${t.total}`
}

function tonNote(t: { justes: number, total: number }) {
  const p = t.total ? 100 * t.justes / t.total : 0
  if (p >= 80) return 'success'
  if (p >= 50) return 'warning'
  return 'error'
}

function dateCourte(t: number) {
  return new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}

const evolution = computed(() => {
  if (ecart.value === null) return null
  if (ecart.value > 0) return { texte: `+${ecart.value} depuis la dernière fois`, couleur: 'success' as const }
  if (ecart.value < 0) return { texte: `${ecart.value} depuis la dernière fois`, couleur: 'error' as const }
  return { texte: 'même score que la dernière fois', couleur: 'neutral' as const }
})

// Les erreurs qui n'étaient pas là au passage précédent : ni acquises, ni
// vraiment nouvelles au fond, mais utiles à distinguer de celles qui résistent.
const nouvellesRatees = computed(() =>
  precedente.value ? ratees.value.filter(f => !f.label || !precedente.value!.ratees.includes(f.label)) : [])

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
        <div
          v-if="tentatives.length"
          class="mb-3"
        >
          <p class="mt-0 mb-2 text-sm text-muted">
            Déjà passé {{ tentatives.length }} fois, dernier score
            <strong class="text-highlighted tabular-nums">{{ noteCourte(tentatives[tentatives.length - 1]!) }}</strong>.
          </p>
          <div class="flex flex-wrap items-center gap-1.5">
            <UBadge
              v-for="(tentative, i) in tentatives"
              :key="tentative.t"
              :color="tonNote(tentative)"
              variant="subtle"
              size="sm"
              class="tabular-nums"
              :title="`Passage ${i + 1} — ${dateCourte(tentative.t)}`"
              :label="noteCourte(tentative)"
            />
          </div>
        </div>

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
          <UBadge
            v-if="evolution"
            :color="evolution.couleur"
            variant="soft"
            size="lg"
            class="ml-2 align-middle"
            :icon="ecart! > 0 ? 'i-lucide-trending-up' : ecart! < 0 ? 'i-lucide-trending-down' : 'i-lucide-minus'"
            :label="evolution.texte"
          />
        </p>
        <p class="mt-2 mb-0 text-sm text-muted">
          {{ verdict }}
        </p>

        <p
          v-if="rattrapees.length"
          class="mt-3 mb-0 text-sm text-muted"
        >
          Acquises depuis le passage précédent :
          <span class="font-medium text-highlighted">{{ rattrapees.join(' ') }}</span>
        </p>

        <template v-if="ratees.length">
          <!-- Sans passage précédent, la liste reste d'un bloc : il n'y a rien à
               comparer, et deux titres pour une seule idée embrouillent. -->
          <template v-if="!precedente">
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

          <template v-else>
            <template v-if="encoreRatees.length">
              <p class="mt-4 mb-2 text-sm font-medium text-highlighted">
                Ratées à nouveau — ce sont celles-là qui demandent le cours, pas une relecture :
              </p>
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="fiche in encoreRatees"
                  :key="fiche.id"
                  size="xs"
                  color="error"
                  variant="solid"
                  :label="fiche.label || '?'"
                  @click="allerA(fiche.id)"
                />
              </div>
            </template>

            <template v-if="nouvellesRatees.length">
              <p class="mt-4 mb-2 text-sm font-medium text-highlighted">
                Ratées cette fois seulement — elles n'étaient pas tombées au passage précédent :
              </p>
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="fiche in nouvellesRatees"
                  :key="fiche.id"
                  size="xs"
                  color="error"
                  variant="soft"
                  :label="fiche.label || '?'"
                  @click="allerA(fiche.id)"
                />
              </div>
            </template>
          </template>
        </template>
        <p
          v-else
          class="mt-4 mb-0 text-sm text-muted"
        >
          {{ compact ? 'Sans faute.' : 'Sans faute. Passe au thème suivant.' }}
        </p>

        <template v-if="tentatives.length > 1">
          <p class="mt-4 mb-2 text-sm font-medium text-highlighted">
            Tes passages, du plus ancien au plus récent :
          </p>
          <div class="flex flex-wrap items-center gap-1.5">
            <UBadge
              v-for="(tentative, i) in tentatives"
              :key="tentative.t"
              :color="tonNote(tentative)"
              :variant="i === tentatives.length - 1 ? 'solid' : 'subtle'"
              size="sm"
              class="tabular-nums"
              :title="`Passage ${i + 1} — ${dateCourte(tentative.t)}`"
              :label="noteCourte(tentative)"
            />
          </div>
        </template>

        <div class="mt-4 flex flex-wrap items-center gap-2">
          <UButton
            color="neutral"
            variant="subtle"
            :size="compact ? 'xs' : 'md'"
            icon="i-lucide-rotate-ccw"
            label="Recommencer"
            @click="recommencer"
          />
          <UButton
            v-if="tentatives.length"
            color="neutral"
            variant="ghost"
            size="xs"
            icon="i-lucide-eraser"
            label="Oublier l'historique"
            @click="oublierHistorique"
          />
        </div>
      </template>
    </div>
  </section>
</template>
