<template>
  <div class="page-title">{{ $t('tech-page-title') }}</div>
  <q-table
    :columns="[
      { name: 'name', label: 'Name', field: 'name', align: 'right', sortable: true },
      { name: 'layer', label: 'Layer', field: 'layer', align: 'right', sortable: true },
      { name: 'type', label: 'Type', field: 'type', align: 'left', sortable: true },
      {
        name: 'lastUsedInMonths',
        label: 'Last Used (months)',
        field: 'lastUsedInMonths',
        align: 'left',
        sortable: true,
      },
      {
        name: 'experience',
        label: 'Experience (years)',
        field: 'experience',
        align: 'left',
        sortable: true,
      },
    ]"
    :loading="loading"
    :pagination.sync="pagination"
    :rows="techData"
    :rows-per-page-options="[16]"
    row-key="name"
  >
    <template v-slot:body-cell-name="props">
      <q-td :props="props" class="q-td text-right">
        <a :href="props.row.officialDocs" target="_blank">
          <img :src="props.row.logoUrl" alt="tech icon" class="tech-icon" />
          <div>{{ props.row.name }}</div>
        </a>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  interface TechData {
    name: string
    officialDocs: string
    logoUrl: string
    type: string
    layer: string
    lastUsedInMonths: number
  }

  const loading = ref(true)
  const pagination = ref({
    rowsPerPage: 16,
  })
  const techData = ref<TechData[]>([])

  onMounted(async () => {
    loading.value = false
    try {
      techData.value = await (await fetch('/data/tech-stack.json')).json()
      techData.value = techData.value.sort((v1, v2) => v1.name.localeCompare(v2.name)).reverse()
    } catch (error) {
      console.error('Error loading social links:', error)
    }
  })
</script>

<style>
  .tech-icon {
    align-self: center;
    height: auto;
    width: auto;
    max-height: 20px;
    max-width: 60px;
    object-fit: contain;
    @media (min-width: 600px) {
      max-height: 40px;
      max-width: 80px;
    }
  }

  .q-td.text-right a {
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    * {
      padding-right: 0.4rem;
      padding-left: 0.4rem;
      overflow: hidden;
      cursor: pointer;
    }

    text-decoration: none;
    color: #123f6c;
    align-items: center;
    height: 40px;
    @media (min-width: 600px) {
      height: 50px;
    }
  }

  th,
  tr,
  td {
    @media (max-width: 600px) {
      padding-left: 0.4rem !important;
      padding-right: 0.4rem !important;
    }
  }
</style>