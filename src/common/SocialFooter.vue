<template>
  <q-footer class="social-footer">
    <q-bar class="social-links relative-position">
      <q-btn
        v-for="link in displayedSocialLinks"
        :key="link.name"
        :href="link.url"
        :icon="link.icon"
        class="social-link"
        rel="noopener noreferrer"
        round
        target="_blank"
      />
      <q-btn class="social-link expand-list" @click="toggleSocialExpand">
        {{ socialLinksExpanded ? 'less' : 'more' }}
      </q-btn>
    </q-bar>
  </q-footer>
</template>
<style lang="scss">
  @import 'src/main';

  .social-footer {
    height: fit-content;
    background-color: $secondary;
    padding: 1rem 0;
  }

  .list-enter-active,
  .list-leave-active {
    transition: opacity 1s;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    /* Add any additional styles you need for the container */
  }

  .expand-list {
    width: 5.4rem;
    border-radius: 50vh;
  }

  .q-bar {
    height: fit-content;
    justify-content: end;
    background-color: transparent;
    flex-wrap: wrap;
    padding: 0.5rem;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 0.5rem;

    .social-link {
      color: $secondary;
      background-color: $primary;
      transition: color 0.3s;
      padding: 0.5rem;
      margin: 0.25rem;

      &:hover {
        color: $accent;
      }
    }
  }
</style>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { preferredSocialLinkNames } from '../constants'

  interface SocialLink {
    name: string
    url: string
    icon: string
  }

  const displayedSocialLinks = ref<SocialLink[]>([])

  const socialLinks = ref<SocialLink[]>([])

  onMounted(async () => {
    try {
      socialLinks.value = await (await fetch('/data/social.json')).json()
      displayedSocialLinks.value = socialLinks.value.filter((v) =>
        preferredSocialLinkNames.includes(v.name)
      )
    } catch (error) {
      console.error('Error loading social links:', error)
    }
  })

  const delay = 167
  const toggleSocialExpand = () => {
    socialLinksExpanded.value = !socialLinksExpanded.value
    if (socialLinksExpanded.value) {
      socialLinks.value
        .filter((v) => !preferredSocialLinkNames.includes(v.name))
        .forEach((link, index) => {
          setTimeout(() => {
            if(!displayedSocialLinks.value.includes(link)){
              displayedSocialLinks.value.push(link)
            }
          }, index * delay)
        })
    } else {
      socialLinks.value
        .filter((v) => !preferredSocialLinkNames.includes(v.name))
        .reverse()
        .forEach((link, index) => {
          setTimeout(() => {
            const index = displayedSocialLinks.value.findIndex((d) => d.name === link.name)
            if (index !== -1) {
              displayedSocialLinks.value.splice(index, 1)
            }
          }, index * delay)
        })
    }
  }

  const socialLinksExpanded = ref(false)
</script>