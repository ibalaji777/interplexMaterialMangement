<template>
    <div>
        <div style="display:flex;justify-content:flex-end">
            <v-btn @click="productSettingDialog = true" outlined>
                config
            </v-btn>
        </div>
        <h3 style="margin:10px 0">
            Product Format & Quality assurance Setting
        </h3>
        <div>
            <span>Supplier Name</span>
            <input
                class="interInput"
                v-model="insertForm.supplier_name"
                type="text"
                placeholder="Supplier Name"
            />
        </div>

        <div>
            <span>Product Name</span>
            <input
                class="interInput"
                v-model="insertForm.product_name"
                type="text"
                placeholder="Product Name"
            />
        </div>
        <div>
            <span>RM Code (Part NO)</span>
            <input
                class="interInput"
                v-model="insertForm.rmcode"
                type="text"
                placeholder="Rm code (Part No)"
            />
        </div>
        <!-- <div>
<span >Batch</span>
<input class="interInput" v-model="insertForm.eds" type="text" placeholder="batch" >
</div> -->
        <div>
            <span>EDS</span>
            <input
                class="interInput"
                v-model="insertForm.eds"
                type="text"
                placeholder="EDS "
            />
        </div>
        <div>
            <span>RM </span>
            <input
                class="interInput"
                v-model="insertForm.rm"
                type="text"
                placeholder="RM"
            />
        </div>
        <div>
            <span>SKIP LEVEL</span>
            <input
                class="interInput"
                v-model="insertForm.skiplevel"
                type="text"
                placeholder="skiplevel"
            />
        </div>
        <div>
            <span>Form Format</span>
            <input
                class="interInput"
                v-model="insertForm.form_format"
                type="text"
                placeholder="Form Format"
            />
        </div>
        <div>
            <span>Next Due For Third Party Validation</span>
            <!-- put date field here -->
            <!-- <input class="interInput" v-model="insertForm.duedate" type="text" placeholder="Due Date" > -->

            <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="insertForm.duedate"
                persistent
                width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="insertForm.duedate"
                        label="Picker in dialog"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="insertForm.duedate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(insertForm.duedate)"
                    >
                        OK
                    </v-btn>
                </v-date-picker>
            </v-dialog>
        </div>

        <!-- <div v-for="(productFormat , index) in insertForm.observation_format" :key="'product'+index">

<div style="display:flex">
<span style="width:40%">{{productFormat.label}}</span>
<input style="width:60%" class="interInput" v-model="productFormat.value"  type="text" :placeholder="productFormat.label" ><v-icon @click="selectFieldSettingfn(productFormat)" style="margin:0 5px">fa-cog</v-icon>
</div>


</div> -->

        <!-- <div style="display:flex;align-items:center">
<span >
<span >Width:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.width_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.width_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.width_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >thickness:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.thickness_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.thickness_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.thickness_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >hardness:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.hardness_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.hardness_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.hardness_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >elongation:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.elongation_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.elongation_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.elongation_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >tenstilstr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.tenstilstr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.tenstilstr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.tenstilstr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >yieldstr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.yieldstr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.yieldstr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.yieldstr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >cu:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.cu_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.cu_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.cu_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >pb:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.pb_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.pb_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.pb_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >bi:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.bi_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.bi_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.bi_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >o:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.o_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.o_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.o_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >others:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.others_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.others_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.others_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >slittingburr:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.slittingburr_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.slittingburr_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.slittingburr_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >twist:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.twist_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.twist_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.twist_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >camber:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.camber_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.camber_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.camber_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>

<div style="display:flex;align-items:center">
<span >
<span >surfacefinish:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.surfacefinish_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.surfacefinish_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.surfacefinish_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >thermalconduct:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.thermalconduct_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.thermalconduct_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.thermalconduct_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >density:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.density_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.density_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.density_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div>
<div style="display:flex;align-items:center">
<span >
<span >coilweight:</span>
<div style="display:flex">
<input class="interInput" v-model="insertForm.coilweight_unit_org"  type="text" placeholder="unit" >
<input class="interInput" v-model="insertForm.coilweight_min_spec_org" type="text" placeholder="Min Spec" >
<input class="interInput" v-model="insertForm.coilweight_max_spec_org" type="text" placeholder="Max Spec" >
</div>
</span>
</div> -->
        <v-btn
            :loading="qasLoader"
            @click="openQasDialog"
            outlined
            color="red"
            style="margin:10px 10px"
        >
            Quality Assurance Form One
        </v-btn>

        <v-btn
            :loading="qas2Loader"
            @click="openQasTwoDialog"
            outlined
            color="red"
            style="margin:10px 0"
        >
            Quality Assurance Form Two
        </v-btn>
        <div style="display:flex;justify-content:flex-end;margin-top:25px">
            <v-btn outlined @click="clear" style=";margin-right:10px;"
                >Reset</v-btn
            >
            <v-btn v-if="!isStateForUpdate" outlined @click="save" style=""
                >Save</v-btn
            >
            <v-btn v-else @click="update" outlined>Update</v-btn>
        </div>

        <!-- ^^^^^^^^^^^^^^^^^^^^^^^^qas form 1^^^^^^^^^^^^^^^^^^^^ -->
        <v-dialog
            v-model="configQasPrintViewDialog"
            fullscreen
            hide-overlay
            persistent
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <span>Create Qas Form</span>
                    <v-spacer></v-spacer>
                    <v-toolbar-title
                        ><v-icon @click="configQasPrintViewDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >

                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <!-- <v-btn @click="insertObservation" outlined color="red">
    <v-icon>fa-plus</v-icon>
</v-btn> -->

                    <h3 style="padding:0;margin:10px 0">OBSERVATION</h3>
                    <div style="display:flex;margin:10px 0">
                        <v-btn
                            style="margin:10px"
                            @click="createQasRowInputDialog = true"
                            color="primary"
                        >
                            Create Row
                        </v-btn>
                        <v-btn
                            style="margin:10px"
                            @click="tableColumnSetupDialog = true"
                            color="primary"
                        >
                            Create Column
                        </v-btn>
                    </div>

                    <div style="height:78vh;overflow:scroll">
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
                                                        removeTable(
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
                                                    <!-- <v-icon  :class="{redColor:isKeyExist(getIndex(item.name),'sapHeader')}" style="margin:2px">mdi-magnify-scan</v-icon>
<v-icon :class="{redColor:isKeyExist(getIndex(item.name),'exp')}">fa-calculator</v-icon> -->
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
                                                                    'sapHeader'
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
                </div>
            </v-card>
        </v-dialog>
        <!-- ^^^^^^^^^^^^^^^^^^^^^^^^qas form 2^^^^^^^^^^^^^^^^^^^^ -->
          <v-dialog
            v-model="configQas2PrintViewDialog"
            fullscreen
            hide-overlay
            persistent
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <span>Create Qas Form </span>
                    <v-spacer></v-spacer>
                    <v-toolbar-title
                        ><v-icon @click="configQas2PrintViewDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >

                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">

                    <h3 style="padding:0;margin:10px 0">Product List Group Format</h3>

<!-- header{{insertForm.observation2_header_print_view}}<br>
print view{{insertForm.observation2_print_view}}<br>
ob2 format{{insertForm.observation2_format}}<br> -->

                    <div style="height:78vh;overflow:scroll">
                        <table class="observationTable" style="width:100vw">
                            <tr
                                v-for="(form,
                                index) in insertForm.observation2_header_print_view"
                                :key="'printv' + index"
                            >
                                <td
                                    :colspan="getColspan2(item.name)"
                                    :rowspan="getRowspan2(item.name)"
                                    v-for="(item, index_sub) in form.column"
                                    :key="'inde' + index_sub"
                                >
                                    <div >
                                        <div>
                                        {{item.name}}<br>
                                        <!-- {{getIndex2(item.name)}} -->
                                        <div v-if="getIndex2(item.name) != -1">
                                            <div
                                                style="display:flex;width:250px;justify-content:space-between"
                                            >
                                                {{
                                                    insertForm
                                                        .observation2_format[
                                                        getIndex2(item.name)
                                                    ].label
                                                }}
                                                <v-icon
                                                    @click="
                                                        removeTable(
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
                                                        selectQas2Editable(
                                                            getIndex2(item.name)
                                                        )
                                                    "
                                                    >fa-cog</v-icon
                                                >
                                                <div>
                                                    <!-- {{insertForm.observation2_format[getIndex2(item.name)]}}
{{item.name}}
{{getIndex2(item.name)}}
{{isKeyExist2(form[item.name],'merge')}} -->
                                                    <v-icon
                                                        :class="{
                                                            redColor: isKeyExist2(
                                                                getIndex2(
                                                                    item.name
                                                                ),
                                                                'merge'
                                                            )
                                                        }"
                                                        style="margin:2px"
                                                        >mdi-table-merge-cells</v-icon
                                                    >
                                                    <!-- <v-icon  :class="{redColor:isKeyExist2(getIndex2(item.name),'sapHeader')}" style="margin:2px">mdi-magnify-scan</v-icon>
<v-icon :class="{redColor:isKeyExist2(getIndex2(item.name),'exp')}">fa-calculator</v-icon> -->
                                                </div>
                                            </div>

                                            <v-text-field
                                                outlined
                                                v-debounce="delay"
                                                label="value"
                                                v-model.lazy="
                                                    insertForm
                                                        .observation2_format[
                                                        getIndex2(item.name)
                                                    ].value
                                                "
                                            ></v-text-field>
                                        </div>
                                        <div v-else>
                                            Header
                                            <div
                                                style="display:flex;width:250px;justify-content:space-between"
                                            >
                                                <div></div>
                                                <v-icon
                                                    @click="
                                                        removeTable2(index, key)
                                                    "
                                                    >fa-trash</v-icon
                                                >
                                            </div>

                                            Not Found
                                        </div>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                                   <draggable
                                :list="insertForm.observation2_print_view"
                                style="
                     margin-top:10px "
                                tag="tr"
                                ghost-class="ghost"
                                group="product"
                                @start="dragging = true"
                                @end="dragging = false"
                            >   

                                    <td

                                       v-for="(column,
                                    index) in insertForm.observation2_print_view"
                                    :key="'pri' + index"

                                        :colspan="getColspan2(column)"
                                        :rowspan="getRowspan2(column)"
                                     >
                                     <!-- {{column}} -->
                              
                                        <div v-if="column.name == 'no'">
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
                                                        selectedRow2 = index;
                                                        selectedRowDialog2 = true;
                                                    "
                                                    style="font-size:25px;color:red"
                                                    class="drag"
                                                    >fa-plus</v-icon
                                                >
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div
                                                v-if="getIndex2(column.name) != -1"
                                            >
                                                <div
                                                    style="display:flex;width:250px;justify-content:space-between"
                                                >
                                                    {{
                                                        insertForm
                                                            .observation2_format[
                                                            getIndex2(column.name)
                                                        ].label
                                                    }}
                                                    <v-icon
                                                        @click="
                                                            removeTable2(
                                                                index,
                                                                column.name
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
                                                            selectQas2Editable(
                                                                getIndex2(
                                                                    column.name
                                                                )
                                                            )
                                                        "
                                                        >fa-cog</v-icon
                                                    >
                                                    <!-- <v-switch label="Input Disable" v-model="insertForm.observation2_format[getIndex2(column.name)].disable"></v-switch> -->
                                                    <div>
                                                        <v-icon
                                                            :class="{
                                                                redColor:
                                                                    insertForm
                                                                        .observation2_format[
                                                                        getIndex2(
                                                                            column.name
                                                                        )
                                                                    ].editable
                                                            }"
                                                            @click="
                                                                insertForm.observation2_format[
                                                                    getIndex2(
                                                                      column.name
                                                                    )
                                                                ].editable = !insertForm
                                                                    .observation2_format[
                                                                    getIndex2(
                                                                        column.name
                                                                    )
                                                                ].editable
                                                            "
                                                            style="margin:2px"
                                                            >mdi-account-edit</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist2(
                                                                    getIndex2(
                                                                        column.name
                                                                    ),
                                                                    'merge'
                                                                )
                                                            }"
                                                            style="margin:2px"
                                                            >mdi-table-merge-cells</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist2(
                                                                    getIndex2(
                                                                        column.name
                                                                    ),
                                                                    'sapHeader'
                                                                )
                                                            }"
                                                            style="margin:2px"
                                                            >mdi-magnify-scan</v-icon
                                                        >
                                                        <v-icon
                                                            :class="{
                                                                redColor: isKeyExist2(
                                                                    getIndex2(
                                                                        column.name
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
                                                            .observation2_format[
                                                            getIndex2(column.name)
                                                        ].value
                                                    "
                                                ></v-text-field>
                                                <v-combobox
                                                    :return-object="false"
                                                    :items="
                                                        insertForm.observation2_format
                                                    "
                                                    dense
                                                    v-model="column.name"
                                                    item-text="name"
                                                    item-value="name"
                                                    clearable
                                                    hide-selected
                                                    small-chips
                                                ></v-combobox>
                                                                                                <v-icon
                                                    style="font-size:50px"
                                                    class="drag"
                                                    >mdi-drag-horizontal</v-icon
                                                >
                                            
                                                
                                            </div>
                                            <div v-else>
                                                <div
                                                    style="display:flex;width:250px;justify-content:space-between"
                                                >
                                                    <div></div>
                                                    <v-icon
                                                        @click="
                                                            removeTable2(
                                                                index,
                                                                column.name
                                                            )
                                                        "
                                                        >fa-trash</v-icon
                                                    >
                                                </div>

                                                Not Found
<!-- {{insertForm.observation2_format}} -->
                                                <v-combobox
                                                    :return-object="false"
                                                    :items="
                                                        insertForm.observation2_format
                                                    "
                                                    dense
                                                    v-model="column.name"
                                                    item-text="name"
                                                    item-value="name"
                                                    clearable
                                                    hide-selected
                                                    small-chips
                                                ></v-combobox>

                                                <br />
                                                {{ column.name }}<br>

<v-btn text @click="createQas2Field(column.name)">
                                                <v-icon>fa-plus</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </td>

                                   </draggable>
                        </table>
                    </div>
                </div>
            </v-card>
        </v-dialog>


        <!-- tableColumnSetupDialog -->
        <v-dialog v-model="tableColumnSetupDialog" persistent fullscreen>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="tableColumnSetupDialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>

                <v-card-title> </v-card-title>
                <v-card-text>
                    <div>
                        <!-- <div> -->
                        <!-- <span class="text-h5">Table Header </span>
<v-text-field v-model="headerColumnName" label="Create  Column">
</v-text-field> <br> -->
                        <!-- <table  class="observationTable" style="width:100vw">
    <tr v-for="(form,index) in insertForm.observation_header_print_view" :key="'printview'+index">
<td @click="selectedHeaderRow=index">{{index+1}}<br>
<v-icon @click="removeHeaderRow(index)">fa-trash</v-icon>
</td>
<td :colspan="getColspan(form[key])" :rowspan="getRowspan(form[key])" v-for="(key,index_sub) in Object.keys(form)" :key="'inde'+index_sub">
            </tr>
        </table> -->

                        <span class="text-h5">Table Header Sort</span>
                        <v-text-field
                            v-model="createColumnName"
                            label="Create  Column"
                        >
                        </v-text-field>
                        <br />
                        <v-btn
                            color="primary"
                            @click="createHeaderColumn"
                            style="margin:15px 0"
                            >Submit</v-btn
                        >
                        <table
                            style="border:1px solid black;width:100%;border-collapse: collapse;margin:10px 0"
                        >
                            <draggable
                                :list="insertForm.table_header_format"
                                style="
                     margin-top:10px "
                                tag="tr"
                                ghost-class="ghost"
                                group="product"
                                @start="dragging = true"
                                @end="dragging = false"
                            >
                                <td
                                    style="margin-right:10px;padding:5px;border:1px solid black"
                                    v-for="(item,
                                    index) in insertForm.table_header_format"
                                    :key="'table_header' + index"
                                >
                                    {{ item }}&nbsp;
                                    <v-icon @click="removeTableHeader(index)"
                                        >fa-trash</v-icon
                                    >
                                </td>
                            </draggable>
                        </table>

                        Note<br />
                        <b
                            >It Create New Column each and every row if does not
                            Exist.</b
                        >
                        <!-- {{$store.state.map.}} -->
                    </div>

                    <!-- <div>
<span class="text-h5">Create New Table Column</span>
<v-text-field v-model="createNewTableColumnName" label="Create  Column">
</v-text-field> <br>
<v-btn color="primary" @click="createHeaderColumn" style="margin:15px 0">Submit</v-btn>
 <table style="border:1px solid black;width:100%;border-collapse: collapse;margin:10px 0">
    
                                       <draggable
                                            :list="insertForm.table_header_format"
                                            style="
                     margin-top:10px "
                     tag="tr"
                                            ghost-class="ghost"
                                            group="product"
                                            @start="dragging = true"
                                            @end="dragging = false"
                                        >
        
<td style="margin-right:10px;padding:5px;border:1px solid black" v-for="(item,index) in insertForm.table_header_format" :key="'table_header'+index">
{{item}}&nbsp; <v-icon @click="removeTableHeader">fa-trash</v-icon>
</td>
                                       </draggable>
</table>
</div> -->
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- qas form 2-->

        <v-dialog v-model="selectedRowDialog2" persistent fullscreen>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="selectedRowDialog2 = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>

                <v-card-title>
                    <span class="text-h5"
                        >Create New Column row in {{ selectedRow2 + 1 }}</span
                    >
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        hint="whithout whitespace"
                        outlined
                        v-debounce="delay"
                        label="Name"
                        v-model.lazy="createRowName2"
                    ></v-text-field>

                    <div style="text-align:center;margin:10px; 0">
                        <v-btn color="blue darken-1" text @click="addTable2Row">
                            Save
                        </v-btn>
                    </div>
                    Note:<br />
                    it only visible specific row where you added.

                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- selectedRowDialog-->

        <v-dialog v-model="selectedRowDialog" persistent fullscreen>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="selectedRowDialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>

                <v-card-title>
                    <span class="text-h5"
                        >Create New Column row in {{ selectedRow + 1 }}</span
                    >
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        hint="whithout whitespace"
                        outlined
                        v-debounce="delay"
                        label="Name"
                        v-model.lazy="createRowName"
                    ></v-text-field>

                    <div style="text-align:center;margin:10px; 0">
                        <v-btn color="blue darken-1" text @click="addTableRow">
                            Save
                        </v-btn>
                    </div>
                    Note:<br />
                    it only visible specific row where you added.
                    <br />
                    <table
                        style="border:1px solid black;width:100%;border-collapse: collapse;margin:10px 0"
                    >
                        <draggable
                            :list="insertForm.table_header_format"
                            style="
                     margin-top:10px "
                            tag="tr"
                            ghost-class="ghost"
                            group="product"
                            @start="dragging = true"
                            @end="dragging = false"
                        >
                            <td
                                style="margin-right:10px;padding:5px;border:1px solid black"
                                v-for="(item,
                                index) in insertForm.table_header_format"
                                :key="'table_header' + index"
                            >
                                {{ item }}&nbsp;
                                <v-icon @click="removeTableHeader(index)"
                                    >fa-trash</v-icon
                                >
                            </td>
                        </draggable>
                    </table>

                    <!-- <v-text-field  v-model="createRowName" label="Name"></v-text-field> -->
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- create qas row dialog -->

        <v-dialog v-model="createQasRowInputDialog" persistent fullscreen>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="createQasRowInputDialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>

                <v-card-title>
                    <span class="text-h5">Create New Row</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        hint="Avoid White space and Enter small letter"
                        v-model="rowName"
                        label="Name"
                    ></v-text-field>
                    <div style="text-align:center;margin:10px 0">
                        <v-btn @click="insertRow" color="primary">sumbit</v-btn>
                    </div>
                    <div style="    display: flex;
    justify-content: space-around;
    margin: 5px 39px;
    border-radius: 15px;
    border: 1px solid black;
    padding: 11px;">
                        <v-text-field
                            label="Key"
                            dense
                            style="margin:2px"
                            v-model="postfix.key"
                        ></v-text-field>
                        <v-text-field
                            label="Value"
                            dense
                            style="margin:2px"
                            v-model="postfix.value"
                        ></v-text-field>
                        <v-btn
                            style="margin:2px"
                            @click="createPostfix"
                            color="primary"
                            >Submit</v-btn
                        >
                    </div>
                    <h3 style="padding: 20px 0;">Create Row For Below Colums</h3>
                    <table style="width:100%;border-collapse:collapse">
                        <tr
                            v-for="(value,
                            key,
                            index) in insertForm.postfix_observation_print_view_format"
                            :key="index + 'postfix'"
                        >
                            <td style="padding:10px;border:1px solid black">
                                <v-icon @click="removePostfix(key)"
                                    >fa-trash</v-icon
                                >
                            </td>
                            <td style="padding:10px;border:1px solid black">
                                {{ key }}
                            </td>
                            <td style="padding:10px;border:1px solid black">
                                <div
                                    style="display:flex"
                                    v-if="!['no', 'desc'].includes(key)"
                                >
                                    <div style="display:flex;justify-content:space-between">
                                        {{ rowName
                                        }}{{
                                            insertForm
                                                .postfix_observation_print_view_format[
                                                key
                                            ]
                                        }}</div
                                    >
                                    <div>
                                    <v-text-field
                                        dense
                                        label="mask"
                                        v-model="
                                            insertForm
                                                .postfix_observation_print_view_format[
                                                key
                                            ]
                                        "
                                    ></v-text-field>
                                    </div>
                                </div>
                                <div v-else>
{{ rowName }}                                    Pre Configured key 
                                </div>
                                <!-- {{insertForm.postfix_observation_print_view_format[key]}} -->
                            </td>
                        </tr>
                    </table>

                    <h3 style="padding: 20px 0;">Table Order(REMOVE OR REORDER)</h3>
                    <table
                        style="border:1px solid black;width:100%;border-collapse: collapse;margin:10px 0"
                    >
                        <draggable
                            :list="insertForm.table_header_format"
                            style="
                     margin-top:10px "
                            tag="tr"
                            ghost-class="ghost"
                            group="product"
                            @start="dragging = true"
                            @end="dragging = false"
                        >
                            <td
                                style="margin-right:10px;padding:5px;border:1px solid black"
                                v-for="(item,
                                index) in insertForm.table_header_format"
                                :key="'table_header' + index"
                            >
                                {{ item }}&nbsp;
                                <v-icon @click="removeTableHeader(index)"
                                    >fa-trash</v-icon
                                >
                            </td>
                        </draggable>
                    </table>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- qas form input config  dialog-->
<v-dialog v-model="qas2EdiableDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Input Config</span>
                </v-card-title>
                <v-card-text>
                    <div v-if="qas2EditableIndex != -1">
                        <!-- {{insertForm.observation2_format[qas2EditableIndex]}} -->
                        <v-icon
                            @click="
                                editFieldSetting2(qas2EditableIndex, 'editable')
                            "
                            :class="{
                                redColor:
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].editable
                            }"
                            style="margin:2px"
                            >mdi-account-edit</v-icon
                        >
                        <v-icon
                            @click="editFieldSetting2(qas2EditableIndex, 'merge')"
                            :class="{
                                redColor: isKeyExist2(qas2EditableIndex, 'merge')
                            }"
                            style="margin:2px"
                            >mdi-table-merge-cells</v-icon
                        >
                        <v-icon
                            @click="
                                editFieldSetting2(qas2EditableIndex, 'sapHeader')
                            "
                            :class="{
                                redColor: isKeyExist2(
                                    qas2EditableIndex,
                                    'sapHeader'
                                )
                            }"
                            style="margin:2px"
                            >mdi-magnify-scan</v-icon
                        >
                        <v-icon
                            @click="editFieldSetting2(qas2EditableIndex, 'exp')"
                            :class="{
                                redColor: isKeyExist2(qas2EditableIndex, 'exp')
                            }"
                            >fa-calculator</v-icon
                        >

                        <div>
                            <b
                                >Label:{{
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].label
                                }}</b
                            ><br />
                            <b
                                >Name:{{
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].name
                                }}</b
                            ><br />
                            <b
                                >Default :{{
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].default
                                }}</b
                            >
                        </div>

                        <div
                            v-if="
                                !insertForm.observation2_format[qas2EditableIndex]
                                    .default
                            "
                        >
                            <v-text-field
                                label="Label"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].label
                                "
                            ></v-text-field>
                            <v-text-field
                                label="Name"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].name
                                "
                            ></v-text-field>
                        </div>

                        <div v-if="isKeyExist2(qas2EditableIndex, 'sapHeader')">
                            <v-text-field
                                label="SAP Map"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].sapHeader
                                "
                            ></v-text-field>
                        </div>

                        <div v-if="isKeyExist2(qas2EditableIndex, 'merge')">
                            <label for="">For Merge Cell</label>
                            <v-text-field
                                label="ColSpan"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].merge.colspan
                                "
                            ></v-text-field>
                            <v-text-field
                                label="RowSpan"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].merge.rowspan
                                "
                            ></v-text-field>
                        </div>
                        <div v-if="isKeyExist2(qas2EditableIndex, 'exp')">
                            <v-textarea
                                label="Write Rule"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].exp.rule
                                "
                            >
                            </v-textarea>

                            <v-text-field
                                label="Success"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].exp.success
                                "
                            >
                            </v-text-field>
                            <v-text-field
                                label="Failure"
                                v-model="
                                    insertForm.observation2_format[
                                        qas2EditableIndex
                                    ].exp.failure
                                "
                            >
                            </v-text-field>

                            Note:<br />
                            {{
                                insertForm.observation2_format[qas2EditableIndex]
                                    .exp.note
                            }}
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="qas2EdiableDialog = false"
                    >
                        Close
                    </v-btn>
                    <!-- <v-btn
            color="blue darken-1"
            text
            @click="qas2EdiableDialog = false"
          >
            Save
          </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!-- qas form input config  dialog-->
        <v-dialog v-model="qasEdiableDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Input Config</span>
                </v-card-title>
                <v-card-text>
                    <div v-if="qasEditableIndex != -1">
                        <!-- {{insertForm.observation_format[qasEditableIndex]}} -->
                        <v-icon
                            @click="
                                editFieldSetting(qasEditableIndex, 'editable')
                            "
                            :class="{
                                redColor:
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].editable
                            }"
                            style="margin:2px"
                            >mdi-account-edit</v-icon
                        >
                        <v-icon
                            @click="editFieldSetting(qasEditableIndex, 'merge')"
                            :class="{
                                redColor: isKeyExist(qasEditableIndex, 'merge')
                            }"
                            style="margin:2px"
                            >mdi-table-merge-cells</v-icon
                        >
                        <v-icon
                            @click="
                                editFieldSetting(qasEditableIndex, 'sapHeader')
                            "
                            :class="{
                                redColor: isKeyExist(
                                    qasEditableIndex,
                                    'sapHeader'
                                )
                            }"
                            style="margin:2px"
                            >mdi-magnify-scan</v-icon
                        >
                        <v-icon
                            @click="editFieldSetting(qasEditableIndex, 'exp')"
                            :class="{
                                redColor: isKeyExist(qasEditableIndex, 'exp')
                            }"
                            >fa-calculator</v-icon
                        >

                        <div>
                            <b
                                >Label:{{
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].label
                                }}</b
                            ><br />
                            <b
                                >Name:{{
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].name
                                }}</b
                            ><br />
                            <b
                                >Default :{{
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].default
                                }}</b
                            >
                        </div>

                        <div
                            v-if="
                                !insertForm.observation_format[qasEditableIndex]
                                    .default
                            "
                        >
                            <v-text-field
                                label="Label"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].label
                                "
                            ></v-text-field>
                            <v-text-field
                                label="Name"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].name
                                "
                            ></v-text-field>
                        </div>

                        <div v-if="isKeyExist(qasEditableIndex, 'sapHeader')">
                            <v-text-field
                                label="SAP Map"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].sapHeader
                                "
                            ></v-text-field>
                        </div>

                        <div v-if="isKeyExist(qasEditableIndex, 'merge')">
                            <label for="">For Merge Cell</label>
                            <v-text-field
                                label="ColSpan"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].merge.colspan
                                "
                            ></v-text-field>
                            <v-text-field
                                label="RowSpan"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].merge.rowspan
                                "
                            ></v-text-field>
                        </div>
                        <div v-if="isKeyExist(qasEditableIndex, 'exp')">
                            <v-textarea
                                label="Write Rule"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].exp.rule
                                "
                            >
                            </v-textarea>

                            <v-text-field
                                label="Success"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].exp.success
                                "
                            >
                            </v-text-field>
                            <v-text-field
                                label="Failure"
                                v-model="
                                    insertForm.observation_format[
                                        qasEditableIndex
                                    ].exp.failure
                                "
                            >
                            </v-text-field>

                            Note:<br />
                            {{
                                insertForm.observation_format[qasEditableIndex]
                                    .exp.note
                            }}
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="qasEdiableDialog = false"
                    >
                        Close
                    </v-btn>
                    <!-- <v-btn
            color="blue darken-1"
            text
            @click="qasEdiableDialog = false"
          >
            Save
          </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!-- ^^^^^^^^^^^^^^^^^^^^^^^^create field setting dialog^^^^^^^^^^^^^^^^^^^^ -->
        <v-dialog
            v-model="createFieldSettingDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="createFieldSettingDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <div
                        style="display:flex;justify-content:flex-end;padding:5px;"
                    >
                        <v-icon @click="validationHelpDialog = true"
                            >fa-question-circle</v-icon
                        >
                    </div>

                    <input
                        class="interInput"
                        v-model="createField.label"
                        type="text"
                        placeholder="Label"
                    />
                    <input
                        class="interInput"
                        v-model="createField.name"
                        type="text"
                        placeholder="Name"
                    />

                    <v-checkbox
                        v-model="createField.show"
                        :label="'Show (Quality assurance)'"
                    ></v-checkbox>

                    <v-checkbox
                        v-model="createField.disable"
                        :label="'Disable (Field cannot update)'"
                    ></v-checkbox>

                    <input
                        class="interInput"
                        v-model="createField.headerMap"
                        type="text"
                        placeholder="Header File Map"
                    />

                    <br />
                    <v-checkbox
                        v-model="createField.validation"
                        :label="'Validation'"
                    ></v-checkbox>
                    <br />

                    <v-textarea
                        label="Rules(Must Follow Documentation)"
                        v-if="createField.validation"
                        outlined
                        v-model="createField.rule"
                    ></v-textarea>

                    <!-- <input v-if="createField.validation"  class="interInput" v-model="createField.rule" type="text" placeholder="Rule" > -->

                    <div
                        style="display:flex;justify-content:flex-end;padding:5px"
                    >
                        <v-btn outlined @click="createProductField">Add</v-btn>
                    </div>

                    <!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
                </div>
            </v-card>
        </v-dialog>

        <!-- ^^^^^^^^^^^^^^^^^^^^^^^^field setting dialog^^^^^^^^^^^^^^^^^^^^ -->

        <v-dialog
            v-model="productFieldSettingDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="productFieldSettingDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <!-- <v-btn
              dark
              text
              @click="saveProductsFormat"
            >
              SAVE
            </v-btn> -->
                    </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <div
                        style="display:flex;justify-content:flex-end;padding:5px;"
                    >
                        <v-icon @click="validationHelpDialog = true"
                            >fa-question-circle</v-icon
                        >
                    </div>
                    <div
                        style="background: black;
    color: white;
    padding: 10px;
    border-radius: 9px;"
                    >
                        <b> Name :{{ selectedFieldSetting.name }}</b
                        ><br />
                        <b v-if="selectedFieldSetting.default"
                            >Field is Default</b
                        >
                        <b v-else>Not a Default Field</b>
                    </div>
                    <!-- <v-text-field></v-text-field> -->
                    <!-- {{}} -->
                    <v-checkbox
                        v-model="selectedFieldSetting.show"
                        :label="'Show (Quality assurance)'"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selectedFieldSetting.disable"
                        :label="'Disable (Field cannot update)'"
                    ></v-checkbox>

                    <input
                        class="interInput"
                        v-model="selectedFieldSetting.headerMap"
                        type="text"
                        placeholder="Header File Map"
                    />

                    <br />
                    <v-checkbox
                        v-model="selectedFieldSetting.validation"
                        :label="'Validation'"
                    ></v-checkbox>
                    <br />
                    <v-textarea
                        label="Rules(Must Follow Documentation)"
                        v-if="selectedFieldSetting.validation"
                        outlined
                        v-model="selectedFieldSetting.rule"
                    ></v-textarea>

                    <!-- <input v-if="selectedFieldSetting.validation"  class="interInput" v-model="selectedFieldSetting.rule" type="text" placeholder="Rule" > -->

                    <!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
                </div>
            </v-card>
        </v-dialog>

        <!--*******************USER INSERT******************* -->

        <v-dialog
            v-model="validationHelpDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="validationHelpDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <h4>Help</h4>
                    <br />

                    Rules For Validation<br />
                    <table>
                        <thead>
                            <tr>
                                <th>Operators</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >(...)</code
                                    ><br /><code
                                        class="language-plaintext highlighter-rouge"
                                        >[...]</code
                                    ><br /><code
                                        class="language-plaintext highlighter-rouge"
                                        >{...}</code
                                    >
                                </td>
                                <td>Grouping<br />Matrix<br />Object</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >x(...)</code
                                    ><br /><code
                                        class="language-plaintext highlighter-rouge"
                                        >x[...]</code
                                    ><br /><code
                                        class="language-plaintext highlighter-rouge"
                                        >obj.prop</code
                                    ><br /><code
                                        class="language-plaintext highlighter-rouge"
                                        >:</code
                                    >
                                </td>
                                <td>
                                    Function call<br />Matrix index<br />Property
                                    accessor<br />Key/value separator
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >'</code
                                    >
                                </td>
                                <td>Matrix transpose</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >!</code
                                    >
                                </td>
                                <td>Factorial</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >^</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >.^</code
                                    >
                                </td>
                                <td>Exponentiation</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >+</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >-</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >~</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >not</code
                                    >
                                </td>
                                <td>
                                    Unary plus, unary minus, bitwise not,
                                    logical not
                                </td>
                            </tr>
                            <tr>
                                <td>See section below</td>
                                <td>Implicit multiplication</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >*</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >/</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >.*</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >./</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >%</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >mod</code
                                    >
                                </td>
                                <td>Multiply, divide, percentage, modulus</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >+</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >-</code
                                    >
                                </td>
                                <td>Add, subtract</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >:</code
                                    >
                                </td>
                                <td>Range</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >to</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >in</code
                                    >
                                </td>
                                <td>Unit conversion</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&lt;&lt;</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&gt;&gt;</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&gt;&gt;&gt;</code
                                    >
                                </td>
                                <td>
                                    Bitwise left shift, bitwise right arithmetic
                                    shift, bitwise right logical shift
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >==</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >!=</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&lt;</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&gt;</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&lt;=</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&gt;=</code
                                    >
                                </td>
                                <td>Relational</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >&amp;</code
                                    >
                                </td>
                                <td>Bitwise and</td>
                            </tr>
                            <tr>
                                <td><code>^|</code></td>
                                <td>Bitwise xor</td>
                            </tr>
                            <tr>
                                <td><code>|</code></td>
                                <td>Bitwise or</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >and</code
                                    >
                                </td>
                                <td>Logical and</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >xor</code
                                    >
                                </td>
                                <td>Logical xor</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >or</code
                                    >
                                </td>
                                <td>Logical or</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >?</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >:</code
                                    >
                                </td>
                                <td>Conditional expression</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >=</code
                                    >
                                </td>
                                <td>Assignment</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >,</code
                                    >
                                </td>
                                <td>Parameter and column separator</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >;</code
                                    >
                                </td>
                                <td>Row separator</td>
                            </tr>
                            <tr>
                                <td>
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >\n</code
                                    >,
                                    <code
                                        class="language-plaintext highlighter-rouge"
                                        >;</code
                                    >
                                </td>
                                <td>Statement separators</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </v-card>
        </v-dialog>

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
                    <v-btn
                        outlined
                        @click="createFieldSettingDialog = true"
                        style="margin-right:15px"
                        >Create Field</v-btn
                    >
                    <!-- <v-btn outlined @click="preFields">Pre Fields</v-btn> -->
                </div>

                <div
                    style="padding:10px;height: 85vh;
    overflow: scroll;"
                >
                    <draggable
                        :list="insertForm.observation_format"
                        handle=".handle"
                        style="
                     margin-top:10px "
                        ghost-class="ghost"
                        group="product"
                        @start="dragging = true"
                        @end="dragging = false"
                    >
                        <div
                            style="display:flex;"
                            v-for="(productFormat,
                            index) in insertForm.observation_format"
                            :key="'product' + index"
                        >
                        {{index+1}}
                            <v-icon style="margin:0 5px" class="handle"
                                >fa-arrows-alt</v-icon
                            >
                            <input
                                class="interInput"
                                v-model="productFormat.label"
                                type="text"
                                placeholder="Label"
                            />
                            <input
                                class="interInput"
                                v-model="productFormat.name"
                                type="text"
                                placeholder="Name"
                            />
                            <v-icon
                                @click="removeConfig(productFormat, index)"
                                style="margin:0 5px"
                                >fa-times</v-icon
                            >
                        </div>
                    </draggable>

                    <!-- <div style="margin-top:10px;" v-for="(productFormat,index) in $store.state.productsFormat" :key="index+'index'">
    <div style="display:flex">
        <v-icon>fa-arrows</v-icon>
    <input class="interInput" v-model="productFormat.label" type="text" placeholder="Label" >
<input class="interInput" v-model="productFormat.name" type="text" placeholder="Name" >
        <v-icon>fa-times</v-icon>
    </div>

</div> -->
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
/*eslint-disable*/
import * as core from "../lib/core.js";
import state from "../store/state";
import moment from "moment";
var create_field = {
    label: "", //input field label
    name: "", //column name
    value: "", //default value
    show: false,
    disable: false,

    headerMap: "", //map name from header file put into,
    validation: false,
    rule: "",
    default: false,
    note: ""
};
function initialState($vm) {
    return {
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
        delay: 1600,
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
        productFieldSettingDialog: false,
        selectedFieldSetting: create_field,
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

    computed: {
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
    async mounted() {
        var $vm = this;
        // isStateForUpdate:false,

        var result = await $vm.$store.dispatch("getProductConfig");
        $vm.insertForm.observation_format = result;
        //default print view format
        if ($vm.insertForm.observation_print_view.length == 0) {
            $vm.insertForm.observation_print_view =
                _.cloneDeep($vm.$store.state.interplex.observation_print_view_format);
        }
        if ($vm.insertForm.observation2_print_view.length == 0) {
            // $vm.insertForm.observation2_print_view =
            //     _.cloneDeep($vm.$store.state.interplex.observation2_print_view_format);
            $vm.$set($vm.insertForm,'observation2_print_view',_.cloneDeep($vm.$store.state.interplex.observation2_print_view_format))

}
            $vm.$set($vm.insertForm,'observation2_format',_.cloneDeep($vm.$store.state.interplex.configProductsFormat2))

        // $vm.insertForm.observation2_format =
            // _.cloneDeep($vm.$store.state.interplex.configProductsFormat2);
                    // console.log("product config format2",$vm.$store.state.interplex.configProductsFormat2)

        // $vm.insertForm.observation_format =
        //     _.cloneDeep($vm.$store.state.interplex.configProductsFormat);
        if (_.isEmpty($vm.insertForm.postfix_observation_print_view_format)) {
            $vm.insertForm.postfix_observation_print_view_format =
                _.cloneDeep($vm.$store.state.map.postfix_observation_print_view_format);
        }
        if (_.isEmpty($vm.insertForm.observation_header_print_view)) {
            $vm.insertForm.observation_header_print_view =
                _.cloneDeep($vm.$store.state.interplex.observation_header_print_view_format);
        }

        if (_.isEmpty($vm.insertForm.observation2_header_print_view)) {
            // $vm.insertForm.observation2_header_print_view =
            //     _.cloneDeep($vm.$store.state.interplex.observation2_header_print_view_format);
       $vm.$set($vm.insertForm,'observation2_header_print_view',_.cloneDeep($vm.$store.state.interplex.observation2_header_print_view_format))
       console.log("observation2_header_print_view",_.cloneDeep($vm.$store.state.interplex.observation2_header_print_view_format))
        }

        
   console.log("inserform1:",$vm.insertForm)

        var params = this.$route.params;
        if (Object.prototype.hasOwnProperty.call(params, "item")) {
            console.log("check ");
            console.log(params.item);
            ($vm.isStateForUpdate = true),
                $vm.$set($vm, "insertForm", params.item);
            // $vm.insertForm=Object.assign($vm.insertForm,params.item)
            // $vm.$set($vm,'productsFormat',params.item.observation_format)
            // $vm.insertForm.observation_format=params.item.observation_format
        }
   console.log("inserform:2",$vm.insertForm)
   },
    methods: {
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
            if (action == "sapHeader") {
                if (
                    _.has($vm.insertForm.observation_format[index], "sapHeader")
                )
                    $vm.$delete(
                        $vm.insertForm.observation_format[index],
                        "sapHeader"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation_format[index],
                        "sapHeader",
                        ""
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
            if (action == "sapHeader") {
                if (
                    _.has($vm.insertForm.observation2_format[index], "sapHeader")
                )
                    $vm.$delete(
                        $vm.insertForm.observation2_format[index],
                        "sapHeader"
                    );
                else
                    $vm.$set(
                        $vm.insertForm.observation2_format[index],
                        "sapHeader",
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
            }, 50);

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
                //  $vm.insertForm.observation_format.splice(index,1)
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
        removeTable2(index, key) {
            var $vm = this;
            console.log("remove=>", index, key);
            $vm.$confirm("Do You Want To Delete?").then(() => {
                // $vm.$delete($vm.insertForm.observation2_print_view[index], key);

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

if(_.findIndex($vm.insertForm.observation_format,(x)=>x.name==field.name)!=-1)
    $vm.insertForm.observation_format.push(field);

        },
        insertRow() {
            var $vm = this;
            var map = {};
            var postfix = this.insertForm.postfix_observation_print_view_format;

            //******************** 1.create observation format****************
            var rows = [];
            //create fields produt config format
            _.forEach(postfix, (value, key) => {
                //create input format
                var obj = _.cloneDeep($vm.$store.state.map.productConfig);
                obj["name"] = $vm.rowName + value;
                map[key] = obj.name;
                rows.push(obj);
            });

this.validate_observation_format(...rows)
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
            this.$store.commit("addProductsFormat", this.createField);
          this.validate_observation_format(this.createField)
        //   this.insertForm.observation_format.push(this.createField);
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
    // watch:{
    //     productsFormat(){

    //         this.$store.commit("updateProductsFormat",this.productsFormat)
    //     }
    // }
};
</script>
<style lang="scss">
@import url("../assets/interplex.scss");

.observationTable {
    width: 100%;
    border-collapse: collapse;
}
.observationTable td {
    border: 1px solid black;
    padding: 5px;
}
.redColor {
    color: red !important;
}
</style>
