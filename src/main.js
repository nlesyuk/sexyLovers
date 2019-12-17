import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'

Vue.use(Meta);

new Vue({
  el: '#app',
  render: h => h(App),
  metaInfo: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Sexy lovers - Ищите интим без обязательств? Вы по адресу!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-colo', content: '#837a64' },
    ]
  }
})
