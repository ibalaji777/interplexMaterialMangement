(window.webpackJsonp$angalware_report=window.webpackJsonp$angalware_report||[]).push([[24],{GNmM:function(e,t,a){"use strict";t.a={props:["widget"]}},Gqux:function(e,t,a){"use strict";function i(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Ref")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.ref,expression:"widget.ref"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"barcode",placeholder:"Enter Ref"},domProps:{value:e.widget.ref},on:{input:function(t){t.target.composing||e.$set(e.widget,"ref",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Enter Qrcode value")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.value,expression:"widget.value"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"barcode",placeholder:"Enter Barcode"},domProps:{value:e.widget.value},on:{input:function(t){t.target.composing||e.$set(e.widget,"value",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Enter Width")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.width,expression:"widget.width"}],staticClass:"form-control",attrs:{type:"number","aria-describedby":"barcode",placeholder:"Enter Barcode Width"},domProps:{value:e.widget.width},on:{input:function(t){t.target.composing||e.$set(e.widget,"width",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Enter  Height")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.height,expression:"widget.height"}],staticClass:"form-control",attrs:{type:"number","aria-describedby":"barcode",placeholder:"Enter Barcode Height"},domProps:{value:e.widget.height},on:{input:function(t){t.target.composing||e.$set(e.widget,"height",t.target.value)}}})]),e._v(" "),e.widget.rotate?a("div",{staticClass:"form-group"},[a("label",[e._v("Rotate(deg)")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.rotate,expression:"widget.rotate"}],attrs:{type:"number",label:"Rotate"},domProps:{value:e.widget.rotate},on:{input:function(t){t.target.composing||e.$set(e.widget,"rotate",t.target.value)}}})]):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("size")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.scale,expression:"widget.scale"}],staticClass:"slider",attrs:{type:"range",min:"0.1",max:"3",step:"0.1",value:"0"},domProps:{value:e.widget.scale},on:{__r:function(t){return e.$set(e.widget,"scale",t.target.value)}}}),e._v(" "),a("br"),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.widget.alignment,expression:"widget.alignment"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.widget,"alignment",t.target.multiple?a:a[0])}}},e._l(e.$store.state.alignments,function(t,i){return a("option",{key:"index"+i,domProps:{value:t}},[e._v(e._s(t))])}),0),e._v(" "),a("br"),e._v(" "),""!=e.widget.alignment?a("div",["top-left"==e.widget.alignment||"top-right"==e.widget.alignment||"top-center"==e.widget.alignment?a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v("Top")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.alignment_class.top,expression:"widget.alignment_class.top"}],attrs:{type:"number",label:"Top"},domProps:{value:e.widget.alignment_class.top},on:{input:function(t){t.target.composing||e.$set(e.widget.alignment_class,"top",t.target.value)}}})])]):e._e(),e._v(" "),"bottom-left"==e.widget.alignment||"bottom-right"==e.widget.alignment||"bottom-center"==e.widget.alignment?a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v("Bottom")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.alignment_class.bottom,expression:"widget.alignment_class.bottom"}],attrs:{type:"number",label:"Bottom"},domProps:{value:e.widget.alignment_class.bottom},on:{input:function(t){t.target.composing||e.$set(e.widget.alignment_class,"bottom",t.target.value)}}})])]):e._e(),e._v(" "),"top-right"==e.widget.alignment||"bottom-right"==e.widget.alignment?a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v("Right")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.alignment_class.right,expression:"widget.alignment_class.right"}],attrs:{type:"number",label:"right"},domProps:{value:e.widget.alignment_class.right},on:{input:function(t){t.target.composing||e.$set(e.widget.alignment_class,"right",t.target.value)}}})])]):e._e(),e._v(" "),"bottom-left"==e.widget.alignment||"top-left"==e.widget.alignment?a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v("Left")]),a("br"),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.widget.alignment_class.left,expression:"widget.alignment_class.left"}],attrs:{type:"number"},domProps:{value:e.widget.alignment_class.left},on:{input:function(t){t.target.composing||e.$set(e.widget.alignment_class,"left",t.target.value)}}})])]):e._e()]):e._e()])])}a.r(t);var r=[];i._withStripped=!0,a.d(t,"render",function(){return i}),a.d(t,"staticRenderFns",function(){return r})},dfX5:function(e,t,a){"use strict";a.r(t);var i=a("Gqux"),r=a("GNmM"),n=a("KHd+"),o=(r=Object(n.a)(r.a,i.render,i.staticRenderFns,!1,null,null,null),a("ZDXL"));o.install(a("ukxx")),o.compatible&&(e.hot.accept(),o.isRecorded("5e58cef1")?o.reload("5e58cef1",r.options):o.createRecord("5e58cef1",r.options),e.hot.accept("Gqux",function(e){i=a("Gqux"),o.rerender("5e58cef1",{render:i.render,staticRenderFns:i.staticRenderFns})}.bind(this))),r.options.__file="src/components/qrcodeProperties.vue",t.default=r.exports}}]);