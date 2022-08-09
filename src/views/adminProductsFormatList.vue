<template>
    <div>
        <!-- {{$store.state.report.masterProducts}} -->
<!-- eslint-disable -->
         <v-data-table
      :headers="$store.state.report.masterProducts"
      :items="list"
      item-key="name"
      class="interListRow2"
            item-class="interListRow2"

      :search="search"
        mobile-breakpoint="0"
 
    >
      <template v-slot:top>
        <v-text-field outlined
        dense
         prepend-icon="mdi-table-search"
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
           <template v-slot:item.product_name="{ item }">
        
            {{isValueEmpty(item.product_name)}}
    </template>


           <template v-slot:item.supplier_name="{ item }">
        
            {{isValueEmpty(item.supplier_name)}}
    </template>

           <template v-slot:item.rmcode="{ item }">
        
            {{isValueEmpty(item.rmcode)}}
    </template>


           <template v-slot:item.eds="{ item }">
        
            {{isValueEmpty(item.eds)}}
    </template>


           <template v-slot:item.rm="{ item }">
        
            {{isValueEmpty(item.rm)}}
    </template>


           <template v-slot:item.skiplevel="{ item }">
        
            {{isValueEmpty(item.skiplevel)}}
    </template>
           <template v-slot:item.form_format="{ item }">
        
            {{isValueEmpty(item.form_format)}}
    </template>


           <template v-slot:item.duedate="{ item }">
        
            {{isValueEmpty(item.duedate)}}
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
  async mounted() {
    var $vm=this;

await    $vm.$store.dispatch('getProducts')

  },
    computed: {
        isValueEmpty(){
            return (value)=>{

if(value!='')return value;
return '-'
            }
        },
     list(){

return core.database(this,'getMaseterProductList',)
     }
    },
    methods:{
        editItem(item){
var $vm=this;
$vm.$router.push({name:'createProduct',params: { item:item }})
        },

        deleteItem(item){
var $vm=this;
$vm.$confirm("Do You Want to delete?")
.then(()=>{
console.log(item)
$vm.$store.dispatch('removeProduct',item.id)
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