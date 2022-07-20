<template>
    <div>
<div style="display:flex;flex-direction:column">
<input class="interInput" v-model="fileType.title"  type="text" placeholder="Title(* Ref)" >
<input class="interInput" v-model="fileType.name"  type="text" placeholder="Name(*)" >
<v-btn v-if="!isStateForUpdate" style="margin-top:10px" @click="save" outlined>Save</v-btn>
<v-btn v-else style="margin-top:10px" @click="update" outlined>Update</v-btn>
</div>


    </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'

function intialState(){
    return {
isStateForUpdate:false,
            fileType:{
                title:'',
                name:'',
                branch:'',



        }
    }
}
export default {
    data(){
        return intialState()
    }
    ,
    mounted(){
        var $vm=this;
// isStateForUpdate:false,

var params=this.$route.params;
console.log(params,Object.prototype.hasOwnProperty.call(params, 'item'))
if(Object.prototype.hasOwnProperty.call(params, 'item')){
$vm.isStateForUpdate=true,
    $vm.fileType=Object.assign($vm.fileType,params.item)


}
    }
    ,methods:{

async     save(){
var $vm=this;
if($vm.fileType.title=='')
{
$vm.$alert("Title Must Be Filled",'Error','error')
return;
}
if($vm.fileType.name=='')
{
$vm.$alert("Name Must Be Filled",'Error','error')
return;
}
// core.database(this,'insertUploadTypes',this.fileType)

if(await $vm.$store.dispatch('createUploadType',$vm.fileType)){
$vm.$alert("Successfully Created")
$vm.fileType=intialState().fileType
return ;
}

$vm.$alert("Something Wrong")

        },
    update(){
        var $vm=this;
   $vm.$store.dispatch('updateUploadType',$vm.fileType)
  
   $vm.$alert("Successfully Updated")
    // $vm.fileType=intialState().fileType
    }

},
}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>