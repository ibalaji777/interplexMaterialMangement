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
axios.defaults.headers.common['branch']=vuexstore.state.interplex.currentBranch;
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
Vue.use(VJsoneditor)
import pluginPrint from './views/pluginPrint.vue'
Vue.use(VueQuillEditor, /* { default global options } */)
import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)
Vue.component('draggable',()=>import('vuedraggable'))
Vue.config.productionTip = true;
import appWeb from './AppWeb.vue'
import navbarWeb from './views/navbarWeb.vue'
Vue.component('appWeb', appWeb);
Vue.component('navbarWeb', navbarWeb);
Vue.component('date', date);

Vue.component('pluginPrint',pluginPrint)
new Vue({
	router:webRouter,
	store: vuexstore,
	// data: { store },
	vuetify,
	render: (h) => h(app),
}).$mount('#app');
// -------------------mobile end------------




