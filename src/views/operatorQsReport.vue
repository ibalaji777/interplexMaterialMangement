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
        <div style="display: flex;
    justify-content: space-between;
    width: 100%;">
   <div style="padding:5px"><b>Pass</b>
<div style="display:flex;">
<div  style="margin:2px" v-for="(pass,index) in qas2Result.pass" :key="'pass'+index">
{{pass.No}}.    <v-icon @click="scrollToErrorSpot(pass.No)" style="color:green;" class="pass_and_fail_icon">fa-check</v-icon>
</div>
</div>
   </div>  
        <h5 style="text-align:right">QAS FORM TWO</h5>
        </div>
        <div style="display:flex;justify-content:space-between">

<div style="display: flex;
    justify-content: space-between;
    width: 100%;">
    <div style="padding:5px">
        <!-- <b>Pass</b> -->
<!-- <div style="display:flex;">
<div  style="margin:2px" v-for="(pass,index) in qas2Result.pass" :key="'pass'+index">
{{pass.No}}.    <v-icon @click="scrollToErrorSpot(pass.No)" style="color:green;" class="pass_and_fail_icon">fa-check</v-icon>
</div>
</div> -->
<b>Fail</b>
<div style="display:flex;">
<div @click="scrollToErrorSpot(pass.No)"  style="margin:2px" v-for="(pass,index) in qas2Result.fail" :key="'pass'+index">
{{pass.No}}
    <v-icon class="pass_and_fail_icon" style="color:red;">fa-check</v-icon>

</div>
</div>
</div>
<div>
 <v-switch
      v-model="qasForm2Validation"
      :label="'Real Time Validation'"
    ></v-switch>
    </div>
</div>
<!-- {{selectedPartNoItem}} -->

</div>

<div style=" outline: darkblue;">
<div style="          height: 75vh;
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

<tr :id="qasTwoLink(index)" class="rowColor" v-for="(productFormat , index) in selectedPartNoItem.qasForm2" :key="'product'+index">
    <td style="padding:10px">{{index+1}}</td>
<td>
<div style="    padding: 20px 7px;"  class="flex-row-container">
    <!-- {{productFormat}} -->
<!-- {{$store.state.qasForm2Validation}} -->
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
<div v-if="getIndex2(ui.name)!=-1" style="height:66px;padding:10px">
     <!-- <h4> {{ui.label}}:  </h4> -->

    <v-text-field :label="ui.label" v-debounce="delay" @keyup="watchQasTwo" v-if="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].exp&&!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map" :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model.lazy="productFormat[ui.name]" outlined dense>
    </v-text-field>
    <div  v-else>
    
        <v-text-field :label="ui.label" v-debounce="delay" @keyup="watchQasTwo" v-if="selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].exp"   append-icon="fa-calculator"  :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model.lazy="productFormat[ui.name]" outlined dense >
    </v-text-field>
    <div style="position:relative" v-if="selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map">
        <v-text-field :messages="'Map From '+selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map.mapFrom+' Search Of '+selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map.map+''"  :label="ui.label" v-debounce="delay" @keyup="watchQasTwo"    append-icon="mdi-magnify-scan"  :disabled="!selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].editable"  v-model.lazy="productFormat[ui.name]" outlined dense>
    </v-text-field>
   <!-- <span style="margin:0;padding:0"> {{selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map.mapFrom}}" "    {{selectedPartNoItem.productConfigFormat2[getIndex2(ui.name)].map.map}}</span> -->
    </div>
    </div>
</div>
</div> 

</div>
</td>
<td class="qas2inter_tick_bg" >
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
<v-icon class="defaultErorr" v-if="productFormat['validation']" :class="{errorStatus:productFormat['validation']}">fa-check</v-icon>
<v-icon style="font-size:33px" class="defaultErorr" v-else :class="{errorStatus:productFormat['validation']}">mdi-close</v-icon>
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
<div style="display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;">
    <div>
<v-btn @click="qasOneExcel=true" color="primary">Table</v-btn>
    </div>
    <div style="display:flex;justify-content:flex-end">
 <v-switch
      v-model="qasForm1Validation"
      :label="'Real Time Validation'"
    ></v-switch>
    </div>
    </div>
<div  style="    padding: 10px 20px;
    margin: 8px;
" class="rowColor" v-for="(form,index) in selectedPartNoItem.observation_print_view" :key="index+'form'">
<div style="background: white;
    padding: 6px 15px;
    border-radius: 24px;
    box-shadow:#9087de 4px 9px;" class="flex-row-container">



<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_one_ui.one" :key="'form'+index_sub" :style="{width:ui.width+'%'}">
<div v-if="ui.name=='no'">
<b>No:{{index+1}}</b>
</div>


 <div v-if="!['no'].includes(ui.name)&&getIndex(form[ui.name])!=-1">

<div v-if="ui.name=='desc'">
 <b>{{ui.label}}:{{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}</b>
</div>
<div v-else>
    <div v-if="getIndex(form[ui.name])!=-1">
   <span style="margin-right:5px"><b>{{ui.label}}:{{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}</b></span> <v-icon  v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp">fa-calculator</v-icon>


</div>
</div>

</div>

</div>
<div  class="flex-row-item"  v-for="(ui,index_sub) in qas_form_one_ui.two" :key="'form_'+index_sub" :style="{width:ui.width+'%'}">
        <!-- <div style="background:lightgrey"> -->

<div v-if="ui.name=='no'">
<b>No:{{index+1}}</b>
</div>
 <div v-if="!['no'].includes(ui.name)&&getIndex(form[ui.name])!=-1">
<div v-if="ui.name=='desc'">
  <b> {{selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value}}</b>
</div>

<div v-else>
<div v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable" style="height:45px">
    <!-- <h4> {{ui.label}}:  </h4> -->
    <!-- normal -->
    <v-text-field @keyup="watchQasOne" v-debounce="delay" v-if="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp&&!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].map" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model.lazy="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>
    <div  v-else>
    
        <v-text-field @keyup="watchQasOne" v-debounce="delay" v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].exp"   append-icon="fa-calculator" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model.lazy="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
    </v-text-field>
        <v-text-field  :messages="'Map From '+selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].map.mapFrom+' Search Of '+selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].map.map+''"  @keyup="watchQasOne" v-debounce="delay" v-if="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].map"   append-icon="mdi-magnify-scan" :label="ui.label"  style="margin:5px" :disabled="!selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].editable"  v-model.lazy="selectedPartNoItem.productConfigFormat[getIndex(form[ui.name])].value" outlined dense >
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
 <div style="display:flex;align-items:baseline" v-if="productFormat.map">
 <div>   <v-icon style="color:green" :class="{isRed:productFormat.value==''}">mdi-magnify-scan</v-icon></div>
<v-text-field style="margin-right:2px"  dense outlined :disabled="!productFormat.editable" v-model="productFormat.value"  type="text" :label="productFormat.label+'('+productFormat.name+')'"></v-text-field>
<div><b>Key: "{{productFormat.map0}}"&nbsp;{{productFormat.value==''?'Not Found':'Found'}}</b></div>

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

<!-- *********************Gallery Viewer************************ -->
       <v-dialog
      v-model="galleryViewerDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Gallery Viewer</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="galleryViewerDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>

<div>
    <!-- <v-btn @click="reduceImage">Compress</v-btn> -->
    <img style="max-width:700px" :src="selectedImage" />
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
          <v-toolbar-title>Document</v-toolbar-title>
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

<!-- <div  ref="btnPdf" id="btn-scan"  class="insertProduct">
<v-icon>mdi-pdf</v-icon>
</div> -->

</div>
<!-- <div id="btn-upload"></div>
<p class="text-danger mt-1" id="download-app" style="display:none;">No Scan app application found in your machine. Please download, install and open first then refresh the browser. <a href="Scan_App_SetUp.msi" download>Download app</a></p>
<br> -->

<div style="  margin-top:25px;  background: #f13454;
    padding: 9px;
    color: white;
    border-radius: 29px;
    font-weight: 300;">


Total Documents:{{takePhoto.length}}
</div>
<div class="productContainer">
<!-- {{takePhoto}} -->
<div v-for="(image,index) in takePhoto" :key="index+image" class="productItems" >
    <div style="display: flex;
    justify-content: space-between;" v-if="image.file_type=='image'">
<img  @click="selectedImage=image.src;galleryViewerDialog=true"  :src="image.src" alt="" style="max-width:100px;max-height:100px">
<div style="display:flex;align-items:center;"><span v-if="image.file_type=='image'" @click="selectGalleryType(index)" style="width: 40px;
    height: 40px;
    border: 1px dashed #ffeb3b;
    display: flex;
    justify-content: center;
    align-items: center;cursor:pointer">
+
</span>
<span style="
    padding: 10px 5px;" v-else @click="selectGalleryType(index)">
{{image.title}}
</span>
</div>
<v-icon @click="takePhoto.splice(index,1)">fa-trash</v-icon>
</div>

<div style="display: flex;
    justify-content: space-between;" v-if="image.file_type=='pdf'">
<v-icon  @click="pdfUrl=image.url;pdfViewerDialog=true">fa-file-pdf</v-icon>
<!-- {{image}} -->
<div style="display:flex;align-items:center;"><span v-if="image.file_type=='pdf'" @click="selectGalleryType(index)" style="width: 40px;
    height: 40px;
    border: 1px dashed #ffeb3b;
    display: flex;
    justify-content: center;
    align-items: center;cursor:pointer">
+
</span>
<span style="
    padding: 10px 5px;" v-else @click="selectGalleryType(index)">
{{image.title}}
</span>
</div>
<v-icon @click="takePhoto.splice(index,1)">fa-trash</v-icon>

</div>

</div>
<!-- <div class="productItems">
Items
</div>
<div class="productItems">
Items
</div> -->
</div>

<div style="margin-top:15px">
<b >Scanner App Status:</b><div v-if="scannerConnectionAppStatus">Found</div>
<div v-else>Not Found</div>

<!-- <div><b style="color:red">Note:</b></div> -->
<div v-if="!scannerConnectionAppStatus"><b style="color:red">Note:</b> Install Scan App and Reload/Restart App</div>

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

<!-- *******************qasone Excel************************ -->
 <v-dialog
      v-model="qasOneExcel"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="qasOneExcel = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
        
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
     <div>

         <div >
    <h2 class="table-title" contenteditable="true">Sales</h2>
    <table class="inter_table_excel">
    <tr class="inter_table_header_excel">
      <th contenteditable=true>Year</th>
      <th contenteditable=true>Product A</th>
      <th contenteditable=true>Product B</th>
      <th contenteditable=true>Product C</th>
      <th contenteditable=true>Product D</th>
    </tr>
    <tr>
      <td contenteditable=true>2010</td>
      <td contenteditable=true>2</td>
      <td contenteditable=true>31</td>
      <td contenteditable=true>24</td>
      <td contenteditable=true>51</td>
    </tr>
    <tr>
      <td contenteditable=true>2011</td>
      <td contenteditable=true>36</td>
      <td contenteditable=true>21</td>
      <td contenteditable=true>47</td>
      <td contenteditable=true>109</td>
    </tr>
    <tr>
      <td contenteditable=true>2012</td>
      <td contenteditable=true>56</td>
      <td contenteditable=true>9</td>
      <td contenteditable=true>33</td>
      <td contenteditable=true>18</td>
    </tr>
    <tr>
      <td contenteditable=true>2013</td>
      <td contenteditable=true>90</td>
      <td contenteditable=true>55</td>
      <td contenteditable=true>71</td>
      <td contenteditable=true>12</td>
    </tr>
    <tr>
      <td contenteditable=true>2014</td>
      <td contenteditable=true>36</td>
      <td contenteditable=true>92</td>
      <td contenteditable=true>77</td>
      <td contenteditable=true>61</td>
    </tr>
  </table>
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
// const reduce = require('image-blob-reduce')();
import reduce from 'image-blob-reduce'
import * as scanApp from '../lib/scaApp.js'
const math = create(all,  {})
import blobUtil from 'blob-util'
import imageCompression from 'browser-image-compression';

// create a function
const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }


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

function defaultDateFormat(date) {
  return moment(date).format("YYYY-MM-DD");
}

function customDateFormat(date,format) {
  return moment(date).format(format);
}

defaultDateFormat.transform = function (date) {
   return defaultDateFormat(date)
}
customDateFormat.transform = function (date,format) {
   return customDateFormat(date,format)
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
            qasOneExcel:false,
            scannerConnectionAppStatus:false,
                    pdfUrl:'',
        pdfViewerDialog:false,
         galleryViewerDialog:false,
         selectedImage:'',
         disableScanBtn:false,
            delay:2000,
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

        qas2Result(){
            var $vm=this;
          var i=1;
          var pass=[];
          var fail=[]
          _.map($vm.selectedPartNoItem.qasForm2,(productFormat)=>{
            console.log("pass or fail"+i+1,productFormat.validation)
               if(productFormat.validation)
               {
                pass.push({No:i,validation:productFormat['validation']})

               }
               else{
                fail.push({No:i,validation:productFormat['validation']})

               } 
               i++;
            })
            return {
                pass,
                fail
            }
        },
        qasForm1Validation:{
get(){
    var $vm=this;
return $vm.$store.qasForm1Validation
},
set(value){
        var $vm=this;
$vm.$store.commit('setQasForm1Validation',value)
}
},

qasForm2Validation:{
get(){
        var $vm=this;
return $vm.$store.qasForm2Validation
},
set(value){
        var $vm=this;
$vm.$store.commit('setQasForm2Validation',value)
}
},
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
takePhoto(){
var $vm=this;
var ref=$vm.$store.state.interplex.selectedPartNoItem.ref;
if($vm.$store.state.interplex.tempInvoice[ref]){
return ($vm.$store.state.interplex.tempInvoice[ref].gallery)||[]//selectedPartNoItem
}
return [];
},
remarks:{
  get(){
var $vm=this;
var ref=$vm.$store.state.interplex.selectedPartNoItem.qasRef;
if($vm.$store.state.interplex.tempRemarks[ref])
return ($vm.$store.state.interplex.tempRemarks[ref].remarks)||''//selectedPartNoItem
return ''
},
    set(value){
        var $vm=this;
        console.log(value)
        var ref=$vm.$store.state.interplex.selectedPartNoItem.qasRef;

        $vm.$store.commit('remarks',{ref,value})
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
        console.log("++++++selectedPartNoItem++++++")
console.log($vm.$store.state.interplex.selectedPartNoItem)
await $vm.$store.dispatch('readUploadType')

$vm.header_form_gui=_.cloneDeep($vm.$store.state.interplex.header_form_gui);
$vm.qasForm1New=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)

console.log("atoo",core.arrayToObj($vm.selectedPartNoItem.productConfigFormat))
scanApp.start($vm,async (action,data)=>{

if(action=='success'){
$vm.scannerConnectionAppStatus=true;
}
if(action=='error'){
$vm.scannerConnectionAppStatus=false;
}
if(action=='base64'){
  $vm.$store.commit('showLoader')

setTimeout(async ()=>{

    //-------------actual----------------
//     console.log("img data",data)
//   $vm.takePhoto.push({src:"data:image/png;base64,"+data,file_type:'image',title:''})
    //-------------actual----------------
  var base64ToBlob=await core.base64toBlob(data,'image/png')
const compressedFile = await imageCompression(base64ToBlob, options);

core.blobToBase64(compressedFile,(base64String)=>{
  console.log("+++compessed image++++")
  console.log(base64String)
  $vm.takePhoto.push({src:"data:image/png;base64,"+base64String,file_type:'image',title:''})
            $vm.$store.commit('hideLoader')

})

},10)

}

})

},
watch:{


},
    methods:{
scrollToErrorSpot(no){
var $vm=this;
// console.log("element",element)
// var index=element-1;
console.log("element","qas2No"+no)

var container = document.getElementById("qas2No"+no);
container.scrollIntoView;

},

        qasTwoLink(index){
           return 'qas2No'+(index+1);
        },
// reduceImage(){
// var $vm=this;
// var base64ToBlob=core.base64toBlob($vm.selectedImage.split(",")[1])
// reduce
//   .toBlob(base64ToBlob, { max: 1000 })
//   .then(blob => { 
// blobUtil.blobToBase64String(blob).then(function (base64String) {
//   // success
// $vm.selectedImage=base64String
// }).catch(function (err) {
//   // error
// });


//   });
  
//   },
        
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
    createPdfFile(file) {
     
      var reader = new FileReader();
  

      reader.onload = (e) => {
    //------------pdf file
      };
      reader.readAsDataURL(file);
    },
openScanner(){
scanApp.openScanner(this)
},
        watchQasOne:_.debounce(function(){
var $vm=this;
// $vm.$nextTick(()=>{

if($vm.$store.state.qasForm1Validation){
$vm.validateQasFormOne()
}
// })
},500),
        watchQasTwo:_.debounce(function(){
var $vm=this;
// $vm.$nextTick(()=>{

if($vm.$store.state.qasForm2Validation){
$vm.Qas2Validate()
}
// })

        },500),
        formatDate (date) {
  return moment(date).format("YYYY-MM-DD")
},
        Qas2Validate(){
var $vm=this;

$vm.checkQas2Rules()
        },
checkQas2Rules(){
    var $vm=this;
    var rule="";
    try {
        
//Observationformat array to object for scope
var scope={}
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)

scope['Product']=$vm.selectedPartNoItem.dbProduct;
scope['QasOne']=observation_format;
//core.validateProductObjDataset($vm,_.cloneDeep(observation_format));

scope['QasTwo']=$vm.selectedPartNoItem.qasForm2
scope['currentDate']=moment().format("YYYY-MM-DD");
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
    } catch (error) {
        $vm.$alert(String(error)+rule,"Rule Failed Please Check",'error',{width:'850px'})

    }


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
var rule="";
var rule_index=1;
try {
    
var scope={}
//Observationformat array to object for scope
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)
// var scope=core.validateProductObjDataset($vm,_.cloneDeep(observation_format));
var observation_format=core.arrayToObj($vm.selectedPartNoItem.productConfigFormat)
scope['Product']=$vm.selectedPartNoItem.dbProduct;
scope['QasOne']=observation_format
//core.validateProductObjDataset($vm,_.cloneDeep(observation_format));

scope['QasTwo']=$vm.selectedPartNoItem.qasForm2;
scope['currentDate']=moment().format("YYYY-MM-DD");
// _.map($vm.selectedPartNoItem.qasForm2,(obj)=>{
//     return core.validateProductObjDataset($vm,_.cloneDeep(obj))
// })
//$vm.selectedPartNoItem.qasForm2

console.log("++++++++scope++++++++")
console.log(scope)

$vm.selectedPartNoItem.productConfigFormat=_.map(_.cloneDeep($vm.selectedPartNoItem.productConfigFormat),(ob_format)=>{

if(ob_format.exp){
// console.log(ob_format.exp.rule)
// console.log("exp_>",scope,ob_format.exp.rule,math.evaluate(ob_format.exp.rule,scope))
if(ob_format.exp.rule!=''){
        rule=ob_format.exp.rule;

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

} catch (error) {
console.log(error)
$vm.$alert(String(error)+rule,"Rule Failed Please Check",'error',{width:'850px'})
}


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
        this.takePhoto[selected_gallery].title=item.name;

    // this.takePhoto[selected_gallery].file_type=item.name;
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
 $vm.$store.commit('showLoader')
 setTimeout(async ()=>{

  // Here you get the image as result.
  const theActualPicture = image.dataUrl;
  console.log(theActualPicture)
     var base64ToBlob=await core.base64toBlob(theActualPicture.split(",")[1],'image/png')
  console.log(base64ToBlob)
const compressedFile = await imageCompression(base64ToBlob, options);
 console.log(compressedFile)
core.blobToBase64(compressedFile,(base64String)=>{
  console.log("+++compessed image++++")
  console.log(base64String)
  $vm.takePhoto.push({src:"data:image/png;base64,"+base64String,file_type:'image',title:''})
            $vm.$store.commit('hideLoader')

})

 },60)
// console.log(compressedFile)
// blobUtil.blobToBase64String(base64ToBlob).then(function (base64String) {
//   // success
//   console.log("+++compessed image++++")
//   console.log(base64String)
// // $vm.selectedImage=base64String
// }).catch(function (err) {
//   // error
// });

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



.custom-file-input{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'Select some files';
width:100%;
height:100%;
opacity:0;
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