(window.webpackJsonp$angalware_report=window.webpackJsonp$angalware_report||[]).push([[11],{"3AMv":function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"",""])},BKQU:function(e,t,n){"use strict";function l(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label label_outline",staticStyle:{position:"relative"},attrs:{type:e.page_style.labelType+"-page_width-"+e.page_style.width}},e._l(e.widgets,function(e,t){return n("div",{key:"key"+t},[n(e.comp,{key:t+e.data_uq,tag:"component",attrs:{widget:e}})],1)}),0)}n.r(t);var a=[];l._withStripped=!0,n.d(t,"render",function(){return l}),n.d(t,"staticRenderFns",function(){return a})},VWMm:function(e,t,n){"use strict";t.a={editable_prefix_class:"isat",style_class:"css_style",custom_font:"font_collection",tooltip_style_render:"template",tooltip:".ipoptool",editor:'*[data-tl="_txt_"]',tooltipEditor:".istyle_editor",ang_image:".ang_image",context_menu:"*[data-tl]"}},bu1P:function(e,t,n){var l=n("3AMv");(l="string"==typeof l?[[e.i,l,""]]:l).locals&&(e.exports=l.locals);var a=(0,n("SZ7m").default)("9a3e42f0",l,!1,{});l.locals||e.hot.accept("3AMv",function(){var t=n("3AMv");"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},gSDE:function(e,t,n){"use strict";n.r(t),n.d(t,"draggable",function(){return r}),n.d(t,"observe",function(){return s}),n.d(t,"cssExecute",function(){return o}),n.d(t,"template_engine",function(){return c}),n.d(t,"update_wygsiwyg",function(){return d});t=n("UBTA");var l=n.n(t),a=n("VWMm");function i(){var e=function(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([""]);return i=function(){return e},e}var r=function(e,t){function n(e){var n=e.target,l=(parseFloat(n.getAttribute("data-x"))||0)+e.dx;e=(parseFloat(n.getAttribute("data-y"))||0)+e.dy;t.style.webkitTransform=t.style.transform="translate("+l+"px, "+e+"px)",n.setAttribute("data-x",l),n.setAttribute("data-y",e)}l()(e).draggable({inertia:!0,modifiers:[l.a.modifiers.restrictRect({endOnly:!0})],autoScroll:!0,listeners:{move:n,end:function(e){}}}),window.dragMoveListener=n};function s(e,t){new MutationObserver(function(e,n){var l=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(l=(r=s.next()).done);l=!0){var o=r.value;("childList"===o.type||"attributes"===o.type)&&t()}}catch(e){a=!0,i=e}finally{try{l||null==s.return||s.return()}finally{if(a)throw i}}}).observe(e,{attributes:!0,childList:!0,subtree:!0})}function o(e,t){var n,l;document.getElementById(e)||(n=document.getElementsByTagName("head")[0],(l=document.createElement("style")).id=e,n.appendChild(l)),document.getElementById(e).innerHTML=t}function c(e,t){return(function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),l=1;l<t;l++)n[l-1]=arguments[l];return function(t){var l=e.slice();return n.forEach(function(e,n){l[n]=l[n]+t[e]}),l.join("")}}(i())+e+"")(t)}function d(e){document.querySelectorAll(a.a.editor).forEach(function(t){t.classList.contains("ql-container")&&e(t)})}},iDjq:function(e,t,n){"use strict";var l=n("gSDE");t.a={props:["widgets","label_style","page_style"],methods:{styleRender:function(){var e,t,n,a,i,r=this;r.label_style&&(i=r.page_style.outline?".label_outline{\n       outline: 1px dotted; /* outline doesn't occupy space like border does */\n}":"",t=Math.ceil(r.page_style.height/r.label_style.height),a="Linear"==r.page_style.labelType?100/t+"%":r.label_style.height+r.label_style.style_type,n=100/(e=parseInt(r.page_style.width/r.label_style.width)),t="Linear"==r.page_style.labelType?n+"%":r.label_style.width+r.label_style.style_type,console.log("page width",r.page_style.width,"label width",r.label_style.width,"ratio",e,"width",n),n=r.label_style.isEnableLabelOverflow?"overflow: hidden;":"",a="Linear"==r.page_style.labelType?"\n@media print {\n.label{\n    width: "+t+";\n    height: "+a+";\n    margin-right: "+r.label_style.marginRight+r.label_style.style_type+";\n    margin-bottom: "+r.label_style.marginBottom+r.label_style.style_type+";\n   display:inline-block;\n    "+n+"\n    background-color: white;\n \n}\n\n}\n":"",i="\n.label{\n    width: "+r.label_style.width+r.label_style.style_type+";\n    height: "+r.label_style.height+r.label_style.style_type+";\n    margin-right: "+r.label_style.marginRight+r.label_style.style_type+";\n    margin-bottom: "+r.label_style.marginBottom+r.label_style.style_type+";\n   display:inline-block;\n  "+n+"\n    background-color: white;\n \n}\n"+a+"\n"+i+"\n",console.log(".label style string",i),l.cssExecute("label",i))},cssExecute:function(e,t){var n,l;document.getElementById(e)||(n=document.getElementsByTagName("head")[0],(l=document.createElement("style")).id=e,n.appendChild(l)),document.getElementById(e).innerHTML=t}},mounted:function(){this.styleRender()},watch:{label_style:{handler:function(){this.styleRender()},deep:!0},page_style:{handler:function(){this.styleRender()},deep:!0},widgets:{handler:function(){this.styleRender()},deep:!0}}}},pniI:function(e,t,n){"use strict";var l=n("bu1P");n.n(l).a},w7TF:function(e,t,n){"use strict";n.r(t);var l=n("BKQU"),a=n("iDjq"),i=(n("pniI"),n("KHd+")),r=(a=Object(i.a)(a.a,l.render,l.staticRenderFns,!1,null,null,null),n("ZDXL"));r.install(n("ukxx")),r.compatible&&(e.hot.accept(),r.isRecorded("24e58fe8")?r.reload("24e58fe8",a.options):r.createRecord("24e58fe8",a.options),e.hot.accept("BKQU",function(e){l=n("BKQU"),r.rerender("24e58fe8",{render:l.render,staticRenderFns:l.staticRenderFns})}.bind(this))),a.options.__file="src/print/angalware_label.vue",t.default=a.exports}}]);