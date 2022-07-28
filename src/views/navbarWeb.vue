<template>
    <v-navigation-drawer
        v-model="$store.state.control.isNavbarHidden"
        fixed
        app
        class="bgApp"
         style="color:white"
         temporary
    >
        <v-list nav>
            <v-divider></v-divider>
<!-- {{$store.state.control.isNavbarHidden}} -->
            <div v-for="navLink in items" :key="navLink.title">
                <v-list-item v-if="!navLink.submenu" @click="$router.push({name:navLink.action})">
                    <v-list-item-icon >
                        <v-icon style="color:white">{{ navLink.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title style="color:white">{{ navLink.title }}</v-list-item-title>
                </v-list-item>

                <v-list-group
                    no-action
                    v-if="navLink.submenu"
                    style="color:white;"
                >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon style="color:white">{{
                                navLink.icon
                            }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color:white">{{
                                navLink.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="sub in navLink.subLinks"
                        :key="sub.title"
                    >
                        <v-list-item-title style="color:white">{{
                            sub.title
                        }}</v-list-item-title>
                    </v-list-item>
                </v-list-group>


            </div>
                                            <v-list-item  @click="$router.push({name:'index'});$store.dispatch('logout')">
                    <v-list-item-icon >
                        <v-icon style="color:white">fa-sign-out-alt</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title style="color:white">logout</v-list-item-title>
                </v-list-item>

            <!-- <v-list-item @click="$router.push({ name: 'settings_nav' })">
                <v-list-item-icon>
                    <v-icon>fa-cog</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Setting</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                v-if="$store.state.control.isEnabledSecurity"
            >
                <v-list-item-icon>
                    <v-icon>fa-user</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item> -->
        </v-list>
    </v-navigation-drawer>
</template>
<script>
/*eslint-disable*/
export default {
    props: {
        source: String
    },
    mounted() {
        var $vm = this;
    },
    data: () => ({
        selected_obj: {},
        drawer: null,
        items: [
            // {
            //     title: "Sale",
            //     icon: "fa-tags",
            //     submenu: true,
            //     subLinks: [
            //         {
            //             title: "Sales Entry",
            //             icon: "mdi-file-plus",
            //             action: "gui_sales_entry"
            //         },
            //         // { title: "Sales Entry", icon: "mdi-file-plus", action: "sales_entry" },
            //         {
            //             title: "Sales Return",
            //             icon: "fa-file-import",
            //             action: "gui_sales_return"
            //         },
            //         {
            //             title: "Sales Order",
            //             icon: "mdi-file",
            //             action: "main_sales_order"
            //         },
            //         // {
            //         //     title: "Sales Order",
            //         //     icon: "mdi-file",
            //         //     action: "gui_sales_order"
            //         // },
            //         {
            //             title: "Quotation",
            //             icon: "mdi-file-plus",
            //             action: "gui_quotation"
            //         }
            //     ]
            // },
            {
                title: "adminDashobard",
                icon: "fa-money-bill-wave",
                action: "adminDashobard",
                submenu: false
            },
                        {
                title: "nativePhotoCapture",
                icon: "fa-money-bill-wave",
                action: "nativePhotoCapture",
                submenu: false
            },
                        {
                title: "photoCapture",
                icon: "fa-money-bill-wave",
                action: "photoCapture",
                submenu: false
            },
            
            {
                title: "branches",
                icon: "fa-money-bill-wave",
                action: "branches",
                submenu: false
            },
            {
                title: "login",
                icon: "fa-money-bill-wave",
                action: "login",
                submenu: false
            },
            {
                title: "userRole",
                icon: "fa-money-bill-wave",
                action: "userRole",
                submenu: false
            },
            {
                title: "operatorDashboard",
                icon: "fa-money-bill-wave",
                action: "operatorDashboard",
                submenu: false
            },
            {
                title: "operatorInsert",
                icon: "fa-money-bill-wave",
                action: "operatorInsert",
                submenu: false
            },
            {
                title: "verifierDashboard",
                icon: "fa-money-bill-wave",
                action: "verifierDashboard",
                submenu: false
            },
            {
                title: "verifierList",
                icon: "fa-money-bill-wave",
                action: "verifierList",
                submenu: false
            },
            {
                title: "verifierView",
                icon: "fa-money-bill-wave",
                action: "verifierView",
                submenu: false
            },
            {
                title: "adminDashboard",
                icon: "fa-money-bill-wave",
                action: "adminDashboard",
                submenu: false
            },
            {
                title: "adminDashboardList",
                icon: "fa-money-bill-wave",
                action: "adminDashboardList",
                submenu: false
            },
            {
                title: "adminDashboardView",
                icon: "fa-money-bill-wave",
                action: "adminDashboardView",
                submenu: false
            },
            {
                title: "Payments",
                icon: "fa-money-bill-wave",
                action: "main_payment",
                submenu: false
            },
            {
                title: "adminDashboardOtherConfig",
                icon: "fa-money-bill-wave",
                action: "adminDashboardOtherConfig",
                submenu: false
            },

            //              {
            //                 title: "Payment IN/OUT",
            //                 icon: "fa-money-bill-wave",
            //                 action: "payment"
            //                 , submenu:false,
            //             },
            //  {
            //                 title: "Payment In/Out",
            //                 icon: "fa-money-bill-wave",
            //                 action: "payment_in_out"
            //                 , submenu:false,
            //             },
            {
                title: "Bulk Import",
                icon: "fa-file-import",
                action: "main_bulk_import",
                submenu: false
            }
        ]
    }),
    computed: {},
   async mounted(){
var $vm=this;



$vm.navbarSetup()

    },
    methods: {

navbarSetup(){
    var $vm=this;
    $vm.items=[];
    if($vm.$store.state.interplex.user.roletype=='operator'){
$vm.items=[
            {
                title: "Dashboard",
                icon: "fa-home",
                action: "operatorDashboard",
                submenu: false
            },
                        {
                title: "Submit Status",
                icon: "fa-history",
                action: "approverList",
                submenu: false
            },
]
}

if($vm.$store.state.interplex.user.roletype=='approver'){
$vm.items=[
            {
                title: "Dashboard",
                icon: "fa-home",
                action: "verifierDashboard",
                submenu: false
            },
                        {
                title: "Submit Status",
                icon: "fa-history",
                action: "approverList",
                submenu: false
            },
            {
                title: "Create QasForm & Config",
                icon: "fa-plus",
                action: "createProduct",
                submenu: false
            },
            {
                title: "Create Users",
                icon: "fa-user",
                action: "createUser",
                submenu: false
            },
            
            {
                title: "Upload Types",
                icon: "fa-upload",
                action: "createFileType",
                submenu: false
            },
              {
                title: "Header Config",
                icon: "mdi-page-layout-header",
                action: "qasFormOneConfigHeader",
                submenu: false
            },
           {
                title: "Qas Form 2 Config",
                icon: "mdi-form-select",
                action: "qasForm2Config",
                submenu: false
            },
]
}
if($vm.$store.state.interplex.user.roletype=='admin'){
$vm.items=[
            {
                title: "Dashboard",
                icon: "fa-home",
                action: "adminDashboard",
                submenu: false
            },
                        {
                title: "Submit Status",
                icon: "fa-history",
                action: "approverList",
                submenu: false
            },
            {
                title: "Create QasForm & Config",
                icon: "fa-plus",
                action: "createProduct",
                submenu: false
            },
            {
                title: "Create Users",
                icon: "fa-user",
                action: "createUser",
                submenu: false
            },
            
            {
                title: "Upload Types",
                icon: "fa-upload",
                action: "createFileType",
                submenu: false
            },
              {
                title: "Header Config",
                icon: "mdi-page-layout-header",
                action: "qasFormOneConfigHeader",
                submenu: false
            },
           {
                title: "Qas Form 2 Config",
                icon: "mdi-form-select",
                action: "qasForm2Config",
                submenu: false
            },
]
}
}

    },
    watch:{

        "$route":{

handler(to,from){
    var $vm=this;
    console.log("watch route working....")
        console.log($vm.$store.state.interplex.user,"++++")

$vm.navbarSetup()

},
deep:true,
immediate:true

        }
    }


};
</script>
<style lang="scss" scoped>
.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    // overflow: hidden;
    background-color: #e9e9e9;
}
.navbar a {
    float: left;
    font-size: 12px;
    color: black;
    text-align: center;
    padding: 5px 5px;
    text-decoration: none;
}
.dropdown {
    float: left;
    overflow: hidden;
}
.dropdown .dropbtn {
    font-size: 12px;
    border: none;
    outline: none;
    color: black;
    padding: 5px 5px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}
.navbar a:hover,
.dropdown:hover .dropbtn {
    background-color: red;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 100;
    border: 1px solid black;
    padding: 5px;
}
.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}
.dropdown-content a:hover {
    background-color: #ddd;
}
.dropdown:hover .dropdown-content {
    display: block;
}
</style>
