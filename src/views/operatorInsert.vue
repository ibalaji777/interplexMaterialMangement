<template>
  <div>
    <div style="display:flex">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<!-- <div @click="addProduct" class="insertProduct">
<v-icon>fa-plus</v-icon>
</div> -->
</div>
<h3 style="background: red;
    color: white;
    padding: 5px;
    margin-top: 17px;
    text-align: center;">Invoice with Products</h3>
<div class="productContainer">

<div :class="{skiplevel:item.skiplevel_status}"  v-for="(item,index) in getQualityAssuranceFormOne" @click="selectedPartNoItem(item,index);$router.push({name:'operatorQsReport'})" class="productItems" :key="index+'qsform2'">
   NAME:  {{item['Vendor Name']}}<br>
   DATE: {{item["LAST_GR_DATE_EXT"]}}<br>
   Part NO: {{item["OLMAT"]}}<br>
   Weight:{{item.invoiceQty}}<br>
   <!-- <v-text-field v-model="item['Vendor Name']"></v-text-field> -->
   Invoice No:<br>
   Grn NO:<br>


</div>
<!-- <div class="productItems">
Items
</div>
<div class="productItems">
Items
</div> -->
</div>
<!-- <div class="otherContainer">
<div class="insertProduct" style="position:relative" @click="galleryDialog=true">
<v-icon>fa-image</v-icon>
<div v-if="takePhoto.length!=0" style="position: absolute;
    top: -7px;
    right: -7px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    color: antiquewhite;
    font-size: 15px;
">{{takePhoto.length}}

</div>
</div>
</div> -->

<!-- <div>

    <v-textarea outlined label="remarks" style="margin-top:10px">

    </v-textarea>
</div> -->

<div style="margin-top:15px;display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn  style="position: absolute;
    bottom: 25px;
    background: linear-gradient(45deg, red, #c50303);
    color: white !important;
" outlined @click="submit">
    Submit To Approval
</v-btn>
</div>
<!-- --------------------------product insert dialog------------------- -->
   <v-dialog
      v-model="productInsertDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Add Product</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="productInsertDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
        <div class="inputContainer">
<input class="interInput" type="text" placeholder="Search Product" style="margin-top:10px;">
</div>

        <div class="inputContainer">
            How Many Product Do You  Want to Add?<br>

<input class="interInput" type="text" placeholder="Example (5 Product)" style="margin-top:10px;">
</div>

<br>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
</div>
      </v-card>
    </v-dialog>
   <v-dialog
      v-model="headerFileDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Header File</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="headerFileDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
        <div class="inputContainer">
<input class="interInput" type="text" placeholder="Search Product" style="margin-top:10px;">
</div>

        <div class="inputContainer">
            How Many Product Do You  Want to Add?<br>

<input class="interInput" type="text" placeholder="Example (5 Product)" style="margin-top:10px;">
</div>

<br>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
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
          <v-toolbar-title>Gallery</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="galleryDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
<div @click="takePicture" class="insertProduct">
<v-icon>fa-camera</v-icon>
</div>
<br>
<div style="border:1px solid black;background:beige;padding:5px">
Total Capture:{{takePhoto.length}}
</div>
<div class="productContainer">
<!-- {{takePhoto}} -->
<div v-for="(image,index) in takePhoto" :key="index+image" class="productItems" style="    display: flex;
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
     <div class="interList" @click="selectGallery(item)" v-for="(item,index) in fileTypes" :key="'FileType'+index">
        {{item.name}}
     </div>
</div>
      </v-card>
    </v-dialog>

<!--*******************header file******************* -->
   <v-dialog
      v-model="headerFileDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>SAP File</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="headerFileDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
    
       <div style="    
    
      
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;">
    <h3 style="text-align:center;">
        Choose Header File
    </h3>
<div style="  margin-top: 10px;padding: 10px;display: flex;background: red;">
<input type="file" id="docpicker" accept=".txt,.csv,application/vnd.ms-excel,.xlt,application/vnd.ms-excel,.xla,application/vnd.ms-excel,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xltx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,.xlsm,application/vnd.ms-excel.sheet.macroEnabled.12,.xltm,application/vnd.ms-excel.template.macroEnabled.12,.xlam,application/vnd.ms-excel.addin.macroEnabled.12,.xlsb,application/vnd.ms-excel.sheet.binary.macroEnabled.12">
<v-btn @click="headerFileUploader">check</v-btn>
</div>
</div>
      </v-card>
    </v-dialog>
    <!-- *********************checkdialog************************ -->
    <v-dialog
      v-model="checkDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="checkDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<div style="    padding: 0 17px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    /* background: lightgoldenrodyellow; */
    border-radius: 5px;
    border: 1px solid;
    margin-bottom: 10px;">
<v-checkbox
      v-model="checkAllSelected"
      label="Select"
    ></v-checkbox>

    <v-btn @click="addToQualitFormOne" color="primary">Add</v-btn>
</div>
<div class="checkContainer">
<div v-for="(item,index) in checkHeaderBefore" :key="index+'invoice'">

<div @click="item.selected=!item.selected" :class="{selectedInvoice:item.selected}" style="background: chartreuse;
    padding: 10px;
    border-radius: 10px;margin:3px;">
   NAME:  {{item['Vendor Name']}}<br>
   DATE: {{item["LAST_GR_DATE_EXT"]}}<br>
   Part No: {{item["OLMAT"]}}<br>
   TOTAL BATCH NOS:{{item.products.length}}
   <br>
   Weight:{{item.invoiceQty}}<br>
   Invoice No:<br>
   Grn NO:<br>

<div style="    display: flex;
    justify-content: flex-end;">
    <span v-if="item.isExist">Exist</span>
    <span v-else>Not Exist</span>
</div>
</div>

</div>
</div>
       </div>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>
/*eslint-disable*/

var XLSX = require("xlsx");
import * as core from '../lib/core.js'
import { Camera, CameraResultType } from '@capacitor/camera';
import moment from 'moment'
export default {
  data(){   
    return {
checkAllSelected:true,
        checkHeaderBefore:[],
        checkDialog:false,
        fileTypeDialog:false,
        selected_gallery:-1,
        fileTypes:[
            {
                name:'Supplier Test'
            },
            {
                name:'Invoice'
            },
                        {
                name:'Supplier Traceabilty'
            },
            {
                name:'Grn Copy'
            }


        ]
        ,
        takePhoto:[
            // {
            //      src:'',
            //      file_type:''
            // }

        ],
        productInsertDialog:false,
        galleryDialog:false,
        headerFileDialog:false,
    }
  },
  mounted(){
    var $vm=this;
// $vm.headerFileUploader()
  },
  computed:{
getQualityAssuranceFormOne:{

get(){
var result=core.database(this,'getQualityAssuranceFormOne')
console.log("===getQualityAssuranceFormOne===",result)
return  result;
    },
    set(value){
console.log(value)
    }
},
tempInvoice(){
var $vm=this;
var result=$vm.$store.state.interplex.tempInvoice
return result;
}
  },
  methods:{
    submit(){
var $vm=this;
console.log("====submit====")
console.log($vm.tempInvoice)
var invoices=[];
var user_id=1;
var invoice_no_validate=true;


_.each($vm.tempInvoice, ( val, key ) => { 
var invoice={}
console.log( key, val ); 


var qasForm1Prod=_.filter($vm.getQualityAssuranceFormOne,(product)=>(product.ref==key));

// // validation
// _.map(qasForm1Prod,(product)=>{
// if(product.invoice_no==''){
//     invoice_no_validate=false
//    return; 
//     }
    
//     })


invoice['ref']=key;
invoice['gallery']=val['gallery'];
invoice['remarks']=val['remarks'];


invoice['qasForm1Prod']=qasForm1Prod;//_.filter($vm.getQualityAssuranceFormOne,(product)=>(product.ref==key));
invoice['supplier_name']='';
invoice['invoice_no']='';
invoice['invoice_date']='';
invoice['invoice_qty']='';
invoice['ir']='';
invoice['date']='';
invoice['grn_no']='';
invoice['grn_date']='';
invoice['rmcode']='';
invoice['eds']='';
invoice['rm']='';
invoice['received_qty']='';
invoice['product_name']='';
invoice['form_format']='';
invoice['comment']='';
invoice['duedate']='';
invoice['observation_format']='';
invoice['header_format']='';
invoice['remarks']='';
invoice['status']='';
invoice['approved_by']='';

if(qasForm1Prod.length!=0){
// ***********************************
var headerData=qasForm1Prod[0].headerConfigFormat
console.log("++++header++++",headerData)
_.map(headerData,(header)=>{
    invoice[header.name]=header.value;
   })
// ***********************************


invoice['qasForm1New']=_.map(qasForm1Prod,(product)=>{
var object={};


_.map(product.headerConfigFormat,(header)=>{
    object[header.name]=header.value;
})
 object['observation_format']=product.productConfigFormat
 object['header_format']=product.headerConfigFormat

//some fiels lag 
   object['qasForm2New']=_.map(product.qasForm2,(qasform2)=>{
    // qasform2

    return Object.assign(core.dbFormate.qasform2,qasform2)
   });
//Object.assign(core.dbFormate.qasform2)
//asign default values 
console.log($vm.$store.state.interplex.user)
    return Object.assign(core.dbFormate.qasForm1,object,{operator_id:user_id}) ;

})



// invoice['supplier_name']='';
// invoice['invoice_no']='';
// invoice['invoice_date']='';
// invoice['invoice_qty']='';
// invoice['ir']='';
// invoice['date']='';
// invoice['grn_no']='';
// invoice['grn_date']='';
// invoice['rmcode']='';
// invoice['eds']='';
// invoice['rm']='';
// invoice['received_qty']='';
// invoice['product_name']='';
// invoice['form_format']='';
// invoice['comment']='';
// invoice['duedate']='';
// invoice['observation_format']='';
// invoice['header_format']='';
// invoice['remarks']='';
// invoice['status']='';
// invoice['approved_by']='';


}

    invoices.push(invoice)


_.map(invoices,(invoice)=>{
_.map(invoice.qasForm1New,(qasForm1)=>{
var id=core.randomInteger(1,1000)
qasForm1['id']=id;
core.database($vm,'insertQasForm1',qasForm1)
_.map(invoice.qasForm2New,(qasForm2)=>{
var id=core.randomInteger(1,1000)
qasForm2['id']=id;
    core.database($vm,'insertQasForm2',qasForm2)
})  
})

})


} );
$vm.$store.commit('defaultValue',{})
$vm.$alert("Saved")
console.log(invoices)
    },


    selectedPartNoItem(item,index){
        var $vm=this;
        console.log("selected item")
        console.log(item)
this.$store.commit('selectedPartNoItem',item)
    },
    addToQualitFormOne(){
var $vm=this;
var checked=_.filter($vm.checkHeaderBefore,(x)=>(x.selected))
var createInvoice=core.createInvoice(_.cloneDeep(checked));
//create header
//create product form
//create product list
var main_list=core.createProductList($vm,checked);

//skiplevel check
var skiplevel=core.skiplevel($vm,_.cloneDeep(main_list))
console.log("main product format",skiplevel)
$vm.$store.commit('addToQualitFormOne',_.cloneDeep(skiplevel))
$vm.$store.commit('tempInvoice',createInvoice)
// console.log("Create Invoice ",createInvoice)

$vm.checkDialog=false;
        $vm.fileTypeDialog=false;
    },

    headerFileUploader(){
        var $vm=this;
        $vm.checkDialog=true;
        var file = document.getElementById('docpicker')
  var f = file.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = e => {
      var contents = $vm.processExcel(e.target.result);
    //   console.log(contents)
    }
    r.readAsBinaryString(f);
  } else {
    console.log("Failed to load file");
  }


     },
     processExcel(data) {
    var $vm=this;
  var workbook = XLSX.read(data, {
    type: 'binary',
    FS:'|'
  });

  var firstSheet = workbook.SheetNames[0];
  var data = $vm.to_json(workbook);
  console.log("+++result+++")
  console.log(data)
 var dataMap= _.map(data,(x)=>{

x['isValidProd']=false;
    return x;
  })
// ----------------------------------------------------
var headerFile=_.map(core.headerFileGroup(dataMap),(x)=>{
x['selected']=true;
x['ref']=x[core.defaultFields.supplierName]+x[core.defaultFields.invoiceDate]+(x[core.defaultFields.invoiceNo]||'');
x['isExist']=false;//validate server side
if(x['DATE']){
    var str=x['DATE'];
   x['DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
       var str=x['DOMF'];
   x['DOMF_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
       var str=x['LAST_GR_DATE'];
   x['LAST_GR_DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
}
return x;
})

// ----------------------------------------------------
//   console.log(core.headerFileGroup(data))
    console.log(headerFile)
    $vm.checkHeaderBefore=headerFile||[]
},

     to_json(workbook) {
        var $vm=this;
  var result = {};
//   workbook.SheetNames.forEach(function(sheetName) {
    var sheetName=workbook.SheetNames[0];
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
     
    });
    if (roa.length) result[sheetName] = roa;
var rt=JSON.stringify(roa)
// console.log("+++|||result|||++++")
//     console.log(JSON.parse(rt))
//   });
  return JSON.parse(rt);
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
    addProduct(){
        var $vm=this;
$vm.productInsertDialog=true
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
}
  },
  watch:{

    checkAllSelected(){
var $vm=this;
        $vm.checkHeaderBefor=_.map($vm.checkHeaderBefor,(x)=>{
x['selected']=$vm.checkAllSelected

console.log(x['selected'])
        })

        },

    
    
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
    width: 60px;
    height: 60px;
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
}
.productItems{

    padding: 5px;
    color: white;
    background: darkturquoise;
    margin: 5px;
} */
.skiplevel{
   background: #d22525 !important;
}

</style>