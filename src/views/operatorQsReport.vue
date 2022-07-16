<template>
    <div>
<h3>Quality assurance Form</h3>
<br>
<div style="    display: flex;
    flex-wrap: wrap;">
<div style="width:32.5%;margin:1px" v-for="(header,index) in selectedPartNoItem.headerConfigFormat" :key="'header'+index">

<!-- <input class="interInput" v-model="header['value']" type="text" :placeholder="header.label" > -->

<!-- <div style="display:flex;" v-if="['supplier_name','invoice_no','invoice_date'].includes(header.name)">
<input class="interInput" v-model="header['supplier_name']" type="text" placeholder="Supplier" >
<input class="interInput" v-model="header['invoice_no']" type="text" placeholder="Invoice" >
<input class="interInput" v-model="header['invoice_date']" type="text" placeholder="Invoice Date" >
</div>
<div style="display:flex;" v-if="['ir','grn_no','grn_date'].includes(header.name)">
<input class="interInput" v-model="header['ir']" type="text" placeholder="Ir" >
<input class="interInput" v-model="header['grn_date']" type="text" placeholder="Date" >
<input class="interInput" v-model="header['grn_no']" type="text" placeholder="Grn No" >
</div>
<div style="display:flex;" v-if="['rmcode','eds','rm'].includes(header.name)">
<input class="interInput" v-model="header['rmcode']" type="text" placeholder="R/m Code" >
<input class="interInput" v-model="header['eds']" type="text" placeholder="EDS/QIP#" >
<input class="interInput" v-model="header['rm']" type="text" placeholder="RM" >
</div> -->
<div > 
<input class="interInput" v-model="header['value']" type="text" :placeholder="header.label" >

</div>

<!-- <div style="display:flex;">
<input class="interInput" v-model="header.invoice_qty" type="text" placeholder="INVOICE QTY" >
<input class="interInput" v-model="header.received_qty" type="text" placeholder="RECEIVED QTY" >

</div> -->

</div>
</div>
OBSERVATION
<div style="display:flex;">

<div @click="productFormatDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div>
<div @click="qasForm2Dialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-list</v-icon>
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
<tr class="rowColor" v-for="(productFormat , index) in selectedPartNoItem.qasForm2" :key="'product'+index">
    <td>{{index+1}}</td>
<td>
    <input  v-model="productFormat.batch_no" placeholder="coild # (Batch No)"  class="interInput"   type="text" >
    <input v-model="productFormat.lot_no" placeholder="sup coil #(Lot No)"  class="interInput"   type="text" >
    <input v-model="productFormat.width"  class="interInput"   type="text" placeholder="Width (W/KG)" >
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
    <input  @input="watchValue($event,productFormat)"   class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
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
    mounted(){
        var $vm=this;
        console.log("qs selectedPartNoItem")
console.log($vm.$store.state.interplex.selectedPartNoItem)
    },
    methods:{
        checkErrorStatus(event,index,product){
var $vm=this;

var scope=core.validateProductDataset($vm);
scope['width_one']=core.onlyNumbers(product['width_one'])?parseFloat(product['width_one']):0
console.log("scope",scope)
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
            console.log( core.observation($vm).scope)
                        console.log(productFormat.rule)

            if(productFormat.validation&&core.onlyNumbers(productFormat.value)){
         var scope= core.observation($vm).scope
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