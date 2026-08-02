<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../content'
import { publicationLinks } from '../content/publicationLinks'

const { content } = useLocale()

const linksFor = (i: number) => {
  const pl = publicationLinks[i]
  const entries: { label: string; url: string }[] = []
  if (pl.paper) entries.push({ label: content.value.paperLabel, url: pl.paper })
  if (pl.project) entries.push({ label: content.value.projectLabel, url: pl.project })
  if (pl.code) entries.push({ label: content.value.codeLabel, url: pl.code })
  if (pl.video) entries.push({ label: content.value.videoLabel, url: pl.video })
  if (pl.openreview) entries.push({ label: content.value.openreviewLabel, url: pl.openreview })
  return entries
}

const publicationsWithLinks = computed(() =>
  content.value.publications.map((pub, i) => ({ pub, links: linksFor(i), meta: publicationLinks[i] }))
)
</script>

<template>
  <section class="pubs">
    <h2 class="pubs__title">{{ content.publicationsTitle }}</h2>
    <article v-for="entry in publicationsWithLinks" :key="entry.pub.title" class="pubs__item">
      <img class="pubs__image" :src="entry.meta.image" alt="" />
      <div class="pubs__body">
        <h3 class="pubs__paper-title">
          {{ entry.pub.title }}
          <span v-if="entry.meta.isNew" class="pubs__new">NEW</span>
        </h3>
        <p class="pubs__authors" v-html="entry.pub.authors"></p>
        <p class="pubs__venue">{{ entry.pub.venue }}</p>
        <p class="pubs__links">
          <template v-for="(link, j) in entry.links" :key="link.label">
            <span v-if="j > 0"> / </span><a :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
          </template>
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.pubs {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.pubs__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.pubs__item {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
}

.pubs__item:first-of-type {
  border-top: 1px solid var(--color-border);
}

.pubs__image {
  width: 12.5rem;
  height: 7.5rem;
  object-fit: cover;
  flex-shrink: 0;
}

.pubs__paper-title {
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0 0 0.3rem;
}

.pubs__new {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-link-hover);
  vertical-align: middle;
  margin-left: 0.3rem;
}

.pubs__authors {
  margin: 0 0 0.3rem;
}

.pubs__venue {
  font-style: italic;
  color: var(--color-text-muted);
  margin: 0 0 0.4rem;
}

.pubs__links {
  margin: 0;
}

@media (max-width: 32rem) {
  .pubs__item {
    flex-direction: column;
  }

  .pubs__image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}
</style>
