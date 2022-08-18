<template>
    <div>
<h3>Quality assurance Form</h3>
<br>
<div style="    display: flex;
    flex-wrap: wrap;">
    <!-- {{$store.state.interplex.configHeaderFormat}} -->

<!-- {{header_form_gui}}
{{jsonselectedPartNoItem}} -->

<div style="display:flex;flex-wrap:wrap"  :key="'headergui'">
<div  class="flex-row-item"  v-for="(ui,index_sub) in header_form_gui.two" :key="'formOne'+index_sub" :style="{width:ui.width+'%'}">
<div v-if="getIndexHeader(ui.name)!=-1" >
     
    <!-- <v-text-field  style="margin:5px"   v-model="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].value" outlined dense >
    </v-text-field> -->
<div style="height: 45px;margin:2px 3px;"
       > 
 <!-- <div style="margin-right:2px" v-if="header.map!=''">   <v-icon style="color:green" :class="{isRed:header.value==''}">mdi-magnify-scan</v-icon></div> -->
<div v-if="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].input_type!='date'">
<!-- without map value -->
<v-text-field 
style="width:100%"
v-if="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].map==''"
 :label="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].label"  :type="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].input_type" dense outlined v-model="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].value"  :placeholder="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].label" >
</v-text-field>
<!-- with map value added icon -->

<v-text-field 
v-else
style="width:100%"
 append-icon="mdi-magnify-scan"
:label="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].label"  :type="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].input_type" dense outlined v-model="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].value"  :placeholder="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].label" >
</v-text-field>

</div>
<div v-else>
    <v-text-field  @click="headerDateShow = true" dense outlined v-model="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].value"  :label="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].label" >
</v-text-field>
<date-picker  @close="headerDateShow = false"
             v-if="headerDateShow"
             v-model="selectedPartNoItem.headerConfigFormat[getIndexHeader(ui.name)].value"
             :format="formatDate"
             ></date-picker>
</div>
</div>

</div>
</div> 


</div>
<!-- <div style="width:32.5%;margin:1px"  v-for="(header,index) in selectedPartNoItem.headerConfigFormat" :key="'header'+index">
<div style="    height: 45px;
    align-items: baseline;
"> 
<div v-if="header.input_type!='date'">
<v-text-field 
style="width:100%"
v-if="header.map==''"
 :label="header.label"  :type="header.input_type" dense outlined v-model="header['value']"  :placeholder="header.label" >
</v-text-field>

<v-text-field 
v-else
style="width:100%"

 append-icon="mdi-magnify-scan"
:label="header.label"  :type="header.input_type" dense outlined v-model="header['value']"  :placeholder="header.label" >
</v-text-field>

</div>
<div v-else>
    <v-text-field  @click="headerDateShow = true" dense outlined v-model="header['value']"  :placeholder="header.label" >
</v-text-field>
<date-picker  @close="headerDateShow = false"
             v-if="headerDateShow"
             v-model="header.value"
             :format="formatDate"
             ></date-picker>
</div>
</div>
</div> -->
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
 <!-- <v-dialog
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
<h3>QAS FORM 2</h3>
<div style="    height: 88vh;
    overflow: scroll;
">
        <table style="width:100%">
            <tr>
                <th></th>
                <th></th>
                <th></th>
              
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

      </tr>
        </table>
        </div>



</div>
      </v-card>
    </v-dialog> -->
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
          <v-btn text @click="Qas2Validate">Validate</v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM TWO</h3>
<!-- {{selectedPartNoItem}} -->
<div style="    height: 88vh;
    overflow: scroll;
">
<!-- {{selectedPartNoItem.qasForm2}} -->
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
<div  class="flex-row-container">
    <!-- {{productFormat}} -->
<!-- {{observation2_format_print_view}} -->

<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_two_ui.one" :key="'formOne'+index_sub" :style="{width:ui.width+'%'}">
<div  style="height:86px;padding:10px">
     <h4> {{ui.label}}:{{productFormat[ui.name]}}  </h4>

</div>
</div> 

<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_two_ui.two" :key="'form'+index_sub" :style="{width:ui.width+'%'}">
<!-- {{ui.name}}
{{ui.width}}
{{getIndex2(ui.name)}} -->
<!-- gg{{selectedPartNoItem.productConfigFormat2}} -->
<div v-if="getIndex2(ui.name)!=-1" style="height:86px;padding:10px">
     <h4> {{ui.label}}:  </h4>

    <v-text-field v-if="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].exp&&!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].sapHeader" :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense>
    </v-text-field>
    <div  v-else>
    
        <v-text-field v-if="selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].exp"   append-icon="fa-calculator"  :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense >
    </v-text-field>
        <v-text-field v-if="selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].sapHeader"   append-icon="mdi-magnify-scan"  :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model="productFormat[ui.name]" outlined dense>
    </v-text-field>
    </div>
</div>
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
    <div v-if="getIndex2('validation')!=-1">
<div v-if="selectedPartNoItem.productConfigFormat2[getIndex2('validation')].exp"></div>
    <v-icon class="defaultErorr" :class="{errorStatus:productFormat['validation']}">fa-check</v-icon>
    </div>
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
          <!-- <v-btn @click="submitQasForm1new" style="color:white" text>
            OK
          </v-btn> -->
          <v-btn :loading="qasFormOneValidateLoader" @click="validateQasFormOne" style="color:white" text>
            validate
          </v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<h3>QAS FORM ONE</h3>
<!-- {{qasForm1New}} -->
<!-- {{selectedPartNoItem.observation_print_view}} -->
<div  style="    padding: 10px 20px;
    margin: 8px;
" class="rowColor" v-for="(form,index) in selectedPartNoItem.observation_print_view" :key="index+'form'">
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
    {{ui.label}}:{{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}

</div>
<div v-else>
    <div v-if="getIndex(form[ui.name])!=-1">
   <span style="margin-right:5px"> {{ui.label}}:{{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}</span> <v-icon  v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp">fa-calculator</v-icon>


</div>
</div>

</div>

</div>
<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_one_ui.two" :key="'form_'+index_sub" :style="{width:ui.width+'%'}">
        <!-- <div style="background:lightgrey"> -->

<div v-if="ui.name=='no'">
NO:{{index+1}}
</div>
 <div v-if="!['no'].includes(ui.name)&&getIndex(form[ui.name])!=-1">
<div v-if="ui.name=='desc'">
   {{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}
</div>

<div v-else>
<div v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable" style="height:45px">
    <!-- <h4> {{ui.label}}:  </h4> -->
    <!-- normal -->
    <v-text-field v-if="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp&&!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].sapHeader" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>
    <div  v-else>
    
        <v-text-field v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp"   append-icon="fa-calculator" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>
        <v-text-field v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].sapHeader"   append-icon="mdi-magnify-scan" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>

</div>
 </div>
<div v-else>
   <h4> {{ui.label}}:{{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}</h4>

</div>
</div>

</div>

</div>


<div >

</div>


<!-- <div class="flex-row-item"  v-for="(key,index_sub) in Object.keys(form)" :key="'form'+index_sub">
<div v-if="key=='no'">
NO:{{index+1}}
</div>
<div v-if="key=='desc'&&getIndex(form[key])!=-1">
<span v-if="selectedPartNoItem.productConfigFormat[getIndex(form[key])].value!=''">
    {{selectedPartNoItem.productConfigFormat[getIndex(form[key])].label+'('+key+')'}}
    <v-text-field  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[key])].editable"  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[key])].value" outlined dense >
    </v-text-field>
</span>
<span v-else>
    {{selectedPartNoItem.productConfigFormat[getIndex(form[key])].label+'('+key+')'}}
    <v-text-field  style="margin:5px" :disabled="true"   outlined dense >
    </v-text-field>
    </span>
</div>

<div v-if="!['no','desc'].includes(key)&&getIndex(form[key])!=-1">

{{selectedPartNoItem.productConfigFormat[getIndex(form[key])].label+'('+key+')'}}
<v-text-field  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[key])].editable" v-if="selectedPartNoItem.productConfigFormat[getIndex(form[key])].editable"  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[key])].value" outlined dense >
</v-text-field>
<v-text-field  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[key])].editable" v-else  v-model="selectedPartNoItem.productConfigFormat[getIndex(form[key])].value" outlined dense >
</v-text-field>

</div>
</div> -->
</div>
     </div>  </div>
      </v-card>
    </v-dialog>

 <!-- <v-dialog
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
<h3>QAS FORM One</h3>
<div  style="    padding: 10px 20px;
    margin: 8px;
" class="rowColor" v-for="(form,index) in selectedPartNoItem.observation_print_view" :key="index+'form'">
<div style="background: white;
    padding: 6px 15px;
    border-radius: 24px;
    box-shadow: 4px 9px burlywood;">
<b>{{index+1}}.{{form.desc}}</b><br>
<b>{{qasForm1New[form.unit]}}</b><br>
<div style="display:flex;justify-content:space-around">
<b>Min spec :{{qasForm1New[form['min_spec']]}}</b>
<b>Max spec :{{qasForm1New[form['max_spec']]}}</b>
</div>
</div>
<div style="">
    <div style="">
    </div><br>
<div style="display:flex;width:100%;height:30px">
    <v-text-field outlined color="white" style="margin:4px" dense v-model="qasForm1New[form.sup_one]" label="Min Spec"></v-text-field>
    <v-text-field outlined color="white" style="margin:4px" dense v-model="qasForm1New[form.sup_two]" label="Max Spec"></v-text-field>
    </div>
<br>
<div style="display:flex;width:100;height:30px">
    <v-text-field outlined dense color="white" style="margin:4px" v-model="qasForm1New[form.ielpt_one]" label="Ielpt One"></v-text-field>
    <v-text-field outlined dense color="white" style="margin:4px" v-model="qasForm1New[form.ielpt_two]" label="Ielpt Two"></v-text-field>
    
    </div>
     <br>
     <div>
        <v-text-field outlined dense v-model="qasForm1New[form.remarks]" label="Remark"></v-text-field>
        </div>
<div>
</div>

</div>
</div>



<div>


</div>


</div>
      </v-card>
    </v-dialog> -->

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
<h3>QAS FORM INPUTS</h3>
<!--note: productConfigFormat is observation_format-->
<!-- {{selectedPartNoItem}} -->
<tr  v-for="(productFormat , index) in selectedPartNoItem.productConfigFormat" :key="'product'+index">

<td >
  <!-- <span style="font-size:14px">{{productFormat.label}}</span> -->
    <!-- <input     class="interInput"  :disabled="!productFormat.editable" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" > -->
<!-- {{productFormat}} -->
 <!-- SAP MAP -->
 <div style="display:flex;align-items:baseline" v-if="productFormat.sapHeader">
 <div>   <v-icon style="color:green" :class="{isRed:productFormat.value==''}">mdi-magnify-scan</v-icon></div>
<v-text-field style="margin-right:2px"  dense outlined :disabled="!productFormat.editable" v-model="productFormat.value"  type="text" :label="productFormat.label+'('+productFormat.name+')'"></v-text-field>
<div><b>Key: "{{productFormat.sapHeader}}"&nbsp;{{productFormat.value==''?'Not Found':'Found'}}</b></div>

 </div>
 <!-- SAP WITHOUT MAP -->
<v-text-field v-else  dense outlined :disabled="!productFormat.editable" v-model="productFormat.value"  type="text" :label="productFormat.label+'('+productFormat.name+')'"></v-text-field>
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
import moment from 'moment'
import * as core from '../lib/core'
import _ from 'lodash'
import { create, all, string } from 'mathjs'
const math = create(all,  {})



// create a function

function NumberObj(obj){
  return core.validateNumberObj(obj)
}
function NumberArray(array){
  return _.map(array,(obj)=>{
    return core.validateNumberObj(obj)
  })
}


function minBy(array, key) {
  return _.minBy(array,(x)=>parseFloat(x[key]||0))[key]
}
function maxBy(array, key) {
  return _.maxBy(array,(x)=>parseFloat(x[key]||0))[key]
}

function sumBy(array, key) {
  return _.sumBy(array,(x)=>parseFloat(x[key]||0))
}
function meanBy(array, key) {
  return _.meanBy(array,(x)=>parseFloat(x[key]||0))
}


// attach a transform function to the function addIt
NumberObj.transform = function (obj) {
   return NumberObj(obj)
}
// attach a transform function to the function addIt
NumberArray.transform = function (obj) {
   return NumberArray(obj)
}

// attach a transform function to the function addIt
minBy.transform = function (array,key) {
   return minBy(array,key)
}
// attach a transform function to the function addIt
maxBy.transform = function (array,key) {
   return maxBy(array,key)
}
// attach a transform function to the function addIt
sumBy.transform = function(array,key) {
   return sumBy(array,key)
}
// attach a transform function to the function addIt
meanBy.transform = function (array,key) {
   return meanBy(array,key)

}

// import the function into math.js
math.import({
minBy: minBy,
maxBy: maxBy,
sumBy: sumBy,
meanBy: meanBy,
NumberObj,
NumberArray
})


// console.log("qas report")
// alert("work")
// console.log('2+4=' + math.evaluate('addIt(2, 4)'))


import { Camera, CameraResultType } from '@capacitor/camera';
export default {

    data(){

        return {
            header_form_gui:[],
            headerDateShow:false,
            qasFormOneValidateLoader:false,
            qas_form_one_ui:[],
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

    observation2_format_print_view(){
var $vm=this;
return  _.reduce($vm.selectedPartNoItem.observation2_print_view, function(result, value, key) {
    result[value.name]=value.name||''
    // console.log("check--",key,value)
    return result;
  }, {});

    },
    getIndexHeader(){
var $vm=this;
return (name)=>{
    return _.findIndex($vm.selectedPartNoItem.headerConfigFormat, x => {
                    return x.name == name;
                });
           
}
    },
                    getIndex2() {
            var $vm = this;
            return name => {
                return _.findIndex($vm.selectedPartNoItem.productConfigFormat2, x => {
                    return x.name == name;
                });
            };
        },
                getIndex() {
            var $vm = this;
            return name => {
                return _.findIndex($vm.selectedPartNoItem.productConfigFormat, x => {
                    return x.name == name;
                });
            };
        },

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
    created(){
        var $vm=this;
$vm.qas_form_one_ui=_.cloneDeep($vm.$store.state.interplex.qas_form_one_ui);
$vm.qas_form_two_ui=_.cloneDeep($vm.$store.state.interplex.qas_form_two_ui);



    },
  async  mounted(){
        var $vm=this;
        console.log("qs selectedPartNoItem")
console.log($vm.$store.state.interplex.selectedPartNoItem)
await $vm.$store.dispatch('readUploadType')

$vm.header_form_gui=_.cloneDeep($vm.$store.state.interplex.header_form_gui);
$vm.qasForm1New=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)

console.log("atoo",core.arrayToObj($vm.selectedPartNoItem.productConfigFormat))
},
watch:{

// "selectedPartNoItem.headerConfigFormat":{
// handler(){
//     var $vm=this;
// _.map($vm.selectedPartNoItem.headerConfigFormat,(input)=>{

// if(input.input_type=='date'){

//     input.value=moment(String(input.input_type||'')).format("YYYY-MM-DD")
// }
// })

// },
// deep:true,

// }

// "selectedPartNoItem.qasForm2":{
//     handler(value){
//         var $vm=this;
//         console.log('value...',value)

// if(value.length!=0){

// var singleBatchProduct=value[0]
// $vm.qasForm1New['width_sup_one']=singleBatchProduct.width_one;
// $vm.qasForm1New['width_sup_two']=singleBatchProduct.width_two;
// $vm.qasForm1New['thickness_sup_one']=singleBatchProduct.thick_one;
// $vm.qasForm1New['thickness_sup_two']=singleBatchProduct.thick_two;
// var weight=_.sumBy($vm.selectedPartNoItem.qasForm2,(qas2)=>parseFloat(qas2.weight))

// $vm.selectedPartNoItem.headerConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.headerConfigFormat),(headerObj)=>{

// if(headerObj.name=='invoice_qty'||headerObj.name=='received_qty')
// {
//     headerObj.value=parseFloat(weight||0);
// }
// return headerObj;
// })


// $vm.submitQasForm1new()

// }

//     },
//     deep:true
// }
},
    methods:{
        formatDate (date) {
  return moment(date).format("YYYY-MM-DD")
},
        Qas2Validate(){
var $vm=this;

$vm.checkQas2Rules()
        },
checkQas2Rules(){
    var $vm=this;
//Observationformat array to object for scope
var scope={}
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)
scope['QasOne']=observation_format;
//core.validateProductObjDataset($vm,_.cloneDeep(observation_format));

scope['QasTwo']=$vm.selectedPartNoItem.qasForm2
// _.map($vm.selectedPartNoItem.qasForm2,(obj)=>{
//     return core.validateProductObjDataset($vm,_.cloneDeep(obj))
// })

// var observation2_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat2)
//Observationformat array to object for scope

console.log("++++++++scope++++++++")
console.log(scope,'QasTwoEach')
_.map($vm.selectedPartNoItem.qasForm2,(product)=>{

scope['QasTwoEach']=product;
//core.validateProductObjDataset($vm,_.cloneDeep(product));
console.log("scope",scope)

var which_feild_have_rule=_.cloneDeep($vm.selectedPartNoItem.productConfigFormat2);
return _.map(which_feild_have_rule,(ob_format)=>{

// console.log("scope",scope)
if(ob_format.exp){
    console.log("exp",ob_format)
ob_format.value=product[ob_format.name]||NaN

if(ob_format.exp.rule!=''){
    console.log("scope",scope,ob_format.exp.rule)
console.log("exp_>",math.evaluate(ob_format.exp.rule,scope))

var evaluate=math.evaluate(ob_format.exp.rule,scope);
console.log("evaluate",ob_format)
 if(evaluate){
if(ob_format.exp.success=='_default_'){

// ob_format.value=evaluate
product[ob_format.name]=evaluate
// $vm.$set()
ob_format.exp.status=true;
}
else
{
       if(ob_format.exp.success==''){
ob_format.exp.status=true;

    }
 else{
ob_format.value=ob_format.exp.success;
 product[ob_format.name]=ob_format.exp.success;
 ob_format.exp.status=true;

 }
}}
 else{
if(ob_format.exp.failure=='_default_')
{
    // ob_format.value=evaluate;
ob_format.exp.status=false;
product[ob_format.name]=evaluate;//math.evaluate(ob_format.exp.rule,scope);
}
else{
    if(ob_format.exp.failure==''){
ob_format.exp.status=false;

    }
    else{
ob_format.value=ob_format.exp.failure;
product[ob_format.name]=ob_format.exp.failure;
ob_format.exp.status=false;

    }}

}

    }
    }

// return product;
})




return ob_format;    
})


},

checkSapLog(key){

return 'Please Check key "'+key+'" if value not found'
},
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

checkQasOneRules(){
var $vm=this;
var scope={}
//Observationformat array to object for scope
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)
// var scope=core.validateProductObjDataset($vm,_.cloneDeep(observation_format));
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)
scope['QasOne']=observation_format
//core.validateProductObjDataset($vm,_.cloneDeep(observation_format));

scope['QasTwo']=$vm.selectedPartNoItem.qasForm2;
// _.map($vm.selectedPartNoItem.qasForm2,(obj)=>{
//     return core.validateProductObjDataset($vm,_.cloneDeep(obj))
// })
//$vm.selectedPartNoItem.qasForm2

console.log("++++++++scope++++++++")
console.log(scope)

$vm.selectedPartNoItem.productConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(ob_format)=>{

if(ob_format.exp){
console.log(ob_format.exp.rule)
console.log("exp_>",scope,ob_format.exp.rule,math.evaluate(ob_format.exp.rule,scope))
if(ob_format.exp.rule!=''){
 if(math.evaluate(ob_format.exp.rule,scope)){
if(ob_format.exp.success=='_default_'){
ob_format.value=math.evaluate(ob_format.exp.rule,scope);
ob_format.exp.status=true;
}
else
{
           if(ob_format.exp.success==''){
ob_format.exp.status=true;

    }
else{
ob_format.value=ob_format.exp.success;
ob_format.exp.status=true;
}
}
}
        else{
if(ob_format.exp.failure=='_default_')
{ob_format.value=math.evaluate(ob_format.exp.rule,scope);
ob_format.exp.status=false;
}
else{

   if(ob_format.exp.failure==''){
ob_format.exp.status=false;

    }
 else{
ob_format.value=ob_format.exp.failure;
ob_format.exp.status=false;

 }
}
  }

    }
    }
return ob_format;    
})



},

validateQasFormOne(){
var $vm=this;
$vm.qasFormOneValidateLoader=true;
$vm.checkQasOneRules()
setTimeout(() => {
    $vm.qasFormOneValidateLoader=false
}, 1000);
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
// console.log(productFormat.rule)
// if(productFormat.validation&&core.onlyNumbers(productFormat.value)){
// var scope=core.validateProductArrayDataset($vm,$vm.selectedPartNoItem.productConfigFormat); //core.observation($vm).scope
// scope[productFormat.name]=parseFloat(productFormat.value)       
// console.log(math.evaluate(productFormat.rule,scope))
// }

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
.isRed{
    color:red !important
}
.flex-row-container {

    display: flex !important;
    flex-wrap: wrap !important;
    // align-items: center;
    // justify-content: center;
}
.flex-row-container > .flex-row-item {
    // flex: 1 1 50%; /*grow | shrink | basis */
    // height: 70px;
}

.flex-row-item {
//   border: 1px solid #f76707;
}
</style>