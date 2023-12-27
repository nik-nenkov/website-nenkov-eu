<template>
  <div class="column text-center" style="margin: 3rem 0">
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
      <div class="time-descr-right">
        <div class="down-triangle-border"></div>
        <div class="down-triangle"></div>
        <b>Nov. 2019</b>
        <p>Left EPAM systems</p>
      </div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
      <div class="time-descr-left">
        <div class="down-triangle-border"></div>
        <div class="down-triangle"></div>
        <b>May. 2018</b>
        <p>Starter work at EPAM systems</p>
      </div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
    <div class="time-section">
      <div class="time-point"></div>
      <div class="time-line"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import 'src/main';

  .time-section {
    position: relative;
    margin: 0;
    padding: 0;

    .time-point {
      width: 8px;
      height: 8px;
      border: 2px solid $primary;
      border-radius: 4px;
      margin: 4px auto 0 auto;
      padding: 0;
    }

    .time-line {
      width: 4px;
      height: 128px;
      background-color: $primary;
      margin: 4px auto 0 auto;
      padding: 0;
    }
  }

  .time-descr-right {
    text-align: left;
    position: absolute;
    border-radius: 6px;
    left: calc(50% + 14px);
    top: 7px;
    padding: 6px;
    display: block;
    border: 2px solid $primary;

    .down-triangle-border {
      width: 0;
      height: 0;
      position: absolute;
      left: -10px;
      top: -2px;
      border-left: 9px solid transparent;
      border-right: 6px solid transparent;
      border-top: 12px solid $primary;
      border-radius: 2px;
    }

    .down-triangle {
      width: 0;
      height: 0;
      position: absolute;
      left: -6px;
      top: 0;
      border-left: 9px solid transparent;
      border-right: 6px solid transparent;
      border-top: 12px solid white;
      border-radius: 2px;
    }
  }

  .time-descr-left {
    text-align: right;
    position: absolute;
    border-radius: 6px;
    right: calc(50% + 14px);
    top: 7px;
    padding: 6px;
    display: block;
    border: 2px solid $primary;

    .down-triangle-border {
      width: 0;
      height: 0;
      position: absolute;
      right: -9px;
      top: -2px;
      border-left: 9px solid transparent;
      border-right: 7px solid transparent;
      border-top: 15px solid $primary;
      border-radius: 2px;
    }

    .down-triangle {
      width: 0;
      height: 0;
      position: absolute;
      right: -6px;
      top: 0;
      border-left: 9px solid transparent;
      border-right: 6px solid transparent;
      border-top: 12px solid white;
      border-radius: 2px;
    }
  }
</style>
<script lang="ts" setup>
</script>
