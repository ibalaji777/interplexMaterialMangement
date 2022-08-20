<template>
  <div>
    <!-- eslint-disable -->
    <h3>Operator Dashboard</h3>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'operatorInsert'})" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="$router.push({name:'approverList'})" class="insertProduct">
<v-icon>fa-search</v-icon>
</div>
</div>
 <br>
      Branch:&nbsp; {{$store.state.interplex.user.branch}}- Role&nbsp; {{$store.state.interplex.user.roletype}}

<br>
<h3 style="margin-top:10px">Status</h3>
<h5 style="text-align:right"><date @date="selected_date"></date></h5>
<div>
    <div style="display:flex;margin-top:10px">
        <div  @click="$router.push({name:'approverList',params: { status:'pending' }})" class="pendingCard" style="margin-right: 10px;">
           <div style="text-align:center">
            {{approverStatus.pending}}<br>
            Pending
            </div>

</div>
    </div>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'approverList',params: { status:'approved' }})" class="approved" style="margin-right:10px;">
           <div style="text-align:center">
            {{approverStatus.approved}}<br>

            Approved
            </div> 

</div>
   <div @click="$router.push({name:'approverList',params: { status:'acceptedOnDeviation' }})" class="acceptedOnDeviation" style="margin-right:10px;">
           <div style="text-align:center">
            {{approverStatus.acceptedOnDeviation}}<br>

            Accepted on Deviation
            </div>

</div>
</div>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'approverList',params: { status:'rejected' }})" class="acceptedOnDeviation" style="margin-right:10px;">
           <div style="text-align:center">
            {{approverStatus.rejected}}<br>
            Rejected
            </div>

</div>
   <div @click="$router.push({name:'approverList',params: { status:'ppap' }})" class="approved" style="margin-right:10px;">
           <div style="text-align:center">
            {{approverStatus.ppap}}<br>
            PPAP
            </div>

</div>
</div>
</div>

  </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'
import moment from 'moment'
export default {
  data(){
    return {

      productInsertDialog:false,
        galleryDialog:false,
        headerFileDialog:false,
        from_date:moment().format("YYYY-MM-DD"),
        to_date:moment().format("YYYY-MM-DD")
    }
  },
  computed:{
    approverStatus(){
var $vm=this;
return core.database(this,'getQasFormOne')
},

  },
  async mounted(){
var $vm=this;
        console.log("+++getFiscalYearTimestamps+++")
        console.log(core.getFiscalYearTimestamps())
   await $vm.$store.dispatch("approverList");
   await $vm.$store.dispatch("getProducts");
   await $vm.$store.dispatch('getPrintConfig')

// await $vm.$store.dispatch('readOperatorForm',{
//     id:$vm.$store.state.interplex.user.id,
//     from_date:$vm.$store.state.date.from_date,
//     to_date:$vm.$store.state.date.to_date
// })

  },
  methods:{
    selected_date(date){
console.log(date)
this.from_date=date.from_date
this.to_date=date.to_date
    },
    addProduct(){
        var $vm=this;
$vm.productInsertDialog=true
    }
  },
  
  watch:{
       "$store.state.date":{
handler(){
        var $vm=this;
        console.log("watch date changes....")
$vm.$store.dispatch('readOperatorForm',{
    id:$vm.$store.state.interplex.user.id,
    from_date:$vm.$store.state.date.from_date,
    to_date:$vm.$store.state.date.to_date
})

},
deep:true

    },
// to_date:{
// handler(){
//     var $vm=this;
//             console.log("watch date changes....")

// $vm.$store.dispatch('readOperatorForm',{
//     id:1,
//     from_date:$vm.from_date,
//     to_date:$vm.to_date
// })

// },
// deep:true

//     },

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