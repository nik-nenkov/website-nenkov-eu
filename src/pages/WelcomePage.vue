<template>
  <q-page class="full-width-page">
      <h5 class="custom-header">{{ timeUntilNewYear }}</h5>
      <h3 class="custom-header">Until 2024</h3>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const timeUntilNewYear = ref('');

const updateTime = () => {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const secondsUntilNewYear = Math.floor((newYear.getTime() - now.getTime()) / 1000);

  const days = Math.floor(secondsUntilNewYear / (3600*24));
  const hours = Math.floor(secondsUntilNewYear % (3600*24) / 3600);
  const minutes = Math.floor(secondsUntilNewYear % 3600 / 60);
  const seconds = Math.floor(secondsUntilNewYear % 60);

  timeUntilNewYear.value = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
};

const intervalId = ref();

onMounted(() => {
  updateTime();
  intervalId.value = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>

<style lang="scss">
.full-width-page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.custom-header {
  width: 75%;
  color: #3b68a7;
  font-family: themify, cursive;
  user-select: none;
  cursor: default;
}
</style>