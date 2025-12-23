/**
 * 
 * JS:-
 * ---
 * history of JS
 * fetures of JS
 * v8 engine
 * GEC
 * HOSTING
 * FEC
 * datatypes
 * variables
 * operators
 * conditional statements
 * Loops
 * Functions
 * named fun
 * callback
 * anonymous
 * arrow fun
 * first class
 * higher order
 * lower order fun
 * scopes
 * callback hell
 * promises
 * promise chaing
 * fetch
 * JSON
 * HTTPs methods:- get post put patch DELETE 
 * array methods
 * itarative methods
 * error handling
 * async and await
 * DOM:-
 *   DOUCMENT
 * 
 * BOM:-(Browser object model)
 * ------------------------------
 * 
 * 
 * 
 */

// let resultwindow;
// function openWindow() {
//     resultwindow = window.open("", "", "width=500px,height=500px")

//     resultwindow.document.write(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//     <style>
//     h3{
//     color:red;
//     }
//     </style>
//     </head>
//     <body>
//     <h3>Open Window</h3>
//     </body>

//     </html>
//     `)


//     // window.setTimeout(()=>{
//     //       resultwindow.close()
//     // },5000)
// }
// function closeWindow() {
//     let flag=window.confirm(resultwindow)
//     if(flag){
//         resultwindow.close()
//     }else{
//         alert("Thankyou")
//     }
// }

// window.setInterval(()=>{
//     window.location.reload()
// },1000)

// let result = null;
// function startLoop() {
//     let i = 1
//    result=window.setInterval(()=>{
//       let data= new Date()
//       console.log(data.getHours())
//     },1000)
// }

// function stopLoop(){
//     window.clearInterval(result)
// }

// localStorage.setItem("name","sujatha")
// alert(localStorage.getItem("name"))

function saveData(){
    let input=document.querySelector("input")
    // console.log(input.value)
    localStorage.setItem("name",input.value)
}