/*eslint-disable*/
import _ from 'lodash'

export function qas1Map(product,observation_format,sapObject,code){

   return _.map(observation_format,(obj)=>{
   
      if(_.has(obj,'map')){
        //sap map
        console.log(obj.map.mapFrom,sapObject[obj.map.map])
        console.log(obj.map.mapFrom,product[obj.map.map])
  console.log("product",product)
  console.log("sapObject",sapObject)
        if(obj.map.mapFrom=='header')
        obj.value=sapObject[obj.map.map]||''
        if(obj.map.mapFrom=='product')
        obj.value=product[obj.map.map]||''
  
           }
      return obj
    })
  

}



export function qas2Map(products,productConfigFormat2,defaultProduct){

    console.log("---------setQasForm2---------")
    console.log(products,productConfigFormat2)
    var result=  _.map(products,(sapObject)=>{
    // console.log("sap",x.name)
   
    _.map(productConfigFormat2,(x)=>{
    // console.log("x",x)
    if(x.name!='validation'){
    sapObject[x.name]=x.value||'';
    
    if(x.map){
      // console.log(".....map starting....")
      // console.log(x.map.mapFrom,sapObject[x.map.map],x.map.map)
      // console.log(x.map.mapFrom,defaultProduct[x.map.map],x.map.map)
    
      if(x.map.mapFrom=='header')
    sapObject[x.name]=sapObject[x.map.map]||""
    if(x.map.mapFrom=='product')
    sapObject[x.name]=defaultProduct[x.map.map]||""
    }
    
    
    }
    else{
    if(x.exp){
    sapObject['validation']=false;
    }
    
    }
    
    })
    
    console.log("qasform2",sapObject)
    return sapObject
    })
    
    return result
    
    
}
