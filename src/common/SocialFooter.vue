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
      <q-btn class="social-link" @click="toggleSocialExpand" :disabled="isSocialExpandBtnDisabled">
        {{ socialLinksExpanded ? '>>>' : '<<<' }}
      </q-btn>
    </q-bar>
  </q-footer>
</template>
<style lang="scss">
  @import 'src/main';

  .social-footer {
    height: fit-content;
    background-color: transparent;
    padding: 1rem 0;
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
    padding: 0.75rem;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 0.5rem;
  }

  .social-link {
    color: $blank;
    background-color: $primary;
    transition: color 0.3s;
    padding: 0.5rem;
    margin: 0.25rem;

    &:hover {
      color: $accent;
    }
  }
</style>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
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
      socialLinks.value = await (await fetch('/data/social-links.json')).json()
      displayedSocialLinks.value = socialLinks.value.filter((v) =>
        preferredSocialLinkNames.includes(v.name)
      )
    } catch (error) {
      console.error('Error loading social links:', error)
    }
  })

  const delay = 86

  const isSocialExpandBtnDisabled = computed(()=>{
    return socialLinksLoading.value
  })
  const socialLinksLoading = ref(false)
  const toggleSocialExpand = () => {
    if (socialLinksLoading.value == false) {
      socialLinksLoading.value = true
      setTimeout(() => {
        socialLinksLoading.value = false
      }, socialLinks.value.length * delay)

      socialLinksExpanded.value = !socialLinksExpanded.value
      if (socialLinksExpanded.value) {
        socialLinks.value
          .filter((v) => !preferredSocialLinkNames.includes(v.name))
          .forEach((link, index) => {
            setTimeout(() => {
              if (!displayedSocialLinks.value.includes(link)) {
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
  }

  const socialLinksExpanded = ref(false)
</script>