(window.webpackJsonp$angalware_report=window.webpackJsonp$angalware_report||[]).push([[16],{HlgS:function(e,t,r){"use strict";function n(){var e=this,t=e.$createElement;return(e._self._c||t)("div",e._g({ref:"editable",style:e.style_,attrs:{contenteditable:"","data-tl":"_txt_","data-uq":e.widget.data_uq}},e.listeners))}r.r(t);var i=[];n._withStripped=!0,r.d(t,"render",function(){return n}),r.d(t,"staticRenderFns",function(){return i})},Hyg0:function(e,t,r){"use strict";var n=r("NWrs");r.n(n).a},Jfug:function(e,t,r){"use strict";r.r(t);var n=r("HlgS"),i=r("ZEyi"),o=(r("Hyg0"),r("KHd+")),c=(i=Object(o.a)(i.a,n.render,n.staticRenderFns,!1,null,null,null),r("ZDXL"));c.install(r("ukxx")),c.compatible&&(e.hot.accept(),c.isRecorded("10b2798c")?c.reload("10b2798c",i.options):c.createRecord("10b2798c",i.options),e.hot.accept("HlgS",function(e){n=r("HlgS"),c.rerender("10b2798c",{render:n.render,staticRenderFns:n.staticRenderFns})}.bind(this))),i.options.__file="src/components/editabe.vue",t.default=i.exports},NWrs:function(e,t,r){var n=r("PH+6");(n="string"==typeof n?[[e.i,n,""]]:n).locals&&(e.exports=n.locals);var i=(0,r("SZ7m").default)("6d3f1a8a",n,!1,{});n.locals||e.hot.accept("PH+6",function(){var t=r("PH+6");"string"==typeof t&&(t=[[e.i,t,""]]),i(t)}),e.hot.dispose(function(){i()})},"PH+6":function(e,t,r){(e.exports=r("JPst")(!1)).push([e.i,".text_nowrap{white-space:nowrap}.ql-editor{display:flex}\n",""])},ZEyi:function(e,t,r){"use strict";function n(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}var i={props:{value:{type:String,default:""},style_:{type:Object,default:{}},widget:{type:Object,default:{}}},computed:{listeners:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach(function(t){var n,i;n=e,t=r[i=t],i in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},this.$listeners,{input:this.onInput})}},mounted:function(){this.$refs.editable.innerHTML=this.value},methods:{onInput:function(e){this.$emit("input",e.target.querySelector(".ql-editor").innerHTML)}}};t.a=i}}]);