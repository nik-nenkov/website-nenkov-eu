<template>
  <q-page class="full-width-page">
    <q-item class="page-title">{{$t('personalStatement')}}</q-item>
    <q-item class="custom-header">{{$t('description')}}</q-item>
  </q-page>
</template>

<style lang="scss" scoped>
@import "src/main";
  .full-width-page {
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: center;
  }
.custom-header{
  text-align: start;
  font-size: 1.4rem;
  padding: 0;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
}


</style>