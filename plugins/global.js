import Vue from 'vue'
import YoutubeEmbedLite from '@miyaoka/vue-youtube-embed-lite'
import Timeline from 'timeline-vuejs'
import CustomImage from '@/components/blog/CustomImage.vue'
import TheLink from '@/components/ui/TheLink.vue'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

Vue.component('custom-image', CustomImage)
Vue.component('the-link', TheLink)
Vue.component('youtube-embed-lite', YoutubeEmbedLite)
Vue.component('Timeline', Timeline)
