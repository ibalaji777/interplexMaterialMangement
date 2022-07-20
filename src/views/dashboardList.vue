<template>
       <div style="padding:10px">
<div>
  <div @click="$router.push({name:'userList'})" class="interList" >
    <v-icon>fa-search</v-icon>
    Find Users</div>
  <div @click="$router.push({name:'adminProductsFormatList'})" class="interList">
        <v-icon>fa-search</v-icon>
    Find Product&Quality Assurance </div>
  <div @click="$router.push({name:'adminBranchesList'})" class="interList">
        <v-icon>fa-search</v-icon>
    Find Branches </div>
  <div @click="$router.push({name:'adminFileTypeList'})" class="interList">
        <v-icon>fa-search</v-icon>
    Find Upload Types </div>

      <div @click="$router.push({name:'approverList'})" class="interList">
        <v-icon>fa-search</v-icon>
    Submited Forms </div>

  <!-- <div @click="$router.push({name:'adminHeaderFormatList'})" class="interList">Find Header & Config</div> -->
</div>
       </div>
</template>
<script>
export default {
  
}
</script>
<style>
</style>