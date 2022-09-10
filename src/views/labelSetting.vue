<template>
<div>
    <h3 style="text-align:center">code</h3>
  <codemirror v-model="barcodeLabel.html" :options="htmlOp"></codemirror>

<h4 style="text-align:center">style</h4>
  <codemirror v-model="barcodeLabel.css" :options="cssOp"></codemirror>

<h4 style="text-align:center">config</h4>
  <!-- <codemirror v-model="barcodeLabel.pageSetup.pageSetup" :options="jsOp"></codemirror> -->
  <h5>Page Setting</h5>
<v-text-field v-model="barcodeLabel.pageSetup.page.labelSheetSize" label="LabelSheetSize">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.margin_type" label="LabelSheetSize">
</v-text-field>
<v-switch v-model="barcodeLabel.pageSetup.page.outline" label="Outline">
</v-switch>
<v-text-field v-model="barcodeLabel.pageSetup.page.layout" label="Layout">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.style_type" label="Size In (mm or in)">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.width" label="Width">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.height" label="height">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.marginTop" label="marginTop">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.marginRight" label="marginRight">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.marginBottom" label="marginBottom">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.page.marginLeft" label="marginLeft">
</v-text-field>


<h5>Label Setting</h5>
<v-text-field v-model="barcodeLabel.pageSetup.label.style_type" label="Size In (mm or in)">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.label.width" label="Width">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.label.height" label="height">
</v-text-field>

<v-text-field v-model="barcodeLabel.pageSetup.label.marginRight" label="Horizontal Gutter">
</v-text-field>
<v-text-field v-model="barcodeLabel.pageSetup.label.marginBottom" label="Verticle Gutter">
</v-text-field>
<v-switch v-model="barcodeLabel.pageSetup.label.isEnableLabelOverflow" label="Overflow">
</v-switch>

<v-btn color="primary" style="color:white" @click="saveData">Save</v-btn>

<!-- <h4 style="text-align:center">Preview</h4> -->
<label-print-desktop style="with:0;height:0;overflow:hidden" v-if="$isElectron"    :invoice_data="barcodeLabel" ref="labelPrintDesktop"></label-print-desktop>
<label-print-mobile  style="with:0;height:0;overflow:hidden" v-else  :invoice_data="barcodeLabel" ref="labelPrintMobile"></label-print-mobile>

  <!-- <codemirror ref="myCm"
              :value="code" 
              :options="cmOptions"
              @ready="onCmReady"
              @focus="onCmFocus"
              @input="onCmCodeChange">
  </codemirror> -->

  </div>
</template>

<script>
/*eslint-disable*/
import _ from 'lodash'
// language js
// import 'codemirror/mode/javascript/javascript.js'
// theme css
// import 'codemirror/theme/base16-dark.css'
// more codemirror resources
// import 'codemirror/some-resource...'
var label_data_set={}
export default {
  data () {
    return {

        barcodeLabel:{
            pageSetup:{
page:_.cloneDeep(this.$store.state.barcode.pageSetup.page),
    label:_.cloneDeep(this.$store.state.barcode.pageSetup.label),
            },
            html:_.cloneDeep(this.$store.state.barcodeLabel.html),
            css:_.cloneDeep(this.$store.state.barcodeLabel.css),
            js:'',
            data_set:[{}]//{label props},{}.{}
        },
                 jsOp: {
       tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
        mode: 'text/javascript',
        theme: 'base16-dark',
        // more codemirror options, 更多 codemirror 的高级配置...
      },

         cssOp: {
       tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/css',
        // mode: 'text/javascript',
        theme: 'base16-dark',
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      htmlOp: {
 tabSize: 4,
  styleActiveLine: true,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          autoCloseTags: true,
          mode: 'text/html',
          
        // mode: 'text/javascript',
        theme: 'base16-dark',
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  methods: {
    saveData(){
        var $vm=this;
        $vm.$alert("saved")
        $vm.$store.dispatch('labelSettingSave',$vm.barcodeLabel)
    },
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  mounted() {
    var $vm=this;
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...

_.map(this.$store.state.interplex.configHeaderFormat,(obj)=>{
    // console.log(obj)
    //             console.log(obj.name)
 label_data_set[obj.name]=obj.value;

            })
  
  $vm.barcodeLabel.data_set=[{...label_data_set}];
  }

}
</script>