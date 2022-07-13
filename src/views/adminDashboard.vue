<template>
  <div>
    <h3>Admin Dashboard</h3>
      <div style="display:flex;margin-top:10px">


                <div @click="addDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-plus</v-icon>
</div>

        <!-- <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div> -->

<div @click="$router.push({name:'adminDashboardList'})" class="insertProduct">
<v-icon>fa-search</v-icon>
</div>

</div>


      <div @click="headerFileDialog=true" class="insertProduct" style="margin-top:10px;height:100px;width:33.33%">
           <div style="text-align:center">
            {{masterProductsTotal}}<br>
Total Products 
            </div>

</div>


<h3 style="margin-top:10px">Status</h3>
<h5 style="text-align:right"><date @date="selected_date"></date></h5>

<div>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'approverList',params: { status:'pending' }})" class="insertProduct" style="margin-right: 10px;
    height: 100px;
    font-weight: 800;
    width: 50%;
    background: brown;
    width: 100%;
    color: wheat;">
           <div style="text-align:center">
            {{approverStatus.pending}}<br>
            Pending
            </div>

</div>
    </div>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'approverList',params: { status:'approved' }})" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: cadetblue;">
           <div style="text-align:center">
            {{approverStatus.approved}}<br>

            Approved
            </div> 

</div>
   <div @click="$router.push({name:'approverList',params: { status:'acceptedOnDeviation' }})" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: darksalmon;">
           <div style="text-align:center">
            {{approverStatus.acceptedOnDeviation}}<br>

            Accepted on Deviation
            </div>

</div>
</div>
    <div style="display:flex;margin-top:10px">
        <div @click="$router.push({name:'approverList',params: { status:'ppap' }})" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: chocolate;">
           <div style="text-align:center">
            {{approverStatus.rejected}}<br>
            Rejected
            </div>

</div>
   <div @click="$router.push({name:'approverList',params: { status:'pending' }})" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: khaki;">
           <div style="text-align:center">
            {{approverStatus.ppap}}<br>
            PPAP
            </div>

</div>
</div>
</div>

<h3 style="margin-top:10px">Users</h3>
    <div style="display:flex;margin-top:10px">
        <div  class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
        {{users.admin}}<br>
        Admin    
            </div>

</div>
      <div  class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
 {{users.operator}}<br>
        Operator                </div>

</div>
   <div  class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
 {{users.approver}}<br>
            approver 
            </div>

</div>

</div>
<!--*******************USER INSERT******************* -->
   <!-- <v-dialog
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
    </v-dialog> -->

    
 <v-dialog
      v-model="addDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="addDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
<div>
  <div @click="$router.push({name:'adminCreateUser'})" class="interList" >Create User</div>
  <div @click="$router.push({name:'adminMasterProductInsert'})" class="interList">Create Product&Quality Assurance </div>
  <div @click="$router.push({name:'adminCreateBranch'})" class="interList">Create Branches </div>
  <div @click="$router.push({name:'adminCreateFileType'})" class="interList">Create Upload Types </div>
  <div @click="$router.push({name:'adminQualityAssuranceHeader'})" class="interList">Create Header & Config</div>
    <div @click="$router.push({name:'qasForm2Config'})" class="interList">QAS Form 2 Product & Config</div>
</div>

</div>
      </v-card>
    </v-dialog>



  </div>
</template>
<script>
/*eslint-disable*/

import _ from 'lodash'
import * as core from '../lib/core.js'
export default {
  data(){
    return {
        addDialog:false,

        user:{

        },
        userInsertDialog:false,
        productInsertDialog:false,
        galleryDialog:false,
        headerFileDialog:false,
    }
  },
  computed:{
masterProductsTotal(){
return core.database(this,'getMasterProductsTotal')
},
users(){
var $vm=this;
return core.database(this,'getUsersTotal')
},
approverStatus(){
var $vm=this;
return core.database(this,'getQasFormOne')
},


  },
  methods:{
    addProduct(){
        var $vm=this;
$vm.productInsertDialog=true
    },
    selected_date(date){
console.log(date.from_date)
console.log(date.to_date)

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