<template>
  <div>
    <div style="display:flex">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="addProduct" class="insertProduct">
<v-icon>fa-plus</v-icon>
</div>
</div>

<div class="productContainer">

<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
</div>
<div class="otherContainer">
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
</div>

<div>

    <v-textarea outlined label="remarks" style="margin-top:10px">

    </v-textarea>
</div>

<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
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
          <v-toolbar-title>Choose Header File</v-toolbar-title>
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
<label for="avatar">Choose an Excel or CSV file:</label>
<input type="file" id="docpicker" accept=".txt,.csv,application/vnd.ms-excel,.xlt,application/vnd.ms-excel,.xla,application/vnd.ms-excel,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xltx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,.xlsm,application/vnd.ms-excel.sheet.macroEnabled.12,.xltm,application/vnd.ms-excel.template.macroEnabled.12,.xlam,application/vnd.ms-excel.addin.macroEnabled.12,.xlsb,application/vnd.ms-excel.sheet.binary.macroEnabled.12">
<v-btn @click="headerFileUploader">check</v-btn>
</div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
var XLSX = require("xlsx");

/*eslint-disable*/
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
  data(){   
    return {
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
  methods:{

    headerFileUploader(){
        var $vm=this;
        var file = document.getElementById('docpicker')
  var f = file.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = e => {
      var contents = $vm.processExcel(e.target.result);
      console.log(contents)
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
console.log("+++|||result|||++++")
    console.log(JSON.parse(rt))
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
.productContainer{
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
}


</style>