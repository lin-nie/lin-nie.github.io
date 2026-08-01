<script setup lang="ts">
import { useLocale } from '../content'
import profilePhoto from '../assets/profile-photo.jpg'

const { content } = useLocale()
</script>

<template>
  <section class="profile">
    <div class="profile__layout">
      <div class="profile__main">
        <h1 class="profile__name">{{ content.profile.name }}</h1>
        <p class="profile__degree">{{ content.profile.degree }}</p>

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
      </div>

      <div class="profile__photo-wrap">
        <img class="profile__photo" :src="profilePhoto" :alt="content.profile.name" />
        <p class="profile__caption">{{ content.profile.photoCaption }}</p>
      </div>
    </div>

    <div class="profile__affiliations">
      <div v-for="a in content.profile.affiliations" :key="a.name" class="profile__affiliation-item">
        <div class="profile__affiliation-badge">{{ a.initials }}</div>
        <span class="profile__affiliation-name">{{ a.name }}</span>
        <span class="profile__affiliation-role">{{ a.role }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-5) var(--space-3);
}

.profile__layout {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.profile__main {
  flex: 1;
  min-width: 0;
}

.profile__photo-wrap {
  flex-shrink: 0;
  width: 21rem;
}

.profile__photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
}

.profile__name {
  font-size: 2.25rem;
  margin: 0 0 0.25rem;
}

.profile__degree {
  margin: 0 0 0.5rem;
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: 1.1rem;
}

.profile__caption {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.profile__bio {
  margin: var(--space-3) 0;
}

.profile__highlight {
  background: var(--color-accent-soft);
  border-left: 3px solid var(--color-accent);
  padding: var(--space-2) var(--space-3);
  border-radius: 0.4rem;
  margin: 0 0 var(--space-3);
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

.profile__affiliations {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4) var(--space-3);
  margin-top: var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.profile__affiliation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 6.5rem;
}

.profile__affiliation-badge {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.profile__affiliation-name {
  font-size: 0.8rem;
  font-weight: 600;
}

.profile__affiliation-role {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  margin-top: 0.15rem;
}

@media (max-width: 42rem) {
  .profile__layout {
    flex-direction: column-reverse;
  }

  .profile__photo-wrap {
    width: 13rem;
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
