<template>
  <div class="page-title">{{$t('tech-page-title')}}</div>
  <q-table
    :columns="[
      { name: 'logoUrl', label: 'Icon', field: 'logoUrl', align: 'center', sortable: false },
      { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
      { name: 'layer', label: 'Layer', field: 'layer', align: 'left', sortable: true },
      { name: 'type', label: 'Type', field: 'type', align: 'left', sortable: true },
      { name: 'monthsSinceLastUse', label: 'Months Since Last Used (for revision)', field: 'monthsSinceLastUse', align: 'left', sortable: true },
      { name: 'experience', label: 'Experience in Years (for revision)', field: 'experience', align: 'left', sortable: true },
    ]"
    :loading="loading"
    :pagination.sync="pagination"
    :rows="techData"
    :rows-per-page-options="[16]"
    row-key="name"
  >
    <template v-slot:body-cell-logoUrl="props">
      <q-td :props="props" class="q-td text-right">
        <a :href="props.row.officialDocs" target="_blank">
          <img :src="props.row.logoUrl" alt="tech icon" class="tech-icon" />
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
    monthsSinceLastUse: number
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
      techData.value = techData.value.sort((v1,v2)=>v1.name.localeCompare(v2.name)).reverse()
    } catch (error) {
      console.error('Error loading social links:', error)
    }
  })
</script>

<style>
  .tech-icon {
    align-self: center;
    max-height: 60px;
    max-width: 120px;
    margin: 6px;
    height: auto;
    width: auto;
    object-fit: contain;
  }

  .q-td.text-right a{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
</style>