<template>
    <!-- <v-app> -->
        <!-- <h2>Universal</h2> -->
        <!-- <app-desktop v-if="$isElectron"></app-desktop> -->
        <app-web ></app-web>
                <!-- <app-mobile ></app-mobile> -->

    <!-- </v-app> -->
</template>

<script>

export default {
    
async mounted(){
var $vm=this;
// ---------------------setup config------------------------------------
await $vm.$store.dispatch('readHeaderConfig')
await $vm.$store.dispatch('getProductConfig')
await $vm.$store.dispatch('readQasForm2Config')
await $vm.$store.dispatch('getProducts')
// ---------------------------------------------------------



}

}
</script>