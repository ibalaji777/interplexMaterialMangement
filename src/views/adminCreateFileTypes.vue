<template>
    <div>
<div style="display:flex;flex-direction:column">
<input class="interInput" v-model="fileType.title"  type="text" placeholder="Title" >
<input class="interInput" v-model="fileType.name"  type="text" placeholder="Name" >
<v-btn style="margin-top:10px" outlined>Create File Type</v-btn>
</div>


    </div>
</template>
<script>
export default {
    data(){
        return{

            fileType:{
                title:'',
                name:'',
                branch:'',



        },
    }
    }

}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>