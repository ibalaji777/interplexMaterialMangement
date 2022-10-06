<template>
    <div>
        <h5 style="text-align:center">Make Inspection Form</h5>

        <div style="background:#b9c5de;padding:10px;display:flex;justify-content:space-evenly">

<!-- {{$isElectron}} -->
<!-- {{barcodeLabel}} -->
<v-btn @click="print()" color="#2f5489" style="color:white;margin-right:5px">
<span style="margin-right:5px">
</span>
<v-icon color="white">
     fa-print
</v-icon>
</v-btn>

<v-btn @click="pdf()" color="#2f5489 " style="color:white;margin-right:5px">
<span style="margin-right:5px">

</span>
<v-icon color="white" >
mdi-file-pdf
</v-icon>
</v-btn>
        </div>
<!-- <h5 style="text-align:center">Make Inspection Label</h5>


        <div style="background:#b9c5de;padding:10px;display:flex;justify-content:space-evenly">
<v-btn @click="labelPrint()" color="#2f5489 " style="color:white;margin-right:5px">
    <span style="margin-right:5px">

    </span>
<v-icon color="white">
     fa-print

</v-icon>
</v-btn>
<v-btn @click="labelPdf()" color="#2f5489 " style="color:white;margin-right:5px">
    <span style="margin-right:5px">

    </span>
<v-icon color="white">
     mdi-file-pdf

</v-icon>
</v-btn>
</div> -->
<div style="display:flex;flex-direction:column;margin:10px;">

<!-- <v-btn color="red" style="color:white;margin:2px;" @click="$refs.print.print()">print</v-btn> -->
<!-- <v-btn color="red" style="color:white;margin:2px;" @click="$refs.barcodeLabelPrint.print()">print Barcode Label</v-btn> -->
</div>
<!-- style="height:0;overflow:hidden" -->
<!-- <barcodeLabelPrint style="height:0;overflow:hidden"  :invoice_data="invoice" ref="barcodeLabelPrint"></barcodeLabelPrint> -->
<!-- {{headerViewMap}} -->
<div style="display:flex;flex-direction:column;margin:10px;">
<!-- <v-btn @click="selectForm='qasformone'" color="#2f5489 " style="color:white;margin:2px">Qas Form One</v-btn>
<v-btn @click="selectForm='qasformtwo'" color="#2f5489 " style="color:white;margin:2px">Qas Form two</v-btn>
<v-btn @click="selectForm='media'" color="#2f5489 " style="color:white;margin:2px">Media</v-btn> -->
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
<!-- <v-btn color="primary" @click="saveQasFormOne">Save </v-btn> -->
</div>
Qas Form
<div style="display:flex;">

<!-- <div @click="qasForm1Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div> -->
<div @click="qasForm1NewDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-list</v-icon>
</div>

<div @click="qasForm2Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>mdi-format-list-checks</v-icon>
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

<div style="display:flex;justify-content:flex-end;padding:10px">
<v-btn color="primary" @click="saveEditedForm">
    Update
</v-btn>
</div>

</div>
<label-print-desktop style="height:0;overflow:hidden" v-if="$isElectron"    :invoice_data="barcodeLabel" ref="labelPrintDesktop"></label-print-desktop>
<label-print-mobile style="height:0;overflow:hidden"  v-else  :invoice_data="barcodeLabel" ref="labelPrintMobile"></label-print-mobile>
<!-- style="height:0;overflow:hidden" -->
<plugin-print-desktop    :invoice_data="invoice" v-if="$isElectron" ref="printDesktop"></plugin-print-desktop>
<plugin-print-mobile  :invoice_data="invoice" v-else ref="printMobile"  ></plugin-print-mobile>
<h4 style="margin-top:15px">
FILE ATTACHMENTS</h4>
<div v-for="(pdf,index) in pdfFiles" :key="index+'files'" style="display:flex">
{{index+1}}.{{pdf.title||""}}
<a style="margin-right:10px" :href="pdf.src" download>Download File</a>

<div style="cursor:pointer;" @click="pdfUrl=pdf.src;pdfViewerDialog=true">View</div>
 
</div>

       <v-dialog
      v-model="pdfViewerDialog"
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
            <v-icon               @click="pdfViewerDialog = false">fa-times</v-icon>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
    <pdf-viewer :url="pdfUrl"></pdf-viewer>
       </div>
      </v-card>
    </v-dialog>


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
<!-- <v-btn @click="saveMedia" color="red" style="color:white">SAVE</v-btn> -->
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
<!-- <div @click="takePicture" class="insertProduct">
<v-icon>fa-camera</v-icon>
</div> -->
        <div style="display:flex">
<div @click="takePicture" style="margin-right:10px" class="insertProduct">
<v-icon>fa-camera</v-icon>
</div>
<div @click="openScanner" ref="btnScan" style="margin-right:10px;" id="btn-scan"  class="insertProduct">
<v-icon>mdi-scanner</v-icon>
</div>
<div style="position:relative" class="insertProduct">
    <v-icon>fa-file-pdf</v-icon>
    <input  style="width:100%;height:100%" class="custom-file-input" id="pdfFile" @change="pdfFileUpload" type="file" accept=".pdf"  />
</div>
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

<!-- qas form one dialog -->
 <v-dialog
      v-model="qasForm1NewDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="qasForm1NewDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>

          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<h3>QAS FORM ONE</h3>
<div  style="    padding: 10px 20px;
    margin: 8px;
" class="rowColor" v-for="(form,index) in invoice.qasFormOne.observation_print_view" :key="index+'form'">
<div style="background: white;
    padding: 6px 15px;
    border-radius: 24px;
    box-shadow: 4px 9px burlywood;" class="flex-row-container">



<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_one_ui.one" :key="'form'+index_sub" :style="{width:ui.width+'%'}">
<div v-if="ui.name=='no'">
NO:{{index+1}}
</div>


 <div v-if="!['no'].includes(ui.name)&&getIndex(form[ui.name])!=-1">

<div v-if="ui.name=='desc'">
   <h4> {{ui.label}}:{{invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value}}</h4>

</div>
<div v-else>
    <div>
   <h4> {{ui.label}}:{{invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value}}</h4>

</div>
</div>

</div>

</div>
<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_one_ui.two" :key="'form_'+index_sub" :style="{width:ui.width+'%'}">
<div v-if="ui.name=='no'">
NO:{{index+1}}
</div>


 <div v-if="!['no'].includes(ui.name)&&getIndex(form[ui.name])!=-1">

<div v-if="ui.name=='desc'">
   <h4> {{ui.label}}:{{invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value}}</h4>

</div>
<div v-else>
<div v-if="invoice.qasFormOne.observation_format[getIndex(form[ui.name])].editable" style="height:85px">

    <h4> {{ui.label}}:{{invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value}}  </h4>
    <v-text-field  style="margin:5px" :disabled="!invoice.qasFormOne.observation_format[getIndex(form[ui.name])].editable"  v-model="invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>
 </div>
<div v-else>
   <h4> {{ui.label}}:{{invoice.qasFormOne.observation_format[getIndex(form[ui.name])].value}}</h4>

</div>
</div>

</div>

</div>


<div >

</div>


</div>
     </div>  </div>
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
          <!-- <v-btn @click="saveQasFormTwo" color="red" style="color:white">save</v-btn> -->
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM LIST</h3>
<div style="    height: 91vh;
    overflow: scroll;
">
<!-- {{invoice.qasFormTwo}} -->
        <table style="width:100%">
            <tr>
                <th></th>
                <th></th>
                <th></th>
            

            </tr>
<tr class="rowColor" v-for="(productFormat , index) in invoice.qasFormTwo" :key="'product'+index">
    <td>{{index+1}}</td>
<td>
<div  class="flex-row-container">
<!-- {{observation2_format_print_view}} -->

<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_two_ui.one" :key="'formOne'+index_sub" :style="{width:ui.width+'%'}">
<div  style="height:86px;padding:10px" v-if="getIndex2(ui.name)!=-1">
     <h4 style="margin-right:5px"> {{ui.label}}:{{productFormat[ui.name]}}<v-icon  v-if="selectedPartNoItem.productConfigFormat[ui.name].exp">fa-calculator</v-icon>  </h4>

</div>
</div> 

<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_two_ui.two" :key="'form'+index_sub" :style="{width:ui.width+'%'}">
<!-- {{ui.name}}
{{ui.width}}
{{getIndex2(ui.name)}} -->
<!-- gg{{invoice.qasFormOne.observation2_format}} -->
<div v-if="getIndex2(ui.name)!=-1" style="height:86px;padding:10px">
     <h4> {{ui.label}}:{{productFormat[ui.name]}}  </h4>
         <!-- <v-text-field v-if="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp&&!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].map" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model="productFormat[ui.name]" outlined dense >
    </v-text-field> -->

    <v-text-field  v-if="!invoice.qasFormOne.observation2_format[getIndex2(ui.name)].exp&&!invoice.qasFormOne.observation2_format[getIndex2(ui.name)].map" style="margin:5px" :disabled="!invoice.qasFormOne.observation2_format[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense >
    </v-text-field>
  <div  v-else>
        <v-text-field append-icon="fa-calculator" v-if="invoice.qasFormOne.observation2_format[getIndex2(ui.name)].exp" style="margin:5px" :disabled="!invoice.qasFormOne.observation2_format[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense >
    </v-text-field>
     <v-text-field append-icon="mdi-magnify-scan"   v-if="invoice.qasFormOne.observation2_format[getIndex2(ui.name)].map" style="margin:5px" :disabled="!invoice.qasFormOne.observation2_format[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense >
    </v-text-field>
</div>
</div>
</div> 

</div>
</td>
<td style="background:#929ed6;padding:0 9px">
    <!-- <div style="text-align:center">
    <div style="  
    display:inline-block;
      background: white;
    padding: 5px;
    border-radius: 50%;
    width: 50px;
    line-height: 42px;
    height: 50px;
    text-align: center;">
    <div v-if="getIndex2('validation')!=-1">
<div v-if="invoice.qasFormOne.observation2_format[getIndex2('validation')].exp"></div>
    <v-icon class="defaultErorr" :class="{errorStatus:productFormat['validation']}">fa-check</v-icon>
    </div>
    </div>
    </div> -->
</td>
<!-- <td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td>
<td><input  class="interInput"   type="text" ></td> -->

      </tr>
        </table>


        <!-- <table>
            <tr>
                <th></th>
                <th></th>
                <th></th>

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

      </tr>
        </table> -->


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
            <!-- invoice.qasFormOne.observation_format -->
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
import * as scanApp from '../lib/scaApp.js'
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
        pdfUrl:'',
        pdfViewerDialog:false,
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
        qasFormOneValidateLoader:false,
        qasForm1NewDialog:false,
            qas_form_two_ui:{},
            qas_form_one_ui:{},
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
computed:{
    galleryFiles(){
        var $vm=this;
        return _.map(_.filter(_.cloneDeep($vm.invoice.gallery),(x)=>x.file_type=='image'),(x)=>{
            x['src']=config.getApi()+'/uploads/'+x.full_name;
      return x;
      })
    },
    pdfFiles(){
        var $vm=this;
        return _.map(_.filter(_.cloneDeep($vm.invoice.gallery),(x)=>x.file_type=='pdf'),(x)=>{
            x['src']=config.getApi()+'/uploads/'+x.full_name;
            return x;
        })
    },
    getIndex(){
    var $vm=this;
return (name)=>{
        return _.findIndex($vm.invoice.qasFormOne.observation_format,(x)=>(x.name==name))

}}
,
getIndex2(){
    var $vm=this;
return (name)=>{
        return _.findIndex($vm.invoice.qasFormOne.observation2_format,(x)=>(x.name==name))

}}


},
created(){
var $vm=this;


},
async mounted(){
    var $vm=this;
  await $vm.$store.dispatch('getPrintConfig')
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
// var invoice=_.cloneDeep({
// qasFormOne:params.invoice.qasFormOne||[],
// qasFormTwo:params.invoice.qasFormTwo||[],
// gallery:_.map(params.invoice.gallery||[],(image)=>{

// image['src']=config.api+'/uploads/'+image.full_name;
// return image;
// })
// })
var gallery=_.map(params.invoice.gallery||[],(image)=>{

image['src']=config.getApi()+'/uploads/'+image.full_name;
return image;
})

// $vm.$set($vm,"invoice",invoice)
$vm.$set($vm.invoice,"qasFormOne",params.invoice.qasFormOne)

// var map_qas_two_values=params.invoice.qasFormOne.qas_form_one_values;

// var observation_format=_.map(params.invoice.qasFormOne.observation_format,(x)=>{
// x["value"]=map_qas_one_values[x.name]
// return x;
// })


var qasFormTwo=_.map(params.invoice.qasFormTwo,(obj)=>{
return {...obj,...obj.qas_form_two_values}
})

$vm.$set($vm.invoice,"qasFormTwo",qasFormTwo)
// $vm.$set($vm.invoice,"qasFormTwo",params.invoice.qasFormTwo)

var map_qas_one_values=params.invoice.qasFormOne.qas_form_one_values;

var observation_format=_.map(params.invoice.qasFormOne.observation_format,(x)=>{
x["value"]=map_qas_one_values[x.name]
return x;
})


$vm.$set($vm.invoice.qasFormOne,"observation_format",observation_format)

// $vm.$set($vm.invoice.qasFormOne,"observation_format",params.invoice.qasFormOne.observation_format)



$vm.$set($vm.invoice.qasFormOne,"observation2_format",params.invoice.qasFormOne.observation2_format)
$vm.$set($vm.invoice,"gallery",gallery)


var label={}
// console.log("formone",formone)
    _.map($vm.invoice.qasFormOne.header_format,(Property)=>{
// console.log('prop',Property)
        label[Property.name]=Property.value

    })

$vm.barcodeLabel.data_set=[{...label}]
// $vm.invoice={

// qasFormOne:params.invoice.qasFormOne||[],
// qasFormTwo:params.invoice.qasFormTwo||[],
// gallery:_.map(params.invoice.gallery||[],(image)=>{

// image['src']=config.api+'/uploads/'+image.full_name;
// return image;
// })
// }
$vm.qas_form_one_ui=$vm.$store.state.interplex.qas_form_one_ui
$vm.qas_form_two_ui=$vm.$store.state.interplex.qas_form_two_ui

if(!_.isEmpty($vm.invoice.qasFormOne.qas_form_one_ui))
{
    $vm.qas_form_one_ui=$vm.invoice.qasFormOne.qas_form_one_ui
}

if(!_.isEmpty($vm.invoice.qasFormTwo.qas_form_one_ui))
{
    $vm.qas_form_two_ui=$vm.invoice.qasFormOne.qas_form_two_ui
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
    openScanner(){
scanApp.openScanner(this)
},
       pdfFileUpload(e){
var $vm=this;
 $vm.$store.commit('showLoader')
    var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
        console.log("pdf file",files[0])
    var url = URL.createObjectURL(files[0]);
    $vm.takePhoto.push({src:files[0],file_type:'pdf',title:'',url})
     $vm.$store.commit('hideLoader')
    //   this.createPdfFile(files[0]);
    },
            labelPrint(){
        var $vm=this;

if($vm.$isElectron){
    $vm.$refs.labelPrintDesktop.print()
}
else{
    $vm.$refs.labelPrintMobile.print()
}
    },
    labelPdf(){
        var $vm=this;

if($vm.$isElectron){
    $vm.$refs.labelPrintDesktop.toPdf()
}
else{
        $vm.$refs.labelPrintMobile.print()
}

    },

async saveEditedForm(){
var $vm=this;


//header
var header=_.cloneDeep($vm.invoice.qasFormOne.header_format);

var qasFormOne={}
var header_columns=_.reduce(_.cloneDeep(header),(result,obj,key)=>{
       if([
    'invoice_no',
    'invoice_date',
    'invoice_qty',
    'ir',
    'grn_no',
    'grn_date',
    'rmcode',
    'rm',
    'eds',
    'product_name'
].includes(obj.name))
       result[obj.name]=obj.value;
    return result;
},{})

var header_columns2=_.reduce(_.cloneDeep(header),(result,obj,key)=>{
       if([
    'invoice_no',


    'grn_no',
    'grn_date',
    'rmcode',
    'eds',
].includes(obj.name))
       result[obj.name]=obj.value;
    return result;
},{})

qasFormOne={...header_columns}
// console.log("$vm.invoice.qasFormOne.observation_format")
// console.log($vm.invoice.qasFormOne.observation_format)
var qas_form_one_values=_.reduce(_.cloneDeep($vm.invoice.qasFormOne.observation_format),(result,obj,key)=>{
    
    result[obj.name]=obj.value;
    return result;
},{})
qasFormOne['id']=$vm.invoice.qasFormOne.id;
qasFormOne['qas_form_one_values']=qas_form_one_values;
qasFormOne['header_format']=header;

var qasFormTwo=_.map(_.cloneDeep($vm.invoice.qasFormTwo),(qasform)=>{
   
 qasform['qas_form_two_values']=_.reduce(_.cloneDeep($vm.invoice.qasFormOne.observation2_format),(result,obj,key)=>{
    result[obj.name]=qasform[obj.name]||obj.value;
    return result;
},{})

return {...qasform,...header_columns2};
})

console.log("-----save-------")
// console.log("header",header)
console.log("qasFormOne",qasFormOne)
console.log("qasFormTwo",qasFormTwo)

await $vm.$store.dispatch('updateQasForm',{
    qasFormOne,
    qasFormTwo
})

$vm.saveMedia()


},

    validateQasFormOne(){
var $vm=this;
    },
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

//         checkErrorStatus(event,index,product){
// var $vm=this;

// var scope=core.validateProductArrayDataset($vm,$vm.invoice.qasFormOne.observation_format);
// console.log("scope =>",scope)
// scope['width_one']=core.onlyNumbers(product['width_one'])?parseFloat(product['width_one']):0
// scope['width_two']=core.onlyNumbers(product['width_two'])?parseFloat(product['width_two']):0
// scope['thick_one']=core.onlyNumbers(product['thickness_one'])?parseFloat(product['thickness_one']):0
// scope['thick_two']=core.onlyNumbers(product['thickness_one'])?parseFloat(product['thickness_one']):0

// if(product.validation!=''){
// console.log(math.evaluate(product.validation,scope))
// product.error_status=math.evaluate(product.validation,scope) 

// }else
// console.log("validatiion failed please add validation")

//         },
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
    this.takePhoto[selected_gallery].title=item.name;
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
formdata.append('title',image['title'])

if(image.file_type=='image'){
formdata.append('file',core.base64toBlob((image.src).split(',')[1]))        
}
          else{
            formdata.append("file",image.src);
          }
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

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'Select some files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>