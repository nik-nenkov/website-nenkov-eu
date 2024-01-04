<template>
  <q-page class="services-page">
    <div class="page-title">{{ $t('services.ourServices') }}</div>
    <q-list class="services-list">
      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.itSystemsConsulting') }}</div>
          <div class="service-description">{{ $t('services.itSystemsConsultingDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.thirdPartyIntegrations') }}</div>
          <div class="service-description">{{ $t('services.thirdPartyIntegrationsDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.dataManagement') }}</div>
          <div class="service-description">{{ $t('services.dataManagementDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.webAppDeployments') }}</div>
          <div class="service-description">{{ $t('services.webAppDeploymentsDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.uiUxDesignDevelopment') }}</div>
          <div class="service-description">{{ $t('services.uiUxDesignDevelopmentDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.messagingServicesIntegration') }}</div>
          <div class="service-description">
            {{ $t('services.messagingServicesIntegrationDesc') }}
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.backendRestServices') }}</div>
          <div class="service-description">{{ $t('services.backendRestServicesDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.securityImplementation') }}</div>
          <div class="service-description">{{ $t('services.securityImplementationDesc') }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="provided-service-section">
          <div class="custom-header">{{ $t('services.educationalServices') }}</div>
          <div
            v-for="(line, index) in $t('services.educationalServicesDesc').split('\\n')"
            :key="index"
            class="service-description"
          >
            {{ line }}
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
  // Script content goes here
</script>

<style lang="scss" scoped>
  @import 'src/main';

  .custom-header {
    text-align: start;
  }

  .provided-service-section {
    font-family: $font-main;
    margin-bottom: 5vw;
  }

  .services-page {
    margin: 0;
    padding: 0;
  }

  .services-list,
  .page-title {
    padding: 2rem 5vw;
    margin: 0;
  }
</style>
