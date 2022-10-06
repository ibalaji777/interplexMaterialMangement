/*eslint-disable*/
import _  from 'lodash'
import * as config from '../lib/config.js'
import store from '../store/index.js' 
import * as core from '../lib/core.js'
import moment from 'moment'
import * as defaults from './defaults'
export  function printData(invoice_){
    var invoice=_.cloneDeep(invoice_)

var tickIcon= defaults.ticketIcon

var status=invoice.qasFormOne.status
var form_format=invoice.qasFormOne.form_format;
var remarks=invoice.qasFormOne.remarks;
    console.log("iinvoice data")
    console.log(invoice)
var observation_format_object={};

var skiplevel_status=invoice.qasFormOne.skiplevel_status
var date=moment(invoice.qasFormOne.date).format(store.state.dateFormat)
var sk_index=invoice.qasFormOne.sk_index
var sk_order=invoice.qasFormOne.sk_order
var qasFormOne=invoice.qasFormOne
var headerFormFill={}

// console.log("observation header print view")
// console.log(core.observationTableHeader($vm.invoice.qasFormOne.observation_format,$vm.invoice.qasFormOne.observation_header_print_view))
var setSavedValues=core.setObservationFormat(invoice.qasFormOne.observation_format,invoice.qasFormOne.qas_form_one_values)
var renderQas1Header=core.observationTableHeader(setSavedValues,invoice.qasFormOne.observation_header_print_view)

// var renderQas1Body=core.observationTableBody(invoice.qasFormOne.table_header_format,setSavedValues,invoice.qasFormOne.observation_print_view)

var renderQas1Body=core.observationTableBodyOrder(invoice.qasFormOne.table_header_format,setSavedValues,invoice.qasFormOne.observation_print_view)

// var renderQas1BodyOrder=core.observationTableBodyOrder(invoice.qasFormOne.table_header_format,setSavedValues,invoice.qasFormOne.observation_print_view)


// console.log("renderbody config file",invoice.qasFormOne.table_header_format,setSavedValues,invoice.qasFormOne.observation_print_view)
// console.log("++++renderQas1Body+++++")
// console.log(renderQas1Body)
// console.log(renderQas1BodyOrder)
// var setSavedValues=core.setObservationFormat(invoice.qasFormOne.observation_format,invoice.qasFormOne.qas_form_one_values)

var renderQas2Header=core.observationTableHeader(invoice.qasFormOne.observation2_format,invoice.qasFormOne.observation2_header_print_view)
var renderQas2Body=core.observation2TableBody(invoice.qasFormOne.observation2_format,invoice.qasFormOne.observation2_print_view,invoice.qasFormTwo)

// console.log("renderQas1Body_______",renderQas1Body)

var observation_print_view_format=core.getObservationPrintView(invoice.qasFormOne.observation_print_view)


//  _.map(invoice.qasFormOne.observation_format,(item)=>{
//     observation_format_object[item.name]=item.value||''
// })

var gallery=_.map(_.filter(invoice.gallery,(x)=>x.file_type=='image'),(item)=>{
     item['src']=config.getApi()+'/uploads/'+item.full_name;
    return item;
})

_.map(invoice.qasFormOne.header_format,(view)=>{
    headerFormFill[view.name]=view.value
})

// console.log("observation_format_object")

// console.log(observation_format_object)
var qasFormOneFill=core.qasFormOneFill(observation_print_view_format,invoice.qasFormOne.observation_format)
var approver_name=''
var operator_name='';
if(invoice.qasFormOne.operator_name!=''&&invoice.qasFormOne.operator_name!==null)
{
    operator_name=invoice.qasFormOne.operator_name
}


if(invoice.qasFormOne.approver_name!=''&&invoice.qasFormOne.approver_name!==null)
{
    approver_name=invoice.qasFormOne.approver_name
}
    // =_.map(observation_print_view_format,(view)=>{
// console.log("view.min_spec",view.min_spec,observation_format_object[view.min_spec])
//     var object={
//  desc:view.desc,
//  unit:observation_format_object[view.unit]||'',
//   min_spec:observation_format_object[view.min_spec]||'',
//  max_spec:observation_format_object[view.max_spec]|'',
//  sup_one:observation_format_object[view.sup_one]||'',
//  sup_two:observation_format_object[view.sup_two]||'',
//  ielpt_one:observation_format_object[view.ielpt_one]||'',
//  ielpt_two:observation_format_object[view.ielpt_two]||'',
//  remarks:observation_format_object[view.remarks]||'',

// }
// return object;

// })

var qasFormTwoFill=invoice.qasFormTwo||[];




return {
    logo:defaults.logo,
    qasFormOne,
    tickIcon,
status,
form_format,
remarks,
    renderQas1Header,
    renderQas1Body,
    renderQas2Header,
    renderQas2Body,
    headerFormFill,
    qasFormOneFill,
    qasFormTwoFill,
    operator_name,

    approver_name,
    gallery,
    skiplevel_status,
    sk_index,
    sk_order,
    invoice,
    date


}



}


export function barcodeLabel(invoice){
var prepareData={};

prepareData['invoice_no']=invoice.qasFormOne.invoice_no||''
prepareData['invoice_date']=invoice.qasFormOne.invoice_date||''
prepareData['invoice_qty']=invoice.qasFormOne.invoice_qty||''
prepareData['ir']=invoice.qasFormOne.ir||''
prepareData['grn_no']=invoice.qasFormOne.grn_no||''
prepareData['grn_date']=invoice.qasFormOne.grn_date||''
prepareData['rmcode']=invoice.qasFormOne.rmcode||''
prepareData['eds']=invoice.qasFormOne.eds||''
prepareData['rm']=invoice.qasFormOne.rm||''
prepareData['product_name']=invoice.qasFormOne.product_name||''
prepareData['form_format']=invoice.qasFormOne.form_format||''
prepareData['duedate']=invoice.qasFormOne.duedate||''
prepareData['status']=invoice.qasFormOne.status||''
prepareData['approved_by']=invoice.qasFormOne.approved_by||''
prepareData['skiplevel_status']=invoice.qasFormOne.skiplevel_status||''
prepareData['batch']=invoice.qasFormOne.batch||''

return prepareData;
}

export function template($vm){

return{
html:$vm.$store.state.interplex.printConfig.html,
css:$vm.$store.state.interplex.printConfig.css,
}
}