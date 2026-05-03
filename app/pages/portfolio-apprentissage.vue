<script setup lang="ts">
type Niveau = 'Notion' | 'Application' | 'Maîtrise' | 'Expertise'
type EntryType = 'CE' | 'AC'

type ActivityEntry = {
  type: EntryType
  code: string
  label: string
  niveau: Niveau
  trace: { label: string, to: string }
}

type Activity = {
  number: number
  title: string
  description: string
  entries: ActivityEntry[]
}

type ProjectBlock = {
  slug: string
  title: string
  context: string
  to: string
  activities: Activity[]
}

type Composante = {
  code: string
  label: string
}

type Competence = {
  code: string
  title: string
  shortTitle: string
  niveau: string
  description: string
  composantes: Composante[]
  apprentissagesCritiques: { code: string, label: string }[]
}

useSeoMeta({
  title: "Portfolio d'apprentissage - BUT3 RACDV",
  ogTitle: "Portfolio d'apprentissage - BUT3 RACDV",
  description: "Bilan des apprentissages réalisés en BUT3 Informatique parcours RACDV : compétences, projets et trajectoire.",
  ogDescription: "Bilan des apprentissages réalisés en BUT3 Informatique parcours RACDV : compétences, projets et trajectoire."
})

const infosGenerales = [
  { label: 'Diplôme préparé', value: 'BUT Informatique' },
  { label: 'Établissement', value: 'IUT de Montpellier-Sète' },
  { label: 'Parcours', value: 'BUT3 RACDV (Réalisation d\'Applications : Conception, Développement, Validation)' },
  { label: 'Année universitaire', value: '2025 - 2026' },
  { label: 'Statut', value: 'Alternance' },
  { label: 'Entreprise d\'accueil', value: 'EFICAD' },
  { label: 'Démarrage du contrat', value: '1er septembre 2025' }
]

const competences: Competence[] = [
  {
    code: 'C1',
    shortTitle: 'Réaliser',
    title: 'Réaliser un développement d\'application',
    niveau: 'Niveau 3 - Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    description: 'Développer — c\'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
    composantes: [
      { code: 'CE1.01', label: 'en respectant les besoins décrits par le client' },
      { code: 'CE1.03', label: 'en appliquant les principes algorithmiques' },
      { code: 'CE1.04', label: 'en veillant à la qualité du code et à sa documentation' },
      { code: 'CE1.06', label: 'en choisissant les ressources techniques appropriées' }
    ],
    apprentissagesCritiques: [
      { code: 'AC31.01', label: 'Choisir et implémenter les architectures adaptées' },
      { code: 'AC31.02', label: 'Faire évoluer une application existante' },
      { code: 'AC31.03', label: 'Intégrer des solutions dans un environnement de production' }
    ]
  },
  {
    code: 'C2',
    shortTitle: 'Optimiser',
    title: 'Optimiser des applications informatiques',
    niveau: 'Niveau 3 - Analyser et optimiser des applications',
    description: 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources…',
    composantes: [
      { code: 'CE2.01', label: 'en formalisant et modélisant des situations complexes' },
      { code: 'CE2.02', label: 'en recensant les algorithmes et les structures de données usuels' },
      { code: 'CE2.03', label: 'en s\'appuyant sur des schémas de raisonnement' },
      { code: 'CE2.04', label: 'en justifiant les choix et validant les résultats' }
    ],
    apprentissagesCritiques: [
      { code: 'AC32.01', label: 'Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge…)' },
      { code: 'AC32.02', label: 'Profiler, analyser et justifier le comportement d\'un code existant' },
      { code: 'AC32.03', label: 'Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel…)' }
    ]
  },
  {
    code: 'C6',
    shortTitle: 'Collaborer',
    title: 'Collaborer au sein d\'une équipe informatique',
    niveau: 'Niveau 3 - Manager une équipe informatique',
    description: 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
    composantes: [
      { code: 'CE6.01', label: 'en inscrivant sa démarche au sein d\'une équipe pluridisciplinaire' },
      { code: 'CE6.02', label: 'en accompagnant la mise en œuvre des évolutions informatiques' },
      { code: 'CE6.03', label: 'en veillant au respect des contraintes juridiques' },
      { code: 'CE6.04', label: 'en développant une communication efficace et collaborative' }
    ],
    apprentissagesCritiques: [
      { code: 'AC36.01', label: 'Organiser et partager une veille technologique et informationnelle' },
      { code: 'AC36.02', label: 'Identifier les enjeux de l\'économie de l\'innovation numérique' },
      { code: 'AC36.03', label: 'Guider la conduite du changement informatique au sein d\'une organisation' },
      { code: 'AC36.04', label: 'Accompagner le management de projet informatique' }
    ]
  }
]

const uniflowTrace = (path: string, label: string) => ({ label, to: `/projects/uniflow${path}` })
const cardsTrace = (path: string, label: string) => ({ label, to: `/projects/cards-view${path}` })
const truemainTrace = (path: string, label: string) => ({ label, to: `/projects/truemain${path}` })

const projets: ProjectBlock[] = [
  {
    slug: 'uniflow',
    title: 'Mission 1 — Uniflow',
    context: 'Projet d\'entreprise (alternance EFICAD) - data stewardship entre EfiOPS, Salesforce et Dynamics 365. Initié en stage (juin-août 2025) puis poursuivi en alternance après validation en interne.',
    to: '/projects/uniflow',
    activities: [
      {
        number: 1,
        title: 'Conception de l\'architecture tri-panneaux',
        description: 'Choix et mise en œuvre de l\'architecture : front Vue/Nuxt, API ASP.NET Core, persistance EF Core, authentification MSAL Azure AD. Conception de l\'IHM tri-panneaux pour aligner EfiOPS, Salesforce et Dynamics côte à côte avec mise en évidence des divergences.',
        entries: [
          {
            type: 'CE',
            code: 'CE1.01',
            label: 'en respectant les besoins décrits par le client',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-recherche-et-synchronisation-tri-panneaux', 'Section synchronisation tri-panneaux')
          },
          {
            type: 'CE',
            code: 'CE1.06',
            label: 'en choisissant les ressources techniques appropriées',
            niveau: 'Expertise',
            trace: uniflowTrace('#image-vue-tri-panneaux', 'Vue tri-panneaux')
          },
          {
            type: 'AC',
            code: 'AC31.01',
            label: 'Choisir et implémenter les architectures adaptées',
            niveau: 'Expertise',
            trace: uniflowTrace('#image-vue-tri-panneaux', 'Vue tri-panneaux')
          }
        ]
      },
      {
        number: 2,
        title: 'Évolution du POC en outil interne pérennisé',
        description: 'Reprise après le stage : refactoring, ouverture progressive aux équipes commerciales et support, ajout de règles de détection, déploiement effectif sur l\'environnement interne EFICAD.',
        entries: [
          {
            type: 'CE',
            code: 'CE1.04',
            label: 'en veillant à la qualité du code et à sa documentation',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-evolution-du-projet-poc-stage-outil-interne', 'Évolution du projet')
          },
          {
            type: 'AC',
            code: 'AC31.02',
            label: 'Faire évoluer une application existante',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-evolution-du-projet-poc-stage-outil-interne', 'Évolution du projet')
          },
          {
            type: 'AC',
            code: 'AC31.03',
            label: 'Intégrer des solutions dans un environnement de production',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-demarche-methodes-de-travail', 'Démarche & CI/CD')
          }
        ]
      },
      {
        number: 3,
        title: 'Sécurisation et choix de bibliothèques dédiées',
        description: 'Mise en place de l\'authentification déléguée à Microsoft via MSAL pour aligner Uniflow sur l\'identité Azure AD interne. Choix d\'EF Core comme ORM pour la persistance.',
        entries: [
          {
            type: 'AC',
            code: 'AC32.03',
            label: 'Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#image-connexion-msal', 'Écran connexion MSAL')
          }
        ]
      },
      {
        number: 4,
        title: 'Démarche projet et conduite du changement',
        description: 'Pilotage agile : sprints courts, démos fonctionnelles, rétrospectives régulières. Sensibilisation des équipes commerciales et support à la qualité des données via démos ciblées et accompagnement à la lecture des erreurs critiques vs avertissements.',
        entries: [
          {
            type: 'CE',
            code: 'CE6.01',
            label: 'en inscrivant sa démarche au sein d\'une équipe pluridisciplinaire',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-demarche-methodes-de-travail', 'Démarche & méthodes')
          },
          {
            type: 'CE',
            code: 'CE6.02',
            label: 'en accompagnant la mise en œuvre des évolutions informatiques',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#image-detection-erreur-cadware', 'Erreurs critiques (CADWARE)')
          },
          {
            type: 'CE',
            code: 'CE6.04',
            label: 'en développant une communication efficace et collaborative',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#section-demarche-methodes-de-travail', 'Démarche & méthodes')
          },
          {
            type: 'AC',
            code: 'AC36.03',
            label: 'Guider la conduite du changement informatique au sein d\'une organisation',
            niveau: 'Maîtrise',
            trace: uniflowTrace('#image-detection-erreur-cadware', 'Erreurs critiques (CADWARE)')
          },
          {
            type: 'AC',
            code: 'AC36.04',
            label: 'Accompagner le management de projet informatique',
            niveau: 'Expertise',
            trace: uniflowTrace('#section-demarche-methodes-de-travail', 'Sprints, démos, rétros')
          }
        ]
      }
    ]
  },
  {
    slug: 'cards-view',
    title: 'Mission 2 — Composant Cartes (Cards View)',
    context: 'Projet d\'entreprise (alternance EFICAD) - composant UI Angular/PrimeNG réutilisable avec drag & drop, resize et image dans cellule.',
    to: '/projects/cards-view',
    activities: [
      {
        number: 1,
        title: 'Veille technologique et choix de l\'écosystème',
        description: 'Comparatif des bibliothèques drag & drop Angular (Angular CDK, ngx-drag-drop, PrimeNG Draggable) sur 4 critères : intégration PrimeNG existante, contrôle fin du resize, gestion du contenu personnalisé, maintenance long terme. Décision documentée pour la revue de code.',
        entries: [
          {
            type: 'CE',
            code: 'CE6.04',
            label: 'en développant une communication efficace et collaborative',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-veille-technologique-prealable', 'Veille technologique')
          },
          {
            type: 'AC',
            code: 'AC36.01',
            label: 'Organiser et partager une veille technologique et informationnelle',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-veille-technologique-prealable', 'Veille technologique')
          }
        ]
      },
      {
        number: 2,
        title: 'Conception et implémentation du composant',
        description: 'Composant Angular standalone configurable via inputs/outputs typés, surcouche autour de PrimeNG pour homogénéiser le rendu, slot personnalisé pour héberger n\'importe quel contenu dans la cellule.',
        entries: [
          {
            type: 'CE',
            code: 'CE1.04',
            label: 'en veillant à la qualité du code et à sa documentation',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-architecture-du-composant', 'Architecture du composant')
          },
          {
            type: 'CE',
            code: 'CE1.06',
            label: 'en choisissant les ressources techniques appropriées',
            niveau: 'Maîtrise',
            trace: cardsTrace('#image-personnalisation-cellule-card', 'Personnalisation d\'une cellule')
          },
          {
            type: 'AC',
            code: 'AC31.01',
            label: 'Choisir et implémenter les architectures adaptées',
            niveau: 'Expertise',
            trace: cardsTrace('#image-vue-card', 'Vue Card rendue (SWOOD)')
          }
        ]
      },
      {
        number: 3,
        title: 'Performance et profilage',
        description: 'Tests sur grilles denses (≥ 100 cartes) pour mesurer la fluidité du drag et du resize. Profilage via Chrome DevTools Performance pour identifier les re-renders inutiles. Optimisations ciblées : trackBy, OnPush change detection, debounce sur le resize en cours.',
        entries: [
          {
            type: 'CE',
            code: 'CE2.04',
            label: 'en justifiant les choix et validant les résultats',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-performance-profilage', 'Performance & profilage')
          },
          {
            type: 'AC',
            code: 'AC32.01',
            label: 'Anticiper les résultats de diverses métriques',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-performance-profilage', 'Performance & profilage')
          },
          {
            type: 'AC',
            code: 'AC32.02',
            label: 'Profiler, analyser et justifier le comportement d\'un code existant',
            niveau: 'Expertise',
            trace: cardsTrace('#section-performance-profilage', 'Performance & profilage')
          }
        ]
      },
      {
        number: 4,
        title: 'Intégration au backlog équipe',
        description: 'Composant intégré au backlog, présenté en démo de sprint pour valider l\'API publique, itérations sur les retours des autres équipes utilisatrices avant figement de l\'interface.',
        entries: [
          {
            type: 'CE',
            code: 'CE6.01',
            label: 'en inscrivant sa démarche au sein d\'une équipe pluridisciplinaire',
            niveau: 'Maîtrise',
            trace: cardsTrace('#section-demarche-integration-equipe', 'Démarche & intégration équipe')
          },
          {
            type: 'AC',
            code: 'AC36.04',
            label: 'Accompagner le management de projet informatique',
            niveau: 'Expertise',
            trace: cardsTrace('#section-demarche-integration-equipe', 'Démarche & intégration équipe')
          }
        ]
      }
    ]
  },
  {
    slug: 'truemain',
    title: 'Mission 3 — TrueMain (projet personnel)',
    context: 'Projet personnel solo démarré en février 2026 - agrégation de stats League of Legends sur stack .NET 10 / Nuxt 4 / PostgreSQL / Docker.',
    to: '/projects/truemain',
    activities: [
      {
        number: 1,
        title: 'Conception de l\'architecture multi-services',
        description: 'Architecture API REST + Worker Service pour l\'ingestion + front Nuxt 4 + PostgreSQL, le tout orchestré par Docker Compose. Libs partagées (Core domain, Data EF Core) pour éviter la duplication.',
        entries: [
          {
            type: 'CE',
            code: 'CE1.04',
            label: 'en veillant à la qualité du code et à sa documentation',
            niveau: 'Maîtrise',
            trace: truemainTrace('#image-architecture', 'Schéma d\'architecture')
          },
          {
            type: 'CE',
            code: 'CE1.06',
            label: 'en choisissant les ressources techniques appropriées',
            niveau: 'Expertise',
            trace: truemainTrace('#image-architecture', 'Schéma d\'architecture')
          },
          {
            type: 'AC',
            code: 'AC31.01',
            label: 'Choisir et implémenter les architectures adaptées',
            niveau: 'Expertise',
            trace: truemainTrace('#image-architecture', 'Schéma d\'architecture')
          },
          {
            type: 'AC',
            code: 'AC31.03',
            label: 'Intégrer des solutions dans un environnement de production',
            niveau: 'Application',
            trace: truemainTrace('#section-infrastructure', 'Infrastructure Docker')
          }
        ]
      },
      {
        number: 2,
        title: 'Ingestion Riot API et anticipation des métriques',
        description: 'Worker Service avec respect des quotas Riot Games (rate limiting app + method), file d\'attente, back-off exponentiel et suivi des métriques d\'ingestion (matchs/min, latence p95).',
        entries: [
          {
            type: 'CE',
            code: 'CE2.01',
            label: 'en formalisant et modélisant des situations complexes',
            niveau: 'Maîtrise',
            trace: truemainTrace('#section-performance-rate-limiting', 'Performance & rate limiting')
          },
          {
            type: 'CE',
            code: 'CE2.04',
            label: 'en justifiant les choix et validant les résultats',
            niveau: 'Maîtrise',
            trace: truemainTrace('#section-performance-rate-limiting', 'Performance & rate limiting')
          },
          {
            type: 'AC',
            code: 'AC32.01',
            label: 'Anticiper les résultats de diverses métriques',
            niveau: 'Maîtrise',
            trace: truemainTrace('#section-performance-rate-limiting', 'Performance & rate limiting')
          }
        ]
      },
      {
        number: 3,
        title: 'Profilage et optimisation BDD',
        description: 'Analyse du SQL généré par EF Core, ajout d\'index ciblés (matchs par joueur, builds par champion), mise en cache mémoire des appels lecture les plus chauds. Choix justifiés dans le README technique.',
        entries: [
          {
            type: 'CE',
            code: 'CE2.04',
            label: 'en justifiant les choix et validant les résultats',
            niveau: 'Expertise',
            trace: truemainTrace('#section-profilage-optimisation', 'Profilage & optimisation')
          },
          {
            type: 'AC',
            code: 'AC32.02',
            label: 'Profiler, analyser et justifier le comportement d\'un code existant',
            niveau: 'Expertise',
            trace: truemainTrace('#section-profilage-optimisation', 'Profilage & optimisation')
          }
        ]
      }
    ]
  }
]

type NiveauMeta = {
  color: 'neutral' | 'warning' | 'info' | 'success'
  dots: number
  description: string
}

const niveauMeta: Record<Niveau, NiveauMeta> = {
  Notion: { color: 'neutral', dots: 1, description: 'Découverte du concept, premiers pas guidés.' },
  Application: { color: 'warning', dots: 2, description: 'Mise en pratique en autonomie sur un cas concret.' },
  Maîtrise: { color: 'info', dots: 3, description: 'Pratique solide et transposable à de nouveaux contextes.' },
  Expertise: { color: 'success', dots: 4, description: 'Référent : capable d\'accompagner et de faire évoluer.' }
}

const niveauOrder: Niveau[] = ['Notion', 'Application', 'Maîtrise', 'Expertise']

const entryTypeColor = (type: EntryType): 'primary' | 'info' =>
  type === 'CE' ? 'info' : 'primary'

type FaqItem = { label: string, content: string }

const reflexion: FaqItem[] = [
  {
    label: 'Ai-je réalisé les objectifs fixés par le programme national ? Si non, sur quels AC et CE dois-je travailler ?',
    content: 'Globalement oui : sur les 3 compétences travaillées au niveau 3 (C1 Réaliser, C2 Optimiser, C6 Collaborer), je me situe majoritairement à **Maîtrise (3/4)** ou **Expertise (4/4)** comme le montre la matrice ci-dessus. Mes points forts : le **développement web** et la **conception d\'API**, illustrés par Uniflow et TrueMain. \n\nLes axes que je continue à travailler : (1) la posture de **management d\'équipe** (AC36.04) au-delà du simple participant — j\'ai eu l\'occasion de l\'expérimenter en alternance mais je veux gagner en aisance pour répartir les tâches et tenir des points réguliers ; (2) la dimension **conduite du changement** (AC36.03) sur des publics non-techniques.'
  },
  {
    label: 'Qu\'ai-je mis en pratique de ma formation en entreprise, en TD ou pendant la SAÉ ?',
    content: '**En entreprise** (Uniflow + Cards View chez EFICAD) : mise en place d\'une chaîne de production via les **pipelines CI/CD**, montée en compétence sur **Angular** sur des écrans réels, application des **méthodes agiles** (sprints, démos, rétros) dans le rythme de l\'équipe.\n\n**En TD et SAÉ** : consolidation du JavaScript moderne et de l\'écosystème Vue/Nuxt, conception d\'API ASP.NET, démarche de tests.\n\n**En projet personnel** (TrueMain) : application directe des principes vus en formation — architecture multi-services, conteneurisation Docker, profilage EF Core.'
  },
  {
    label: 'Ai-je rencontré des difficultés particulières ou des situations problématiques ? Si oui, lesquelles ? Comment les ai-je gérées ?',
    content: 'Deux principales :\n\n1. **Le travail en équipe sur des projets longs** : répartir les tâches, accepter que le code ne soit pas écrit comme je l\'aurais fait, faire des points réguliers. Je m\'appuie sur la **Communication NonViolente (CNV)** — observer les faits, exprimer mon ressenti, formuler une demande claire — pour exprimer désaccords et besoins sans crisper l\'échange.\n\n2. **La montée en compétence rapide sur Angular en entreprise**, alors que je n\'avais pratiqué que Vue/Nuxt jusque-là. Géré par de la veille ciblée (RxJS, change detection, OnPush) et en m\'appuyant sur les revues de code de l\'équipe.'
  },
  {
    label: 'Qu\'est-ce qui m\'a plu particulièrement ?',
    content: 'Voir **Uniflow vivre et être utilisé au quotidien** chez EFICAD : passer du POC stage à un outil que les équipes commerciales et support consultent vraiment, c\'est très motivant.\n\nLa **liberté technique sur TrueMain** : choisir librement la stack (.NET 10, Nuxt 4, PostgreSQL, Docker) et concevoir l\'architecture sans contrainte legacy.\n\nL\'effet structurant des **pipelines CI/CD** et des méthodes agiles : ça change radicalement la confiance qu\'on a au moment de livrer.'
  },
  {
    label: 'Qu\'est-ce que j\'ai moins aimé, qu\'est-ce qui m\'a paru difficile ?',
    content: 'La **charge cumulée alternance + projets école** au S5 : il faut souvent arbitrer entre la profondeur sur un sujet et l\'avancement sur les autres, et on rentre dans les projets avec une fatigue accumulée.'
  },
  {
    label: 'Quel est mon projet post-BUT ?',
    content: 'À la rentrée prochaine j\'intègre **IMT Mines Alès, parcours ingénieur Développement Logiciel**. Mon objectif est de continuer à approfondir le génie logiciel (architecture, qualité, DevOps) tout en gardant un pied dans le concret avec des projets en entreprise — idéalement en **alternance**.'
  },
  {
    label: 'Dans quelle mesure cette formation a-t-elle fait évoluer mon projet ?',
    content: 'Cette année a **confirmé** mon orientation génie logiciel et m\'a donné envie de poursuivre en alternance en école d\'ingénieur — l\'expérience EFICAD m\'a montré ce que j\'apprends vraiment quand je suis en entreprise et c\'est ça que je veux prolonger.\n\nElle a aussi **élargi** mon projet : la mise en place de pipelines CI/CD et la conception architecturale d\'Uniflow et de TrueMain m\'ont sensibilisé aux dimensions **DevOps et architecture logicielle** que je veux approfondir au-delà du simple développement applicatif.'
  }
]
</script>

<template>
  <UPage>
    <UPageHero
      title="Portfolio d'apprentissage"
      description="Bilan des apprentissages réalisés au semestre 5 - BUT3 Informatique parcours RACDV. Activités menées, compétences mobilisées et regard sur la formation."
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div class="flex flex-wrap gap-2">
          <UBadge color="primary" variant="soft" size="sm">
            BUT3 RACDV
          </UBadge>
          <UBadge color="neutral" variant="soft" size="sm">
            Année 2025 - 2026
          </UBadge>
          <UBadge color="info" variant="soft" size="sm">
            Alternance EFICAD
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      title="Informations générales"
      description="Le cadre dans lequel s'inscrit ce portfolio."
      :ui="{
        container: '!pt-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    >
      <UCard :ui="{ body: 'space-y-3' }">
        <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          <div
            v-for="info in infosGenerales"
            :key="info.label"
            class="flex flex-col"
          >
            <dt class="text-xs uppercase tracking-wide text-muted">
              {{ info.label }}
            </dt>
            <dd class="text-sm font-medium text-highlighted">
              {{ info.value }}
            </dd>
          </div>
        </dl>
      </UCard>
    </UPageSection>

    <UPageSection
      title="Référentiel des compétences BUT3 RACDV"
      description="Les trois compétences travaillées au niveau 3 cette année, avec leurs composantes essentielles et les apprentissages critiques associés."
      :ui="{
        container: '!pt-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    >
      <p class="text-xs text-muted italic mb-4">
        Source des libellés : Programme National BUT Informatique 2022 (mis à jour 2023) - Ministère de l'Enseignement supérieur, parcours A « Réalisation d'applications : conception, développement, validation ».
      </p>
      <div class="space-y-6">
        <UCard
          v-for="competence in competences"
          :key="competence.code"
          :ui="{ body: 'space-y-5' }"
        >
          <div class="flex flex-col md:flex-row md:items-start md:gap-6">
            <div class="md:w-1/3 space-y-2 mb-4 md:mb-0">
              <div class="flex items-center gap-2">
                <UBadge color="primary" variant="solid" size="md">
                  {{ competence.code }}
                </UBadge>
                <h3 class="text-xl font-semibold text-highlighted">
                  {{ competence.shortTitle }}
                </h3>
              </div>
              <p class="text-sm font-medium text-default">
                {{ competence.title }}
              </p>
              <p class="text-xs text-muted italic">
                {{ competence.niveau }}
              </p>
              <p class="text-sm text-muted leading-relaxed pt-2">
                {{ competence.description }}
              </p>
            </div>

            <div class="md:flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 class="text-xs uppercase tracking-wide text-muted mb-3">
                  Composantes essentielles
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="composante in competence.composantes"
                    :key="composante.code"
                    class="text-sm flex gap-2 items-start"
                  >
                    <UBadge color="info" variant="subtle" size="sm" class="shrink-0 font-mono">
                      {{ composante.code }}
                    </UBadge>
                    <span class="text-default">{{ composante.label }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-xs uppercase tracking-wide text-muted mb-3">
                  Apprentissages critiques
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="ac in competence.apprentissagesCritiques"
                    :key="ac.code"
                    class="text-sm flex gap-2 items-start"
                  >
                    <UBadge color="primary" variant="subtle" size="sm" class="shrink-0 font-mono">
                      {{ ac.code }}
                    </UBadge>
                    <span class="text-default">{{ ac.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      title="Activités réalisées"
      description="Pour chaque mission, les activités menées et les composantes essentielles (CE) et apprentissages critiques (AC) qu'elles ont permis de travailler. Chaque CE / AC est associé à une trace cliquable."
      :ui="{
        container: '!pt-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    >
      <UCard class="mb-6" :ui="{ body: 'space-y-3' }">
        <h4 class="text-xs uppercase tracking-wide text-muted">
          Légende des niveaux
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div
            v-for="niveau in niveauOrder"
            :key="niveau"
            class="flex items-start gap-3"
          >
            <UBadge
              :color="niveauMeta[niveau].color"
              variant="soft"
              size="sm"
              class="shrink-0 mt-0.5"
            >
              <span class="font-mono mr-1">{{ niveauMeta[niveau].dots }}/4</span>
              {{ niveau }}
            </UBadge>
            <p class="text-xs text-muted">
              {{ niveauMeta[niveau].description }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 pt-2 text-xs text-muted">
          <span class="inline-flex items-center gap-2">
            <UBadge color="info" variant="subtle" size="sm" class="font-mono">CE</UBadge>
            Composante essentielle
          </span>
          <span class="inline-flex items-center gap-2">
            <UBadge color="primary" variant="subtle" size="sm" class="font-mono">AC</UBadge>
            Apprentissage critique
          </span>
        </div>
      </UCard>

      <div class="space-y-10">
        <div
          v-for="projet in projets"
          :key="projet.slug"
          class="space-y-4"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div class="space-y-1">
              <h3 class="text-2xl font-semibold text-highlighted">
                {{ projet.title }}
              </h3>
              <p class="text-sm text-muted max-w-3xl">
                {{ projet.context }}
              </p>
            </div>
            <UButton
              :to="projet.to"
              icon="i-lucide-arrow-right"
              trailing
              variant="subtle"
              color="primary"
              size="sm"
            >
              Fiche projet
            </UButton>
          </div>

          <UCard
            v-for="activity in projet.activities"
            :key="`${projet.slug}-${activity.number}`"
            :ui="{ body: 'space-y-4' }"
          >
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-highlighted">
                Activité {{ activity.number }} — {{ activity.title }}
              </h4>
              <p class="text-sm text-muted leading-relaxed">
                {{ activity.description }}
              </p>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left text-xs uppercase tracking-wide text-muted border-b border-muted">
                    <th class="py-2 pr-3 font-medium">
                      Type
                    </th>
                    <th class="py-2 pr-3 font-medium">
                      Code
                    </th>
                    <th class="py-2 pr-3 font-medium">
                      Libellé officiel
                    </th>
                    <th class="py-2 pr-3 font-medium">
                      Niveau
                    </th>
                    <th class="py-2 font-medium">
                      Trace
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(entry, index) in activity.entries"
                    :key="index"
                    class="border-b border-muted/40 last:border-0"
                  >
                    <td class="py-3 pr-3 align-top whitespace-nowrap">
                      <UBadge
                        :color="entryTypeColor(entry.type)"
                        variant="subtle"
                        size="sm"
                        class="font-mono"
                      >
                        {{ entry.type }}
                      </UBadge>
                    </td>
                    <td class="py-3 pr-3 align-top whitespace-nowrap font-mono text-xs text-muted">
                      {{ entry.code }}
                    </td>
                    <td class="py-3 pr-3 align-top text-default">
                      {{ entry.label }}
                    </td>
                    <td class="py-3 pr-3 align-top whitespace-nowrap">
                      <UBadge
                        :color="niveauMeta[entry.niveau].color"
                        variant="soft"
                        size="sm"
                      >
                        <span class="font-mono mr-1">{{ niveauMeta[entry.niveau].dots }}/4</span>
                        {{ entry.niveau }}
                      </UBadge>
                    </td>
                    <td class="py-3 align-top">
                      <ULink
                        :to="entry.trace.to"
                        class="text-sm text-primary inline-flex items-center gap-1"
                      >
                        {{ entry.trace.label }}
                        <UIcon name="i-lucide-external-link" class="size-3.5" />
                      </ULink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      title="Mon point de vue sur la formation"
      description="Réflexion personnelle sur le semestre 5 - apprentissages, difficultés et perspectives."
      :ui="{
        container: '!pt-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    >
      <UAccordion
        trailing-icon="lucide:plus"
        :items="reflexion"
        :unmount-on-hide="false"
        :ui="{
          item: 'border-none',
          trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base',
          trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
        }"
      >
        <template #body="{ item }">
          <MDC
            :value="item.content"
            unwrap="p"
            class="px-4 text-sm text-muted leading-relaxed"
          />
        </template>
      </UAccordion>
    </UPageSection>
  </UPage>
</template>
