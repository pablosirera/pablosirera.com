// eslint-disable-next-line import/default
import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: process.env.GOOGLE_ANALYTICS_GTAG },
})
