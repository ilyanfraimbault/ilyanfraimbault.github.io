<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <div class="flex flex-col gap-8">
        <LandingTimeline
          :title="page.education.title"
          :items="page.education.items"
        />
        <LandingTimeline
          :title="page.experience.title"
          :items="page.experience.items"
        />
      </div>
    </UPageSection>
    <LandingProjects :page />
    <LandingFAQ :page />
  </UPage>
</template>
