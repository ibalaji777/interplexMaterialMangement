<template>
 <v-app>



  <div id="reader" width="600px"></div>


 </v-app>
</template>
<script>
/*eslint-disable*/
import {Html5Qrcode} from "html5-qrcode"
export default {
    methods:{
    },
mounted(){
var $vm=this;
Html5Qrcode.getCameras().then(devices => {
  console.log(devices)
if (devices && devices.length) {
const qrCodeSuccessCallback =async (decodedText, decodedResult) => {
    /* handle success */
var result=await $vm.$store.dispatch('getQasOne',decodedText)
console.log("result qasformsingle")
console.log(result)
$vm.$router.push({name:'qasFormView',params:{invoice:result.invoice}})



document.location.href = 'index.html';
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };
const html5QrCode = new Html5Qrcode(/* element id */ "reader");
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
  }
}).catch(err => {
  // handle err
});
}
};
</script>
<style lang="scss"></style>