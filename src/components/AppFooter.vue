<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../content'

const { content, locale } = useLocale()

const dateLocale: Record<string, string> = { en: 'en-US', zh: 'zh-CN', jp: 'ja-JP' }

const lastUpdated = computed(() =>
  new Intl.DateTimeFormat(dateLocale[locale.value], { year: 'numeric', month: 'long' }).format(
    new Date(__BUILD_DATE__)
  )
)
</script>

<template>
  <footer class="footer">
    <p class="footer__period">{{ content.footerPeriod }}</p>
    <p class="footer__updated">{{ content.lastUpdatedLabel }}: {{ lastUpdated }}</p>
  </footer>
</template>

<style scoped>
.footer {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3) var(--space-3) var(--space-5);
  border-top: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.footer p {
  margin: 0.2rem 0;
}
</style>
