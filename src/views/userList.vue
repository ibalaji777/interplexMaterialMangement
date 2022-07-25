<template>
    <div>
        
<!-- eslint-disable -->
         <v-data-table
      :headers="$store.state.report.users"
      :items="filter"
      item-key="name"
      class="elevation-1"
      :search="search"
        mobile-breakpoint="0"
 
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
     <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>


    </div>
</template>
<script>
/*eslint-disable*/
import * as core from '../lib/core.js'
export default {
    data(){
        return {
            search: '',
      
filter:[],       
      }
    },
async  mounted(){
var $vm=this;


if($vm.$store.state.interplex.user.roletype=='admin')
$vm.filter=$vm.list()
if($vm.$store.state.interplex.user.roletype=='approver')
$vm.filter=_.filter($vm.list(),(x)=>x.roletype!='admin')
if($vm.$store.state.interplex.user.roletype=='operator')
$vm.filter=[]


var ret=await $vm.$store.dispatch('getUsers')

console.log("++ret++",ret)


},
    computed: {
     list(){
var $vm=this;
// console.log("users list filter",$vm.$route.params.action)
// console.log("user type",$vm.$store.state.interplex.user.roletype)
    if($vm.$route.params.action!=""){
if($vm.$route.params.action=='admin')    
return _.filter($vm.$store.state.interplex.masterUsers,(user)=>user.roletype=='admin');
if($vm.$route.params.action=='approver')    
return _.filter($vm.$store.state.interplex.masterUsers,(user)=>user.roletype=='approver');
if($vm.$route.params.action=='operator')    
return _.filter($vm.$store.state.interplex.masterUsers,(user)=>user.roletype=='operator');
return $vm.$store.state.interplex.masterUsers;
}

return $vm.$store.state.interplex.masterUsers;


     }
    },
    methods:{
        editItem(item){
var $vm=this;
$vm.$router.push({name:'createUser',params: { item:item }})
        },
        deleteItem(item){
            
var $vm=this;
$vm.$confirm("Do You Want to delete?")
.then(()=>{
console.log(item)
$vm.$store.dispatch('removeUser',item.id)
})
return core.database(this,'deleteMasterBranch',{
    index:this.list.indexOf(item),
    item
})
        
        }
    }
}
</script>
<style lang="scss">
    
</style>