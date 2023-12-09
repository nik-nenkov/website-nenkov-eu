import { defineStore } from 'pinia'
import { useAuth0 } from '@auth0/auth0-vue'
import { NewMeta } from '../main'

const env = (import.meta as unknown as NewMeta).env

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    auth0Client: useAuth0(),
  }),
  actions: {
    login() {
      this.auth0Client
        .loginWithPopup()
        .then(() => console.log('logged IN'))
        .catch((err) => console.error(err))
    },
    logout() {
      this.auth0Client
        .logout({ logoutParams: { returnTo: env.VITE_BASE_URL } })
        .then(() => console.log('logged OUT'))
        .catch((err) => console.error(err))
    },
    isAuth(): boolean {
      return this.auth0Client.isAuthenticated.valueOf()
    },
    getUser() {
      return this.auth0Client.user
    },
  },
  getters: {},
})
