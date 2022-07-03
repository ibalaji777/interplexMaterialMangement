<template>
  <div>
    <h3>Admin Dashboard</h3>
      <div style="display:flex;margin-top:10px">


                <div @click="addDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-user-plus</v-icon>
</div>

        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px">
<v-icon>fa-file</v-icon>
</div>

<div @click="$router.push({name:'adminDashboardList'})" class="insertProduct">
<v-icon>fa-search</v-icon>
</div>

</div>


      <div @click="headerFileDialog=true" class="insertProduct" style="margin-top:10px;height:100px;width:33.33%">
           <div style="text-align:center">
            {{$store.state.interplex.products.length}}<br>
Total Products 
            </div>

</div>


<h3 style="margin-top:10px">Status</h3>
<h5 style="text-align:right">Today</h5>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: cadetblue;">
           <div style="text-align:center">
            {{approvalStatus.approved}}<br>

            Approved
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: darksalmon;">
           <div style="text-align:center">
            {{approvalStatus.acceptedOnDeviation}}<br>

            Accepted on Deviation
            </div>

</div>
</div>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: chocolate;">
           <div style="text-align:center">
            {{approvalStatus.rejected}}<br>
            Rejected
            </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:50%;background: khaki;">
           <div style="text-align:center">
            {{approvalStatus.ppap}}<br>
            PPAP
            </div>

</div>
</div>

<h3 style="margin-top:10px">Users</h3>
    <div style="display:flex;margin-top:10px">
        <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
        {{users.admin}}<br>
        Admin    
            </div>

</div>
      <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
 {{users.operator}}<br>
        Operator                </div>

</div>
   <div @click="headerFileDialog=true" class="insertProduct" style="margin-right:10px;height:100px;font-weight:800;width:33.33%">
           <div style="text-align:center">
 {{users.approval}}<br>
            Approval 
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
</div>

</div>
      </v-card>
    </v-dialog>



  </div>
</template>
<script>
import _ from 'lodash'
/*eslint-disable*/
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

users(){
var $vm=this;
return {
admin:_.filter($vm.$store.state.interplex.users,(x)=>x.roletype=='admin').length,
operator:_.filter($vm.$store.state.interplex.users,(x)=>x.roletype=='operator').length,
approval:_.filter($vm.$store.state.interplex.users,(x)=>x.roletype=='approval').length,
}

},
approvalStatus(){
var $vm=this;
return {
approved:_.filter($vm.$store.state.interplex.users,(x)=>x.approval_status=='approved').length,
acceptedOnDeviation:_.filter($vm.$store.state.interplex.users,(x)=>x.approval_status=='acceptedOnDeviation').length,
rejected:_.filter($vm.$store.state.interplex.users,(x)=>x.approval_status=='rejected').length,
ppap:_.filter($vm.$store.state.interplex.users,(x)=>x.approval_status=='ppap').length,
}

},

	

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