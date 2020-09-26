import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Axios from "axios"
import router from './router.js'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
