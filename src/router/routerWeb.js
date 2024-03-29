/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import AppWeb from '../AppWeb.vue'
import startapp from '../views/startapp.vue'
import branches from '../views/branches.vue'
import login from '../views/login.vue'
import userRole from '../views/userRole.vue'

import guiQasFormOne from '../views/guiQasFormOne.vue'
import guiQasFormTwo from '../views/guiQasFormTwo.vue'
import guiHeader from '../views/guiHeader.vue'


import sapImportStepTwo from '../views/sapImportStepTwo.vue'
import sapImportStepOne from '../views/sapImportStepOne.vue'

import operatorDashboard from '../views/operatorDashboard.vue'
import operatorInsert from '../views/operatorInsert.vue'
import operatorList from '../views/operatorList.vue'
import operatorQsReport from '../views/operatorQsReport.vue'
import verifierDashboard from '../views/verifierDashboard.vue'
import verifierList from '../views/verifierList.vue'
import verifierView from '../views/verifierView.vue'
import approverList from '../views/approverList.vue'

import devices from '../views/devices.vue'


import qasFormOneDefault from '../views/qasFormOneDefault.vue'
import qasFormTwoDefault from '../views/qasFormTwoDefault.vue'

import createProduct from '../views/createProduct.vue'
import adminDashboard from '../views/adminDashboard.vue'
import dashboardList from '../views/dashboardList.vue'
import adminDashboardView from '../views/adminDashboardView.vue'
import qasFormOneConfigHeader from '../views/qasFormOneConfigHeader.vue'
import adminDashboardOtherConfig from '../views/adminDashboardOtherConfig.vue'
import createUser from '../views/createUser.vue'
import createBranch from '../views/createBranch.vue' 
import createFileType from '../views/createFileType.vue' 

import labelSetting from '../views/labelSetting.vue'

import userList from '../views/userList.vue'
import adminProductsFormatList from '../views/adminProductsFormatList.vue'
import adminBranchesList from '../views/adminBranchesList.vue' 
import adminHeaderFormatList from '../views/adminHeaderFormatList.vue' 

import adminFileTypeList from '../views/adminFileTypeList.vue' 

import photoCapture from '../views/photoCapture.vue'
import nativePhotoCapture from '../views/nativePhotoCapture.vue'

import qasFormView from '../views/qasFormView.vue'

import findApproveList from '../views/findApproveList.vue'

import qasForm2Config from '../views/qasForm2Config.vue'

import printConfig from '../views/printConfig.vue'
import appConfig from '../views/appConfig.vue'
import qrScan from '../views/qrScan.vue'

import rules from '../views/createRules.vue'

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
	//dashboardList
	//adminDashboardView
	//adminDashboardOtherConfig
	{
		path: '/rule',
		name: 'rule',
		component:rules
	},	
	{
		path: '/devices',
		name: 'devices',
		component:devices
	},

	{
		path: '/',
		name: 'index',
		component:branches
	},
	{
		path: '/findApproveList',
		name: 'findApproveList',
		component:findApproveList 
	},
	{
		path: '/qrScan',
		name: 'qrScan',
		component:qrScan 
	},
	{
		path: '/guiQasFormOne',
		name: 'guiQasFormOne',
		component:guiQasFormOne 
	},
	{
		path: '/guiQasFormTwo',
		name: 'guiQasFormTwo',
		component:guiQasFormTwo 
	},
	{
		path: '/guiHeader',
		name: 'guiHeader',
		component:guiHeader 
	},

	
	{
		path: '/startapp',
		name: 'startapp',
		component:startapp 
	},
	{
		path: '/photoCapture',
		name: 'photoCapture',
		component:photoCapture 
	},
	{
		path: '/qasFormView',
		name: 'qasFormView',
		component:qasFormView 
	},
	{
		path: '/nativePhotoCapture',
		name: 'nativePhotoCapture',
		component:nativePhotoCapture 
	},
	{
		path: '/createProduct',
		name: 'createProduct',
		component:createProduct 
	}

	,


	{
		path: '/userList',
		name: 'userList',
		component:userList 
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
		path: '/qasFormOneConfigHeader',
		name: 'qasFormOneConfigHeader',
		component:qasFormOneConfigHeader 
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

{
	path: '/qasFormOneDefault',
	name: 'qasFormOneDefault',
	component:qasFormOneDefault 
}
,
{
	path: '/qasFormTwoDefault',
	name: 'qasFormTwoDefault',
	component:qasFormTwoDefault 
}
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
		path: '/createFileType',
		name: 'createFileType',
		component:createFileType 
	},

	{
		path: '/createBranch',
		name: 'createBranch',
		component:createBranch 
	},
	{
		path: '/createUser',
		name: 'createUser',
		component:createUser 
	},

	{
		path: '/dashboardList',
		name: 'dashboardList',
		component:dashboardList 
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
	{
		path: '/labelSetting',
		name: 'labelSetting',
		component:labelSetting 
	},
	{
		path: '/sapImportStepOne',
		name: 'sapImportStepOne',
		component:sapImportStepOne 
	},
	{
		path: '/sapImportStepTwo',
		name: 'sapImportStepTwo',
		component:sapImportStepTwo 
	},
	{
		path: '/printConfig',
		name: 'printConfig',
		component:printConfig 
	},
	{
		path: '/appConfig',
		name: 'appConfig',
		component:appConfig 
	},
	
];

const router = new VueRouter({
	routes,
});

// function isAuthenticated(){

// if(store.state.interplex.username!=''&&store.state.interplex.password!='') return true;
// return false;
// }
 router.beforeEach((to, from, next) => {


    console.log(to.name)

	// if (to.name !== 'login' && !isAuthenticated()) next({ name: 'login' })
	 next()
  })



export default router;
