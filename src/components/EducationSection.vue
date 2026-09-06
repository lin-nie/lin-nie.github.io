<script setup lang="ts">
import { useLocale } from '../content'

const { content } = useLocale()
</script>

<template>
  <section class="education">
    <h2 class="education__title">{{ content.educationTitle }}</h2>
    <div v-for="entry in content.education" :key="entry.period" class="education__entry">
      <span class="education__period">{{ entry.period }}</span>
      <div class="education__body">
        <p class="education__degree">
          {{ entry.degree }} · {{ content.supervisedByLabel }}
          <a :href="entry.mentorUrl" target="_blank" rel="noopener">{{ entry.mentor }}</a><span v-if="entry.mentorTag"> ({{ entry.mentorTag }})</span><template v-if="entry.mentor2"> {{ content.andWord }} <a :href="entry.mentor2Url" target="_blank" rel="noopener">{{ entry.mentor2 }}</a><span v-if="entry.mentor2Tag"> ({{ entry.mentor2Tag }})</span></template>
        </p>
        <p v-if="entry.thesis" class="education__thesis">
          <span class="education__thesis-label">{{ content.thesisLabel }}</span> {{ entry.thesis }}
        </p>
        <p class="education__univ" v-html="entry.institution"></p>
        <p v-if="entry.institution2" class="education__univ" v-html="entry.institution2"></p>
        <p v-if="entry.support" class="education__support">
          {{ content.supportedByLabel }}
          <a :href="entry.supportUrl" target="_blank" rel="noopener">{{ entry.support }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.education__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.education__entry {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-2) 0;
  border-top: 1px solid var(--color-border);
}

.education__entry:last-child {
  border-bottom: 1px solid var(--color-border);
}

.education__period {
  flex-shrink: 0;
  width: 8rem;
  color: var(--color-text-muted);
}

.education__degree {
  margin: 0 0 0.3rem;
  font-weight: 600;
}

.education__thesis {
  margin: 0 0 0.3rem;
  font-style: italic;
}

.education__thesis-label {
  font-style: normal;
  color: var(--color-text-muted);
}

.education__univ {
  margin: 0;
  color: var(--color-text-muted);
}

.education__support {
  margin: 0.3rem 0 0;
  color: var(--color-text-muted);
}

@media (max-width: 32rem) {
  .education__entry {
    flex-direction: column;
    gap: 0.15rem;
  }

  .education__period {
    width: auto;
    font-size: 0.8rem;
  }
}
</style>
