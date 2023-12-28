<template>
  <q-layout view="hhh LpR fff">
    <NavigationHeader/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <SocialFooter />
  </q-layout>
</template>

<script lang="ts" setup>
  import SocialFooter from './common/SocialFooter.vue'
  import NavigationHeader from "./common/NavigationHeader.vue";
</script>

<style lang="scss">
  @import 'main';
</style>