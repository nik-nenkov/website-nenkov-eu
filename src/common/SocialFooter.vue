<template>
  <q-footer class="social-footer">
    <q-bar class="social-links">
      <q-btn
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        :icon="link.icon"
        class="social-link"
        rel="noopener noreferrer"
        round
        target="_blank"
      />
    </q-bar>
  </q-footer>
</template>
<style lang="scss">
  @import 'src/main';

  .social-footer {
    height: fit-content;
    background-color: $secondary;
    padding: 1rem 0; // Adjusted for top and bottom padding
  }

  .q-bar {
    height: fit-content;
    justify-content: center;
    background-color: transparent;
    flex-wrap: wrap; // Ensure flex-wrap in q-bar as well
    padding: 0.5rem; // Padding inside q-bar for spacing around buttons
  }

  .social-links {
    display: flex;
    flex-wrap: wrap; // Enable flex items to wrap
    justify-content: center;
    gap: 0.5rem; // Add a gap between items for better spacing

    .social-link {
      color: $secondary;
      background-color: $primary;
      transition: color 0.3s;
      padding: 0.5rem;
      margin: 0.25rem; // Adjusted margin for consistent spacing

      &:hover {
        color: $accent;
      }
    }
  }
</style>
<script setup>
  import { onMounted, ref } from 'vue'

  const socialLinks = ref([])

  onMounted(async () => {
    try {
      socialLinks.value = await (await fetch('/data/social.json')).json()
    } catch (error) {
      console.error('Error loading social links:', error)
    }
  })
</script>