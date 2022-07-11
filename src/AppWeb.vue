<template>
 <v-app :class="{bgRed:['index','branches','login'].includes($route.name)}">
  <router-view name="outer"></router-view>
  <v-app-bar
   app
   clipped-left
v-if="!['index','branches','login'].includes($route.name)"
   color="#ff0000"
  >
   <v-app-bar-nav-icon v-if="['index','adminDashboard','operatorDashboard','verifierDashboard'].includes($route.name)" style="color:white" @click="$store.commit('navbarMenu', {})">
   </v-app-bar-nav-icon>
   <v-icon v-else @click="$router.go(-1)">fa-chevron-left</v-icon>

   <span
    style=" display:flex;   color: aliceblue;
  "
    class="title ml-3 mr-5"
    > 
    <img src="interplex.svg">
    </span
   >

   <!--  -->
   <v-spacer></v-spacer>
   <div style="margin:0 5px" >
   </div>
  </v-app-bar>
  <navbar-web
   ></navbar-web>
  <v-main>
   <v-container
    fluid

   >
    <router-view></router-view>
    
   </v-container>
  </v-main>


  
 </v-app>
</template>

<script>
/*eslint-disable*/
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
 mounted() {
  var $vm = this;

 },
 watch: {
 },
 methods: {
 },
};
</script>
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

.bgRed
{
  background:red;
}
</style>