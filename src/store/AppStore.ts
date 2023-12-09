import { defineStore } from 'pinia'
import { fetchOlMapProps, fetchTsyAppState, storeTsyAppState } from '../tools/util'
import { OlMapProps } from './OsmStore'

export interface TsyAppState {
  countryName?: string
  districtName?: string
  municipalityName?: string
  provinceName?: string
  rightDrawerOpen?: boolean
  settlementName?: string
}

export const useAppStore = defineStore('appStore', {
  state: (): { app: TsyAppState; map: OlMapProps } => ({
    app: fetchTsyAppState(),
    map: fetchOlMapProps(),
  }),
  actions: {
    storeCountryName(commonName: string): void {
      this.app.countryName = commonName
      storeTsyAppState(this.app)
    },
    fetchCountryName(): string | undefined {
      return this.app.countryName
    },
    storeProvinceName(commonName: string | undefined): void {
      this.app.provinceName = commonName
      storeTsyAppState(this.app)
    },
    fetchProvinceName(): string | undefined {
      return this.app.provinceName
    },
    storeMunicipalityName(commonName: string | undefined): void {
      this.app.municipalityName = commonName
      storeTsyAppState(this.app)
    },
    fetchMunicipalityName(): string | undefined {
      return this.app.municipalityName
    },
    storeDistrictName(commonName: string | undefined): void {
      this.app.districtName = commonName
      storeTsyAppState(this.app)
    },
    fetchDistrictName(): string | undefined {
      return this.app.districtName
    },
  },
  getters: {},
})
