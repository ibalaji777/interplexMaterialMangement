<template>
 <v-app
  :class="{
   bgStartScreen: ['index', 'branches', 'login', 'userRole', 'startapp'].includes(
    $route.name
   ),
  }"
 >

 <!-- {{$store.state.interplex.configHeaderFormat}} -->
<!-- <img src="/wavetop.svg" alt=""> -->
  <!-- <plugin-print></plugin-print> -->
  <router-view name="outer"></router-view>
  <loader :isLoading="$store.state.loader"></loader>
  <v-app-bar
   app
   clipped-left
   v-if="
    !['qrScan', 'index', 'branches', 'login', 'userRole', 'startapp'].includes(
     $route.name
    )
   "
   class="bgApp"
  >
   <v-app-bar-nav-icon
    v-if="
     [
      'index',
      'adminDashboard',
      'operatorDashboard',
      'verifierDashboard',
     ].includes($route.name)
    "
    style="color:white"
    @click="$store.commit('navbarMenu', {})"
   >
   </v-app-bar-nav-icon>
   <v-icon style="color:white" color="white" v-else @click="back">mdi-arrow-left</v-icon>

   <span
    style=" display:flex;   color: aliceblue;
  "
    class="title ml-3 mr-5"
   >
    <img src="interplex.svg" />
   </span>

   <!-- this.$parent.someMethod(); -->
   <!--  -->
   <v-spacer></v-spacer>
   <v-icon ref="sync" @click="load" style="color:white">fa-sync</v-icon>
   <div style="margin:0 5px"></div>
  </v-app-bar>
  <navbar-web></navbar-web>
  <v-main>
    <!-- {{$store.state.interplex.printConfig}} -->
   <v-container fluid style="width:100%">
    <router-view style="width:100%"></router-view>
   </v-container>
  </v-main>
 </v-app>
</template>
<script>
/*eslint-disable*/
import * as config from "./lib/config.js";
const { io } = require("socket.io-client");
import * as core from './lib/core.js'

// var vm = require('vm');
 
// window.addEventListener('load', function () {
//     var res = vm.runInNewContext(`
//     function map(){
//       var ab=parseFloat(a).toFixed(2) 
//       return ab

//       }
//      map()`, { a : 100 });
//    console.log("+++++vm code++++",res)
// });
const socket = io(config.getApi());
export default {
 props: {
  source: String,
 },
 data: () => ({
  auto_backup_dialog: false,
  hide_access: false,
  drawer: null,
  loader: false,
  items: [
   { title: "sales entry", icon: "dashboard", action: "sales_entry" },
   { title: "product entry", icon: "dashboard", action: "product_entry/child" },
   { title: "company", icon: "dashboard", action: "company" },
   { title: "employee", icon: "account_box", action: "employee" },
   { title: "customer", icon: "gavel", action: "customer" },
   { title: "supplier entry", icon: "gavel", action: "supplier_entry" },
   { title: "Products import", icon: "dashboard", action: "product_import" },
   { title: "Products", icon: "dashboard", action: "" },
   { title: "Sales Return", icon: "account_box", action: "sales_return" },
   { title: "Quotation", icon: "gavel", action: "quotation" },
   { title: "Purchase Entry", icon: "dashboard", action: "purchase_entry" },
   { title: "Purchase Return", icon: "account_box", action: "purchase_return" },
   { title: "Purchase Order", icon: "gavel", action: "purchase_order" },
   { title: "Suplier Paid", icon: "dashboard", action: "suplier_paid" },
   { title: "Customer Paid", icon: "account_box", action: "customer_paid" },
   { title: "Barcode", icon: "gavel", action: "barcode" },
   { title: "Sales Report", icon: "dashboard", action: "sales_report" },
   { title: "Purchase", icon: "account_box", action: "purchase" },
   { title: "Stock", icon: "gavel", action: "stock" },
   { title: "Suplier Ledger", icon: "dashboard", action: "create_table" },
   { title: "Customer Ledger", icon: "account_box", action: "quotation" },
   { title: "Profit and Loans", icon: "gavel", action: "quotation" },
   { title: "Gst Report", icon: "dashboard", action: "gst_report" },
   { title: "pos paper", icon: "dashboard", action: "pos_editor" },
   { title: "sender", icon: "dashboard", action: "sender" },
  ],
 }),
 async mounted() {
  var $vm = this;
  // ---------------------setup config------------------------------------
  $vm.load();
  // ---------------------------------------------------------

  if (!(await $vm.$store.dispatch("startUserIfNotExist"))) {
   $vm.$router.push({ name: "startapp" });
  }

  $vm.$store.commit("closeNavbarMenu");





//   socket.on("watchQasFormConfig", async (data) => {
// await $vm.$store.dispatch("labelSettingRead");  });
  socket.on("watchGuiQasFormOne", async (data) => {
await $vm.$store.dispatch("getGuiQasFormOne");  });

  socket.on("watchGuiQasFormTwo", async (data) => {
await $vm.$store.dispatch("getGuiQasFormTwo");  });

  socket.on("watchGuiHeader", async (data) => {
await $vm.$store.dispatch("getGuiHeader");  });



  socket.on("watchQasFormOneDefault", async (data) => {
await $vm.$store.dispatch("getQasFormOneDefault");  });

  socket.on("watchQasFormTwoDefault", async (data) => {
await $vm.$store.dispatch("getQasFormTwoDefault");  });


  socket.on("watchLabelSetting", async (data) => {
await $vm.$store.dispatch("labelSettingRead");  });


  socket.on("invoice_add", async (data) => {
   await $vm.$store.dispatch("approverList");
   socket.emit("test", { my: "data" });
  });
  socket.on("newUserCreated", async (data) => {
   console.log("newUserCreated", data);
   if ($vm.$store.state.interplex.user.roletype != "operator") {
    await $vm.$store.dispatch("getUsers");
   }
  });

  socket.on("productCreated", async (data) => {
   console.log("productCreated", data);
   if ($vm.$store.state.interplex.user.roletype != "operator") {
    await $vm.$store.dispatch("getProducts");
   }
  });

  socket.on("userRemoved", async (data) => {
   console.log("userRemoved", data);
   if ($vm.$store.state.interplex.user.roletype != "operator") {
    await $vm.$store.dispatch("getUsers");
   }
  });
  socket.on("watchHeaderConfig", async (data) => {
    await $vm.$store.dispatch("getHeaderConfig");
  });

  socket.on("watchDefaultConfig", async (data) => {
    await $vm.$store.dispatch("getDefaultImport");
  });

  socket.on("watchSapImportConfig", async (data) => {
    await $vm.$store.dispatch("getSapImport");
  });


 },
 watch: {
 "$store.state.date":{
async handler(){
  var $vm=this;
  console.log("date changing...")
   await $vm.$store.dispatch("approverList");

},deep:true


 },
 },
 methods: {
  async load() {
   var $vm = this;

   // ---------------------setup config------------------------------------
await $vm.$store.dispatch("getQasFormOneDefault"); 
await $vm.$store.dispatch("getQasFormTwoDefault"); 

    await $vm.$store.dispatch("getProductConfig");
   await $vm.$store.dispatch("readQasForm2Config");
   await $vm.$store.dispatch("getProducts");
   await $vm.$store.dispatch("getHeaderConfig");



//  await $vm.$store.dispatch("getQasFormOneByDate");

await $vm.$store.dispatch("labelSettingRead");
   await $vm.$store.dispatch("datOneCodeGet");
   await $vm.$store.dispatch("datTwoCodeGet");
   await $vm.$store.dispatch("approverList");
   await $vm.$store.dispatch("getSapImport");
   await $vm.$store.dispatch("getDefaultImport");
   await $vm.$store.dispatch('getPrintConfig')
await $vm.$store.dispatch("getGuiQasFormOne"); 

await $vm.$store.dispatch("getGuiQasFormTwo"); 
await $vm.$store.dispatch("getGuiHeader");
await $vm.$store.dispatch("rulesList");
// if(get){

// core.setDefaultFields();

// }
  //  await $vm.$store.dispatch("getHeaderConfig");


   // ---------------------------------------------------------
  },

  back() {
   var $vm = this;
   //     if($vm.$route.name=='qasFormView'){
   // $vm.$router.push({name:'approverList'})
   // return ;
   //     }

   $vm.$router.go(-1);
  },
 },
};
</script>
<style lang="scss">
@import url('./assets/interplex.scss');  
</style>
<style lang="scss" scoped>

.navbar {
 position: fixed;
 width: 100%;
 top: 0;
 left: 0;
 z-index: 100;
 // overflow: hidden;
 background-color: #e9e9e9;
}
.navbar a {
 float: left;
 font-size: 12px;
 color: black;
 text-align: center;
 padding: 5px 5px;
 text-decoration: none;
}
.dropdown {
 float: left;
 overflow: hidden;
}
.dropdown .dropbtn {
 font-size: 12px;
 border: none;
 outline: none;
 color: black;
 padding: 5px 5px;
 background-color: inherit;
 font-family: inherit;
 margin: 0;
}
.navbar a:hover,
.dropdown:hover .dropbtn {
 background-color: red;
}
.dropdown-content {
 display: none;
 position: absolute;
 background-color: white;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
 z-index: 100;
 border: 1px solid black;
 padding: 5px;
}
.dropdown-content a {
 float: none;
 color: black;
 padding: 12px 16px;
 text-decoration: none;
 display: block;
 text-align: left;
}
.dropdown-content a:hover {
 background-color: #ddd;
}
.dropdown:hover .dropdown-content {
 display: block;
}
html::-webkit-scrollbar {
 display: none;
}
.hide_access {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: white;
 z-index: 100000000;
 opacity: 0.9;
}
.hide_aceess_center {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateXY(-50%, -50%);
}
//welcome screen styles
.window__ {
 position: fixed;
 top: 0;
 z-index: 1000;
 // opacity: 0.9;
 background: orange;
 // give this some width
 width: 100%;
 height: 100%;
}
.header__ {
 color: white;
 font-size: 25px;
 font-family: fantasy;
 top: 50%;
 position: absolute;
 left: 50%;
 transform: translate(-50%, -50%);
}

.bgStartScreen {
 background:#061f5c;
}
.theme--light.v-application {
 // background: none  !important;;
}
.bgApp {
 background: #061f5c; 
 background: linear-gradient(
  291deg,
  #061f5c 0%,
  #061f5c 35%,
  #061f5c 100%
 );
}
</style>
