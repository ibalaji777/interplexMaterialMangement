<template>
    <div>
<h3>Quality assurance Form</h3>
<br>
<div style="    display: flex;
    flex-wrap: wrap;">
<div style="width:32.5%;margin:1px" v-for="(header,index) in selectedPartNoItem.headerConfigFormat" :key="'header'+index">

<div style="font-size:13px">{{header['label']}}</div>
<div > 
<input class="interInput" v-model="header['value']" type="text" :placeholder="header.label" >

</div>


</div>
</div>
OBSERVATION
<div style="display:flex;">

<div @click="productFormatDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div>
<div @click="qasForm1NewDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-list</v-icon>
</div>
<div @click="qasForm2Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>mdi-format-list-checks</v-icon>
</div>
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
<v-textarea v-model="remarks" style="margin-top:10px" outlined label="Remarks"></v-textarea>

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
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM LIST</h3>
<div style="    height: 88vh;
    overflow: scroll;
">
        <table style="width:100%">
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
<tr class="rowColor" v-for="(productFormat , index) in selectedPartNoItem.qasForm2" :key="'product'+index">
    <td>{{index+1}}</td>
<td>
    <div style="width:100%;display:flex;flex-direction:column;margin:2px">
coil # (Batch No)
    <input  v-model="productFormat.batch_no" placeholder="coil # (Batch No)"  class="interInput"   type="text" >
    </div>
<div style="width:100%;display:flex;flex-direction:column;margin:2px">
sup coil #(Lot No)
    <input v-model="productFormat.lot_no" placeholder="sup coil #(Lot No)"  class="interInput"   type="text" >
</div>
<div style="width:100%;display:flex;flex-direction:column;margin:2px">
Weight (W/KG)
    <input v-model="productFormat.weight"  class="interInput"   type="text" placeholder="Weight (W/KG)" >
</div>
    <div style="display:flex">

<div style="width:100%;display:flex;flex-direction:column;margin:2px">
Width Min   
    <input style="" @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.width_min"  class="interInput"   type="text" placeholder="Width Min" >
    </div>
<div style="width:100%;display:flex;flex-direction:column;margin:2px">

Width Max 
    <input style="width:100%" @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.width_max"  class="interInput"   type="text" placeholder="Width Max" >
    </div>
    </div>
        <div style="display:flex">
 <div style="width:100%;display:flex;flex-direction:column;margin:2px">
           Thick Min
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.thick_min"  class="interInput"   type="text" placeholder="Thick Min" >
 </div>
<div style="width:100%;display:flex;flex-direction:column;margin:2px">
           Thick Max 
    <input @input="checkErrorStatus($event,index,productFormat)" v-model="productFormat.thick_max" class="interInput"   type="text" placeholder="Thick Max" >
</div>
    </div>
</td>
<td style="background:#929ed6;padding:0 9px">
    <div style="text-align:center">
    <div style="  
    display:inline-block;
      background: white;
    padding: 5px;
    border-radius: 50%;
    width: 50px;
    line-height: 42px;
    height: 50px;
    text-align: center;">
    <v-icon class="defaultErorr" :class="{errorStatus:productFormat.error_status}">fa-check</v-icon>
    </div>
    </div>
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
          <v-btn @click="submitQasForm1new" style="color:white" text>
            OK
          </v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM LIST</h3>
<!-- {{qasForm1New}} -->

<div  style="    padding: 10px 20px;
    margin: 8px;
" class="rowColor" v-for="(form,index) in selectedPartNoItem.observation_print_view" :key="index+'form'">
<div style="background: white;
    padding: 6px 15px;
    border-radius: 24px;
    box-shadow: 4px 9px burlywood;">
    <!-- {{qasForm1New}} -->
<b>{{index+1}}.{{form.desc}}</b><br>
<b>{{qasForm1New[form.unit]}}</b><br>
<div style="display:flex;justify-content:space-around">
<b>Min spec :{{qasForm1New[form['min_spec']]}}</b>
<b>Max spec :{{qasForm1New[form['max_spec']]}}</b>
</div>
</div>
<div style="">
    <div style="">
    <!-- <label>Min Spec</label> -->
    <!-- <v-text-field label="Min Spec"></v-text-field> -->
    </div><br>
<div style="display:flex;width:100%;height:30px">
    <!-- <label>Min Spec</label> -->
    <!-- {{form.sup_one}}
    {{form.sup_two}} -->
    <v-text-field outlined color="white" style="margin:4px" dense v-model="qasForm1New[form.sup_one]" label="Min Spec"></v-text-field>
    <v-text-field outlined color="white" style="margin:4px" dense v-model="qasForm1New[form.sup_two]" label="Max Spec"></v-text-field>
    </div>
<br>
<div style="display:flex;width:100;height:30px">
    <!-- <label>Min Spec</label> -->
    <v-text-field outlined dense color="white" style="margin:4px" v-model="qasForm1New[form.ielpt_one]" label="Ielpt One"></v-text-field>
    <v-text-field outlined dense color="white" style="margin:4px" v-model="qasForm1New[form.ielpt_two]" label="Ielpt Two"></v-text-field>
    
    </div>
     <br>
     <div>
        <v-text-field outlined dense v-model="qasForm1New[form.remarks]" label="Remark"></v-text-field>
        </div>
<div>
    <!-- <v-text-field></v-text-field> -->
</div>

</div>
</div>



<div>


</div>


</div>
      </v-card>
    </v-dialog>


 <v-dialog
      v-model="productFormatDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="productFormatDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="red" style="color:white" @click="submitQasForm1Array">Validate</v-btn>
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
<tr  v-for="(productFormat , index) in selectedPartNoItem.productConfigFormat" :key="'product'+index">

<td >
  <span style="font-size:14px">{{productFormat.label}}</span>
    <input    class="interInput"  :disabled="productFormat.disable" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
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
<div style="    background: #f13454;
    padding: 9px;
    color: white;
    border-radius: 29px;
    font-weight: 300;">
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
<v-icon @click="takePhoto.splice(index,1)">fa-trash</v-icon>
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
import * as core from '../lib/core'
import { create, all } from 'mathjs'
const math = create(all,  {})
import { Camera, CameraResultType } from '@capacitor/camera';
export default {

    data(){

        return {
            qasForm1New:{},
            qasHeaderNew:{},
            fileTypeDialog:false,
selected_gallery:0,
qasForm1NewDialog:false,

            qasForm2Dialog:false,//product list dialog
            galleryDialog:false,
            header:{ },
            // takePhoto:[]
            // ,
            productFormatDialog:false,
            productsFormat:core.observation(this).productFormat
        }
    },
    computed:{
        selectedPartNoItem(){

return this.$store.state.interplex.selectedPartNoItem||{};
        },
takePhoto:{
    get(){
var $vm=this;
var ref=$vm.$store.state.interplex.selectedPartNoItem.ref;
if($vm.$store.state.interplex.tempInvoice[ref])
return ($vm.$store.state.interplex.tempInvoice[ref].gallery)||[]//selectedPartNoItem
return []
    },
    set(value){
        console.log(value)
    }

},
remarks:{
  get(){
var $vm=this;
var ref=$vm.$store.state.interplex.selectedPartNoItem.ref;
if($vm.$store.state.interplex.tempInvoice[ref])
return ($vm.$store.state.interplex.tempInvoice[ref].remarks)||''//selectedPartNoItem
return ''
},
    set(value){
        console.log(value)
    }

},
    },
  async  mounted(){
        var $vm=this;
        // console.log("qs selectedPartNoItem")
// console.log($vm.$store.state.interplex.selectedPartNoItem)
await $vm.$store.dispatch('readUploadType')

$vm.qasForm1New=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)

console.log("atoo",core.arrayToObj($vm.selectedPartNoItem.productConfigFormat))
},
watch:{


"selectedPartNoItem.qasForm2":{
    handler(value){
        var $vm=this;
        console.log('value...',value)

if(value.length!=0){

var singleBatchProduct=value[0]
$vm.qasForm1New['width_sup_one']=singleBatchProduct.width_one;
$vm.qasForm1New['width_sup_two']=singleBatchProduct.width_two;
$vm.qasForm1New['thickness_sup_one']=singleBatchProduct.thick_one;
$vm.qasForm1New['thickness_sup_two']=singleBatchProduct.thick_two;
var weight=_.sumBy($vm.selectedPartNoItem.qasForm2,(qas2)=>parseFloat(qas2.weight))

$vm.selectedPartNoItem.headerConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.headerConfigFormat),(headerObj)=>{

if(headerObj.name=='invoice_qty'||headerObj.name=='received_qty')
{
    headerObj.value=parseFloat(weight||0);
}
return headerObj;
})


$vm.submitQasForm1new()

}

    },
    deep:true
}
},
    methods:{

submitQasForm1Array(){
var $vm=this;


_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(productFormat)=>{
    if(productFormat.rule!=''){


var scope=core.validateProductObjDataset($vm,_.cloneDeep($vm.qasForm1New));
// console.log(productFormat.name,math.evaluate(productFormat.rule,scope))
  

    if(productFormat.rule!=''){
                    // console.log("name",productFormat.name,"scope",scope,"rule",productFormat.rule,)

        if(math.evaluate(productFormat.rule,scope)){
  $vm.qasForm1New[productFormat.name]='ok';
            
        }
        else{
$vm.qasForm1New[productFormat.name]='check'
  }

    }
  
    }
})

$vm.selectedPartNoItem.productConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(x)=>{
    x.value=$vm.qasForm1New[x.name]
return x;
})

},


submitQasForm1new(){
var $vm=this;


_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(productFormat)=>{
    if(productFormat.rule!=''){


var scope=core.validateProductObjDataset($vm,_.cloneDeep($vm.qasForm1New));
// console.log(productFormat.name,math.evaluate(productFormat.rule,scope))
  

    if(productFormat.rule!=''){
                    // console.log("name",productFormat.name,"scope",scope,"rule",productFormat.rule,)

        if(math.evaluate(productFormat.rule,scope)){
  $vm.qasForm1New[productFormat.name]='ok';
            
        }
        else{
$vm.qasForm1New[productFormat.name]='check'
  }

    }
  
    }
})

$vm.selectedPartNoItem.productConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(x)=>{
    x.value=$vm.qasForm1New[x.name]
return x;
})

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
        checkErrorStatus(event,index,product){
var $vm=this;

var scope=core.validateProductArrayDataset($vm,$vm.selectedPartNoItem.productConfigFormat);
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
        watchValue(event,productFormat){
var $vm=this;
            // console.log(event.target.value)
            // console.log(productFormat)
// console.log( core.observation($vm).scope)
console.log(productFormat.rule)
if(productFormat.validation&&core.onlyNumbers(productFormat.value)){
var scope=core.validateProductArrayDataset($vm,$vm.selectedPartNoItem.productConfigFormat); //core.observation($vm).scope
scope[productFormat.name]=parseFloat(productFormat.value)       
console.log(math.evaluate(productFormat.rule,scope))
}

        }
    }
    
}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');

.defaultErorr{
    color:red !important;
}
.errorStatus{
//error_status:true
    color:green !important
}
</style>