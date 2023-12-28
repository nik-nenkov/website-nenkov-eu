<template>
  <div class="page-title">{{ $t('projects-page-title') }}</div>
  <div class="projects-container">
    <div v-for="project in projects" :key="project.name" class="project-card">
      <h3>{{ project.name }}</h3>
      <p><strong class="color-primary">Role:</strong> {{ project.role }}</p>
      <p><strong class="color-primary">Location:</strong> {{ project.location }}</p>
      <p><strong class="color-primary">Duration:</strong> {{ project.duration }}</p>
      <p><strong class="color-primary">Achievements:</strong> {{ project.achievements }}</p>
      <p><strong class="color-primary">Technologies:</strong> {{ project.technologies }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/main';
  .projects-container {
    .project-card {
      background-color: $secondary;
      padding: 1rem 2rem;
      margin-bottom: 1rem;

      @media (min-width: 700px) {
        margin: 4rem;
        border-radius: 8px;
      }

      h3 {
        color: $primary;
      }

      p {
        color: $blank;
      }
    }
  }
</style>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  interface ProjectData {
    name: string
    role: string
    location: string
    duration: string
    achievements: string
    technologies: string
  }

  const projects = ref<ProjectData[]>([])

  onMounted(async () => {
    const response = await fetch('/data/project-history.json')
    if (response.ok) {
      projects.value = await response.json()
    }
  })
</script>