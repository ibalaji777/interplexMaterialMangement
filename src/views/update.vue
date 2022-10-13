<template>
    <div>
        <h4>{{version}}{{checkUpdate}}
    <br><v-btn @click="updateSoftware">Update Software</v-btn></h4>
          
    </div>
</template>
<script>
/*eslint-disable*/
window.ipcRenderer = require("electron").ipcRenderer;
import {version} from '../../package.json'
export default {
    data: () => ({
        version:version,
         checkUpdate:"",
      
    }),
    methods:{
        updateSoftware(){
    console.log("manual update software ")
  ipcRenderer.send('update-software', 'update-software')
},
    },

    async mounted(){
var $vm=this;

        window.ipcRenderer.on("updater", (event, message) => {
    switch (message) {
      case "update_available":
        this.checkUpdate = "Available";
        break;
      case "update_not_available":
        this.checkUpdate = "Not Available";
        break;
    }
  });

  ipcRenderer.on('software-update-response', function(event, data) {
    console.log(data);
    $vm.checkUpdate=data.action||'_'
});


// $vm.navbarSetup()

    },

}
</script>
<style lang="scss">
    
</style>