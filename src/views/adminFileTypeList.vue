<template>
    <div>
        
<!-- eslint-disable -->
         <v-data-table
      :headers="$store.state.report.fileType"
      :items="list"
      item-key="id"
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
  
    computed: {
     list(){

return core.database(this,'getFileTypeList',)
     }
    },

    async mounted() {
        var $vm=this;
await  $vm.$store.dispatch('readUploadType')
    },
    methods:{
        editItem(item){
var $vm=this;
$vm.$router.push({name:'adminCreateFileType',params: { item:item }})
        },
        deleteItem(item){

var $vm=this;
$vm.$confirm("Do You Want to delete?")
.then(()=>{
$vm.$store.dispatch('removeUploadType',item.id)
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