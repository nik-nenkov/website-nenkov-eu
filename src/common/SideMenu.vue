<script setup lang="ts">

import { useRouter } from "vue-router";

const router = useRouter()
function navigateOut(s: string) {
  router.push('/'+s)
}
</script>

<template>
  <q-list class="side-menu-list">
    <q-item class="side-menu-item" clickable @click="navigateOut('tech-stack')">{{ $t('sideMenu.techStack') }}</q-item>
    <q-item class="side-menu-item" clickable @click="navigateOut('timeline')">{{ $t('sideMenu.timeline') }}</q-item>
    <q-item class="side-menu-item" clickable @click="navigateOut('projects')">{{ $t('sideMenu.projects') }}</q-item>
    <q-item class="side-menu-item" clickable @click="navigateOut('services')">{{ $t('sideMenu.services') }}</q-item>
  </q-list>
</template>

<style lang="scss">
@import "src/main";
.side-menu-list{
  background-color: $primary;
  border-radius: 10px;
  padding: 3px;
  overflow: hidden;
  .side-menu-item{
    background-color: $blank;
    color: $secondary;
    border-radius: 3px;
    margin: 2px;
    font-family: sans-serif;
    line-height: 2rem;
    width: 9.4rem;
  }
}
</style>