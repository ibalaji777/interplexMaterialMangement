<template>
<div style="padding:10px">
        <div style="display:flex;justify-content:flex-end">
            <v-btn @click="productSettingDialog = true" outlined>
                config
            </v-btn>
        </div>


                    <h3 style="padding:0;margin:10px 0">OBSERVATION</h3>
                    <div style="display:flex;margin:10px 0">
                        <v-btn
                        outlined
                            style="margin:10px"
                            @click="createQasRowInputDialog = true"
                            color="primary"
                        >
                        <v-icon style="margin-righ:5px">mdi-table-row-plus-after</v-icon>
                            Create Row
                        </v-btn>
                        <v-btn outlined
                            style="margin:10px"
                            @click="tableColumnSetupDialog = true"
                            color="primary"
                        >
                                                <v-icon style="margin-righ:5px">                        mdi-table-column-plus-after
</v-icon>

                            Create Column
                        </v-btn>
                    </div>

                    <div style="height:69vh;overflow:scroll">
                        <table class="observationTable" style="width:100vw">
                            <tr
                                v-for="(form,
                                index) in insertForm.observation_header_print_view"
                                :key="'printview' + index"
                            >
                                <td
                                    :colspan="getColspan(item.name)"
                                    :rowspan="getRowspan(item.name)"
                                    v-for="(item, index_sub) in form.column"
                                    :key="'inde' + index_sub"
                                >
                                    <div>
                                        <div v-if="getIndex(item.name) != -1">
                                            <div
                                                style="display:flex;width:250px;justify-content:space-between"
                                            >
                                                {{
                                                    insertForm
                                                        .observation_format[
                                                        getIndex(item.name)
                                                    ].label
                                                }}
                                                <v-icon
                                                    @click="
                                                        removeObservationHeaderPrintView(
                                                            index,
                                                            item.name
                                                        )
                                                    "
                                                    >fa-trash</v-icon
                                                >
                                            </div>
                                            <div
                                                style="display:flex;width:250px;justify-content:space-between;padding:10px 0"
                                            >
                                                <v-icon
                                                    @click="
                                                        selectQasEditable(
                                                            getIndex(item.name)
                                                        )
                                                    "
                                                    >fa-cog</v-icon
                                                >
                                                <div>
                                                    <!-- {{insertForm.observation_format[getIndex(item.name)]}}
{{item.name}}
{{getIndex(item.name)}}
{{isKeyExist(form[item.name],'merge')}} -->
                                                    <v-icon
                                                        :class="{
                                                            redColor: isKeyExist(
                                                                getIndex(
                                                                    item.name
                                                                ),
                                                                'merge'
                                                            )
                                                        }"
                                                        style="margin:2px"
                                                        >mdi-table-merge-cells</v-icon
                                                    >
                                                </div>
                                            </div>

                                            <v-text-field
                                                outlined
                                                v-debounce="delay"
                                                label="value"
                                                v-model.lazy="
                                                    insertForm
                                                        .observation_format[
                                                        getIndex(item.name)
                                                    ].value
                                                "
                                            ></v-text-field>
                                        </div>
                                        <div v-else>
                                            <div
                                                style="display:flex;width:250px;justify-content:space-between"
                                            >
                                                <div></div>
                                                <v-icon
                                                    @click="
                                                        removeTable(index, key)
                                                    "
                                                    >fa-trash</v-icon
                                                >
                                            </div>

                                            Not Found
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <draggable
                                handle=".drag"
                                tag="tbody"
                                v-model="insertForm.observation_print_view"
                            >
                                <tr
                                    v-for="(form,
                                    index) in insertForm.observation_print_view"
                                    :key="'printview' + index"
                                >
                                    <td
                                        :colspan="getColspan(form[key])"
                                        :rowspan="getRowspan(form[key])"
                                        v-for="(key, index_sub) in tableOrder(
                                            Object.keys(form)
                                        )"
                                        :key="'inde' + index_sub"
                                    >
                                        <div v-if="key == 'no'">
                                            {{ index + 1 }}<br />
                                            <!-- {{}} -->
                                            <div
                                                style="display:flex;justify-content:space-evenly"
                                            >
                                                <v-icon
                                                    style="font-size:50px"
                                                    class="drag"
                                                    >mdi-drag-horizontal</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        removeTableRow(index)
                                                    "
                                                    style="font-size:25px;color:red"
                                                    class="drag"
                                                    >fa-trash</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        selectedRow = index;
                                                        selectedRowDialog = true;
                                                    "
                                                    style="font-size:25px;color:red"
                                                    class="drag"
                                                    >fa-plus</v-icon
                                                >
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div
                                                v-if="getIndex(form[key]) != -1"
                                            >
                                                <div
                                                    style="display:flex;width:250px;justify-content:space-between"
                                                >
                                                    {{
                                                        insertForm
                                                            .observation_format[
                                                            getIndex(form[key])
                                                        ].label
                                                    }}
                                                    <v-icon
                                                        @click="
                                                            removeTable(
                                                                index,
                                                                key
                                                            )
                                                        "
                                                        >fa-trash</v-icon
                                                    >
                                                </div>
                                                <div
                                                    style="display:flex;width:250px;justify-content:space-between;padding:15px 0"
                                                >
                                                    <v-icon
                                                        @click="
                                                            selectQasEditable(
                                                                getIndex(
                                                                    form[key]
                                                                )
                                                            )
                                                        "
                                                        >fa-cog</v-icon
                                                    >
                                                    <!-- <v-switch label="Input Disable" v-model="insertForm.observation_format[getIndex(form[key])].disable"></v-switch> -->
                                                    <div>
                                                        <v-icon
                                                            :class="{
                                                                redColor:
                                                                    insertForm
                                                                        .observation_format[
                                                                        getIndex(
                                                                            form[
                                                                                key
                                                                            ]
                                                                        )
                                                                    ].editable
                                                            }"
                                                            @click="
                                                                insertForm.observation_format[
                                                                    getIndex(
                                                                        form[
                                                                            key
                                                                        ]
                                                                    )
                                                                ].editable = !insertForm
                                                                    .observation_format[
                                                                    getIndex(
                                                                        form[
                                                                            key
                                                                        ]
                                                                    )
                                                                ].editable
                                                            "
                                                            style="margin:2px"
                                                            >mdi-account-edit</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist(
                                                                    getIndex(
                                                                        form[
                                                                            key
                                                                        ]
                                                                    ),
                                                                    'merge'
                                                                )
                                                            }"
                                                            style="margin:2px"
                                                            >mdi-table-merge-cells</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist(
                                                                    getIndex(
                                                                        form[
                                                                            key
                                                                        ]
                                                                    ),
                                                                    'map'
                                                                )
                                                            }"
                                                            style="margin:2px"
                                                            >mdi-magnify-scan</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist(
                                                                    getIndex(
                                                                        form[
                                                                            key
                                                                        ]
                                                                    ),
                                                                    'exp'
                                                                )
                                                            }"
                                                            >fa-calculator</v-icon
                                                        >
                                                    </div>
                                                </div>

                                                <v-text-field
                                                    outlined
                                                    v-debounce="delay"
                                                    label="value"
                                                    v-model.lazy="
                                                        insertForm
                                                            .observation_format[
                                                            getIndex(form[key])
                                                        ].value
                                                    "
                                                ></v-text-field>
                                                <v-combobox
                                                    :return-object="false"
                                                    :items="
                                                        insertForm.observation_format
                                                    "
                                                    dense
                                                    v-model="form[key]"
                                                    item-text="name"
                                                    item-value="name"
                                                    clearable
                                                    hide-selected
                                                    small-chips
                                                ></v-combobox>
                                            </div>
                                            <div v-else>
                                                <div
                                                    style="display:flex;width:250px;justify-content:space-between"
                                                >
                                                    <div></div>
                                                    <v-icon
                                                        @click="
                                                            removeTable(
                                                                index,
                                                                key
                                                            )
                                                        "
                                                        >fa-trash</v-icon
                                                    >
                                                </div>

                                                Not Found

                                                <v-combobox
                                                    :return-object="false"
                                                    :items="
                                                        insertForm.observation_format
                                                    "
                                                    dense
                                                    v-model="form[key]"
                                                    item-text="name"
                                                    item-value="name"
                                                    clearable
                                                    hide-selected
                                                    small-chips
                                                ></v-combobox>

                                                <br />
                                                {{ form[key] }}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </draggable>
                        </table>
                    </div>
                           <v-dialog
            v-model="productSettingDialog"
            persistent
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="productSettingDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <!-- <v-btn dark text @click="saveProductsFormat">
                            SAVE
                        </v-btn> -->
                    </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                   <h3>Dataset For Qas Form One</h3>
  <v-text-field text label="Label" dense v-model="createDataset.label"></v-text-field>
                  
                   <v-text-field dense text label="Name" v-model="createDataset.name"></v-text-field>

                   <v-text-field dense text label="Value" v-model="createDataset.value"></v-text-field>
                   <div style="display:flex;justify-content:center">
                   <v-btn text @click="createObservationFormat">create</v-btn>
                   </div>
                    <!-- <v-btn
                        outlined
                        @click="createFieldSettingDialog = true"
                        style="margin-right:15px"
                        >Create Field</v-btn
                    > -->
                    <!-- <v-btn outlined @click="preFields">Pre Fields</v-btn> -->
                </div>

                <div
                    style="padding:10px;height: 85vh;
    overflow: scroll;"
                >
                <table  class="obFormatTable">
                    <draggable
                        :list="insertForm.observation_format"
                        tag="tbody"
                        handle=".handle"
                        style="
                     margin-top:10px "
                        ghost-class="ghost"
                        group="product"
                        @start="dragging = true"
                        @end="dragging = false"
                    >
                        <tr
                            style="display:flex;"
                            v-for="(productFormat,
                            index) in insertForm.observation_format"
                            :key="'product' + index"
                        >
                        <td>
                        {{index+1}}
                            <v-icon style="margin:0 5px" class="handle"
                                >fa-arrows-alt</v-icon
                            >
                            </td>
                            <td >
                            <input
                                class="interInput"
                                v-model="productFormat.label"
                                type="text"
                                placeholder="Label"
                            />
                            </td>
                            <td>
                            <input
                                class="interInput"
                                v-model="productFormat.name"
                                type="text"
                                placeholder="Name"
                            />
                            </td>
                            <td>
                                                        <input
                                class="interInput"
                                v-model="productFormat.value"
                                type="text"
                                placeholder="value"
                            />
                 </td>
                                 <td>
                    <v-icon @click="selectQasEditable(index)">fa-cog</v-icon>
                 </td>
                  <td>
                            <v-icon
                                @click="removeConfig(productFormat, index)"
                                style="margin:0 5px"
                                >fa-times</v-icon
                            >
                            </td>
                        </tr>
                    </draggable>
</table>
                </div>
            </v-card>
        </v-dialog>
                </div>
</template>
<script>
/*eslint-disable*/
import * as core from "../lib/core.js";

import  moment from 'moment'
import _ from 'lodash'
function initialState($vm) {
    return {
        createDataset:{
label:'',
name:'',
value:''
        },
        observation2_format_dialog:false,
        // observation2FormatName:'',

        // observationFormatName:'',
        postfix: {
            key: "",
            value: ""
        },
        qas2Loader: false,
        qasLoader: false,
        selectedRowDialog: false,
        selectedRowDialog2:false,
        selectedRow: -1,
        selectedRow2: -1,
        createRowName: "",
        createRowName2: "",
        createColumnName: "",
        selectedHeaderRow: -1,
        headerColumnName: "",
        rowName: "",
        tableColumnSetupDialog: false,

        createQasRowInputDialog: false,
        qas2EdiableDialog: false,
        qasEdiableDialog: false,
        delay: 7000,
                qas2EditableIndex: -1,
        qasEditableIndex: -1,
        qasFormSetup: "config", //config or input
        isStateForUpdate: false,
        modal: false,
        createFieldSettingDialog: false,
        createField: {
	label:'',//input field label
	name:'',//column name
	value:'',//default value
	default:true,
	editable:true,
        },
        // productsFormat:_.cloneDeep($vm.$store.state.interplex.configProductsFormat),
        validationHelpDialog: false,
        productSettingDialog: false,
        product2SettingDialog:false,
        productFieldSettingDialog: false,
        // selectedFieldSetting: create_field,
        insertForm: {
            branch: "",
            product_name: "",
            supplier_name: "",
            rmcode: "",
            eds: "",
            rm: "",
            form_format: "",
            comment: "",
            skiplevel: 0,
            qas_form_one_ui:{},//new
            qas_form_two_ui:{},//new
            table_header_format: [
                "no",
                "desc",
                "unit",
                "min_spec",
                "max_spec",
                "sup_min",
                "sup_max",
                "ieipl_min",
                "ieipl_max",
                "remarks"
            ],
            postfix_observation_print_view_format: {},
            observation_header_print_view: [],
            observation2_header_print_view: [],//new
            observation_print_view: [],
            observation2_print_view:[],//new
            observation_format: _.cloneDeep(
                $vm.$store.state.interplex.configProductsFormat
            ), //core.database($vm,'getMasterProductConfig'),
                        observation2_format: _.cloneDeep(
                $vm.$store.state.interplex.configProductsFormat2
            ), //core.database($vm,'getMasterProductConfig'),

            other: {},
            duedate: moment().format("YYYY-MM-DD")
        },
        configQasPrintViewDialog: false,
        configQas2PrintViewDialog: false,
        observation_print_view_format: {
            no: "",
            desc: "",
            unit: "",
            min_spec: "",
            max_spec: "",
            sup_min: "",
            sup_max: "",
            ieipl_min: "",
            ieipl_max: "",
            remarks: ""
        }
    };
}


export default {
    
        data() {
        return initialState(this);
    },
        async mounted() {
        var $vm = this;
        await $vm.$store.dispatch("getProductConfig");
        $vm.insertForm.observation_format = $vm.$store.state.interplex.configProductsFormat;

if ($vm.insertForm.observation_print_view.length == 0) {
            $vm.insertForm.observation_print_view =
                _.cloneDeep($vm.$store.state.interplex.observation_print_view_format);
        }
        if (_.isEmpty($vm.insertForm.postfix_observation_print_view_format)) {
            $vm.insertForm.postfix_observation_print_view_format =
                _.cloneDeep($vm.$store.state.map.postfix_observation_print_view_format);
        }
        if (_.isEmpty($vm.insertForm.observation_header_print_view)) {
            $vm.insertForm.observation_header_print_view =
                _.cloneDeep($vm.$store.state.interplex.observation_header_print_view_format);
        }
        
   },

    methods: {
obFormat(field){
    var $vm=this;
var obj=$vm.$store.state.map.productConfig

return {
...obj,...field
}
},
        createQas2Field(name){
var $vm=this;

if(!_.find($vm.insertForm.observation2_format,'name',name))
{
    $vm.$alert("Already Exist")
    return;
}
$vm.insertForm.observation2_format.push({
 label:'',//input field label
name,//column name
value:'',//default value
default:true,   
})
        },
        removePostfix(key) {
            var $vm = this;
            $vm.$confirm("Do You want to delete?").then(() => {
                $vm.$delete(
                    $vm.insertForm.postfix_observation_print_view_format,
                    key
                );
            });
        },
        createPostfix() {
            var $vm = this;
            if ($vm.postfix.key == "") {
                $vm.$alert("Input must be filled");
                return;
            }
            if ($vm.postfix.value == "") {
                $vm.$alert("Input must be filled");

                return;
            }

            $vm.$set(
                $vm.insertForm.postfix_observation_print_view_format,
                $vm.postfix.key,
                $vm.postfix.value
            );
        },
        editFieldSetting(index, action) {
            var $vm = this;
            console.log("field=>", index, action);
            if (action == "editable") {
                $vm.insertForm.observation_format[index].editable = !$vm
                    .insertForm.observation_format[index].editable;
            }

            if (action == "merge") {
                if (_.has($vm.insertForm.observation_format[index], "merge"))
                    $vm.$delete(
                        $vm.insertForm.observation_format[index],
                        "merge"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation_format[index],
                        "merge",
                        {
                            colspan: 1,
                            rowspan: 1
                        }
                    );
            }
            if (action == "map") {
                if (
                    _.has($vm.insertForm.observation_format[index], "map")
                )
                    $vm.$delete(
                        $vm.insertForm.observation_format[index],
                        "map"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation_format[index],
                        "map",
                        {
                        mapFrom:'',
                        map:''
                        }
                    );
            }
            if (action == "exp") {
                if (_.has($vm.insertForm.observation_format[index], "exp"))
                    $vm.$delete(
                        $vm.insertForm.observation_format[index],
                        "exp"
                    );
                else
                    $vm.$set($vm.insertForm.observation_format[index], "exp", {
                        rule: "",
                        success: "",//_default_
                        failure: "",//_default_
                        status: false,
                        note: 'For Actual Value "_default_"'
                    });
            }
        },
                editFieldSetting2(index, action) {
            var $vm = this;
            console.log("field=>", index, action);
            if (action == "editable") {
                $vm.insertForm.observation2_format[index].editable = !$vm
                    .insertForm.observation2_format[index].editable;
            }

            if (action == "merge") {
                if (_.has($vm.insertForm.observation2_format[index], "merge"))
                    $vm.$delete(
                        $vm.insertForm.observation2_format[index],
                        "merge"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation2_format[index],
                        "merge",
                        {
                            colspan: 1,
                            rowspan: 1
                        }
                    );
            }
            if (action == "map") {
                if (
                    _.has($vm.insertForm.observation2_format[index], "map")
                )
                    $vm.$delete(
                        $vm.insertForm.observation2_format[index],
                        "map"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation2_format[index],
                        "map",
                        ""
                    );
            }
            if (action == "exp") {
                if (_.has($vm.insertForm.observation2_format[index], "exp"))
                    $vm.$delete(
                        $vm.insertForm.observation2_format[index],
                        "exp"
                    );
                else
                    $vm.$set($vm.insertForm.observation2_format[index], "exp", {
                        rule: "",
                        success: "",//_default_
                        failure: "",//_default_
                        status: false,
                        note: 'For Actual Value "_default_"'
                    });
            }
        },
        openQasTwoDialog() {
            var $vm = this;
            $vm.qas2Loader = true;
            setTimeout(() => {
                $vm.configQas2PrintViewDialog = true;
            }, 800);

            setTimeout(() => {
                $vm.qas2Loader = false;
            }, 2000);
        },
        openQasDialog() {
            var $vm = this;
            $vm.qasLoader = true;
            setTimeout(() => {
                $vm.configQasPrintViewDialog = true;
            }, 50);

            setTimeout(() => {
                $vm.qasLoader = false;
            }, 2000);
        },
        addTableRow() {
            var $vm = this;
            if ($vm.createRowName == "") {
                $vm.$alert("Please Fill the Field");
                return;
            }
            $vm.insertForm.table_header_format.push($vm.createRowName);
            $vm.$set(
                $vm.insertForm.observation_print_view[$vm.selectedRow],
                $vm.createRowName,
                ""
            );

            $vm.$alert("added (Please Check Table Order)");
            $vm.createRowName = "";
        },
                addTable2Row() {
            var $vm = this;
            if ($vm.createRowName2 == "") {
                $vm.$alert("Please Fill the Field");
                return;
            }
$vm.insertForm.observation2_print_view.push({name: $vm.createRowName2})
            // $vm.$set(
            //     $vm.insertForm.observation2_print_view[$vm.selectedRow2],
            //     $vm.createRowName2,
            //     ""
            // );


            $vm.$alert("added (Please Check Table Order)");
            $vm.createRowName = "";
        },
        removeTableRow(index) {
            var $vm = this;
            $vm.$confirm("Do You Want to Remove").then(() => {
                $vm.$delete($vm.insertForm.observation_print_view, index);
                //  $vm.insertForm.observation_format.splice(index,1)
                // console.log(index,$vm.insertForm.observation_format)
            });
        },
                removeTable2Row(index) {
            var $vm = this;

            $vm.$confirm("Do You Want to Remove").then(() => {
                $vm.$delete($vm.insertForm.observation2_print_view, index);
                //  $vm.insertForm.observation2_format.splice(index,1)
                // console.log(index,$vm.insertForm.observation_format)
            });
        },
        removeHeaderRow(index) {
            var $vm = this;
            $vm.$confrm("Do You Want to Remove").then(() => {
                $vm.insertForm.observation_header_print_view.splice(index, 1);
            });
            $vm.selectedHeaderRow = -1;
        },
        removeTableHeader(index) {
            var $vm = this;
            $vm.$confirm("Do You Want To Delete?").then(() => {
                $vm.insertForm.observation_print_view = _.map(
                    $vm.insertForm.observation_print_view,
                    x => {
                        if (_.has(x, $vm.insertForm.table_header_format[index]))
                            $vm.$delete(
                                x,
                                $vm.insertForm.table_header_format[index]
                            );
                        return x;
                    }
                );
                $vm.insertForm.table_header_format.splice(index, 1);
            });
        },
        createHeaderColumn() {
            var $vm = this;
            if ($vm.createColumnName == "") {
                $vm.$alert("Please Enter Value");
                return;
            }
            $vm.insertForm.table_header_format.push($vm.createColumnName);

            $vm.insertForm.observation_print_view = _.map(
                $vm.insertForm.observation_print_view,
                value => {
                    if (!value.hasOwnProperty($vm.createColumnName)) {
                        value[$vm.createColumnName] = "";
                    }
                    return value;
                }
            );
        },
                removeObservationHeaderPrintView(index,name){
var $vm=this;

            $vm.$confirm("Do You Want To Delete?").then(() => {
                $vm.insertForm.observation_header_print_view.splice(index,1)

                $vm.$alert("removed");
            });

        },
        removeObservationHeaderPrintView2(index, key) {
            var $vm = this;
            console.log("remove=>", index, key);
            $vm.$confirm("Do You Want To Delete?").then(() => {
                // $vm.$delete($vm.insertForm.observation2_print_view[index], key);
                $vm.insertForm.observation2_header_print_view.splice(index,1)

                $vm.$alert("removed");
            });
        },

        removeObsrevationPrintView2(index, key) {
            var $vm = this;
            console.log("remove=>", index, key);
            $vm.$confirm("Do You Want To Delete?").then(() => {
                // $vm.$delete($vm.insertForm.observation2_print_view[index], key);
                $vm.insertForm.observation2_print_view.splice(index,1)

                $vm.$alert("removed");
            });
        },
                removeTable(index, key) {
            var $vm = this;
            console.log("remove=>", index, key);
            $vm.$confirm("Do You Want To Delete?").then(() => {
                $vm.$delete($vm.insertForm.observation_print_view[index], key);
                $vm.$alert("removed");
            });
        },
        validate_observation_format(field){
var $vm=this;

// if(_.findIndex($vm.insertForm.observation_format,(x)=>x.name==field.name)!=-1)
//     $vm.insertForm.observation_format.push(field);

        },
        insertRow() {
            var $vm = this;
            var map = {};
            if(_.findIndex($vm.insertForm.observation_format,(x)=>x.name==$vm.rowName)!=-1)
            {

$vm.$alert("Column Already Exist Please Try Other Name")
return;
            }

            var postfix = this.insertForm.postfix_observation_print_view_format;

            //******************** 1.create observation format****************
            var rows = [];
            //create fields produt config format
            _.forEach(postfix, (value, key) => {
                //create input format
                //double check below column
                var obj = _.cloneDeep($vm.$store.state.map.productConfig);
                obj["name"] = $vm.rowName + value;
                map[key] = obj.name;
                rows.push(obj);
            });
    $vm.insertForm.observation_format.push(...rows);

// this.validate_observation_format(...rows)
            // $vm.insertForm.observation_format.push(...rows);
            //****************2.create observation format print view**********

            console.log(map);
            $vm.insertForm.observation_print_view.push(map);

            $vm.createQasRowInputDialog = false;
            $vm.$alert("New Row Created");
        },
        selectQasEditable(index) {
            var $vm = this;

            $vm.qasEdiableDialog = true;
            $vm.qasEditableIndex = index;
        },
                selectQas2Editable(index) {
            var $vm = this;

            $vm.qas2EdiableDialog = true;
            $vm.qas2EditableIndex = index;
        },
        insertObservation() {
            var $vm = this;
            $vm.insertForm.observation_print_view.push(
                initialState($vm).observation_print_view_format
            );
        },
        removeConfig(item, index) {
            var $vm=this;
            if (item.default) {
                $vm.$alert("Cannot Delete Default Field", "Error", "error");

                return;
            }
            this.insertForm.observation_format.splice(index, 1);
        },
                remove2Config(item, index) {
            var $vm=this;
            if (item.default) {
                $vm.$alert("Cannot Delete Default Field", "Error", "error");

                return;
            }
            this.insertForm.observation2_format.splice(index, 1);
        },
        clear() {
            var $vm = this;
            $vm.$confirm("Do you want to reset ?", "warning", "warning").then(
                () => {
                    $vm.insertForm = initialState($vm).insertForm;
                }
            );
        },
        async save() {
            var $vm = this;
            var prepareData = _.cloneDeep($vm.insertForm);
            prepareData["branch"] = $vm.$store.state.interplex.user.branch;

            if (prepareData.rmcode == "") {
                $vm.$alert("Part No Must Be Filled", "Error", "error");
                return;
            }
var checkBatch=await $vm.$store.dispatch('productBatchCheck',prepareData.rmcode)
if(checkBatch)
{
$vm.$alert("Product Already Exist")
    return 
}

            var product = await $vm.$store.dispatch(
                "createProduct",
                prepareData
            );

            if (product) {
                $vm.$alert("Successfully Created");
                return;
            }

            $vm.$alert("Something Wrong");

            $vm.insertForm = initialState($vm).insertForm;

            console.log(prepareData);
        },
        async update() {
            var $vm = this;
            // core.database(this,'updateMasterProduct',this.insertForm)

            $vm.$store.dispatch("updateProduct", $vm.insertForm);

            $vm.$alert("Successfully Updated");
        },
        selectFieldSettingfn(item) {
            this.selectedFieldSetting = item;
            this.productFieldSettingDialog = true;
        },
        saveProductsFormat() {
            var $vm = this;
            // $vm.$alert('Saved','success','success')
            // this.$store.commit("updateProductsFormat",this.insertForm.observation_format)
            //   core.database(this,'saveProductConfig',this.insertForm.observation_format)

            $vm.$store.dispatch(
                "updateProductConfig",
                $vm.insertForm.observation_format
            );

            $vm.$alert("Config Updated");
        },
        createProductField() {
            var $vm=this;
      if(_.findIndex($vm.insertForm.observation_format,(x)=>x.name==$vm.rowName)!=-1)
            {

$vm.$alert("Column Already Exist Please Try Other Name")
return;
            }
    $vm.insertForm.observation_format.push($vm.createField);
            $vm.$alert("added");
        },
                createObservationFormat() {
            var $vm=this;
     if($vm.createDataset.name==''){
        $vm.$alert("Name Must Be Filled");
        return;
     }
     if(_.findIndex($vm.insertForm.observation_format,(x)=>x.name==$vm.observationFormatName)!=-1)
            {

$vm.$alert("Column Already Exist Please Try Other Name")
return;
            }
    $vm.insertForm.observation_format.push($vm.obFormat($vm.createDataset));
            $vm.$alert("added");
        },
               createObservation2Format() {
            var $vm=this;
             if($vm.createDataset.name==''){
        $vm.$alert("Name Must Be Filled");
        return;
     }
      if(_.findIndex($vm.insertForm.observation2_format,(x)=>x.name==$vm.observationFormatName)!=-1)
            {

$vm.$alert("Column Already Exist Please Try Other Name")
return;
            }
    $vm.insertForm.observation2_format.push($vm.obFormat($vm.createDataset));
            $vm.$alert("added");
        },
        preFields() {
            var $vm = this;
            this.$store.commit(
                "setPreFieldFormat",
                state.interplex.configProductsFormat
            );
            this.insertForm.observation_format =
                state.interplex.configProductsFormat;
            $vm.$alert("added");
        }
    }
,    computed: {
        tableOrder() {
            var $vm = this;
            return array => {
                return core.tableOrder(
                    $vm.insertForm.table_header_format,
                    array
                );
            };
        },
        isKeyExist() {
            var $vm = this;
            return (index, isObjectKeyExist) => {
                // console.log("check",key,isObjectKeyExist,index,$vm.insertForm.observation_format[index])
                if (index == -1) return false;
                return _.has(
                    $vm.insertForm.observation_format[index],
                    isObjectKeyExist
                );
            };
        },
        isKeyExist2() {
            var $vm = this;
            return (index, isObjectKeyExist) => {
                // console.log("check",key,isObjectKeyExist,index,$vm.insertForm.observation_format[index])
                if (index == -1) return false;
                return _.has(
                    $vm.insertForm.observation2_format[index],
                    isObjectKeyExist
                );
            };
        },

getColspan() {
            var $vm = this;
            return key => {
                if ($vm.getIndex(key) == -1) return 1;
                return core.merge(
                    $vm.insertForm.observation_format[$vm.getIndex(key)]
                ).colspan;
            };
        },
        getRowspan() {
            var $vm = this;
            return key => {
                if ($vm.getIndex(key) == -1) return 1;
                return core.merge(
                    $vm.insertForm.observation_format[$vm.getIndex(key)]
                ).rowspan;
            };
        },

getColspan2() {
            var $vm = this;
            return key => {
                if ($vm.getIndex2(key) == -1) return 1;
                return core.merge(
                    $vm.insertForm.observation2_format[$vm.getIndex2(key)]
                ).colspan;
            };
        },
        getRowspan2() {
            var $vm = this;
            return key => {
                if ($vm.getIndex2(key) == -1) return 1;
                return core.merge(
                    $vm.insertForm.observation2_format[$vm.getIndex2(key)]
                ).rowspan;
            };
        },

        getIndex() {
            var $vm = this;
            return name => {
                return _.findIndex($vm.insertForm.observation_format, x => {
                    return x.name == name;
                });
            };
        },
                getIndex2() {
            var $vm = this;
            return name => {
                return _.findIndex($vm.insertForm.observation2_format, x => {
                    return x.name == name;
                });
            };
        },

        getProduct() {
            var $vm = this;
            return name => {
                var index = _.findIndex(
                    $vm.insertForm.observation_format,
                    x => {
                        return x.name == name;
                    }
                );
                if (index > -1) {
                    return {
                        isExist: true,
                        ...$vm.insertForm.observation_format[index]
                    };
                }
                return { isExist: false };
            };
        },
        // observation_format_columns() {
        //     var $vm = this;
        //     return [
        //         { name: "supplier_name" },
        //         { name: "supplier_name" },
        //         { name: "product_name" },
        //         { name: "rmcode" },
        //         { name: "eds" },
        //         { name: "rm" },
        //         { name: "skiplevel" },
        //         { name: "form_format" },
        //         { name: "duedate" },
        //         ..._.cloneDeep($vm.$store.state.interplex.configProductsFormat)
        //     ];
        // }
    },
}
</script>
<style lang="scss">
    
</style>