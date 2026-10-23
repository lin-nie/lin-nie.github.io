<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../content'

defineProps<{ src: string; alt?: string }>()

const { content } = useLocale()

// Photos stay collapsed until the reader asks for them, keeping lists compact.
const open = ref(false)
</script>

<template>
  <button class="photo-toggle" type="button" :aria-expanded="open" @click="open = !open">
    📷 {{ open ? content.photoHideLabel : content.photoShowLabel }}
  </button>
  <a v-if="open" class="photo-link" :href="src" target="_blank" rel="noopener">
    <img class="photo" :src="src" :alt="alt ?? ''" />
  </a>
</template>

<style scoped>
.photo-toggle {
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

.photo-toggle:hover {
  color: var(--color-link-hover);
}

.photo-link {
  display: block;
  width: fit-content;
  margin-top: 0.5rem;
}

.photo {
  display: block;
  height: 10rem;
  max-width: 100%;
  object-fit: cover;
  border-radius: 6px;
}
</style>
