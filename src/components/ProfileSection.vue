<script setup lang="ts">
import { useLocale } from '../content'
import profilePhoto from '../assets/profile-photo.jpg'
import { affiliationLogos } from '../content/affiliationLinks'

const { content } = useLocale()
</script>

<template>
  <section class="profile">
    <div class="profile__layout">
      <div class="profile__main">
        <h1 class="profile__name">{{ content.profile.name }}</h1>
        <p class="profile__degree">{{ content.profile.degree }}</p>

        <p class="profile__bio" v-html="content.profile.bio"></p>
      </div>

      <div class="profile__photo-wrap">
        <img class="profile__photo" :src="profilePhoto" :alt="content.profile.name" />
        <p class="profile__caption">{{ content.profile.photoCaption }}</p>
      </div>
    </div>

    <div class="profile__affiliations">
      <div v-for="a in content.profile.affiliations" :key="a.name" class="profile__affiliation-item">
        <img class="profile__affiliation-logo" :src="affiliationLogos[a.logoKey]" :alt="a.name" />
        <span class="profile__affiliation-role">{{ a.role }}</span>
      </div>
    </div>

    <dl class="profile__contact">
      <div class="profile__contact-row">
        <dt>{{ content.profile.contact.addressUsLabel }}</dt>
        <dd>{{ content.profile.contact.addressUs }}</dd>
      </div>
      <div class="profile__contact-row">
        <dt>{{ content.profile.contact.addressJpLabel }}</dt>
        <dd>{{ content.profile.contact.addressJp }}</dd>
      </div>
      <div class="profile__contact-row">
        <dt>Email</dt>
        <dd>
          <a :href="`mailto:${content.profile.contact.email}`">{{ content.profile.contact.email }}</a>
          /
          <a :href="`mailto:${content.profile.contact.emailCmu}`">{{ content.profile.contact.emailCmu }}</a>
        </dd>
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
  width: 16rem;
}

.profile__photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
}

.profile__name {
  font-size: 2rem;
  margin: 0 0 0.25rem;
  text-align: center;
}

.profile__degree {
  margin: 0 0 0.5rem;
  color: var(--color-text-muted);
  font-weight: 700;
  font-size: 1rem;
}

.profile__caption {
  margin: 0.5rem 0 0;
  color: var(--color-text-muted);
  text-align: center;
}

.profile__bio {
  margin: var(--space-3) 0;
}

.profile__contact {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 0.5rem;
  column-gap: var(--space-3);
  margin: var(--space-4) 0 0;
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
  width: 7.5rem;
}

.profile__affiliation-logo {
  height: 1.75rem;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.profile__affiliation-role {
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

@media (max-width: 42rem) {
  .profile__layout {
    flex-direction: column-reverse;
  }

  .profile__photo-wrap {
    width: 12rem;
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
