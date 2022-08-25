
export const api="http://localhost:3333" 
// export const api="https://ab79-2402-3a80-133b-8b42-c41c-3a5e-a64d-aa0.in.ngrok.io"


export function getApi(){
    return "http://127.0.0.1:3333" 
    // return "http://10.91.11.66:5555" 
}

// export function getApi(){

// if(!localStorage.getItem("api")){
//     localStorage.setItem("api", "http://localhost:3333");

// }

//     return localStorage.getItem("api")|| "http://localhost:3333"
// }
// export function setApi(api){
//     localStorage.setItem("api", api);

// }