<template>
    <div>
<!-- asdfsdfsdf        {{invoice_data}}asdfsadf -->
        <!-- {{invoice_data.duedays}} -->
        <!-- {{url}}
        {{invoice_data.sales}} -->
        <!-- {{$store.state.control.print_paper_setup.paper_setup}} -->
      <!-- {{invoice_data.sales}} -->
         <!-- pdf viewer
                        <webview
                 id="pdf_viewer"
                       src="file:///static/pdf_viewer/viewer.html"
                       style="height:100vh;"
                        nodeintegration
                    ></webview> -->
            <!-- {{url}} -->

         <webview
                 
                       id="paperDesktop"
            :src="'./report/invoice_type_template.html'"
                       style="height:100vh;"
                        nodeintegration
                    ></webview>
                                        <div style="top:0;left:0;width:100%;height:100%;background:#685da7" v-if="loader">
                            <div class="window" >
            <div style="position:fixed;top:0;bottom:50%;width:100%" id="someid" class="loader_container">
                <img style="max-width:100px" src="/check.gif" id="loader" />
            </div>
                            </div>
        </div>
    </div>
</template>


<script>
/*eslint-disable*/
import * as printData from '../lib/printData.js'
//eslint-disable-next-line
// const html2canvas = require("html2canvas");
//eslint-disable-next-line
import { jsPDF } from "jspdf";
//eslint-disable-next-line
const fs = require('fs')
// eslint-disable-next-line
// const path = require('path')
//eslint-disable-next-line
// const {app, BrowserWindow} = require('electron')

// const { dialog } = require("electron").remote;
function element() {
    return {
        pos_paper: document.getElementById("paperDesktop")
    };
}
export default {
    
    props:['invoice_data'],
    data(){

        return{
    loader:true,
        }
    }
,mounted(){
    var $vm=this;
// console.log(this.url)
// var pdf_viewer=document.getElementById("pdf_viewer");
//   pdf_viewer.addEventListener("dom-ready",()=>{

// pdf_viewer.openDevTools();
console.log("+++selected printer Receipt+++")
console.log($vm.$store.state.printer.receipt)
//   } );
this.print_paper_init();
this.print_paper_watch();
}
,methods:{
        printData(){
                     
var $vm=this
console.log("print data ",printData.printData($vm.invoice_data))
var data=printData.printData($vm.invoice_data)
var prepare_data={}
prepare_data['id']='';
prepare_data['name']='';
prepare_data['html']=printData.template($vm).html;
prepare_data['css']=printData.template($vm).css;
prepare_data['js']='';
prepare_data['data_set']=data
//printData.printData($vm.invoice_data)

// printData.printData($vm.invoice_data)
// prepare_data['data_set']=format_page.angalware_report_invoice_template(
//                         $vm.invoice_data
//                     );

return prepare_data;
        },
            pdf_generation(action) {
                // alert("triggered")
            if (action == "native") {
            import('electron')
    .then((electron) => {
   const { dialog } = electron.remote;

                // console.log("pdf generate started")
                element().pos_paper.printToPDF(
                    {
                        // marginsType: 0,
                        printBackground: true,
                        printSelectionOnly: false
                    },

                )
                .then((data)=>{

dialog.showSaveDialog({
    title:'Save Pdf '
}).then(result=>{
    var filePath=result.filePath;                       
                        fs.writeFile(`${filePath}.pdf`, data, error => {
                            if (error) {
                                throw error;
                            }
                        });
                        })

                })
                .catch(error=>{
                                 if (error) {
                            throw error;
                        }
           
                });

    })
            }
        },
//     pdf_generation(action){
//     if(action=='native'){
//                     element().pos_paper.printToPDF({
//         // pageSize: {
//         //     width: round(webview.clientWidth * MICRON),
//         //     height: round(webview.clientHeight * MICRON)
//         // },
//         marginsType: 1,
//         printBackground: true,
//         printSelectionOnly:false
//     }, (error, data) => {
//         if (error) { throw error }
//         console.log('data', data)
// // console.log(path)
//  let filePath = dialog.showSaveDialog();
//  console.log(filePath)
//         fs.writeFile(`${filePath}.pdf`, data, (error) => {
//             if (error) { throw error }
//             //  var file = new Blob([data], {type: 'application/pdf'});
//     //    var fileURL = URL.createObjectURL(file);
//     //    window.open(fileURL);

//             console.log('Write PDF successfully.')
//         })
//     })

//     }
// },
        openPDF(){
  element().pos_paper.printToPDF({
        marginsType: 1,
        printBackground: false,
    }, (error, data) => {
        if (error) { throw error }
        console.log('data', data)
        var file = new Blob([data], {type: 'application/pdf'});
      //eslint-disable-next-line
      var fileURL = URL.createObjectURL(file);
    })

        },
        toPdf() {

this.pdf_generation('native')
        },
// version 5.0.0 above
        print(){
    var $vm=this;
    // if($vm.$store.state.control.device.selected_device!=''){
  var webview = element().pos_paper; // document.getElementById("paper");

         webview.print(
                    {
                        silent:true,
                        // silent: !$vm.$store.state.control.print_paper_setup.showPrintDialog,
                        printBackground: true,
                        deviceName: $vm.$store.state.printer.receipt
                    }                )
                    .then(()=>{
                        
                        console.log("printed")
                    })
                    .catch(()=>{
                        console.log("error ")
                    });
    // }
    // else{

    //     $vm.$alert("Please Select Device",'Failed','error')
    // }

},
// print(){
//     var $vm=this;
//     if($vm.$store.state.control.device.selected_device!=''){
//   var webview = element().pos_paper; // document.getElementById("paper");

//          webview.print(
//                     {
//                         silent: !$vm.$store.state.control.print_paper_setup.showPrintDialog,
//                         printBackground: true,
//                         deviceName: $vm.$store.state.control.device.selected_device
//                     },
//                     (success, errorType) => {
//                         if (!success)
//                             console.log("not working print" + errorType);
//                     }
//                 );
//     }
//     else{

//         $vm.$alert("Please Select Device",'Failed','error')
//     }

// },
        print_paper_init() {
            var $vm = this;
 
            var webview = element().pos_paper; //document.getElementById("paper");
var load_page=() => {



                // $vm.print_paper_setup["sales"] = $vm.sales;
                // });
                try {
                    webview.send("ping", $vm.printData());
                } catch (error) {
                    console.log("");
                }
                $vm.loader=false
                                // webview.openDevTools();

    $vm.$emit('load')
            }
            webview.addEventListener("dom-ready",load_page );
        },
           print_paper_watch() {
            var $vm = this;
            var webview = element().pos_paper; //document.getElementById("paper");

            // $vm.print_paper_setup["sales"] = $vm.sales;

            try {
                webview.send("ping", $vm.printData());
            } catch (error) {
                console.log("");
            }
        },
     

},
watch:{
    invoice_data:{
        handler(){
this.print_paper_watch();

        },
        deep:true
    }
}
}

</script>
<style lang="scss">
// @import "../../../../assets/loader.scss"    
</style>