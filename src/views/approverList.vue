<template>
    <div>
        
<!-- eslint-disable -->
         <v-data-table
      :headers="$store.state.report.qasForm1"
      :items="filterResult"
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
      
             filterResult:[],
      }
    },
  
    computed: {
     list(){

return core.database(this,'getApproverList',)
     }
    },
    mounted(){
        var $vm=this;
      $vm.filterResult=$vm.list;


var params=this.$route.params;

if(Object.prototype.hasOwnProperty.call(params, 'status')){


//check user=>id and date and status
//approver,admin =>date and status
$vm.filterResult=_.filter($vm.list,(qasform1)=>qasform1.status==params.status)
}

    },
    methods:{
        editItem(item){
var $vm=this;
$vm.$router.push({name:'adminCreateBranch',params: { item:item }})
        },
        deleteItem(item){

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