// require('v8-compile-cache');
/*eslint-disable*/
import Vue from 'vue';
var moment = require("moment");
//eslint-disable-next-line
import vuexstore from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import store from '../src/store/store';
// import VueStash from 'vue-stash';
import 'reveal.js/dist/reveal.css'
// require lib
import VueCodeMirror from 'vue-codemirror'

// require styles
import './assets/codemiror.scss'
import './assets/dark.scss'
// require more codemirror resource...
 
// you can set default global options and events when use
Vue.use(VueCodeMirror, /* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */)

import VueSimpleAlert from 'vue-simple-alert';
import isElectron from 'is-electron';
// -------------------desktop start------------
// import routerDesktop from './router/routerDesktop';
import webRouter from './router/routerWeb';

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
Vue.use(VueToast);
// console.log=()=>{}
import axios from 'axios'

axios.defaults.headers.common['id']=vuexstore.state.interplex.user.id;
axios.defaults.headers.common['branch']=vuexstore.state.interplex.user.branch||'';
axios.defaults.headers.common['username']=vuexstore.state.interplex.user.username;
axios.defaults.headers.common['password']=vuexstore.state.interplex.user.password;
axios.defaults.headers.common['roletype']=vuexstore.state.interplex.user.roletype;

// -------------------desktop end--------------
// -------------------mobile start------------
import app from './app.vue';

// -------------------mobile end------------
// Vue.component('appMobile', () => import('./App_mobile.vue'));
//global veriable
Vue.prototype.$toastTR =function (type,message){

    Vue.$toast.open({
        message,
        type,
        position: 'top-right'
    });
    
};
Vue.prototype.$toastBC =function (type,message){

    Vue.$toast.open({
        message,
        type,
        position: 'bottom'
    });
    
};
//global veriable
Vue.prototype.$isElectron = isElectron()
// console.log('isElectron',isElectron())

import DatePicker from 'vue-md-date-picker'

Vue.component('datePicker', DatePicker);

Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
    }
});
// import Vue from 'vue';
import VueTabulator from 'vue-tabulator';
Vue.use(VueTabulator);
// import draggable from 'vuedraggable'
Vue.component('draggable',()=>import('vuedraggable'))
import Toasted from 'vue-toasted';
Vue.use(Toasted,{ 
	theme: "toasted-primary", 
	position: "bottom-center", 
	duration : 3400
})
import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)

Vue.use(VueSimpleAlert);

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

//json editor----------------------------
import VJsoneditor from 'v-jsoneditor'
import date from './views/date.vue'
import barcodeLabelPrint from './views/barcodeLabelPrint.vue'
import labelPrintMobile from './views/labelPrintMobile.vue'
import labelPrintDesktop from './views/labelPrintDesktop.vue'
Vue.use(VJsoneditor)
import pluginPrintMobile from './views/pluginPrintMobile.vue'
import pluginPrintDesktop from './views/pluginPrintDesktop.vue'
Vue.use(VueQuillEditor, /* { default global options } */)
import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)
Vue.component('draggable',()=>import('vuedraggable'))
Vue.config.productionTip = true;
import pdfViewer from './views/pdfViewer.vue'
import appWeb from './AppWeb.vue'
import navbarWeb from './views/navbarWeb.vue'
import labelSetting from './views/labelSetting.vue'

import loader from './views/loader.vue'
import debounce from 'v-debounce'
Vue.use(debounce)

Vue.component('loader', loader);
Vue.component('appWeb', appWeb);
Vue.component('navbarWeb', navbarWeb);
Vue.component('date', date);
Vue.component('barcodeLabelPrint', barcodeLabelPrint);

Vue.component('labelPrintMobile', labelPrintMobile);
Vue.component('labelPrintDesktop', labelPrintDesktop);


Vue.component('pdfViewer',pdfViewer)
Vue.component('pluginPrintMobile',pluginPrintMobile)
Vue.component('pluginPrintDesktop',pluginPrintDesktop)

Vue.component('labelSetting',labelSetting)

Vue.filter('date', function (value) {
    if (!value) return ''
    // value = value.toString()
    return moment(value).format(vuexstore.state.dateFormat)
  })

new Vue({
	router:webRouter,
	store: vuexstore,
	// data: { store },
	vuetify,
	render: (h) => h(app),
}).$mount('#app');
// -------------------mobile end------------




