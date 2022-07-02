/*eslint-disable*/
const state = {
 bgColor:'#ff0000',
	control:{
		isNavbarHidden:false
	}
	,
	productsFormat:[

		{
			label:'product_name',//input field label
			name:'product_name',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'supplier_name',//input field label
			name:'supplier_name',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'part_num',//input field label
			name:'part_num',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'sap_num_new',//input field label
			name:'sap_num_new',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'sap_num_old',//input field label
			name:'sap_num_old',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'batch',//input field label
			name:'batch',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'units',//input field label
			name:'units',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'grn_num',//input field label
			name:'grn_num',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'material_num',//input field label
			name:'material_num',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_unit_org',//input field label
			name:'width_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_min_spec_org',//input field label
			name:'width_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_max_spec_org',//input field label
			name:'width_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_sup_one',//input field label
			name:'width_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_sup_two',//input field label
			name:'width_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_ielpl_one',//input field label
			name:'width_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_ielpl_two',//input field label
			name:'width_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'width_remarks',//input field label
			name:'width_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_unit_org',//input field label
			name:'thickness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_min_spec_org',//input field label
			name:'thickness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_max_spec_org',//input field label
			name:'thickness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_sup_one',//input field label
			name:'thickness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_sup_two',//input field label
			name:'thickness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_ielpl_one',//input field label
			name:'thickness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_ielpl_two',//input field label
			name:'thickness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'thickness_remarks',//input field label
			name:'thickness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_unit_org',//input field label
			name:'hardness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_min_spec_org',//input field label
			name:'hardness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_max_spec_org',//input field label
			name:'hardness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_sup_one',//input field label
			name:'hardness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_sup_two',//input field label
			name:'hardness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		},
		{
			label:'hardness_ielpl_one',//input field label
			name:'hardness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'hardness_ielpl_two',//input field label
			name:'hardness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'hardness_remarks',//input field label
			name:'hardness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_unit_org',//input field label
			name:'elongation_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_min_spec_org',//input field label
			name:'elongation_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_max_spec_org',//input field label
			name:'elongation_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_sup_one',//input field label
			name:'elongation_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_sup_two',//input field label
			name:'elongation_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_ielpl_one',//input field label
			name:'elongation_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		,
		{
			label:'elongation_ielpl_two',//input field label
			name:'elongation_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',//map name from header file put into 
		}
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }
		// ,
		// {
		// 	label:'hardness_ielpl_one',//input field label
		// 	name:'hardness_ielpl_one',//column name
		// 	value:'',//default value
		// 	show:true,
		// 	headerMap:'',//map name from header file put into 
		// }


	],




};





export default state;
