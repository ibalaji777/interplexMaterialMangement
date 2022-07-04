<template>
    <div>
<h3>Quality assurance Form</h3>
<br>
<div style="display:flex;">
<input class="interInput" v-model="header.supplier" type="text" placeholder="Supplier" >
<input class="interInput" v-model="header.invoice_dc" type="text" placeholder="Invoice" >
<input class="interInput" v-model="header.invoice_dc_date" type="text" placeholder="Invoice Date" >
</div>
<div style="display:flex;">
<input class="interInput" v-model="header.ir_no" type="text" placeholder="Ir" >
<input class="interInput" v-model="header.date" type="text" placeholder="Date" >
<input class="interInput" v-model="header.grn_no" type="text" placeholder="Grn No" >
</div>
<div style="display:flex;">
<input class="interInput" v-model="header.sap_part_no_new" type="text" placeholder="R/m Code" >
<input class="interInput" v-model="header.sap_part_no_old" type="text" placeholder="EDS/QIP#" >
<input class="interInput" v-model="header.rm" type="text" placeholder="RM" >

</div>
<div style="display:flex;">
<input class="interInput" v-model="header.invoice_qty" type="text" placeholder="INVOICE QTY" >
<input class="interInput" v-model="header.received_qty" type="text" placeholder="RECEIVED QTY" >

</div>
OBSERVATION

<div @click="productFormatDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-check</v-icon>
</div>

<v-textarea style="margin-top:10px" outlined label="Remarks"></v-textarea>


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
        <table>
            <tr>
                <th>Label</th>
                <th>Input</th>
                <th>Status</th>
            </tr>
            <tr v-for="(productFormat , index) in productsFormat" :key="'product'+index">

<td style="width:40%">{{productFormat.label}}</td>
<td style="width:55%">
    <input @input="watchValue($event,productFormat)"   class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
</td>
<td style="width:5%;">
    <div style="text-align:center">
    <v-icon v-if="productFormat.validation">fa-check</v-icon>
    </div></td>        </tr>
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



    </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core'
import { create, all } from 'mathjs'
const math = create(all,  {})

export default {

    data(){

        return {
            header:{           }
            ,
            productFormatDialog:false,
            productsFormat:core.observation(this).productFormat
        }
    },
    methods:{
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
</style>