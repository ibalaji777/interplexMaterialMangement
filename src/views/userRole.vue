<template>
  <div>
    <div class="xyCenter_">
        <!-- <h3 style="text-align:center;color:black">Please Select Your Role</h3> -->
<v-btn color="white" @click="userRole('operator')" outlined style="margin-top:20px;width:100%">OPERATOR</v-btn>
<v-btn color="white" @click="userRole('approver')" outlined style="margin-top:20px;width:100%">APPROVER </v-btn>
<v-btn color="white" @click="userRole('admin')" outlined style="margin-top:20px;width:100%">ADMIN</v-btn>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {

methods:{

    userRole(role){
        var $vm=this;
        $vm.$router.push({name:'login',params:{roletype:role}})
    }
}
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>