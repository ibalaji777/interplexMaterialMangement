<template>
    <div>
        <div style="display:flex;justify-content:flex-end">
                        <v-btn @click="configDialog=true" outlined>
                config
            </v-btn>

        </div>
        <!-- {{$store.state.interplex.configHeaderFormat}} -->
<h3 style="margin:10px 0">Header Config</h3>






<div v-for="(productFormat , index) in configFormat" :key="'product'+index">

<div style="display:flex">
<span style="width:40%">{{productFormat.label}}</span>

<div style="display: flex;
    width: 60%;
    height:45px;
    align-items: baseline;">
<v-text-field dense outlined v-if="productFormat.map==''"  v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
</v-text-field>    
<v-text-field dense outlined v-else  append-icon="mdi-magnify-scan" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" >
</v-text-field>    

    <v-icon @click="selectFieldSettingfn(productFormat)" style="margin:0 5px">fa-cog</v-icon>
</div>
</div>

</div>



<div style="display:flex;justify-content:flex-end">

<v-btn @click="save" outlined style="margin-top:10px;">Save</v-btn>
</div>



<!-- ^^^^^^^^^^^^^^^^^^^^^^^^create field setting dialog^^^^^^^^^^^^^^^^^^^^ -->
 <v-dialog
      v-model="createFieldSettingDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="createFieldSettingDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<input  class="interInput" v-model="createField.label" type="text" placeholder="Label(*)" >
<input  class="interInput" v-model="createField.name" type="text" placeholder="Name(*)" >
<v-checkbox
      v-model="createField.show"
      :label="'Show (Quality assurance)'"
    ></v-checkbox>

<select v-model="createField.mapFrom" class="interInput" >
<option  v-for="(item,index) in mapTypes" :key="''+index" :value="item">{{item}}</option>

</select>



<input  class="interInput" v-model="createField.headerMap" type="text" placeholder="Map" >

<br>

<!-- <input v-if="createField.validation"  class="interInput" v-model="createField.rule" type="text" placeholder="Rule" > -->

<div style="display:flex;justify-content:flex-end;padding:5px">
<v-btn outlined @click="createProductField">Add</v-btn>
</div>

<!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.configFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
</div>
      </v-card>
    </v-dialog>


<!-- ^^^^^^^^^^^^^^^^^^^^^^^^field setting dialog^^^^^^^^^^^^^^^^^^^^ -->

 <v-dialog
      v-model="productFieldSettingDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="productFieldSettingDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <!-- <v-btn
              dark
              text
              @click="saveProductsFormat"
            >
              SAVE
            </v-btn> -->
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
        <div style="background: black;
    color: white;
    padding: 10px;
    border-radius: 9px;">
      <b> Name :{{selectedFieldSetting.name}}</b><br>
      <b v-if="selectedFieldSetting.default">Field is Default</b> 
      <b v-else>Not a Default Field</b> 
</div>

<div style="margin-top:20px">
<b>Do You Want to show in PRINT/PDF?</b>
<v-checkbox
dense
      v-model="selectedFieldSetting.showPrint"
    ></v-checkbox>
<b>Where You Want to map value from?</b>        
<select v-model="selectedFieldSetting.mapFrom" class="interInput" >
<option  v-for="(item,index) in mapTypes" :key="''+index" :value="item">{{item}}</option>

</select>
<b>Which value You Want to Map?</b>
<input  class="interInput" v-model="selectedFieldSetting.map" type="text" placeholder="Map" >
<br>
</div>
<div style="font-size:18px;color:red;margin-top:10px">
    Note:</div><b> {{selectedFieldSetting.note}}</b>

<!-- <input v-if="selectedFieldSetting.validation"  class="interInput" v-model="selectedFieldSetting.rule" type="text" placeholder="Rule" > -->



<!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.configFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
</div>
      </v-card>
    </v-dialog>




   <v-dialog
      v-model="configDialog"
      fullscreen
      persistent

      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="configDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
            >

            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">
        

<div style="padding:10px">
<v-btn outlined @click="createFieldSettingDialog=true">Create Field</v-btn>
</div>
                                       <draggable
                                            :list="configFormat"
                                             handle=".handle"
                                            style="
                     margin-top:10px "
                                            ghost-class="ghost"
                                            group="product"
                                            @start="dragging = true"
                                            @end="dragging = false"
                                        >
                                              <div
                                            style="display:flex;"
                                                v-for="(productFormat, index) in configFormat"
                                                :key="'product' + index"
                                            >
       <v-icon style="margin:0 5px" class="handle">fa-arrows-alt</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon @click="removeConfig(productFormat,index)" style="margin:0 5px">fa-times</v-icon>
 
                                            </div>
                                        </draggable>


</div>
      </v-card>
    </v-dialog>

    </div>
</template>
<script>
/*eslint-disable*/
// import * as core from '../lib/core.js'

var create_field={
			label:'',//input field label
			name:'',//column name
			value:'',//default value
			show:false,
			map:'',
			mapFrom:'header',//header or product
			default:false,
			note:'',

}

export function initialState($vm){

    return{
       mapTypes:['header','product'],
        createFieldSettingDialog:false,
        createField:{
			label:'',//input field label
			name:'',//column name
			value:'',//default value
			show:false,
    		  showPrint:true,
			map:'',
			mapFrom:'header',//header or product
            default:false,
			note:'',
},
configFormat:_.cloneDeep($vm.$store.state.interplex.configHeaderFormat),//core.database($vm,'getMasterHeaderConfig'),
        configDialog:false,
        productFieldSettingDialog:false,
        selectedFieldSetting:create_field
        ,
        insertForm:{
            
        }
    }
}
export default {

data(){
    return initialState(this)
},
async mounted(){
var $vm=this;

await $vm.$store.dispatch("getHeaderConfig")
// if(!_.isEmpty(getConfig)){
// $vm.configFormat=getConfig.config;
//  }

},
methods:{
async    save(){
        var $vm=this;
if(await  $vm.$store.dispatch('setHeaderConfig',$vm.configFormat)){

// if(await  $vm.$store.dispatch('updateHeaderConfig',$vm.configFormat)){
$vm.$alert("Successfully Updated")
return;
}
$vm.$alert("Something wrong")
    },
    removeConfig(item,index){
        var $vm=this;
if(item.default){
$vm.$alert("Cannot Delete Default Field",'Error','error')
    return ;
}
configFormat.splice(index,1)
    },
    selectFieldSettingfn(item){
this.selectedFieldSetting=item
this.productFieldSettingDialog=true;
    },
    saveProductsFormat(){
        var $vm=this;
        $vm.$alert('Saved','success','success')
        this.$store.commit("updateProductsFormat",this.configFormat)

    },
createProductField(){
    var $vm=this;
    if(this.createField.label==''){

$vm.$alert("Label Must be fill")
        return ;
    }
    if(this.createField.name==''){

$vm.$alert("Name Must be fill")
        return ;
    }
this.configFormat.push(this.createField)
this.createField=create_field;
$vm.$alert("New Field Created")
}

},
watch:{
    "$store.state.interplex.configHeaderFormat":{
handler(){
var $vm=this    
$vm.configFormat=_.cloneDeep($vm.$store.state.interplex.configHeaderFormat)
},
deep:true

    }
}

}
</script>
<style lang="scss">
  @import url('../assets/interplex.scss');  
</style>