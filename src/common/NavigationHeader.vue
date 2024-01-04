<template>
  <q-header class="navigation-header row reverse">
    <q-bar class="btn-bar col-12 col-sm-3">
      <q-btn
        class="btn-act"
        icon="fa fa-home"
        rel="noopener noreferrer"
        round
        target="_blank"
        @click="goHome()"
      />
      <q-btn
        class="btn-act"
        rel="noopener noreferrer"
        round
        target="_blank"
        @click="changeLanguage()"
      >
        {{ $t('lang') }}
      </q-btn>
      <q-btn
        style="z-index: 9999 !important;"
        ref="sideMenuBtn"
        class="btn-act"
        icon="fa fa-bars"
        rel="noopener noreferrer"
        target="_blank"
        @click="openMenu()"
      >
        <SideMenu v-if="sideMenuIsExpanded" style="position: absolute; right: 12px; top: 48px" />
      </q-btn>
    </q-bar>
    <q-item class="row justify-center col-sm-6">
      {{ $t('welcome-title') }}
    </q-item>
  </q-header>
</template>
<style lang="scss" scoped>
  @import 'src/main';

  .navigation-header {
    background-color: transparent;
    color: $primary;
    font-family: $font-main;
    user-select: none;
    cursor: default;
    font-size: 1.5rem;
    line-height: 1.4;
    text-align: center;
    padding: 1rem;
  }
</style>
<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import SideMenu from './SideMenu.vue'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { currentlyAvailableLocales } from "../constants";

  const router = useRouter()
  function goHome() {
    router.push('/')
  }

  const sideMenuBtn = ref()

  const sideMenuIsExpanded = ref(false)


  const { locale } = useI18n()


  const changeLanguage = () => {
    const nextLocaleIndex = currentlyAvailableLocales.findIndex((l) => l === locale.value) + 1
    locale.value = currentlyAvailableLocales[currentlyAvailableLocales.length === nextLocaleIndex ? 0 : nextLocaleIndex]
  }

  const openMenu = () => {
    sideMenuIsExpanded.value = !sideMenuIsExpanded.value
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutsideSideMenuBtn)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutsideSideMenuBtn)
  })

  function handleClickOutsideSideMenuBtn(event: Event) {
    if (sideMenuBtn.value && !sideMenuBtn.value.$el.contains(event.target)) {
      sideMenuIsExpanded.value = false
    }
  }
</script>