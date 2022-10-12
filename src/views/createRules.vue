<template>
    <div style="text-align:center">
        
        <v-text-field v-model="rule.name" label="Rule Name(*)"></v-text-field>
        <v-textarea v-model="rule.rule" label="Rule(*)"></v-textarea>
<v-btn @click="save" color="primary">SAve</v-btn>
    <!-- {{$store.state.interplex.rulesList}} -->

 <v-text-field v-model="search" label="Search"></v-text-field>
    <v-data-table
    style="margin-top:20px;"
         dense
      :headers="header"
      :items="$store.state.interplex.rulesList"
      item-key="id"
      class="interListRow"
            item-class="interListRow"

      
      :search="search"
      @click:row="selectedRow"
        mobile-breakpoint="0"
 
    >
         <template v-slot:item.actions="{ item }">
<v-icon         @click="deleteItem(item)">       mdi-delete
</v-icon>
     </template>

    
    </v-data-table>
    
    
    </div>
</template>
<script>
/*eslint-disable*/
function initail_state(){

return    {
            search:'',
        rule:{
            name:'',
            rule:'',
            other:{}
        },
        header:[
            {
		text:'Name',
		value:'name',
		class:'interplexHeader'

	}	,
                {
		text:'Rule',
		value:'rule',
		class:'interplexHeader'

	}	,
                    {
		text:'Action',
		value:'actions',
		class:'Action'

	}	,


        ]
           
        }
}
export default {
    data(){
        return initail_state()
    },
async    mounted(){
        var $vm=this;
await $vm.$store.dispatch("rulesList");

    },
    methods:{
        deleteItem(item){

        var $vm=this;
        $vm.$confirm('Do You want to delete?')
        .then(()=>{
this.$store.dispatch('ruleDelete',item.id)
        })

        },
        selectedRow(){
        var $vm=this    
        },

        save(){
var $vm=this;

if($vm.rule.name==''){
    
    $vm.$alert("Name must be filled")
    return;
}
if($vm.rule.rule==''){
    $vm.$alert("Rule must be filled")
    return;
}

$vm.$store.dispatch('saveRule',$vm.rule)
$vm.$alert("saved")
        }
    }
}
</script>
<style lang="scss">
    
</style>