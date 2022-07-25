import * as core from '../lib/config'

var api=core.getApi()//core.api;
import axios from 'axios'
/*eslint-disable*/

var createUser=api+'/user/create'
var getBranchUsers=api+'/getusers';
var removeUser=api+'/user/remove'
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

var invoiceUploadApi=api+'/invoiceupload'
var checkProductBatch=api+'/productbatch/check'
var checkproductsbatch=api+'/checkproductsbatch'
var getQasFormOneApi=api+'/readqasformonelist'
var approverListApi=api+'/approverlist'
var getQasFormSingleApi=api+'/readqasformonesingle'

var qasFormOneUpdateApi=api+'/qasformone/update'
var qasFormTwoUpdateApi=api+'/qasformtwo/update';

var mediaDeleteApi=api+'/media/delete';

var readFileTypesApi=api+'/readfiletypes';

var readOperatorFormsApi=api+'/readoperatorforms'
var qasFormUpdateStatusApi=api+'/qasformstatus/update'
var getProductConfigApi=api+'/productformat/read';
var updateProductConfigApi=api+'/productformat/update';

var startUserIfNotExistApi=api+'/startusersiFnotexist';

var  getQasOneApi=api+'/getqasoneir';

async function submitInvoice(context,invoices){

    var result=await axios.post(submitInvoiceApi,{invoices})
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
    if(result.data.successStatus) return true;
    return false;


}


async function getHeaderConfig(context){
    var result = await axios.get(readHeaderConfig)
    console.log("default header config",result.data )
    context.commit('setHeaderConfig',result.data)  

}

async function updateHeaderConfig(context,config){
    var result = await axios.post(updateHeaderConfigApi,{config})
await getHeaderConfig(context)
    console.log('result config',result)
    if(result.data.successStatus) return true;
    return false;

    // await getHeaderConfig(context)
}
async function getUploadType(context){
    var result = await axios.get(readUploadType)
    
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
    context.commit('setMasterUsers',result.data)  

    return result.data
}

const actions = {
    async submitInvoice(context,payload){

        return submitInvoice(context,payload)
    },
    async updateHeaderConfig(context,payload){
return await updateHeaderConfig(context,payload)
    },
async    readHeaderConfig(context){

        await getHeaderConfig(context)
    },
    async readUploadType(context){

        getUploadType(context)
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
    var result = await axios.post(removeUser,{id})
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

    var result= await axios.post(checkproductsbatch,{products:payload})
    
    return result.data;
    
     },

async getQasFormOne(context){

        var result= await axios.get(getQasFormOneApi)
       
        context.commit('setQasFormOneList',result.data)
console.log("approverList",result)
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
    console.log("++productconfig+",result)
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
    
}
}

export default actions;
