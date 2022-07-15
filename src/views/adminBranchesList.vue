<template>
    <div>
        
<!-- eslint-disable -->
         <v-data-table
      :headers="$store.state.report.branches"
      :items="list"
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
      
       
      }
    },
async mounted(){
var $vm=this;

await $vm.$store.dispatch('branches')

}  ,
    computed: {
     list(){

return core.database(this,'getBranchesList',)
     }
    },
    methods:{
        editItem(item){
var $vm=this;
$vm.$router.push({name:'adminCreateBranch',params: { item:item }})
        },
        deleteItem(item){

var $vm=this;
$vm.$confirm("Do You Want to delete?")
.then(()=>{
// console.log(item)
$vm.$store.dispatch('removeBranch',item.id)
})
// return core.database(this,'deleteMasterBranch',{
//     index:this.list.indexOf(item),
//     item
// })




}
    }
}
</script>
<style lang="scss">
    
</style>