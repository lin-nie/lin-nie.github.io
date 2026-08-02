<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import ProfileSection from './components/ProfileSection.vue'
import NewsSection from './components/NewsSection.vue'
import PublicationsSection from './components/PublicationsSection.vue'
import EducationSection from './components/EducationSection.vue'
import HonorsSection from './components/HonorsSection.vue'
import ScientificFundSection from './components/ScientificFundSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <ProfileSection />
    <NewsSection />
    <PublicationsSection />
    <EducationSection />
    <HonorsSection />
    <ScientificFundSection />
  </main>
  <AppFooter />
</template>
