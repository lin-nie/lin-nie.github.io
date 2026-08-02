<script setup lang="ts">
import { useLocale } from '../content'

const { locale, locales, setLocale } = useLocale()

const langNames: Record<string, string> = { en: 'EN', zh: '中文', jp: '日本語' }
</script>

<template>
  <div class="header__inner">
    <nav class="header__langs" aria-label="Language switcher">
      <button
        v-for="l in locales"
        :key="l"
        class="header__lang-btn"
        :class="{ 'header__lang-btn--active': l === locale }"
        type="button"
        @click="setLocale(l)"
      >
        {{ langNames[l] }}
      </button>
    </nav>
  </div>
</template>

<style scoped>
.header__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3) var(--space-3) 0;
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2);
}

.header__langs {
  display: flex;
  gap: var(--space-1);
}

.header__lang-btn {
  font-family: inherit;
  font-size: 0.85rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
}

.header__lang-btn--active {
  border-color: var(--color-link);
  color: var(--color-link);
  font-weight: 700;
}

.header__lang-btn:hover {
  border-color: var(--color-link-hover);
  color: var(--color-link-hover);
}
</style>
