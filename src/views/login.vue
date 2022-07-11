<template>
  <div>
    <div class="xyCenter_">

<input v-model="user.username" class="interInput" type="text" placeholder="USERNAME" style="margin-top:10px;">

<input v-model="user.password" class="interInput" type="password" placeholder="PASSWORD" style="margin-top:10px;">

<v-btn @click="login" color="white" outlined style="margin-top:20px;width:100%">submit</v-btn>
    </div>
  </div>
</template>
<script>
import * as core from '../lib/core.js'
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

login(){

var $vm=this;

if($vm.username==''){

$vm.$alert("Please Fill Username")
return;
}
if($vm.password==''){

$vm.$alert("Please Fill Password")
return;
}
core.database($vm,'login',$vm.user)


}


  }
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>