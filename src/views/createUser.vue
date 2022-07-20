<template>
    <div>
        <div style="display:flex;flex-direction:column">
<label>Name(*)</label>
<input class="interInput" v-model="user.name"  type="text" placeholder="Name(*)" >

<label>Branch</label>
<input v-if="branches.length==0" class="interInput" v-model="user.branch"  type="text" placeholder="Branch(*)" >

<select v-else v-model="user.branch" class="interInput" >
<option  v-for="(item,index) in branches" :key="''+index" :value="item.name">{{item.name}}</option>

</select>

<!-- <input class="interInput" v-model="user.roleType" type="text" placeholder="Role" > -->
<label>Role Type</label>
<select v-model="user.roletype" class="interInput" >
<option  v-for="(item,index) in userRoles" :key="''+index" :value="item.value">{{item.name}}</option>

</select>
<label>Username</label>
<input class="interInput" v-model="user.username" type="text" placeholder="Username(*)" >
<label>Password</label>
<input class="interInput" v-model="user.password" type="text" placeholder="Password(*)" >
<label>Email</label>
<input class="interInput" v-model="user.email" type="text" placeholder="Email" >
<label>Phone</label>
<input class="interInput" v-model="user.phone" type="text" placeholder="Phone" >
<label>Address</label>
<input class="interInput" v-model="user.address" type="text" placeholder="address" >
<div style="display:flex;justify-content:flex-end;margin-top:10px">
<v-btn v-if="!isStateForUpdate" style="margin-top:10px" @click="save" outlined>Save</v-btn>
<v-btn v-else style="margin-top:10px" @click="update" outlined>Update</v-btn>

</div>
</div>


    </div>
</template>
<script>
// import  * as core from '../lib/core.js'
import _ from 'lodash'
function intialState(){
    return {
                userRoles:[
            {
            name:'Operator',
            value:'operator'
        },
           {
            name:'Approver ',
            value:'approver'
        },
                   {
            name:'Admin',
            value:'admin'
        }
        ],
        isStateForUpdate:false,

            user:{
                name:'',
                branch:'',
                roletype:'operator',
                username:'',
                password:'',
                email:'',
                phone:'',
                 address:'',
                 status:'accepted'



        },
    }
}
export default {
    data(){
        return intialState()
    },
        mounted(){
        var $vm=this;
// isStateForUpdate:false,
console.log($vm.$store.state.interplex.user.roletype)
if($vm.$store.state.interplex.user.roletype!='admin'){

          $vm.userRoles=[
            {
            name:'Operator',
            value:'operator'
        },
           {
            name:'Approver ',
            value:'approver'
        }
        ]
}

$vm.user.branch=_.cloneDeep($vm.$store.state.interplex.currentBranch)
var params=this.$route.params;
if(Object.prototype.hasOwnProperty.call(params, 'item')){
$vm.isStateForUpdate=true,
    $vm.user=Object.assign($vm.user,params.item)


}
    },
    methods:{
async save(){
    var $vm=this;
if($vm.user.name=='')
{
$vm.$alert("Name Must Be Filled",'Error','error')
return;
}
if($vm.user.username=='')
{
$vm.$alert("Username Must Be Filled",'Error','error')
return;
}if($vm.user.password=='')
{
$vm.$alert("Password Must Be Filled",'Error','error')
return;
}if($vm.user.branch=='')
{
$vm.$alert("Branch Must Be Filled",'Error','error')
return;
}


var isUserCreated=await $vm.$store.dispatch('createUser',this.user)

if(isUserCreated)
{
   $vm.$alert("Successfully Created")
$vm.user=intialState().user
return ;
}
   $vm.$alert("Something Went Wrong")

// core.database(this,'insertMasterUsers',this.user)


}
,
 update(){
        var $vm=this;
        // core.database(this,'updateMasterUser',this.user)

$vm.$store.dispatch('updateUser',$vm.user)

$vm.$alert("Successfully Updated")
    }
    },
    computed:{
         branches(){
var $vm=this;
return $vm.$store.state.interplex.masterBranches
     },
    },
}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>