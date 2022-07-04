/*eslint-disable*/
import _ from 'lodash'


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
  return [item['PRDNO'], item['Vendor Name']];
}),(x)=>({
  total:x.length,
  products:x,
  invoiceQty:_.sumBy(x,(xy)=>parseFloat(xy.QTY)),
  ...x[0]
}));
}