import Vue from 'vue'
/*eslint-disable*/
function database(state,payload){
if(payload.action=='insertMasterProduct')
{
	state.interplex.masterProducts.push(payload.data)
}
if(payload.action=='insertMasterBranches')
{
	state.interplex.masterBranches.push(payload.data)

}

if(payload.action=='insertMasterUsers')
{
	state.interplex.masterUsers.push(payload.data)

}
if(payload.action=='insertUploadTypes')
{
	state.interplex.masterUploadTypes.push(payload.data)

}

if(payload.action=='insertHeaderTypes')
{
	state.interplex.masterUploadTypes.push(payload.data)

}




// *******************config****************************
if(payload.action=='saveHeaderConfig')
{
	state.interplex.configHeaderFormat=payload.data
}
if(payload.action=='saveProductConfig')
{
	state.interplex.configProductsFormat=payload.data
}

if(payload.action=='saveQasForm2Config')
{
	state.interplex.configQasForm2Format=payload.data

}

}

const mutations = 
{
	navbarMenu(state,payload){

		state.control.isNavbarHidden=!state.control.isNavbarHidden
	},
	addProductsFormat(state,payload){
		console.log("add",payload)
		state.interplex.configProductsFormat.push(payload)
	},
	removeProductsFormat(state,index){

		state.productsFormat.splice(index,1)
	},
	updateProductsFormat(state,payload){

		Vue.set(state,'productsFormat',payload)
	},
	setBranch(state,branch){
		state.currentBranch=branch
	},
	database(state,payload){
console.log(state)
database(state,payload)

	},
	addToQualitFormOne(state,payload){

state.interplex.qualityAssuranceFormOne.push(...payload)
	},
	tempInvoice(state,payload){
		// state.interplex.tempInvoice=payload
Vue.set(state.interplex,'tempInvoice',payload)
	},
	selectedPartNoItem(state,payload){

state.interplex.selectedPartNoItem=payload;
	}
	,
	setUser(state,payload){


var value=Object.assign(state.interplex.user,payload);
Vue.set(state.interplex,'user',value)
// state.interplex.user
},
qualityAssuranceFormOne(state,payload){
state.interplex.qasForm1.push(payload)
},

qualityAssuranceFormTwo(state,payload){
	state.interplex.qasForm2.push(payload)

	},
				
defaultValue(state,payload){


	state.interplex.tempInvoice={}
	state.interplex.qualityAssuranceFormOne=[]

}

};



export default mutations;
