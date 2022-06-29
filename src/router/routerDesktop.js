/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import App_mobile from '../views/App_mobile.vue'
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'index',

		component:App_mobile ///() => import('../views/core/billing/billing_software_gui/sales_entry.vue'),//Home,
	},

];

const router = new VueRouter({
	routes,
});

export default router;
