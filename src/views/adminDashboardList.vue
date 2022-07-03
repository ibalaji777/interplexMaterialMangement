<template>
       <div style="padding:10px">
<div>
  <div @click="$router.push({name:'adminUsersList'})" class="interList" >Find Users</div>
  <div @click="$router.push({name:'adminProductsFormateList'})" class="interList">Find Product&Quality Assurance </div>
  <div @click="$router.push({name:'adminBranchesList'})" class="interList">Find Branches </div>
  <div @click="$router.push({name:'adminFileTypeList'})" class="interList">Find Upload Types </div>
  <div @click="$router.push({name:'adminHeaderFormatList'})" class="interList">Find Header & Config</div>
</div>
       </div>
</template>
<script>
export default {
  
}
</script>
<style>
</style>