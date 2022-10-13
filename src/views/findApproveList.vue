<template>
    <div>
<!-- sss{{$store.state.interplex.user}} -->
<!-- eslint-disable -->
<!-- {{$store.state.interplex.qasForm1}} -->
<!-- {{foundList}} -->
<!-- <pre>{{$store.state.interplex.configHeaderFormat}}</pre> -->
<label-print-desktop style="width:0;height:0;overflow:hidden" v-if="$isElectron"    :invoice_data="barcodeLabel" ref="labelPrintDesktop"></label-print-desktop>
<label-print-mobile style="width:0;height:0;overflow:hidden"  v-else  :invoice_data="barcodeLabel" ref="labelPrintMobile"></label-print-mobile>
<div style="padding:15px;    padding: 15px;
    justify-content: space-between;
    display: flex;
">

<v-icon v-if="!$isElectron" @click="$router.push({name:'qrScan'})">mdi-qrcode-scan
</v-icon>


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
PP
    </div>

<!-- <v-btn outlined  style="flex:1;margin:0 5px;" @click="markStaus('pending')">
Pending
</v-btn>
<v-btn outlined  style="flex:1;margin:0 5px" @click="markStaus('approved')">
approved
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined  style="flex:1;margin:0 5px" @click="markStaus('acceptedOnDeviation')">
accepted On Deviation
</v-btn>
    </div>
    <div style="display:flex;margin-top:3px">
<v-btn outlined  style="flex:1;margin:0 5px" @click="markStaus('rejected')">
rejected
</v-btn>
<v-btn outlined  style="flex:1;margin:0 5px" @click="markStaus('ppap')">
ppap
</v-btn> -->
</div>
    </div>
       
</div>
<div style="display:flex;margin-top:15px">

<div style="text-align:center">
    <!-- <v-btn @click="isDateRangeSelected=!isDateRangeSelected" color="primary"><v-icon>mdi-calendar</v-icon></v-btn> -->
    <v-btn color="blue" @click="selectChooser">
    <v-icon color="white">mdi-filter</v-icon>
    </v-btn>
    <br>
    {{selectedChooser}}

</div>
<div style="display:flex;align-items:baseline" v-if="selectedChooser=='date'">

<v-select
v-model="findByKeyDate"
:items="datesColumns"
 item-text="title"
 item-value="value"
 label="Find By"
 style="margin:5px;"
 outlined
 dense
>
</v-select>

    <date-filter @date="setDate"></date-filter>

<v-btn color="primary" style="color:white" @click="findDateArray">
            Submit
           </v-btn>

</div>
<div v-if="selectedChooser=='default'" style="width:100%;display:flex">

<div style="display:flex;align-items:baseline;width:100%">
<v-select
v-model="findByKey"
:items="filters()"
 item-text="label"
 item-value="name"
 label="Find By"
 style="margin:5px;"
                     outlined
                     dense
>

</v-select>
     <v-text-field
        style="margin:5px"
        dense
        outlined
          v-model="searchValue"
          label="Search"
           ></v-text-field>
           <v-btn color="primary" style="color:white" @click="findArray">
            Submit
           </v-btn>
           </div>
</div>

<div style="display:flex;align-items:baseline;width:100%" v-if="selectedChooser=='header'">

<!-- <v-select
v-model="headerKey"
:items="$store.state.interplex.configHeaderFormat"
 item-text="label"
 item-value="name"
 label="Find By"
 style="margin:5px;"
 outlined
 dense
>
</v-select> -->

     <v-text-field
        style="margin:5px"
        dense
        outlined
          v-model="headerSearch"
          label="Search"
           ></v-text-field>


<v-btn color="primary" style="color:white" @click="findHeaderArray">
            Submit
           </v-btn>

</div>
</div>

         <v-data-table
         dense
      v-model="selected"
      :headers="$store.state.report.qasForm1"
      :items="foundList"
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
var chooserIndex=1;
var chooser=['default','date','header'];

export default {
    data(){
        return {
            searchValue:'',
            headerSearch:'',
            headerKey:'',
            headerFormat:[
                {
                    title:'label',
                    value:'label'
                    
                }
            ],
            selectedChooser:'default',

            datesColumns:[
            {
            title:'Invoice Date',
            value:'invoice_date'
            },
            {
            title:'Grn Date',
            value:'grn_date'
            }
            ],
            isDateRangeSelected:false,
            from_date:moment().format("YYYY-MM-DD"),
            to_date:moment().format("YYYY-MM-DD"),
            foundList:[],
            selected:[],
            findByKey:'',
            findByKeyDate:'invoice_date',
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

selectChooser(){
var $vm=this;
$vm.selectedChooser=chooser[chooserIndex]
if(chooserIndex==chooser.length-1){
    chooserIndex=0;
    return;
}
chooserIndex++
},
async findHeaderArray(){
var $vm=this;
if($vm.headerKey==''){
$vm.$alert("Please Select Filter")
return ;
}
if($vm.headerSearch==''){
$vm.$alert("Please Fill Search Data")
return ;
}
// var find={}
// find[$vm.headerKey]=$vm.headerSearch;
// console.log("find header array",find)
var dataset=await $vm.$store.dispatch("findByHeader",{name:$vm.headerKey,value:$vm.headerSearch});
console.log("dataset",dataset)
$vm.$set($vm,'foundList',dataset)
//$vm.foundList=dataset


},
        filters(){
var $vm=this;
var custom_filters=[
    {
label:'Batch No',
// value:'batch_no',
name:'batch_no',

}]


return [...$vm.$store.state.interplex.configHeaderFormat,...custom_filters]
        },
        
setDate(date){
    var $vm=this;
    $vm.from_date=date.from_date;
    $vm.to_date=date.to_date;
},
async findDateArray()
{

var $vm=this;


$vm.foundList=await $vm.$store.dispatch("findQasFormDate",{
    key:$vm.findByKeyDate,
    value:$vm.searchValue,
    from_date:$vm.from_date,
    to_date:$vm.to_date,
})

}
,
async        findArray(){
var $vm=this;
if($vm.findByKey=="") {
$vm.$alert("Please Fill Search key");
return;
}
if($vm.searchValue=="") {
$vm.$alert("Please Fill Search");
return;
}
if(['batch_no'].includes($vm.findByKey)){
$vm.foundList=await $vm.$store.dispatch("findQasForm2",{
    key:$vm.findByKey,
    value:$vm.searchValue
})


}
else{
$vm.foundList=await $vm.$store.dispatch("findQasForm",{
    key:$vm.findByKey,
    value:$vm.searchValue
})
}

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
    checkDate(date){
var $vm=this;
if(!moment(date, "DD-MM-YYYY",true).isValid())
{
    return moment(date).format("DD-MM-YYYY")
}
return "";

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

//         generateLabel(){
// var $vm=this;
// if($vm.selected.length==0){
// $vm.$alert("Please Select Item to create label")
//     return;
// }
// $vm.barcodeLabel.data_set=_.map($vm.selected,(formone)=>{
// var label={}
// // console.log("formone",formone)
//     _.map(formone.header_format,(Property)=>{
// // console.log('prop',Property)
//         label[Property.name]=Property.value

//     })
//     return label

// })

//         },
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