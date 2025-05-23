import { createApp } from 'vue'
import router from './router'
import InstantSearch from 'vue-instantsearch/vue3/es';
import App from './App.vue'
import './assets/transition.min.css'
import './assets/loader.css'
import './assets/fonts.css'
import './assets/transition_fn.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import 'video.js/dist/video-js.css'

createApp(App).use(router).use(InstantSearch).mount('#app')
