import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Http, { httpConfig } from './http'

sync(store, router)

const http = Http({ ...httpConfig })

const app = new Vue({
  router,
  store,
  ...App,
})

Vue.prototype.http = http

export {
  app, router, store, http,
}
