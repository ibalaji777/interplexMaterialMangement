<template>
    <div>
        <div style="display:flex;flex-direction:column">
<input class="interInput" v-model="user.name"  type="text" placeholder="Name" >
<input class="interInput" v-model="user.branch" type="text" placeholder="Branch" >
<input class="interInput" v-model="user.roleType" type="text" placeholder="Role" >
<select class="interInput" name="" id="">
<option v-for="(item,index) in userRoles" :key="''+index" :value="item.value">{{item.name}}</option>

</select>
<input class="interInput" v-model="user.username" type="text" placeholder="Username" >
<input class="interInput" v-model="user.password" type="text" placeholder="Password" >
<input class="interInput" v-model="user.email" type="text" placeholder="Email" >
<input class="interInput" v-model="user.phone" type="text" placeholder="Phone" >
<input class="interInput" v-model="user.address" type="text" placeholder="address" >
<div style="display:flex;justify-content:flex-end;margin-top:10px">
<v-btn outlined>Create User</v-btn>
</div>
</div>


    </div>
</template>
<script>
export default {
    data(){return{
                userRoles:[
            {
            name:'Operator',
            value:'operator'
        },
           {
            name:'Approval',
            value:'approval'
        },
                   {
            name:'Admin',
            value:'admin'
        }
        ],
            user:{
                name:'',
                branch:'',
                roleType:'',
                username:'',
                password:'',
                email:'',
                phone:'',
                 address:'',



        },
    }
    }

}
</script>
<style lang="scss">
@import url('../assets/interplex.scss');    
</style>