import { createWebHashHistory  , createRouter } from 'vue-router'

import HomePage from '../components/homepage.vue'
import VideoPlay from '../components/video_play.vue'
import Catalogue from '../components/movie_type_cat.vue'

const routes = [
  { path: '/', name:"home", component: HomePage },
  { path: '/videoplay', name:"videoplay", component: VideoPlay },
  { path: '/catalogue', name:"catalogue", component: Catalogue },
]

const router = createRouter({
  history: createWebHashHistory (),
  routes,
})

export default router