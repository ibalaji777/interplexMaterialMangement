/*eslint-disable*/
import moment from 'moment'
const state = {
	qasForm1Validation:false,
	qasForm2Validation:false,
	defaultField:{

		partNo:'rmcode',
		supplierName:'supplier_name',
		invoiceDate:'LAST_GR_DATE',
		invoiceDateEXT:'LAST_GR_DATE_EXT',
		invoiceNo:'invoice_no'//correct
		
	  },

	sapLogs:{

	},
 bgColor:'#30204e',
 dateFormat:"YYYY-MM-DD",
 barcodeLabel:{
html:`<div style="position:relative;padding:3px;" class="fs14">
	
<div  style="    color: grey;
position: absolute;
transform: translate(-50%,-50%) rotate(-30deg);
font-size: 12px;
top: 50%;
left: 50%;" >

<div style="text-align:center; text-transform: uppercase;">
{{status}}
</div>

</div>
<div class="fbetween fs14"><span>{{invoice_no}} </span><span> {{batch_no}}<span><span>  {{weight}} KG</span> </div>
<div class="fbetween fs14"><span>{{rmcode}}</span> <span><b>IR:</b>{{ir}}</span>   </div>

<div style="width:100%;padding:0 10px">
<table class="labelTable" style="width:100%">
<tr>
<td>
<span style="font-size:11px">{{branch}} branch</span>
<div class="fbetween fs14"><span><b>Gr No:</b> {{grn_no}}</span><span><b>Gr D:</b> {{grn_no}}</span></div>



</td>
<td >
<div style="display:flex;justify-content:center;align-items:center">
<img id="qr1" src="{{angal_qrcode_op ir 'qr1' '{"width":40,"height":40}'}}"> </td>
</div>
</tr>


</table>
<div  class="fs14 fbetween"><span> Shelf:{{shelf_life}}</span> <span>{{supplier_name}}</span></div>
</div>
</div>`,
css:`.red{color:red}
.labelTable td,
.labelTable th{
font-size:12px;
}
.fs14{
font-size:11px
}
.fbetween{
display:flex;
justify-content:space-between;
}`,
dataset:[{supplier_name:'Abc',invoice_no:'01',ir:'02'}]


 },
 barcode:{
	pageSetup:{

		page:{
			labelSheetSize:'custom',//
			margin_type: 'custom',
			outline: false,
			layout: 'auto',
			labelType: 'Linear', //linear or page
			style_type: 'mm',//-in/mm/px
			labels_per_page: 30,
			iswidth: true,
			width: '80',//-
			isheight: false,
			height: '25',//-
			marginTop: '0',//-
			marginLeft: '0',//-
			marginRight: '0',//-
			marginBottom: '0',//-
			},
			label:{
				text_wrap: false,
				style_type: 'mm',
				width: '80',
				height: '25',
				marginRight: '0',
				marginBottom: '0',
				isEnableLabelOverflow:true,
				
			}

	}

 },
date:{
action:'today',
from_date:moment().format("YYYY-MM-DD"),
to_date:moment().format("YYYY-MM-DD")
},
	control:{
		isNavbarHidden:false
	}
	,

report:{

qasForm1:[
	{
		text:'SUPPLIER NAME',
		value:'supplier_name',
		class:'interplexHeader'

	}	,
	{
		text:'INVOICE NO',
		value:'invoice_no'
		,class:'interplexHeader'

	},	{
		text:'INVOICE DATE',
		value:'invoice_date'
		,class:'interplexHeader'

	},	{
		text:'INVOICE QTY',
		value:'invoice_qty'
		,class:'interplexHeader'

	},	{
		text:'IR No',
		value:'ir'
		,class:'interplexHeader'

	},	{
		text:'GRN NO',
		value:'grn_no'
		,class:'interplexHeader'

	},	{
		text:'GRN DATE',
		value:'grn_date'
		,class:'interplexHeader'

	},	{
		text:'EDS',
		value:'eds'
		,class:'interplexHeader'

	},	{
		text:'RM',
		value:'rm'
		,class:'interplexHeader'


	},	{
		text:'RECEIVED QTY',
		value:'received_qty'
		,class:'interplexHeader'

	},	{
		text:'PRODUCT NAME',
		value:'product_name'
		,class:'interplexHeader'

	}
	,	{
		text:'FORM FORMAT',
		value:'form_format'
		,class:'interplexHeader'

	}
	,	{
		text:'REMARKS',
		value:'remarks'
		,class:'interplexHeader'

	}
	,	{
		text:'STATUS',
		value:'status'
		,class:'interplexHeader'

	}
	,
	// {
	// 	text:'ACCEPTED TYPE',
	// 	value:'roletype'
	// 	,class:'interplexHeader'

	// },
	{
		text:'OPERATOR  NAME',
		value:'operator_name'
		,class:'interplexHeader'

	},
		{
		text:'APPROVED BY',
		value:'approver_name'
		,class:'interplexHeader'

	},

	{
		text:'RM CODE',
		value:'rmcode'
		,class:'interplexHeader'

	},
	
	// {
	// 	text:'Batch',
	// 	value:'batch'
	// 	,class:'interplexHeader'

	// },
	{
		text:'Skiplevel Status',
		value:'skiplevel_status'
		,class:'interplexHeader'

	},
	{
		text:'Skiplevel Order',
		value:'sk_order'
		,class:'interplexHeader'

	},
	{
		text:'ACTION',
		value:'action'
		,class:'interplexHeader'

	},

],

fileType:[
	{
		text:'title',
		value:'title'

	},
	{
		text:'Name',
		value:'name'

	},
	{
		text:'Action',
		value:'action'

	}
],

	masterProducts:[
		{
			text:'# Product Name',
			value:'product_name',
			class:'interplexHeader'
	
		},
		{
			text:'# Supplier',
			value:'supplier_name',
			class:'interplexHeader'
	
		},
		
		{
			text:'# RM Code',
			value:'rmcode',
			class:'interplexHeader'
	
		},
		{
			text:'# EDS',
			value:'eds',
			class:'interplexHeader'
	
		},
		{
			text:'# RM',
			value:'rm',
			class:'interplexHeader'
	
		},
		{
			text:'# Due Date',
			value:'duedate',
			class:'interplexHeader'
	
		},
		{
			text:'# skiplevel',
			value:'skiplevel',
			class:'interplexHeader'
	
		},
		{
			text:'# Form Format',
			value:'form_format',
			class:'interplexHeader'
	
		},
		{
			text:'Action',
			value:'action',
			class:'interplexHeader'
	
		}
	],	
branches:[
	{
		text:'Branch',
		value:'name'

	},
	{
		text:'Description',
		value:'description'

	},
	{
		text:'Action',
		value:'action'

	}
],
users:[
	{
		text:'Name',
		value:'name'
		,
		class:'interplexHeader'

	},
	{
		text:'Branch',
		value:'branch'
		,
		class:'interplexHeader'

	},
	{
		text:'Role',
		value:'roletype'
		,
		class:'interplexHeader'

	},
	{
		text:'Username',
		value:'username'
		,
		class:'interplexHeader'

	},
	{
		text:'Password',
		value:'password',
		class:'interplexHeader'

	},
	{
		text:'E-mail',
		value:'email',
		class:'interplexHeader'

	}
	,
	{
		text:'Phone',
		value:'phone'
		,
		class:'interplexHeader'

	}
	,
	{
		text:'Address',
		value:'address'
		,
		class:'interplexHeader'

	},
	{
		text:'Action',
		value:'action'
		,
		class:'interplexHeader'

	}
]


},




map:{
	
	sapImport:{

		rmcode:'MaterialNo',//'OLMAT',
		supplier_name:'Vendor Name',
		invoice_no:'Deliver Note',
		grn_no:'grn_no',
		grn_date:'LAST_GR_DATE_EXT',
		invoice_date:'DATE_EXT',
		batch_no:'BATCH',
		qty:'QTY',
		date:'DATE_EXT'
	
	
	  },

	  observation_print_view_format:{
		no:'',
		desc:'',
		unit:'',
		min_spec:'',
		max_spec:'',
		sup_min:'',
		sup_max:'',
		ieipl_min:'',
		ieipl_max:'',
		remarks:'',
	
		},
		postfix_observation_print_view_format:{
			no:'',
			desc:'',
			unit:'_unit_org',
			min_spec:'_min_spec_org',
			max_spec:'_max_spec_org',
			sup_min:'_sup_min',
			sup_max:'_sup_max',
			ieipl_min:'_ieipl_min',
			ieipl_max:'_ieipl_max',
			remarks:'_remarks',
	
			
			},
//note it must contain all the fields in interplex.productConfigFormat
productConfig:{
	"label": "",
	"name": "",
	"value": "",
	"default": false,
	"editable": true,
				// label:'',//input field label
				// name:'',//column name
				// value:'',//default value
				// show:true,
				// disable:false,
				// validationStatus:false,
				// headerMap:'',  
				// validation:false,
				// rule:'',colspan:1,
				// default:true,
				// note:'' 
				},
	
	
	
},


interplex:{
// productMapCode
printConfig:{
	html:`


	<div class="pageOne">
	{{#if this.skiplevel_status}} 
	<div  style="    color: grey;
	position: absolute;
	transform: translate(-50%,-50%) rotate(-45deg);
	font-size: 46px;
	top: 50%;
	left: 50%;">
	
	<div style="text-align:center">
	{{qasFormOne.sk_order}}
	
	<br>
	SKIP LEVEL</div>
	</div>
	
	</div>
	{{/if}}
	<div style="border:1px solid black;height:6vh;position: relative;">
	
	<div style="display:flex;height: 100%;width:100%;">
		<div style="display:flex;flex:1;flex-direction: column;">
			<img style="max-width: 120px;
			position: absolute;
			top: -42px;left: 10px;"
			 src="{{logo}}" alt="">
	
	<div style="position: absolute;bottom:5px;font-wight:800"> QUALITY ASSURANCE</div>
		</div>
		<div style="display:flex;flex:1;align-items: center;justify-content: center;font-weight: 800;">INCOMING INSPECTION REPORT</div>
	</div>
	</div>
	
	<table class="invoiceHeader">
	<tr>
		<td><b>SUPPLIER:</b> {{headerFormFill.supplier_name}}</td>
		<td><b>IR# :</b>{{invoice.qasFormOne.ir}}</td>
		<td><b>R/M CODE:</b> {{headerFormFill.rmcode}}</td>
	</tr>
	<tr>
		<td><b>INVOICE/ DC #:</b>{{headerFormFill.invoice_no}}</td>
		<td><b>DATE:</b>{{date}}</td>
		<td><b>EDS/QP#:</b>{{headerFormFill.eds}}</td>
	</tr>
	<tr>
		<td><b>INVOICE/DC DATE:</b>{{headerFormFill.invoice_date}}</td>
		<td><b>GRN NO:</b>{{headerFormFill.grn_no}}</td>
		<td><b>R/M:</b>{{headerFormFill.rm}} </td>
	</tr>
	<tr>
		<td><b>INVOICE QTY:</b>{{headerFormFill.invoice_qty}}</td>
		<td><b>GRN DATE:</b>{{headerFormFill.grn_date}}</td>
		<td><b>RECEIVED QTY:</b>{{headerFormFill.received_qty}}</td>
	</tr>

	<tr>
		<td colspan="3"><b>Material Text:</b>{{headerFormFill.material_text}}</td>
	</tr>

</table>
	
	<!-- <v-btn @click="addObservationFormat">fa-plus</v-btn> -->
	<h5 style="padding:0;margin:2px">OBSERVATION</h5>
	
	
	<table class="observationTable" >
	
	
	{{#each renderQas1Header}}
	<tr>
	{{#each this}}
	
	<th colspan="{{this.merge.colspan}}" rowspan="{{this.merge.rowspan}}" >
	{{
		this.value
	}}
	
	</th>
	{{/each}}
	{{/each}}
	</tr>
	{{#each renderQas1Body}}
	<tr >
	{{#each this}}
	<td colspan="{{this.merge.colspan}}" rowspan="{{this.merge.rowspan}}" >
	{{
		this.value
	}}
	</td>
	{{/each}}
	</tr>
	{{/each}}
	
	</table>
	
	
	<div style="display:flex;position: relative;height:4vh;margin-top:2px">
	
	<div style="position:absolute;top:5px;">
		<b>Comment</b>
	</div>
	<div style="position: absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
	*coil weight is based on moq<br>
	*inspection is done as per sampling plan WI/QA/46
	</div>
	</div>
    	<div><b>Remark:</b>{{remarks}}</div>

	<div style="display: flex;
	justify-content: space-around;">
	<span><b>Accepted</b> 
    {{#angal_if  status '=='  'approved'}}
    <img src="{{tickIcon}}" style="max-width:20px;margin-top:-2px">
    {{/angal_if}} 
    </span>
	<span><b>Accepted on deviation</b>
       {{#angal_if  status '=='  'acceptedOnDeviation'}}
    <img src="{{tickIcon}}" style="max-width:20px;margin-top:-2px">
    {{/angal_if}} 
 
    </span>
	<span><b>Rejected</b></span>
       {{#angal_if  status '=='  'rejected'}}
    <img src="{{tickIcon}}" style="max-width:20px;margin-top:-2px">
    {{/angal_if}} 
 
	<span><b>PPAP</b>
       {{#angal_if  status '=='  'ppap'}}
    <img src="{{tickIcon}}" style="max-width:20px;margin-top:-2px">
    {{/angal_if}} 
 
    </span>
	</div>
	<div>{{form_format}}</div>
	
	<div style="    display: flex;
	justify-content: space-evenly;
	height: 4vh;
	align-items: center;">
	<div><b>Inspected By:</b> <span>
	{{operator_name}}
	</span> </div>
	<div>DEVIATION REQUEST #</div>
	<div><b>Approved By:</b>
	{{approver_name}}
	</div>
	</div>
	</div>
	
	<div class="pageBreak"></div>
	
	<div  class="pageTwo" style="margin:10px 0;min-height:70vh;position:relative">
	
	{{#if this.skiplevel_status}} 
		<div  style="    color: grey;
		position: absolute;
		transform: translate(-50%,-50%) rotate(-45deg);
		font-size: 46px;
		top: 50%;
		left: 50%;" >
		
		<div style="text-align:center">
	{{qasFormOne.sk_order}}
	
	<br>
	SKIP LEVEL</div>
		
		
		</div>
	{{/if}}
		<div style="border:1px solid black;height:10vh;position: relative;">
	
		<div style="display:flex;height: 100%;width:100%;">
			<div style="display:flex;flex:1;flex-direction: column;">
				<img style="    max-width: 145px;
				position: absolute;
				top: -42px;
				left: 10px;
			" src="{{logo}}" alt="">
	
	<div style="position: absolute;bottom:5px;font-wight:800"> QUALITY ASSURANCE</div>
			</div>
			<div style="display:flex;flex:1;align-thiss: center;justify-content: center;font-weight: 800;">INCOMING INSPECTION REPORT</div>
		</div>
	</div>
	
	<table class="qasform2class">
	
	{{#each  renderQas2Header}}
	<tr >
	{{#each this}}
	<th colspan="{{this.merge.colspan}}" rowspan="{{this.merge.rowspan}}" >
	{{#if this.value}}
	<div>
	{{this.value}}
	</div>
	{{else}}
	<div>
	{{
		this.name
	}}
	</div>
	{{/if}}
	</th>
	{{/each}}
	</tr>
	{{/each}}
	
	
	{{#each renderQas2Body}}
	<tr>
	{{#each this}}
	<td>
	<div style="min-height:15px">
	{{this.value}}
	</div>
	</td>
	{{/each}}
	</tr>
	{{/each}}
	
	
	
	
	</table>
	
	</div>
	</div>
	
	
	{{#each gallery}}
	<div class="pageBreak"></div>
	
	<div style="position:relative">
	
	{{#if this.skiplevel_status}} 

<div  style="    color: grey;
	position: absolute;
	transform: translate(-50%,-50%) rotate(-45deg);
	font-size: 46px;
	top: 50%;
	left: 50%;">SkipLevel</div>
	{{/if}}
	
	<img style="max-width:205mm" src="{{this.src}}">
	</div>
	{{/each}}
	
	


	
	
	`,
	css:`  
	.pageBreak{
	
		page-break-after: always;
	}
    
    .qasform2class th{
        font-weight:900;
		border: 1px solid black;
		padding:5px

    }
    .observationTable th{
    font-weight:900;
		border: 1px solid black;
		padding:5px

}
    .observationTable td:nth-child(2){
    font-weight:900;
}

	.invoiceHeader{
	
		width:100%;
		border-collapse: collapse;
		font-size:14px;
	}
	.invoiceHeader  td{
		border: 1px solid black;
		padding:5px
	}
	
	.observationTable{
	
	width:100%;
	border-collapse: collapse;
	font-size: 13px;
	}
	.observationTable  td{
	border: 1px solid black;
	padding:5px
	}
	.qasform2class{
	width:100%;
	border-collapse: collapse;
	}
	.qasform2class th{
	text-align:center
	}
	.qasform2class td,
	.qasform2class th{
	
	border:1px solid black;
	text-align: center;
	}
	.statusCard{
	text-align: center;
	width: 55px;
	height: 55px;
	color: white;
	background: orange;
	font-weight: 700;
	line-height: 3.5;
	vertical-align: middle;
	}
	.statusCard:hover{
	background:rgb(142, 142, 235);
	}`,
	js:''

},
datOneCode:`   function map(product){
	var newField={}
/*mapyour code here*/
newField['test']='work'

/*map your coe here*/

  return {...product,...newField}

  }
 map(product)`,

 datTwoCode:`   function map(product){
	var newField={}
/*map your code here*/
newField['test']='work'

/*map your coe here*/

  return {...product,...newField}

  }
 map(product)`,

	header_form_gui:{
		one:[],
		two:[
			{
				label:'SUPPLIER :',
				name:'supplier_name',
				width:'33'
			},
			{
				label:'IR #:',
				name:'ir',
				width:'33'
			},
			{
				label:'R/M CODE:',
				name:'rmcode',
				width:'33'
			},
			{
				label:'INVOICE/DC #:',
				name:'invoice_no',
				width:'33'
			},
			{
				label:'DATE:',
				name:'date',//need to check
				width:'33'
			},
			{
				label:'EDS /QIP #:',
				name:'eds',
				width:'33'
			},
			{
				label:'INVOICE /DC DATE:',
				name:'invoice_date',
				width:'33'
			},
			{
				label:'GRN NO:',
				name:'grn_no',
				width:'33'
			},
			{
				label:'R/M:',
				name:'rm',
				width:'33'
			},
			{
				label:'INVOICE QTY:',
				name:'invoice_qty',
				width:'33'
			},
			{
				label:'GRN Date:',
				name:'grn_date',
				width:'33'
			},
			{
				label:'RECEIVED QTY:',
				name:'received_qty',
				width:'33'
			},
		]

	},
	qas_form_one_ui:
		{
			one:[
			{
				label:'No',
				name:'no',
				width:'50'
			},
			{
				label:'Description',
				name:'desc',//key of observation format
				width:'50'
			},
			{
				label:'Min',
				name:'min_spec',
				width:'50'
			},
			{
				label:'Max',
				name:'max_spec',
				width:'50'
			}
		],
			two:[
				{
					label:'Sup Min',
					name:'sup_min',
					width:'50'
				},
				{
					label:'Sup Max',
					name:'sup_max',
					width:'50'
				},
				{
					label:'Ieipl Min',
					name:'ieipl_min',
					width:'50'
				},
				{
					label:'Ieipl Max',
					name:'ieipl_max',
					width:'50'
				},
				{
					label:'Remarks',
					name:'remarks',
					width:'100'
				}
			]
		}
	,
	qas_form_two_ui:
		{
			one:[
				
			],
			two:[
				{
					label:'Coil # (Batch No)	',
					name:'batch_no',//key of observation format
					width:'100'
				},
				{
					label:'Sup Coil #(Lot No)',
					name:'lot_no',
					width:'100'
				},
				{
					label:'Weight',
					name:'weight',
					width:'100'
				},
				{
					label:'Width Min',
					name:'width_min',
					width:'50'
				}
,
{
	label:'Width Max',
	name:'width_max',
	width:'50'
},

{
	label:'Thickness Min',
	name:'thick_min',
	width:'50'
}
,
{
label:'Thickeness Max',
name:'thick_max',
width:'50'
}

			]
		}
	,
	masterFileTypes:[],
	
	currentBranch:'',
	currentRoleType:'',
	qasForm1:[],//test
	qasForm2:[],//test
	observation2_header_print_view_format:[
		{
			column:[
				{name:'header_no'},

{name:'header_batch_no'},//coil
{name:'header_weight'},
{name:'header_width'},
{name:'header_thick'},
{name:'header_lot_no'},//sup_coil
	
			]
		}
	],	
	observation_header_print_view_format:[
	{
		column:[
			{
				name:'sl_header'
			},
			{
				name:'spec_req_header'
			},
			{
				name:'act_read_header'
			},
			{
				name:'remarks_header'
			}

		]
	},
	{
		column:[
			{
				name:'desc_header'
			},
			{
				name:'unit_header'
			},
			{
				name:'min_spec_header'
			},
			{
				name:'max_spec_header'
			}
			,
			{
				name:'supplier_header'
			},
			{
				name:'ieipl_header'
			},
		]

	}
	
	
	
		// {
		// 	no1:'sl_header',
		// 	desc:'spec_req_header',
		// 	unit:'act_read_header',
		// 	min_spec:'remarks_header',
		
		// 	},

		// 	{
		// 		no1:'desc_header',
		// 		desc:'unit_header',
		// 		unit:'min_spec_header',
		// 		min_spec:'max_spec_header',
		// 		max_spec:'supplier_header',
		// 		sup_min:'ieipl_header',
				
		// 		},
		
	],
	observation2_print_view_format:[
		
		{
			name:'no'
		},
		{
			name:'batch_no'
		},
		{
			name:'weight'
		},
	
		{
			name:'width_min'
		},
		{
			name:'width_max'
		},
		{
			name:'thick_min'
		},
		{
			name:'thick_max'
		},
		{
			name:'lot_no'
		},

	],
    observation_print_view_format:[
		
		{
		no:'',
		desc:'width',
		unit:'width_unit_org',
		min_spec:'width_min_spec_org',
		max_spec:'width_max_spec_org',
		sup_min:'width_sup_min',
		sup_max:'width_sup_max',
		ieipl_min:'width_ieipl_min',
		ieipl_max:'width_ieipl_max',
		remarks:'width_remarks',
		
		},
		{
		no:'',
		desc:'thickness',
		unit:'thickness_unit_org',
		min_spec:'thickness_min_spec_org',
		max_spec:'thickness_max_spec_org',
		sup_min:'thickness_sup_min',
		sup_max:'thickness_sup_max',
		ieipl_min:'thickness_ieipl_min',
		ieipl_max:'thickness_ieipl_max',
		remarks:'thickness_remarks',
		
		
		},
		{
		no:'',
		desc:'hardness',
		unit:'hardness_unit_org',
		min_spec:'hardness_min_spec_org',
		max_spec:'hardness_max_spec_org',
		sup_min:'hardness_sup_min',
		sup_max:'hardness_sup_max',
		ieipl_min:'hardness_ieipl_min',
		ieipl_max:'hardness_ieipl_max',
		remarks:'hardness_remarks',
		
		
		},
		{
		no:'',
		desc:'elongation',
		unit:'elongation_unit_org',
		min_spec:'elongation_min_spec_org',
		max_spec:'elongation_max_spec_org',
		sup_min:'elongation_sup_min',
		sup_max:'elongation_sup_max',
		ieipl_min:'elongation_ieipl_min',
		ieipl_max:'elongation_ieipl_max',
		remarks:'elongation_remarks',
		
		
		},
		{
		no:'',
		desc:'tensile_str',
		unit:'tensile_str_unit_org',
		min_spec:'tensile_str_min_spec_org',
		max_spec:'tensile_str_max_spec_org',
		sup_min:'tensile_str_sup_min',
		sup_max:'tensile_str_sup_max',
		ieipl_min:'tensile_str_ieipl_min',
		ieipl_max:'tensile_str_ieipl_max',
		remarks:'tensile_str_remarks',
		
		
		},
		{
		no:'',
		desc:'yield_str',
		unit:'yield_str_unit_org',
		min_spec:'yield_str_min_spec_org',
		max_spec:'yield_str_max_spec_org',
		sup_min:'yield_str_sup_min',
		sup_max:'yield_str_sup_max',
		ieipl_min:'yield_str_ieipl_min',
		ieipl_max:'yield_str_ieipl_max',
		remarks:'yield_str_remarks',
		
		
		},
		{
			no:'',
			desc:'c',
			unit:'c_unit_org',
			min_spec:'c_min_spec_org',
			max_spec:'c_max_spec_org',
			sup_min:'c_sup_min',
			sup_max:'c_sup_max',
			ieipl_min:'c_ieipl_min',
			ieipl_max:'c_ieipl_max',
			remarks:'c_remarks',
			
			
			},
			{
				no:'',
				desc:'p',
				unit:'p_unit_org',
				min_spec:'p_min_spec_org',
				max_spec:'p_max_spec_org',
				sup_min:'p_sup_min',
				sup_max:'p_sup_max',
				ieipl_min:'p_ieipl_min',
				ieipl_max:'p_ieipl_max',
				remarks:'p_remarks',
				
				
				},
				{
					no:'',
					desc:'s',
					unit:'s_unit_org',
					min_spec:'s_min_spec_org',
					max_spec:'s_max_spec_org',
					sup_min:'s_sup_min',
					sup_max:'s_sup_max',
					ieipl_min:'s_ieipl_min',
					ieipl_max:'s_ieipl_max',
					remarks:'s_remarks',
					
					
					},
					{
						no:'',
						desc:'mn',
						unit:'mn_unit_org',
						min_spec:'mn_min_spec_org',
						max_spec:'mn_max_spec_org',
						sup_min:'mn_sup_min',
						sup_max:'mn_sup_max',
						ieipl_min:'mn_ieipl_min',
						ieipl_max:'mn_ieipl_max',
						remarks:'mn_remarks',
						
						
						},
						{
							no:'',
							desc:'pb',
							unit:'pb_unit_org',
							min_spec:'pb_min_spec_org',
							max_spec:'pb_max_spec_org',
							sup_min:'pb_sup_min',
							sup_max:'pb_sup_max',
							ieipl_min:'pb_ieipl_min',
							ieipl_max:'pb_ieipl_max',
							remarks:'pb_remarks',
							
							
							},
							{
								no:'',
								desc:'fe',
								unit:'fe_unit_org',
								min_spec:'fe_min_spec_org',
								max_spec:'fe_max_spec_org',
								sup_min:'fe_sup_min',
								sup_max:'fe_sup_max',
								ieipl_min:'fe_ieipl_min',
								ieipl_max:'fe_ieipl_max',
								remarks:'fe_remarks',
								
								
								},
								{
									no:'',
									desc:'si',
									unit:'si_unit_org',
									min_spec:'si_min_spec_org',
									max_spec:'si_max_spec_org',
									sup_min:'si_sup_min',
									sup_max:'si_sup_max',
									ieipl_min:'si_ieipl_min',
									ieipl_max:'si_ieipl_max',
									remarks:'si_remarks',
									
									
									},
									{
										no:'',
										desc:'ni',
										unit:'ni_unit_org',
										min_spec:'ni_min_spec_org',
										max_spec:'ni_max_spec_org',
										sup_min:'ni_sup_min',
										sup_max:'ni_sup_max',
										ieipl_min:'ni_ieipl_min',
										ieipl_max:'ni_ieipl_max',
										remarks:'ni_remarks',
									},
						{
    no:'',
    desc:'mo',
    unit:'mo_unit_org',
    min_spec:'mo_min_spec_org',
    max_spec:'mo_max_spec_org',
    sup_min:'mo_sup_min',
    sup_max:'mo_sup_max',
    ieipl_min:'mo_ieipl_min',
    ieipl_max:'mo_ieipl_max',
    remarks:'mo_remarks',
    
    
    },
	{
		no:'',
		desc:'cu',
		unit:'cu_unit_org',
		min_spec:'cu_min_spec_org',
		max_spec:'cu_max_spec_org',
		sup_min:'cu_sup_min',
		sup_max:'cu_sup_max',
		ieipl_min:'cu_ieipl_min',
		ieipl_max:'cu_ieipl_max',
		remarks:'cu_remarks',
		
		
		},
		{
			no:'',
			desc:'zn',
			unit:'zn_unit_org',
			min_spec:'zn_min_spec_org',
			max_spec:'zn_max_spec_org',
			sup_min:'zn_sup_min',
			sup_max:'zn_sup_max',
			ieipl_min:'zn_ieipl_min',
			ieipl_max:'zn_ieipl_max',
			remarks:'zn_remarks',
			
			
			},
			{
				no:'',
				desc:'sn',
				unit:'sn_unit_org',
				min_spec:'sn_min_spec_org',
				max_spec:'sn_max_spec_org',
				sup_min:'sn_sup_min',
				sup_max:'sn_sup_max',
				ieipl_min:'sn_ieipl_min',
				ieipl_max:'sn_ieipl_max',
				remarks:'sn_remarks',
				
				
				},
				{
					no:'',
					desc:'bi',
					unit:'bi_unit_org',
					min_spec:'bi_min_spec_org',
					max_spec:'bi_max_spec_org',
					sup_min:'bi_sup_min',
					sup_max:'bi_sup_max',
					ieipl_min:'bi_ieipl_min',
					ieipl_max:'bi_ieipl_max',
					remarks:'bi_remarks',
					
					
					},
{
    no:'',
    desc:'o',
    unit:'o_unit_org',
    min_spec:'o_min_spec_org',
    max_spec:'o_max_spec_org',
    sup_min:'o_sup_min',
    sup_max:'o_sup_max',
    ieipl_min:'o_ieipl_min',
    ieipl_max:'o_ieipl_max',
    remarks:'o_remarks',
    
    
    },
	{
		no:'',
		desc:'zr',
		unit:'zr_unit_org',
		min_spec:'zr_min_spec_org',
		max_spec:'zr_max_spec_org',
		sup_min:'zr_sup_min',
		sup_max:'zr_sup_max',
		ieipl_min:'zr_ieipl_min',
		ieipl_max:'zr_ieipl_max',
		remarks:'zr_remarks',
		
		
		},
		{
			no:'',
			desc:'mg',
			unit:'mg_unit_org',
			min_spec:'mg_min_spec_org',
			max_spec:'mg_max_spec_org',
			sup_min:'mg_sup_min',
			sup_max:'mg_sup_max',
			ieipl_min:'mg_ieipl_min',
			ieipl_max:'mg_ieipl_max',
			remarks:'mg_remarks',
			
			
			},
			
									
	
				
										{
											no:'',
											desc:'cr',
											unit:'cr_unit_org',
											min_spec:'cr_min_spec_org',
											max_spec:'cr_max_spec_org',
											sup_min:'cr_sup_min',
											sup_max:'cr_sup_max',
											ieipl_min:'cr_ieipl_min',
											ieipl_max:'cr_ieipl_max',
											remarks:'cr_remarks',
											
											
											},
																																																				
		
		{
		no:'',
		desc:'pre_plating_details',
		unit:'pre_plating_details_unit_org',
		min_spec:'pre_plating_details_min_spec_org',
		max_spec:'pre_plating_details_max_spec_org',
		sup_min:'pre_plating_details_sup_min',
		sup_max:'pre_plating_details_sup_max',
		ieipl_min:'pre_plating_details_ieipl_min',
		ieipl_max:'pre_plating_details_ieipl_max',
		remarks:'pre_plating_details_remarks',
		
		
		},
		{
		no:'',
		desc:'slitting_burr',
		unit:'slitting_burr_unit_org',
		min_spec:'slitting_burr_min_spec_org',
		max_spec:'slitting_burr_max_spec_org',
		sup_min:'slitting_burr_sup_min',
		sup_max:'slitting_burr_sup_max',
		ieipl_min:'slitting_burr_ieipl_min',
		ieipl_max:'slitting_burr_ieipl_max',
		remarks:'slitting_burr_remarks',
		
		
		},
		{
		no:'',
		desc:'twist',
		unit:'twist_unit_org',
		min_spec:'twist_min_spec_org',
		max_spec:'twist_max_spec_org',
		sup_min:'twist_sup_min',
		sup_max:'twist_sup_max',
		ieipl_min:'twist_ieipl_min',
		ieipl_max:'twist_ieipl_max',
		remarks:'twist_remarks',
		
		
		},
		{
		no:'',
		desc:'camber',
		unit:'camber_unit_org',
		min_spec:'camber_min_spec_org',
		max_spec:'camber_max_spec_org',
		sup_min:'camber_sup_min',
		sup_max:'camber_sup_max',
		ieipl_min:'camber_ieipl_min',
		ieipl_max:'camber_ieipl_max',
		remarks:'camber_remarks',
		
		
		},
		{
		no:'',
		desc:'surface_finish',
		unit:'surface_finish_unit_org',
		min_spec:'surface_finish_min_spec_org',
		max_spec:'surface_finish_max_spec_org',
		sup_min:'surface_finish_sup_min',
		sup_max:'surface_finish_sup_max',
		ieipl_min:'surface_finish_ieipl_min',
		ieipl_max:'surface_finish_ieipl_max',
		remarks:'surface_finish_remarks',
		
		
		},
		{
		no:'',
		desc:'thermal',
		unit:'thermal_unit_org',
		min_spec:'thermal_min_spec_org',
		max_spec:'thermal_max_spec_org',
		sup_min:'thermal_sup_min',
		sup_max:'thermal_sup_max',
		ieipl_min:'thermal_ieipl_min',
		ieipl_max:'thermal_ieipl_max',
		remarks:'thermal_remarks',
		
		
		},
		{
		no:'',
		desc:'density',
		unit:'density_unit_org',
		min_spec:'density_min_spec_org',
		max_spec:'density_max_spec_org',
		sup_min:'density_sup_min',
		sup_max:'density_sup_max',
		ieipl_min:'density_ieipl_min',
		ieipl_max:'density_ieipl_max',
		remarks:'density_remarks',
		
		
		},
		{
		no:'',
		desc:'coil_weight',
		unit:'coil_weight_unit_org',
		min_spec:'coil_weight_min_spec_org',
		max_spec:'coil_weight_max_spec_org',
		sup_min:'coil_weight_sup_min',
		sup_max:'coil_weight_sup_max',
		ieipl_min:'coil_weight_ieipl_min',
		ieipl_max:'coil_weight_ieipl_max',
		remarks:'coil_weight_remarks',
		
		
		},
		{
		no:'',
		desc:'coil',
		unit:'coil_unit_org',
		min_spec:'coil_min_spec_org',
		max_spec:'coil_max_spec_org',
		sup_min:'coil_sup_min',
		sup_max:'coil_sup_max',
		ieipl_min:'coil_ieipl_min',
		ieipl_max:'coil_ieipl_max',
		remarks:'coil_remarks',
		
		
		},
		{
		no:'',
		desc:'next_due',
		unit:'next_due_unit_org',
		min_spec:'next_due_min_spec_org',
		max_spec:'next_due_max_spec_org',
		sup_min:'next_due_sup_min',
		sup_max:'next_due_sup_max',
		ieipl_min:'next_due_ieipl_min',
		ieipl_max:'next_due_ieipl_max',
		remarks:'next_due_remarks',
		
		
		},
		],
	user:{
		id:0,
        name:'',
        branch:'',
        roletype:'operator',
        username:'',
        password:'',
        email:'',
        phone:'',
        address:'',
        status:'accepted'

    },
	selectedPartNoItem:{},
	tempInvoice:{},//temprory
	tempRemarks:{},//temprory

	configProductsFormat2:[
	
		{
			label:'Sl',//input field label
			name:'header_no',//column name
			value:'SL',//default value
			default:true,
			editable:true,
			},
		{
			label:'Coil #',//input field label
			name:'header_batch_no',//column name
			value:'Coil #',//default value
	
			default:true,
			editable:true,
			},
			
			
			{
				label:'Sup Coil',//input field label
				name:'header_lot_no',//column name
				value:'Sup Coil',//default value
				default:true,
				editable:true,
				},
				{
					label:'Supplier Coil #',//input field label
					name:'header_heat_no',//column name
					value:'Supplier Coil #',//default value
					default:true,
					editable:true,
					},
			{
			label:'Weight',//input field label
			name:'header_weight',//column name
			value:'Weight',//default value
			default:true,
			editable:true,
			},
			{
			label:'Width',//input field label
			name:'header_width',//column name
			value:'Width In mm',//default value
			default:true,
			editable:true,
			merge:{
				colspan:2,
				rowspan:1
			}
			},
			{
			label:'Thickness',//input field label
			name:'header_thick',//column name
			value:'Thickness MM',//default value
			default:true,
			editable:true,
			merge:{
				colspan:2,
				rowspan:1
			}
			},


{
label:'Coil',//input field label
name:'batch_no',//column name
value:'',//default value
sapHeader:'BATCH',
default:true,
editable:true,
},

{
	label:'Sup Coil',//input field label
	name:'lot_no',//column name
	value:'',//default value
	default:true,
	editable:true,
	},
	{
		label:'Heat No',//input field label
		name:'heat_no',//column name
		value:'',//default value
		default:true,
		editable:true,
		},
{
label:'Weight',//input field label
name:'weight',//column name
value:'',//default value
sapHeader:'QTY',
default:true,
editable:true,
},
{
label:'Width Min',//input field label
name:'width_min',//column name
value:'',//default value
default:true,
editable:true,
},
{
label:'Width Max',//input field label
name:'width_max',//column name
value:'',//default value
default:true,
editable:true,
},
{
label:'Thickness Min',//input field label
name:'thick_min',//column name
value:'',//default value
default:true,
editable:true,
},
{
	label:'Thickness Max',//input field label
	name:'thick_max',//column name
	value:'',//default value
	default:true,
	editable:true,
	},
	
{
	label:'Validation',//input field label
	name:'validation',//column name
	value:'',//default value
	default:true,
	editable:true,
	exp:{
		rule: `NumberObj(QasOne).width_min_spec_org  <= NumberObj(QasTwoEach).width_min and
		NumberObj(QasOne).width_max_spec_org >= NumberObj(QasTwoEach).width_max and NumberObj(QasOne).thickness_min_spec_org  <= NumberObj(QasTwoEach).thick_min and
		NumberObj(QasOne).thickness_max_spec_org >= NumberObj(QasTwoEach).thick_max `,
		success: "_default_",//_default_
		failure: "_default_",//_default_
		status: false,
		note: 'For Actual Value "_default_"'	
	}
	},
	],
	configProductsFormat:[
		{
		  "label": "SL",
		  "name": "sl_header",
		  "value": "SL #",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 1,
			"rowspan": 2
		  }
		},
		{
		  "label": "SPEC/REQUIRMENT",
		  "name": "spec_req_header",
		  "value": "SPEC/REQUIRMENT",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 4,
			"rowspan": 1
		  }
		},
		{
		  "label": "ACTUAL READING",
		  "name": "act_read_header",
		  "value": "ACTUAL READING",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 4,
			"rowspan": 1
		  }
		},
		{
		  "label": "REMARKS",
		  "name": "remarks_header",
		  "value": "REMARKS",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 1,
			"rowspan": 2
		  }
		},
		{
		  "label": "Description",
		  "name": "desc_header",
		  "value": "Description",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "UNIT",
		  "name": "unit_header",
		  "value": "UNIT",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Min. Spec.",
		  "name": "min_spec_header",
		  "value": "Min. Spec.",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Max. Spec.",
		  "name": "max_spec_header",
		  "value": "Max. spec.",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Supplier",
		  "name": "supplier_header",
		  "value": "Supplier",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 2,
			"rowspan": 1
		  }
		},
		{
		  "label": "IEIPL/THIRD PARTY",
		  "name": "ieipl_header",
		  "value": "IEIPL/THIRD PARTY",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 2,
			"rowspan": 1
		  }
		},
		{
		  "label": "WIDTH",
		  "name": "width",
		  "value": "WIDTH",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH UNIT",
		  "name": "width_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH MIN",
		  "name": "width_min_spec_org",
		  "value": "2",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH MAX",
		  "name": "width_max_spec_org",
		  "value": "5",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH SUP MIN",
		  "name": "width_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH SUP MAX",
		  "name": "width_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH IEIPL MIN",
		  "name": "width_ieipl_min",
		  "exp":{
			"rule":"minBy(NumberArray(QasTwo),'width_min')",
			success: "_default_",//_default_
			failure: "_default_",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH IEIPL MAX",
		  "name": "width_ieipl_max",
		  "value": "",
		  "exp":{
			"rule":"maxBy(NumberArray(QasTwo),'width_max')",
			success: "_default_",//_default_
			failure: "_default_",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH REMARKS",
		  "name": "width_remarks",
		  "value": "",
		  "exp":{
			"rule":`NumberObj(QasOne).width_min_spec_org  <= NumberObj(QasOne).width_sup_min  and
			NumberObj(QasOne).width_max_spec_org >= NumberObj(QasOne).width_sup_max  and NumberObj(QasOne).width_min_spec_org  <= NumberObj(QasOne).width_ieipl_min and NumberObj(QasOne).width_max_spec_org >= NumberObj(QasOne).width_ieipl_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},

		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS",
		  "name": "thickness",
		  "value": "THICKNESS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS UNIT",
		  "name": "thickness_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS MIN SPEC",
		  "name": "thickness_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS MAX SPEC",
		  "name": "thickness_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS SUP MIN",
		  "name": "thickness_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS SUP MAX",
		  "name": "thickness_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS IEIPL MIN",
		  "name": "thickness_ieipl_min",
		  "value": "",
		  "exp":{
			"rule":"minBy(NumberArray(QasTwo),'thick_min')",
			success: "_default_",//_default_
			failure: "_default_",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS IEIPL MAX",
		  "name": "thickness_ieipl_max",
		  "value": "",
		  "exp":{
			"rule":"maxBy(NumberArray(QasTwo),'thick_max')",
			success: "_default_",//_default_
			failure: "_default_",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},

		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS REMARKS",
		  "name": "thickness_remarks",
		  "value": "",
		  "exp":{
			"rule":`NumberObj(QasOne).thickness_min_spec_org  <= NumberObj(QasOne).thickness_sup_min  and
			NumberObj(QasOne).thickness_max_spec_org >= NumberObj(QasOne).thickness_sup_max  and NumberObj(QasOne).thickness_min_spec_org  <= NumberObj(QasOne).thickness_ieipl_min and NumberObj(QasOne).thickness_max_spec_org >= NumberObj(QasOne).thickness_ieipl_max  `,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},

		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS",
		  "name": "hardness",
		  "value": "HARDNESS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS UNIT",
		  "name": "hardness_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS MIN SPEC",
		  "name": "hardness_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS MAX SPEC",
		  "name": "hardness_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS SUP MIN",
		  "name": "hardness_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS SUP MAX",
		  "name": "hardness_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS IEIPL MIN",
		  "name": "hardness_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARNDESS IEIPL MAX",
		  "name": "hardness_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS REMARKS",
		  "name": "hardness_remarks",
		  "value": "",
		  "exp":{
			"rule":`NumberObj(QasOne).hardness_min_spec_org  <= NumberObj(QasOne).hardness_sup_min  or
			NumberObj(QasOne).hardness_max_spec_org >= NumberObj(QasOne).hardness_sup_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION",
		  "name": "elongation",
		  "value": "ELONGATION",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION UNIT",
		  "name": "elongation_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION MIN SPEC",
		  "name": "elongation_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION MAX SPEC",
		  "name": "elongation_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION SUP MIN",
		  "name": "elongation_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION SUP MAX",
		  "name": "elongation_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION IEIPL MIN",
		  "name": "elongation_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION IEIPL MAX",
		  "name": "elongation_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION REMARKS",
		  "name": "elongation_remarks",
		  "value": "",
		  "exp":{
			"rule":`NumberObj(QasOne).elongation_min_spec_org  <= NumberObj(QasOne).elongation_sup_min or NumberObj(QasOne).elongation_max_spec_org  <= 
			NumberObj(QasOne).elongation_sup_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
 			note: 'For Actual Value "_default_"'	
	
		},

		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR",
		  "name": "tensile_str",
		  "value": "TENSILE STR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR UNIT",
		  "name": "tensile_str_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR MIN SPEC",
		  "name": "tensile_str_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR MAX SPEC",
		  "name": "tensile_str_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR SUP MIN",
		  "name": "tensile_str_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR SUP MAX",
		  "name": "tensile_str_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR IEIPL MIN",
		  "name": "tensile_str_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR IEIPL MAX",
		  "name": "tensile_str_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR REMARKS",
		  "name": "tensile_str_remarks",
		  "value": "",
		  "default": true,

		  
"exp":{
	"rule":`NumberObj(QasOne).tensile_str_min_spec_org  <= NumberObj(QasOne).tensile_str_sup_min and NumberObj(QasOne).tensile_str_max_spec_org  >= 
	NumberObj(QasOne).tensile_str_sup_max`,
	success: "Ok",//_default_
	failure: "Check",//_default_
	status: false,
	 note: 'For Actual Value "_default_"'	

},

		  "editable": true
		},
		{
		  "label": "YIELD STR UNIT",
		  "name": "yield_str_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR",
		  "name": "yield_str",
		  "value": "YIELD STR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR MIN SPEC",
		  "name": "yield_str_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR MAX SPEC",
		  "name": "yield_str_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR SUP MIN",
		  "name": "yield_str_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR SUP MAX",
		  "name": "yield_str_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR IEIPL MIN",
		  "name": "yield_str_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR IEIPL MAX",
		  "name": "yield_str_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR REMARKS",
		  "name": "yield_str_remarks",
		  "value": "",
		  exp:{
			rule: `NumberObj(QasOne).yield_str_min_spec_org  <= NumberObj(QasOne).yield_str_sup_min or NumberObj(QasOne).yield_str_max_spec_org  <= 
			NumberObj(QasOne).yield_str_sup_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
			note: 'For Actual Value "_default_"'	
		},
	
		  "default": true,
		  "editable": true
		},

		{
			"label": "C",
			"name": "c",
			"value": "C",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C UNIT",
			"name": "c_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C MIN SPEC",
			"name": "c_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C MAX SPEC",
			"name": "c_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C SUP MIN",
			"name": "c_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C SUP MAX",
			"name": "c_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C IEIPL MIN",
			"name": "c_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C IEIPL MAX",
			"name": "c_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "C REMARKS",
			"name": "c_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).c_min_spec_org  <= NumberObj(QasOne).c_sup_min  or
				NumberObj(QasOne).c_max_spec_org >=  NumberObj(QasOne).c_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "P",
			"name": "p",
			"value": "P",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P UNIT",
			"name": "p_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P MIN SPEC",
			"name": "p_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P MAX SPEC",
			"name": "p_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P SUP MIN",
			"name": "p_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P SUP MAX",
			"name": "p_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P IEIPL MIN",
			"name": "p_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P IEIPL MAX",
			"name": "p_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "P REMARKS",
			"name": "p_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).p_min_spec_org  <= NumberObj(QasOne).p_sup_min  or
				NumberObj(QasOne).p_max_spec_org >=  NumberObj(QasOne).p_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  
		
		  {
			"label": "S",
			"name": "s",
			"value": "S",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S UNIT",
			"name": "s_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S MIN SPEC",
			"name": "s_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S MAX SPEC",
			"name": "s_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S SUP MIN",
			"name": "s_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S SUP MAX",
			"name": "s_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S IEIPL MIN",
			"name": "s_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S IEIPL MAX",
			"name": "s_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "S REMARKS",
			"name": "s_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).s_min_spec_org  <= NumberObj(QasOne).s_sup_min  or
				NumberObj(QasOne).s_max_spec_org >=  NumberObj(QasOne).s_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn",
			"name": "mn",
			"value": "Mn",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn UNIT",
			"name": "mn_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn MIN SPEC",
			"name": "mn_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn MAX SPEC",
			"name": "mn_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn SUP MIN",
			"name": "mn_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn SUP MAX",
			"name": "mn_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn IEIPL MIN",
			"name": "mn_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn IEIPL MAX",
			"name": "mn_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mn REMARKS",
			"name": "mn_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).mn_min_spec_org  <= NumberObj(QasOne).mn_sup_min  or
				NumberObj(QasOne).mn_max_spec_org >=  NumberObj(QasOne).mn_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb",
			"name": "pb",
			"value": "Pb",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb UNIT",
			"name": "pb_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb MIN SPEC",
			"name": "pb_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb MAX SPEC",
			"name": "pb_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb SUP MIN",
			"name": "pb_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb SUP MAX",
			"name": "pb_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb IEIPL MIN",
			"name": "pb_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb IEIPL MAX",
			"name": "pb_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Pb REMARKS",
			"name": "pb_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).pb_min_spec_org  <= NumberObj(QasOne).pb_sup_min  or
				NumberObj(QasOne).pb_max_spec_org >=  NumberObj(QasOne).pb_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe",
			"name": "fe",
			"value": "Fe",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe UNIT",
			"name": "fe_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe MIN SPEC",
			"name": "fe_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe MAX SPEC",
			"name": "fe_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe SUP MIN",
			"name": "fe_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe SUP MAX",
			"name": "fe_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe IEIPL MIN",
			"name": "fe_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe IEIPL MAX",
			"name": "fe_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Fe REMARKS",
			"name": "fe_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).fe_min_spec_org  <= NumberObj(QasOne).fe_sup_min  or
				NumberObj(QasOne).fe_max_spec_org >=  NumberObj(QasOne).fe_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si",
			"name": "si",
			"value": "Si",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si UNIT",
			"name": "si_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si MIN SPEC",
			"name": "si_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si MAX SPEC",
			"name": "si_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si SUP MIN",
			"name": "si_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si SUP MAX",
			"name": "si_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si IEIPL MIN",
			"name": "si_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si IEIPL MAX",
			"name": "si_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Si REMARKS",
			"name": "si_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).si_min_spec_org  <= NumberObj(QasOne).si_sup_min  or
				NumberObj(QasOne).si_max_spec_org >=  NumberObj(QasOne).si_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni",
			"name": "ni",
			"value": "Ni",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni UNIT",
			"name": "ni_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni MIN SPEC",
			"name": "ni_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni MAX SPEC",
			"name": "ni_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni SUP MIN",
			"name": "ni_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni SUP MAX",
			"name": "ni_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni IEIPL MIN",
			"name": "ni_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni IEIPL MAX",
			"name": "ni_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Ni REMARKS",
			"name": "ni_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).ni_min_spec_org  <= NumberObj(QasOne).ni_sup_min  or
				NumberObj(QasOne).ni_max_spec_org >=  NumberObj(QasOne).ni_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr",
			"name": "cr",
			"value": "Cr",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr UNIT",
			"name": "cr_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr MIN SPEC",
			"name": "cr_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr MAX SPEC",
			"name": "cr_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr SUP MIN",
			"name": "cr_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr SUP MAX",
			"name": "cr_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr IEIPL MIN",
			"name": "cr_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr IEIPL MAX",
			"name": "cr_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cr REMARKS",
			"name": "cr_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).cr_min_spec_org  <= NumberObj(QasOne).cr_sup_min  or
				NumberObj(QasOne).cr_max_spec_org >=  NumberObj(QasOne).cr_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo",
			"name": "mo",
			"value": "Mo",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo UNIT",
			"name": "mo_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo MIN SPEC",
			"name": "mo_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo MAX SPEC",
			"name": "mo_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo SUP MIN",
			"name": "mo_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo SUP MAX",
			"name": "mo_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo IEIPL MIN",
			"name": "mo_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo IEIPL MAX",
			"name": "mo_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mo REMARKS",
			"name": "mo_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).mo_min_spec_org  <= NumberObj(QasOne).mo_sup_min  or
				NumberObj(QasOne).mo_max_spec_org >=  NumberObj(QasOne).mo_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu",
			"name": "cu",
			"value": "Cu",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu UNIT",
			"name": "cu_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu MIN SPEC",
			"name": "cu_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu MAX SPEC",
			"name": "cu_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu SUP MIN",
			"name": "cu_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu SUP MAX",
			"name": "cu_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu IEIPL MIN",
			"name": "cu_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu IEIPL MAX",
			"name": "cu_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Cu REMARKS",
			"name": "cu_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).cu_min_spec_org  <= NumberObj(QasOne).cu_sup_min  or
				NumberObj(QasOne).cu_max_spec_org >=  NumberObj(QasOne).cu_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn",
			"name": "zn",
			"value": "Zn",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn UNIT",
			"name": "zn_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn MIN SPEC",
			"name": "zn_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn MAX SPEC",
			"name": "zn_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn SUP MIN",
			"name": "zn_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn SUP MAX",
			"name": "zn_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn IEIPL MIN",
			"name": "zn_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn IEIPL MAX",
			"name": "zn_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zn REMARKS",
			"name": "zn_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).zn_min_spec_org  <= NumberObj(QasOne).zn_sup_min  or
				NumberObj(QasOne).zn_max_spec_org >=  NumberObj(QasOne).zn_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn",
			"name": "sn",
			"value": "Sn",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn UNIT",
			"name": "sn_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn MIN SPEC",
			"name": "sn_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn MAX SPEC",
			"name": "sn_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn SUP MIN",
			"name": "sn_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn SUP MAX",
			"name": "sn_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn IEIPL MIN",
			"name": "sn_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn IEIPL MAX",
			"name": "sn_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Sn REMARKS",
			"name": "sn_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).sn_min_spec_org  <= NumberObj(QasOne).sn_sup_min  or
				NumberObj(QasOne).sn_max_spec_org >=  NumberObj(QasOne).sn_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi",
			"name": "bi",
			"value": "Bi",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi UNIT",
			"name": "bi_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi MIN SPEC",
			"name": "bi_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi MAX SPEC",
			"name": "bi_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi SUP MIN",
			"name": "bi_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi SUP MAX",
			"name": "bi_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi IEIPL MIN",
			"name": "bi_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi IEIPL MAX",
			"name": "bi_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Bi REMARKS",
			"name": "bi_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).bi_min_spec_org  <= NumberObj(QasOne).bi_sup_min  or
				NumberObj(QasOne).bi_max_spec_org >=  NumberObj(QasOne).bi_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "O",
			"name": "o",
			"value": "O",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O UNIT",
			"name": "o_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O MIN SPEC",
			"name": "o_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O MAX SPEC",
			"name": "o_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O SUP MIN",
			"name": "o_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O SUP MAX",
			"name": "o_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O IEIPL MIN",
			"name": "o_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O IEIPL MAX",
			"name": "o_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "O REMARKS",
			"name": "o_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).o_min_spec_org  <= NumberObj(QasOne).o_sup_min  or
				NumberObj(QasOne).o_max_spec_org >=  NumberObj(QasOne).o_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr",
			"name": "zr",
			"value": "Zr",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr UNIT",
			"name": "zr_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr MIN SPEC",
			"name": "zr_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr MAX SPEC",
			"name": "zr_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr SUP MIN",
			"name": "zr_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr SUP MAX",
			"name": "zr_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr IEIPL MIN",
			"name": "zr_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr IEIPL MAX",
			"name": "zr_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Zr REMARKS",
			"name": "zr_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).zr_min_spec_org  <= NumberObj(QasOne).zr_sup_min  or
				NumberObj(QasOne).zr_max_spec_org >=  NumberObj(QasOne).zr_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg",
			"name": "mg",
			"value": "Mg",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg UNIT",
			"name": "mg_unit_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg MIN SPEC",
			"name": "mg_min_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg MAX SPEC",
			"name": "mg_max_spec_org",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg SUP MIN",
			"name": "mg_sup_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg SUP MAX",
			"name": "mg_sup_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg IEIPL MIN",
			"name": "mg_ieipl_min",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg IEIPL MAX",
			"name": "mg_ieipl_max",
			"value": "",
			"default": true,
			"editable": true
		  },
		  {
			"label": "Mg REMARKS",
			"name": "mg_remarks",
			"value": "",
			exp:{
				rule: `NumberObj(QasOne).mg_min_spec_org  <= NumberObj(QasOne).mg_sup_min  or
				NumberObj(QasOne).mg_max_spec_org >=  NumberObj(QasOne).mg_sup_max`,
				success: "Ok",//_default_
				failure: "Check",//_default_
				status: false,
				note: 'For Actual Value "_default_"'	
			},
		
			"default": true,
			"editable": true
		  },			  
		{
		  "label": "PRE PLATING DETAILS",
		  "name": "pre_plating_details",
		  "value": "PRE PLATING DETAILS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS UNIT",
		  "name": "pre_plating_details_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS MIN SPEC",
		  "name": "pre_plating_details_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS MAX SPEC",
		  "name": "pre_plating_details_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS SUP MIN",
		  "name": "pre_plating_details_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS SUP MAX",
		  "name": "pre_plating_details_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS IEIPL MIN",
		  "name": "pre_plating_details_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS IEIPL MAX",
		  "name": "pre_plating_details_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS REMARKS",
		  "name": "pre_plating_details_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR",
		  "name": "slitting_burr",
		  "value": "SLITTING BURR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR UNIT",
		  "name": "slitting_burr_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR MIN SPEC",
		  "name": "slitting_burr_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR MAX SPEC",
		  "name": "slitting_burr_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR SUP MIN",
		  "name": "slitting_burr_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR SUP MAX",
		  "name": "slitting_burr_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR IEIPL MIN",
		  "name": "slitting_burr_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR IEIPL MAX",
		  "name": "slitting_burr_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR REMARKS",
		  "name": "slitting_burr_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST",
		  "name": "twist",
		  "value": "TWIST",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST UNIT",
		  "name": "twist_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST MIN SPEC",
		  "name": "twist_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST MAX SPEC",
		  "name": "twist_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST SUP MIN",
		  "name": "twist_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST SUP MAX",
		  "name": "twist_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST IEIPL MIN",
		  "name": "twist_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST IEIPL MAX",
		  "name": "twist_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST REMARKS",
		  "name": "twist_remarks",
		  "value": "",
		  "default": true,
		  exp:{
			rule: `NumberObj(QasOne).twist_min_spec_org  <= NumberObj(QasOne).twist_sup_min or NumberObj(QasOne).twist_max_spec_org  >= 
			NumberObj(QasOne).twist_sup_max or NumberObj(QasOne).twist_min_spec_org  <= NumberObj(QasOne).twist_ieipl_min or NumberObj(QasOne).twist_max_spec_org  >= 
			NumberObj(QasOne).twist_ieipl_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
			note: 'For Actual Value "_default_"'	
		},
	
		  "editable": true
		},
		{
		  "label": "CAMBER",
		  "name": "camber",
		  "value": "CAMBER",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER UNIT",
		  "name": "camber_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER MIN SPEC",
		  "name": "camber_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER MAX SPEC",
		  "name": "camber_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER SUP MIN",
		  "name": "camber_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER SUP MAX",
		  "name": "camber_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER IEIPL MIN",
		  "name": "camber_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER IEIPL MAX",
		  "name": "camber_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER REMARKS",
		  "name": "camber_remarks",
		  exp:{
			rule: `NumberObj(QasOne).camber_min_spec_org  <= NumberObj(QasOne).camber_sup_min or NumberObj(QasOne).camber_max_spec_org  >= 
			NumberObj(QasOne).camber_sup_max or NumberObj(QasOne).camber_min_spec_org  <= NumberObj(QasOne).camber_ieipl_min or NumberObj(QasOne).camber_max_spec_org  >= 
			NumberObj(QasOne).camber_ieipl_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
			note: 'For Actual Value "_default_"'	
		},

		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH",
		  "name": "surface_finish",
		  "value": "SURFACE FINISH",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH UNIT",
		  "name": "surface_finish_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH MIN SPEC",
		  "name": "surface_finish_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH MAX SPEC",
		  "name": "surface_finish_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH SUP MIN",
		  "name": "surface_finish_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH SUP MAX",
		  "name": "surface_finish_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH IEIPL MIN",
		  "name": "surface_finish_ieipl_min",
		  "value": "",
		  "default": true,

		  "editable": true
		},
		{
		  "label": "SURFACE FINISH IEIPL MAX",
		  "name": "surface_finish_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH REMARKS",
		  "name": "surface_finish_remarks",
		  "value": "",
		  exp:{
			rule: `NumberObj(QasOne).twist_min_spec_org  <= NumberObj(QasOne).twist_sup_min or NumberObj(QasOne).twist_max_spec_org  >= 
			NumberObj(QasOne).surface_finish_sup_max or NumberObj(QasOne).surface_finish_min_spec_org  <= NumberObj(QasOne).surface_finish_ieipl_min or NumberObj(QasOne).surface_finish_max_spec_org  >= 
			NumberObj(QasOne).surface_finish_ieipl_max`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
			note: 'For Actual Value "_default_"'	
		},

		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL",
		  "name": "thermal",
		  "value": "THERMAL",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL UNIT",
		  "name": "thermal_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL MIN SPEC",
		  "name": "thermal_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL MAX SPEC",
		  "name": "thermal_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL SUP MIN",
		  "name": "thermal_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL SUP MAX",
		  "name": "thermal_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL IEIPL MIN",
		  "name": "thermal_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL IEIPL MAX",
		  "name": "thermal_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THERMAL REMARKS",
		  "name": "thermal_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY",
		  "name": "density",
		  "value": "DENSITY",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY UNIT",
		  "name": "density_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY MIN SPEC",
		  "name": "density_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY MAX SPEC",
		  "name": "density_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY SUP MIN",
		  "name": "density_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY SUP MAX",
		  "name": "density_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY IEIPL MIN",
		  "name": "density_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY IEIPL MAX",
		  "name": "density_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY REMARKS",
		  "name": "density_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT",
		  "name": "coil_weight",
		  "value": "COIL WEIGHT",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT UNIT",
		  "name": "coil_weight_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT MIN SPEC",
		  "name": "coil_weight_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT MAX SPEC",
		  "name": "coil_weight_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT SUP MIN",
		  "name": "coil_weight_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT SUP MAX",
		  "name": "coil_weight_sup_max",
		  "value": "",
		  exp:{
			rule: `NumberObj(QasOne).coil_weight_ieipl_min  !=  ""  and NumberObj(QasOne).coil_weight_ieipl_max != ""`,
			success: "Ok",//_default_
			failure: "Check",//_default_
			status: false,
			note: 'For Actual Value "_default_"'	
		}, 
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT IEIPL MIN",
		  "name": "coil_weight_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT IEIPL MAX",
		  "name": "coil_weight_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT REMARKS",
		  "name": "coil_weight_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL",
		  "name": "coil",
		  "value": "COIL",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID",
		  "name": "coil_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL",
		  "name": "coil_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ",
		  "name": "coil_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ",
		  "name": "coil_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ",
		  "name": "coil_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL IEIPL MIN",
		  "name": "coil_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL  IEIPL MAX",
		  "name": "coil_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL  REMARKS",
		  "name": "coil_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Next Due For third party validation",
		  "name": "next_due",
		  "value": "Next Due For third party validation",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE UNIT",
		  "name": "next_due_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE MIN SPEC",
		  "name": "next_due_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE MAX SPEC",
		  "name": "next_due_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE SUP MIN",
		  "name": "next_due_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE SUP MAX",
		  "name": "next_due_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE IEIPL MIN",
		  "name": "next_due_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE IEIPL MAX",
		  "name": "next_due_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE REMARKS",
		  "name": "next_due_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		}
	  ],
	configHeaderFormat:[

		{
		  label:'SUPPLIER',//input field label
		  name:'supplier_name',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  map:'',
		  input_type:'text',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''
		},
		{
		  label:'PRODUCT NAME',//input field label
		  name:'product_name',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''

		},


		{
		  label:'INVOICE / DC #',//input field label
		  name:'invoice_no',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''

		},
		{
		  label:'INVOICE / DC DATE',//input field label
		  name:'invoice_date',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'DATE_EXT',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''

		},
		{
		  label:'INVOICE QTY',//input field label
		  name:'invoice_qty',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'number',

		  map:'invoiceQty',
		  mapFrom:'header',//header or product
		  default:true,
		  note:'No Need to Map'

		},

		{
		  label:'IR #',//input field label
		  name:'ir',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''
		},
		{
		  label:'GRN NO',//input field label
		  name:'grn_no',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',
		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''

		},
		{
		  label:'GRN DATE',//input field label
		  name:'grn_date',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'LAST_GR_DATE_EXT',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''
		},
		{
		  label:'R/M CODE',//input field label
		  name:'rmcode',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''
		},		{
		  label:'EDS /Q /P #',//input field label
		  name:'eds',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'eds',
		  mapFrom:'product',//header or product
		  default:true,
		  note:''
		},
		{
		  label:'DATE',//input field label
		  name:'date',//column name
		  value:moment().format("YYYY-MM-DD"),//default value
		  show:true,
		  showPrint:true,
		  input_type:'date',

		  map:'',
		  mapFrom:'header',//header or product
		  default:true,
		  note:''
		},
	{
		  label:'R/M',//input field label
		  name:'rm',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'text',

		  map:'rm',
		  mapFrom:'product',//header or product
		  default:true,
		  note:''
		},		{
		  label:'RECEIVED QTY',//input field label
		  name:'received_qty',//column name
		  value:'',//default value
		  show:true,
		  showPrint:true,
		  input_type:'number',
		  map:'invoiceQty',
		  mapFrom:'header',//header or product
		  default:true,
		  note:'No Need to Map'

		}
		,		{
			label:'SHELF LIFE',//input field label
			name:'shelf_life',//column name
			value:'',//default value
			show:true,
			showPrint:true,
			input_type:'text',
			map:'Shelf Life',
			mapFrom:'header',//header or product
			default:true,
			note:'No Need to Map'
  
		  }
		  ,		{
			label:'MATERIAL TEXT',//input field label
			name:'material_text',//column name
			value:'',//default value
			show:true,
			showPrint:true,
			input_type:'text',
			map:'MATTEXT',
			mapFrom:'header',//header or product
			default:true,
			note:''
  
		  },
	  ],
	configQasForm2Format:[

		{
			label:'Coil # Batch No',//input field label
			name:'batch_no',//column name
			value:'',//default value
			show:true,
			map:'BATCH',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},
		{
			label:'Sup #(Lot NO)',//input field label
			name:'lot_no',//column name
			value:'',//default value
			show:true,
			map:'PONO',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},
		{
			label:'Weight In Kg',//input field label
			name:'weight',//column name
			value:'',//default value
			show:true,
			map:'QTY',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},
		{
			label:'Width Min',//input field label
			name:'width_min',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},
		{
			label:'Width Max',//input field label
			name:'width_max',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},		{
			label:'Thick Min',//input field label
			name:'thick_min',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},				
		{
			label:'Thick Max',//input field label
			name:'thick_max',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		}			
		,				
		{
			label:'Validation',//input field label
			name:'validation',//column name
			value:'',//default value
			show:false,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'For Overall Verification from qasform1',
			validation:false,
			rule:'width_sup_min <= width_min <= width_sup_max',

		},

							
		{
			label:'Indicator(Error)',//input field label
			name:'error_status',//column name
			value:false,//default value //false(error) or true(no error)
			show:false,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'PreDefined configuration,No need to change',
			validation:false,
			rule:'',

		},					
	],
    masterBranches:[
		{
			name:'Chennai',
			description:''
		},
		{
			name:'Bangalore',
			description:''
		}
],
	masterProducts:[],
	masterUsers:[ ],
	masterUploadTypes:[],
	masterHeaderTypes:[],
	qualityAssuranceFormOne:[],
	qualityAssuranceFormTwo:[],
	
	

}


};





export default state;
