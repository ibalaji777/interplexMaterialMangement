<template>
  <div>
    <div style="display:flex">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="addProduct" class="insertProduct">
<v-icon>fa-plus</v-icon>
</div>
</div>

<div class="productContainer">

<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
</div>
<div class="otherContainer">
<div class="insertProduct" @click="galleryDialog=true">
<v-icon>fa-image</v-icon>
</div>
</div>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit To Approval
</v-btn>
</div>
<!-- --------------------------product insert dialog------------------- -->
   <v-dialog
      v-model="productInsertDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Add Product</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="productInsertDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
        <div class="inputContainer">
<input class="interInput" type="text" placeholder="Search Product" style="margin-top:10px;">
</div>

        <div class="inputContainer">
            How Many Product Do You  Want to Add?<br>

<input class="interInput" type="text" placeholder="Example (5 Product)" style="margin-top:10px;">
</div>

<br>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
</div>
      </v-card>
    </v-dialog>
   <v-dialog
      v-model="headerFileDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Header File</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="headerFileDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
        <div class="inputContainer">
<input class="interInput" type="text" placeholder="Search Product" style="margin-top:10px;">
</div>

        <div class="inputContainer">
            How Many Product Do You  Want to Add?<br>

<input class="interInput" type="text" placeholder="Example (5 Product)" style="margin-top:10px;">
</div>

<br>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
</div>
      </v-card>
    </v-dialog>


       <v-dialog
      v-model="galleryDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Gallery</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="galleryDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
<div @click="addProduct" class="insertProduct">
<v-icon>fa-camera</v-icon>
</div>

<br>
<div class="productContainer">

<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
<div class="productItems">
Items
</div>
</div>


<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
</div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
        productInsertDialog:false,
        galleryDialog:false,
        headerFileDialog:false,
    }
  },
  methods:{
    addProduct(){
        var $vm=this;
$vm.productInsertDialog=true
    }
  }
}

</script>
<style>
@import url('../assets/interplex.scss');
.otherContainer{
    margin-top:10px;
}
.insertProduct{

border: 1px dashed red;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:beige;
}
.productContainer{
    background: grey;
    margin-top: 20px;
    height: 51vh;
    overflow: scroll;
}
.productItems{

    padding: 5px;
    color: white;
    background: darkturquoise;
    margin: 5px;
}


</style>