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
        <p class="fund__meta">{{ f.match }}</p>
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
  font-size: 0.95rem;
}

.fund__list li {
  margin-bottom: 0.6rem;
}

.fund__meta {
  margin: 0.1rem 0 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
</style>
