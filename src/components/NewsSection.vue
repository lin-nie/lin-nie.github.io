<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../content'
import { newsPhotos } from '../content/newsPhotos'

const { content } = useLocale()

const collapsedCount = 6
const expanded = ref(false)

const visibleNews = computed(() =>
  expanded.value ? content.value.news : content.value.news.slice(0, collapsedCount)
)

// Photos stay collapsed until the reader asks for them, keeping the list compact.
const openPhotos = ref<Record<number, boolean>>({})
const togglePhoto = (i: number) => {
  openPhotos.value[i] = !openPhotos.value[i]
}
</script>

<template>
  <section class="news">
    <h2 class="news__title">{{ content.newsTitle }}</h2>
    <ul class="news__list">
      <li v-for="(item, i) in visibleNews" :key="i" class="news__item">
        <span class="news__date">{{ item.date }}</span>
        <div class="news__body">
          <span v-html="item.html"></span>
          <button
            v-if="item.photo"
            class="news__photo-toggle"
            type="button"
            :aria-expanded="!!openPhotos[i]"
            @click="togglePhoto(i)"
          >
            📷 {{ openPhotos[i] ? content.newsPhotoHide : content.newsPhotoShow }}
          </button>
          <a v-if="item.photo && openPhotos[i]" class="news__photo-link" :href="newsPhotos[item.photo]" target="_blank" rel="noopener">
            <img class="news__photo" :src="newsPhotos[item.photo]" :alt="item.photoAlt ?? ''" loading="lazy" />
          </a>
        </div>
      </li>
    </ul>
    <button
      v-if="content.news.length > collapsedCount"
      class="news__toggle"
      type="button"
      @click="expanded = !expanded"
    >
      {{ expanded ? content.newsShowLess : `${content.newsShowAll} (${content.news.length - collapsedCount})` }}
    </button>
  </section>
</template>

<style scoped>
.news {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-3) var(--space-5);
}

.news__title {
  font-size: 1.375rem;
  margin: 0 0 var(--space-3);
}

.news__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}

.news__item {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}

.news__date {
  flex-shrink: 0;
  width: 5rem;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
}

.news__body {
  flex: 1;
}

.news__photo-toggle {
  margin-left: 0.4em;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.85em;
  color: var(--color-link);
  cursor: pointer;
  white-space: nowrap;
}

.news__photo-link {
  display: block;
  width: fit-content;
  margin-top: 0.5rem;
}

.news__photo {
  display: block;
  height: 10rem;
  max-width: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.news__toggle {
  margin-top: var(--space-2);
  font-family: inherit;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-link);
  cursor: pointer;
}

.news__toggle:hover {
  color: var(--color-link-hover);
}

@media (max-width: 32rem) {
  .news__item {
    flex-direction: column;
    gap: 0.15rem;
  }

  .news__date {
    width: auto;
    font-size: 0.75rem;
  }
}
</style>
