<template>
    <div>
<!-- sss{{$store.state.interplex.user}} -->
<!-- eslint-disable -->
<!-- {{$store.state.interplex.qasForm1}} -->
<div style="padding:15px;">

<v-icon v-if="!$isElectron" @click="$router.push({name:'qrScan'})">mdi-qrcode
</v-icon>
</div>

<div v-if="filterResult.length==0" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">

<div style="display:flex;flex-direction:column;justify-content:center;align-items:center">
<img style="max-width:175px" src="empty.png" alt="">
<div><b>Result Not found</b></div>

</div>
</div>
<div v-if="filterResult.length!=0">
<div style="margin:10px 0">
    <div v-if="isApprover" style="background: #323a3a;
    padding: 10px;
    border-radius: 6px;
    border: 2px solid red;">

    
    <div style="display:flex">

<v-btn outlined color="white" style="flex:1;margin:0 5px;" @click="markStaus('pending')">
Pending
</v-btn>
<v-btn outlined color="white" style="flex:1;margin:0 5px" @click="markStaus('approved')">
approved
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined color="white" style="flex:1;margin:0 5px" @click="markStaus('acceptedOnDeviation')">
accepted On Deviation
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined color="white" style="flex:1;margin:0 5px" @click="markStaus('rejected')">
rejected
</v-btn>
<v-btn outlined color="white" style="flex:1;margin:0 5px" @click="markStaus('ppap')">
ppap
</v-btn>
</div>
    </div>
       
</div>
<h5 style="text-align:right"><date ></date></h5>
     <v-text-field
        style="margin-top:15px"
        dense
        outlined
          v-model="search"
          label="Search"
           ></v-text-field>

         <v-data-table
         dense
      v-model="selected"
      :headers="$store.state.report.qasForm1"
      :items="$store.state.interplex.qasForm1"
      item-key="id"
      class="interListRow"
      show-select
      item-class="interListRow"
      :search="search"
      @click:row="selectedQasReport"
        mobile-breakpoint="0"
 
    >

     <template v-slot:item.invoice_date="{ item }">
{{item.invoice_date|formatDate}}
     </template>

     <template v-slot:item.grn_date="{ item }">
{{item.grn_date|formatDate}}
     </template>

     <template v-slot:item.supplier_name="{ item }">
{{item.supplier_name||"-"}}
     </template>
     <template v-slot:item.grn_no="{ item }">
{{item.grn_no||"-"}}
     </template>     <template v-slot:item.rm="{ item }">
{{item.rm||"-"}}
     </template>
          <template v-slot:item.rmcode="{ item }">
{{item.rmcode||"-"}}
     </template>
          <template v-slot:item.eds="{ item }">
{{item.eds||"-"}}
     </template>
     <template v-slot:item.form_format="{ item }">
{{item.form_formate||"-"}}
     </template>
     <template v-slot:item.remarks="{ item }">
{{item.remarks||"-"}}
     </template>
<template v-slot:item.product_name="{ item }">
{{item.product_name||"-"}}
     </template>
     
     <template v-slot:item.usertype="{ item }">
{{item.usertype||"-"}}
     </template>
     <template v-slot:item.operator_name="{ item }">
{{item.operator_name||"-"}}
     </template>
     
     <template v-slot:item.approver_name="{ item }">
{{item.approver_name||"-"}}
     </template>
     


<template v-slot:item.invoice_no="{ item }">
{{item.invoice_no||"-"}}
     </template>

     <template v-slot:item.ir="{ item }">
{{item.ir||'-'}}
     </template>

     <template v-slot:item.action="{ item }">
 
 <div style="display:flex;">
 <v-icon
 small
         @click="preview(item)"
         style="margin-right:10px"
 >
    fa-eye
 </v-icon>
 
      <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
   </div> 
    </template>
    </v-data-table>

    
</div>

    </div>
</template>
<script>
/*eslint-disable*/
import moment from 'moment'
import Vue from 'vue';
import * as core from '../lib/core.js'
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD")
  }
})

export default {
    data(){
        return {
            selected:[],
            search: '',
isApprover:false,      
             filterResult:[],
      }
    },
  
    computed: {
     list(){
var $vm=this;
return $vm.$store.state.interplex.qasForm1;
     }
    },
    
    async mounted(){
        var $vm=this;

      await $vm.$store.dispatch('approverList')

      $vm.filterResult=$vm.list||[];





var params=this.$route.params;


if($vm.$store.state.interplex.user.roletype!='operator'){
$vm.isApprover=true;

}


if(Object.prototype.hasOwnProperty.call(params, 'status')){


//check user=>id and date and status
//approver,admin =>date and status
$vm.filterResult=_.filter($vm.list,(qasform1)=>qasform1.status==params.status)
}



    },
    methods:{
              async  preview(item){
            var $vm=this;
var result=await $vm.$store.dispatch('getQasFormOneSingle',item.invoice_table_id)
console.log("result qasformsingle")
console.log(result)
$vm.$router.push({name:'qasFormView',params:{item,invoice:result.invoice}})

// var result=await $vm.$store.dispatch('getQasOne',item.ir)
// console.log("result qasformsingle")
// console.log(result)
// $vm.$router.push({name:'qasFormView',params:{invoice:result.invoice}})


},


        selectedQasReport(value){
            var $vm=this;
            console.log("selected",value)


        },
      async   markStaus(markStatus){
var $vm=this;
if($vm.selected.length==0){

    $vm.$alert("Please Select Atleast Single Item")
}

await _.map($vm.selected,async (qasFormOne)=>{


await $vm.$store.dispatch('qasFormUpdateStatus',{
        id:qasFormOne.id,
        approved_by:$vm.$store.state.interplex.user.id,
        status:markStatus
    }
)

      await $vm.$store.dispatch('approverList')
      $vm.filterResult=$vm.list||[];

$vm.$alert("Status Marked")
$vm.selected=[]
})

console.log("++++selected++++",$vm.selected)

        },
async        editItem(item){
var $vm=this;
console.log(item)
await $vm.$store.dispatch('getQasFormOneSingle',item.invoice_table_id);
// $vm.$router.push({name:'createBranch',params: { item:item }})
        },
        deleteItem(item){
var $vm=this;

$vm.$confirm("Do You Want To Delete?")
.then(async ()=>{
await $vm.$store.dispatch('deleteQasFormOne',item)
      await $vm.$store.dispatch('approverList')

      $vm.filterResult=$vm.$store.state.interplex.qasForm1;

})
// return core.database(this,'deleteQasFormOne',{
//     index:this.list.indexOf(item),
//     item
// })
        }
    }
}
</script>
<style lang="scss">
    
    // .interListRow tr{
    //     background: red !important;
    // }
</style>