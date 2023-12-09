import './main.scss'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/dist/quasar.sass'
import App from './App.vue'
import iconSet from 'quasar/icon-set/material-icons-sharp.js'
import lang from 'quasar/lang/bg.js'
import router from './router'
import { Quasar } from 'quasar'
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createPinia } from 'pinia'

interface NewEnv {
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  SSR: boolean

  VITE_BASE_URL: string
  VITE_AUTH_CLIENT: string
  VITE_AUTH_DOMAIN: string

  [key: string]: any
}

export interface NewMeta extends ImportMeta {
  env: NewEnv
}

const env = (import.meta as unknown as NewMeta).env

createApp(App)
  .use(Quasar, {
    config: {},
    plugins: {},
    lang: lang,
    iconSet: iconSet,
  })
  .use(createPinia())
  .use(router)
  .use(
    createAuth0({
      domain: env.VITE_AUTH_DOMAIN,
      clientId: env.VITE_AUTH_CLIENT,
      authorizationParams: { redirect_uri: env.VITE_BASE_URL },
    })
  )
  .mount('#app')
