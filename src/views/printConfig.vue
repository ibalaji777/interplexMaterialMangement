<template>
<div>
  <h5 style="margin: 10px 0;
    color: darkblue;">CODE</h5>
  <codemirror v-model="printConfig.html" :options="htmlOp"></codemirror>

  <h5 style="margin: 10px 0;
    color: darkblue;">STYLE</h5>

  <codemirror v-model="printConfig.css" :options="cssOp"></codemirror>


<div style="display:flex;justify-content:flex-end;padding:10px;margin:10px">
    <v-btn @click="save" color="primary"> SAVE</v-btn>
</div>

  <div style="margin-top:20px;">
      <b style="color:red;">Note:</b><br>Config Applies Only on {{$store.state.interplex.user.branch}} branch
</div>


  </div>
</template>

<script>
/*eslint-disable*/
import _ from 'lodash'
export default {
  data () {
    return {

printConfig:this.$store.state.interplex.printConfig,
// {
// html:'',
// css:'',
// js:''
// },
                 jsOp: {
       tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
        mode: 'text/javascript',
        theme: 'base16-dark',
      },

         cssOp: {
       tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/css',
        // mode: 'text/javascript',
        theme: 'base16-dark',
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
      }
    }
  },
  methods: {
   async save(){
        var $vm=this;
await         $vm.$store.dispatch('setPrintConfig',$vm.printConfig)
        $vm.$alert("saved")

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
async  mounted() {
var $vm=this;
await $vm.$store.dispatch('getPrintConfig')

  }

}
</script>