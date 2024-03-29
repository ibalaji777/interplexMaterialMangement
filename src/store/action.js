import * as core from '../lib/config'

var api=core.getApi()//core.api;
import axios from 'axios'
/*eslint-disable*/
var saveRuleApi=api+'/saverule'
var rulesListApi=api+'/ruleslist'
var ruleDeleteApi=api+'/ruleDelete'
var findByHeaderApi=api+'/findbyheader';
var labelGenerateApi=api+"/labelgenerate"

var getSkipLevelApi=api+'/skiplevel';


var getGuiHeaderApi=api+'/getguiheader';
var setGuiHeaderApi=api+'/setguiheader';

var getGuiQasFormOneApi=api+'/getguiqasformone';
var setGuiQasFormOneApi=api+'/setguiqasformone';

var getGuiQasFormTwoApi=api+'/getguiqasformtwo';
var setGuiQasFormTwoApi=api+'/setguiqasformtwo';




var getprintconfigApi=api+'/getprintconfig';
var setprintconfigApi=api+'/setprintconfig';

var getSapImportApi=api+'/getsapimport';
var setSapImportApi=api+'/setsapimport';

var getDefaultImportApi=api+'/getdefaultimport';
var setDefaultImportApi=api+'/setdefaultimport';



var getQasFormOneDefaultApi=api+'/getqasformonedefault';
var setQasFormOneDefaultApi=api+'/setqasformonedefault';

var getQasFormTwoDefaultApi=api+'/getqasformtwodefault';
var setQasFormTwoDefaultApi=api+'/setqasformtwodefault';


var datOneCodeSetApi=api+'/datOneCode/save';
var datOneCodeGetApi=api+'/datOneCode/read';

var datTwoCodeSetApi=api+'/datTwoCode/save';
var datTwoCodeGetApi=api+'/datTwoCode/read';


var headerConfigGetApi=api+'/getheaderconfig';
var headerConfigSetApi=api+'/setheaderconfig';


var findQasFormDateApi=api+'/find_qas_form_date';
var findQasFormApi=api+'/find_qas_form';
var findQasForm2Api=api+'/find_qas_form2';

var labelSettingReadApi=api+'/labelsetting/read';
var labelSettingSaveApi=api+'/labelsetting/save';
var createUser=api+'/user/create'
var getBranchUsers=api+'/getusers';
var removeUserApi=api+'/user/remove'
var updateUser=api+'/user/update'
var createProduct=api+'/product/create'
var readProducts=api+'/readproducts'
var removeProduct=api+'/product/remove'
var updateProduct=api+'/product/update'

var findeProductApi=api+'/product/find'

var createBranch=api+'/branch/create'
var readBranchs=api+'/readbranch'
var removeBranch=api+'/branch/remove'
var updateBranch=api+'/branch/update'


var createUploadType=api+'/uploadtype/create'
var readUploadType=api+'/readuploadtype'
var removeUploadType=api+'/uploadtype/remove'
var updateUploadType=api+'/uploadtype/update'

var readHeaderConfig=api+'/readheaderconfig';
var updateHeaderConfigApi=api+'/headerconfig/update';


var readQasform2Config=api+'/readqasform2config';
var updateQasForm2ConfigApi=api+'/headerqasform2/update';
var submitInvoiceApi=api+'/addInvoices';
var submitInvoiceSingleApi=api+'/addInvoicesingle';

var invoiceUploadApi=api+'/invoiceupload'
var checkProductBatch=api+'/productbatch/check'
var checkproductsbatch=api+'/checkproductsbatch'
var getQasFormOneApi=api+'/readqasformonelist'

var getQasFormOneByDateApi=api+'/readqasformonedatelist'

var approverListApi=api+'/approverlist'
var getQasFormSingleApi=api+'/readqasformonesingle'

var qasFormOneUpdateApi=api+'/qasformone/update'
var qasFormTwoUpdateApi=api+'/qasformtwo/update';
var deleteQasFormOneApi=api+'/qasformone/delete'
var mediaDeleteApi=api+'/media/delete';

var readFileTypesApi=api+'/readfiletypes';

var readOperatorFormsApi=api+'/readoperatorforms'
var qasFormUpdateStatusApi=api+'/qasformstatus/update'
var getProductConfigApi=api+'/productformat/read';
var updateProductConfigApi=api+'/productformat/update';

var startUserIfNotExistApi=api+'/startusersiFnotexist';
var productBatchCheckApi=api+'/product_batch/check'
var  getQasOneApi=api+'/getqasoneir';

var qasFormHeaderUpdateApi=api+"qasheaderupdate"
var updateQasFormApi=api+'/qasforms/update'
async function submitInvoice(context,invoices){

var result=await axios.post(submitInvoiceApi,{invoices})
return result.data.data;
console.log('result',result)
}

async function submitInvoiceSingle(context,invoice){

var result=await axios.post(submitInvoiceSingleApi,{invoice})
return result.data.data;
console.log('result',result)
}
async function getQasForm2Config(context){
var result = await axios.get(readQasform2Config)
console.log("default qasform2 config",result.data )
context.commit('setQasForm2Config',result.data)  

}

async function updateQasForm2Config(context,config){
var result = await axios.post(updateQasForm2ConfigApi,{config})
console.log('result qasform2 config',result)
await getQasForm2Config(context)
// if(result.data.successStatus) return true;
// return false;


}




// async function updateHeaderConfig(context,config){
//     var result = await axios.post(updateHeaderConfigApi,{config})
// await getHeaderConfig(context)
//     console.log('result config',result)
//     if(result.data.successStatus) return true;
//     return false;

//     // await getHeaderConfig(context)
// }
async function getUploadType(context){
var result = await axios.get(readUploadType)
console.log("++++read file type++++",result.data)    
context.commit('setFileTypes',result.data)  

}


async function getProducts(context){
var result = await axios.get(readProducts)
context.commit('setMasterProducts',result.data.data)  

}

async function getBranches(context){
var result = await axios.get(readBranchs)
console.log("+++branches+++",result.data)
context.commit('setMasterBranches',result.data)  

}

async function getUsers(context){
var result = await axios.get(getBranchUsers)
console.log("updated master users...")
context.commit('setMasterUsers',result.data)  

return result.data
}

const actions = {
async submitInvoice(context,payload){

return submitInvoice(context,payload)
},
async submitInvoiceSingle(context,payload){

return submitInvoiceSingle(context,payload)
},


async updateHeaderConfig(context,payload){
return await updateHeaderConfig(context,payload)
},
// async    readHeaderConfig(context){

//         await getHeaderConfig(context)
//     },
async readUploadType(context){

return       await getUploadType(context)
},

async updateUploadType(context,userWithId){
var result = await axios.post(updateUploadType,{...userWithId})
await getUploadType(context)
},

async createUploadType(context,branch){
var result = await axios.post(createUploadType,branch)
await getUploadType(context)
if(result.data.successStatus) return true;
return false;
}    ,
async removeUploadType(context,id){
var result = await axios.post(removeUploadType,{id})
await getUploadType(context)

},

async createBranch(context,branch){
var result = await axios.post(createBranch,branch)
await getBranches(context)
if(result.data.successStatus) return true;
return false;
}    ,

async branches(context,payload){
await    getBranches(context)
// var result = await axios.get(api+'/branches')
// context.commit('setMasterBranches',result.data)
}
,

async removeBranch(context,id){
var result = await axios.post(removeBranch,{id})
await getBranches(context)

},

async updateBranch(context,userWithId){
console.log("user id ",userWithId)
var result = await axios.post(updateBranch,{...userWithId})
await getBranches(context)
},

async createProduct(context,product){
var result = await axios.post(createProduct,product)
await getProducts(context)

if(result.data.successStatus)            return true
return false;
// context.commit('setMasterBranches',result.data)
}    ,

async branches(context,payload){
var result = await axios.get(api+'/branches')
context.commit('setMasterBranches',result.data)
}
,
async removeUser(context,id){
var result = await axios.post(removeUserApi,{id})
await getUsers(context)
},
async removeProduct(context,id){
var result = await axios.post(removeProduct,{id})
await getProducts(context)
},

async updateUser(context,userWithId){
console.log("user id ",userWithId)
var result = await axios.post(updateUser,{...userWithId})
await getUsers(context)
},

async updateProduct(context,userWithId){
console.log("user id ",userWithId)
var result = await axios.post(updateProduct,{...userWithId})
await getProducts(context)
},
async login(context,payload){
var result = await axios.post(api+'/login',payload)
if(result.data.successStatus)
{            var user=result.data.data;
context.commit('setUser',user);
return user;

}
return ;


},
getUsers(context){
return  getUsers(context)

},
async  createUser(context,user){
var result = await axios.post(createUser,user)
if(result.data.successStatus) return true;
return false;
},

async users(context,payload){


},

async    logout(context){
context.commit('logout')
},
async getProducts(context){
getProducts(context)
},
async updateQasForm2Config(context,payload){
return    updateQasForm2Config(context,payload)
},
async readQasForm2Config(context){
await    getQasForm2Config(context)
},

async upload(context,payload){
console.log("++formdata++")
console.log(Object.fromEntries(payload))
var upload=await axios.post(invoiceUploadApi,payload,{
headers: {
'Content-Type': 'multipart/form-data'
}
})

console.log("upload",upload)
},
//  async checkProductBatch(state,payload){

// var result= await axios.post(checkProductBatch,{batch_no:payload})

// return result;

//  }

async checkproductsbatch(state,payload){
console.log("+++++batch check sap header++++++")
console.log(payload)
var result= await axios.post(checkproductsbatch,{products:payload})

return result.data;

},

async getQasFormOne(context){

var result= await axios.get(getQasFormOneApi)

context.commit('setQasFormOneList',result.data)
console.log("approverList",result)
// return  result;

},
async getQasFormOneByDate(context){
var result= await axios.get(getQasFormOneByDateApi)
context.commit('setQasFormOneList',result.data)
// console.log("approverList",result)
// return  result;

},


async approverList(context){
//approverList for admin or operator or approver
var result=[]
var user=context.state.interplex.user;
var from_date=context.state.date.from_date;
var to_date=context.state.date.to_date;

result= await axios.post(approverListApi,
{
roletype:user.roletype||'',
id:user.id||0,
from_date,
to_date})

//  var result= await axios.get(getQasFormOneApi)

context.commit('setQasFormOneList',result.data||[])
console.log("approverList",result)
// return  result;

},



async getQasFormOneSingle(context,invoice_table_id){

var result=await axios.post(getQasFormSingleApi,{invoice_table_id})
console.log(result)
return result.data;
}         
,
async qasFormOneUpdate(context,payload){
var result=await axios.post(qasFormOneUpdateApi,payload)
console.log(result)
return result.data;

},
async qasFormTwoUpdate(context,payload){
var result=await axios.post(qasFormTwoUpdateApi,{qasFormTwo:payload})
console.log(result)
return result.data;

},
async mediaDelete(context,id){
var result=await axios.post(mediaDeleteApi,{id})
console.log(result)
return result.data;

},


async findProduct(context,rmcode){
var result=await axios.post(findeProductApi,{rmcode})
console.log(result)
return result.data;

},



async fileTypes(context,payload){

var rt=await axios.get(readFileTypesApi)

context.commit('setFileTypes',rt.data)
}

,
async readOperatorForm(context,payload){
context.commit('setQasFormOneList',[])
var result=    await axios.post(readOperatorFormsApi,payload)
context.commit('setQasFormOneList',result.data)
console.log("get list",result)
},
async qasFormUpdateStatus(context,payload){

var  result=await axios.post(qasFormUpdateStatusApi,payload)
console.log(result)
},

async getProductConfig(context){
var result=await axios.get(getProductConfigApi);
// console.log("++productconfig+",result)
context.commit('readProductConfig',result.data)
return result.data
},

async updateProductConfig(context,productFormat){
var result=await axios.post(updateProductConfigApi,{config:productFormat});

await   getProductConfig(context)
},
async startUserIfNotExist(context,payload){
var result=await axios.get(startUserIfNotExistApi);

return result.data

},
async getQasOne(context,ir){
var result=await axios.post(getQasOneApi,{ir});

console.log('__++',result)
return result.data

},
async qasFormHeaderUpdate(context,header){

var result=await axios.post(qasFormHeaderUpdateApi,{header});
return result.data
}
,
async deleteQasFormOne(context,item){
console.log("delete action",item)
var result=await axios.post(deleteQasFormOneApi,{invoice_table_id:item.invoice_table_id});
// await    approverList(context)
return result.data
},
async productBatchCheck(context,rmcode){

var result=await axios.post(productBatchCheckApi,{rmcode});
return result.data
},

async updateQasForm(context,{qasFormOne,qasFormTwo}){
console.log("descrut",qasFormOne,qasFormTwo)
var result=await axios.post(updateQasFormApi,{qasFormOne,qasFormTwo});
return result.data
},


async labelSettingSave(context,config){
var result=await axios.post(labelSettingSaveApi,{config});
if(!_.isEmpty(result.data))
context.commit("setLabelSetting",result.data)

return result.data
},
async labelSettingRead(context){
var result=await axios.get(labelSettingReadApi);
if(!_.isEmpty(result.data))
context.commit("setLabelSetting",result.data)
return result.data
},

async findQasForm2(context,payload){
    var result=await axios.post(findQasForm2Api,payload);
    // context.commit("setLabelSetting",result.data)
    return result.data
    },
async findQasForm(context,payload){
var result=await axios.post(findQasFormApi,payload);
// context.commit("setLabelSetting",result.data)
return result.data
},
async findQasFormDate(context,payload){
    var result=await axios.post(findQasFormDateApi,payload);
    // context.commit("setLabelSetting",result.data)
    return result.data
    },

async getHeaderConfig(context,payload){
var result=await axios.get(headerConfigGetApi);
if(_.isArray(result.data.config)){
context.commit('setHeaderConfig',result.data.config)
}
return result.data
},
async setHeaderConfig(context,config){
var result=await axios.post(headerConfigSetApi,{config});
if(_.isArray(result.data.config)){
context.commit('setHeaderConfig',result.data.config)
}

return result.data
},

// mapProductCodeGet

async datOneCodeGet(context,payload){
var result=await axios.get(datOneCodeGetApi);

if(result.data){
context.commit('datOneCode',result.data.code)
}
return result.data
},
async datOneCodeSet(context,code){
var result=await axios.post(datOneCodeSetApi,{code});
if(result.data){
context.commit('datOneCode',result.data.code)
}
return result.data
},

async datTwoCodeGet(context,payload){
var result=await axios.get(datTwoCodeGetApi);

if(result.data){
context.commit('datTwoCode',result.data.code)
}
return result.data
},
async datTwoCodeSet(context,code){
var result=await axios.post(datTwoCodeSetApi,{code});
if(result.data){
context.commit('datTwoCode',result.data.code)
}
return result.data
},

async getSapImport(context,payload){
var result=await axios.get(getSapImportApi);

if(result.data){
context.commit('setSapImport',result.data.config)
}
return result.data
},
async setSapImport(context,config){
var result=await axios.post(setSapImportApi,{config});
if(result.data){
context.commit('setSapImport',result.data.config)

}
return result.data
},

async getDefaultImport(context,payload){
var result=await axios.get(getDefaultImportApi);

if(result.data){
context.commit('setdefaultField',result.data.config)
}
return result.data
},
async setDefaultImport(context,config){
var result=await axios.post(setDefaultImportApi,{config});
if(result.data){
context.commit('setdefaultField',result.data.config)

return result.data.config


}
return ""
},


async getPrintConfig(context,payload){
var result=await axios.get(getprintconfigApi);

if(result.data){
context.commit('setPrintConfig',result.data.config)
}
return result.data
},
async setPrintConfig(context,config){
var result=await axios.post(setprintconfigApi,{config});
if(result.data){
context.commit('setPrintConfig',result.data.config)

return result.data.config


}
return ""
},
async labelGenerate(context,qasFormOne){
var result=await axios.post(labelGenerateApi,{qasFormOne});

return result.data
},

async getQasFormOneDefault(context){
var result=await axios.get(getQasFormOneDefaultApi);

if(result.data){
context.commit('setQasFormOneDefault',result.data.config)

}
return result.data
},

async getQasFormTwoDefault(context){
var result=await axios.get(getQasFormTwoDefaultApi);

if(result.data){

context.commit('setQasFormTwoDefault',result.data.config)


}
return result.data
},

async setQasFormOneDefault(context,qasFormOne){
var result=await axios.post(setQasFormOneDefaultApi,
{
config:{
observation_header_print_view:qasFormOne.observation_header_print_view,    
observation_format:qasFormOne.observation_format,
observation_print_view:qasFormOne.observation_print_view
}
});
//   await  actions.getQasFormOneDefault(context)
return result.data
},

async setQasFormTwoDefault(context,qasFormTwo){
var result=await axios.post(setQasFormTwoDefaultApi,
{
config:{
observation2_header_print_view:qasFormTwo.observation2_header_print_view,    
observation2_format:qasFormTwo.observation2_format,
observation2_print_view:qasFormTwo.observation2_print_view
}
});
await  actions.getQasFormTwoDefault(context)
return result.data
},

async getGuiQasFormOne(context,payload){
var result=await axios.get(getGuiQasFormOneApi);

if(result.data){
context.commit('setGuiQasFormOne',result.data.config)
}
return result.data
},
async setGuiQasFormOne(context,config){
var result=await axios.post(setGuiQasFormOneApi,{config});
if(result.data){
context.commit('setGuiQasFormOne',result.data.config)

return result.data.config


}
return ""
},

async getGuiQasFormTwo(context,payload){
var result=await axios.get(getGuiQasFormTwoApi);

if(result.data){
context.commit('setGuiQasFormTwo',result.data.config)
}
return result.data
},
async setGuiQasFormTwo(context,config){
var result=await axios.post(setGuiQasFormTwoApi,{config});
if(result.data){
context.commit('setGuiQasFormTwo',result.data.config)

return result.data.config


}
return ""
},

async getGuiHeader(context,payload){
var result=await axios.get(getGuiHeaderApi);

if(result.data){
context.commit('setHeader',result.data.config)
}
return result.data
},
async setGuiHeader(context,config){
var result=await axios.post(setGuiHeaderApi,{config});
if(result.data){
context.commit('setHeader',result.data.config)

return result.data.config


}
return ""
},

async skipLevel(context,{invoice_no,rmcode,supplier_name}){
var result=await axios.post(getSkipLevelApi,{invoice_no,rmcode,supplier_name});
return result.data
},
async findByHeader(context,payload){
    var result=await axios.post(findByHeaderApi,{find:payload});
    return result.data
    },

    async saveRule(context,payload){
        var result=await axios.post(saveRuleApi,{data:payload});
        actions.rulesList(context)
        return result.data



        },
        async rulesList(context){
            var result=await axios.get(rulesListApi);
        context.commit('setRulesList',result.data)
            return result.data
            },
            async ruleDelete(context,id){
                var result=await axios.post(ruleDeleteApi,{id});
                actions.rulesList(context)
                return result.data
                },

            

        


}

export default actions;
