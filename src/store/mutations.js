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
		state.interplex.currentBranch=branch
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
},

//api start here--------------------------
setMasterBranches(state,payload){
	console.log("++setMasterBranches+",payload)
	Vue.set(state.interplex,'masterBranches',payload)
},
logout(state){

	Vue.set(state.interplex.user,'username','')
	Vue.set(state.interplex.user,'password','')
	Vue.set(state.interplex.user,'name','')
},
setMasterUsers(state,users){
	console.log("users",users)

	Vue.set(state.interplex,'masterUsers',users)
},

setMasterProducts(state,products){

	Vue.set(state.interplex,'masterProducts',products)
},
setMasterUploadType(state,uploadtypes){
	Vue.set(state.interplex,'masterFileTypes',uploadtypes)
},
setHeaderConfig(state,config){
	Vue.set(state.interplex,'configHeaderFormat',config)

},
setQasForm2Config(state,config){
	Vue.set(state.interplex,'configQasForm2Format',config)
},
setQasFormOneList(state,list){
	Vue.set(state.interplex,'qasForm1',list)
},
setFileTypes(state,list){

	Vue.set(state.interplex,'masterFileTypes',list)
},
readProductConfig(state,payload){

	Vue.set(state.interplex,'configProductsFormat',payload)

}

};



export default mutations;
