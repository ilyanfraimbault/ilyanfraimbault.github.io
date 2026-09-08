<script setup lang="ts">
withDefaults(defineProps<{
  titre?: string
  icone?: string
}>(), {
  titre: 'Exporter mes résultats',
  icone: 'i-lucide-download'
})

const repertoire = useRepertoireFiches()

// Rien n'est lu au rendu serveur : le stockage n'existe pas encore, et une
// lecture ici ferait diverger l'hydratation d'un site prérendu.
const resultats = ref<ResultatsExport | null>(null)
const apercuOuvert = ref(false)

function relire() {
  resultats.value = rassemblerResultats(repertoire.value)
}

onMounted(relire)

// Le répertoire arrive par une requête asynchrone : quand il se remplit, les
// intitulés des fiches doivent rejoindre l'export déjà constitué.
watch(repertoire, relire)

const json = computed(() => (resultats.value ? JSON.stringify(resultats.value, null, 2) : ''))

const vide = computed(() => !resultats.value || (!resultats.value.fiches.length && !resultats.value.qcm.length))

const questionsTrouvees = computed(() =>
  resultats.value?.fiches.reduce((n, f) => n + f.reussies, 0) ?? 0)

const passages = computed(() =>
  resultats.value?.qcm.reduce((n, q) => n + q.tentatives.length, 0) ?? 0)

const poids = computed(() => `${Math.max(1, Math.round(json.value.length / 1024))} Ko`)

function copier() {
  copyToClipboard(json.value, 'Résultats copiés — colle-les dans la conversation')
}

/**
 * Téléchargement local : le fichier est fabriqué dans le navigateur, rien ne
 * part vers un serveur. L'URL temporaire est révoquée aussitôt, sans quoi le
 * contenu resterait en mémoire jusqu'au rechargement de la page.
 */
function telecharger() {
  const jour = new Date().toISOString().slice(0, 10)
  const url = URL.createObjectURL(new Blob([json.value], { type: 'application/json' }))
  const lien = document.createElement('a')
  lien.href = url
  lien.download = `resultats-${jour}.json`
  lien.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <section class="cours-export my-10 rounded-lg border border-default bg-elevated/25 px-4 py-4 sm:px-5">
    <div class="flex items-center gap-2">
      <UIcon
        :name="icone"
        class="size-5 shrink-0 text-primary"
      />
      <h2 class="m-0! text-xl! font-semibold text-highlighted">
        {{ titre }}
      </h2>
    </div>

    <p class="mt-2! mb-0! text-sm text-muted">
      Un fichier JSON avec tout ce que ce navigateur a retenu : les scores de chaque passage de QCM,
      leur date, les questions ratées à chaque fois, et les questions d'exercice qui ont fini par être
      trouvées. Rien ne quitte ta machine tant que tu ne le donnes pas toi-même.
    </p>

    <template v-if="vide">
      <p class="mt-4 mb-0 text-sm text-dimmed">
        Rien à exporter pour l'instant : réponds à une question ou corrige un QCM, et ce bloc se
        remplira.
      </p>
    </template>

    <template v-else>
      <p class="mt-4 mb-0 text-sm text-muted">
        <span class="font-medium text-highlighted tabular-nums">{{ resultats!.fiches.length }}</span>
        fiche{{ resultats!.fiches.length > 1 ? 's' : '' }} commencée{{ resultats!.fiches.length > 1 ? 's' : '' }},
        <span class="font-medium text-highlighted tabular-nums">{{ questionsTrouvees }}</span>
        question{{ questionsTrouvees > 1 ? 's' : '' }} trouvée{{ questionsTrouvees > 1 ? 's' : '' }},
        <span class="font-medium text-highlighted tabular-nums">{{ passages }}</span>
        passage{{ passages > 1 ? 's' : '' }} de QCM enregistré{{ passages > 1 ? 's' : '' }}.
        <span class="text-dimmed">({{ poids }})</span>
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-2">
        <UButton
          color="primary"
          icon="i-lucide-clipboard-copy"
          label="Copier le JSON"
          @click="copier"
        />
        <UButton
          color="neutral"
          variant="subtle"
          icon="i-lucide-download"
          label="Télécharger le fichier"
          @click="telecharger"
        />
        <UButton
          color="neutral"
          variant="ghost"
          size="xs"
          :icon="apercuOuvert ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :label="apercuOuvert ? 'Masquer l\'aperçu' : 'Voir ce qui sera exporté'"
          :aria-expanded="apercuOuvert"
          @click="apercuOuvert = !apercuOuvert"
        />
      </div>

      <pre
        v-show="apercuOuvert"
        class="cours-export-apercu mt-4 max-h-80 overflow-auto rounded-lg border border-default bg-default p-3 text-xs"
      >{{ json }}</pre>

      <p class="mt-4 mb-0 text-sm text-muted">
        Pour mesurer une progression, exporte une seconde fois après avoir retravaillé : la
        comparaison des deux fichiers dit ce qui a été rattrapé et ce qui résiste. Les passages de
        QCM, eux, portent déjà leur date — leur évolution se lit dans un seul export.
      </p>
    </template>
  </section>
</template>

<style scoped>
/* Le JSON est du texte brut : il défile dans son cadre plutôt que d'élargir la
   page, et n'hérite pas de la typographie du Markdown alentour. */
.cours-export-apercu {
  white-space: pre;
  tab-size: 2;
}
</style>
