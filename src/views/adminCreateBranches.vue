<template>
    <div>
<div style="display:flex;flex-direction:column">
<input class="interInput" v-model="branch.name"  type="text" placeholder="Name" >
<input class="interInput" v-model="branch.description"  type="text" placeholder="Description" >
<v-btn style="margin-top:10px" outlined>Create Branch</v-btn>
</div>


    </div>
</template>
<script>
export default {
    data(){
        return{

            branch:{
                name:'',
                description:'',



        },
    }
    }

}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>