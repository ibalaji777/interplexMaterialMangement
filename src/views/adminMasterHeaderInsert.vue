<template>
    <div>
        <div style="display:flex;justify-content:flex-end">
                        <v-btn @click="productSettingDialog=true" outlined>
                config
            </v-btn>

        </div>
<h3 style="margin:10px 0">Header Config</h3>


<div>
<span >Part NO</span>
<input class="interInput" v-model="insertForm.part_num" type="text" placeholder="Part No" >
</div>
<div>
<span >Batch</span>
<input class="interInput" v-model="insertForm.batch" type="text" placeholder="batch" >
</div>
<div>
<span >SAP New </span>
<input class="interInput" v-model="insertForm.sap_num_new" type="text" placeholder="SAP NEW " >
</div>
<div>
<span >SAP OLD </span>
<input class="interInput" v-model="insertForm.sap_num_old" type="text" placeholder="SAP OLD" >
</div>
<div>
<span >GRN NO </span>
<input class="interInput" v-model="insertForm.grn_num" type="text" placeholder="GRN NO" >
</div>
<div>
<span >SKIP LEVEL</span>
<input class="interInput" v-model="insertForm.skiplevel" type="text" placeholder="skiplevel" >
</div>

<div v-for="(productFormat , index) in productsFormat" :key="'product'+index">

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
<div style="display:flex;justify-content:flex-end">

<v-btn outlined style="margin-top:10px;">Dialog</v-btn>
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

<input  class="interInput" v-model="createField.label" type="text" placeholder="Label" >
<input  class="interInput" v-model="createField.name" type="text" placeholder="Name" >

<v-checkbox
      v-model="createField.show"
      :label="'Show (Quality assurance)'"
    ></v-checkbox>

<input  class="interInput" v-model="createField.headerMap" type="text" placeholder="Header File Map" >

<br>

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
        

<div style="padding:10px">
<v-btn outlined @click="createFieldSettingDialog=true">Create Field</v-btn>
</div>
                                       <draggable
                                            :list="productsFormat"
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
                                                v-for="(productFormat, index) in productsFormat"
                                                :key="'product' + index"
                                            >
       <v-icon style="margin:0 5px" class="handle">fa-arrows-alt</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon @click="productsFormat.splice(index,1)" style="margin:0 5px">fa-times</v-icon>
 
                                            </div>
                                        </draggable>


</div>
      </v-card>
    </v-dialog>

    </div>
</template>
<script>
/*eslint-disable*/
var create_field={
    label:'',//input field label
    name:'',//column name
    value:'',//default value
    show:false,
    headerMap:'',//map name from header file put into,
}

export default {

data(){
    return{
        createFieldSettingDialog:false,
        createField:{
    label:'',//input field label
    name:'',//column name
    value:'',//default value
    show:false,
    headerMap:'',//map name from header file put into,
},
productsFormat:_.cloneDeep(this.$store.state.interplex.qualityAssuranceHeaderFormat),
        productSettingDialog:false,
        productFieldSettingDialog:false,
        selectedFieldSetting:create_field
        ,
        insertForm:{
            
        }
    }
},
methods:{
    selectFieldSettingfn(item){
this.selectedFieldSetting=item
this.productFieldSettingDialog=true;
    },
    saveProductsFormat(){
        var $vm=this;
        $vm.$alert('Saved','success','success')
        this.$store.commit("updateProductsFormat",this.productsFormat)

    },
createProductField(){

    // this.$store.commit('addProductsFormat',create_field)
    this.productsFormat(this.createField)
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