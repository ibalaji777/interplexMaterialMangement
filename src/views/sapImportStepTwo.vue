<template>
<div>
 
<div class="example">
    <div class="codemirror">
  <codemirror style="height:89vh" v-model="datTwoCode" :options="jsOp"></codemirror>
    </div>
</div>
<v-row style="margin:10px">
    <v-spacer></v-spacer>
    <v-btn @click="saveData" color="primary">
    Save
</v-btn>

</v-row>
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

  // base style
  import 'codemirror/lib/codemirror.css'

  // theme css
  import 'codemirror/theme/base16-dark.css'

  // language
  import 'codemirror/mode/javascript/javascript.js'

  // active-line.js
  import 'codemirror/addon/selection/active-line.js'

  // styleSelectedText
  import 'codemirror/addon/selection/mark-selection.js'
  import 'codemirror/addon/search/searchcursor.js'

  // highlightSelectionMatches
  import 'codemirror/addon/scroll/annotatescrollbar.js'
  import 'codemirror/addon/search/matchesonscrollbar.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/match-highlighter.js'

  // keyMap
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/comment/comment.js'
  import 'codemirror/addon/dialog/dialog.js'
  import 'codemirror/addon/dialog/dialog.css'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'

  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/comment-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'
  import 'codemirror/addon/fold/markdown-fold.js'
  import 'codemirror/addon/fold/xml-fold.js'
export default {
  data () {
    return {

        datTwoCode:this.$store.state.interplex.datTwoCode,

                 jsOp: {
       tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
        theme: 'base16-dark',
          
               

                    mode: 'text/javascript',
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

        var code=$vm.datTwoCode;
        $vm.$store.dispatch('datTwoCodeSet',code)
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
  mounted() {
    // var $vm=this;
  }

}
</script><style lang="scss" >
  .example {
    display: flex;
    height: 100%;

    .codemirror,
    .pre {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: auto;
    }

    .pre {
      display: block;
      padding: 1rem;
      font-size:14px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  .CodeMirror {
    height:89vh !important;
  }
</style>