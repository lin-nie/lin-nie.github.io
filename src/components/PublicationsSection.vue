<script setup lang="ts">
import { useLocale } from '../content'
import { publicationLinks } from '../content/publicationLinks'

const { content } = useLocale()
</script>

<template>
  <section class="pubs">
    <h2 class="pubs__title">{{ content.publicationsTitle }}</h2>
    <article v-for="(pub, i) in content.publications" :key="pub.title" class="pubs__item">
      <img class="pubs__image" :src="publicationLinks[i].image" alt="" />
      <div class="pubs__body">
        <h3 class="pubs__paper-title">
          {{ pub.title }}
          <span v-if="publicationLinks[i].isNew" class="pubs__new">NEW</span>
        </h3>
        <p class="pubs__authors" v-html="pub.authors"></p>
        <p class="pubs__venue">{{ pub.venue }}</p>
        <div class="pubs__links">
          <a v-if="publicationLinks[i].paper" :href="publicationLinks[i].paper" target="_blank" rel="noopener">{{ content.paperLabel }}</a>
          <a v-if="publicationLinks[i].project" :href="publicationLinks[i].project" target="_blank" rel="noopener">{{ content.projectLabel }}</a>
          <a v-if="publicationLinks[i].code" :href="publicationLinks[i].code" target="_blank" rel="noopener">{{ content.codeLabel }}</a>
          <a v-if="publicationLinks[i].video" :href="publicationLinks[i].video" target="_blank" rel="noopener">{{ content.videoLabel }}</a>
          <a v-if="publicationLinks[i].openreview" :href="publicationLinks[i].openreview" target="_blank" rel="noopener">{{ content.openreviewLabel }}</a>
        </div>
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
  font-size: 1.25rem;
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
  width: 9rem;
  height: 6rem;
  object-fit: cover;
  border: 1px solid var(--color-border);
  flex-shrink: 0;
}

.pubs__paper-title {
  font-size: 1rem;
  margin: 0 0 0.3rem;
}

.pubs__new {
  font-size: 0.65rem;
  font-weight: 700;
  border: 1px solid var(--color-text);
  padding: 0.1rem 0.4rem;
  vertical-align: middle;
  margin-left: 0.3rem;
}

.pubs__authors {
  font-size: 0.85rem;
  margin: 0 0 0.3rem;
  line-height: 1.4;
}

.pubs__venue {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
}

.pubs__links {
  display: flex;
  gap: 0.8rem;
  font-size: 0.8rem;
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
