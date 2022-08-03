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
<span >Next Due For Third Party Validation</span>
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


<!-- <div v-for="(productFormat , index) in insertForm.observation_format" :key="'product'+index">

<div style="display:flex">
<span style="width:40%">{{productFormat.label}}</span>
<input style="width:60%" class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" ><v-icon @click="selectFieldSettingfn(productFormat)" style="margin:0 5px">fa-cog</v-icon>
</div>


</div> -->


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
<v-btn @click="configQasPrintViewDialog=true" outlined color="red" style="margin:10px 0">
    Quality Assurance Form
</v-btn>
<div style="display:flex;justify-content:flex-end;margin-top:25px">
<v-btn outlined @click="clear" style=";margin-right:10px;">Reset</v-btn>
<v-btn v-if="!isStateForUpdate" outlined @click="save" style="">Save</v-btn>
<v-btn v-else  @click="update" outlined>Update</v-btn>
</div>

<!-- ^^^^^^^^^^^^^^^^^^^^^^^^create field setting dialog^^^^^^^^^^^^^^^^^^^^ -->
 <v-dialog
      v-model="configQasPrintViewDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
    <span>Create Qas Form</span>
          <v-spacer></v-spacer>
          <v-toolbar-title><v-icon @click="configQasPrintViewDialog = false">fa-times</v-icon></v-toolbar-title>

          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<v-btn @click="insertObservation" outlined color="red">
    <v-icon>fa-plus</v-icon>
</v-btn>

<h3 style="padding:0;margin:10px 0">OBSERVATION</h3>
<div style="display:flex;margin:10px 0">
<v-btn @click="qasFormSetup='config'" style="margin-right:5px" color="primary">
config
</v-btn>
<v-btn @click="qasFormSetup='input'" color="primary">
Input
</v-btn>
</div>
<div v-show="qasFormSetup=='config'" style="width:99vw;overflow:scroll">

<v-btn color="primary" @click="createQasRowInputDialog=true">
Create New Row
</v-btn>

<table  class="observationTable" style="width:100vw">
    <tr>
        <td rowspan="2"></td>
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
        <td>IEIPL/THIRD PARTY</td>
       
    </tr>
    <draggable handle=".drag" tag="tbody" v-model="insertForm.observation_print_view">

    <tr v-for="(form,index) in insertForm.observation_print_view" :key="'printview'+index">
        <td>
<v-icon class="drag" style="cursor:move;font-size:50px">mdi-drag-horizontal</v-icon>            
            {{index+1}}</td>
        <td>
           
   <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

v-model="form.desc"
  item-text="name"
  item-value="name"
   clearable
  hide-selected
  small-chips
></v-combobox>
        </td>
   
        <td>    
            <!-- {{observation_format_columns}} -->
         <!-- {{form.unit}} -->
                 <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

v-model="form.unit"
  item-text="name"
  item-value="name"
   clearable
  hide-selected
  small-chips
></v-combobox>
                    <!-- <v-text-field v-model="form.unit"></v-text-field> -->
</td>
        <td>

               <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.min_spec"
   clearable
  hide-selected
  small-chips
></v-combobox>
                        <!-- <v-text-field v-model="form.min_spec"></v-text-field> -->
            

        </td>
        <td>
                           <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.max_spec"
   clearable
  hide-selected
  small-chips
></v-combobox>
            <!-- <v-text-field v-model="form.max_spec"></v-text-field></td> -->
        <td>
               <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.sup_min"
   clearable
  hide-selected
  small-chips
></v-combobox>
               <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.sup_max"
   clearable
  hide-selected
  small-chips
></v-combobox>


                        <!-- <v-text-field v-model="form.sup_min"></v-text-field> -->
            <!-- <v-text-field v-model="form.sup_max"></v-text-field> -->



        </td>
        <td>

               <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.ieipl_min"
   clearable
  hide-selected
  small-chips
></v-combobox>
               <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.ieipl_max"
   clearable
  hide-selected
  small-chips
></v-combobox>

<!-- 
                        <v-text-field v-model="form.ieipl_min"></v-text-field>
            <v-text-field v-model="form.ieipl_max"></v-text-field> -->



        </td>
        <td>
                      
                                     <v-combobox   :return-object="false"

                             :items="observation_format_columns"
  dense

  item-text="name"
  item-value="name"
v-model="form.remarks"
   clearable
  hide-selected
  small-chips
></v-combobox>

                                    <!-- <v-text-field v-model="form.remarks"></v-text-field> -->
<v-icon @click="insertForm.observation_print_view.splice(index,1)">fa-trash</v-icon>

        </td>
    </tr>
    </draggable>
</table>
</div>

<div v-show="qasFormSetup=='input'" style="width:99vw;overflow:scroll">
<table  class="observationTable" style="width:100vw">
    <tr>
        <td rowspan="2"></td>
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
        <td>IEIPL/THIRD PARTY</td>
       
    </tr>
    <tr v-for="(form,index) in insertForm.observation_print_view" :key="'printview'+index">
        <td>{{index+1}}</td>
        <td>
<div v-if="getIndex(form.desc)!=-1">
{{insertForm.observation_format[getIndex(form.desc)].name}}
<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.desc))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.desc)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.desc)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
        </td>
   
        <td>    
<div v-if="getIndex(form.unit)!=-1">
{{insertForm.observation_format[getIndex(form.unit)].name}}
<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.unit))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.unit)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.unit)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
                    <!-- <v-text-field v-model="form.unit"></v-text-field> -->
</td>
        <td>

<div v-if="getIndex(form.min_spec)!=-1">
{{insertForm.observation_format[getIndex(form.min_spec)].name}}

<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.min_spec))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.min_spec)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.min_spec)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
            

        </td>
        <td>

<div v-if="getIndex(form.max_spec)!=-1">
{{insertForm.observation_format[getIndex(form.max_spec)].name}}

<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.max_spec))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.max_spec)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.max_spec)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
  
        <td>

<div v-if="getIndex(form.sup_min)!=-1">
{{insertForm.observation_format[getIndex(form.sup_min)].name}}

<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.sup_min))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.sup_min)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.sup_min)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
  
        </td>
        <td>

<div v-if="getIndex(form.ieipl_min)!=-1">
{{insertForm.observation_format[getIndex(form.ieipl_min)].name}}

<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.ieipl_min))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.ieipl_min)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.ieipl_min)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
          </td>
        <td>
   
<div v-if="getIndex(form.remarks)!=-1">
{{insertForm.observation_format[getIndex(form.remarks)].name}}

<div style="display:flex;width:250px;justify-content:space-around">
    <v-icon @click="selectQasEdiable(getIndex(form.remarks))">fa-cog</v-icon>
<v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form.remarks)].disable"></v-switch>
</div>

<v-text-field v-debounce="delay" label="value" v-model.lazy="insertForm.observation_format[getIndex(form.remarks)].value"></v-text-field>
</div>
<div v-else>
Not Found 
</div>
  
        </td>
    </tr>
</table>
</div>
</div>
      </v-card>
    </v-dialog>
<!-- qas form input config  dialog-->
 <v-dialog
      v-model="qasEdiableDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Input Config</span>
        </v-card-title>
        <v-card-text>
 
<div v-if="qasEditableIndex!=-1">
<div >
<b>Label:{{insertForm.observation_format[qasEditableIndex].label}}</b><br>
<b>Name:{{insertForm.observation_format[qasEditableIndex].name}}</b><br>
<b>Default :{{insertForm.observation_format[qasEditableIndex].default}}</b>
</div>


<!-- {{insertForm.observation_format[qasEditableIndex].name}} -->


<div v-if="!insertForm.observation_format[qasEditableIndex].default">
<v-text-field label="Label" v-model="insertForm.observation_format[qasEditableIndex].label"></v-text-field>
<v-text-field label="Name" v-model="insertForm.observation_format[qasEditableIndex].name"></v-text-field>
<!-- {{insertForm.observation_format[qasEditableIndex].label}}<br> -->
</div>

<v-switch label="Disable Input" v-model="insertForm.observation_format[qasEditableIndex].disable">
</v-switch>


<v-text-field label="SAP Map" v-model="insertForm.observation_format[qasEditableIndex].headerMap"></v-text-field>

<v-text-field label="Default Value" v-model="insertForm.observation_format[qasEditableIndex].value"></v-text-field>

<v-switch label="Validation" v-model="insertForm.observation_format[qasEditableIndex].validation">
</v-switch>

<v-textarea   label="Write Rule" v-model="insertForm.observation_format[qasEditableIndex].rule">

</v-textarea>
Note:<br>
{{insertForm.observation_format[qasEditableIndex].note}}


</div>



        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="qasEdiableDialog = false"
          >
            Close
          </v-btn>
          <!-- <v-btn
            color="blue darken-1"
            text
            @click="qasEdiableDialog = false"
          >
            Save
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>

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

<v-checkbox
      v-model="createField.disable"
      :label="'Disable (Field cannot update)'"
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
        <div style="background: black;
    color: white;
    padding: 10px;
    border-radius: 9px;">
      <b> Name :{{selectedFieldSetting.name}}</b><br>
      <b v-if="selectedFieldSetting.default">Field is Default</b> 
      <b v-else>Not a Default Field</b> 
</div>
<!-- <v-text-field></v-text-field> -->
<!-- {{}} -->
<v-checkbox
      v-model="selectedFieldSetting.show"
      :label="'Show (Quality assurance)'"
    ></v-checkbox>
<v-checkbox
      v-model="selectedFieldSetting.disable"
      :label="'Disable (Field cannot update)'"
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
<v-btn outlined @click="createFieldSettingDialog=true" style="margin-right:15px">Create Field</v-btn>
<v-btn outlined @click="preFields">Pre Fields</v-btn>
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
import state from '../store/state'
import moment from 'moment'
var create_field={
    label:'',//input field label
    name:'',//column name
    value:'',//default value
    show:false,
        disable:false,

    headerMap:'',//map name from header file put into,
    validation:false,
    rule:'',
    default:false,
note:'' 
    
}
function intialState($vm){
    return {
createQasRowInputDialog:false,
qasEdiableDialog:false,
delay: 1000,
qasEditableIndex:-1,
qasFormSetup:'config',//config or input
isStateForUpdate:false,
modal:false,
createFieldSettingDialog:false,
createField:{
label:'',//input field label
name:'',//column name
value:'',//default value
show:false,
disable:false,
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

branch:'',
product_name:'',
supplier_name:'',
rmcode:'',
eds:'',
rm:'',
form_format:'',
comment:'',
skiplevel:0,
observation_print_view:[],
observation_format:_.cloneDeep($vm.$store.state.interplex.configProductsFormat),//core.database($vm,'getMasterProductConfig'),
duedate:moment().format("YYYY-MM-DD")   
}   
,configQasPrintViewDialog:false,
observation_print_view_format:{
no:'',
desc:'',
unit:'',
min_spec:'',
max_spec:'',
sup_min:'',
sup_max:'',
ieipl_min:'',
ieipl_max:'',
remarks:'',

}
    }
}

export default {

data(){
return intialState(this)
},

computed:{
getIndex(){
var $vm=this;
return (name)=>{

return _.findIndex($vm.insertForm.observation_format,(x)=>{
return x.name==name;    
})
}

},
getProduct(){
var $vm=this;
return (name)=>{

var index=_.findIndex($vm.insertForm.observation_format,(x)=>{
return x.name==name;    
})
if(index>-1){
return { isExist:true,...$vm.insertForm.observation_format[index]}
}
return { isExist:false}

}

},
observation_format_columns(){
var $vm=this;
return [
{name:'supplier_name'},
{name:'supplier_name'},
{name:'product_name'},
{name:'rmcode'},
{name:'eds'},
{name:'rm'},
{name:'skiplevel'},
{name:'form_format'},
{name:'duedate'},
..._.cloneDeep($vm.$store.state.interplex.configProductsFormat)]


}

},
async        mounted(){
        var $vm=this;
// isStateForUpdate:false,


var result=await $vm.$store.dispatch('getProductConfig')
$vm.insertForm.observation_format=result;
//default print view format
if($vm.insertForm.observation_print_view.length==0){
$vm.insertForm.observation_print_view=$vm.$store.state.interplex.observation_print_view_format
}
$vm.insertForm.observation_format=$vm.$store.state.interplex.configProductsFormat

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
 selectQasEdiable(index)
  {
var $vm=this;

$vm.qasEdiableDialog=true;
$vm.qasEditableIndex=index;
  },
    insertObservation(){
var $vm=this;
$vm.insertForm.observation_print_view.push((intialState($vm).observation_print_view_format))
    },
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
async    save(){
        var $vm=this;
var prepareData=_.cloneDeep($vm.insertForm);

prepareData['branch']=$vm.$store.state.interplex.user.branch;
if(prepareData.rmcode=='')
{
$vm.$alert("Part No Must Be Filled",'Error','error')
return;
}

var product=await $vm.$store.dispatch('createProduct',prepareData)

if(product){ $vm.$alert("Successfully Created") 
return
}
 

$vm.$alert("Something Wrong")




$vm.insertForm=intialState($vm).insertForm

        
        console.log(prepareData)
    },
async    update(){
        var $vm=this;
        // core.database(this,'updateMasterProduct',this.insertForm)
 
 $vm.$store.dispatch('updateProduct',$vm.insertForm);
 
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
//   core.database(this,'saveProductConfig',this.insertForm.observation_format)
   
   $vm.$store.dispatch('updateProductConfig',$vm.insertForm.observation_format)
   
   
   $vm.$alert("Config Updated")
    },
createProductField(){

    this.$store.commit('addProductsFormat',this.createField)
    this.insertForm.observation_format.push(this.createField)
    $vm.$alert("added")
},
preFields(){
    var $vm=this;
this.$store.commit('setPreFieldFormat',state.interplex.configProductsFormat)
    this.insertForm.observation_format=state.interplex.configProductsFormat
$vm.$alert("added")
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

          .observationTable{

width:100%;
border-collapse: collapse;
}
.observationTable  td{
border: 1px solid black;
padding:5px
}

</style>