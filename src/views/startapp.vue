<template>
  <div>

        <div>
        <!-- <v-icon style="color:white" @click="$router.go(-1)">fa-arrow-left</v-icon> -->
    </div>
    <div class="xyCenter_">

<div style="text-align:center;color:white;font-size:25px;">Create First Admin User </div>

<v-btn style="width:100%;margin-top:60px" @click="createUserDialog=true">Create</v-btn>

 <v-dialog
      v-model="createUserDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="createUserDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

   <div style="display:flex;flex-direction:column">
<label>Name(*)</label>
<input class="interInput" v-model="user.name"  type="text" placeholder="Name(*)" >

<label>Branch</label>
<input v-if="branches.length==0" class="interInput" v-model="user.branch"  type="text" placeholder="Branch(*)" >

<select v-else v-model="user.branch" class="interInput" >
<option  v-for="(item,index) in branches" :key="''+index" :value="item.name">{{item.name}}</option>

</select>

<!-- <input class="interInput" v-model="user.roleType" type="text" placeholder="Role" > -->
<!-- <label>Role Type</label>
<select v-model="user.roletype" class="interInput" >
<option  v-for="(item,index) in userRoles" :key="''+index" :value="item.value">{{item.name}}</option>

</select> -->
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
<v-btn style="margin-top:10px" @click="save" outlined>Save</v-btn>

</div>
</div>


</div>
      </v-card>
    </v-dialog>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'
import axios from 'axios'
import * as config from '../lib/config.js'

export default {
  
  data(){
    return{
        api:'',
        createUserDialog:false,

  user:{
                name:'',
                branch:'Chennai',
                roletype:'admin',
                username:'',
                password:'',
                email:'',
                phone:'',
                 address:'',
                 status:'accepted'



        },
    }
  },

  methods:{
    setApi(){
var $vm=this;

config.setApi($vm.api)
$vm.$alert("Saved")

    },
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
// $vm.user=intialState().user
$vm.login()
return ;
}
   $vm.$alert("Something Went Wrong")

// core.database(this,'insertMasterUsers',this.user)


},
async login(){

var $vm=this;

if($vm.user.username==''){

$vm.$alert("Please Fill Username")
return;
}
if($vm.user.password==''){

$vm.$alert("Please Fill Password")
return;
}

await $vm.$store.dispatch('login',$vm.user)
var user =$vm.$store.state.interplex.user;
console.log(user)
if(user.username==''&&user.password==''){
$vm.$alert("User Not Found")
return 
}

axios.defaults.headers.common['branch']=$vm.$store.state.interplex.currentBranch;
axios.defaults.headers.common['username']=$vm.$store.state.interplex.user.username;
axios.defaults.headers.common['password']=$vm.$store.state.interplex.user.password;
axios.defaults.headers.common['roletype']=$vm.$store.state.interplex.user.roletype;

if(user.roletype=='operator'){
                  $vm.$router.push({name:'operatorDashboard'})
                  return ;
                }
            
                if(user.roletype=='approver'){
                  $vm.$router.push({name:'verifierDashboard'})
                  return ;
                }
            
                if(user.roletype=='admin'){
                  $vm.$router.push({name:'adminDashboard'})
                  return ;
                }
            

}


  },
  computed:{

    branches(){
        var $vm=this;
return        $vm.$store.state.interplex.masterBranches
    }


  }
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>