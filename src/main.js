import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import '@/assets/style.css'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
