<template>
    <div>
            <!-- {{invoice_data}} -->

         <webview
                 
                       id="paper"
            :src="'./barcode/desktopBarcodeLabel.html'"
                       style="height:100vh;"
                        nodeintegration
                    ></webview>
 <div style="z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;background:#685da7" v-if="loader">
          <div class="window" >
            <div id="someid" class="loader_container">
                <img style="max-width:100px" src="/loader.svg" id="loader" />
            </div>
            </div>
        </div>
    </div>
</template>


<script>
/*eslint-disable*/
//eslint-disable-next-line
const html2canvas = require("html2canvas");
//eslint-disable-next-line
import { jsPDF } from "jspdf";
//eslint-disable-next-line
const fs = require('fs')
//eslint-disable-next-line
// const path = require('path')
//eslint-disable-next-line
// const {app, BrowserWindow} = require('electron')

// const { dialog } = require("electron").remote;
function element() {
    return {
        pos_paper: document.getElementById("paper")
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
this.print_paper_init();
this.print_paper_watch();

console.log("++++selected print+++")
console.log($vm.$store.state.printer.label)
}
,methods:{
            pdf_generation(action) {
                // alert("triggered")
            if (action == "native") {
                           import('electron')
    .then((electron) => {
   const { dialog } = electron.remote;

                console.log("pdf generate started")
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
           
    })}
        },
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
  var webview = element().pos_paper; // document.getElementById("paper");

         webview.print(
                    {
                        silent:true,
                        // silent: !$vm.$store.state.control.print_paper_setup.showPrintDialog,
                        printBackground: true,
                        deviceName: $vm.$store.state.printer.label
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

        print_paper_init() {
            var $vm = this;
 
            var webview = element().pos_paper; //document.getElementById("paper");
var load_page=() => {



                // webview.openDevTools();
                // $vm.print_paper_setup["sales"] = $vm.sales;
                // });
                try {
                    webview.send("ping", $vm.invoice_data);
                } catch (error) {
                    console.log("");
                }
                $vm.loader=false
    $vm.$emit('load')
            }
            webview.addEventListener("dom-ready",load_page );
        },
           print_paper_watch() {
            var $vm = this;
            var webview = element().pos_paper; //document.getElementById("paper");

            // $vm.print_paper_setup["sales"] = $vm.sales;

            try {
                webview.send("ping", $vm.invoice_data);
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
.loader_container{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>