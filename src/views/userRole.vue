<template>
  <div>
            <div>
        <v-icon style="color:white" @click="$router.go(-1)">fa-arrow-left</v-icon>
    </div>

    <div class="xyCenter_">

<!-- <img src="/search.gif" alt=""> -->

<!-- <h3 style="color:white;text-align:center">
    Better Quality Makes Better Product
</h3> -->

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
        $vm.$store.commit("setRoleType",role)
        $vm.$router.push({name:'login'})
    }
}
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>