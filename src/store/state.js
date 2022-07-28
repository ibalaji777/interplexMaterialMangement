/*eslint-disable*/
import moment from 'moment'
const state = {
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
		sup_one:'',
		sup_two:'',
		ielpt_one:'',
		ielpt_two:'',
		remarks:'',
		
		}
	
},


interplex:{
	masterFileTypes:[],
	currentBranch:'',
	currentRoleType:'',
	qasForm1:[],//test
	qasForm2:[],//test
    observation_print_view_format:[//using
		{
			no:'',
			desc:'width',
			unit:'width_unit_org',
			min_spec:'width_min_spec_org',
			max_spec:'width_max_spec_org',
			sup_one:'width_sup_one',
			sup_two:'width_sup_two',
			ielpt_one:'width_ielpl_one',
			ielpt_two:'width_ielpl_two',
			remarks:'',
			
			},
			{
				no:'',
				desc:'thickness',
				unit:'thickness_unit_org',
				min_spec:'thickness_min_spec_org',
				max_spec:'thickness_max_spec_org',
				sup_one:'thickness_sup_one',
				sup_two:'thickness_sup_two',
				ielpt_one:'thickness_ielpl_one',
				ielpt_two:'thickness_ielpl_two',
				remarks:'',
				
				},
				{
					no:'',
					desc:'hardness',
					unit:'hardness_unit_org',
					min_spec:'hardness_min_spec_org',
					max_spec:'hardness_max_spec_org',
					sup_one:'hardness_sup_one',
					sup_two:'hardness_sup_two',
					ielpt_one:'hardness_ielpl_one',
					ielpt_two:'hardness_ielpl_two',
					remarks:'',
					
					},
					{
						no:'',
						desc:'elongation',
						unit:'elongation_unit_org',
						min_spec:'elongation_min_spec_org',
						max_spec:'elongation_max_spec_org',
						sup_one:'elongation_sup_one',
						sup_two:'elongation_sup_two',
						ielpt_one:'elongation_ielpl_one',
						ielpt_two:'elongation_ielpl_two',
						remarks:'',
						
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
	configProductsFormat:[

		{
			label:'WIDTH UNIT',//input field label
			name:'width_unit_org',//column name
			value:'',//default value
			show:true,
			disable:false,validationStatus:false,
			
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'WIDTH MIN',//input field label
			name:'width_min_spec_org',//column name
			value:'2',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'', 
			 validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'WIDTH MAX',//input field label
			name:'width_max_spec_org',//column name
			value:'5',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			// width_min_spec_org <= width_sup_one and width_sup_one <= width_max_spec_org
			label:'WIDTH SUP ONE',//input field label
			name:'width_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'' 
		},
		{
			label:'WIDTH SUP TWO',//input field label
			name:'width_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'WIDTH IELPL ONE',//input field label
			name:'width_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'WIDTH IELPL TWO',//input field label
			name:'width_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'WIDTH REMARKS',//input field label
			name:'width_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS UNIT',//input field label
			name:'thickness_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS MIN SPEC',//input field label
			name:'thickness_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS MAX SPEC',//input field label
			name:'thickness_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS SUP ONE',//input field label
			name:'thickness_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS SUP TWO',//input field label
			name:'thickness_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS IELPL ONE',//input field label
			name:'thickness_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS IELPL TWO',//input field label
			name:'thickness_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'THICKNESS REMARKS',//input field label
			name:'thickness_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNESS UNIT',//input field label
			name:'hardness_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNESS MIN SPEC',//input field label
			name:'hardness_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNEWSS MAX SPEC',//input field label
			name:'hardness_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNESS SUP ONE',//input field label
			name:'hardness_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNEWSS SUP TWO',//input field label
			name:'hardness_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		},
		{
			label:'HARDNESS IELPL ONE',//input field label
			name:'hardness_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'HARNDESS IELPL TWO',//input field label
			name:'hardness_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'HARDNESS REMARKS',//input field label
			name:'hardness_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION UNIT',//input field label
			name:'elongation_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION MIN SPEC',//input field label
			name:'elongation_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION MAX SPEC',//input field label
			name:'elongation_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION SUP ONE',//input field label
			name:'elongation_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION UNIT',//input field label
			name:'elongation_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'ELONGATION MIN SPEC',//input field label
			name:'elongation_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'ELONGATION MAX SPEC',//input field label
			name:'elongation_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'ELONGATION SUP ONE',//input field label
			name:'elongation_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'ELONGATION SUP TWO',//input field label
			name:'elongation_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'ELONGATION IELPL ONE',//input field label
			name:'elongation_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'ELONGATION IELPL TWO',//input field label
			name:'elongation_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'ELONGATION REMARKS',//input field label
			name:'elongation_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR UNIT',//input field label
			name:'tensile_str_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR MIN SPEC',//input field label
			name:'tensile_str_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR MAX SPEC',//input field label
			name:'tensile_str_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR SUP ONE',//input field label
			name:'tensile_str_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR UNIT',//input field label
			name:'tensile_str_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR MIN SPEC',//input field label
			name:'tensile_str_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR MAX SPEC',//input field label
			name:'tensile_str_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR SUP ONE',//input field label
			name:'tensile_str_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR SUP TWO',//input field label
			name:'tensile_str_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'TENSILE STR IELPL ONE',//input field label
			name:'tensile_str_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR IELPL TWO',//input field label
			name:'tensile_str_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'TENSILE STR REMARKS',//input field label
			name:'tensile_str_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR UNIT',//input field label
			name:'yield_str_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR MIN SPEC',//input field label
			name:'yield_str_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR MAX SPEC',//input field label
			name:'yield_str_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR SUP ONE',//input field label
			name:'yield_str_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR UNIT',//input field label
			name:'yield_str_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR MIN SPEC',//input field label
			name:'yield_str_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR MAX SPEC',//input field label
			name:'yield_str_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR SUP ONE',//input field label
			name:'yield_str_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR SUP TWO',//input field label
			name:'yield_str_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'YEILD STR IELPL ONE',//input field label
			name:'yield_str_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR IELPL TWO',//input field label
			name:'yield_str_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'YEILD STR REMARKS',//input field label
			name:'yield_str_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P UNIT',//input field label
			name:'cu_sn_p_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P MIN SPEC',//input field label
			name:'cu_sn_p_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P MAX SPEC',//input field label
			name:'cu_sn_p_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P SUP ONE',//input field label
			name:'cu_sn_p_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P UNIT',//input field label
			name:'cu_sn_p_unit_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P MIN SPEC',//input field label
			name:'cu_sn_p_min_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P MAX SPEC',//input field label
			name:'cu_sn_p_max_spec_org',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P SUP ONE',//input field label
			name:'cu_sn_p_sup_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P SUP TWO',//input field label
			name:'cu_sn_p_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		},
		{
			label:'CU + SN + P IELPL ONE',//input field label
			name:'cu_sn_p_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P IELPL TWO',//input field label
			name:'cu_sn_p_ielpl_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:true,
		rule:'',
		default:true,
		note:'' 
		}
		,
		{
			label:'CU + SN + P REMARKS',//input field label
			name:'cu_sn_p_remarks',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
		rule:'',
		default:true,
		note:'' 
		},
		{
    label:'pb UNIT',//input field label
    name:'pb_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb MIN SPEC',//input field label
    name:'pb_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb MAX SPEC',//input field label
    name:'pb_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb SUP ONE',//input field label
    name:'pb_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb UNIT',//input field label
    name:'pb_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'pb MIN SPEC',//input field label
    name:'pb_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'pb MAX SPEC',//input field label
    name:'pb_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'pb SUP ONE',//input field label
    name:'pb_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'pb SUP TWO',//input field label
    name:'pb_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'pb IELPL ONE',//input field label
    name:'pb_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb IELPL TWO',//input field label
    name:'pb_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'pb REMARKS',//input field label
    name:'pb_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PB UNIT',//input field label
    name:'pb_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB MIN SPEC',//input field label
    name:'pb_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB MAX SPEC',//input field label
    name:'pb_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB SUP ONE',//input field label
    name:'pb_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB UNIT',//input field label
    name:'pb_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PB MIN SPEC',//input field label
    name:'pb_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PB MAX SPEC',//input field label
    name:'pb_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PB SUP ONE',//input field label
    name:'pb_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'PB SUP TWO',//input field label
    name:'pb_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'PB IELPL ONE',//input field label
    name:'pb_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB IELPL TWO',//input field label
    name:'pb_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PB REMARKS',//input field label
    name:'pb_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'FE UNIT',//input field label
    name:'fe_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE MIN SPEC',//input field label
    name:'fe_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE MAX SPEC',//input field label
    name:'fe_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE SUP ONE',//input field label
    name:'fe_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE UNIT',//input field label
    name:'fe_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'FE MIN SPEC',//input field label
    name:'fe_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'FE MAX SPEC',//input field label
    name:'fe_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'FE SUP ONE',//input field label
    name:'fe_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'FE SUP TWO',//input field label
    name:'fe_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'FE IELPL ONE',//input field label
    name:'fe_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE IELPL TWO',//input field label
    name:'fe_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'FE REMARKS',//input field label
    name:'fe_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SN UNIT',//input field label
    name:'sn_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN MIN SPEC',//input field label
    name:'sn_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN MAX SPEC',//input field label
    name:'sn_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN SUP ONE',//input field label
    name:'sn_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN UNIT',//input field label
    name:'sn_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SN MIN SPEC',//input field label
    name:'sn_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SN MAX SPEC',//input field label
    name:'sn_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SN SUP ONE',//input field label
    name:'sn_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SN SUP TWO',//input field label
    name:'sn_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SN IELPL ONE',//input field label
    name:'sn_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN IELPL TWO',//input field label
    name:'sn_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SN REMARKS',//input field label
    name:'sn_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN UNIT',//input field label
    name:'zn_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN MIN SPEC',//input field label
    name:'zn_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN MAX SPEC',//input field label
    name:'zn_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN SUP ONE',//input field label
    name:'zn_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN UNIT',//input field label
    name:'zn_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN MIN SPEC',//input field label
    name:'zn_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN MAX SPEC',//input field label
    name:'zn_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN SUP ONE',//input field label
    name:'zn_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN SUP TWO',//input field label
    name:'zn_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'ZN IELPL ONE',//input field label
    name:'zn_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN IELPL TWO',//input field label
    name:'zn_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'ZN REMARKS',//input field label
    name:'zn_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'P UNIT',//input field label
    name:'p_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P MIN SPEC',//input field label
    name:'p_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P MAX SPEC',//input field label
    name:'p_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P SUP ONE',//input field label
    name:'p_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P UNIT',//input field label
    name:'p_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'P MIN SPEC',//input field label
    name:'p_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'P MAX SPEC',//input field label
    name:'p_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'P SUP ONE',//input field label
    name:'p_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'P SUP TWO',//input field label
    name:'p_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'P IELPL ONE',//input field label
    name:'p_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P IELPL TWO',//input field label
    name:'p_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'P REMARKS',//input field label
    name:'p_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS UNIT',//input field label
    name:'pre_plating_details_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS MIN SPEC',//input field label
    name:'pre_plating_details_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS MAX SPEC',//input field label
    name:'pre_plating_details_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS SUP ONE',//input field label
    name:'pre_plating_details_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS UNIT',//input field label
    name:'pre_plating_details_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS MIN SPEC',//input field label
    name:'pre_plating_details_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS MAX SPEC',//input field label
    name:'pre_plating_details_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS SUP ONE',//input field label
    name:'pre_plating_details_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS SUP TWO',//input field label
    name:'pre_plating_details_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'PRE PLATING DETAILS IELPL ONE',//input field label
    name:'pre_plating_details_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS IELPL TWO',//input field label
    name:'pre_plating_details_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'PRE PLATING DETAILS REMARKS',//input field label
    name:'pre_plating_details_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR UNIT',//input field label
    name:'elongation_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR MIN SPEC',//input field label
    name:'elongation_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR MAX SPEC',//input field label
    name:'elongation_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR SUP ONE',//input field label
    name:'elongation_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR UNIT',//input field label
    name:'elongation_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR MIN SPEC',//input field label
    name:'slitting_burr_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR MAX SPEC',//input field label
    name:'elongation_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR SUP ONE',//input field label
    name:'elongation_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR SUP TWO',//input field label
    name:'elongation_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SLITTING BURR IELPL ONE',//input field label
    name:'elongation_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR IELPL TWO',//input field label
    name:'elongation_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SLITTING BURR REMARKS',//input field label
    name:'elongation_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST UNIT',//input field label
    name:'twist_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST MIN SPEC',//input field label
    name:'twist_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST MAX SPEC',//input field label
    name:'twist_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST SUP ONE',//input field label
    name:'twist_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST UNIT',//input field label
    name:'twist_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST MIN SPEC',//input field label
    name:'twist_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST MAX SPEC',//input field label
    name:'twist_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST SUP ONE',//input field label
    name:'twist_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST SUP TWO',//input field label
    name:'twist_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'TWIST IELPL ONE',//input field label
    name:'twist_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST IELPL TWO',//input field label
    name:'twist_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'TWIST REMARKS',//input field label
    name:'twist_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER UNIT',//input field label
    name:'camber_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER MIN SPEC',//input field label
    name:'camber_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER MAX SPEC',//input field label
    name:'camber_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER SUP ONE',//input field label
    name:'camber_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER UNIT',//input field label
    name:'camber_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER MIN SPEC',//input field label
    name:'camber_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER MAX SPEC',//input field label
    name:'camber_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER SUP ONE',//input field label
    name:'camber_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER SUP TWO',//input field label
    name:'camber_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'CAMBER IELPL ONE',//input field label
    name:'camber_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER IELPL TWO',//input field label
    name:'camber_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'CAMBER REMARKS',//input field label
    name:'camber_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH UNIT',//input field label
    name:'surface_finish_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH MIN SPEC',//input field label
    name:'surface_finish_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH MAX SPEC',//input field label
    name:'surface_finish_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH SUP ONE',//input field label
    name:'surface_finish_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH UNIT',//input field label
    name:'surface_finish_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH MIN SPEC',//input field label
    name:'surface_finish_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH MAX SPEC',//input field label
    name:'surface_finish_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH SUP ONE',//input field label
    name:'surface_finish_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH SUP TWO',//input field label
    name:'surface_finish_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'SURFACE  FINISH IELPL ONE',//input field label
    name:'surface_finish_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH IELPL TWO',//input field label
    name:'surface_finish_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'SURFACE  FINISH REMARKS',//input field label
    name:'surface_finish_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT UNIT',//input field label
    name:'ther_conduct_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT MIN SPEC',//input field label
    name:'ther_conduct_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT MAX SPEC',//input field label
    name:'ther_conduct_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT SUP ONE',//input field label
    name:'ther_conduct_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT UNIT',//input field label
    name:'ther_conduct_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT MIN SPEC',//input field label
    name:'ther_conduct_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT MAX SPEC',//input field label
    name:'ther_conduct_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT SUP ONE',//input field label
    name:'ther_conduct_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT SUP TWO',//input field label
    name:'ther_conduct_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'THER CONDUCT IELPL ONE',//input field label
    name:'ther_conduct_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT IELPL TWO',//input field label
    name:'ther_conduct_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'THER CONDUCT REMARKS',//input field label
    name:'ther_conduct_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY UNIT',//input field label
    name:'density_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY MIN SPEC',//input field label
    name:'density_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY MAX SPEC',//input field label
    name:'density_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY SUP ONE',//input field label
    name:'density_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY UNIT',//input field label
    name:'density_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY MIN SPEC',//input field label
    name:'density_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY MAX SPEC',//input field label
    name:'density_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY SUP ONE',//input field label
    name:'density_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY SUP TWO',//input field label
    name:'density_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'DENSITY IELPL ONE',//input field label
    name:'density_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY IELPL TWO',//input field label
    name:'density_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'DENSITY REMARKS',//input field label
    name:'density_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT UNIT',//input field label
    name:'coil_weight_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT MIN SPEC',//input field label
    name:'coil_weight_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT MAX SPEC',//input field label
    name:'coil_weight_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT SUP ONE',//input field label
    name:'coil_weight_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT UNIT',//input field label
    name:'coil_weight_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT MIN SPEC',//input field label
    name:'coil_weight_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT MAX SPEC',//input field label
    name:'coil_weight_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT SUP ONE',//input field label
    name:'coil_weight_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT SUP TWO',//input field label
    name:'coil_weight_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL WEIGHT IELPL ONE',//input field label
    name:'coil_weight_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT IELPL TWO',//input field label
    name:'coil_weight_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL WEIGHT REMARKS',//input field label
    name:'coil_weight_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM UNIT',//input field label
    name:'coil_300mm_900mm_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM MIN SPEC',//input field label
    name:'coil_300mm_900mm_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM MAX SPEC',//input field label
    name:'coil_300mm_900mm_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM SUP ONE',//input field label
    name:'coil_300mm_900mm_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM UNIT',//input field label
    name:'coil_300mm_900mm_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM MIN SPEC',//input field label
    name:'coil_300mm_900mm_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM MAX SPEC',//input field label
    name:'coil_300mm_900mm_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM SUP ONE',//input field label
    name:'coil_300mm_900mm_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM SUP TWO',//input field label
    name:'coil_300mm_900mm_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'COIL  ID:300MM OD:900MM IELPL ONE',//input field label
    name:'coil_300mm_900mm_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM IELPL TWO',//input field label
    name:'coil_300mm_900mm_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'COIL  ID:300MM OD:900MM REMARKS',//input field label
    name:'coil_300mm_900mm_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE UNIT',//input field label
    name:'next_due_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE MIN SPEC',//input field label
    name:'next_due_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE MAX SPEC',//input field label
    name:'next_due_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE SUP ONE',//input field label
    name:'next_due_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE UNIT',//input field label
    name:'next_due_unit_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE MIN SPEC',//input field label
    name:'next_due_min_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE MAX SPEC',//input field label
    name:'next_due_max_spec_org',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE SUP ONE',//input field label
    name:'next_due_sup_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE SUP TWO',//input field label
    name:'next_due_sup_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
},
{
    label:'NEXT DUE IELPL ONE',//input field label
    name:'next_due_ielpl_one',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE IELPL TWO',//input field label
    name:'next_due_ielpl_two',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:true,
rule:'',
default:true,
note:'' 
}
,
{
    label:'NEXT DUE REMARKS',//input field label
    name:'next_due_remarks',//column name
    value:'',//default value
    show:true,disable:false,validationStatus:false,
    headerMap:'',  validation:false,
rule:'',
default:true,
note:'' 
}
	],
	configHeaderFormat:[

		{
			label:'Supplier Name',//input field label
			name:'supplier_name',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'Product Name',//input field label
			name:'product_name',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
	

		{
			label:'Invoice No',//input field label
			name:'invoice_no',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'Invoice Date',//input field label
			name:'invoice_date',//column name
			value:'',//default value
			show:true,
			map:'DATE_EXT',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'Invoice Qty',//input field label
			name:'invoice_qty',//column name
			value:'',//default value
			show:true,
			map:'invoiceQty',
			mapFrom:'header',//header or product
			default:true,
			note:'No Need to Map'

		},
		{
			label:'ir',//input field label
			name:'ir',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'grn_no',//input field label
			name:'grn_no',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'grn_date',//input field label
			name:'grn_date',//column name
			value:'',//default value
			show:true,
			map:'LAST_GR_DATE_EXT',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'rmcode',//input field label
			name:'rmcode',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		{
			label:'eds',//input field label
			name:'eds',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		{
			label:'rm',//input field label
			name:'rm',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},		{
			label:'received_qty',//input field label
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
			label:'Width One',//input field label
			name:'width_one',//column name
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
			label:'Width Two',//input field label
			name:'width_two',//column name
			value:'',//default value
			show:true,
			map:'',
			mapFrom:'header',//header or product
			default:true,
			note:'',
			validation:false,
			rule:'',

		},		{
			label:'Thick One',//input field label
			name:'thick_one',//column name
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
			label:'Thick Two',//input field label
			name:'thick_two',//column name
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
			rule:'width_sup_one <= width_one <= width_sup_two',

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
