<template>
    <div>
        <div style="display:flex;justify-content:flex-end">
                        <v-btn @click="productSettingDialog=true" outlined>
                config
            </v-btn>

        </div>
<h3 style="margin:10px 0">Product Format & Quality assurance Setting</h3>
<div>
<span >Supplier Name</span>
<input class="interInput" v-model="insertForm.supplier_name" type="text" placeholder="Supplier Name" >
</div>


<div>
<span >Product Name</span>
<input class="interInput" v-model="insertForm.product_name" type="text" placeholder="Product Name" >
</div>
<div>
<span >RM Code (Part NO)</span>
<input class="interInput" v-model="insertForm.rmcode" type="text" placeholder="Rm code (Part No)" >
</div>
<!-- <div>
<span >Batch</span>
<input class="interInput" v-model="insertForm.eds" type="text" placeholder="batch" >
</div> -->
<div>
<span >EDS</span>
<input class="interInput" v-model="insertForm.eds" type="text" placeholder="EDS " >
</div>
<div>
<span >RM </span>
<input class="interInput" v-model="insertForm.rm" type="text" placeholder="RM" >
</div>
<div>
<span >SKIP LEVEL</span>
<input class="interInput" v-model="insertForm.skiplevel" type="text" placeholder="skiplevel" >
</div>
<div>
<span >Form Format</span>
<input class="interInput" v-model="insertForm.form_format" type="text" placeholder="Form Format" >
</div>
<div>
<span >Due Date</span>
<!-- put date field here -->
<!-- <input class="interInput" v-model="insertForm.duedate" type="text" placeholder="Due Date" > -->

 <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="insertForm.duedate"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="insertForm.duedate"
            label="Picker in dialog"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="insertForm.duedate"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(insertForm.duedate)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</div>


<div v-for="(productFormat , index) in insertForm.observation_format" :key="'product'+index">

<div style="display:flex">
<span style="width:40%">{{productFormat.label}}</span>
<input style="width:60%" class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" ><v-icon @click="selectFieldSettingfn(productFormat)" style="margin:0 5px">fa-cog</v-icon>
</div>


</div>


<!-- <div style="display:flex;align-items:center">
<span >
<span >Width:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.width_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.width_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.width_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >thickness:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.thickness_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.thickness_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.thickness_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >hardness:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.hardness_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.hardness_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.hardness_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >elongation:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.elongation_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.elongation_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.elongation_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >tenstilstr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.tenstilstr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.tenstilstr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.tenstilstr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >yieldstr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.yieldstr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.yieldstr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.yieldstr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >cu:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.cu_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.cu_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.cu_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >pb:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.pb_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.pb_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.pb_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >bi:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.bi_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.bi_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.bi_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >o:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.o_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.o_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.o_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >others:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.others_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.others_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.others_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >slittingburr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.slittingburr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.slittingburr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.slittingburr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >twist:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.twist_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.twist_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.twist_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >camber:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.camber_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.camber_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.camber_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>

<div style="display:flex;align-items:center">
<span >
<span >surfacefinish:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.surfacefinish_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.surfacefinish_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.surfacefinish_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >thermalconduct:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.thermalconduct_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.thermalconduct_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.thermalconduct_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >density:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.density_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.density_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.density_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >coilweight:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.coilweight_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.coilweight_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.coilweight_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div> -->
<div style="display:flex;justify-content:flex-end;margin-top:25px">
<v-btn outlined @click="clear" style=";margin-right:10px;">Reset</v-btn>
<v-btn v-if="!isStateForUpdate" outlined @click="save" style="">Save</v-btn>
<v-btn v-else  @click="update" outlined>Update</v-btn>
</div>



<!-- ^^^^^^^^^^^^^^^^^^^^^^^^create field setting dialog^^^^^^^^^^^^^^^^^^^^ -->
 <v-dialog
      v-model="createFieldSettingDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="createFieldSettingDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<div style="display:flex;justify-content:flex-end;padding:5px;">
<v-icon @click="validationHelpDialog=true">fa-question-circle</v-icon>
</div>

<input  class="interInput" v-model="createField.label" type="text" placeholder="Label" >
<input  class="interInput" v-model="createField.name" type="text" placeholder="Name" >

<v-checkbox
      v-model="createField.show"
      :label="'Show (Quality assurance)'"
    ></v-checkbox>

<input  class="interInput" v-model="createField.headerMap" type="text" placeholder="Header File Map" >

<br>
<v-checkbox
      v-model="createField.validation"
      :label="'Validation'"
    ></v-checkbox>
<br>

<v-textarea label="Rules(Must Follow Documentation)" v-if="createField.validation" outlined v-model="createField.rule"></v-textarea>

<!-- <input v-if="createField.validation"  class="interInput" v-model="createField.rule" type="text" placeholder="Rule" > -->

<div style="display:flex;justify-content:flex-end;padding:5px">
<v-btn outlined @click="createProductField">Add</v-btn>
</div>

<!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
</div>
      </v-card>
    </v-dialog>


<!-- ^^^^^^^^^^^^^^^^^^^^^^^^field setting dialog^^^^^^^^^^^^^^^^^^^^ -->

 <v-dialog
      v-model="productFieldSettingDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="productFieldSettingDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <!-- <v-btn
              dark
              text
              @click="saveProductsFormat"
            >
              SAVE
            </v-btn> -->
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<div style="display:flex;justify-content:flex-end;padding:5px;">
<v-icon @click="validationHelpDialog=true">fa-question-circle</v-icon>
</div>

<!-- <v-textfield></v-textfield> -->

<v-checkbox
      v-model="selectedFieldSetting.show"
      :label="'Show (Quality assurance)'"
    ></v-checkbox>

<input  class="interInput" v-model="selectedFieldSetting.headerMap" type="text" placeholder="Header File Map" >

<br>
<v-checkbox
      v-model="selectedFieldSetting.validation"
      :label="'Validation'"
    ></v-checkbox>
<br>
<v-textarea label="Rules(Must Follow Documentation)" v-if="selectedFieldSetting.validation" outlined v-model="selectedFieldSetting.rule"></v-textarea>

<!-- <input v-if="selectedFieldSetting.validation"  class="interInput" v-model="selectedFieldSetting.rule" type="text" placeholder="Rule" > -->



<!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
</div>
      </v-card>
    </v-dialog>


<!--*******************USER INSERT******************* -->


   <v-dialog
      v-model="validationHelpDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="validationHelpDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
 
 <h4>Help</h4><br>

Rules For Validation<br>
<table>
  <thead>
    <tr>
      <th>Operators</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">(...)</code><br><code class="language-plaintext highlighter-rouge">[...]</code><br><code class="language-plaintext highlighter-rouge">{...}</code></td>
      <td>Grouping<br>Matrix<br>Object</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">x(...)</code><br><code class="language-plaintext highlighter-rouge">x[...]</code><br><code class="language-plaintext highlighter-rouge">obj.prop</code><br><code class="language-plaintext highlighter-rouge">:</code></td>
      <td>Function call<br>Matrix index<br>Property accessor<br>Key/value separator</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">'</code></td>
      <td>Matrix transpose</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">!</code></td>
      <td>Factorial</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">^</code>, <code class="language-plaintext highlighter-rouge">.^</code></td>
      <td>Exponentiation</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">+</code>, <code class="language-plaintext highlighter-rouge">-</code>, <code class="language-plaintext highlighter-rouge">~</code>, <code class="language-plaintext highlighter-rouge">not</code></td>
      <td>Unary plus, unary minus, bitwise not, logical not</td>
    </tr>
    <tr>
      <td>See section below</td>
      <td>Implicit multiplication</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">*</code>, <code class="language-plaintext highlighter-rouge">/</code>, <code class="language-plaintext highlighter-rouge">.*</code>, <code class="language-plaintext highlighter-rouge">./</code>, <code class="language-plaintext highlighter-rouge">%</code>, <code class="language-plaintext highlighter-rouge">mod</code></td>
      <td>Multiply, divide, percentage, modulus</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">+</code>, <code class="language-plaintext highlighter-rouge">-</code></td>
      <td>Add, subtract</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">:</code></td>
      <td>Range</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">to</code>, <code class="language-plaintext highlighter-rouge">in</code></td>
      <td>Unit conversion</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">&lt;&lt;</code>, <code class="language-plaintext highlighter-rouge">&gt;&gt;</code>, <code class="language-plaintext highlighter-rouge">&gt;&gt;&gt;</code></td>
      <td>Bitwise left shift, bitwise right arithmetic shift, bitwise right logical shift</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">==</code>, <code class="language-plaintext highlighter-rouge">!=</code>, <code class="language-plaintext highlighter-rouge">&lt;</code>, <code class="language-plaintext highlighter-rouge">&gt;</code>, <code class="language-plaintext highlighter-rouge">&lt;=</code>, <code class="language-plaintext highlighter-rouge">&gt;=</code></td>
      <td>Relational</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">&amp;</code></td>
      <td>Bitwise and</td>
    </tr>
    <tr>
      <td><code>^|</code></td>
      <td>Bitwise xor</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Bitwise or</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">and</code></td>
      <td>Logical and</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">xor</code></td>
      <td>Logical xor</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">or</code></td>
      <td>Logical or</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">?</code>, <code class="language-plaintext highlighter-rouge">:</code></td>
      <td>Conditional expression</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">=</code></td>
      <td>Assignment</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">,</code></td>
      <td>Parameter and column separator</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">;</code></td>
      <td>Row separator</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">\n</code>, <code class="language-plaintext highlighter-rouge">;</code></td>
      <td>Statement separators</td>
    </tr>
  </tbody>
</table>
</div>
      </v-card>
    </v-dialog>
 
   <v-dialog
      v-model="productSettingDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="productSettingDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="saveProductsFormat"
              
            >
              SAVE
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <div style="padding:10px">
<v-btn outlined @click="createFieldSettingDialog=true">Create Field</v-btn>
</div>

       <div style="padding:10px;height: 85vh;
    overflow: scroll;">
        

                                       <draggable
                                            :list="insertForm.observation_format"
                                             handle=".handle"
                                            style="
                     margin-top:10px "
                                            ghost-class="ghost"
                                            group="product"
                                            @start="dragging = true"
                                            @end="dragging = false"
                                        >
                                              <div
                                            style="display:flex;"
                                                v-for="(productFormat, index) in insertForm.observation_format"
                                                :key="'product' + index"
                                            >
       <v-icon style="margin:0 5px" class="handle">fa-arrows-alt</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon @click="removeConfig(productFormat,index)" style="margin:0 5px">fa-times</v-icon>
 
                                            </div>
                                        </draggable>

<!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
</div>
      </v-card>
    </v-dialog>

    </div>
</template>
<script>
/*eslint-disable*/
import  * as core from '../lib/core.js'

import moment from 'moment'
var create_field={
    label:'',//input field label
    name:'',//column name
    value:'',//default value
    show:false,
    headerMap:'',//map name from header file put into,
    validation:false,
    rule:'',
    default:false,
note:'' 
    
}
function intialState($vm){
    return {
                isStateForUpdate:false,
        modal:false,
        createFieldSettingDialog:false,
        createField:{
    label:'',//input field label
    name:'',//column name
    value:'',//default value
    show:false,
    headerMap:'',//map name from header file put into,
    validation:false,
    rule:'',
    default:false,
note:'' 
},
                    // productsFormat:_.cloneDeep($vm.$store.state.interplex.configProductsFormat),
validationHelpDialog:false,
        productSettingDialog:false,
        productFieldSettingDialog:false,
        selectedFieldSetting:create_field
        ,
        insertForm:{
product_name:'',
supplier_name:'',
rmcode:'',
eds:'',
rm:'',
form_format:'',
comment:'',
skiplevel:0,
observation_format:_.cloneDeep($vm.$store.state.interplex.configProductsFormat),
duedate:moment().format("YYYY-MM-DD")   
        }   

    }
}

export default {

data(){
return intialState(this)
},
        mounted(){
        var $vm=this;
// isStateForUpdate:false,

var params=this.$route.params;
if(Object.prototype.hasOwnProperty.call(params, 'item')){
    console.log("check ")
    console.log(params.item)
$vm.isStateForUpdate=true,
    // $vm.$set($vm,'insertForm',params.item)
    $vm.insertForm=Object.assign($vm.insertForm,params.item)
    // $vm.$set($vm,'productsFormat',params.item.observation_format)
    // $vm.insertForm.observation_format=params.item.observation_format


}
    },
methods:{
    removeConfig(item,index){
        if(item.default){

$vm.$alert("Cannot Delete Default Field",'Error','error')

            return;
        }
this.insertForm.observation_format.splice(index,1)
    },
clear(){

var $vm=this;
$vm.$confirm("Do you want to reset ?",'warning','warning')
.then(()=>{
$vm.insertForm=intialState($vm).insertForm

})

},
    save(){
        var $vm=this;
var prepareData=_.cloneDeep($vm.insertForm);
// prepareData['observation_format']=$vm.productsFormat;

if(prepareData.rmcode=='')
{
$vm.$alert("Part No Must Be Filled",'Error','error')
return;
}

core.database(this,'insertMasterProduct',prepareData)
   $vm.$alert("Successfully Created")
$vm.insertForm=intialState($vm).insertForm

        
        console.log(prepareData)
    },
    update(){
        var $vm=this;
        core.database(this,'updateMasterProduct',this.insertForm)
    $vm.$alert("Successfully Updated")
    },
    selectFieldSettingfn(item){
this.selectedFieldSetting=item
this.productFieldSettingDialog=true;
    },
    saveProductsFormat(){
        var $vm=this;
        // $vm.$alert('Saved','success','success')
        // this.$store.commit("updateProductsFormat",this.insertForm.observation_format)
  core.database(this,'saveProductConfig',this.insertForm.observation_format)
    $vm.$alert("Successfully Updated")
    },
createProductField(){

    this.$store.commit('addProductsFormat',this.createField)
    this.insertForm.observation_format.push(this.createField)
}

},
// watch:{
//     productsFormat(){

//         this.$store.commit("updateProductsFormat",this.productsFormat)
//     }
// }

}
</script>
<style lang="scss">
  @import url('../assets/interplex.scss');  
</style>