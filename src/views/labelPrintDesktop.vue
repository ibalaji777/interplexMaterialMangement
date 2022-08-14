<template>
    <div>
        <!-- {{render_data.duedays}} -->
        <!-- {{url}}
        {{render_data.sales}} -->
        <!-- {{$store.state.control.print_paper_setup.paper_setup}} -->
      <!-- {{render_data.sales}} -->
         <!-- pdf viewer
                        <webview
                 id="pdf_viewer"
                       src="file:///static/pdf_viewer/viewer.html"
                       style="height:100vh;"
                        nodeintegration
                    ></webview> -->
            <!-- {{url}} -->
            {{invoice_data}}

         <webview
                 
                       id="paper"
            :src="'./barcode/desktopBarcodeLabel.html'"
                       style="height:100vh;"
                        nodeintegration
                    ></webview>
                            <div class="window" v-if="loader">
            <div id="someid" class="loader_container">
                <img src="/loader.svg" id="loader" />
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

const { dialog } = require("electron").remote;
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
// console.log(this.url)
// var pdf_viewer=document.getElementById("pdf_viewer");
//   pdf_viewer.addEventListener("dom-ready",()=>{

// pdf_viewer.openDevTools();

//   } );
this.print_paper_init();
this.print_paper_watch();
}
,methods:{
            pdf_generation(action) {
                // alert("triggered")
            if (action == "native") {
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

//             element().pos_paper.printToPDF({
//         // pageSize: {
//         //     width: round(webview.clientWidth * MICRON),
//         //     height: round(webview.clientHeight * MICRON)
//         // },
//         marginsType: 1,
//         printBackground: false,
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
            // ---------------------
//          element().pos_paper.capturePage(function (ph) {
//   var pr = ph.toDataURL();
//   console.log(pr)
//         var doc = new jsPDF({
//                         orientation: "portrait"
//                     });
//                     var img = pr;

//                     const imgProps = doc.getImageProperties(img);
//                     const pdfWidth = doc.internal.pageSize.getWidth();
//                     const pdfHeight =
//                         (imgProps.height * pdfWidth) / imgProps.width;

//                     // window.open(img);
//                     doc.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
//                     doc.save("Test.pdf");
              
// });
// ----------------------------------------
            // console.log("topdfcaptured");
            // html2canvas(element().pos_paper, {
            //     // onrendered: function(canvas) {
            //     //     console.log("are you working");
            //     //     // var img = canvas.toDataURL();
            //     //     // window.open(img);
            //     // }
            // })
            //     .then(canvas => {
            //         //   console.log("are you working");
            //         var doc = new jsPDF({
            //             orientation: "landscape"
            //         });
            //         var img = canvas.toDataURL("image/png");

            //         const imgProps = doc.getImageProperties(img);
            //         const pdfWidth = doc.internal.pageSize.getWidth();
            //         const pdfHeight =
            //             (imgProps.height * pdfWidth) / imgProps.width;

            //         window.open(img);
            //         doc.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
            //         doc.save("Test.pdf");
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
        },
// version 5.0.0 above
        print(){
    var $vm=this;
    // if($vm.$store.state.control.device.selected_device!=''){
  var webview = element().pos_paper; // document.getElementById("paper");

         webview.print(
                    {
                        // silent: !$vm.$store.state.control.print_paper_setup.showPrintDialog,
                        printBackground: true,
                        // deviceName: $vm.$store.state.control.device.selected_device
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



                webview.openDevTools();
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
</style>