/*eslint-disable*/
import _  from 'lodash'
import * as config from '../lib/config.js'
import store from '../store/index.js' 
import * as core from '../lib/core.js'
import moment from 'moment'
export  function printData(invoice_){
    var invoice=_.cloneDeep(invoice_)

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
var renderQas1Body=core.observationTableBody(invoice.qasFormOne.table_header_format,setSavedValues,invoice.qasFormOne.observation_print_view)

// var setSavedValues=core.setObservationFormat(invoice.qasFormOne.observation_format,invoice.qasFormOne.qas_form_one_values)

var renderQas2Header=core.observationTableHeader(invoice.qasFormOne.observation2_format,invoice.qasFormOne.observation2_header_print_view)
var renderQas2Body=core.observation2TableBody(invoice.qasFormOne.observation2_format,invoice.qasFormOne.observation2_print_view,invoice.qasFormTwo)

// console.log("renderQas1Body_______",renderQas1Body)

var observation_print_view_format=core.getObservationPrintView(invoice.qasFormOne.observation_print_view)


//  _.map(invoice.qasFormOne.observation_format,(item)=>{
//     observation_format_object[item.name]=item.value||''
// })

var gallery=_.map(invoice.gallery,(item)=>{
     item['src']=config.api+'/uploads/'+item.full_name;
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
    logo:'data:image/png;base64,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',
    qasFormOne,

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