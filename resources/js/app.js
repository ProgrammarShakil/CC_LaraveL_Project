
require('./bootstrap');

import Vue from 'vue';
import mainapp from './components/mainapp.vue'

Vue.component('mainapp', require('./components/mainapp.vue').default)

const vue = new Vue({
    el: '#app',

    components:{
     mainapp
    }
})