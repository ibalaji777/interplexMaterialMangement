/*eslint-disable*/
import moment from 'moment'
const state = {
	sapLogs:{

	},
 bgColor:'#30204e',
 dateFormat:"YYYY-MM-DD",
 barcodeLabel:{
html:`
<div style="text-align:center">{{supplier_name}}</div>
<div style="width:100%;padding:0 10px">
<table style="width:100%">
<tr>
<td>
INVOICE NO:{{invoice_no}}<br>
RM CODE:{{rmcode}}<br>
IR:{{ir}}<br>
GRN NO:{{grn_no}}<br>
Batch:{{batch}}<br>
</td>
<td >
<div style="text-align:right">
<img id="qr1" src="{{angal_qrcode_op ir 'qr1' '{"width":50,"height":50}'}}"> </td>
</div>
</tr>


</table>
</div>
`,
css:'.red{color:red}',
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
				marginRight: '.125',
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
			text:'Product Name',
			value:'product_name',
			class:'interplexHeader'
	
		},
		{
			text:'Supplier',
			value:'supplier_name',
			class:'interplexHeader'
	
		},
		
		{
			text:'RM Code',
			value:'rmcode',
			class:'interplexHeader'
	
		},
		{
			text:'EDS',
			value:'eds',
			class:'interplexHeader'
	
		},
		{
			text:'RM',
			value:'rm',
			class:'interplexHeader'
	
		},
		{
			text:'due Date',
			value:'duedate',
			class:'interplexHeader'
	
		},
		{
			text:'skiplevel',
			value:'skiplevel',
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

		rmcode:'OLMAT',
		supplier_name:'Vendor Name',
		invoice_no:'invoice_no',
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
				label:'',//input field label
				name:'',//column name
				value:'',//default value
				show:true,
				disable:false,
				validationStatus:false,
				headerMap:'',  
				validation:false,
				rule:'',colspan:1,
				default:true,
				note:'' 
				},
	
	
	
},


interplex:{
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
				label:'Width Min',
				name:'min_spec',
				width:'50'
			},
			{
				label:'Width Max',
				name:'max_spec',
				width:'50'
			}
		],
			two:[
				{
					label:'Width Min',
					name:'sup_min',
					width:'50'
				},
				{
					label:'Width Max',
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
				{name:'no'},
				{name:'batch_no'},//coil
				{name:'lot_no'},//sup_coil
{name:'weight'},
{name:'width_min'},
{name:'width_max'},
{name:'thick_min'},
{name:'thick_max'},
{name:'validation'},		
	
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
			name:'lot_no'
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
			name:'validation'
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
		desc:'ther_conduct',
		unit:'ther_conduct_unit_org',
		min_spec:'ther_conduct_min_spec_org',
		max_spec:'ther_conduct_max_spec_org',
		sup_min:'ther_conduct_sup_min',
		sup_max:'ther_conduct_sup_max',
		ieipl_min:'ther_conduct_ieipl_min',
		ieipl_max:'ther_conduct_ieipl_max',
		remarks:'ther_conduct_remarks',
		
		
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
		desc:'coil_300mm_900mm',
		unit:'coil_300mm_900mm_unit_org',
		min_spec:'coil_300mm_900mm_min_spec_org',
		max_spec:'coil_300mm_900mm_max_spec_org',
		sup_min:'coil_300mm_900mm_sup_min',
		sup_max:'coil_300mm_900mm_sup_max',
		ieipl_min:'coil_300mm_900mm_ieipl_min',
		ieipl_max:'coil_300mm_900mm_ieipl_max',
		remarks:'coil_300mm_900mm_remarks',
		
		
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
	configProductsFormat2:[
{
label:'Coil',//input field label
name:'batch_no',//column name
value:'',//default value
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
	label:'Thicknewss Max',//input field label
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
		rule: "",
		success: "_default_",//_default_
		failure: "_default_",//_default_
		status: false,
		note: 'For Actual Value "_default_"'	
	}
	},
	],
	configProductsFormat:[	
		{
		label:'SL',//input field label
		name:'sl_header',//column name
		value:'SL #',//default value
		default:true,
		merge:{
			colspan:1,rowspan:2
		}
		},
		{
			label:'SPEC/REQUIRMENT',//input field label
			name:'spec_req_header',//column name
			value:'SPEC/REQUIRMENT',//default value
			default:true,
			merge:{
				colspan:4,rowspan:1
			}
		
			},
			{
				label:'ACTUAL READING',//input field label
				name:'act_read_header',//column name
				value:'ACTUAL READING',//default value
				default:true,
				merge:{
					colspan:4,rowspan:1
				}
			
				},
				{
					label:'REMARKS',//input field label
					name:'remarks_header',//column name
					value:'REMARKS',//default value
					default:true,
					merge:{
						colspan:1,rowspan:2
					}
				
					},
	// ------------------------
	{
	label:'Description',//input field label
	name:'desc_header',//column name
	value:'Description',//default value
	default:true,
	
	},
	{
	label:'UNIT',//input field label
	name:'unit_header',//column name
	value:'UNIT',//default value
	default:true,
	},
	{
		label:'Min. Spec.',//input field label
		name:'min_spec_header',//column name
		value:'Min. Spec.',//default value
		default:true,
		},
		{
			label:'Max. Spec.',//input field label
			name:'max_spec_header',//column name
			value:'Max. spec.',//default value
			default:true,
			},
			{
				label:'Supplier',//input field label
				name:'supplier_header',//column name
				value:'Supplier',//default value
				default:true,
				merge:{
					colspan:2,rowspan:1
				}
	
				},
				{
					label:'IEIPL/THIRD PARTY',//input field label
					name:'ieipl_header',//column name
					value:'IEIPL/THIRD PARTY',//default value
					default:true,
					merge:{
						colspan:2,rowspan:1
					}
	
					},
	// -------------------------
	{
		label:'WIDTH',//input field label
		name:'width',//column name
		value:'',//default value
		default:true,
		},
	
	{
	label:'WIDTH UNIT',//input field label
	name:'width_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'WIDTH MIN',//input field label
	name:'width_min_spec_org',//column name
	value:'2',//default value
	default:true,
	},
	{
	label:'WIDTH MAX',//input field label
	name:'width_max_spec_org',//column name
	value:'5',//default value
	default:true,
	},
	{
	// width_min_spec_org <= width_sup_min and width_sup_min <= width_max_spec_org
	label:'WIDTH SUP MIN',//input field label
	name:'width_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'WIDTH SUP MAX',//input field label
	name:'width_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'WIDTH IEIPL MIN',//input field label
	name:'width_ieipl_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'WIDTH IEIPL MAX',//input field label
	name:'width_ieipl_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'WIDTH REMARKS',//input field label
	name:'width_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'THICKNESS',//input field label
		name:'thickness',//column name
		value:'THICKNESS',//default value
		default:true,
		},
	{
	label:'THICKNESS UNIT',//input field label
	name:'thickness_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS MIN SPEC',//input field label
	name:'thickness_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS MAX SPEC',//input field label
	name:'thickness_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS SUP MIN',//input field label
	name:'thickness_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS SUP MAX',//input field label
	name:'thickness_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS IEIPL MIN',//input field label
	name:'thickness_ieipl_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS IEIPL MAX',//input field label
	name:'thickness_ieipl_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THICKNESS REMARKS',//input field label
	name:'thickness_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'HARDNESS',//input field label
		name:'hardness',//column name
		value:'HARDNESS',//default value
		default:true,
		},
	{
	label:'HARDNESS UNIT',//input field label
	name:'hardness_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'HARDNESS MIN SPEC',//input field label
	name:'hardness_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'HARDNESS MAX SPEC',//input field label
	name:'hardness_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'HARDNESS SUP MIN',//input field label
	name:'hardness_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'HARDNESS SUP MAX',//input field label
	name:'hardness_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'HARDNESS IEIPL MIN',//input field label
	name:'hardness_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'HARNDESS IEIPL MAX',//input field label
	name:'hardness_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'HARDNESS REMARKS',//input field label
	name:'hardness_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'ELONGATION',//input field label
		name:'elongation',//column name
		value:'',//default value
		default:true,
		}
	,
	{
	label:'ELONGATION UNIT',//input field label
	name:'elongation_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION MIN SPEC',//input field label
	name:'elongation_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION MAX SPEC',//input field label
	name:'elongation_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION SUP MIN',//input field label
	name:'elongation_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION UNIT',//input field label
	name:'elongation_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ELONGATION MIN SPEC',//input field label
	name:'elongation_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ELONGATION MAX SPEC',//input field label
	name:'elongation_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ELONGATION SUP MIN',//input field label
	name:'elongation_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ELONGATION SUP MAX',//input field label
	name:'elongation_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ELONGATION IEIPL MIN',//input field label
	name:'elongation_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION IEIPL MAX',//input field label
	name:'elongation_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ELONGATION REMARKS',//input field label
	name:'elongation_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'TENSILE STR',//input field label
		name:'tensile_str',//column name
		value:'TENSILE STR',//default value
		default:true,
		}
		,
	{
	label:'TENSILE STR UNIT',//input field label
	name:'tensile_str_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR MIN SPEC',//input field label
	name:'tensile_str_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR MAX SPEC',//input field label
	name:'tensile_str_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR SUP MIN',//input field label
	name:'tensile_str_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR UNIT',//input field label
	name:'tensile_str_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TENSILE STR MIN SPEC',//input field label
	name:'tensile_str_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TENSILE STR MAX SPEC',//input field label
	name:'tensile_str_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TENSILE STR SUP MIN',//input field label
	name:'tensile_str_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TENSILE STR SUP MAX',//input field label
	name:'tensile_str_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TENSILE STR IEIPL MIN',//input field label
	name:'tensile_str_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR IEIPL MAX',//input field label
	name:'tensile_str_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TENSILE STR REMARKS',//input field label
	name:'tensile_str_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR UNIT',//input field label
	name:'yield_str_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
		label:'YIELD STR',//input field label
		name:'yield_str',//column name
		value:'YIELD STR',//default value
		default:true,
		}
		,
	{
	label:'YIELD STR MIN SPEC',//input field label
	name:'yield_str_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'YIELD STR MAX SPEC',//input field label
	name:'yield_str_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'YIELD STR SUP MIN',//input field label
	name:'yield_str_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'YIELD STR UNIT',//input field label
	name:'yield_str_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR MIN SPEC',//input field label
	name:'yield_str_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR MAX SPEC',//input field label
	name:'yield_str_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR SUP MIN',//input field label
	name:'yield_str_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR SUP MAX',//input field label
	name:'yield_str_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'YIELD STR IEIPL MIN',//input field label
	name:'yield_str_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'YIELD STR IEIPL MAX',//input field label
	name:'yield_str_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'YIELD STR REMARKS',//input field label
	name:'yield_str_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'CU',//input field label
		name:'cu',//column name
		value:'CU',//default value
		default:true,
		}
		,
	{
	label:'CU  UNIT',//input field label
	name:'cu_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  MIN SPEC',//input field label
	name:'cu_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  MAX SPEC',//input field label
	name:'cu_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  SUP MIN',//input field label
	name:'cu_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  UNIT',//input field label
	name:'cu_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CU  MIN SPEC',//input field label
	name:'cu_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CU  MAX SPEC',//input field label
	name:'cu_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CU SUP MIN',//input field label
	name:'cu_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CU SUP MAX',//input field label
	name:'cu_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CU IEIPL MIN',//input field label
	name:'cu_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  IEIPL MAX',//input field label
	name:'cu_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CU  REMARKS',//input field label
	name:'cu_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'PB',//input field label
		name:'pb',//column name
		value:'PB',//default value
		default:true,
		}
		,
	{
	label:'pb UNIT',//input field label
	name:'pb_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb MIN SPEC',//input field label
	name:'pb_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb MAX SPEC',//input field label
	name:'pb_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb SUP MIN',//input field label
	name:'pb_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb UNIT',//input field label
	name:'pb_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'pb MIN SPEC',//input field label
	name:'pb_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'pb MAX SPEC',//input field label
	name:'pb_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'pb SUP MIN',//input field label
	name:'pb_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'pb SUP MAX',//input field label
	name:'pb_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'pb IEIPL MIN',//input field label
	name:'pb_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb IEIPL MAX',//input field label
	name:'pb_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'pb REMARKS',//input field label
	name:'pb_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB UNIT',//input field label
	name:'pb_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB MIN SPEC',//input field label
	name:'pb_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB MAX SPEC',//input field label
	name:'pb_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB SUP MIN',//input field label
	name:'pb_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB UNIT',//input field label
	name:'pb_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB MIN SPEC',//input field label
	name:'pb_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB MAX SPEC',//input field label
	name:'pb_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB SUP MIN',//input field label
	name:'pb_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB SUP MAX',//input field label
	name:'pb_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PB IEIPL MIN',//input field label
	name:'pb_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB IEIPL MAX',//input field label
	name:'pb_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PB REMARKS',//input field label
	name:'pb_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'FE',//input field label
		name:'fe',//column name
		value:'FE',//default value
		default:true,
		},
	{
	label:'FE UNIT',//input field label
	name:'fe_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE MIN SPEC',//input field label
	name:'fe_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE MAX SPEC',//input field label
	name:'fe_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE SUP MIN',//input field label
	name:'fe_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE UNIT',//input field label
	name:'fe_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'FE MIN SPEC',//input field label
	name:'fe_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'FE MAX SPEC',//input field label
	name:'fe_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'FE SUP MIN',//input field label
	name:'fe_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'FE SUP MAX',//input field label
	name:'fe_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'FE IEIPL MIN',//input field label
	name:'fe_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE IEIPL MAX',//input field label
	name:'fe_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'FE REMARKS',//input field label
	name:'fe_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'SN',//input field label
		name:'sn',//column name
		value:'SN',//default value
		default:true,
		}
	,
	{
	label:'SN UNIT',//input field label
	name:'sn_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN MIN SPEC',//input field label
	name:'sn_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN MAX SPEC',//input field label
	name:'sn_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN SUP MIN',//input field label
	name:'sn_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN UNIT',//input field label
	name:'sn_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SN MIN SPEC',//input field label
	name:'sn_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SN MAX SPEC',//input field label
	name:'sn_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SN SUP MIN',//input field label
	name:'sn_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SN SUP MAX',//input field label
	name:'sn_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SN IEIPL MIN',//input field label
	name:'sn_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN IEIPL MAX',//input field label
	name:'sn_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SN REMARKS',//input field label
	name:'sn_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'ZN',//input field label
		name:'zn',//column name
		value:'ZN',//default value
		default:true,
		}
		,
	{
	label:'ZN UNIT',//input field label
	name:'zn_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN MIN SPEC',//input field label
	name:'zn_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN MAX SPEC',//input field label
	name:'zn_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN SUP MIN',//input field label
	name:'zn_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN UNIT',//input field label
	name:'zn_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ZN MIN SPEC',//input field label
	name:'zn_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ZN MAX SPEC',//input field label
	name:'zn_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ZN SUP MIN',//input field label
	name:'zn_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ZN SUP MAX',//input field label
	name:'zn_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'ZN IEIPL MIN',//input field label
	name:'zn_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN IEIPL MAX',//input field label
	name:'zn_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'ZN REMARKS',//input field label
	name:'zn_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'P',//input field label
		name:'p',//column name
		value:'P',//default value
		default:true,
		}
		,
	{
	label:'P UNIT',//input field label
	name:'p_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P MIN SPEC',//input field label
	name:'p_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P MAX SPEC',//input field label
	name:'p_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P SUP MIN',//input field label
	name:'p_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P UNIT',//input field label
	name:'p_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'P MIN SPEC',//input field label
	name:'p_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'P MAX SPEC',//input field label
	name:'p_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'P SUP MIN',//input field label
	name:'p_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'P SUP MAX',//input field label
	name:'p_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'P IEIPL MIN',//input field label
	name:'p_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P IEIPL MAX',//input field label
	name:'p_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'P REMARKS',//input field label
	name:'p_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'PRE PLATING DETAILS',//input field label
		name:'pre_plating_details',//column name
		value:'PRE PLATING DETAILS',//default value
		default:true,
		}
		,
	{
	label:'PRE PLATING DETAILS UNIT',//input field label
	name:'pre_plating_details_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS MIN SPEC',//input field label
	name:'pre_plating_details_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS MAX SPEC',//input field label
	name:'pre_plating_details_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS SUP MIN',//input field label
	name:'pre_plating_details_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS UNIT',//input field label
	name:'pre_plating_details_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PRE PLATING DETAILS MIN SPEC',//input field label
	name:'pre_plating_details_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PRE PLATING DETAILS MAX SPEC',//input field label
	name:'pre_plating_details_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PRE PLATING DETAILS SUP MIN',//input field label
	name:'pre_plating_details_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PRE PLATING DETAILS SUP MAX',//input field label
	name:'pre_plating_details_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'PRE PLATING DETAILS IEIPL MIN',//input field label
	name:'pre_plating_details_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS IEIPL MAX',//input field label
	name:'pre_plating_details_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'PRE PLATING DETAILS REMARKS',//input field label
	name:'pre_plating_details_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'SLITTING BURR',//input field label
		name:'slitting_burr',//column name
		value:'SLITTING BURR',//default value
		default:true,
		}
		,
	{
	label:'SLITTING BURR UNIT',//input field label
	name:'slitting_burr_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR MIN SPEC',//input field label
	name:'slitting_burr_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR MAX SPEC',//input field label
	name:'slitting_burr_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR SUP MIN',//input field label
	name:'slitting_burr_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR UNIT',//input field label
	name:'slitting_burr_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SLITTING BURR MIN SPEC',//input field label
	name:'slitting_burr_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SLITTING BURR MAX SPEC',//input field label
	name:'slitting_burr_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SLITTING BURR SUP MIN',//input field label
	name:'slitting_burr_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SLITTING BURR SUP MAX',//input field label
	name:'slitting_burr_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SLITTING BURR IEIPL MIN',//input field label
	name:'slitting_burr_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR IEIPL MAX',//input field label
	name:'slitting_burr_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SLITTING BURR REMARKS',//input field label
	name:'slitting_burr_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'TWIST',//input field label
		name:'twist',//column name
		value:'TWIST',//default value
		default:true,
		}
		,
	{
	label:'TWIST UNIT',//input field label
	name:'twist_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST MIN SPEC',//input field label
	name:'twist_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST MAX SPEC',//input field label
	name:'twist_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST SUP MIN',//input field label
	name:'twist_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST UNIT',//input field label
	name:'twist_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TWIST MIN SPEC',//input field label
	name:'twist_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TWIST MAX SPEC',//input field label
	name:'twist_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TWIST SUP MIN',//input field label
	name:'twist_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TWIST SUP MAX',//input field label
	name:'twist_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'TWIST IEIPL MIN',//input field label
	name:'twist_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST IEIPL MAX',//input field label
	name:'twist_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'TWIST REMARKS',//input field label
	name:'twist_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'CAMBER',//input field label
		name:'camber',//column name
		value:'CAMBER',//default value
		default:true,
		}
		,
	{
	label:'CAMBER UNIT',//input field label
	name:'camber_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER MIN SPEC',//input field label
	name:'camber_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER MAX SPEC',//input field label
	name:'camber_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER SUP MIN',//input field label
	name:'camber_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER UNIT',//input field label
	name:'camber_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CAMBER MIN SPEC',//input field label
	name:'camber_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CAMBER MAX SPEC',//input field label
	name:'camber_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CAMBER SUP MIN',//input field label
	name:'camber_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CAMBER SUP MAX',//input field label
	name:'camber_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'CAMBER IEIPL MIN',//input field label
	name:'camber_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER IEIPL MAX',//input field label
	name:'camber_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'CAMBER REMARKS',//input field label
	name:'camber_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'SURFACE FINISH',//input field label
		name:'surface_finish',//column name
		value:'SURFACE FINISH',//default value
		default:true,
		}
		,
	{
	label:'SURFACE  FINISH UNIT',//input field label
	name:'surface_finish_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH MIN SPEC',//input field label
	name:'surface_finish_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH MAX SPEC',//input field label
	name:'surface_finish_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH SUP MIN',//input field label
	name:'surface_finish_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH UNIT',//input field label
	name:'surface_finish_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SURFACE  FINISH MIN SPEC',//input field label
	name:'surface_finish_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SURFACE  FINISH MAX SPEC',//input field label
	name:'surface_finish_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SURFACE  FINISH SUP MIN',//input field label
	name:'surface_finish_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SURFACE  FINISH SUP MAX',//input field label
	name:'surface_finish_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'SURFACE  FINISH IEIPL MIN',//input field label
	name:'surface_finish_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH IEIPL MAX',//input field label
	name:'surface_finish_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'SURFACE  FINISH REMARKS',//input field label
	name:'surface_finish_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'THER CONDUCT',//input field label
		name:'ther_conduct',//column name
		value:'THER CONDUCT',//default value
		default:true,
		}
		,
	{
	label:'THER CONDUCT UNIT',//input field label
	name:'ther_conduct_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT MIN SPEC',//input field label
	name:'ther_conduct_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT MAX SPEC',//input field label
	name:'ther_conduct_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT SUP MIN',//input field label
	name:'ther_conduct_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT UNIT',//input field label
	name:'ther_conduct_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THER CONDUCT MIN SPEC',//input field label
	name:'ther_conduct_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THER CONDUCT MAX SPEC',//input field label
	name:'ther_conduct_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THER CONDUCT SUP MIN',//input field label
	name:'ther_conduct_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THER CONDUCT SUP MAX',//input field label
	name:'ther_conduct_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'THER CONDUCT IEIPL MIN',//input field label
	name:'ther_conduct_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT IEIPL MAX',//input field label
	name:'ther_conduct_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'THER CONDUCT REMARKS',//input field label
	name:'ther_conduct_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'DENSITY',//input field label
		name:'density',//column name
		value:'DENSITY',//default value
		default:true,
		}
		,
	{
	label:'DENSITY UNIT',//input field label
	name:'density_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY MIN SPEC',//input field label
	name:'density_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY MAX SPEC',//input field label
	name:'density_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY SUP MIN',//input field label
	name:'density_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY UNIT',//input field label
	name:'density_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'DENSITY MIN SPEC',//input field label
	name:'density_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'DENSITY MAX SPEC',//input field label
	name:'density_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'DENSITY SUP MIN',//input field label
	name:'density_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'DENSITY SUP MAX',//input field label
	name:'density_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'DENSITY IEIPL MIN',//input field label
	name:'density_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY IEIPL MAX',//input field label
	name:'density_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'DENSITY REMARKS',//input field label
	name:'density_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'COIL WEIGHT',//input field label
		name:'coil_weight',//column name
		value:'COIL WEIGHT',//default value
		default:true,
		}
		,
	{
	label:'COIL WEIGHT UNIT',//input field label
	name:'coil_weight_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT MIN SPEC',//input field label
	name:'coil_weight_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT MAX SPEC',//input field label
	name:'coil_weight_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT SUP MIN',//input field label
	name:'coil_weight_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT UNIT',//input field label
	name:'coil_weight_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL WEIGHT MIN SPEC',//input field label
	name:'coil_weight_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL WEIGHT MAX SPEC',//input field label
	name:'coil_weight_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL WEIGHT SUP MIN',//input field label
	name:'coil_weight_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL WEIGHT SUP MAX',//input field label
	name:'coil_weight_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL WEIGHT IEIPL MIN',//input field label
	name:'coil_weight_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT IEIPL MAX',//input field label
	name:'coil_weight_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL WEIGHT REMARKS',//input field label
	name:'coil_weight_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'COIL',//input field label
		name:'coil_300mm_900mm',//column name
		value:'COIL',//default value
		default:true,
		}
		,
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL ID:300MIN OD:900MAX ',//input field label
	name:'coil_300mm_900mm_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL ID:300MIN OD:900MAX',//input field label
	name:'coil_300mm_900mm_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'COIL ID:300MIN OD:900MM IEIPL MIN',//input field label
	name:'coil_300mm_900mm_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MM IEIPL MAX',//input field label
	name:'coil_300mm_900mm_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'COIL ID:300MIN OD:900MM REMARKS',//input field label
	name:'coil_300mm_900mm_remarks',//column name
	value:'',//default value
	default:true,
	},
	{
		label:'Next Due For third party validation',//input field label
		name:'next_due',//column name
		value:'Next Due For third party validation',//default value
		default:true,
		}
		,
	{
	label:'NEXT DUE UNIT',//input field label
	name:'next_due_unit_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE MIN SPEC',//input field label
	name:'next_due_min_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE MAX SPEC',//input field label
	name:'next_due_max_spec_org',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE SUP MIN',//input field label
	name:'next_due_sup_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE UNIT',//input field label
	name:'next_due_unit_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'NEXT DUE MIN SPEC',//input field label
	name:'next_due_min_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'NEXT DUE MAX SPEC',//input field label
	name:'next_due_max_spec_org',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'NEXT DUE SUP MIN',//input field label
	name:'next_due_sup_min',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'NEXT DUE SUP MAX',//input field label
	name:'next_due_sup_max',//column name
	value:'',//default value
	default:true,
	},
	{
	label:'NEXT DUE IEIPL MIN',//input field label
	name:'next_due_ieipl_min',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE IEIPL MAX',//input field label
	name:'next_due_ieipl_max',//column name
	value:'',//default value
	default:true,
	}
	,
	{
	label:'NEXT DUE REMARKS',//input field label
	name:'next_due_remarks',//column name
	value:'',//default value
	default:true,
	}
	],
	configHeaderFormat:[

		{
			label:'SUPPLIER',//input field label
			name:'supplier_name',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'PRODUCT NAME',//input field label
			name:'product_name',//column name
			value:'',//default value
			show:true,
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
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		{
			label:'EDS /Q /P #',//input field label
			name:'eds',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		
		{
			label:'DATE',//input field label
			name:'DATE',//column name
			value:moment().format("YYYY-MM-DD"),//default value
			show:true,
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
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		{
			label:'RECEIVED QTY',//input field label
			name:'received_qty',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'No Need to Map'

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
