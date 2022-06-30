<template>
    <div>
MASTER PRODUCT 
<div>
<span >Supplier</span>
<input class="interInput" v-model="insertForm.supplier_name" type="text" placeholder="Supplier Name" >
</div>

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




<div style="display:flex;align-items:center">
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
</div>
<div style="display:flex;justify-content:flex-end">

<v-btn outlined style="margin-top:10px;">Create New Product</v-btn>
</div>
    </div>
</template>
<script>
export default {

data(){
    return{
        insertForm:{
            
        }
    }
}

}
</script>
<style lang="scss">
  @import url('../assets/interplex.scss');  
</style>