/*eslint-disable*/
import _ from 'lodash'
import moment from 'moment'
import store from '../store/index.js'
import { v4 as uuidv4 } from 'uuid';

// export const api="https://f237-2402-3a80-133b-8b42-a1cc-2d34-1f64-c56f.in.ngrok.io";

export var defaultFields={

  partNo:'OLMAT',
  supplierName:'Vendor Name',
  invoiceDate:'LAST_GR_DATE',
  invoiceDateEXT:'LAST_GR_DATE_EXT',
  invoiceNo:'invoice_no'
  
}

export var mapFormat={

  sapImport:{

    rmcode:'OLMAT',
    supplier_name:'Vendor Name',
    invoice_no:'invoice_no',
    grn_no:'grn_no',
    invoice_date:'LAST_GR_DATE',
    batch_no:'BATCH'


  }


}

export const dbFormate={


  qasForm1:{
    // id 
    operator_id:0,
    supplier_name:'',
    invoice_no:'',
    invoice_date:moment().format(store.state.dateFormat),
    invoice_qty:0,
    ir:'',
    // date
    grn_no:'',
    grn_date:moment().format(store.state.dateFormat),
    rmcode:'',//(part_no)
    eds:'',
    rm:'',
    received_qty:0,
    product_name:'',
    form_format:'',
    comment:'',
    duedate:moment().format(store.state.dateFormat),
    observation_print_view:[],
    observation_format:[],//(json)
    header_format:[],//(json)
    remarks:'',
    status:'pending', //(pending ,approved or acceptedOnDeviation or ppap)
    approved_by:0,
    roletype:'',
    skiplevel_status:false,
    date:moment().format(store.state.dateFormat)
      },

qasform2:{
  // id
qas_form_one_id:'',//write backend
rmcode:'',//part_no
eds:'',
supplier_name:'',
qty:'',
grn_no:'',
grn_date:'',//date
coil:'',
coil_weight:'',
width_one:'',
width_two:'',
thickness_one:'',//min
thickness_two:'',//max
lot_no:'',// supplier_coil:'',//(lot no)
validation:''
}

}
export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function findProductPartNo(rmcode){
  return await store.dispatch('findProduct',rmcode)

}
export async function getProductConfig(rmcode){



  return await store.dispatch('findProduct',rmcode)
  
  // _.filter($vm.$store.state.interplex.masterProducts,(x)=>x['rmcode']==prepareData.data[defaultFields.partNo]);


}

export function database($vm,action,payload={}){

  var prepareData={
    action,
    data:payload
  }
// console.log(prepareData)
// *********************insert****************************
if(action=='insertMasterProduct')
{
$vm.$store.commit('database',prepareData)
}
if(action=='insertQasForm1')
{
  $vm.$store.commit('qualityAssuranceFormOne',prepareData.data)
}
if(action=='insertQasForm2')
{
  $vm.$store.commit('qualityAssuranceFormTwo',prepareData.data)
}


if(action=='insertMasterBranches')
{
$vm.$store.commit('database',prepareData)
} 

if(action=='insertMasterUsers')
{
$vm.$store.commit('database',prepareData)
}
if(action=='insertUploadTypes')
{
$vm.$store.commit('database',prepareData)
}

if(action=='insertHeaderTypes')
{
$vm.$store.commit('database',prepareData)
}
// *******************config****************************
if(action=='saveHeaderConfig')
{
$vm.$store.commit('database',prepareData)
}
if(action=='saveProductConfig')
{
$vm.$store.commit('database',prepareData)
}

if(action=='saveQasForm2Config')
{
$vm.$store.commit('database',prepareData)
}




// *********************Get****************************

if(action=='getMasterProductConfig')
{

  return _.cloneDeep($vm.$store.state.interplex.configProductsFormat);


}
if(action=='getMasterHeaderConfig')
{
  return _.cloneDeep($vm.$store.state.interplex.configHeaderFormat);

}
if(action=='getMasterQasForm2Config')
{
  return _.cloneDeep($vm.$store.state.interplex.configQasForm2Format);

}



if(action=='getMasterProductsTotal')
{

  return $vm.$store.state.interplex.masterProducts.length

}

if(action=='getQualityAssuranceFormOne')
{
  //local reference

  return $vm.$store.state.interplex.qualityAssuranceFormOne;

}
if(action=='getApproverList')
{
  //local reference

  return $vm.$store.state.interplex.qasForm1;

}



if(action=='getUsersTotal')
{

  return {
    admin:_.filter($vm.$store.state.interplex.masterUsers,(x)=>x.roletype=='admin').length,
    operator:_.filter($vm.$store.state.interplex.masterUsers,(x)=>x.roletype=='operator').length,
    approver :_.filter($vm.$store.state.interplex.masterUsers,(x)=>x.roletype=='approver').length,
    }

}

if(action=='getQasFormOne')
{

  return {
    pending :_.filter($vm.$store.state.interplex.qasForm1,(x)=>x.status=='pending').length,
    approved:_.filter($vm.$store.state.interplex.qasForm1,(x)=>x.status=='approved').length,
    acceptedOnDeviation:_.filter($vm.$store.state.interplex.qasForm1,(x)=>x.status=='acceptedOnDeviation').length,
    rejected:_.filter($vm.$store.state.interplex.qasForm1,(x)=>x.status=='rejected').length,
    ppap:_.filter($vm.$store.state.interplex.qasForm1,(x)=>x.status=='ppap').length,
    }

}
if(action=='getBranchesList')
{
// console.log($vm.$store.state.interplex.masterBranches)
  return $vm.$store.state.interplex.masterBranches;

}
if(action=='getMaseterProductList')
{
// console.log($vm.$store.state.interplex.masterProducts)
  return $vm.$store.state.interplex.masterProducts;

}
if(action=='getUsersList')
{
// console.log($vm.$store.state.interplex.masterUsers)
  return $vm.$store.state.interplex.masterUsers;

}

if(action=='getFileTypeList')
{
  return $vm.$store.state.interplex.masterUploadTypes;

}
if(action=='getProductConfigValue')
{
//   console.log("master products,",$vm.$store.state.interplex.masterProducts)
// console.log("payload data",prepareData.data)
  return _.filter($vm.$store.state.interplex.masterProducts,(x)=>x['rmcode']==prepareData.data[defaultFields.partNo]);

}



//*********************delete**********************
if(action=='deleteMasterProduct')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}

if(action=='deleteMasterBranch')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='deleteMasterUser')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='deleteUploadType')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='insertHeaderTypes')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}


//*********************update**********************
if(action=='updateMasterProduct')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}

if(action=='updateMasterBranch')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='updateMasterUser')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='updateUploadType')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;

}
if(action=='insertHeaderTypes')
{
console.log(payload.data)
// return $vm.$store.state.interplex.masterBranches;
}

if(action=='login'){

  var check_users=  _.filter($vm.$store.state.interplex.masterUsers,(eachUser)=>{
    // console.log('each user',eachUser)
    return eachUser.username==prepareData.data.username&&eachUser.password==prepareData.data.password
    
      })
    

  // console.log("username",prepareData.data.username)
  // console.log("password,",prepareData.data.password)
  // console.log($vm.$store.state.interplex.masterUsers)


  if(check_users.length!=0){
var user=check_users[0];
console.log("++++logged user++++",user)
    $vm.$store.commit('setUser',user);

    if(user.roletype=='operator'){
      $vm.$router.push({name:'operatorDashboard'})
    }

    if(user.roletype=='approver'){
      $vm.$router.push({name:'verifierDashboard'})
    }

    if(user.roletype=='admin'){
      $vm.$router.push({name:'adminDashboard'})
    }

  }
  else{

    $vm.$alert("User Not Found")
  }



}

}


function  groupBy(array, f) {
  let groups = {};
  array.forEach(function (o) {
    var group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
return Object.keys(groups).map(function (group) {
 return groups[group];
})
}


export function onlyNumbers(str) {
  return /^[0-9.,]+$/.test(str);
}

export function observation($vm){


//dummy herey you want select product from from party no or grn no like that
  return { 
    
    productFormat:_.cloneDeep($vm.$store.state.interplex.productsFormat),
    scope:_.reduce(_.cloneDeep($vm.$store.state.interplex.productsFormat),(result,value,key)=>{
// console.log("value")
// console.log(value)
// console.log("key",key)
      result[value.name]=onlyNumbers(value.value)?parseFloat(value.value):0;
      return result;
    },{})

  }
}

export function headerConfigFormat($vm,sapObject){

var header=_.cloneDeep(database($vm,'getMasterHeaderConfig'))

var productObject=database($vm,'getProductConfigValue',sapObject)

 if(productObject.length==0){
  productObject={}
 }
 else{
  productObject=productObject[0]
 }


var header_result= _.map(header,(x)=>{

  if(x.mapFrom=='header'&&x.map!='')
  {
  x['value']=(sapObject[x.map]||'')
  }
  if(x.mapFrom=='product'&&x.map!='')
  {
    x['value']=(productObject[x.map]||'')
   
  }
  return x;

})

// console.log("header result",header_result)
return header_result;
}



export  function productQasForm2ConfigSArray($vm,sapProductArray=[]){

  return  _.map(sapProductArray, (sapProduct)=>{

    // console.log('sapProduct',sapProduct)
    // console.log("====",productQasForm2ConfigSingle($vm,sapProduct))
    return    productQasForm2ConfigSingle($vm,sapProduct)
  })
}


export function arrayToObj(array){

  return _.reduce(array, function(result, value, key) {
    result[value['name']]=value['value']||''
    return result;
  }, {});
    


}

function validateExpressionNumber(value){

  if(!onlyNumbers(value)||value==''||value==0)
 return NaN; 

return  parseFloat(value);

}


export function validateProductObjDataset($vm,productObj)
{

  var objectKeys=Object.keys(productObj)
var object={}
var rt= _.map(objectKeys,(key)=>{
  object[key]=validateExpressionNumber(productObj[key])
  
  // onlyNumbers(productObj[key])?parseFloat(productObj[key]):NaN;

  // return  productObj
 })
//  console.log("validation",rt)
return object


}
export function validateProductArrayDataset($vm,product_observation)
{

  console.log("product observation",product_observation)
var object={}
 _.map(product_observation,(product)=>{
console.log("observation fields=>",product)
object[product.name]=validateExpressionNumber(product.value)
  
// onlyNumbers(product.value)?parseFloat(product.value):NaN;

 })

 return object

}

export  function productQasForm2ConfigSingle($vm,sapObject={}){
//sapObject sap
//productObject db

 var productFormat=$vm.$store.state.interplex.configQasForm2Format;
 var productObject=getProductConfig(sapObject.rmcode)
//  database($vm,'getProductConfigValue',sapObject)
 //database($vm,'getProductConfigValue',sapObject)
//  console.log("productFormat,",productFormat)
//  console.log("productObject",productObject)

 if(productObject.length==0){
  productObject={}
 }
 else{
  productObject=productObject[0]
 }
  var object={}
   _.map(productFormat,(format)=>{




    // console.log('formate',format)
    if(format.name=='validation'){
      object[format.name]=format.rule;
    
    }
    if(format.name=='error_status'){
      object[format.name]=format.value;
    
    }
 if(!['validation','error_status'].includes(format.name)){
  object[format.name]=format.value||'';
  if(format.mapFrom=='product'&&format.map!=''){
    object[format.name]=productObject[format.map]||''//key:name
        }
         if(format.mapFrom=='header'&&format.map!=''){
      object[format.name]=sapObject[format.map]||''//key:name
         }
}
// object[format.name]=productObject[format.map]||''//key:name
// object[format.name+'_validation']=format.validation//key_validation:true/false  
// object[format.name+'_rule']=format.rule//key_rule:''  
// object[format.name+'_map']=format.map//key_map:''  
// object[format.name+'_mapFrom']=format.mapFrom//key_mapFrom:''  

//     if(format.mapFrom=='product'&&format.map!=''){
// object[format.name]=productObject[format.map]||''//key:name
// object[format.name+'_validation']=format.validation//key_validation:true/false  
// object[format.name+'_rule']=format.rule//key_rule:''  
// object[format.name+'_map']=format.map//key_map:''  
// object[format.name+'_mapFrom']=format.mapFrom//key_mapFrom:''  
// // object[format.name+'_mapFrom']=productObject[format.mapFrom]//key_mapFrom:'' 
//  }

//  if(format.mapFrom=='header'&&format.map!=''){
//   object[format.name]=sapObject[format.map]//key:name
//   object[format.name+'_validation']=format.validation//key_validation:true/false  
//   object[format.name+'_rule']=format.rule//key_rule:''  
//   object[format.name+'_map']=format.map//key_map:''  
//   object[format.name+'_mapFrom']=format.mapFrom//key_mapFrom:''  
//   // object[format.name+'_mapFrom']=productObject[format.mapFrom]//key_mapFrom:'' 
//    }
  
// return object;

})


return object

}

export function productConfigFormat($vm,object){

 var productConfigFormat=_.cloneDeep(database($vm,'getMasterProductConfig'))
 var originalProduct=database($vm,'getProductConfigValue',object)

//  console.log('productConfigFormat',productConfigFormat)
//  console.log("originalProduct",originalProduct)
 if(originalProduct.length==0){

  return productConfigFormat
 }
return originalProduct[0].observation_format||[];

  //apply default value from  product part not
  // _.map(productConfigFormat,(x)=>{

  //   if(x.mapFrom=='header')
  //   {
  //   x['value']=(object[x.map]||'')
  //   }
  //   if(x.mapFrom=='product')
  //   {
  //     x['value']=(object[x.map]||'')
     
  //   }
  //   if(x.map=='')
  //   {
  //     x['value']=(object['value']||'')
    
  //   }
  
  // })
  
  return productConfigFormat;
  }

export function sapMap(observation_format,sapObject){

  return _.map(observation_format,(obj)=>{

    if(_.has(obj,'sapHeader')){
      obj.value=sapObject[obj['sapHeader']]||''
      //  if(sapObject[obj['sapHeader']]){
      //   store.commit('setSapLog',{key:sapObject[defaultFields.partNo]+obj['sapHeader'],value:'Found'})
      // return; 
      // }
      // store.commit('setSapLog',{key:sapObject[defaultFields.partNo]+obj['sapHeader'],value:'Not Found'})

    }
    return obj
  })
}

  export async function getProduct($vm,object){

    // var productConfigFormat=_.cloneDeep(database($vm,'getMasterProductConfig'))
    // var originalProduct=database($vm,'getProductConfigValue',object)
   
   //  console.log('productConfigFormat',productConfigFormat)
    console.log("Sap map+>",object)
   
   var product=await findProductPartNo(object[defaultFields.partNo])||[]

// x['headerConfigFormat']=product.headerConfigFormat=header_result;


if(product.length==0){
   
     return {
      productConfigFormat:[],
      observation_print_view:[],
      observation2_print_view:[],
      productConfigFormat2:[], 
      qas_form_one_ui:{},
      qas_form_two_ui:{},
      headerConfigFormat:[]
    }
    }
    var observation_format=sapMap(product[0].observation_format,object)

    var header=_.cloneDeep(database($vm,'getMasterHeaderConfig'))

    //  console.log("ob+++>",product)
    
    
    var header_result= _.map(header,(x)=>{
    
      if(x.mapFrom=='header'&&x.map!='')
      {
      x['value']=(object[x.map]||'')
      }
      if(x.mapFrom=='product'&&x.map!='')
      {
        x['value']=(product[0][x.map]||'')
       
      }
      return x;
    
    })
    
    return {
    productConfigFormat:observation_format,
    observation_print_view:product[0].observation_print_view,
    observation2_print_view:product[0].observation2_print_view,
    productConfigFormat2:product[0].observation2_format,
    qas_form_one_ui:product[0].qas_form_one_ui,
    qas_form_two_ui:product[0].qas_form_two_ui,
    headerConfigFormat:header_result

  };
   
     //apply default value from  product part not
     // _.map(productConfigFormat,(x)=>{
   
     //   if(x.mapFrom=='header')
     //   {
     //   x['value']=(object[x.map]||'')
     //   }
     //   if(x.mapFrom=='product')
     //   {
     //     x['value']=(object[x.map]||'')
        
     //   }
     //   if(x.map=='')
     //   {
     //     x['value']=(object['value']||'')
       
     //   }
     
     // })
     
     return productConfigFormat;
     }

     export function setQasForm2(products,productConfigFormat2){


return  _.map(products,(sapObject)=>{
console.log("sap products..",sapObject)

_.map(productConfigFormat2,(x)=>{

if(x.name!='validation'){
  sapObject[x.name]=x.value||'';

  if(x.sapHeader){
    sapObject[x.name]=sapObject[x.sapHeader]||''
  }
}
else{
  if(x.exp){
    sapObject['validation']=false;
  }

}

})

return sapObject
  })


}

export async function createProductList($vm,array){

  //create header
 // create product form 
return await Promise.all(_.map(array,async (x)=>{
  // console.log('x',x)
var product=await getProduct($vm,x)
x['headerConfigFormat']=product.headerConfigFormat;

// headerConfigFormat($vm,x)


x['productConfigFormat']=product.productConfigFormat;
x['observation_print_view']=product.observation_print_view;

x['observation2_print_view']=product.observation2_print_view;
x['productConfigFormat2']=product.productConfigFormat2;
x['qas_form_one_ui']=product.qas_form_one_ui;
x['qas_form_two_ui']=product.qas_form_two_ui;
// x['products']=setQasForm2(x.products,productConfigFormat2);


//productConfigFormat($vm,x)
x['qasForm2']= setQasForm2(x.products,x.productConfigFormat2);

// productQasForm2ConfigSArray($vm,x.products)
return x
}))

}
export function createInvoice(array){

  var check={}
var create_array={}
  _.map(array,(invoiced_products)=>{
if(!check[invoiced_products.ref]){
check[invoiced_products.ref]=invoiced_products.ref
var invoice={
  ...invoiced_products,
  gallery:[],
  remarks:''
}

  create_array[invoiced_products.ref]=invoice
}
  })
return create_array;

}

export function headerFileGroup(array){


// var helper = {};

// var result = array.reduce(function(r, o) {
//   var key = (o.PRDNO+'-'+o['Vendor Name']).replace(/\s/g, "").toLowerCase()
// // var list=[];  
// console.log(key)
// console.log(!helper[key])
//   if(!helper[key]) {
//     helper[key]=key
//     helper[key] ={
//       name:key,
//       products:[],
//       total:0
//     } //Object.assign({total:0}, ); // create a copy of o
//     r.push(helper[key]);
// //    list=[]
//   } else {
//     helper[key].total += 1;
//     helper[key].products.push(o)   
// }

//   return r;
// }, []);
// return result;
// console.log(result);

return _.map(groupBy(array, function (item) {
  // item[defaultFields.invoiceDate]
  return [item[defaultFields.partNo], item[defaultFields.supplierName],item[defaultFields.invoiceNo]||''];
}),(x)=>({
  total:x.length,
  invoiceQty:_.sumBy(x,(xy)=>parseFloat(xy.QTY)),
  ...x[0],
  products:x,

}));
}



export function skiplevel($vm,array){
  console.log("already grouped array",array)

  var groupSkipLevel=_.map(groupBy(array, function (item) {
    // console.log(defaultFields.supplierName,[item[defaultFields.supplierName],item[defaultFields.partNo]].join(),item)
    return [item[defaultFields.supplierName],item[defaultFields.partNo]];
  }),(x)=>{

    return {
      skuid:uuidv4(),
      skref:x[0][defaultFields.supplierName]+x[0][defaultFields.partNo],
      partNo:x[0][defaultFields.partNo],
      skipLevelProducts:x
      };
  });

  console.log("sk array",groupSkipLevel)
  
//sort by date
var groupSkipLevelsort=_.map(groupSkipLevel,(skiplevel)=>{
  //part no
  var partNo={}
  partNo[defaultFields.partNo]=skiplevel.partNo;
  skiplevel['skipLevelCount']=0
var originalProduct=database($vm,'getProductConfigValue',partNo);
if(originalProduct.length!=0){
  skiplevel['skipLevelCount']=parseFloat(originalProduct[0].skiplevel||0)||0;
 
} 
 
  skiplevel['skipLevelProducts']=_.orderBy(skiplevel.skipLevelProducts, [(obj) => new Date(obj[defaultFields.LAST_GR_DATE_EXT])], ['asc'])
return skiplevel
})
//part no check
var markSkipLevelsort=_.map(groupSkipLevelsort,(markSkipLevel)=>{
console.log("++++marked skiplevel+++",markSkipLevel)

var givenSkipLevel=markSkipLevel['skipLevelCount'];  
console.log("skipLevel",givenSkipLevel+1)

var ignoreSkipLevelEnd=givenSkipLevel+1
console.log("products",markSkipLevel.skipLevelProducts)
 markSkipLevel.skipLevelProducts.forEach((value,index)=>{
  value['skuid']=markSkipLevel.skuid;
  value['skiplevel_status']=true;
  value['sk_index']=index;
  value['sk_order']=(index)+"/"+givenSkipLevel;


if(givenSkipLevel==0||index==0||ignoreSkipLevelEnd<=index){
  value['skiplevel_status']=false;
  value['sk_order']="";
}
//       // }
// return value
})

return markSkipLevel
})

  var skipLevelResult=[];

(markSkipLevelsort).forEach(element => {
console.log("el=>",element)
  skipLevelResult.push(...element.skipLevelProducts)
});



console.log("++++markskiplevel sort++++",markSkipLevelsort)


console.log("++++markskiplevel sort++++",skipLevelResult)
// console.log("skip level sort",groupSkipLevelsort)

return skipLevelResult;
}
export function choose_date_type(action){
  var from_date=moment().format("YYYY-MM-DD"),to_date=moment().format("YYYY-MM-DD");
      if(action=='today'){
      from_date=moment().format("YYYY-MM-DD");
      to_date=moment().format("YYYY-MM-DD");
      }
      
      if(action=='yesterday'){
      from_date=moment().subtract(1, 'days').format("YYYY-MM-DD");
      to_date=moment().subtract(1, 'days').format("YYYY-MM-DD");
      }
      
      if(action=='last_7_days'){
      from_date=moment().subtract(6, 'days').format("YYYY-MM-DD");
      to_date=moment().format("YYYY-MM-DD");
      }
      
      if(action=='last_30_days'){
      from_date=moment().subtract(29, 'days').format("YYYY-MM-DD");
      to_date=moment().format("YYYY-MM-DD");
      }
      
      if(action=='this_month'){
      from_date=moment().startOf('month').format("YYYY-MM-DD");
      to_date=moment().endOf('month').format("YYYY-MM-DD");
      }
      if(action=='last_month'){
      from_date=moment().subtract(1, 'month').startOf('month').format("YYYY-MM-DD");
      to_date=moment().subtract(1, 'month').endOf('month').format("YYYY-MM-DD");
      }
  

      store.commit('set_date',{action,from_date,to_date})
      return {
          from_date,
          to_date
      }
  }

  export  function isDeviceDetect() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

export function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

export function getObservationPrintView(printView){
 var result=_.cloneDeep(store.state.interplex.observation_print_view_format)
  if(typeof printView=='object'&&printView!==null)
      if(printView.length!=0) result=printView 

      
return result;
}


export function setDefaultValue(data,defaultValue=''){

if(data==''||data==0) return defaultValue
return  data


}
export function qasFormOneFill(printView,observation_format){
var  observation_format_object={}
  _.map(observation_format,(item)=>{
    observation_format_object[item.name]=item.value||''
})

return _.map(printView,(view)=>{

  var object={
    desc:view.desc,
    unit:observation_format_object[view.unit]||'',
     min_spec:observation_format_object[view.min_spec]||'',
    max_spec:observation_format_object[view.max_spec]||'',
    sup_one:observation_format_object[view.sup_one]||'',
    sup_two:observation_format_object[view.sup_two]||'',
    ielpt_one:observation_format_object[view.ielpt_one]||'',
    ielpt_two:observation_format_object[view.ielpt_two]||'',
    remarks:observation_format_object[view.remarks]||'',
   
   }
   return object;
   
})

// _.map(observation_print_view_format,(view)=>{
//   console.log("view.min_spec",view.min_spec,observation_format_object[view.min_spec])
    
//   })
}

export const getFiscalYearTimestamps = () => {
  const startMonthName = "July";
  const endMonthName = "June";
  if(moment().format('M')>=6){

    return "FY-"+moment().add(1,"years").format('YY')+"-"+moment().format("MM")

  }
  return "FY-"+moment().format("YY")+"-"+moment().format("MM")
};

export function setQasHeader(qasOne,headerArray){

 


  _.map(headerArray,(x)=>{

    if(['invoice_no',
    'invoice_date',
    'invoice_qty',
    'ir',
    'grn_no',
    'grn_date',
  'rmcode',
  'rm',
'eds',
'product_name',
// 'form_format',
'received_qty','invoice_qty'].includes(x.name))
{
  qasOne[x.name]=x.value||'';
}
return x;
  })
return qasOne;



// return  {
//     supplier_name:_.filter(array,(x)=>x.name=='supplier_name')[0]||'',
//     product_name:_.filter(array,(x)=>x.name=='product_name')[0]||'',
//     invoice_no:_.filter(array,(x)=>x.name=='invoice_no')[0]||'',
//     invoice_date:_.filter(array,(x)=>x.name=='invoice_date')[0]||'',
//     invoice_qty:_.filter(array,(x)=>x.name=='invoice_qty')[0]||'',
//     ir:_.filter(array,(x)=>x.name=='ir')[0]||'',
//     grn_no:_.filter(array,(x)=>x.name=='grn_no')[0]||'',
//     grn_date:_.filter(array,(x)=>x.name=='grn_date')[0]||'',
//     rmcode:_.filter(array,(x)=>x.name=='rmcode')[0]||'',
//     eds:_.filter(array,(x)=>x.name=='eds')[0]||'',
//     received_qty:_.filter(array,(x)=>x.name=='received_qty')[0]||'',
//     // eds:_.filter(array,(x)=>x.name=='eds')[0]||'',
//   }

}


const defaultInvoice={
  qasForm1Prod:[],
  ref:'',
  invoice_client_id:'',
  gallery:[],
  remarks:'',
  operator_id:store.state.interplex.user.id || 0,
  supplier_name:'',
  invoice_no:'',
  invoice_date:'',
  invoice_qty:0,
  ir:'',
  date : moment().format(store.state.dateFormat),
  grn_no : "",
  grn_date : moment().format(store.state.dateFormat),
  rmcode : "",
  eds : "",
  rm : "",
  received_qty : 0,
  product_name : "",
  form_format : "",
  comment : "",
  duedate : moment().format(store.state.dateFormat),
  observation_format : [],
  header_format : [],
  status : "pending",
  approved_by : 0,
  qasForm1New:[],
}


export function setHeaderConfigData(headerData,invoice){
 return _.map(headerData, header => {
    invoice[header.name] = header.value;
    return header;
});

}

export async function  submit($vm) {
   var invoices = [];
  var user_id = $vm.$store.state.interplex.user.id;
   _.each($vm.tempInvoice, (val, key) => {
//*********set defualt invoice format and uniquie id for each invoice**********************
    var invoice = defaultInvoice;
       const uuid = uuidv4();
      const qasForm1Prod = _.cloneDeep(
          _.filter(
              $vm.getQualityAssuranceFormOne,
              product => product.ref == key
          )
      );
 
//***************************Asign invoice Values here**********************
  
      invoice["qasForm1Prod"] = _.map(qasForm1Prod,x => ({...x,invoice_client_id:uuid}));
      invoice["ref"] = key;
      invoice["invoice_client_id"] = uuid;
      invoice["gallery"] = _.map(val["gallery"], x => ({...x,invoice_client_id:uuid}));
      invoice["remarks"] = val["remarks"];

      if (qasForm1Prod.length != 0) {
//********************set Header config into invoice****************************
          var headerData = qasForm1Prod[0].headerConfigFormat;
          invoice=setQasHeader(invoice,headerData)
          // invoice=setHeaderConfigData(headerData,invoice)
//********************Create QASForm1 config into invoice****************************
invoice["qasForm1New"] = _.map(qasForm1Prod, product => {
  console.log("product++",product)
              var object = {};
              object["batch"] = "";
              object["skiplevel_status"] = product.skiplevel_status;
              object["sk_index"] = product.sk_index;
              object["sk_order"] = product.sk_order;
              object["invoice_client_id"] =uuid;
              object["observation_format"] =
              // product.productConfigFormat;
              object["header_format"] = product.headerConfigFormat;
              object=setQasHeader(object,product.headerConfigFormat)
              object['qas_form_one_values']=_.reduce(product.productConfigFormat,
                (result,value,key)=>{
                  console.log("qas_form_one_values",value.name,value.value)
                  result[value.name]=value.value
                  return result;

              },{})
              object['qas_form_one_validation']=_.reduce(product.productConfigFormat,
                (result,value,key)=>{
                  // console.log("qas_form_one_values",key,value)
                  if(value.exp)
                  result[value.name]=value.exp.rule
                  return result;

              },{})

              // object=setHeaderConfigData(product.headerConfigFormat,object)

//********************Create QASForm2 config into invoice****************************
              object["qasForm2New"] = _.map(
                  product.qasForm2,
                  qasform2 => {
                      qasform2["invoice_client_id"] =invoice["invoice_client_id"];
                      qasform2=setQasHeader(qasform2,product.headerConfigFormat)
                      qasform2['qas_form_two_values']=_.reduce(product.productConfigFormat2,
                        (result,value,key)=>{
                          // console.log("qas_form_one_values",key,value)
                          result[value.name]=value.value
                          return result;
        
                      },{})
        
                      qasform2['qas_form_two_validation']=_.reduce(product.productConfigFormat2,
                        (result,value,key)=>{
                          // console.log("qas_form_one_values",key,value)
                          if(value.exp)
                          result[value.name]=value.exp.rule
                          return result;
        
                      },{})

                      return qasform2;
                  }
              );
              return { ...object, operator_id: user_id };
          });
      }

      invoices.push(invoice);

  });

  $vm.$alert("Saved");
//---------------------------------------------------
  console.log("+++Invoices Gallery+++", invoices);
 // ----------------

var new_invoices=_.map(invoices,(invoice)=>{

invoice.qasForm1New= _.map(invoice.qasForm1New,(qsform1)=>{

var qasformone=setQasHeader(qsform1,qsform1.header_format)
return qasformone

})
return invoice
})

console.log(new_invoices)


  var result = await $vm.$store.dispatch("submitInvoice", new_invoices);
  var blobInvoices = _.map(new_invoices, invoice => {
      invoice["gallery"] = _.map(invoice.gallery, async image => {
          var formdata = new FormData();
          // image['invoice_client_id']=invoice['invoice_client_id'];
          image["invoice_table_id"] = 0;
          var invoiceFilter = _.filter(
              result,
              ob => ob.invoice_client_id == image.invoice_client_id
          );
          if (invoiceFilter.length != 0)
              image["invoice_table_id"] = invoiceFilter[0].id;

          // formdata.append('invoice_table_id',image['invoice_table_id'])
          formdata.append(
              "invoice_table_id",
              image["invoice_table_id"]
          );
          formdata.append(
              "invoice_client_id",
              image["invoice_client_id"]
          );
          formdata.append("invoice_no", invoice["invoice_no"]);
          formdata.append("file_type", image["file_type"]);

          formdata.append(
              "file",
              base64toBlob(image.src.split(",")[1])
          );

          await $vm.$store.dispatch("upload", formdata);

          // files.push(image)
          return image;
      });
      return invoice;
  });
  // -----------------
  // _.map(blobInvoices,(rt)=>{
  //  rt['invoice_table_id']=0;
  // var invoiceFilter=_.filter(result,(ob)=>ob.invoice_client_id==rt.invoice_client_id)
  // if(invoiceFilter.length!=0)
  // rt['invoice_table_id']=invoiceFilter[0].id

  // })

  // console.log("++++++invoices++++",invoices)
  $vm.clear();
}
export function colspan(field){
if(field.hasOwnProperty('merge')) return  field.merge.colspan
return 1;
}
export function rowspan(field){
  if(field.hasOwnProperty('merge')) return  field.merge.rowspan
  return 1;
  }
  export function merge(field){
return{
  colspan:colspan(field),
  rowspan:rowspan(field)
}

  }


  export function  tableOrder(original=[],existOrder=[]){
var result=[]

_.map(original,(value)=>{
    if(_.some(existOrder,(x)=>x==value)){
result.push(value)
    }
  })

  return result;


  }


export function   setObservationFormat(ob_format,qas_forn_one_values){

return  _.map(ob_format,(x)=>{

    x.value=qas_forn_one_values[x.name]||''
return x;
  })

  }

  export function observationTableHeader(format,printView)
  {

return _.map(printView,(x)=>{

  return _.map(x.column,(col)=>{

var  header=_.find(format,(data)=>data.name==col.name)
if(header)
    return  {...header,
    merge:{
      colspan:header.merge?header.merge.colspan:1,
      rowspan:header.merge?header.merge.rowspan:1
    }
    } 

    return {
    name:col.header,
    value:'',
    merge:{
      colspan:1,
      rowspan:1,
    }


    }
  })
})
  }


  export function observationTableBody(order,format,printView)
  {

    var count=0;
return _.map(printView,(x)=>{
  count++

  var torder=tableOrder(Object.keys(x),order)

  return _.map(torder,(col ,key)=>{
    // console.log("c",col,"k",key)

    var column=x[col]
    var  header=_.find(format,(data)=>data.name==column)
if(header)
    return  {...header,
    merge:{
      colspan:header.merge?header.merge.colspan:1,
      rowspan:header.merge?header.merge.rowspan:1
    }
    } 

    if(col=='no'){
    return {
    name:'no',
    value:count,
    merge:{
      colspan:1,
      rowspan:1,
    }
  }
}

  
  return {
    name:'',
    value:'Not Found',
    merge:{
      colspan:1,
      rowspan:1,
    }
    }
  })

})


  }