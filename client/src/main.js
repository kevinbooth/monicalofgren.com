import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import Unicon from 'vue-unicons'
import { uniLinkedin, uniInstagram, uniFacebook, uniHomeAlt, uniEnvelope } from 'vue-unicons/src/icons'

// import styles
import "@/styles/styles.scss";

Vue.config.productionTip = false

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Unicon.add([uniLinkedin, uniInstagram, uniFacebook, uniHomeAlt, uniEnvelope])
Vue.use(Unicon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
