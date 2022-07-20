<template>
  <div>

        <div>
        <v-icon style="color:white" @click="$router.go(-1)">fa-arrow-left</v-icon>
    </div>
    <div class="xyCenter_">

<input v-model="user.username" class="interInput" type="text" placeholder="USERNAME" style="margin-top:10px;">

<input v-model="user.password" class="interInput" type="password" placeholder="PASSWORD" style="margin-top:10px;">

<v-btn @click="login" color="white" outlined style="margin-top:20px;width:100%">submit</v-btn>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'
import axios from 'axios'


export default {
  
  data(){
    return{

        user:{
            username:'',
            password:''
        }
    }
  },

  methods:{

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


  }
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>