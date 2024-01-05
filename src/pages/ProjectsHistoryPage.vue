<template>
  <div class="page-title">{{ $t('projects-page-title') }}</div>
  <div class="projects-container row justify-center">
    <div
      v-for="project in projects"
      :key="project.name"
      class="project-card col-12 col-sm-10 col-md-6 col-xl-3"
    >
      <div class="project-name">{{ project.name }}</div>
      <p>
        <strong>{{ $t('role') }}:</strong> {{ project.role }}
      </p>
      <p>
        <strong>{{ $t('location') }}:</strong> {{ project.location }}
      </p>
      <p>
        <strong>{{ $t('years') }}:</strong> {{ project.year }}
      </p>
      <p>
        <strong>{{ $t('duration') }}:</strong> {{ project.duration }}
      </p>
      <p>
        <strong>{{ $t('achievements') }}:</strong> {{ project.achievements }}
      </p>
      <p>
        <strong>{{ $t('technologiesUsed') }}:</strong> {{ project.technologies }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/main';

  .projects-container {
    .project-card {
      border-top: 2px solid $primary;
      background-color: $blank;
      padding: 1rem 2rem;
      border-left: none;
      border-right: none;

      @media (min-width: 600px) {
        border: 2px solid $primary;
        margin: 4rem;
        border-radius: 8px;
      }

      .project-name {
        color: $secondary;
        font-size: 2rem;
        padding: 1rem 0 2rem 0;
      }

      p {
        strong {
          color: $secondary;
        }

        color: $primary;
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
    year: string
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