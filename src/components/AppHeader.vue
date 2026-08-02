<script setup lang="ts">
import { useLocale } from '../content'

const { locale, locales, setLocale, content } = useLocale()

const langNames: Record<string, string> = { en: 'EN', zh: '中文', jp: '日本語' }
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <span class="header__name">{{ content.profile.name }}</span>
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
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-2) var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.header__name {
  font-weight: 600;
  font-size: 1rem;
}

.header__langs {
  display: flex;
  gap: var(--space-1);
}

.header__lang-btn {
  font-family: inherit;
  font-size: 0.85rem;
  padding: 0.3rem 0.6rem;
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
