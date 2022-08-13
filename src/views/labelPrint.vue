<template>
    <div>

        <iframe

            id="barcodeLabelPlugin"
            :src="'./barcode/mobileBarcodeLabel.html'"
            style="height:99vh;background:white;width:100%"

            nodeintegration
        ></iframe>

    </div>
</template>

<script>

/* eslint-disable*/
// import * as printData from '../lib/printData.js'
import * as core from '../lib/core.js'
//eslint-disable-next-line
import { jsPDF } from "jspdf";
//eslint-disable-next-line
const fs = require("fs");
//eslint-disable-next-line
const path = require("path");
//eslint-disable-next-line
function element() {
    return {
        pos_paper: document.getElementById("barcodeLabelPlugin")
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
// --------------------------printer operation-------------------------
 print() {
    var $vm=this;
            $vm.printData()
     var view=element().pos_paper.contentDocument.getElementsByTagName("html")[0].innerHTML;
            var $vm=this;
            if (core.isDeviceDetect()) {
                document.addEventListener(
                    "deviceready",
                    function() {
                        
       cordova.plugins.pdf.htmlToPDF({
          data: view,
          type: "share"
        },
          () => { 
    //         //   ----------------------------------base64---------------------------------
    // cordova.plugins.pdf.htmlToPDF({data: view,type: "base64"},
    //       (base64) => { 
    //                       window.plugins.socialsharing.share(null, 'angalware_inv_'+new Date().valueOf()+'', 'data:application/pdf;base64,'+base64+'', null)        },
    //      (error) => console.log('error:', error));
    // // ------------------------------------------------base64--------------------------
},

         (error) => console.log('error:', error)
   );

                    },
                    false
                );
            } else {
                window.frames["barcodeLabelPlugin"].focus();
                window.frames["barcodeLabelPlugin"].contentWindow.print();
            }
        },
        printData(){
                     
                     var $vm=this
// console.log("+++++++++barcodelabel+++++++++ ",$vm.invoice_data,printData.barcodeLabel($vm.invoice_data))
var prepare_data={}
prepare_data['pageSetup']=this.invoice_data.pageSetup
// prepare_data['name']=$vm.$store.state.barcodeLabel.html;
prepare_data['html']=$vm.invoice_data.html
//$vm.$store.state.barcodeLabel.html;
prepare_data['css']=$vm.invoice_data.css
//$vm.$store.state.barcodeLabel.css;
prepare_data['js']=$vm.invoice_data.js;
prepare_data['data_set']=$vm.invoice_data.data_set//[printData.barcodeLabel($vm.invoice_data)]


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
