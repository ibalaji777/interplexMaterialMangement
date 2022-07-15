/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import AppWeb from '../AppWeb.vue'

import branches from '../views/branches.vue'
import login from '../views/login.vue'
import userRole from '../views/userRole.vue'


import operatorDashboard from '../views/operatorDashboard.vue'
import operatorInsert from '../views/operatorInsert.vue'
import operatorList from '../views/operatorList.vue'
import operatorQsReport from '../views/operatorQsReport.vue'
import verifierDashboard from '../views/verifierDashboard.vue'
import verifierList from '../views/verifierList.vue'
import verifierView from '../views/verifierView.vue'
import approverList from '../views/approverList.vue'


import adminMasterProductInsert from '../views/adminMasterProductInsert.vue'
import adminDashboard from '../views/adminDashboard.vue'
import adminDashboardList from '../views/adminDashboardList.vue'
import adminDashboardView from '../views/adminDashboardView.vue'
import defaultQasHeader from '../views/defaultQasHeader.vue'
import adminDashboardOtherConfig from '../views/adminDashboardOtherConfig.vue'
import adminCreateUser from '../views/adminCreateUser.vue'
import adminCreateBranch from '../views/adminCreateBranch.vue' 
import adminCreateFileType from '../views/adminCreateFileTypes.vue' 


import adminUsersList from '../views/adminUsersList.vue'
import adminProductsFormatList from '../views/adminProductsFormatList.vue'
import adminBranchesList from '../views/adminBranchesList.vue' 
import adminHeaderFormatList from '../views/adminHeaderFormatList.vue' 

import adminFileTypeList from '../views/adminFileTypeList.vue' 

import photoCapture from '../views/photoCapture.vue'
import nativePhotoCapture from '../views/nativePhotoCapture.vue'


import qasForm2Config from '../views/qasForm2Config.vue'

Vue.use(VueRouter);

const routes = [
	//common component branches and login and userRole
	//operatorDashboard
	//operatorInsert
	//operatorList

	//verifierDashboard
	//verifierList
	//verifierView

	//adminDashboard
	//adminDashboardList
	//adminDashboardView
	//adminDashboardOtherConfig

	{
		path: '/',
		name: 'index',
		component:branches 
	},
	{
		path: '/photoCapture',
		name: 'photoCapture',
		component:photoCapture 
	},
	{
		path: '/nativePhotoCapture',
		name: 'nativePhotoCapture',
		component:nativePhotoCapture 
	},
	{
		path: '/adminMasterProductInsert',
		name: 'adminMasterProductInsert',
		component:adminMasterProductInsert 
	}

	,


	{
		path: '/adminUsersList',
		name: 'adminUsersList',
		component:adminUsersList 
	},
	{
		path: '/adminProductsFormatList',
		name: 'adminProductsFormatList',
		component:adminProductsFormatList 
	},
	{
		path: '/adminBranchesList',
		name: 'adminBranchesList',
		component:adminBranchesList 
	},
	{
		path: '/adminFileTypeList',
		name: 'adminFileTypeList',
		component:adminFileTypeList 
	}
,


	{
		path: '/adminHeaderFormatList',
		name: 'adminHeaderFormatList',
		component:adminHeaderFormatList 
	}
,{
		path: '/defaultQasHeader',
		name: 'defaultQasHeader',
		component:defaultQasHeader 
	},
	

// ----------------------------------
{
	path: '/branches',
	name: 'branches',
	component:branches 
},
{
	path: '/login',
	name: 'login',
	component:login 
},
{
	path: '/userRole',
	name: 'userRole',
	component:userRole 
},



//------------------------------------
,
	{
		path: '/qasForm2Config',
		name: 'qasForm2Config',
		component:qasForm2Config 
	},
	{
		path: '/operatorDashboard',
		name: 'operatorDashboard',
		component:operatorDashboard 
	},

	,
	{
		path: '/operatorQsReport',
		name: 'operatorQsReport',
		component:operatorQsReport 
	},

	{
		path: '/operatorInsert',
		name: 'operatorInsert',
		component:operatorInsert 
	},
	{
		path: '/operatorList',
		name: 'operatorList',
		component:operatorList 
	},
	{
		path: '/verifierDashboard',
		name: 'verifierDashboard',
		component:verifierDashboard 
	},
	{
		path: '/verifierList',
		name: 'verifierList',
		component:verifierList 
	},
	{
		path: '/verifierView',
		name: 'verifierView',
		component:verifierView 
	},
	{
		path: '/adminDashboard',
		name: 'adminDashboard',
		component:adminDashboard 
	},
	
	,
	{
		path: '/approverList',
		name: 'approverList',
		component:approverList 
	},
	

	{
		path: '/adminCreateFileType',
		name: 'adminCreateFileType',
		component:adminCreateFileType 
	},

	{
		path: '/adminCreateBranch',
		name: 'adminCreateBranch',
		component:adminCreateBranch 
	},
	{
		path: '/adminCreateUser',
		name: 'adminCreateUser',
		component:adminCreateUser 
	},

	{
		path: '/adminDashboardList',
		name: 'adminDashboardList',
		component:adminDashboardList 
	},
	{
		path: '/adminDashboardView',
		name: 'adminDashboardView',
		component:adminDashboardView 
	},
	{
		path: '/adminDashboardOtherConfig',
		name: 'adminDashboardOtherConfig',
		component:adminDashboardOtherConfig 
	},

];

const router = new VueRouter({
	routes,
});

export default router;
