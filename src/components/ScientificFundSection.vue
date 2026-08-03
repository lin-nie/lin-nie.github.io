<script setup lang="ts">
import { useLocale } from '../content'

const { content } = useLocale()
</script>

<template>
  <section class="fund">
    <h2 class="fund__title">{{ content.fundTitle }}</h2>
    <ul class="fund__list">
      <li v-for="f in content.scientificFund" :key="f.match">
        <strong v-html="f.name"></strong>
        <span class="fund__role">{{ f.role }}</span>
        <p class="fund__meta">{{ f.match }}</p>
        <p v-if="f.note" class="fund__note">{{ f.note }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.fund {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-4);
}

.fund__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.fund__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fund__list li {
  margin-bottom: 0.6rem;
}

.fund__list strong {
  font-size: 0.9rem;
  white-space: nowrap;
}

.fund__role {
  margin-left: 0.5rem;
  padding: 0.05rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  white-space: nowrap;
}

.fund__meta {
  margin: 0.1rem 0 0;
  color: var(--color-text-muted);
}

.fund__note {
  margin: 0.1rem 0 0;
  font-style: italic;
  color: var(--color-text-muted);
}

@media (max-width: 42rem) {
  .fund__list strong {
    white-space: normal;
  }
}
</style>
