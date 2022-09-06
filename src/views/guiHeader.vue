<template>
    <div>

<div style="display: flex;
    justify-content: space-around;">
<div style="display:flex;justify-content:center;align-items:center;flex-direction:column">

<v-btn style="background:darkseagreen;color:white"  @click="add('one')" fab>
+
</v-btn>
<h4>One</h4>
</div>
<div style="display:flex;justify-content:center;align-items:center;flex-direction:column">
<v-btn style="background:lightseagreen;color:white"  @click="add('two')" fab>
+
</v-btn>
<h4>Two</h4>

</div>
</div>
<h4 style="background: darkseagreen;
    padding: 5px;
    margin: 40px;
    color: white;">One Highlight (Non Editable)</h4>

<draggable   handle=".drag"
                                tag="div"
                                v-model="gui.one"
                            >
                            <div v-for="(item,index) in gui.one" :key="'guiOne'+index">
                                <div style="display:flex;justify-content:space-evenly">
                                    <v-icon style="font-size:50px" class="drag" >mdi-drag-horizontal</v-icon>
                                    <v-text-field style="margin:1px" outlined label="Label" v-model="item.label"></v-text-field>
                                    <v-text-field style="margin:1px" outlined label="Name" v-model="item.name"></v-text-field>
                                    <v-text-field style="margin:1px" outlined label="Width(%)" v-model="item.width"></v-text-field>
<v-icon @click="gui.one.splice(index,1)" style="font-size:30px" class="drag" >fa-trash</v-icon>                                    
                                </div>

                            </div>

</draggable>


<h4 style="background: lightseagreen;
    padding: 5px;
    margin: 40px;
    color: white;">Two Editable(Defaults)</h4>

<draggable   handle=".drag"
                                tag="div"
                                v-model="gui.two"
                            >
                            <div v-for="(item,index) in gui.two" :key="'guiOne'+index">
                                <div style="display:flex;justify-content:space-evenly">

                                    <v-icon style="font-size:50px" class="drag" >mdi-drag-horizontal</v-icon>
                                    <v-text-field style="margin:1px" outlined label="Label" v-model="item.label"></v-text-field>
                                    <v-text-field style="margin:1px" outlined label="Name" v-model="item.name"></v-text-field>
                                    <v-text-field style="margin:1px" outlined label="Width(%)" v-model="item.width"></v-text-field>
<v-icon @click="gui.two.splice(index,1)" style="font-size:e0px" class="drag" >fa-trash</v-icon>                                    
                                </div>

                            </div>

</draggable>


                    <div style="display: flex;
    margin-top: 25px;
    justify-content: flex-end;">
            <v-btn outlined @click="reset" style=";margin-right:10px;"
                >Reset</v-btn
            >
            <v-btn  outlined @click="save" style=""
                >Save</v-btn
            >

</div>            



    </div>
</template>
<script>
import * as reset from '../lib/dataset.js'
export default {
 
 data(){

    return {
        gui:{
            one:[],
            two:[]
        }
    }
 },
 async mounted(){
var $vm=this;
await $vm.$store.dispatch("getGuiHeader",$vm.gui)

$vm.gui=$vm.$store.state.interplex.header_form_gui;
 },
 methods:{
    async reset(){
var $vm=this;
$vm.gui=reset.dataset.header_form_gui;
await $vm.$store.dispatch("setGuiHeader",$vm.gui)
$vm.$alert("Reset")

    },
async save(){
var $vm=this;
await $vm.$store.dispatch("setGuiHeader",$vm.gui)
$vm.$alert("Saved")
},
    add(action){
var $vm=this;
if(action=='one'){
$vm.gui.one.push({
				label:'Test Label',
				name:'Name of Field',
				width:'50'

})
}
if(action=='two'){
  $vm.gui.two.push({
				label:'Test Label',
				name:'Name of Field',
				width:'50'

})
}

    }
 }
}
</script>
<style lang="scss">
    
</style>