<template>
    <!-- <v-app> -->
        <!-- <h2>Universal</h2> -->
        <!-- <app-desktop v-if="$isElectron"></app-desktop> -->
        <app-web ></app-web>
                <!-- <app-mobile ></app-mobile> -->

    <!-- </v-app> -->
</template>

<script>
/*eslint-disable */
export default {
    
async mounted(){
var $vm=this;

},
watch:{

    "$route.name":{

      async  handler(){
console.log("watching routes...",this.$route.name)
            var $vm=this;
     console.log(await  $vm.$store.dispatch('startUserIfNotExist'))
     if(['login','index','userRole'].includes($vm.$route.name))
            {
                $vm.$store.commit('closeNavbarMenu')
            }
            if($vm.$route.name=='index'){

              if(!await  $vm.$store.dispatch('startUserIfNotExist')){
                $vm.$router.push({name:'startapp'})
              }
            }

            
        }
    }
}

}
</script>