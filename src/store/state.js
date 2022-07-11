/*eslint-disable*/
const state = {
 bgColor:'#ff0000',
	control:{
		isNavbarHidden:false
	}
	,

report:{

qasForm1:[
	{
		text:'Supplier Name',
		value:'supplier_name'

	}	,
	{
		text:'invoice_no',
		value:'invoice_no'

	},	{
		text:'invoice_date',
		value:'invoice_date'

	},	{
		text:'invoice_qty',
		value:'invoice_qty'

	},	{
		text:'ir',
		value:'ir'

	},	{
		text:'grn_no',
		value:'grn_no'

	},	{
		text:'grn_date',
		value:'grn_date'

	},	{
		text:'eds',
		value:'eds'

	},	{
		text:'rm',
		value:'rm'

	},	{
		text:'received_qty',
		value:'received_qty'

	},	{
		text:'product_name',
		value:'product_name'

	}
	,	{
		text:'form_format',
		value:'form_format'

	}
	,	{
		text:'remarks',
		value:'remarks'

	}
	,	{
		text:'status',
		value:'status'

	}
	,
	{
		text:'User Type',
		value:'roletype'

	},
		{
		text:'approved_by',
		value:'approved_by'

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






interplex:{
	currentBranch:'',
	qasForm1:[],//test
	qasForm2:[],//test
    user:{
		id:'',
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
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'WIDTH MIN',//input field label
			name:'width_min_spec_org',//column name
			value:'2',//default value
			show:true,
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
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'WIDTH SUP ONE',//input field label
			name:'width_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'width_min_spec_org <= width_sup_one and width_sup_one <= width_max_spec_org' 
		},
		{
			label:'WIDTH SUP TWO',//input field label
			name:'width_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'WIDTH IELPL ONE',//input field label
			name:'width_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'WIDTH IELPL TWO',//input field label
			name:'width_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'WIDTH REMARKS',//input field label
			name:'width_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS UNIT',//input field label
			name:'thickness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS MIN SPEC',//input field label
			name:'thickness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS MAX SPEC',//input field label
			name:'thickness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS SUP ONE',//input field label
			name:'thickness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS SUP TWO',//input field label
			name:'thickness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS IELPL ONE',//input field label
			name:'thickness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS IELPL TWO',//input field label
			name:'thickness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'THICKNESS REMARKS',//input field label
			name:'thickness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNESS UNIT',//input field label
			name:'hardness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNESS MIN SPEC',//input field label
			name:'hardness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNEWSS MAX SPEC',//input field label
			name:'hardness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNESS SUP ONE',//input field label
			name:'hardness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNEWSS SUP TWO',//input field label
			name:'hardness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:'' 
		},
		{
			label:'HARDNESS IELPL ONE',//input field label
			name:'hardness_ielpl_one',//column name
			value:'',//default value
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			show:true,
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
			label:'Width ',//input field label
			name:'width',//column name
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
	masterUsers:[
        {
			id:1,
			name:'operator',
            branch:'',
            roletype:'operator',
            username:'operator',
            password:'operator',
            email:'',
            phone:'',
             address:'',
             status:'accepted'

        },
        {
			id:2,
            name:'approver',
            branch:'',
            roletype:'approver',
            username:'approver',
            password:'approver',
            email:'',
            phone:'',
             address:'',
             status:'accepted'

        },
        
        {
			id:3,
            name:'admin',
            branch:'',
            roletype:'admin',
            username:'admin',
            password:'admin',
            email:'',
            phone:'',
             address:'',
             status:'accepted'

        }
    ],
	masterUploadTypes:[],
	masterHeaderTypes:[],
	qualityAssuranceFormOne:[],
	qualityAssuranceFormTwo:[],
	
	

}


};





export default state;
