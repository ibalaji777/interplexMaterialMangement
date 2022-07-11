<template>
  <div>
    <div class="xyCenter_">


<v-btn color="white" @click="setBranch(branch.name)" v-for="(branch,index) in $store.state.interplex.masterBranches" :key="'br'+index" outlined style="margin-top:20px;width:100%">{{branch.name}}</v-btn>
<!-- <v-btn outlined style="margin-top:20px;width:100%">Chennai</v-btn> -->
    </div>
  </div>
</template>
<script>
export default {
 
 methods:{

    setBranch(branch){

        this.$store.commit('setBranch',branch)
        this.$router.push({name:'login'})
    }
 }
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>