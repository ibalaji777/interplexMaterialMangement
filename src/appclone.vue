<template>
  <v-app id="keep">
    <div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Create 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
     <p style="font-size:12px"> Customer</p>
<hr>
      <a href="#">New Customer</a>
      Employee
    <hr>
      <a href="#">New Employee</a>
      Supplier 
<hr>
      <a href="#">New Supplier</a>
    </div>
  </div> 

    <div class="dropdown">
    <button class="dropbtn">Printer 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">

      <a href="#">Network and Devices</a>
      <a href="#">Pos</a>
     
    </div>
  </div> 

    <div class="dropdown">
    <button class="dropbtn">View 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">

      <a href="#">Hide Navbar</a>
      <a href="#">Full Screen</a>
     
    </div>
  </div> 
  <!-- database connectivety -->
  <a href="#news" @click="$router.push({name:'setting'})">Settings</a>

</div>

      <v-navigation-drawer
        v-model="drawer"
style="margin-top:20px;"
  app
  
      clipped-left
      color="amber"
         clipped
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line >
            <!-- <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar> -->

            <v-list-item-content>
              <v-list-item-title>purchase entry</v-list-item-title>
              <v-list-item-subtitle>111</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="nav_action(item.action)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-content>

  <v-container class="grey lighten-5">
    
    <router-view></router-view>
  </v-container>    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
  items: [
  
          { title: 'sales entry', icon: 'dashboard',action:'sales_entry' },
  
          { title: 'product entry', icon: 'dashboard',action:'product_entry/child' },
  
  { title: 'company', icon: 'dashboard',action:'company' },
          { title: 'employee', icon: 'account_box' ,action:'employee' },
          { title: 'customer', icon: 'gavel' ,action:'customer' },

          { title: 'supplier entry', icon: 'gavel' ,action:'supplier_entry' },

{ title: 'Products import', icon: 'dashboard',action:'product_import' },

{ title: 'Products', icon: 'dashboard',action:'' },
          { title: 'Sales Return', icon: 'account_box' ,action:'sales_return' },
          { title: 'Quotation', icon: 'gavel' ,action:'quotation' },
          { title: 'Purchase Entry', icon: 'dashboard',action:'purchase_entry' },
          { title: 'Purchase Return', icon: 'account_box',action:'purchase_return' },
          { title: 'Purchase Order', icon: 'gavel',action:'purchase_order' },

          { title: 'Suplier Paid', icon: 'dashboard',action:'suplier_paid' },
          { title: 'Customer Paid', icon: 'account_box',action:'customer_paid' },
          { title: 'Barcode', icon: 'gavel',action:'barcode' },

          { title: 'Sales Report', icon: 'dashboard',action:'sales_report' },
          { title: 'Purchase', icon: 'account_box',action:'purchase' },
          { title: 'Stock', icon: 'gavel',action:'stock' },

          { title: 'Suplier Ledger', icon: 'dashboard',action:'create_table' },
          { title: 'Customer Ledger', icon: 'account_box',action:'quotation' },
          { title: 'Profit and Loans', icon: 'gavel',action:'quotation' },

          { title: 'Gst Report', icon: 'dashboard',action:'gst_report' },
          { title: 'pos paper', icon: 'dashboard',action:'pos_editor' },

// { title: 'Purchase', icon: 'account_box' },
          // { title: 'Stock', icon: 'gavel' },


],    }),


methods:{

nav_action(action){
 var $vm=this;

  $vm.$router.push({name:action});


}

}
  }
</script>
<style lang="scss" scoped>

.navbar {

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  // overflow: hidden;
  background-color:  #e9e9e9;
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

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 100;
  border:1px solid black;
  padding:5px;
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

</style>