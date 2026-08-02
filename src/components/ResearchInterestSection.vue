<script setup lang="ts">
import { useLocale } from '../content'

const { content } = useLocale()
</script>

<template>
  <section class="research">
    <h2 class="research__title">{{ content.researchTitle }}</h2>
    <div class="research__group">
      <h3 class="research__subtitle">{{ content.overallField }}</h3>
      <ul class="research__list">
        <li v-for="item in content.researchOverInterest" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div class="research__group">
      <h3 class="research__subtitle">{{ content.specialField }}</h3>
      <ul class="research__list">
        <li v-for="item in content.researchSpecialInterest" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.research {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.research__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.research__group {
  margin-bottom: var(--space-3);
}

.research__subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.research__list {
  margin: 0;
  padding-left: 1.2rem;
}

.research__list li {
  margin-bottom: 0.3rem;
}
</style>
