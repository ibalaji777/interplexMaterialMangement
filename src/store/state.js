/*eslint-disable*/
import moment from 'moment'
const state = {
 bgColor:'#ff0000',
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
			label:'ELOGATION UNIT',//input field label
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
			label:'ELONGTATION SUP TWO',//input field label
			name:'elongation_sup_two',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
	rule:'',
	default:true,
	note:'' 
		}
		,
		{
			label:'ELONGATION IELPL ONE',//input field label
			name:'elongation_ielpl_one',//column name
			value:'',//default value
			show:true,disable:false,validationStatus:false,
			headerMap:'',  validation:false,
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
		   validation:false,
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
