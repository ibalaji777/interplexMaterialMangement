/*eslint-disable*/
import _ from 'lodash'
var control={
    
    a:'a',
    b:'b',
    c:{
        a:1
    }
    
}    

var outsource={d:2,a:5,c:{g:'d'}}
var default_control=_.defaults(control,outsource)
  var check=_.merge(default_control, outsource);
// result=check;//JSON.stringify(Object.assign({...control},{a:5,c:{g:'d'}}));