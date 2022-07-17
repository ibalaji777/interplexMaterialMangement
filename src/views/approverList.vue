<template>
    <div>
<!-- sss{{$store.state.interplex.user}} -->
<!-- eslint-disable -->
<div style="margin:10px 0">
    <div v-if="isApprover">
    <div style="display:flex">

<v-btn outlined color="#ccb806" style="flex:1;margin:0 5px;" @click="markStaus('pending')">
Pending
</v-btn>
<v-btn outlined color="green" style="flex:1;margin:0 5px" @click="markStaus('approved')">
approved
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined color="green" style="flex:1;margin:0 5px" @click="markStaus('acceptedOnDeviation')">
accepted On Deviation
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined color="red" style="flex:1;margin:0 5px" @click="markStaus('rejected')">
rejected
</v-btn>
<v-btn outlined color="orange" style="flex:1;margin:0 5px" @click="markStaus('ppap')">
ppap
</v-btn>
</div>
    </div>
        <v-text-field
        style="margin-top:15px"
        dense
        outlined
          v-model="search"
          label="Search"
           ></v-text-field>
</div>
<div >
         <v-data-table
         dense
      v-model="selected"
      :headers="$store.state.report.qasForm1"
      :items="filterResult"
      item-key="id"
      class="elevation-1"
      show-select
      :search="search"
      @click:row="selectedQasReport"
        mobile-breakpoint="0"
 
    >
     <template v-slot:item.action="{ item }">
 
 <div style="display:flex;">
 <v-icon
 small
         @click="preview(item)"
         style="margin-right:10px"
 >
    fa-eye
 </v-icon>
 
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
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
import * as core from '../lib/core.js'
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

return core.database(this,'getApproverList',)
     }
    },
    
    async mounted(){
        var $vm=this;

      await $vm.$store.dispatch('getQasFormOne')

      $vm.filterResult=$vm.list;





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

$vm.$router.push({name:'qasFormView',params:{item,invoice:result.invoice}})

        },


        selectedQasReport(value){
            var $vm=this;
            console.log("selected",value)


        },
        markStaus(markStatus){
var $vm=this;
if($vm.selected.length==0){

    $vm.$alert("Please Select Atleast Single Item")
}

console.log("++++selected++++",$vm.selected)

        },
async        editItem(item){
var $vm=this;
console.log(item)
await $vm.$store.dispatch('getQasFormOneSingle',item.invoice_table_id);
// $vm.$router.push({name:'adminCreateBranch',params: { item:item }})
        },
        deleteItem(item){

return core.database(this,'deleteMasterBranch',{
    index:this.list.indexOf(item),
    item
})
        }
    }
}
</script>
<style lang="scss">
    
</style>