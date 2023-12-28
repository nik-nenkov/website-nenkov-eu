<template>
  <q-page class="full-width-page">
    <h6 class="custom-header" v-html="timeUntilNewYear" />
    <h4 class="custom-header">{{$t('until-new-year')}}</h4>
    <h4 class="custom-header">...</h4>
    <h4 class="custom-header">... ... ... ...</h4>
    <h4 class="custom-header">... ... ... ... ... ... ... ... ...</h4>
  </q-page>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n();

  const timeUntilNewYear = ref('')
  const updateTime = () => {
    const now = new Date()
    const newYear = new Date(now.getFullYear() + 1, 0, 1)
    const secondsUntilNewYear = Math.floor((newYear.getTime() - now.getTime()) / 1000)

    const days = Math.floor(secondsUntilNewYear / (3600 * 24))
    const hours = Math.floor((secondsUntilNewYear % (3600 * 24)) / 3600)
    const minutes = Math.floor((secondsUntilNewYear % 3600) / 60)
    const seconds = Math.floor(secondsUntilNewYear % 60)

    timeUntilNewYear.value =
      `` +
      timeToText(`day`, days) +
      ` ` +
      timeToText(`hour`, hours) +
      ` ` +
      timeToText(`minute`, minutes) +
      ` ` +
      timeToText('second', seconds)
  }
  const countStr = (n: number) => {
    return n != 1 ? `s` : ``
  }

  const timeToText = (s: string, n: number) => {
    return `${n} ` + t(s + countStr(n))
  }

  const intervalId = ref()

  onMounted(() => {
    updateTime()
    intervalId.value = setInterval(updateTime, 100)
  })

  onUnmounted(() => {
    clearInterval(intervalId.value)
  })
</script>

<style lang="scss">
@import "src/main";
  .full-width-page {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .custom-header {
    color: $secondary;
    font-family: 'Roboto Mono', monospace;
    user-select: none;
    cursor: default;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    max-width: 80%;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 1.2rem; // Smaller font size for mobile devices
    }
  }
</style>