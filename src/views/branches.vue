<template>
    <div>

<v-icon color="white" @click="urlDialog=true">fa-cog</v-icon>

        <div class="xyCenter_">
            <div style="text-align:center">
                <img src="interplex.svg">
</div>
            <h2 style="text-align:center;color:white">Check Incoming Quality</h2>
            <!-- {{$store.state.interplex.user}} -->
            <!-- {{$store.state.interplex.masterBranches}} -->
            <v-btn
                color="white"
                @click="setBranch(branch.name)"
                v-for="(branch, index) in $store.state.interplex.masterBranches"
                :key="'br' + index"
                outlined
                style="margin-top:20px;width:100%"
                >{{ branch.name }}</v-btn
            >
            <!-- <v-btn outlined style="margin-top:20px;width:100%">Chennai</v-btn> -->
        </div>

         <v-dialog
      v-model="urlDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title><v-icon @click="urlDialog = false">fa-times</v-icon></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
       <div style="padding:10px">

<div style="margin-top:60px">
<input placeholder="http://url" type="text" v-model="api" class="interInput">
<div style="text-align:center;margin-top:30px">
<v-btn color="red" style="color:white" @click="setApi">set Url</v-btn>
</div>
</div>
</div>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
import * as config from '../lib/config.js'
export default {
    data(){
        return{
            api:'',
            urlDialog:false,
        }
    },
    async mounted() {
        var $vm = this;
        await $vm.$store.dispatch("branches");
    },
    methods: {
            setApi(){
var $vm=this;

config.setApi($vm.api)
$vm.$alert("Saved")

    },

        setBranch(branch) {
            this.$store.commit("setBranch", branch);
            this.$router.push({ name: "userRole" });
            // this.$router.push({name:'login'})
        }
    }
};
</script>
<style>
@import url("../assets/interplex.scss");
</style>
