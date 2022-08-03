

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
        