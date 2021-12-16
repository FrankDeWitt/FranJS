import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import './index.css'
import projectLocales from './locales';

const i18n = createI18n({
  legacy: false,
  locale: 'es-ES',
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages: projectLocales,
});

createApp(App)
  .use(i18n)
  .mount('#app')
