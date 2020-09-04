import Vue from 'vue'
import VueNoty from 'vuejs-noty'

export default function(){
  Vue.use(VueNoty, {
    timeout: 2500,
    progressBar: true
  })
}
