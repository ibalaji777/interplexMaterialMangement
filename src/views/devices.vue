<template>
    <div>
        <h1>Devices and Printers</h1>
                <hr />

<div style="display:flex;margin:20px 0">
    <div :class="{selected_widget_:isSelectedReceipt}" class="isSelectedReceipt"  style="background:#34bd34"  @click="isSelectedReceipt=true">Doc</div>
    <div :class="{selected_widget_:!isSelectedReceipt}" class="isSelectedReceipt"  style="background:red;margin-left:10px"  @click="isSelectedReceipt=false">Barcode</div>
</div>

<div v-if="isSelectedReceipt" style="
    padding: 5px;">
<h2 style="background: gainsboro;padding: 5px;
    color: slateblue;">Select Printer For Document</h2>    
        <v-row>
            <v-col>
                <v-checkbox
                    v-model="isManualReceiptPrinter"
                    label="set printer  manualy"
                ></v-checkbox>
            </v-col>
        </v-row>
        <v-row v-if="isManualReceiptPrinter"
            ><v-col>
                <v-text-field label="Printer Name" v-model="printer_name">
                </v-text-field> </v-col
        ></v-row>

        <v-simple-table v-if="!isManualReceiptPrinter" fixed-header height="300px">
            <template v-slot:default>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item, index) in printer_list"
                        :key="'holdList' + index"
                    @click="printer.receipt = item.name"
                    class="rwSelector"
                    >
                        <td >
                            {{ item.name }}
                        </td>
                        <td>{{ item.isDefault }}</td>
                        <td>{{ item.options.system_driverinfo }}</td>
                        <td>{{ item.status }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-row class="selected_printer">
            <v-col>
                Selected Printer:{{printer.receipt }}
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="save" style="margin-right:10px">
                Save
            </v-btn>
        </v-row>
    </div>
<div v-else style="
    padding: 5px;">
<h2 style="background: antiquewhite;padding: 5px;
    color: slateblue;">Select Printer For Barcode</h2>    
        <v-row>
            <v-col>
                <v-checkbox
                    v-model="isManualBarcodePrinter"
                    label="set printer  manualy"
                ></v-checkbox>
            </v-col>
        </v-row>
        <v-row v-if="isManualBarcodePrinter"
            ><v-col>
                <v-text-field label="Printer Name" v-model="barcodePrinterName">
                </v-text-field> </v-col
        ></v-row>

        <v-simple-table v-if="!isManualBarcodePrinter" fixed-header height="300px">
            <template v-slot:default>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr
                       class="rwSelector"
                        v-for="(item, index) in printer_list"
                        :key="'holdList' + index"
                   @click="printer.label = item.name"
                    >
                        <td >
                            {{ item.name }}
                        </td>
                        <td>{{ item.isDefault }}</td>
                        <td>{{ item.options.system_driverinfo }}</td>
                        <td>{{ item.status }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
                <v-row class="selected_printer">

            <v-col>
                Selected Printer:{{ printer.label }}
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="save" style="margin-right:10px">
                Save
            </v-btn>
        </v-row>
    </div>


    </div>
</template>
<script>
//printer setup---------------------------------------------------------------------
const ipcRenderer = require("electron").ipcRenderer;
//printer setup---------------------------------------------------------------------

export default {
    // store:['control'],
    data() {
        return {
            isSelectedReceipt:true,
            isManualReceiptPrinter: false,
            isManualBarcodePrinter: false,
            printer:this.$store.state.printer,
            printer_list: [],
            printer_name: "",
            barcodePrinterName:'',
            print0: ""
        };
    },
    mounted() {
        this.getPrinterList();
    },
   

    methods: {
        getPrinterList() {
            var $vm = this;
            ipcRenderer.send("getPrinterList");
            ipcRenderer.once("getPrinterList", (event, data) => {
                $vm.printer_list = [...data];
                console.log(data);
                console.log(event);
                // this.print0 = data[3].name;
            });
        },
        save() {
            var $vm = this;
            if ($vm.isManualReceiptPrinter) {
                $vm.printer.receipt = $vm.printer_name;
            }
           if ($vm.isManualBarcodePrinter) {
             $vm.printer.label = $vm.barcodePrinterName;
            }
            $vm.$store.commit("select_printer", $vm.printer);
            $vm.$alert("setting saved successfully", "success", "success");
        }
    }
};
</script>
<style lang="scss" scoped>

.isSelectedReceipt{
    width: 90px;
    height: 90px;
    display: table-cell;
    // margin-right: 5px;
    padding: 10px;
    line-height: 65px;
    color: white;
    text-align: center;
    cursor:pointer;
     -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;


   -ms-user-select: none;
   user-select: none;
}

.selected_printer{
    background: orange;
    margin: 36px 0;
    border: 1px solid black;
}
.selected_widget_{

border: 3px solid darkblue;
}
.rwSelector:hover{
background:darkseagreen !important;
   cursor:pointer;
     -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;


   -ms-user-select: none;
   user-select: none;

}
</style>
