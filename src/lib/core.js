/*eslint-disable*/
import _ from 'lodash'
import moment from 'moment'

export function database($vm,action,payload={}){

  var prepareData={
    action,
    data:payload
  }
console.log(prepareData)
// *********************insert****************************
if(action=='insertMasterProduct')
{
$vm.$store.commit('database',prepareData)
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



// *********************Get****************************

if(action=='getMasterProductConfig')
{

  return _.cloneDeep($vm.$store.state.interplex.configProductsFormat);


}
if(action=='getMasterHeaderConfig')
{
  return _.cloneDeep($vm.$store.state.interplex.configHeaderFormat);

 
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
    approved:_.filter($vm.$store.state.interplex.users,(x)=>x.approver_status=='approved').length,
    acceptedOnDeviation:_.filter($vm.$store.state.interplex.users,(x)=>x.approver_status=='acceptedOnDeviation').length,
    rejected:_.filter($vm.$store.state.interplex.users,(x)=>x.approver_status=='rejected').length,
    ppap:_.filter($vm.$store.state.interplex.users,(x)=>x.approver_status=='ppap').length,
    }

}
if(action=='getBranchesList')
{
console.log($vm.$store.state.interplex.masterBranches)
  return $vm.$store.state.interplex.masterBranches;

}
if(action=='getMaseterProductList')
{
console.log($vm.$store.state.interplex.masterProducts)
  return $vm.$store.state.interplex.masterProducts;

}
if(action=='getUsersList')
{
console.log($vm.$store.state.interplex.masterUsers)
  return $vm.$store.state.interplex.masterUsers;

}

if(action=='getFileTypeList')
{
  return $vm.$store.state.interplex.masterUploadTypes;

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

export function headerConfigFormat($vm,object){

var header=_.cloneDeep(database($vm,'getMasterHeaderConfig'))
_.map(header,(x)=>{

  if(x.mapFrom=='header')
  {
  x['value']=(object[x.map]||'')
  }
  if(x.mapFrom=='product')
  {
    x['value']=(object[x.map]||'')
   
  }
  if(x.map=='')
  {
    x['value']=(object['value']||'')
  
  }

})

return header;
}

export function productConfigFormat($vm,object){

  var productConfigFormat=_.cloneDeep(database($vm,'getMasterProductConfig'))
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
x['headerConfigFormat']=headerConfigFormat($vm,x)
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
  gallery:[]
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
  return [item['PRDNO'], item['Vendor Name'],item['LAST_GR_DATE'],item['invoice no']||''];
}),(x)=>({
  total:x.length,
  products:x,
  invoiceQty:_.sumBy(x,(xy)=>parseFloat(xy.QTY)),
  ...x[0]
}));
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
  