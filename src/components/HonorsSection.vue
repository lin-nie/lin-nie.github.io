<script setup lang="ts">
import { useLocale } from '../content'

const { content } = useLocale()
</script>

<template>
  <section class="honors">
    <h2 class="honors__title">{{ content.honorsTitle }}</h2>

    <h3 class="honors__subtitle">{{ content.scholarshipLabel }}</h3>
    <ul class="honors__list">
      <li v-for="s in content.scholarships" :key="s.text">
        <a v-if="s.url" :href="s.url" target="_blank" rel="noopener">{{ s.text }}</a>
        <template v-else>{{ s.text }}</template>
        <span v-if="s.explain" class="honors__explain"> ({{ s.explain }})</span>
        <div v-if="s.supp" class="honors__supp">{{ s.supp }}</div>
      </li>
    </ul>

    <h3 class="honors__subtitle">{{ content.awardsLabel }}</h3>
    <ul class="honors__list">
      <li v-for="a in content.awards" :key="a.text">
        <a v-if="a.url" :href="a.url" target="_blank" rel="noopener">{{ a.text }}</a>
        <template v-else>{{ a.text }}</template>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.honors {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.honors__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.honors__subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin: var(--space-3) 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.honors__subtitle:first-of-type {
  margin-top: 0;
}

.honors__list {
  margin: 0;
  padding-left: 1.2rem;
}

.honors__list li {
  margin-bottom: 0.5rem;
}

.honors__explain {
  color: var(--color-text-muted);
}

.honors__supp {
  font-style: italic;
  color: var(--color-text-muted);
}
</style>
