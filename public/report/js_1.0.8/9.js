(window.webpackJsonp$angalware_report=window.webpackJsonp$angalware_report||[]).push([[9],{"4A4Y":function(e,t,a){"use strict";a.r(t);var n=a("RecS"),o=a("Nlpm"),i=(a("r75P"),a("KHd+")),r=(o=Object(i.a)(o.a,n.render,n.staticRenderFns,!1,null,"97a0e004",null),a("ZDXL"));r.install(a("ukxx")),r.compatible&&(e.hot.accept(),r.isRecorded("97a0e004")?r.reload("97a0e004",o.options):r.createRecord("97a0e004",o.options),e.hot.accept("RecS",function(e){n=a("RecS"),r.rerender("97a0e004",{render:n.render,staticRenderFns:n.staticRenderFns})}.bind(this))),o.options.__file="src/pages/projects.vue",t.default=o.exports},Nlpm:function(e,t,a){"use strict";t.a={data:function(){return{media:[],font_family:[],prepare_upload:{type:"",base64:"",name:""},font_name:"",media_name:"",create_navbar:[{title:"Create Label",route:"create_label"},{title:"Create Label Page",route:"barcodePage"},{title:"Template",route:"angalware_template"}]}},mounted:function(){var e=this;e.font_family=_.cloneDeep(e.$store.state.font_family),e.media=_.cloneDeep(e.$store.state.media)},methods:{remove_font_family:function(e){var t=this;t.font_family.splice(e,1),t.$store.commit("update_font_family",t.font_family)},remove_media:function(e){var t=this;t.media.splice(e,1),t.$store.commit("update_media",t.media)},add_font_family:function(){var e=this;""!=e.prepare_upload.name&&(e.font_family.push(e.prepare_upload),e.$store.commit("update_font_family",e.font_family),e.font_family=_.cloneDeep(e.$store.state.font_family),e.media=_.cloneDeep(e.$store.state.media),console.log("add"))},add_media:function(){var e=this;""!=e.prepare_upload.name&&(console.log("update"),e.media.push(e.prepare_upload),e.$store.commit("update_media",e.media),e.font_family=_.cloneDeep(e.$store.state.font_family),e.media=_.cloneDeep(e.$store.state.media))},file_upload:function(e,t){var a,n=this;e=e.srcElement.files[0];a=e,new Promise(function(e,t){var n=new FileReader;n.readAsDataURL(a),n.onload=function(){return e(n)},n.onerror=function(e){return t(e)}}).then(function(e){n.prepare_upload={type:t,base64:e.result,name:("font_family"==t?n.font_name:n.media_name).split(/\s/).join("")}})},show_full_screen:function(){this.$refs.setting.classList.toggle("full_screen")},template_remove:function(e){var t=this;t.$confirm("Do you want to remove?","warning","warning").then(function(){t.$store.dispatch("remove_template",e),t.$alert("Deleted","success","success")})},template_edit:function(e,t){this.$router.push({name:"angalware_template",params:{index:e,template:t}})},template_preview:function(e,t){this.$router.push({name:"angalware_template_view",params:{index:e,template:t}})},action:function(e,t){var a=this;"remove"==e&&a.$confirm("Do you want to remove?","warning","warning").then(function(){a.$store.dispatch("remove_barcode_label",t),a.$alert("Deleted","success","success")})},edit:function(e,t){this.$router.push({name:"create_label",params:{index:e,label:t}})},page_remove:function(e){var t=this;t.$confirm("Do you want to remove?","warning","warning").then(function(){t.$store.dispatch("remove_label_page",e),t.$alert("Deleted","success","success")})},page_edit:function(e,t){this.$router.push({name:"barcodePage",params:{index:e,template:t}})}}}},PLyV:function(e,t,a){var n=a("qzpY");(n="string"==typeof n?[[e.i,n,""]]:n).locals&&(e.exports=n.locals);var o=(0,a("SZ7m").default)("4db8c408",n,!1,{});n.locals||e.hot.accept("qzpY",function(){var t=a("qzpY");"string"==typeof t&&(t=[[e.i,t,""]]),o(t)}),e.hot.dispose(function(){o()})},RecS:function(e,t,a){"use strict";function n(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",[e._v("Angalware Report 1.0.8")]),e._v(" "),a("h6",[e._v("Lables")]),e._v(" "),0==e.$store.state.saved_barcode_engines.length?a("div",{staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[e._v("\nNot Found\n    ")]):e._l(e.$store.state.saved_barcode_engines,function(t,n){return a("div",{key:"barcode"+n,staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[a("div",[e._v("\n"+e._s(n+1)+". "+e._s(t.name)+"\n"),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("fa",{staticClass:"tools_style",attrs:{icon:"trash"},on:{click:function(t){return e.action("remove",n)}}}),e._v(" "),a("fa",{staticClass:"tools_style",attrs:{icon:"pencil-alt"},on:{click:function(a){return e.edit(n,t)}}})],1)])])}),e._v(" "),a("h6",[e._v("Pages")]),e._v(" "),0==e.$store.state.save_label_pages.length?a("div",{staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[e._v("\nNot Found\n    ")]):e._l(e.$store.state.save_label_pages,function(t,n){return a("div",{key:"page"+n,staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[a("div",[t?a("div",[e._v("\n"+e._s(n+1)+". "+e._s(t.name)+"\n"),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("fa",{staticClass:"tools_style",attrs:{icon:"trash"},on:{click:function(t){return e.page_remove(n)}}}),e._v(" "),a("fa",{staticClass:"tools_style",attrs:{icon:"pencil-alt"},on:{click:function(a){return e.page_edit(n,t)}}})],1)]):e._e()])])}),e._v(" "),a("h6",[e._v("Report Templates")]),e._v(" "),0==e.$store.state.saved_templates.length?a("div",{staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[e._v("\nNot Found\n    ")]):e._l(e.$store.state.saved_templates,function(t,n){return a("div",{key:"templates"+n,staticStyle:{cursor:"pointer",color:"white",background:"orange",padding:"5px","margin-bottom":"2px",border:"1px solid black"}},[a("div",[e._v("\n"+e._s(n+1)+". "+e._s(t.name)+"\n"),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("fa",{staticClass:"tools_style",attrs:{icon:"trash"},on:{click:function(t){return e.template_remove(n)}}}),e._v(" "),a("fa",{staticClass:"tools_style",attrs:{icon:"pencil-alt"},on:{click:function(a){return e.template_edit(n,t)}}}),e._v(" "),a("fa",{staticClass:"tools_style",attrs:{icon:"eye"},on:{click:function(a){return e.template_preview(n,t)}}})],1)])])}),e._v(" "),a("h6",[e._v("Report Creation")]),e._v(" "),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[e._l(e.create_navbar,function(t,n){return a("div",{key:"page"+n,staticClass:"box",on:{click:function(a){return e.$router.push({name:t.route})}}},[a("span",{staticStyle:{color:"white"}},[e._v(e._s(t.title))])])}),e._v(" "),a("div",{staticClass:"box",on:{click:e.show_full_screen}},[a("span",{staticStyle:{color:"white"}},[e._v("SETTINGS")])])],2),e._v(" "),a("div",{ref:"setting",staticClass:"hide_page "},[a("div",{staticStyle:{cursor:"pointer",padding:"10px","text-align":"right"},on:{click:e.show_full_screen}},[a("b",[e._v("close")])]),e._v(" "),a("div",[e._v("\nUpload Font\n"),a("hr"),e._v(" "),a("div",{staticStyle:{display:"flex","flex-direction":"column",width:"30%"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.font_name,expression:"font_name"}],staticStyle:{margin:"5px"},attrs:{placeholder:"Name(*)",type:"text"},domProps:{value:e.font_name},on:{input:function(t){t.target.composing||(e.font_name=t.target.value)}}}),e._v(" "),a("input",{staticStyle:{margin:"5px"},attrs:{type:"file",accept:".ttf,.woff,.woff2,.otf,.eot"},on:{change:function(t){return e.file_upload(t,"font_family")}}})]),e._v(" "),a("button",{staticStyle:{margin:"5px"},on:{click:e.add_font_family}},[e._v("Add")]),e._v(" "),a("button",{staticStyle:{margin:"5px"},on:{click:function(){e.font_name=""}}},[e._v("Clear")])])]),e._v(" "),a("div",[e._v("\nUpload Gallery\n"),a("hr"),e._v(" "),a("div",{staticStyle:{display:"flex","flex-direction":"column",width:"30%"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.media_name,expression:"media_name"}],staticStyle:{margin:"5px"},attrs:{placeholder:"Name(*)",type:"text"},domProps:{value:e.media_name},on:{input:function(t){t.target.composing||(e.media_name=t.target.value)}}}),e._v(" "),a("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.file_upload(t,"media")}}})]),e._v(" "),a("button",{staticStyle:{margin:"5px"},on:{click:e.add_media}},[e._v("Add")]),e._v(" "),a("button",{staticStyle:{margin:"5px"},on:{click:function(){e.media_name=""}}},[e._v("Clear")])]),e._v(" "),a("div",{staticStyle:{display:"flex",flex:"1"}},[a("div",{staticStyle:{flex:"1"}},[e._v("\n    Font family\n    "),a("hr"),e._v(" "),e._l(e.font_family,function(t,n){return a("div",{key:"font_family"+n},[e._v("\n"+e._s(t.name)+"- "),a("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.remove_font_family(n)}}},[e._v("remove")])])})],2),e._v(" "),a("div",{staticStyle:{flex:"1"}},[e._v("\nMedia\n    "),a("hr"),e._v(" "),e._l(e.media,function(t,n){return a("div",{key:"font_family"+n},[e._v("\n"+e._s(t.name)+"- "),a("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:t.base64,alt:""}}),e._v(" "),a("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.remove_media(n)}}},[e._v("remove")])])})],2)])])])],2)}a.r(t);var o=[];n._withStripped=!0,a.d(t,"render",function(){return n}),a.d(t,"staticRenderFns",function(){return o})},qzpY:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,".tools_style[data-v-97a0e004]{margin:0 6px}.box[data-v-97a0e004]{cursor:pointer;height:100px;border:1px solid;width:140px;justify-content:center;display:flex;align-items:center;background:orange;box-shadow:1px 0px 3px;margin:2px}.hover[data-v-97a0e004]{background:rgba(203,203,210,0.15)}.hover[data-v-97a0e004]:hover{color:yellow}.nav-link[data-v-97a0e004]{color:white}.nav-item[data-v-97a0e004]{list-style-type:none}#sidebar[data-v-97a0e004]{z-index:999;background:#7386D5;color:#fff;transition:all 0.3s}.full_screen[data-v-97a0e004]{position:fixed;top:0;left:0;z-index:111;background:white;width:100% !important;height:100% !important;overflow:scroll !important}.hide_page[data-v-97a0e004]{height:0;overflow:hidden}\n",""])},r75P:function(e,t,a){"use strict";var n=a("PLyV");a.n(n).a}}]);