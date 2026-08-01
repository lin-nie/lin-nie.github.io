<script setup lang="ts">
import { useLocale } from '../content'
import profilePhoto from '../assets/profile-photo.jpg'

const { content } = useLocale()
</script>

<template>
  <section class="profile">
    <div class="profile__top">
      <img class="profile__photo" :src="profilePhoto" :alt="content.profile.name" />
      <div class="profile__heading">
        <h1 class="profile__name">{{ content.profile.name }}</h1>
        <p class="profile__degree">{{ content.profile.degree }}</p>
        <p v-for="line in content.profile.affiliation" :key="line" class="profile__affiliation">
          {{ line }}
        </p>
        <p class="profile__caption">{{ content.profile.photoCaption }}</p>
      </div>
    </div>

    <p class="profile__bio" v-html="content.profile.bio"></p>

    <p class="profile__highlight">{{ content.profile.highlight }}</p>

    <dl class="profile__contact">
      <div class="profile__contact-row">
        <dt>Address</dt>
        <dd>{{ content.profile.contact.address }}</dd>
      </div>
      <div class="profile__contact-row">
        <dt>Email</dt>
        <dd><a :href="`mailto:${content.profile.contact.email}`">{{ content.profile.contact.email }}</a></dd>
      </div>
      <div class="profile__contact-row">
        <dt>Phone</dt>
        <dd>{{ content.profile.contact.phone }}</dd>
      </div>
      <div class="profile__contact-row">
        <dt>Web</dt>
        <dd><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">{{ content.profile.contact.web }}</a></dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.profile {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-5) var(--space-3);
}

.profile__top {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  margin-bottom: var(--space-4);
}

.profile__photo {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
}

.profile__name {
  font-size: 1.75rem;
  margin: 0 0 0.15rem;
}

.profile__degree {
  margin: 0 0 0.4rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.profile__affiliation {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.profile__caption {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.profile__bio {
  margin: 0 0 var(--space-3);
}

.profile__highlight {
  background: var(--color-accent-soft);
  border-left: 3px solid var(--color-accent);
  padding: var(--space-2) var(--space-3);
  border-radius: 0.4rem;
  margin: 0 0 var(--space-4);
}

.profile__contact {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 0.5rem;
  column-gap: var(--space-3);
  margin: 0;
  font-size: 0.9rem;
}

.profile__contact-row {
  display: contents;
}

.profile__contact dt {
  color: var(--color-text-muted);
}

.profile__contact dd {
  margin: 0;
}

@media (max-width: 32rem) {
  .profile__top {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .profile__contact {
    grid-template-columns: 1fr;
    row-gap: 0.15rem;
  }

  .profile__contact-row {
    display: block;
    margin-bottom: 0.5rem;
  }

  .profile__contact dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
}
</style>
