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
	setQasForm1Validation(state,value){

		state.qasForm1Validation=value
	},
	setQasForm2Validation(state,value){

		state.qasForm2Validation=value
	},
	remarks(state,{ref,value}){

		state.interplex.tempRemarks[ref]=value
	},

	closeNavbarMenu(state,payload){
		state.control.isNavbarHidden=false
	},

	navbarMenu(state,payload){

		state.control.isNavbarHidden=!state.control.isNavbarHidden
	},
	addProductsFormat(state,payload){
		console.log("add",payload)
		state.interplex.configProductsFormat.push(payload)
	},

	setPreFieldFormat(state,payload){
		console.log("add",payload)
		state.interplex.configProductsFormat=payload
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
	setRoleType(state,roletype){
		state.interplex.currentRoleType=roletype
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
hold(state,name){
var hold={
	name:name,	
	tempInvoice:state.interplex.tempInvoice,
	qualityAssuranceFormOne:state.interplex.qualityAssuranceFormOne
}
	state.interplex.hold.push(_.cloneDeep(hold))
},
removeHoldList(state,index){
	// state.interplex.hold.splice(1,index)

	Vue.delete(state.interplex.hold, index)
},

readHoldInvoice(state,payload){

Vue.set(state.interplex,'tempInvoice',payload.tempInvoice)
Vue.set(state.interplex,'qualityAssuranceFormOne',payload.qualityAssuranceFormOne)
	// qualityAssuranceFormOne:state.interplex.tempInvoice
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
if(config.length!=0)
	Vue.set(state.interplex,'configHeaderFormat',config)

},
setQasForm2Config(state,config){
	console.log("++++setQasForm2Config++++",config)
	if(config!='')
	Vue.set(state.interplex,'configQasForm2Format',config)
},
setQasFormOneList(state,list){
	Vue.set(state.interplex,'qasForm1',list)
},
setFileTypes(state,list){
console.log("File Types",list)
	Vue.set(state.interplex,'masterFileTypes',list)
},
readProductConfig(state,payload){
if(payload.length!=0)
	Vue.set(state.interplex,'configProductsFormat',payload)

},set_date(state,payload){

	state.date.action=payload.action
	state.date.from_date=payload.from_date
	state.date.to_date=payload.to_date
},
setSapLog(state,payload){
	state.sapLogs[payload.key]=payload.value
},
clearSapLog(state){
	state.sapLogs={}
},
setLabelSetting(state,payload){
	console.log("payload")
	console.log(payload)
	state.barcode.pageSetup.page=payload.config.pageSetup.page
	state.barcode.pageSetup.label=payload.config.pageSetup.label
	state.barcodeLabel.html=payload.config.html||""
	state.barcodeLabel.css=payload.config.css||""
	state.barcodeLabel.js=payload.config.js||""
}
,
// setMapProductCode
datOneCode(state,code){
if(code!='')
state.interplex.datOneCode=code
	
},

datTwoCode(state,code){
if(code!='')
state.interplex.datTwoCode=code

},
setdefaultField(state,config){
state.defaultField=config

},
setSapImport(state,config){
state.map.sapImport=config

},
setPrintConfig(state,config){
state.interplex.printConfig=config

},
setQasFormOneDefault(state,payload){
	console.log("+++++setQasFormOneDefault++++")
	console.log(payload)
	state.interplex.observation_print_view_format=payload.observation_print_view;
	state.interplex.observation_header_print_view_format=payload.observation_header_print_view;
	state.interplex.configProductsFormat=payload.observation_format;

}
,
setQasFormTwoDefault(state,payload){
	console.log("+++++setQasFormTwoDefault++++")
	console.log(payload)
	state.interplex.observation2_print_view_format=payload.observation2_print_view;
	state.interplex.observation2_header_print_view_format=payload.observation2_header_print_view;
	state.interplex.configProductsFormat2=payload.observation2_format;

},
setGuiQasFormOne(state,payload){
	state.interplex.qas_form_one_ui=payload;
},

setGuiQasFormTwo(state,payload){
	state.interplex.qas_form_two_ui=payload;
},
setHeader(state,payload){
	state.interplex.header_form_gui=payload;
}
,

showLoader(state){
	state.loader=true;

},
hideLoader(state){
	state.loader=false;
},
select_printer(state,payload){

    state.printer=payload;
},
setRulesList(state,payload){
	console.log("set rules list")
	console.log(payload)
state.interplex.rulesList=payload;

}






}

export default mutations;
