<template>
  <q-page class="services-page">
    <div class="page-title">Providing Services</div>
    <q-list class="services-list">
      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">IT Systems Consulting</div>
          <div class="service-description">Expert guidance on system architecture, optimization, and best practices.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Third-Party Integrations</div>
          <div class="service-description">Seamless integration of diverse systems and software to enhance functionality.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Data Management</div>
          <div class="service-description">Comprehensive solutions for data storage, acquisition, enrichment, and provision.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Web & App Deployments</div>
          <div class="service-description">Deploying responsive and robust websites and applications.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">UI/UX Design and Development</div>
          <div class="service-description">Creating intuitive and visually appealing user interfaces.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Messaging Services Integration</div>
          <div class="service-description">Implementing effective communication channels with messaging brokers.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Backend REST Services</div>
          <div class="service-description">Development of reliable and scalable RESTful services.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class=" custom-header">Security Implementation</div>
          <div class="service-description">Incorporating OAuth and other security protocols for secure applications.</div>
        </q-item-section>
      </q-item>

      <q-item  >
        <q-item-section class="provided-service-section">
          <div class="custom-header">Educational Services</div>
          <div class="service-description">Teaching mathematics and natural sciences to students; mentoring young professionals in software craftsmanship.</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>


<script setup lang="ts">
// Script content goes here
</script>

<style scoped lang="scss">
.services-page {
  width: 100%;
  margin: 0;
  padding: 0 5rem;
}
.custom-header{
  text-align: start;
}
.provided-service-section{
  font-family: "Roboto Mono", monospace;
  margin-bottom: 2rem;
}
</style>
