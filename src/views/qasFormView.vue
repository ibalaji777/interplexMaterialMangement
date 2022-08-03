<template>
    <div>
        <div>
<!-- {{$isElectron}} -->
<v-btn @click="print()" color="#2f5489" style="color:red;margin-right:5px">
<v-icon color="white">
     fa-print
</v-icon>
</v-btn>

<v-btn @click="pdf()" color="#2f5489 " style="margin-right:5px">
<v-icon color="white" >
mdi-file-pdf
</v-icon>
</v-btn>
<v-btn @click="printLabel()" color="#2f5489 " style="margin-right:5px">
<v-icon color="white">
mdi-qrcode
</v-icon>
</v-btn>
</div>
<div style="display:flex;flex-direction:column;margin:10px;">

<!-- <v-btn color="red" style="color:white;margin:2px;" @click="$refs.print.print()">print</v-btn> -->
<!-- <v-btn color="red" style="color:white;margin:2px;" @click="$refs.barcodeLabelPrint.print()">print Barcode Label</v-btn> -->
</div>
<barcodeLabelPrint style="height:0;overflow:hidden"  :invoice_data="invoice" ref="barcodeLabelPrint"></barcodeLabelPrint>
<plugin-print-desktop v-if="$isElectron" ref="printDesktop" style="height:0;overflow:hidden" :invoice_data="invoice"></plugin-print-desktop>
<plugin-print-mobile v-else ref="printMobile" style="height:0;overflow:hidden" :invoice_data="invoice"></plugin-print-mobile>
<!-- {{headerViewMap}} -->
<div style="display:flex;flex-direction:column;margin:10px;">
<v-btn @click="selectForm='qasformone'" color="#2f5489 " style="color:white;margin:2px">Qas Form One</v-btn>
<v-btn @click="selectForm='qasformtwo'" color="#2f5489 " style="color:white;margin:2px">Qas Form two</v-btn>
<v-btn @click="selectForm='media'" color="#2f5489 " style="color:white;margin:2px">Media</v-btn>
<v-btn @click="selectForm='edit'" color="#2f5489 " style="color:white;margin:2px">Edit</v-btn>

</div>




<h3>Mark Status</h3>

<div  style="    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin:10px 0;
" v-if="isApprover">

    <div style="background:green" @click="updateFormStatus('approved')" class="statusCard">
AC
    </div>
    <div  style="background:yellow;color:black" @click="updateFormStatus('acceptedOnDeviation')" class="statusCard">
ACD
    </div>
    <div  style="background:red" @click="updateFormStatus('rejected')" class="statusCard">
Rej
    </div>
    <div  style="background:blue" @click="updateFormStatus('ppap')" class="statusCard">
PP
    </div>
</div>



<div v-if="selectForm=='edit'">
<div style="    display: flex;
    flex-wrap: wrap;">
<div style="width:32.5%;margin:1px" v-for="(header,index) in invoice.qasFormOne.header_format" :key="'header'+index">

<div style="font-size:13px">{{header['label']}}</div>
<div > 
<input class="interInput" v-model="header['value']" type="text" :placeholder="header.label" >

</div>


</div>
</div>

OBSERVATION
<div style="display:flex;">

<div @click="qasForm1Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div>
</div>
<div style="display:flex;justify-content:flex-end;margin:10px">
<v-btn color="primary" @click="saveQasFormOne">Save </v-btn>
</div>
Qas Form
<div style="display:flex;">

<!-- <div @click="qasForm1Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div> -->
<div @click="qasForm2Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-list</v-icon>
</div>
<div class="insertProduct" style="position:relative" @click="galleryDialog=true">
<v-icon>fa-image</v-icon>
<div v-if="(invoice.gallery.length+takePhoto.length)!=0" style="position: absolute;
    top: -7px;
    right: -7px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    color: antiquewhite;
    font-size: 15px;
">{{(invoice.gallery.length+takePhoto.length)}}

</div>
</div>
</div>



</div>

<div v-if="selectForm=='qasformone'">

    <div v-if="invoice.qasFormOne.skiplevel_status" style="    color: grey;
    position: absolute;
    transform: translate(-50%,-50%) rotate(-45deg);
    font-size: 46px;
    top: 50%;
    left: 50%;">
    <div style="text-align:center">
        {{invoice.qasFormOne.sk_order}}

    <br>
    SKIP LEVEL</div>
    </div>
<div style="border:1px solid black;height:10vh;position: relative;">

    <div style="display:flex;height: 100%;width:100%;">
        <div style="display:flex;flex:1;flex-direction: column;">
            <img style="    max-width: 145px;
            position: absolute;
            top: -42px;
            left: 10px;
        " src="data:image/png;base64,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" alt="">

<div style="position: absolute;bottom:5px;font-wight:800"> QUALITY ASSURANCE</div>
        </div>
        <div style="display:flex;flex:1;align-items: center;justify-content: center;font-weight: 800;">INCOMING INSPECTION REPORT</div>
    </div>
</div>

<table class="invoiceHeader">
    <tr>
        <td>SUPPLIER: {{printData.headerFormFill.supplier_name}}</td>
        <td>IR# :{{invoice.qasFormOne.ir}}</td>
        <td>R/M CODE: {{printData.headerFormFill.rmcode}}</td>
    </tr>
    <tr>
        <td>INVOICE/ DC #:{{printData.headerFormFill.invoice_no}}</td>
        <td>DATE{{invoice.qasFormOne.date|date}}</td>
        <td>EDS/QP#:{{printData.headerFormFill.eds}}</td>
    </tr>
    <tr>
        <td>INVOICE/DC DATE:{{printData.headerFormFill.invoice_date}}</td>
        <td>GRN NO:{{printData.headerFormFill.grn_no}}</td>
        <td>R/M:{{printData.headerFormFill.rm}} </td>
    </tr>
    <tr>
        <td>INVOICE QTY:{{printData.headerFormFill.invoice_qty}}</td>
        <td>GRN DATE:{{printData.headerFormFill.grn_date}}</td>
        <td>RECEIVED QTY:{{printData.headerFormFill.received_qty}}</td>
    </tr>
</table>

<!-- <v-btn @click="addObservationFormat">fa-plus</v-btn> -->
<h3 style="padding:0;margin:0">OBSERVATION</h3>

<table class="observationTable">
    <tr>
        <td rowspan="2">SL</td>
        <td colspan="4" style="text-align:center">SPEC/REQUIREMENT</td>
        <td colspan="2" style="text-align:center">ACTUAL READING </td>
        <td rowspan="2">REMARKS</td>
    </tr>
    <tr>
        <td>DESCRIPTION</td>
        <td>UNIT</td>
        <td>MIN <br> SPEC</td>
        <td>MAX<br>SPEC</td>
        <td>SUPPLIER</td>
        <td>IELPL/THIRD PARTY</td>
       
    </tr>

    <tr v-for="(printview,index) in printData.qasFormOneFill" :key='"form"+index'
    >
<td>
    {{index+1}}
</td>
<td>
    {{printview.desc}}
</td>
<td>
    {{printview.unit}}
</td>
<td>
    {{printview.min_spec}}
</td>
<td>
    {{printview.max_spec}}
</td>

<td>
    {{printview.sup_one}}
    {{printview.sup_two}}
</td>
<td>
    {{printview.ielpt_one}}
    {{printview.ielpt_two}}
</td>
<td>
    {{printview.remarks}}
</td>


    </tr>
</table>


<div style="display:flex;position: relative;height:20vh;margin-top:10px">

    <div style="position:absolute;top:10px;">
        Comment
    </div>

    <div style="position: absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
*coil weight is based on moq<br>
*inspection is done as per sampling plan WI/QA/46
    </div>
</div>
<div style="display: flex;
justify-content: space-around;">
    <span>Accepted</span>
    <span>Accepted on deviation</span>
    <span>Rejected</span>
    <span>PPAP</span>
</div>

<div style="    display: flex;
justify-content: space-evenly;
height: 6vh;
align-items: center;">
    <div>Inspected By:{{printData.operator_name}} <span>
        
        </span> </div>
    <div>DEVIATION REQUEST #</div>
    <div>Approved By:{{printData.approver_name}}</div>
</div>
</div>
<div v-if="selectForm=='qasformtwo'">
    <!-- {{invoice.qasFormOne}} -->

    <div style="position:relative">
    <div  style="    color: grey;
    position: absolute;
    transform: translate(-50%,-50%) rotate(-45deg);
    font-size: 46px;
    top: 50%;
    left: 50%;" v-if="invoice.qasFormOne.skiplevel_status">
        {{invoice.qasFormOne.sk_order}}

    SKIP LEVEL</div>

    <div style="border:1px solid black;height:10vh;position: relative;">

    <div style="display:flex;height: 100%;width:100%;">
        <div style="display:flex;flex:1;flex-direction: column;">
            <img style="    max-width: 145px;
            position: absolute;
            top: -42px;
            left: 10px;
        " src="data:image/png;base64,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" alt="">

<div style="position: absolute;bottom:5px;font-wight:800"> QUALITY ASSURANCE</div>
        </div>
        <div style="display:flex;flex:1;align-items: center;justify-content: center;font-weight: 800;">INCOMING INSPECTION REPORT</div>
    </div>
</div>

<table class="qasform2class">
    <tr>
        <td>s/n</td>
        <td>Coil #</td>
        <td>Coil Weight in kg</td>
        <td>Width in mm</td>
        <td>Thickness in mm</td>
        <td>Supplier coil #</td>
    </tr>
<tr v-for="(item,index) in invoice.qasFormTwo" :key="index+'d'">
        <td>{{index+1}}</td>
        <td>{{item.batch_no}}</td>
        <td>{{item.weight}}</td>
        <td>{{item.width_one}}-{{item.width_two}}</td>
        <td>{{item.thick_one}}-{{item.thick_two}}</td>
        <td>{{item.lot_no}}</td>

</tr>

</table>

</div>
</div>
<div v-if="selectForm=='media'">

    <div v-for="(item,index) in invoice.gallery" :key="'gallery'+index">
<img style="max-width:500px" :src="item.src" alt="">
    </div>
</div>
<!-- *********************Gallery************************ -->
       <v-dialog
      v-model="galleryDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>
            <v-icon               @click="galleryDialog = false">fa-times</v-icon>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
<v-btn @click="saveMedia" color="red" style="color:white">SAVE</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
<div @click="takePicture" class="insertProduct">
<v-icon>fa-camera</v-icon>
</div>
<br>
<div style="    background: #f13454;
    padding: 9px;
    color: white;
    border-radius: 29px;
    font-weight: 300;">
Total Capture:{{invoice.gallery.length}}
</div>
<div class="productContainer">
<!-- {{takePhoto}} -->
<div v-for="(image,index) in invoice.gallery" :key="index+image" class="productItems" style="    display: flex;
    justify-content: space-between;">
<img :src="image.src" alt="" style="max-width:100px;max-height:100px">
<div style="display:flex;align-items:center;"><span v-if="image.file_type==''" @click="selectGalleryType(index)" style="width: 40px;
    height: 40px;
    border: 1px dashed #ffeb3b;
    display: flex;
    justify-content: center;
    align-items: center;">
+
</span>
<span style="
    padding: 10px 5px;" v-else @click="selectGalleryType(index)">
{{image.file_type}}
</span>
</div>
<v-icon @click="mediaDelete(image,index)" style="margin:0 5px">fa-trash</v-icon>

</div>
<div v-for="(image,index) in takePhoto" :key="index+'newphoto'" class="productItems" style="    display: flex;
    justify-content: space-between;">
<img :src="image.src" alt="" style="max-width:100px;max-height:100px">
<div style="display:flex;align-items:center;"><span v-if="image.file_type==''" @click="selectGalleryType(index)" style="width: 40px;
    height: 40px;
    border: 1px dashed #ffeb3b;
    display: flex;
    justify-content: center;
    align-items: center;">
+
</span>
<span style="
    padding: 10px 5px;" v-else @click="selectGalleryType(index)">
{{image.file_type}}

</span>

</div>
<v-icon @click="(takePhoto.splice(index,1))">fa-trash</v-icon>

</div>


<!-- <div class="productItems">
Items
</div>
<div class="productItems">
Items
</div> -->
</div>


</div>
      </v-card>
    </v-dialog>

<!-- *******************qasform2 product list dialog************************ -->
 <v-dialog
      v-model="qasForm2Dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="qasForm2Dialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="saveQasFormTwo" color="red" style="color:white">save</v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM LIST</h3>
<div style="    height: 91vh;
    overflow: scroll;
">
        <table>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <!-- <th>cw/kg</th>
                <th>w/mm</th>
                <th>th/mm</th>
                <th>Sup Coil#</th>
                <th>Error</th> -->

            </tr>
<tr class="rowColor" v-for="(productFormat , index) in invoice.qasFormTwo" :key="'product'+index">
    <td>{{index+1}}</td>
<td>
    <input  v-model="productFormat.batch_no" placeholder="coild # (Batch No)"  class="interInput"   type="text" >
    <input v-model="productFormat.lot_no" placeholder="sup coil #(Lot No)"  class="interInput"   type="text" >
    <input v-model="productFormat.weight"  class="interInput"   type="text" placeholder="Width (W/KG)" >
    <div style="display:flex">
    
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.width_one"  class="interInput"   type="text" placeholder="Width One" >
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.width_two"  class="interInput"   type="text" placeholder="Width Two" >
    </div>
        <div style="display:flex">
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.thick_one"  class="interInput"   type="text" placeholder="Thick One" >
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.thick_two" class="interInput"   type="text" placeholder="Thick Two" >
    </div>
</td>
<td style="background:white;padding:9px">
    <v-icon class="defaultErorr" :class="{errorStatus:productFormat.error_status}">fa-check</v-icon>
</td>
<!-- <td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td> -->

      </tr>
        </table>
        </div>



</div>
      </v-card>
    </v-dialog>

<!-- qasForm1Dialog -->
 <v-dialog
      v-model="qasForm1Dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="qasForm1Dialog = false">fa-times</v-icon></v-toolbar-title>

          <v-spacer></v-spacer>
          <!-- <v-btn @click="saveQasFormOne" color="red" style="color:white">save</v-btn> -->
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<div style="    height: 91vh;
    overflow: scroll;
">
        <table style="width:100%">
            <tr>
                <th></th>
                <!-- <th></th> -->
            </tr>
            <!-- selectedPartNoItem.productConfigFormat -->
<tr  v-for="(productFormat , index) in invoice.qasFormOne.observation_format" :key="'product'+index">

<td >
  <span style="font-size:14px">{{productFormat.label}}</span>
    <!-- @input="watchValue($event,productFormat)" -->
    <input     class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
</td>
<!-- <td style="padding:15px" >
    <div style="text-align:center">
    <v-icon v-if="productFormat.validation">fa-check</v-icon>
    </div></td>  
     -->
          </tr>
        </table>
        </div>
        <!-- <div v-for="(productFormat , index) in productsFormat" :key="'product'+index" >

<div style="display:flex" v-if="productFormat.show">
<span style="width:40%">{{productFormat.label}}</span>
<input style="width:60%" class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
</div>


</div> -->


</div>
      </v-card>
    </v-dialog>

<!--*******************file type******************* -->
   <v-dialog
      v-model="fileTypeDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Choose File Type</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="fileTypeDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
             <div v-if="$store.state.interplex.masterFileTypes.length==0">
<div style="text-align:center;color:red;margin:15px0;">Result Not found</div>
        </div>
     <div class="interList" @click="selectGallery(item)" v-for="(item,index) in $store.state.interplex.masterFileTypes" :key="'FileType'+index">
        {{item.name}}
     </div>
</div>
      </v-card>
    </v-dialog>



    </div>
   
</template>
<script>
/*eslint-disable*/
import * as printData from '../lib/printData.js'
import * as core from '../lib/core.js'
import * as config from '../lib/config.js'
import _ from 'lodash'
import { Camera, CameraResultType } from '@capacitor/camera';
import { create, all } from 'mathjs'
const math = create(all,  {})

// import 'reveal.js/dist/reveal.css'


export default {
data(){
    return {
isApprover:false,
fileTypeDialog:false,
selected_gallery:0,

printData:{
logo:'',
    headerFormFill:'',
    qasFormOneFill:{},
    qasFormTwoFill:[],
    operator_name:'',
    approver_name:'',
    gallery:[],

},

        takePhoto:[],
        qasForm1Dialog:false,
        qasForm2Dialog:false,
        galleryDialog:false,

        item:{
            skiplevel_status:false,
        },
        invoice:{
qasFormOne:[],
qasFormTwo:[],
gallery:[]
        },
selectForm:'qasformone',
headerViewMap:{},
printViewMap:{},
        observation_print_view_format:[]
    }
}    ,
async mounted(){
    var $vm=this;

if(['approver','admin'].includes($vm.$store.state.interplex.user.roletype))
$vm.isApprover=true;
await $vm.$store.dispatch('readUploadType')
var params=$vm.$route.params

if(params.item){
    $vm.item.skiplevel_status=params.item.skiplevel_status;
    var qasformoneNew=params.item;
    console.log("params")
console.log(params)


}
if(params.invoice){
$vm.printData=printData.printData(params.invoice)

$vm.invoice={

qasFormOne:params.invoice.qasFormOne||[],
qasFormTwo:params.invoice.qasFormTwo||[],
gallery:_.map(params.invoice.gallery||[],(image)=>{

image['src']=config.api+'/uploads/'+image.full_name;
return image;
})
}

$vm.printData=printData.printData($vm.invoice)
await _.map($vm.invoice.qasFormOne.observation_format,(view)=>{

$vm.printViewMap[view.name]=view.value

})

await _.map(qasformoneNew.header_format,(view)=>{

$vm.headerViewMap[view.name]=view.value

})

$vm.observation_print_view_format=core.getObservationPrintView($vm.invoice.qasFormOne.observation_print_view)

// console.log("OBSERVATION PRINT VIEW",typeof $vm.invoice.qasFormOne.observation_print_view)
// console.log("OBSERVATION PRINT VIEW",$vm.invoice.qasFormOne.observation_print_view)
// if(typeof $vm.invoice.qasFormOne.observation_print_view=='object'&&$vm.invoice.qasFormOne.observation_print_view!==null)
// {
//     if($vm.invoice.qasFormOne.observation_print_view.length!=0){
//     $vm.observation_print_view_format=$vm.invoice.qasFormOne.observation_print_view 

//     return;
//     }
//     $vm.observation_print_view_format=_.cloneDeep($vm.$store.state.interplex.observation_print_view_format)
// }

}
console.log("observation print view",$vm.observation_print_view_format)
},
methods:{
    saveHeader(){
var $vm=this;
$vm.$store.dispatch('qasFormHeaderUpdate',$vm.invoice.qasFormOne.header_format)
$vm.$alert("Saved")


    },
printLabel(){
var $vm=this;
$vm.$refs.barcodeLabelPrint.print()
},
    print(){
        var $vm=this;
if($vm.$isElectron){
    $vm.$refs.printDesktop.print()
}
else{
        $vm.$refs.printMobile.print()
}
    },
    pdf(){
        var $vm=this;
if($vm.$isElectron){
    $vm.$refs.printDesktop.toPdf()
}
else{
        $vm.$refs.printMobile.print()
}

    },

        checkErrorStatus(event,index,product){
var $vm=this;

var scope=core.validateProductArrayDataset($vm,$vm.invoice.qasFormOne.observation_format);
console.log("scope =>",scope)
scope['width_one']=core.onlyNumbers(product['width_one'])?parseFloat(product['width_one']):0
scope['width_two']=core.onlyNumbers(product['width_two'])?parseFloat(product['width_two']):0
scope['thick_one']=core.onlyNumbers(product['thickness_one'])?parseFloat(product['thickness_one']):0
scope['thick_two']=core.onlyNumbers(product['thickness_one'])?parseFloat(product['thickness_one']):0

if(product.validation!=''){
console.log(math.evaluate(product.validation,scope))
product.error_status=math.evaluate(product.validation,scope) 

}else
console.log("validatiion failed please add validation")

        },
async     updateFormStatus(status){
var $vm=this;
await $vm.$store.dispatch('qasFormUpdateStatus',{
id:$vm.invoice.qasFormOne.id,
approved_by:$vm.$store.state.interplex.user.id,
status,
})

var result=await $vm.$store.dispatch('getQasFormOneSingle',$vm.invoice.qasFormOne.invoice_table_id)
// console.log("result qasformsingle")
// console.log(result)
$vm.invoice={

qasFormOne:$vm.invoice.qasFormOne||[],
qasFormTwo:$vm.invoice.qasFormTwo||[],
gallery:_.map($vm.invoice.gallery||[],(image)=>{

image['src']=config.api+'/uploads/'+image.full_name;
return image;
})
}

$vm.printData=printData.printData($vm.invoice)
$vm.$alert("updated")

    },
    selectGalleryType(index){
var $vm=this;
$vm.fileTypeDialog=true;
$vm.selected_gallery=index;
    },
        selectGallery(item){
var $vm=this;
var selected_gallery=_.cloneDeep($vm.selected_gallery)
if($vm.selected_gallery!==-1)
{
    this.takePhoto[selected_gallery].file_type=item.name;
    $vm.selected_gallery=-1;
    $vm.fileTypeDialog=false;
}
    },
    saveMedia(){
var $vm=this;
  _.map($vm.takePhoto,async (image)=>{
    var formdata=new FormData()
image['invoice_table_id']=$vm.invoice.qasFormOne.invoice_table_id;
image['invoice_client_id']=$vm.invoice.qasFormOne.invoice_client_id;
image['invoice_no']=$vm.invoice.qasFormOne.invoice_no;
// formdata.append('invoice_table_id',image['invoice_table_id'])
formdata.append('invoice_table_id',image['invoice_table_id'])
formdata.append('invoice_client_id',image['invoice_client_id'])
formdata.append('invoice_no',image['invoice_no'])
formdata.append('file_type',image['file_type'])

formdata.append('file',core.base64toBlob((image.src).split(',')[1]))        

await $vm.$store.dispatch('upload',formdata)
console.log("uploading....")
return image;

  })
$vm.$alert("saved")
    },
async mediaDelete(item,index){
var $vm=this;
$vm.$confirm("Do You Want to delete?").then(async ()=>{
await $vm.$store.dispatch('mediaDelete',item.id)
$vm.invoice.gallery.splice(index,1)
$vm.$alert("Deleted")
})
},    
saveQasFormTwo(){
var $vm=this;

console.log($vm.invoice.qasFormTwo)
$vm.$store.dispatch('qasFormTwoUpdate',$vm.invoice.qasFormTwo)
$vm.$alert("Saved")


},
    saveQasFormOne(){

var $vm=this;
console.log("+++++qasform1++++++")
console.log($vm.invoice.qasFormOne)

var qasfomrone=core.setQasHeader($vm.invoice.qasFormOne,$vm.invoice.qasFormOne.header_format)

// {...$vm.invoice.qasFormOne,...core.getQasHeader($vm.invoice.qasFormOne.header_format)}
console.log("qasformone",qasfomrone)
$vm.$store.dispatch('qasFormOneUpdate',qasfomrone)

$vm.$alert("Saved")
    },
                 async takePicture() {
            var $vm=this;
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
  });

  // Here you get the image as result.
  const theActualPicture = image.dataUrl;
  console.log(theActualPicture)
  $vm.takePhoto.push({src:theActualPicture,file_type:''})
},
    status(status){
var $vm=this;
console.log(status)

    },
    map(key){
    
return this.printViewMap[key]||''
    }
}
}
</script>
<style lang="scss">
            .invoiceHeader{

            width:100%;
            border-collapse: collapse;
        }
        .invoiceHeader  td{
            border: 1px solid black;
            padding:5px
        }

        .observationTable{

width:100%;
border-collapse: collapse;
}
.observationTable  td{
border: 1px solid black;
padding:5px
}
.qasform2class{
    width:100%;
border-collapse: collapse;
}
.qasform2class th{
    text-align:center
}
.qasform2class td,
.qasform2class th{

    border:1px solid black;
    text-align: center;
}
.statusCard{
    text-align: center;
    width: 55px;
    height: 55px;
    color: white;
    background: orange;
    font-weight: 700;
    line-height: 3.5;
    vertical-align: middle;
}
.statusCard:hover{
    background:rgb(142, 142, 235);
}
</style>