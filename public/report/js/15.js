(window.webpackJsonp$angalware_report=window.webpackJsonp$angalware_report||[]).push([[15],{"HeH+":function(e,t,i){"use strict";var n=i("jHpe");i("y1X9"),i("QWvX"),i("hL/g"),i("wZee"),t.a={props:["widget"],data:function(){return{togleHTML:!1,code:"<h1>angalware</h1>",togleCSS:!1,toglePAYLOAD:!1,project_name:"",isTemplateForUpdate:!1,isThisMobile:!1,update_template:{index:0,name:"",js:"",html:"",css:"",data_set:{}},js:"const angalware = {\n  register(plugin) {\n    const { name, exec } = plugin;\n    this[name] = exec;\n  }\n};",isLabelForUpdate:!1,html:"<h2>hello</h2>",css:".red{ background:red}",lineNumbers:!0,render:"<h2>hello </h2>"}},methods:{highlighter:function(e){return Object(n.highlight)(e,n.languages.js)},jshighlighter:function(){return Object(n.highlight)(code,n.languages.js)}}}},SERu:function(e,t,i){"use strict";var n=i("zCLC");i.n(n).a},YrOU:function(e,t,i){"use strict";function n(){var e=this,t=e.$createElement;return(t=e._self._c||t)("div",[t("div",{staticClass:"form-group"},[t("label",{staticStyle:{margin:"5px",color:"white"}},[e._v("Enter Template Code")]),e._v(" "),t("prism-editor",{staticClass:"print_none my-editor height-45",staticStyle:{flex:"1",margin:"0 1px",height:"100vh"},attrs:{highlight:e.highlighter,"line-numbers":e.lineNumbers},model:{value:e.widget.html,callback:function(t){e.$set(e.widget,"html",t)},expression:"widget.html"}}),e._v(" "),t("label",{staticStyle:{margin:"5px",color:"white"},attrs:{for:""}},[e._v("Enter Style Code")]),e._v(" "),t("prism-editor",{staticClass:"print_none my-editor height-45",staticStyle:{flex:"1",margin:"0 1px",height:"100vh"},attrs:{highlight:e.highlighter,"line-numbers":e.lineNumbers},model:{value:e.widget.css,callback:function(t){e.$set(e.widget,"css",t)},expression:"widget.css"}})],1)])}i.r(t);var r=[];n._withStripped=!0,i.d(t,"render",function(){return n}),i.d(t,"staticRenderFns",function(){return r})},iB6J:function(e,t,i){"use strict";i.r(t);var n=i("YrOU"),r=i("HeH+"),o=(i("SERu"),i("KHd+")),s=(r=Object(o.a)(r.a,n.render,n.staticRenderFns,!1,null,null,null),i("ZDXL"));s.install(i("ukxx")),s.compatible&&(e.hot.accept(),s.isRecorded("9f58b5e0")?s.reload("9f58b5e0",r.options):s.createRecord("9f58b5e0",r.options),e.hot.accept("YrOU",function(e){n=i("YrOU"),s.rerender("9f58b5e0",{render:n.render,staticRenderFns:n.staticRenderFns})}.bind(this))),r.options.__file="src/components/codeProperties.vue",t.default=r.exports},li3i:function(e,t,i){(e.exports=i("JPst")(!1)).push([e.i,".my-editor{background:#2d2d2d;color:#ccc;font-family:Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;font-size:12px;line-height:1.5;padding:5px;overflow:scroll}.prism-editor__textarea:focus{outline:none}.height-45{height:45% !important}\n",""])},zCLC:function(e,t,i){var n=i("li3i");(n="string"==typeof n?[[e.i,n,""]]:n).locals&&(e.exports=n.locals);var r=(0,i("SZ7m").default)("61111465",n,!1,{});n.locals||e.hot.accept("li3i",function(){var t=i("li3i");"string"==typeof t&&(t=[[e.i,t,""]]),r(t)}),e.hot.dispose(function(){r()})}}]);