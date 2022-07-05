<template>
<div>
<!-- <div @click="$router.push({name:'adminBranchesList'})" class="insertProduct">
<v-icon>fa-search</v-icon>
</div> -->


    <div class="xyCenter_">
<div style="display:flex;flex-direction:column">
<input class="interInput" v-model="branch.name"  type="text" placeholder="Name(*)" >
<input class="interInput" v-model="branch.description"  type="text" placeholder="Description" >
<v-btn v-if="!isStateForUpdate" style="margin-top:10px" @click="save" outlined>Create Branch</v-btn>
<v-btn v-else style="margin-top:10px" @click="update" outlined>Update Branch</v-btn>
</div>

</div>

    </div>
</template>
<script>
import * as core from '../lib/core.js'
function intialState(){
    return {

isStateForUpdate:false,
       branch:{
                name:'',
                description:'',



        },
    }
}
export default {
    data(){
        return intialState();
    },
    mounted(){
        var $vm=this;
// isStateForUpdate:false,

var params=this.$route.params;
console.log(params,Object.prototype.hasOwnProperty.call(params, 'item'))
if(Object.prototype.hasOwnProperty.call(params, 'item')){
$vm.isStateForUpdate=true,
    $vm.branch=Object.assign($vm.branch,params.item)


}
    }
    ,methods:{

        save(){
var $vm=this;
if($vm.branch.name=='')
{
$vm.$alert("Branch Must Be Filled",'Error','error')
return;
}
core.database(this,'insertMasterBranches',this.branch)
    $vm.$alert("Successfully Created")
$vm.branch=intialState().branch

        },
    update(){
        var $vm=this;
        core.database(this,'updateMasterBranches',this.branch)
    $vm.$alert("Successfully Updated")
    }

},

}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>