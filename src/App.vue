<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <SocialFooter />
  </q-layout>
</template>

<script lang="ts" setup>
  import SocialFooter from './common/SocialFooter.vue'
</script>

<style lang="scss">
  @import 'main';
</style>