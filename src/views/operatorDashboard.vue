<template>
  <div>
    <h3>Operator Dashboard</h3>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="addProduct" class="insertProduct">
<v-icon>fa-search</v-icon>
</div>
</div>
<h3 style="margin-top:10px">Status</h3>
<h5 style="text-align:right">Today</h5>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;width:50%">
           <div style="text-align:center">
            5<br>
            Approved
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;width:50%">
           <div style="text-align:center">
            5<br>
            Accepted on Deviation
            </div>

</div>
</div>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;width:50%">
           <div style="text-align:center">
            5<br>
            Rejected
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;width:50%">
           <div style="text-align:center">
            5<br>
            PPAP
            </div>

</div>
</div>



  </div>
</template>
<script>
export default {
  data(){
    return {
        productInsertDialog:false,
        galleryDialog:false,
        headerFileDialog:false,
    }
  },
  methods:{
    addProduct(){
        var $vm=this;
$vm.productInsertDialog=true
    }
  }
}

</script>
<style>
@import url('../assets/interplex.scss');
.otherContainer{
    margin-top:10px;
}
.insertProduct{

border: 1px dashed red;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:beige;
}
/* .productContainer{
    background: grey;
    margin-top: 20px;
    height: 51vh;
    overflow: scroll;
} */
/* .productItems{

    padding: 5px;
    color: white;
    background: darkturquoise;
    margin: 5px;
} */


</style>