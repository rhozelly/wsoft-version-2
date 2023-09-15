import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/mobile.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret)

import { createI18n } from 'vue-i18n'

import en from './locales/en.json';
import kr from './locales/kr.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    kr
  }
})


const app = createApp(App)

AOS.init()
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)