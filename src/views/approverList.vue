<template>
    <div>
<!-- sss{{$store.state.interplex.user}} -->
<!-- eslint-disable -->
<!-- {{$store.state.interplex.qasForm1}} -->

<label-print-desktop style="width:0;height:0;overflow:hidden" v-if="$isElectron"    :invoice_data="barcodeLabel" ref="labelPrintDesktop"></label-print-desktop>
<label-print-mobile  style="width:0;height:0;overflow:hidden"   v-else  :invoice_data="barcodeLabel" ref="labelPrintMobile"></label-print-mobile>
<div style="padding:15px;    padding: 15px;
    justify-content: space-between;
    display: flex;
">

<v-icon v-if="!$isElectron" @click="$router.push({name:'qrScan'})">mdi-qrcode-scan
</v-icon>
<!-- 
<v-btn  color="#2f5489"  @click="generateLabel" style="color:white">
    Make Label
</v-btn>

</div> -->
<!-- <div style="display:flex;justify-content:space-evenly">
    <v-btn @click="labelPrint()" color="#2f5489" style="color:white;margin-right:5px">
    <span style="margin-right:5px">Label Print</span>
<!-- <v-icon color="white">
     fa-print
</v-icon> -->
<!-- </v-btn> -->


<!-- <v-btn @click="labelPdf()" color="#2f5489 " style="color:white;margin-right:5px">
    <span style="margin-right:5px">Label Pdf</span>

<v-icon color="white" >
mdi-file-pdf
</v-icon>
</v-btn>
  -->

</div>


<div v-if="filterResult.length==0" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">

<div style="display:flex;flex-direction:column;justify-content:center;align-items:center">
<img style="max-width:175px" src="empty.png" alt="">
<div><b>Result Not found</b></div>

</div>
</div>
<div v-if="filterResult.length!=0">
<div style="margin:10px 0">
    <div v-if="isApprover" style="
    padding: 10px;
    border-radius: 6px;
">

    <!-- <v-icon v-if="!$isElectron" @click="$router.push({name:'qrScan'})">mdi-qrcode-scan
</v-icon> -->


</div>
<h3 style="text-align:center">Label Action Print/pdf</h3>
<div style="display:flex;justify-content:space-evenly">
    <v-btn  color="#2f5489"  @click="generateLabel" style="color:white;width:33%;margin:5px">
    Make Label
</v-btn>


    <v-btn @click="labelPrint()" color="#2f5489" style="color:white;margin:5px;width:33%">
<v-icon >
     fa-print
</v-icon>
</v-btn>


<v-btn @click="labelPdf()" color="#2f5489 " style="color:white;margin:5px;width:33%">

<v-icon  >
mdi-file-pdf
</v-icon>
</v-btn>


</div>



<div >
<div style="margin:10px 0">
    <div v-if="isApprover" style="background: rgb(239 239 239);
    padding: 10px;
    border-radius: 6px;
    /* border: 2px solid re">

    
    <div style="display:flex;justify-content:space-evenly">


    <div style="background:grey" @click="markStaus('pending')" class="statusCard">
PE
    </div>

    <div style="background:green" @click="markStaus('approved')" class="statusCard">
AC
    </div>
    <div  style="background:#dada51;color:black"  @click="markStaus('acceptedOnDeviation')" class="statusCard">
ACD
    </div>
    <div  style="background:#d83e3e" @click="markStaus('rejected')" class="statusCard">
Rej
    </div>
    <div  style="background:blue"  @click="markStaus('ppap')" class="statusCard">
PPAP
    </div>
    </div>
    </div>
</div>
    <!-- <div style="display:flex">

<v-btn outlined color="white" style="flex:1;margin:0 5px;" @click="markStaus('pending')">
Pending
</v-btn>
<v-btn outlined color="white" style="flex:1;margin:0 5px" @click="markStaus('approved')">
approved
</v-btn>
    </div> -->
    <!-- <div style="display:flex;margin-top:3px">
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
</div> -->
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
      :items="approverListOrder"
      item-key="id"
      class="interListRow"
            item-class="interListRow"

      show-select
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
{{item.form_format||"-"}}
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
        barcodeLabel:{
            pageSetup:{
        page:_.cloneDeep(this.$store.state.barcode.pageSetup.page),
        label:_.cloneDeep(this.$store.state.barcode.pageSetup.label),
            },
            html:_.cloneDeep(this.$store.state.barcodeLabel.html),
            css:_.cloneDeep(this.$store.state.barcodeLabel.css),
            js:'',
            data_set:[{},{}]//{label props},{}.{}
        },  
             filterResult:[],
      }
    },
  
    computed: {
        approverListOrder(){
var $vm=this;
return _.orderBy($vm.$store.state.interplex.qasForm1,'id','asc')

        },
     list(){
var $vm=this;
return $vm.$store.state.interplex.qasForm1;
     }
    },
    
    async mounted(){
        var $vm=this;

      await $vm.$store.dispatch('approverList')
await $vm.$store.dispatch("labelSettingRead");
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
     watch: {
     "$store.state.date":{
async handler(){
  var $vm=this;
   await $vm.$store.dispatch("approverList");

}



     }
 },
    methods:{
       checkDate(date){
var $vm=this;
if(!moment(date, "DD-MM-YYYY",true).isValid())
{
    return moment(date).format("DD-MM-YYYY")
}
return "";

        },
            labelPrint(){
        var $vm=this;
        if($vm.selected.length==0){
$vm.$alert("Please Select Atleast Single Item to create label")
    return;
}
if($vm.$isElectron){
    $vm.$refs.labelPrintDesktop.print()
}
else{
        $vm.$refs.labelPrintMobile.print()
}
    },
    labelPdf(){
        var $vm=this;
        if($vm.selected.length==0){
$vm.$alert("Please Select Atleast Single Item to create label")

    return;
}
if($vm.$isElectron){
    $vm.$refs.labelPrintDesktop.toPdf()
}
else{
        $vm.$refs.labelPrintMobile.print()
}

    },

async        generateLabel(){
var $vm=this;
console.log("$vm.selected",$vm.selected)
var labels=[];
if($vm.selected.length==0){
 $vm.$alert("Please Select Item to create label")

    return;
}
var result=await   $vm.$store.dispatch("labelGenerate",$vm.selected);
 console.log(result)

_.map(result,(x)=>{
var object={};

_.map(x.header_format,(view)=>{
    object['head_'+view.name]=view.value
})
_.map(x.qasFormTwo,(batch_product)=>{

labels.push({
...object,

qasFormOne:x,
...batch_product.qas_form_two_values,
ir:x.ir,
rm:x.rm,
branch:x.branch,
status:x.status,
invoice_no:x.invoice_no,
rmcode:x.rmcode,
eds:x.eds,
supplier_name:x.supplier_name,
grn_no:x.grn_no,
grn_date:$vm.checkDate(x.grn_date),
invoice_qty:x.invoice_qty,
invoice_date:x.invoice_date,
received_qty:x.received_qty,
product_name:x.product_name,
form_format:x.form_format,
comment:x.comment,
duedate:$vm.checkDate(x.duedate),
date:$vm.checkDate(x.date),
remars:x.remarks,
batch_no:batch_product.batch_no,
interQr:'&'+(x.rmcode||'')+'&'+(batch_product.qas_form_two_values.batch_no||'')+'&'+parseFloat(batch_product.weight||0).toFixed(2)
})

})

})

console.log("Label",labels)
$vm.barcodeLabel.data_set=labels
// _.map(labels,(formone)=>{
// var label={}
//     _.map(formone.qasFormOne.header_format,(Property)=>{
//         label[Property.name]=Property.value
//     })

//     label['status']=formone.status||''
//     return label

// })

// $vm.barcodeLabel.data_set=_.map($vm.selected,(formone)=>{
// var label={}
//     _.map(formone.header_format,(Property)=>{
//         label[Property.name]=Property.value
//     })

//     label['status']=formone.status||''
//     return label

// })

        },
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
   await $vm.$store.dispatch("approverList");
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