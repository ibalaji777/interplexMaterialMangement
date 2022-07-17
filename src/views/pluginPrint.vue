<template>
    <div>
        <!-- {{invoice_data}} -->

        <!-- <v-btn @click="print()" color="orange" style="color:white">Print</v-btn> -->
        <!-- <v-btn @click="barcode_label()" color="orange" style="color:white">Prepare Barcode</v-btn> -->


        <iframe

            id="invoice_type_plugin"
            :src="'./report/invoice_type_template_mobile.html'"
            style="height:99vh;background:white;width:100%"

            nodeintegration
        ></iframe>

<!-- <div             id="invoice_type_plugin"></div> -->
      

        <!-- <div class="window" v-if="loader">
            <div id="someid" class="loader_container">
                <img src="/loader.svg" id="loader" />
            </div>
        </div> -->
    </div>
</template>

<script>

// const format_page={};
/* eslint-disable*/
import * as printData from '../lib/printData.js'
import * as core from '../lib/core.js'
// import * as helper_utils from "../lib/utils";
// import * as format_page from "../comman_medium/print_paper_data";
//eslint-disable-next-line
import { jsPDF } from "jspdf";
//eslint-disable-next-line
const fs = require("fs");
//eslint-disable-next-line
const path = require("path");
//eslint-disable-next-line
// const {app, BrowserWindow} = require('electron')

// const { dialog } = require("electron").remote;
function element() {
    return {
        pos_paper: document.getElementById("invoice_type_plugin")
    };
}
export default {
    props: ["invoice_data"],
    data() {
        return {
            isReportType:'report',
            loader: true,
        };
    },
    mounted() {
        var $vm=this;
        // alert("--iam form--printer--")
if($vm.type){

    $vm.isReportType='print'
}

   var iframe = element().pos_paper; 

   iframe.addEventListener('load',()=>{
   
        this.print_paper_init();
        $vm.loader=false;
   })
        // this.print_paper_watch();
    },
    methods: {
        barcode_label(){

        },
        // pdf_generation(action) {
        //     if (action == "native") {
        //         element().pos_paper.printToPDF(
        //             {
        //                 // marginsType: 1,
        //                 printBackground: true,
        //                 printSelectionOnly: false
        //             },
        //             (error, data) => {
        //                 if (error) {
        //                     throw error;
        //                 }
        //                 //console.log('data', data)

        //                 let filePath = dialog.showSaveDialog();
        //                 //console.log(filePath)
        //                 fs.writeFile(`${filePath}.pdf`, data, error => {
        //                     if (error) {
        //                         throw error;
        //                     }

        //                     //console.log('Write PDF successfully.')
        //                 });
        //             }
        //         );
        //     }
        // },
        openPDF() {
            element().pos_paper.printToPDF(
                {
                    marginsType: 1,
                    printBackground: false
                },
                (error, data) => {
                    if (error) {
                        throw error;
                    }
                    //console.log('data', data)
                    var file = new Blob([data], { type: "application/pdf" });
                    //eslint-disable-next-line
                    var fileURL = URL.createObjectURL(file);
                }
            );
        },
        toPdf() {
            this.pdf_generation("native");
        },
//          pdf(){
//             var $vm=this;
//      if (helper_utils.isDeviceDetect()) {
//                 document.addEventListener(
//                     "deviceready",
//                     function() {

// var view=element().pos_paper.contentDocument.getElementsByTagName("html")[0].innerHTML;

//        cordova.plugins.pdf.htmlToPDF({
//           data: view,
//           type: "base64"
//         },
//           (base64) => { 
//               window.plugins.socialsharing.share(null, 'angalware_inv_'+new Date().valueOf()+'', 'data:application/pdf;base64,'+base64+'', null)

//  },

//          (error) => console.log('error:', error)
//    );


//                     },
//                     false
//                 );
//             } else {
//                 window.frames["invoice_type_plugin"].focus();
//                 window.frames["invoice_type_plugin"].contentWindow.print();
//             }

//         },
        //version 5.0.7  or above
// --------------------------printer operation-------------------------
 print() {
     var view=element().pos_paper.contentDocument.getElementsByTagName("html")[0].innerHTML;
    // console.log(view)
                window.frames["invoice_type_plugin"].focus();
                window.frames["invoice_type_plugin"].contentWindow.print();

//      console.log("invoice_type_plugin code")
//             var $vm=this;
//             if (core.isDeviceDetect()) {
//                 document.addEventListener(
//                     "deviceready",
//                     function() {
                        
//        cordova.plugins.pdf.htmlToPDF({
//           data: view,
//           type: "share"
//         },
//           () => { 
//     //         //   ----------------------------------base64---------------------------------
//     // cordova.plugins.pdf.htmlToPDF({data: view,type: "base64"},
//     //       (base64) => { 
//     //                       window.plugins.socialsharing.share(null, 'angalware_inv_'+new Date().valueOf()+'', 'data:application/pdf;base64,'+base64+'', null)        },
//     //      (error) => console.log('error:', error));
//     // // ------------------------------------------------base64--------------------------
// },

//          (error) => console.log('error:', error)
//    );

//                     },
//                     false
//                 );
//             } else {
//                 window.frames["invoice_type_plugin"].focus();
//                 window.frames["invoice_type_plugin"].contentWindow.print();
//             }
        },
//  print(){
//       if (helper_utils.isDeviceDetect()) {
//                 document.addEventListener(
//                     "deviceready",
//                     function() {
//                         //  alert("work print")

//                         //    console.log(element().pos_paper.contentDocument.getElementsByTagName("html")[0])
//                         cordova.plugins.printer.print(
//                             element().pos_paper.contentDocument.getElementsByTagName(
//                                 "html"
//                             )[0]
//                         );
//                     },
//                     false
//                 );
//             } else {
//                 // window.print()

//                 //  console.log("------print test----")
//                 //  console.log(element().pos_paper.contentDocument)
//                 //   console.log(element().pos_paper.contentDocument.html)
//                 //    console.log(element().pos_paper.contentDocument.body)
//                 //     console.log(window.frames["paper"].contentWindow)
//                 window.frames["paper"].focus();
//                 window.frames["paper"].contentWindow.print();
//             }
 
// //     return new Promise((resolve,reject)=>{

// //     var $vm=this;
// //      var iframe = element().pos_paper;

// //     if($vm.$store.state.control.device.selected_device!=''){
// //  console.log("printer name selected")
// //  console.log($vm.$store.state.control.device.selected_device)
// //                 // iframe.openDevTools();
        
// //          iframe.print(
// //                     {
// //                         silent: !$vm.$store.state.control.print_paper_setup.showPrintDialog,
// //                         printBackground: true,
// //                         deviceName: $vm.$store.state.control.device.selected_device
// //                     }
// //                 )

// //                 .then((success)=>{
// //                     console.log(success)
// // resolve(success)
// //                 })
// //                 .catch((error)=>{
// // console.log(error)
// //                     reject(error)
// //                 });
// //     }
// //     else{

// // console.log("printer dialog")
// //  iframe.print(
// //                     {
// //                         printBackground: true,
// //                     }
                    
// //                 )
// // .then((success)=>{
                
// // resolve(success)
// //                 })
// //                 .catch((error)=>{
// //                     reject(error)
// //                 });

// //     }
// //     })

// },
        //version 3.0.13  or below
        // print() {
        //     return new Promise((resolve, reject) => {
        //         var $vm = this;
        //         var iframe = element().pos_paper;
        //         if ($vm.$store.state.control.device.selected_device != "") {
        //             iframe.openDevTools();

        //             iframe.print(
        //                 {
        //                     silent: !$vm.$store.state.control.print_paper_setup
        //                         .showPrintDialog,
        //                     printBackground: true,
        //                     deviceName:
        //                         $vm.$store.state.control.device.selected_device
        //                 },
        //                 (success, errorType) => {
        //                     if (!success) {
        //                         //console.log("not working print" + errorType);
        //                         reject(errorType);
        //                     }
        //                     if (success) {
        //                         resolve(success);
        //                     }
        //                 }
        //             );
        //         } else {
        //             console.log("printer dialog");
        //             iframe.print(
        //                 {
        //                     // silent: false,
        //                     printBackground: true
        //                     // deviceName: $vm.$store.state.control.device.selected_device
        //                 },
        //                 (success, errorType) => {
        //                     if (!success) {
        //                         console.log("not working print" + errorType);
        //                         reject(errorType);
        //                     }
        //                     if (success) {
        //                         resolve(success);
        //                     }
        //                 }
        //             );

        //             // $vm.$alert("Please Select Device",'Failed','error')
        //             // reject('select printer device')
        //         }
        //     });
        // },
        printData(){
                     
                     var $vm=this
// console.log("invoice data",$vm.invoice_data)
var data=printData.printData($vm.invoice_data)
console.log("print data",data)
var prepare_data={}
prepare_data['id']='';
prepare_data['name']='';
prepare_data['html']=printData.qasForm.html;
prepare_data['css']=printData.qasForm.css;
prepare_data['js']='';
prepare_data['data_set']=printData.printData($vm.invoice_data)

// printData.printData($vm.invoice_data)
// prepare_data['data_set']=format_page.angalware_report_invoice_template(
//                         $vm.invoice_data
//                     );

return prepare_data;
        },
        print_paper_init() {
            var $vm = this;
   var iframe = element().pos_paper; 


    // Send a message to the child iframe
    var iframeEl = iframe;
    // Send a message to the child iframe
    var sendMessage = function(msg) {
    // Make sure you are sending a string, and to stringify JSON
    iframeEl.contentWindow.postMessage(msg, '*');
    };
    var page_render=$vm.printData()
    // console.log("--print paper init--")
    // console.log(page_render)
    $vm.$nextTick(()=>{
    sendMessage(JSON.stringify(page_render))

    })
  },
        print_paper_watch() {
            var $vm = this;
          
          $vm.print_paper_init()
    
        }
    },
    watch: {
        invoice_data: {
            handler() {
                this.print_paper_watch();
            },
            deep: true
        }
    }
};
</script>
<style lang="scss" scoped>
// ------loader-----------


//----------loader-----

</style>
