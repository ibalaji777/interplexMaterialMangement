<template>
    <div>
        <!-- <pre>{{$store.state.interplex.configQasForm2Format}}</pre> -->
        <div style="display:flex">
            <div
                @click="headerFileDialog = true"
                class="insertProduct"
                style="margin-right:10px"
            >
                <v-icon>fa-file</v-icon>
            </div>

            <!-- <div @click="addProduct" class="insertProduct">
<v-icon>fa-plus</v-icon>
</div> -->
        </div>
        <h3
            style="background:#3b4679;
    color: white;
    padding: 5px;
    margin-top: 17px;
    text-align: center;"
        >
            Invoice with Products
        </h3>
        
            <div>
                                <div v-if="getQualityAssuranceFormOne.length==0" style="text-align:center">
                <img style="width:58vw" src="search3.gif" alt="">
                </div>

            </div>

        <div v-if="getQualityAssuranceFormOne.length!=0" class="productContainer">
            
            <div
                :class="{ skiplevel: item.skiplevel_status }"
                v-for="(item, index) in getQualityAssuranceFormOne"
                @click="
                    selectedPartNoItem(item, index);
                    $router.push({ name: 'operatorQsReport' });
                "
                class="productItems"
                :key="index + 'qsform2'"
            >
                <!-- NAME:  {{item['Vendor Name']}}<br>
   DATE: {{item["LAST_GR_DATE_EXT"]}}<br>
   Part NO: {{item["OLMAT"]}}<br>
   Weight:{{item.invoiceQty}}<br> -->
                <!-- <v-text-field v-model="item['Vendor Name']"></v-text-field> -->
                <!-- Invoice No:<br>
   Grn NO:<br> -->
                NAME: {{ item["supplier_name"] }}<br />
                DATE: {{ item["date"] }}<br />
                Part No: {{ item["rmcode"] }}<br />
                TOTAL BATCH NOS:{{ item.products.length }}
                <br />
                Weight:{{ item.invoiceQty }}<br />
                Invoice No:{{ item.invoice_no }}<br />
                Grn Date:{{ item.grn_date }}<br />
                SkipLevel:{{ item.sk_order }}<br />
            </div>
            <!-- <div class="productItems">
Items
</div>
<div class="productItems">
Items
</div> -->
        </div>
        <!-- <div class="otherContainer">
<div class="insertProduct" style="position:relative" @click="galleryDialog=true">
<v-icon>fa-image</v-icon>
<div v-if="takePhoto.length!=0" style="position: absolute;
    top: -7px;
    right: -7px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    color: antiquewhite;
    font-size: 15px;
">{{takePhoto.length}}

</div>
</div>
</div> -->

        <!-- <div>

    <v-textarea outlined label="remarks" style="margin-top:10px">

    </v-textarea>
</div> -->

        <div
            style="margin-top:15px;display:flex;align-items:flex-end;justify-content:flex-end"
        >
            <div
                style="position: absolute;
    bottom: 25px;
"
                outlined
            >
                <v-btn
                class="interBtn"
                    @click="clear"
                >
                    Clear
                </v-btn>
                <v-btn
                    @click="submit"
                                    class="interBtn"

                >
                    Submit To Approval
                </v-btn>
            </div>
        </div>


        <v-dialog
            v-model="fileDialog"
            fullscreen
            hide-overlay
            persistent
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title>Edit Files</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="fileDialog = false">
                            Close
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <div style="padding:10px">

<h4>Edit By Files </h4>
<div  v-for="(key,index) in Object.keys(totalImportedFiles)" :key="'file'+index">
<!-- {{key}} -->


<v-card :class="{bgBlue:key==selectImportedFile,duplicate:importStepOneDuplicatesFiles.includes(key)}" @click="selectImportedFile=key" style="padding:10px;margin:5px;display:flex;justify-content:space-between">
{{index}}<span>    {{totalImportedFiles[key][0].supplier_name}}</span>
    
    <v-icon @click="removeDuplicate(index,key)">fa-trash</v-icon>
    </v-card>


</div>

<div v-if="selectImportedFile!=''" style="padding:10px">
<div class="inputFields" >

<div style="display:flex;">
<v-text-field
dense

v-model="importUpdateFields.product_name"
label="Product Name"
>
</v-text-field>
<v-btn @click="importBulkEdit('product_name')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>
<div style="display:flex">

<v-text-field
dense
v-model="importUpdateFields.invoice_no"
label="Invoice No"
>
</v-text-field>
<v-btn @click="importBulkEdit('invoice_no')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">
<date-picker  @close="invoice_dateDialog = false"
             v-if="invoice_dateDialog"
             v-model="importUpdateFields.invoice_date"
             :format="formatDate"
             ></date-picker>

<v-text-field @click="invoice_dateDialog=true"
dense
v-model="importUpdateFields.invoice_date"
label="Invoice Date"
>
</v-text-field>
<v-btn @click="importBulkEdit('invoice_date')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<v-text-field
dense
v-model="importUpdateFields.grn_no"
label="Grn NO"
>
</v-text-field>
<v-btn @click="importBulkEdit('grn_no')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<date-picker  @close="grnDateDialog = false"
             v-if="grnDateDialog"
             v-model="importUpdateFields.grn_date"
             :format="formatDate"
             ></date-picker>
<v-text-field
dense
@click="grnDateDialog=true"
v-model="importUpdateFields.grn_date"
label="Grn Date"
>
</v-text-field>
<v-btn @click="importBulkEdit('grn_date')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<v-text-field
dense
v-model="importUpdateFields.rmcode"
label="Rm Code"
>
</v-text-field>
<v-btn @click="importBulkEdit('rmcode')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<v-text-field
dense
v-model="importUpdateFields.eds"
label="Eds"
>
</v-text-field>
<v-btn @click="importBulkEdit('eds')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<v-text-field
dense
v-model="importUpdateFields.rm"
label="Rm"
>
</v-text-field>
<v-btn @click="importBulkEdit('rm')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>

<div style="display:flex">

<date-picker  @close="currentDateDialog = false"
             v-if="currentDateDialog"
             v-model="importUpdateFields.date"
             :format="formatDate"
             ></date-picker>
<v-text-field
@click="currentDateDialog=true"

dense
v-model="importUpdateFields.date"
label="Date"
>
</v-text-field>
<v-btn @click="importBulkEdit('date')" style="margin-left:5px" small fab color="primary">Ok</v-btn>
</div>


</div>    

<div>

    Total Selected Items:{{importFileListUpdate.length}}
</div>

<div v-for="(item,index) in importFileListUpdate" :key="'checkimport'+index">

<v-card  @click="item.selected=!item.selected" :class="{bgSelected:item.selected}" style="padding:10px;margin:5px">
Product Name:    {{item.product_name}}<br>
Supplier Name:    {{item.supplier_name}}<br>
Batch No:    {{item.batch_no}}<br>
Part No:    {{item.rmcode}}<br>
Invoice No:    {{item.invoice_no}}<br>
Invoice Date:    {{item.invoice_date}}<br>
Grn No:    {{item.grn_no}}<br>
Grn Date:    {{item.grn_date}}<br>
Eds:    {{item.eds}}<br>
Rm:    {{item.rm}}<br>
Date:    {{item.date}}<br>

selected:{{item.selected}}
</v-card>
</div>
</div>




                </div>
            </v-card>
        </v-dialog>


        <!-- --------------------------product insert dialog------------------- -->
        <v-dialog
            v-model="productInsertDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title>Add Product</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="productInsertDialog = false">
                            Close
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <div style="padding:10px">
                    <div class="inputContainer">
                        <input
                            class="interInput"
                            type="text"
                            placeholder="Search Product"
                            style="margin-top:10px;"
                        />
                    </div>

                    <div class="inputContainer">
                        How Many Product Do You Want to Add?<br />

                        <input
                            class="interInput"
                            type="text"
                            placeholder="Example (5 Product)"
                            style="margin-top:10px;"
                        />
                    </div>

                    <br />
                    <div
                        style="display:flex;align-items:flex-end;justify-content:flex-end"
                    >
                        <v-btn color="primary" outlined>
                            Submit
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-dialog>
        <!-- <v-dialog
      v-model="headerFileDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          :color="$store.state.bgColor"
        >
          <v-toolbar-title>Header File</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="headerFileDialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
       <div style="padding:10px">
        <div class="inputContainer">
<input class="interInput" type="text" placeholder="Search Product" style="margin-top:10px;">
</div>

        <div class="inputContainer">
            How Many Product Do You  Want to Add?<br>

<input class="interInput" type="text" placeholder="Example (5 Product)" style="margin-top:10px;">
</div>

<br>
<div style="display:flex;align-items:flex-end;justify-content:flex-end">
<v-btn color="primary" outlined>
    Submit 
</v-btn>
</div>
</div>
      </v-card>
    </v-dialog> -->

        <!-- *********************Gallery************************ -->
        <v-dialog
            v-model="galleryDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title>Gallery</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="galleryDialog = false">
                            Close
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <div style="padding:10px">
                    <div @click="takePicture" class="insertProduct">
                        <v-icon>fa-camera</v-icon>
                    </div>
                    <br />
                    <div
                        style="border:1px solid black;background:beige;padding:5px"
                    >
                        Total Capture:{{ takePhoto.length }}
                    </div>
                    <div class="productContainer">
                        <!-- {{takePhoto}} -->
                        <div
                            v-for="(image, index) in takePhoto"
                            :key="index + image"
                            class="productItems"
                            style="    display: flex;
    justify-content: space-between;"
                        >
                            <img
                                :src="image.src"
                                alt=""
                                style="max-width:100px;max-height:100px"
                            />
                            <div style="display:flex;align-items:center;">
                                <span
                                    v-if="image.file_type == ''"
                                    @click="selectGalleryType(index)"
                                    style="width: 40px;
    height: 40px;
    border: 1px dashed #ffeb3b;
    display: flex;
    justify-content: center;
    align-items: center;"
                                >
                                    +
                                </span>
                                <span
                                    style="
    padding: 10px 5px;"
                                    v-else
                                    @click="selectGalleryType(index)"
                                >
                                    {{ image.file_type }}
                                </span>
                            </div>
                        </div>
                        <!-- <div class="productItems">
Items
</div>
<div class="productItems">
Items
</div> -->
                    </div>
                </div>
            </v-card>
        </v-dialog>
        <!--*******************file type******************* -->
        <v-dialog
            v-model="fileTypeDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title>Choose File Type</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="fileTypeDialog = false">
                            Close
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <div
                        class="interList"
                        @click="selectGallery(item)"
                        v-for="(item, index) in fileTypes"
                        :key="'FileType' + index"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </v-card>
        </v-dialog>

        <!--*******************header file******************* -->
        <v-dialog
            v-model="headerFileDialog"
            fullscreen
            persistent
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title>SAP File</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="headerFileDialog = false">
                            Close
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>

                <div
                    style="    
    
      
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;"
                >
                <div v-if="isFileCsv&&checkFilesLength!=0" style="text-align:center">
                <img style="max-width:90px" src="tick.gif" alt="">
                </div>
                <div v-if="!isFileCsv&&checkFilesLength!=0" style="text-align:center">
                <img style="max-width:200px" src="wrong1.gif" alt="">
                </div>
                
               <div v-if="checkFilesLength==0" style="text-align:center">
                <img style="max-width:250px" src="upload.gif" alt="">
                </div>
                    <h3 style="text-align:center;" class="interColor" >
                        CHOOSE SAP FILE
                    </h3>
                    <div
                     
                        style="background:beige;  margin-top: 10px;padding: 10px;display: flex;justify-content:space-between"
                    >
                        <input
                        @change="checkFileBeforeSubmit"
                            type="file"
                            id="docpicker"
                            accept=".dat,.txt,.csv,application/vnd.ms-excel,.xlt,application/vnd.ms-excel,.xla,application/vnd.ms-excel,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xltx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,.xlsm,application/vnd.ms-excel.sheet.macroEnabled.12,.xltm,application/vnd.ms-excel.template.macroEnabled.12,.xlam,application/vnd.ms-excel.addin.macroEnabled.12,.xlsb,application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                            multiple
                        />
                        <v-btn style="color:white" color="rgb(48, 32, 78)" @click="checkDialog = true" >check</v-btn>
                    </div>
 <div style="margin:10px 5px"> Previous  Batches are {{checkHeaderBefore.length}} &nbsp; <v-icon @click="clearCheckedProducts"  style="cursor:pointer">fa-trash</v-icon></div>

                </div>
            </v-card>
        </v-dialog>

        <!-- *********************checkdialog************************ -->
        <v-dialog
            v-model="checkDialogeEdit"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="checkDialogeEdit = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                <h3 style="text-align:center">Edit Sap</h3>

<!-- <div>
selected Products{{selectedCheckHeaderBefore.length}}dd
        <div style="background:orange;padding:10px;width:100%">

<div style="display:flex">
 <v-checkbox
      v-model="checkProduct.isInvoice_no"

    ></v-checkbox>
<v-text-field
            label="Invoice No"
            placeholder="Invoice no"
       v-model="checkProduct.invoice_no"
           
            outlined
            dense
          ></v-text-field>
</div>
<div style="display:flex">

 <v-checkbox
      v-model="checkProduct.isGrn_no"

    ></v-checkbox>
<v-text-field
            label="Grn No"
            placeholder="Grn No"
       v-model="checkProduct.grn_no"
       
            outlined
                        dense
          ></v-text-field>
</div>
<div style="display:flex">

 <v-checkbox
      v-model="checkProduct.isGrn_date"

    ></v-checkbox>
          <v-text-field
            label="Grn Date"
            placeholder="Grn Date"
       v-model="checkProduct.grn_date"
       
                        dense
            outlined
          ></v-text-field>
</div>
<div style="display:flex">

 <v-checkbox
      v-model="checkProduct.isIr"

    ></v-checkbox>
          <v-text-field
            label="Ir"
       v-model="checkProduct.ir"
                        dense
            placeholder="ir"
            outlined
          ></v-text-field>
</div>
<div style="display:flex">
 <v-checkbox
      v-model="checkProduct.isRmcode"

    ></v-checkbox>

          <v-text-field
            label="rmcode"
       v-model="checkProduct.rmcode"
                        dense
            placeholder="rmcode"
            outlined
          ></v-text-field>
</div>
<div style="display:flex">

 <v-checkbox
      v-model="checkProduct.isEds"

    ></v-checkbox>
  <v-text-field
            label="eds"
       v-model="checkProduct.eds"
                        dense
            placeholder="eds"
            outlined
          ></v-text-field>
</div>
 <div style="display:flex">
   <v-checkbox
      v-model="checkProduct.isRm"

    ></v-checkbox>
 
  <v-text-field
            label="rm"
       v-model="checkProduct.rm"
                        dense
            placeholder="rm"
            outlined
          ></v-text-field>
          </div>
          <div style="display:flex">

   <v-checkbox
      v-model="checkProduct.isDate"

    ></v-checkbox>

            <v-text-field
            label="Date"
       v-model="checkProduct.date"
                        dense
            placeholder="date"
            outlined
          ></v-text-field>
          </div>
<div style="display:flex">

   <v-checkbox
      v-model="checkProduct.isWeight"

    ></v-checkbox>
  <v-text-field
        v-model="checkProduct.weight"
            label="weight"
                        dense
            placeholder="weight"
            outlined
          ></v-text-field>
</div>
          <label for="">It Applies all Selected</label>


<br>
       <v-btn>submit</v-btn>
     </div>  
        </div>
         -->
        
        
                    <div
                        class="rowColor"
                        v-for="(item, index) in checkHeaderBefore"
                        :key="index + 'invoice'"
                    >
                        <div style="padding:5px">
                            <div>
                                <span>Vendor Name:</span>
                                <span>{{ item.supplier_name }}</span>
                            </div>

                            <div>
                                <span>Rmcode:</span>
                                <span>{{ item.rmcode }}</span>
                            </div>
                            <div>
                                <span>Batch:</span>
                                <span>{{ item.batch_no }}</span>
                            </div>
                        </div>
                        <!-- Batch:{{item.batch_no}} -->

                        <div style="display:flex">
                            <div class="inputContainer">
                                Invoice No
                                <input
                                    type="text"
                                    style="width:100%"
                                    class="interInput"
                                    v-model="item.invoice_no"
                                />
                            </div>
                            <div class="inputContainer">
                                Invoice Date
                                <input
                                    type="text"
                                    style="width:100%"
                                    class="interInput"
                                    v-model="item.invoice_date"
                                />
                            </div>
                        </div>

                        <div style="display:flex">
                            <div class="inputContainer">
                                Grn No
                                <input
                                    type="text"
                                    style="width:100%"
                                    class="interInput"
                                    v-model="item.grn_no"
                                />
                            </div>

                            <div class="inputContainer">
                                Grn Date
                                <input
                                    type="text"
                                    style="width:100%"
                                    class="interInput"
                                    v-model="item.grn_date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-dialog>

        <!-- *********************checkdialog************************ -->
        <v-dialog
            v-model="checkDialog"
            fullscreen
            hide-overlay
            persistent
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="checkDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">

<h3 style="position:relative"> SAP PRODUCTS  (Supplier Name + Part No + Invoice NO) 

    <v-icon style="position:absolute;right:10px" @click="importStepOneHelpDialog=true">fa-question-circle</v-icon>
</h3>

                    <div
                        style="  
background: #555160;
    padding: 0px 17px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    border: 1px solid;
    margin-bottom: 10px;
    padding: 12px;
    border-radius: 13px;"
                    >
                        <!-- <v-checkbox
      v-model="checkAllSelected"
      label="Select"
    ></v-checkbox> -->

                        <div
                            style="display:flex;width:100%"
                        >

                          <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

                                    <v-btn
    v-bind="attrs"
          v-on="on"

                                color="#5d5f83"
                                style="color:white;width:33%;margin:2px;"
                                @click="clearCheckedProducts"
                                >
                                
<v-icon>fa-trash</v-icon>
                                </v-btn
                            >

      </template>
      <span>Clear</span>
    </v-tooltip>
                          <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

                                    <v-btn
    v-bind="attrs"
          v-on="on"

                                color="#5d5f83"
                                style="color:white;width:25%;margin:2px;"
                                @click="checkDialogeEdit = true"
                                >
                                
                                 <v-icon>mdi-pencil</v-icon>
                                </v-btn
                            >

      </template>
      <span>Edit Sap File</span>
    </v-tooltip> -->
                              <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

                            <v-btn
    v-bind="attrs"
          v-on="on"
                            
                                color="#5d5f83"
                                style="color:white;width:33%;margin:2px;"
                                @click="validateProduct(checkHeaderBefore,false)"
                                >
                             <v-icon>mdi-check-all</v-icon>

                                
                                </v-btn
                            >

      </template>
                <span>Check Batch Exist or not</span>

    </v-tooltip>
                              <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

                            <v-btn
    v-bind="attrs"
          v-on="on"
                                color="#5d5f83"
                                style="color:white;width:33%;margin:2px;"
                                @click="qasGroupOneCheckout"
                                >Ok
                            </v-btn>
      </template>
    <span>Prepare Below List if correct</span>


    </v-tooltip>

                                </div>
                    
                        <!-- <v-btn @click="addToQualitFormOne" color="primary">Add</v-btn> -->
                    </div>

<div style="display: flex;
    justify-content: space-around;">
    <!-- {{Object.keys(totalImportedFiles)}} -->
    <b style="cursor:pointer" @click="fileDialog=true">Total Files:{{Object.keys(totalImportedFiles).length}}</b>
        <b style="cursor:pointer" @click="fileDialog=true">Total Rows:{{checkHeaderBefore.length}}</b>
    <b>Total Duplicate Files {{importStepOneDuplicatesFiles.length}}</b>
</div>

                    <div class="checkContainer">
                        <div
                            v-for="(item, index) in checkHeaderBefore"
                            :key="index + 'invoice'"
                        >
                            <div
                                @click="item.selected = !item.selected"
                                :class="{ selectedInvoice: item.selected }"
                                style="
   background: #5d5f83;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;color:white

    font-weight: 700;"
                            >
                                <div
                                    style="display:flex;justify-content:space-between"
                                >
                                    NAME: {{ item["supplier_name"] }}
                                    <v-icon
                                        @click.prevent.stop="
                                            checkHeaderBefore.splice(index, 1)
                                        "
                                        >fa-trash</v-icon
                                    >
                                </div>
                                <br />
                                DATE: {{ item["invoice_date"] }}<br />
                                Part No: {{ item["rmcode"] }}<br />
                                BATCH NO:{{ item.batch_no }}
                                <br />
                                Weight:{{ item.qty }}<br />
                                Invoice No:{{ item["invoice_no"] }}<br />
                                Grn NO:{{ item["grn_no"] }}<br />
<div
                                    style="    display: flex;
"
                                                              >
                               <!-- {{item}}   -->
                                <!-- {{item.isExist}} -->
                                    <div v-if="item.isExist" style="display: flex; justify-content: space-between; width: 100%;">
                                        <div>
                                        Batch No:
                                        </div>
                                        <div>
                                        Exist
                                        </div></div>
                                    <div v-else style="display: flex; justify-content: space-between; width: 100%;">
                                       <div> Batch No:</div><div> Not Exist</div>
                                        
                                        </div>
                                </div>
                                
                                <div
                                    style="    display: flex;
"
                                >

                                    <div v-if="item.isRmcodeExist" style="display: flex; justify-content: space-between; width: 100%;">
                                        <div> Part No:</div>
                                        <div> Exist</div> 
                                        </div>
                                    <div v-else style="display: flex; justify-content: space-between; width: 100%;">
                                        <div> Part No: </div>
                                        <div> Not Exist</div>
                                            </div>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-dialog>

        
        <!-- *********************importsapone help dialog************************ -->
        <v-dialog
            v-model="importStepOneHelpDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="importStepOneHelpDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">

                    <table style="width:100%;border:1px solid black">
                        <tr>
                            <td>
                                <v-icon>fa-trash</v-icon>
                            </td>
                            <td>
                                Clear/Remove
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <v-icon>mdi-check-all</v-icon>
                            </td>
                            <td>
Validate your data Manually
<ol>
    <li>It Check Part No</li>
    <li>It Check Batch NO</li>
    <li>it Check Part No added in Database</li>
    <li>It checks duplicate Files </li>

</ol>
                            </td>
                        </tr>
                        <tr>
                            <td>ok</td>
                            <td>
                                <ol>
                                    <li>
                                        Next step Going to Group and sum of part no  qty
                                    </li>
                                    <li>
                                        Skip Level Checking
                                    </li>
                                    <li>
                                        Mapping 
                                    </li>
                                </ol>
                            </td>
                        </tr>

                    </table>
              
                </div>
            </v-card>
        </v-dialog>


        <!-- *********************checkdialog************************ -->
        <v-dialog
            v-model="checkGroupQasOneDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark :color="$store.state.bgColor">
                    <v-toolbar-title
                        ><v-icon @click="checkGroupQasOneDialog = false"
                            >fa-times</v-icon
                        ></v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items> </v-toolbar-items>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding:10px">
                    <div
                        style="    padding: 0 17px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    /* background: lightgoldenrodyellow; */
    border-radius: 5px;
    margin-bottom: 10px;"
                    >
                        <!-- <v-checkbox
      v-model="checkAllSelected"
      label="Select"
    ></v-checkbox> -->

                        <v-btn
                            @click="addToQualitFormOne"
                            color="rgb(48, 32, 78)"
                            style="width:100%;color:white"
                            >Submit List</v-btn
                        >
                    </div>
                    <div class="checkContainer">
                        <div
                            v-for="(item, index) in qasForm1Group"
                            :key="index + 'invoice'"
                        >
                            <div
                                @click="item.selected = !item.selected"
                                :class="{ selectedInvoice: item.selected }"
                                style=" 
   background: rgb(93, 95, 131);
    padding: 10px;
    color:white;
    border-radius: 10px;
    margin: 10px;

    font-weight: 700;"
                            >
                                NAME: {{ item["supplier_name"] }}<br />
                                DATE: {{ item["date"] }}<br />
                                Part No: {{ item["rmcode"] }}<br />
                                TOTAL BATCH NOS:{{ item.products.length }}
                                <br />
                                Weight:{{ item.invoiceQty }}<br />
                                Invoice No:{{ item.invoice_no }}<br />
                                Grn NO:{{ item.grn_date }}<br />

                                <!-- <div style="    display: flex;
    justify-content: flex-end;">
    <span v-if="item.isExist">Exist</span>
    <span v-else>Not Exist</span>
</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
/*eslint-disable*/
var vm = require('vm');
const detectCsv=require('detect-csv')
var XLSX = require("xlsx");
import * as core from "../lib/core.js";
import { Camera, CameraResultType } from "@capacitor/camera";
import moment from "moment";
import blobUtil, { base64StringToBlob } from "blob-util";
import { v4 as uuidv4 } from "uuid";
import store from './../store/index.js'
function b64toBlob(dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/jpeg" });
}
function base64toBlob(base64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

function initialState($vm) {
    return {
        checkFilesLength:0,
        isFileCsv:false,
        importStepOneHelpDialog:false,
       importStepOneDuplicatesRows:[],
        importStepOneDuplicatesFiles:[],
        invoice_dateDialog:false,
        grnDateDialog:false,
        currentDateDialog:false,
importUpdateFields:{
product_name:'',
// supplier_name:'',
invoice_no:'',
invoice_date:moment().format(store.state.dateFormat),
grn_no:'',
grn_date:moment().format(store.state.dateFormat),
rmcode:'',
eds:'',
rm:'',
form_format:'',
date:moment().format(store.state.dateFormat)
},

fileDialog:false,
selectImportedFile:'',
totalImportedFiles:{},
checkProduct:{
invoice_no:'',
isInvoice_no:true,
grn_no:'',
isGrn_no:true,
grn_date:'',
isGrn_date:false,
ir:'',
isIr:true,
rmcode:'',
isRmcode:true,
eds:'',
isEds:true,
rm:'',
isRm:true,
date:'',
isDate:false,
weight:'',
isWeight:false,
},

        qasForm1Group: [],
        checkGroupQasOneDialog: false,
        invoice: {
            ref: "",
            invoice_client_id: "",
            gallery: [],
            remarks: "",
            operator_id: 0,
            qasForm1Prod: [],
            supplier_name: "", //vendorep
            invoice_no: "",
            invoice_date: moment().format($vm.$store.state.dateFormat),
            invoice_qty: 0,
            ir: "",
            date: moment().format($vm.$store.state.dateFormat),
            grn_no: "",
            grn_date: moment().format($vm.$store.state.dateFormat),
            rmcode: "",
            eds: "",
            rm: "",
            received_qty: 0,
            product_name: "",
            form_format: "",
            duedate: moment().format($vm.$store.state.dateFormat),
            observation_format: [],
            header_format: [],
            remarks: "",
            status: "",
            approved_by: 0,
            //extras map
            batch_no: ""
        },

        checkDialogeEdit: false,
        checkAllSelected: true,
        checkHeaderBefore: [],
        checkDialog: false,
        fileTypeDialog: false,
        selected_gallery: -1,
        fileTypes: [
            {
                name: "Supplier Test"
            },
            {
                name: "Invoice"
            },
            {
                name: "Supplier Traceabilty"
            },
            {
                name: "Grn Copy"
            }
        ],
        takePhoto: [
            // {
            //      src:'',
            //      file_type:''
            // }
        ],
        productInsertDialog: false,
        galleryDialog: false,
        headerFileDialog: false
    };
}

export default {
    data() {
        return initialState(this);
    },
    mounted() {
        var $vm = this;
        // $vm.headerFileUploader()
    },
    computed: {
importFileListUpdate(){
var $vm=this;
if($vm.selectImportedFile=='') return [];
return _.filter($vm.checkHeaderBefore,(x)=>x.fileId==$vm.selectImportedFile)
},


        selectedCheckHeaderBefore(){
var $vm=this
return _.filter($vm.checkHeaderBefore,(x)=>x.selected)
        },
        getQualityAssuranceFormOne: {
            get() {
                var $vm = this;
                var result = $vm.$store.state.interplex.qualityAssuranceFormOne; //core.database(this,'getQualityAssuranceFormOne')
                // console.log("===getQualityAssuranceFormOne===",result)
                return result;
            },
            set(value) {
                console.log(value);
            }
        },
        tempInvoice() {
            var $vm = this;
            var result = $vm.$store.state.interplex.tempInvoice;
            return result;
        }
    },
    methods: {
        clearCheckedProducts(){
            var $vm=this;
$vm.checkHeaderBefore = [];
$vm.totalImportedFiles={};
$vm.importStepOneDuplicatesFiles=[]
        },
        rmCode(x){
      var $vm=this;
    //   console.log("rm",$vm.$store.state.map.sapImport["rmcode"])
    //   console.log(x[$vm.$store.state.map.sapImport["rmcode"]])
if($vm.$store.state.map.sapImport["rmcode"])
{
    var rmcode=x[$vm.$store.state.map.sapImport["rmcode"]]||""
    if(rmcode!='')
    return x[$vm.$store.state.map.sapImport["rmcode"]];
    else{
    if(x["MATTEXT"]!='')
    return (x["MATTEXT"]).toString().substring(0,8);
    }
    return ''
}      

        },
        removeDuplicate(index,key){
var $vm=this;
console.log($vm.importFileListUpdate)
$vm.$confirm("Do You Want To Remove ?")
.then(()=>{
// $vm.totalImportedFiles
$vm.$delete($vm.totalImportedFiles,key)
var indexDuplicate=$vm.importStepOneDuplicatesFiles.indexOf(key)
$vm.importStepOneDuplicatesFiles.splice(indexDuplicate,1)
// var check=_.remove($vm.checkHeaderBefore, (x)=>x.fileId==key)
// console.log(check,check.length,$vm.checkHeaderBefore.length)
var get=_.reduce(_.cloneDeep($vm.checkHeaderBefore),(result,value,keye)=>{
    // console.log(value.fileId,key,value.fileId!=key)
    if(value.fileId!=key)
    {
        result.push(value)
    }
    return result
},[])
// console.log("get",get,key)
$vm.$set($vm,"checkHeaderBefore",get)
})

        },
                formatDate (date) {
  return moment(date).format("YYYY-MM-DD")
},
        importBulkEdit(modelKey){
            var $vm=this;
_.map(_.filter($vm.importFileListUpdate,f=>f.selected),x=>{

    x[modelKey]=$vm.importUpdateFields[modelKey];
    return x;
})

        },
        clear() {
            var $vm = this;
            $vm.$store.commit("defaultValue");
        },
        qasGroupOneCheckout() {
            var $vm = this;
console.log("checkHeaderBefore=>",$vm.checkHeaderBefore)
// var checkPartNoDb=_.reduce($vm.checkHeaderBefore,
// (result,value,key)=>{
// result=result&&value.isRmcodeExist;
// return result;
// },true)

// var checkBatchNoDb=_.reduce($vm.checkHeaderBefore,
// (result,value,key)=>{
// result=result&&value.isExist;
// return result;
// },true)


// var supplierName=_.reduce($vm.checkHeaderBefore,
// (result,value,key)=>{
// result=result&&value.supplier_name!='';
// return result;
// },true)

// var partNo=_.reduce($vm.checkHeaderBefore,
// (result,value,key)=>{
// result=result&&value.rmcode!='';
// return result;
// },true)

// var invoiceNo=_.reduce($vm.checkHeaderBefore,
// (result,value,key)=>{
// result=result&&value.invoice_no!='';
// return result;
// },true)
// if(!checkPartNoDb){

// $vm.$alert("Please Check Part No(Rmcode) in DB")
//     return ;
// }

// if(!checkBatchNoDb){

// $vm.$alert("Batch No already exsit")
//     return ;
// }

// if(!supplierName){

// $vm.$alert("Please Check Supplier")
//     return ;
// }
// if(!invoiceNo){

// $vm.$alert("Please Check Invoice No")
//     return ;
// }
// if(!partNo){

// $vm.$alert("Please Check Part No(RMCODE)")
//     return ;
// }
          //working
var selected=_.filter($vm.checkHeaderBefore,(x)=>x.selected);          
if(selected.length==0){
   
   $vm.$alert("select Atlease One Item")
   return;
}
var checkBatch=false
_.map(selected,(x)=>{
    if(x.isExist){ checkBatch=x.isExist
return;
    }
})
if(checkBatch){
$vm.$alert("Batch No Already Exist")
    return;
}   
  $vm.checkGroupQasOneDialog = true;
                        // x[core.defaultFields.invoiceDate] +

            $vm.qasForm1Group = _.map(
                core.headerFileGroup(selected),
                x => {
                    x["selected"] = true;
                    x["ref"] =
                        x[core.defaultFields.supplierName] +
                        // x[core.defaultFields.invoiceDate] +
                        x[core.defaultFields.partNo] +
                        (x[core.defaultFields.invoiceNo] || "");
                    x["isExist"] = false; //validate server side
                    x["supplier_name"] = x[core.defaultFields.supplierName];
                    // if(x['DATE']){
                    //     var str=x['DATE'];
                    //    x['DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
                    //        var str=x['DOMF'];
                    //    x['DOMF_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
                    //        var str=x['LAST_GR_DATE'];
                    //    x['LAST_GR_DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
                    // }


x= vm.runInNewContext($vm.$store.state.interplex.datTwoCode, { product:x });

                    return x;
                }
            );

            console.log("+++qasform1group++++",$vm.qasForm1Group)
        },
        async submit(){
            var $vm=this;
            if($vm.getQualityAssuranceFormOne.length==0){
$vm.$alert("Inspection Product List is Empty")
                return ;
            }
            // core.submit(this)
// await core.submit_new(this)
await core.submit_new_single(this)
$vm.$store.dispatch("approverList")
        },
//         async submit_() {
//             var $vm = this;
//             // console.log("====submit====")
//             // console.log($vm.tempInvoice)
//             var invoices = [];
//             var user_id = $vm.$store.state.interplex.user.id;
//             var invoice_no_validate = true;

//             _.each($vm.tempInvoice, (val, key) => {
//                 var invoice = {};
//                 // console.log( key, val );

//                 const uuid = uuidv4();
//                 const qasForm1Prod = _.cloneDeep(
//                     _.filter(
//                         $vm.getQualityAssuranceFormOne,
//                         product => product.ref == key
//                     )
//                 );

//                 // console.log("qasformone+++",qasForm1Prod)
//                 // // validation
//                 // _.map(qasForm1Prod,(product)=>{
//                 // if(product.invoice_no==''){
//                 //     invoice_no_validate=false
//                 //    return;
//                 //     }

//                 //     })

//                 invoice["qasForm1Prod"] = _.map(qasForm1Prod, x => {
//                     x["invoice_client_id"] = uuid;
//                     return x;
//                 });
//                 //chec
//                 invoice["ref"] = key;
//                 invoice["invoice_client_id"] = uuid;
//                 invoice["gallery"] = _.map(val["gallery"], x => {
//                     x["invoice_client_id"] = uuid;
//                     return x;
//                 });
//                 invoice["remarks"] = val["remarks"];

//                 invoice["operator_id"] =
//                     $vm.$store.state.interplex.user.id || 0;
//                 invoice["qasForm1Prod"] = qasForm1Prod; //_.filter($vm.getQualityAssuranceFormOne,(product)=>(product.ref==key));
//                 invoice["supplier_name"] = "";
//                 invoice["invoice_no"] = "";
//                 invoice["invoice_date"] = moment().format(
//                     $vm.$store.state.dateFormat
//                 );
//                 invoice["invoice_qty"] = 0;
//                 invoice["ir"] = "";
//                 invoice["date"] = moment().format($vm.$store.state.dateFormat);
//                 invoice["grn_no"] = "";
//                 invoice["grn_date"] = moment().format(
//                     $vm.$store.state.dateFormat
//                 );
//                 invoice["rmcode"] = "";
//                 invoice["eds"] = "";
//                 invoice["rm"] = "";
//                 invoice["received_qty"] = 0;
//                 invoice["product_name"] = "";
//                 invoice["form_format"] = "";
//                 invoice["comment"] = "";
//                 invoice["duedate"] = moment().format(
//                     $vm.$store.state.dateFormat
//                 );
//                 invoice["observation_format"] = [];
//                 invoice["header_format"] = [];
//                 // invoice['remarks']='';
//                 invoice["status"] = "pending";
//                 invoice["approved_by"] = 0;

//                 if (qasForm1Prod.length != 0) {
//                     // ***********************************
//                     var headerData = qasForm1Prod[0].headerConfigFormat;
//                     // console.log("++++header++++",headerData)
//                     _.map(headerData, header => {
//                         invoice[header.name] = header.value;
//                     });
//                     // ***********************************

//                     invoice["qasForm1New"] = _.map(qasForm1Prod, product => {
//                         var object = {};

//                         console.log("product", product);
//                         object["batch"] = "";
//                         object["skiplevel_status"] = product.skiplevel_status;
//                         object["sk_index"] = product.sk_index;
//                         object["sk_order"] = product.sk_order;
//                         // object['status']='pending'
//                         object["invoice_client_id"] =
//                             product["invoice_client_id"];
//                         // console.log(product['invoice_client_id'])
//                         _.map(product.headerConfigFormat, header => {
//                             object[header.name] = header.value;
//                         });
//                         object["observation_format"] =
//                             product.productConfigFormat;
//                         object["header_format"] = product.headerConfigFormat;

//                         //some fiels lag
//                         object["qasForm2New"] = _.map(
//                             product.qasForm2,
//                             qasform2 => {
//                                 // qasform2
//                                 qasform2["invoice_client_id"] =
//                                     invoice["invoice_client_id"];
//                                 return qasform2;
//                             }
//                         );

//                         if (product.qasForm2.length != 0) {
//                             object["batch"] = product.qasForm2[0]["batch_no"];
//                         }
//                         //Object.assign(core.dbFormate.qasform2)
//                         //asign default values
//                         // console.log($vm.$store.state.interplex.user)
//                         return { ...object, operator_id: user_id };
//                     });
//                 }

//                 invoices.push(invoice);

//                 // _.map(invoices,(invoice)=>{
//                 // _.map(invoice.qasForm1New,(qasForm1)=>{
//                 // var id=core.randomInteger(1,1000)
//                 // qasForm1['id']=id;
//                 // core.database($vm,'insertQasForm1',qasForm1)
//                 // _.map(invoice.qasForm2New,(qasForm2)=>{
//                 // var id=core.randomInteger(1,1000)
//                 // qasForm2['id']=id;
//                 //     core.database($vm,'insertQasForm2',qasForm2)
//                 // })
//                 // })

//                 // })
//             });

//             // $vm.$store.commit('defaultValue',{})
//             $vm.$alert("Saved");
// //---------------------------------------------------
//             console.log("+++Invoices Gallery+++", invoices);
//             // ----------------

// var new_invoices=_.map(invoices,(invoice)=>{

// invoice.qasForm1New= _.map(invoice.qasForm1New,(qsform1)=>{

// var qasformone=core.setQasHeader(qsform1,qsform1.header_format)
// return qasformone

// })
// return invoice
// })

// console.log(new_invoices)


//             var result = await $vm.$store.dispatch("submitInvoice", new_invoices);
//             var blobInvoices = _.map(new_invoices, invoice => {
//                 invoice["gallery"] = _.map(invoice.gallery, async image => {
//                     var formdata = new FormData();
//                     // image['invoice_client_id']=invoice['invoice_client_id'];
//                     image["invoice_table_id"] = 0;
//                     var invoiceFilter = _.filter(
//                         result,
//                         ob => ob.invoice_client_id == image.invoice_client_id
//                     );
//                     if (invoiceFilter.length != 0)
//                         image["invoice_table_id"] = invoiceFilter[0].id;

//                     // formdata.append('invoice_table_id',image['invoice_table_id'])
//                     formdata.append(
//                         "invoice_table_id",
//                         image["invoice_table_id"]
//                     );
//                     formdata.append(
//                         "invoice_client_id",
//                         image["invoice_client_id"]
//                     );
//                     formdata.append("invoice_no", invoice["invoice_no"]);
//                     formdata.append("file_type", image["file_type"]);

//                     formdata.append(
//                         "file",
//                         base64toBlob(image.src.split(",")[1])
//                     );

//                     await $vm.$store.dispatch("upload", formdata);

//                     // files.push(image)
//                     return image;
//                 });
//                 return invoice;
//             });
//             // -----------------
//             // _.map(blobInvoices,(rt)=>{
//             //  rt['invoice_table_id']=0;
//             // var invoiceFilter=_.filter(result,(ob)=>ob.invoice_client_id==rt.invoice_client_id)
//             // if(invoiceFilter.length!=0)
//             // rt['invoice_table_id']=invoiceFilter[0].id

//             // })

//             // console.log("++++++invoices++++",invoices)
//             $vm.clear();
//         },

        selectedPartNoItem(item, index) {
            var $vm = this;
            console.log("selected item=>",item)
            this.$store.commit("selectedPartNoItem", item);
        },

        async checkBatch() {
            var $vm = this;

            // var res=await _.map($vm.checkHeaderBefore,async (product)=>{

            // product['isExist']=await $vm.$store.dispatch('checkProductBatch',  product['batch_no'])

            // return product;

            // })
            console.log("++++++res+++++",$vm.checkHeaderBefore)
            var res = await $vm.$store.dispatch(
                "checkproductsbatch",
                $vm.checkHeaderBefore
            );
            console.log("++++checkHeaderBefore+++")
console.log(res)
            $vm.checkHeaderBefore = res;
        },
        async addToQualitFormOne() {
            var $vm = this;

            $vm.headerFileDialog = false;
            $vm.checkGroupQasOneDialog = false;

            var checked = _.filter($vm.qasForm1Group, x => x.selected);
            var createInvoice = core.createInvoice(_.cloneDeep(checked));
            //create header
            //create product form
            //create product list
            var main_list = await core.createProductList($vm, checked);
            console.log("++++main product list+++++", main_list);
            //skiplevel check
            // var skiplevel = await core.skiplevel($vm, _.cloneDeep(main_list));

var applySkipLevel=await core.applySkipLevel($vm,main_list)
 console.log(applySkipLevel)
// ---------------------------dbskiplevel-------------------

// var ref={}


// console.log("+++++++++skiplotdb+++++++")
// console.log(skiplotdb)


// ---------------------------dbskiplevel-------------------

// console.log("++skiplevel+++", skiplevel);

            // $vm.$store.commit("addToQualitFormOne", _.cloneDeep(skiplevel));

            $vm.$store.commit("addToQualitFormOne", _.cloneDeep(applySkipLevel));
            $vm.$store.commit("tempInvoice", createInvoice);

            // console.log("Skip level",_.cloneDeep(skiplevel))
            // console.log("Create Invoice ",createInvoice)

            $vm.checkDialog = false;
            $vm.fileTypeDialog = false;
        },

checkFileBeforeSubmit(){
var $vm=this;
if($vm.checkHeaderBefore==0){
    $vm.headerFileUploader()
    return;
}
$vm.$confirm("Do you want to add current batches with previous batch files?")
.then(()=>{
      $vm.headerFileUploader()
})
},
        headerFileUploader() {
            var $vm = this;

           
            var file = document.getElementById("docpicker");
            var f = file.files;//[0]
            $vm.checkFilesLength=f.length
          if(f.length==0){
            $vm.$alert("Please Select atleast single file before check")
            $vm.isFileCsv=false;
            return;
          }
            var filesContent=[]
            Object.keys(f).forEach(i=>{

            // console.log("fff",f)

            if (f) {
                var r = new FileReader();
                r.onload = e => {
             if(!detectCsv(e.target.result))
             {

$vm.$alert("Wrong File Found")
            $vm.isFileCsv=false;
return ;
             }
            $vm.isFileCsv=true;
                    filesContent.push(e.target.result)
                    var contents = $vm.processExcel(e.target.result);
                    //   console.log(contents)
                };
                r.readAsBinaryString(f[i]);
            } else {
                console.log("Failed to load file");
            }
                        })

        },
        processExcel(data) {
            var $vm = this;
            var workbook = XLSX.read(data, {
                type: "binary",
                FS: "|"
            });

            var firstSheet = workbook.SheetNames[0];
            var data = $vm.to_json(workbook);
              console.log("+++sap extract+++")
              console.log(data)
              $vm.importStepOne(data)
      },
      importStepOne(data){
        var $vm=this;
              var fileUid=uuidv4()
 
            var dataMap = _.map(data, x => {
                x["isValidProd"] = false;
                x['fileId']=fileUid;//bulk group edit
                x['rowId']=uuidv4();//row edit
                return x;
            });

            //need to add grn no and invoice no
            var createInvProducts = [];
            var headerFile = _.map(dataMap, x => {
                var product = {};
// console.log("datOneCode",$vm.$store.state.interplex.datOneCode)

                product["selected"] = true;
                product["ref"] =
                    x[$vm.$store.state.defaultField.supplierName] +
                    x[$vm.$store.state.defaultField.invoiceDate] +
                    (x[$vm.$store.state.defaultField.invoiceNo] || "");
                product["isExist"] = false; //validate server side
                product["isRmcodeExist"] = false; //validate server side
                // if(product['DATE']){
                // product['products']=[];
                var str = x["DATE"];
                x["DATE_EXT"] =
                    str.toString().substring(0, 4) +
                    "-" +
                    str.toString().substring(4, 6) +
                    "-" +
                    str.toString().substring(6, 8);
                var str = x["DOMF"];
                product["DOMF_EXT"] =
                    str.toString().substring(0, 4) +
                    "-" +
                    str.toString().substring(4, 6) +
                    "-" +
                    str.toString().substring(6, 8);
                var str = x["LAST_GR_DATE"];
                x["LAST_GR_DATE_EXT"] =
                    str.toString().substring(0, 4) +
                    "-" +
                    str.toString().substring(4, 6) +
                    "-" +
                    str.toString().substring(6, 8);

                product["products"] = [];
              product["supplier_name"] =x[$vm.$store.state.map.sapImport["product_name"]]||"";
                product["supplier_name"] =x[$vm.$store.state.map.sapImport["supplier_name"]]||"";
                    // $vm.$store.state.map.sapImport["supplier_name"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["supplier_name"]]
                    //     : "";
                product["invoice_no"] =x[$vm.$store.state.map.sapImport["invoice_no"]]||''
                    // $vm.$store.state.map.sapImport["invoice_no"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["invoice_no"]]
                    //     : "";
                product["invoice_date"] =x[$vm.$store.state.map.sapImport["invoice_date"]]||moment().format(store.state.dateFormat);
                    // $vm.$store.state.map.sapImport["invoice_date"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["invoice_date"]]
                    //     : "";
                product["qty"] =x[$vm.$store.state.map.sapImport["qty"]]||""
                    // $vm.$store.state.map.sapImport["qty"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["qty"]]
                    //     : "";
                product["invoice_qty"] =x[$vm.$store.state.map.sapImport["invoice_qty"]]||""
                    // $vm.$store.state.map.sapImport["invoice_qty"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["invoice_qty"]]
                    //     : "";
                product["invoice_date"] =x[$vm.$store.state.map.sapImport["invoice_date"]]||moment().format(store.state.dateFormat);
                    // $vm.$store.state.map.sapImport["invoice_date"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["invoice_date"]]
                    //     : moment().format(store.state.dateFormat);
                product["ir"] =x[$vm.$store.state.map.sapImport["ir"]]||""
                    // $vm.$store.state.map.sapImport["ir"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["ir"]]
                    //     : "";
                product["date"] =moment().format(store.state.dateFormat);
                //x[$vm.$store.state.map.sapImport["date"]]||moment().format(store.state.dateFormat);
                    // $vm.$store.state.map.sapImport["date"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["date"]]
                    //     : moment().format(store.state.dateFormat);
                product["grn_no"] =x[$vm.$store.state.map.sapImport["grn_no"]]||""
                    // $vm.$store.state.map.sapImport["grn_no"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["grn_no"]]
                    //     : "";
                product["grn_date"] =x[$vm.$store.state.map.sapImport["grn_date"]]||moment().format(store.state.dateFormat);
                    // $vm.$store.state.map.sapImport["grn_date"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["grn_date"]]
                    //     : moment().format(store.state.dateFormat);
            //  console.log("$vm.rmCode(x)",$vm.rmCode(x))
             product["rmcode"] =$vm.rmCode(x)
                    // $vm.$store.state.map.sapImport["rmcode"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["rmcode"]]
                    //     : "";
                product["eds"] =x[$vm.$store.state.map.sapImport["eds"]]||""
                    // $vm.$store.state.map.sapImport["eds"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["eds"]]
                    //     : "";
                product["rm"] =x[$vm.$store.state.map.sapImport["rm"]]||""
                    // $vm.$store.state.map.sapImport["rm"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["rm"]]
                    //     : "";
                // product['received_qty']=x[$vm.$store.state.map.sapImport['grn_date']]||'';
                // product['product_name']=x[$vm.$store.state.map.sapImport['grn_date']]||'';
                product["form_format"] =x[$vm.$store.state.map.sapImport["form_format"]]||""
                    // $vm.$store.state.map.sapImport["form_format"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["form_format"]]
                    //     : "";

                // product['duedate']=x[$vm.$store.state.map.sapImport['duedate']]||'';
                // product['remarks']=x[$vm.$store.state.map.sapImport['remarks']]||'';
                // product['status']=x[$vm.$store.state.map.sapImport['status']]||'';
                // product['approved_by']=x[$vm.$store.state.map.sapImport['approved_by']]||'';
                product["product_name"] =x[$vm.$store.state.map.sapImport["product_name"]]||""
                    // $vm.$store.state.map.sapImport["product_name"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["product_name"]]
                    //     : "";
                product["batch_no"] =x[$vm.$store.state.map.sapImport["batch_no"]]||""
                    // $vm.$store.state.map.sapImport["batch_no"] != ""
                    //     ? x[$vm.$store.state.map.sapImport["batch_no"]]
                    //     : "";
                // product['sap']=

                // return product;

                // createInvProducts.push(product)
                product = vm.runInNewContext($vm.$store.state.interplex.datOneCode, { product });
                // console.log(product)

                return { ...x, ...product };
            });
            // ----------------------------------------------------
            // var headerFile=
            // _.map(core.headerFileGroup(dataMap),(x)=>{
            // x['selected']=true;
            // x['ref']=x[core.defaultFields.supplierName]+x[core.defaultFields.invoiceDate]+(x[core.defaultFields.invoiceNo]||'');
            // x['isExist']=false;//validate server side
            // if(x['DATE']){
            //     var str=x['DATE'];
            //    x['DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
            //        var str=x['DOMF'];
            //    x['DOMF_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
            //        var str=x['LAST_GR_DATE'];
            //    x['LAST_GR_DATE_EXT']=(str).toString().substring(0,4)+'-'+(str).toString().substring(4,6)+'-'+(str).toString().substring(6,8);
            // }
            // return x;
            // })

            // ----------------------------------------------------
            //   console.log(core.headerFileGroup(data))
            // console.log("++++header file++++",headerFile)
            // $vm.checkHeaderBefore=headerFile||[]
            //  $vm.checkBatch()
                        console.log("++++++single header file+++++",headerFile)

            
$vm.validateProduct(headerFile,true)
  

      },
validateProduct(headerFile,isPush=true){
var $vm=this;
var findDuplicates={}
var duplicates={}

async function checkBatchAndRmcode() {
                var res = await $vm.$store.dispatch(
                    "checkproductsbatch",
                    headerFile
                );
                
if(isPush){
                $vm.checkHeaderBefore.push(...res);
}
else{
                $vm.checkHeaderBefore=res
}
//--------------split files by to make easier edit--------
        $vm.totalImportedFiles=_.groupBy($vm.checkHeaderBefore,'fileId');

                             console.log("++++++multiple header file+++++",                $vm.checkHeaderBefore)
//---------------find duplicates-------------------
_.map($vm.checkHeaderBefore,product=>{
                if(!_.has(findDuplicates,product['batch_no'])){
                    //not duplicate
                    findDuplicates[product['batch_no']]=product['batch_no']
                }else{
                    //found duplicates
duplicates[product.fileId]=product.fileId
                }
                })

            // console.log("duplicates",duplicates,findDuplicates)
$vm.importStepOneDuplicatesFiles=Object.keys(duplicates)

//---------------find duplicates end-------------------
                                // $vm.checkHeaderBefore = res;

            }

            checkBatchAndRmcode();

},
        to_json(workbook) {
            var $vm = this;
            var result = {};
            //   workbook.SheetNames.forEach(function(sheetName) {
            var sheetName = workbook.SheetNames[0];
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {});
            if (roa.length) result[sheetName] = roa;
            var rt = JSON.stringify(roa);
            // console.log("+++|||result|||++++")
            //     console.log(JSON.parse(rt))
            //   });
            return JSON.parse(rt);
        },

        selectGalleryType(index) {
            var $vm = this;
            $vm.fileTypeDialog = true;
            $vm.selected_gallery = index;
        },
        selectGallery(item) {
            var $vm = this;
            var selected_gallery = _.cloneDeep($vm.selected_gallery);
            if ($vm.selected_gallery !== -1) {
                this.takePhoto[selected_gallery].file_type = item.name;
                $vm.selected_gallery = -1;
                $vm.fileTypeDialog = false;
            }
        },
        addProduct() {
            var $vm = this;
            $vm.productInsertDialog = true;
        },
        async takePicture() {
            var $vm = this;
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.DataUrl
            });

            // Here you get the image as result.
            const theActualPicture = image.dataUrl;
            //   console.log(theActualPicture)
            $vm.takePhoto.push({ src: theActualPicture, file_type: "" });
        }
    },
    watch: {
        checkAllSelected() {
            var $vm = this;
            $vm.checkHeaderBefor = _.map($vm.checkHeaderBefor, x => {
                x["selected"] = $vm.checkAllSelected;

                // console.log(x['selected'])
            });
        }
    }
};
</script>
<style>
@import url("../assets/interplex.scss");
.otherContainer {
    margin-top: 10px;
}
.insertProduct {
    border: 1px dashed red;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: beige;
}
/* .productContainer{
    background: grey;
    margin-top: 20px;
    height: 51vh;
    overflow: scroll;
}
.productItems{

    padding: 5px;
    color: white;
    background: darkturquoise;
    margin: 5px;
} */
.skiplevel {
    background: #d22525 !important;
}
.bgBlue{
    background:rgb(48, 32, 78) !important;
    color:white !important;
}
.bgSelected{
background: antiquewhite !important;
}

.inputFields{
display:flex;flex-wrap:wrap
    
}
.inputFields div{
    /* padding:10px;margin:10px; */
    /* width: 33% !important;; */
}
.duplicate{
    background:red !important;
}
</style>
