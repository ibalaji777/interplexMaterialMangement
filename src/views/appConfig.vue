<template>
    <div>
        <!-- <h4>App Config</h4> -->
        <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h5 class="font-weight-bold text-h2 basil--text">
        App Config
      </h5>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
          <v-tab
     >
     Sap/File Map
        
      </v-tab>

      <v-tab
     >
     Map Config Rules
        
        
      </v-tab>

    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item
      >
        <v-card
          color="basil"
          flat
        >
  <v-card-text>

                <v-text-field   v-model="sapImport.rmcode" label="Part No(rmcode)" outlined dense></v-text-field>
                <v-text-field   v-model="sapImport.supplier_name" label="Supplier Name(supplier_name)" outlined dense></v-text-field>
                <v-text-field   v-model="sapImport.invoice_no" label="invoice No(invoice_no)" outlined dense>    </v-text-field>
                <v-text-field   v-model="sapImport.grn_no" label="Grn No(grn_no)" outlined dense></v-text-field>
                <v-text-field   v-model="sapImport.grn_date" label="Grn Date(grn_date)" outlined dense></v-text-field>
                <v-text-field   v-model="sapImport.invoice_date" label="Invoice Date(invoice_date)" outlined dense></v-text-field>
                <v-text-field   v-model="sapImport.batch_no" label="Batch No(batch_no)" outlined dense>    </v-text-field>
                <v-text-field   v-model="sapImport.qty" label="qty(qty)" outlined dense>    </v-text-field>

<v-btn color="primary" @click="saveSapImport">
    Save
</v-btn>


          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>

                <v-text-field   v-model="defaultFields.partNo" label="Part No(Rmcode)" outlined dense></v-text-field>
                <v-text-field   v-model="defaultFields.supplierName" label="Supplier Name" outlined dense></v-text-field>
                <v-text-field   v-model="defaultFields.invoiceNo" label="invoice No" outlined dense>    </v-text-field>

<v-btn color="primary" @click="saveDefaultField">
    Save
</v-btn>

          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
  <div style="margin-top:20px;">
      <b style="color:red;">Note:</b><br> Applies Only on {{$store.state.interplex.user.branch}} branch
</div>

    </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'
export default {
    data(){


        return {
   tab: null,
   defaultFields:this.$store.state.defaultField,
   sapImport:this.$store.state.map.sapImport,    
        }
        },
async        mounted(){
var $vm=this;

await $vm.$store.dispatch('getSapImport')

        },
        methods:{
      async      saveDefaultField(){
var $vm=this;
await $vm.$store.dispatch('setDefaultImport',$vm.defaultFields)
$vm.$alert("saved")
                
            },
          async  saveSapImport(){
var $vm=this;
await $vm.$store.dispatch('setSapImport',$vm.sapImport)
$vm.$alert("saved")


            }
        }
    
}
</script>
<style lang="scss">
    
</style>