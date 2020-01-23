import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueMask from 'v-mask'
import PhoneMaskInput from  "vue-phone-mask-input" // use as component <phone-mask-input/>
import 'animate.css/animate.min.css'

Vue.config.productionTip = false

Vue.use(VueMeta);
Vue.use(VueMask);

const metaInfo = {
  htmlAttrs: {
    lang: 'ru'
  },
  title: 'Sexy lovers - Ищите интим без обязательств? Вы по адресу!',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#e73939' },
  ],
  link: [
    { rel: 'icon', href: '../public/icon.png', type: "image/x-icon"}
  ]
};

new Vue({
  metaInfo: metaInfo,
  render: h => h(App)
}).$mount('#app')
