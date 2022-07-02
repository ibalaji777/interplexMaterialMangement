<template>
  <div>
    <h3>Admin Dashboard</h3>
      <div style="display:flex;margin-top:10px">


                <div @click="userInsertDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-user-plus</v-icon>
</div>

        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="addProduct" class="insertProduct">
<v-icon>fa-search</v-icon>
</div>

</div>


      <div @click="headerFileDialog=true" class="insertProduct" style="margin-top:10px;height:100px;width:33.33%">
           <div style="text-align:center">
            5<br>
Total Products 
            </div>

</div>


<h3 style="margin-top:10px">Status</h3>
<h5 style="text-align:right">Today</h5>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: cadetblue;">
           <div style="text-align:center">
            5<br>
            Approved
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: darksalmon;">
           <div style="text-align:center">
            5<br>
            Accepted on Deviation
            </div>

</div>
</div>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: chocolate;">
           <div style="text-align:center">
            5<br>
            Rejected
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: khaki;">
           <div style="text-align:center">
            5<br>
            PPAP
            </div>

</div>
</div>

<h3 style="margin-top:10px">Users</h3>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
            5<br>
            Operator
            </div>

</div>
      <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
            5<br>
            Operator
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
            5<br>
            Approval 
            </div>

</div>

</div>
<!--*******************USER INSERT******************* -->
   <v-dialog
      v-model="userInsertDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Create Users</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="userInsertDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<div style="display:flex;flex-direction:column">
<input class="interInput" v-model="user.name"  type="text" placeholder="Name" >
<input class="interInput" v-model="user.branch" type="text" placeholder="Branch" >
<input class="interInput" v-model="user.roleType" type="text" placeholder="Role" >
<select class="interInput" name="" id="">
<option v-for="(item,index) in userRoles" :key="''+index" :value="item.value">{{item.name}}</option>

</select>
<input class="interInput" v-model="user.roleType" type="text" placeholder="Username" >
<input class="interInput" v-model="user.roleType" type="text" placeholder="Password" >
<input class="interInput" v-model="user.roleType" type="text" placeholder="Phone" >
<input class="interInput" v-model="user.roleType" type="text" placeholder="address" >
<div style="display:flex;justify-content:flex-end;margin-top:10px">
<v-btn outlined>Create User</v-btn>
</div>
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
        userRoles:[
            {
            name:'Operator',
            value:'operator'
        },
           {
            name:'Approval',
            value:'approval'
        },
                   {
            name:'Admin',
            value:'admin'
        }
        ],
        user:{

        },
        userInsertDialog:false,
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
    width: 80px;
    height: 80px;
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