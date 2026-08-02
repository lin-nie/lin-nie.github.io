<script setup lang="ts">
import { useLocale } from '../content'

const { content } = useLocale()
</script>

<template>
  <section class="patent">
    <h2 class="patent__title">{{ content.patentTitle }}</h2>
    <ul class="patent__list">
      <li v-for="p in content.patents" :key="p.number">
        <strong>{{ p.name }}</strong>
        <p class="patent__meta">{{ p.author }} · {{ p.number }}</p>
      </li>
    </ul>

    <h3 class="patent__subtitle">{{ content.copyrightTitle }}</h3>
    <ul class="patent__list">
      <li v-for="c in content.softwareCopyright" :key="c.number">
        <strong>{{ c.name }}</strong>
        <p class="patent__meta">{{ c.number }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.patent {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.patent__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.patent__subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin: var(--space-3) 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.patent__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.patent__list li {
  margin-bottom: 0.6rem;
}

.patent__meta {
  margin: 0.1rem 0 0;
  color: var(--color-text-muted);
}
</style>
