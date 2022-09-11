
/*eslint-disable*/
var i = 0;
var wsImpl ;
window.ws = '';

export function start($vm,callback){
    window.URL = window.URL || window.webkitURL;
    console.log("scanner app starting...")
    console.log("Loaded scanner to scan")
             wsImpl = window.WebSocket || window.MozWebSocket;
            window.ws = new wsImpl('ws://localhost:8181/');
        
     
        ws.onmessage = function(e){
            if (e.data instanceof Blob){
                i++;
                blobToBase64(e.data,(base64)=>{callback("base64",base64)})
            
            }
        };
        ws.onopen = function(){
        //  $vm.disableScanBtn=false
         callback("success")
         console.log("scanner working")
        };
        ws.onerror = function(e){
        callback("error")
            console.log("Scanner Plugin Missing")
            // $vm.disableScanBtn=true
        }

     


    


}
var blobToBase64 = function(blob, callback) {
    var reader = new FileReader();
    reader.onload = function() {
        var dataUrl = reader.result;
        var base64 = dataUrl.split(',')[1];
        callback(base64);
    };
    reader.readAsDataURL(blob);
};
export function openScanner($vm){
    console.log("open scanner triggered")
    
    try {
        ws.send("1100");
        
    } catch (error) {
        $vm.$alert("Please Check Your Sanner App Plugin and Reload If you do First time")
    }
}