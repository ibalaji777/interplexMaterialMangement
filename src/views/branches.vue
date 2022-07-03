<template>
  <div>
    <div class="xyCenter_">


<v-btn @click="setBranch(branch.name)" v-for="(branch,index) in $store.state.branches" :key="'br'+index" outlined style="margin-top:20px;width:100%">{{branch.name}}</v-btn>
<!-- <v-btn outlined style="margin-top:20px;width:100%">Chennai</v-btn> -->
    </div>
  </div>
</template>
<script>
export default {
 
 methods:{

    setBranch(branch){

        this.$store.commit('setBranch',branch)
    }
 }
}
</script>
<style>
@import url('../assets/interplex.scss');
</style>