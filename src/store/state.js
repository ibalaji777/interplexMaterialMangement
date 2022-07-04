/*eslint-disable*/
const state = {
 bgColor:'#ff0000',
	control:{
		isNavbarHidden:false
	}
	,

report:{
branches:[
	{
		title:'Branch',
		value:'branch'

	},
	{
		title:'Description',
		value:'description'

	}
],
users:[
	{
		title:'Name',
		value:'name'

	},
	{
		title:'Branch',
		value:'branch'

	},
	{
		title:'Role',
		value:'roleType'

	},
	{
		title:'Username',
		value:'username'

	},
	{
		title:'Password',
		value:'password'

	},
	{
		title:'E-mail',
		value:'email'

	}
	,
	{
		title:'Phone',
		value:'phone'

	}
	,
	{
		title:'Address',
		value:'address'

	}
]


},






interplex:{
	currentBranch:'',
	productsFormat:[

		{
			label:'WIDTH UNIT',//input field label
			name:'width_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'WIDTH MIN',//input field label
			name:'width_min_spec_org',//column name
			value:'2',//default value
			show:true,
			headerMap:'', 
			 validation:false,
    rule:'' 
		},
		{
			label:'WIDTH MAX',//input field label
			name:'width_max_spec_org',//column name
			value:'5',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
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
    rule:'' 
		},
		{
			label:'WIDTH IELPL ONE',//input field label
			name:'width_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'WIDTH IELPL TWO',//input field label
			name:'width_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'WIDTH REMARKS',//input field label
			name:'width_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'THICKNESS UNIT',//input field label
			name:'thickness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'THICKNESS MIN SPEC',//input field label
			name:'thickness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'THICKNESS MAX SPEC',//input field label
			name:'thickness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'THICKNESS SUP ONE',//input field label
			name:'thickness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'THICKNESS SUP TWO',//input field label
			name:'thickness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'THICKNESS IELPL ONE',//input field label
			name:'thickness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'THICKNESS IELPL TWO',//input field label
			name:'thickness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'THICKNESS REMARKS',//input field label
			name:'thickness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'HARDNESS UNIT',//input field label
			name:'hardness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'HARDNESS MIN SPEC',//input field label
			name:'hardness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'HARDNEWSS MAX SPEC',//input field label
			name:'hardness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		},
		{
			label:'HARDNESS SUP ONE',//input field label
			name:'hardness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'HARDNEWSS SUP TWO',//input field label
			name:'hardness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		},
		{
			label:'HARDNESS IELPL ONE',//input field label
			name:'hardness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		}
		,
		{
			label:'HARNDESS IELPL TWO',//input field label
			name:'hardness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'' 
		}
		,
		{
			label:'HARDNESS REMARKS',//input field label
			name:'hardness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELOGATION UNIT',//input field label
			name:'elongation_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGATION MIN SPEC',//input field label
			name:'elongation_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGATION MAX SPEC',//input field label
			name:'elongation_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGATION SUP ONE',//input field label
			name:'elongation_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGTATION SUP TWO',//input field label
			name:'elongation_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGATION IELPL ONE',//input field label
			name:'elongation_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'' 
		}
		,
		{
			label:'ELONGATION IELPL TWO',//input field label
			name:'elongation_ielpl_two',//column name
			value:'',//default value
			show:true,
		   validation:false,
    rule:'' 
		}
	],
    branches:[
		{
		name:'Chennai',
		description:'',

	},
	{
		name:'Bangalore',
		description:'',

	}
],
	products:[],
	users:[],
	qualityAssurance:[],
	qualityAssuranceHeaderFormat:[

		{
			label:'product_name',//input field label
			name:'product_name',//column name
			value:'',//default value
			show:true,
		},
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },

		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },
		// {
		// 	label:'product_name',//input field label
		// 	name:'product_name',//column name
		// 	value:'',//default value
		// 	show:true,
		// },


	],


}


};





export default state;
