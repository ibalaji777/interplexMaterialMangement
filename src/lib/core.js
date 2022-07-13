/*eslint-disable*/
import _ from 'lodash'
import moment from 'moment'
export var defaultFields={

  partNo:'OLMAT',
  supplierName:'Vendor Name',
  invoiceDate:'LAST_GR_DATE',
  invoiceDateEXT:'LAST_GR_DATE_EXT',
  invoiceNo:'Invoice No'
  
}


export const dbFormate={


  qasForm1:{
    // id 
    operator_id:'',
    supplier_name:'',
    invoice_no:'',
    invoice_date:'',
    invoice_qty:'',
    ir:'',
    // date
    grn_no:'',
    grn_date:'',
    rmcode:'',//(part_no)
    eds:'',
    rm:'',
    received_qty:'',
    product_name:'',
    form_format:'',
    comment:'',
    duedate:'',
    observation_print_view:[],
    observation_format:[],//(json)
    header_format:[],//(json)
    remarks:'',
    status:'pending', //(pending ,approved or acceptedOnDeviation or ppap)
    approved_by:'',
    roletype:'',
    skiplevel_status:false
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



export function productQasForm2ConfigSArray($vm,sapProductArray=[]){

  return _.map(sapProductArray,(sapProduct)=>{

    // console.log('sapProduct',sapProduct)
    // console.log("====",productQasForm2ConfigSingle($vm,sapProduct))
    return productQasForm2ConfigSingle($vm,sapProduct)
  })
}


export function validateProductDataset($vm)
{
var object={}
 _.map($vm.$store.state.interplex.selectedPartyNoItem.productConfigFormat,(product)=>{

object[product.name]=onlyNumbers(product.value)?parseFloat(product.value):0;

 })

 return object

}

export function productQasForm2ConfigSingle($vm,sapObject={}){
//sapObject sap
//productObject db

 var productFormat=$vm.$store.state.interplex.configQasForm2Format;
 var productObject=database($vm,'getProductConfigValue',sapObject)
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
  object[format.name]=format.value;
  if(format.mapFrom=='product'&&format.map!=''){
    object[format.name]=productObject[format.map]||''//key:name
        }
         if(format.mapFrom=='header'&&format.map!=''){
      object[format.name]=sapObject[format.map]//key:name
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
  

export function createProductList($vm,array){

  //create header
 // create product form 
return _.map(array,(x)=>{
  // console.log('x',x)
x['headerConfigFormat']=headerConfigFormat($vm,x)
x['productConfigFormat']=productConfigFormat($vm,x)
x['qasForm2']=productQasForm2ConfigSArray($vm,x.products)
return x
})

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
  return [item[defaultFields.partNo], item[defaultFields.supplierName],item[defaultFields.invoiceDate],item[defaultFields.invoiceNo]||''];
}),(x)=>({
  total:x.length,
  products:x,
  invoiceQty:_.sumBy(x,(xy)=>parseFloat(xy.QTY)),
  ...x[0]
}));
}


export function skiplevel($vm,array){
console.log("sk array",array)
  var groupSkipLevel=_.map(groupBy(array, function (item) {
    return [item[defaultFields.partNo]];
  }),(x)=>{

    return {
      partNo:x[0][defaultFields.partNo],
      skipLevelProducts:x
      };
  });

  
//sort by date
var groupSkipLevelsort=_.map(groupSkipLevel,(skiplevel)=>{
  //part no
  var partNo={}
  partNo[defaultFields.partNo]=skiplevel.partNo;
  skiplevel['skipLevelCount']=0
var originalProduct=database($vm,'getProductConfigValue',partNo);
if(originalProduct.length!=0){
  skiplevel['skipLevelCount']=parseFloat(originalProduct[0].skiplevel||0);
 
} 
 
  skiplevel['skipLevelProducts']=_.orderBy(skiplevel.skipLevelProducts, [(obj) => new Date(obj[defaultFields.LAST_GR_DATE_EXT])], ['asc'])
return skiplevel
})
//part no check
var markSkipLevelsort=_.map(groupSkipLevelsort,(markSkipLevel)=>{
var skipLevel=markSkipLevel['skiplevelCount'];  
var skiplevelEnd=skipLevel-1;
 (markSkipLevel.skipLevelProducts).forEach((value,index)=>{
  value['skiplevel_status']=true;
  if(index==0||skiplevelEnd==index){
value['skiplevel_status']=false;
  }
      if(skipLevel==0){
                  value['skiplevel_status']=false;
      }
return value
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
  
      return {
          from_date,
          to_date
      }
  }
  