/**
 * 
 * 
 * 
 */

// function sum(val, callback) {
//     callback(val + 10);

// }
// function sub(val, callback) {

//         callback(val-5)


// }
// function mul(val, callback) {
//     callback(val * 5)
// }
// function div(val, callback) {
//     callback(val / 2)
// }
// sum(10, (sumres) => {

//     sub(sumres, (subres) => {

//         mul(subres, (mulres) => {

//             div(mulres, (divres) => {
//                 console.log(divres);

//             })

//         })
//     })
// })

// function sum(val, callback) {
//     console.log("function started");

//     setTimeout(() => {
//         callback(val + 20);
//     },3000)
//     console.log("function ended");

// }
// sum(10, (sumres) => {
//     console.log(sumres)
// })




// function orderPlaced(orderId, callback) {
//     callback(`order Id ${orderId} placed`)
// }
// function shipping(orderId, callback) {
//    setTimeout(()=>{
//      callback(`order Id ${orderId} shipped`)
//    },3000)
        
// }
// function dispatch(orderId, callback) {
//     callback(`order Id ${orderId} dispatched successfully`)
// }
// function deliver(orderId, callback) {
//     callback(`order Id ${orderId} deliver successfully`)
// }





// orderPlaced(1234, (orderres) => {
//     console.log(orderres);
//     shipping(1234, (shipres) => {
//         console.log(shipres);
//         dispatch(1234, (disptachres) => {
//             console.log(disptachres);
//             deliver(1234, (delres) => {
//                 console.log(delres);

//             })
//         })

//     })

// })

/**
 * Promisess in javascript:-
 * --------------------------
 * promises are a state of behaviour, to perform success state and failure state
 * ->promises are used to perform a asynnchronus operations
 * ->to overcome a callback hell 
 * 
 * 
 * sy:
 * 
 * 
 * variable refvariable=new Promise(callback); 
 */

// let promise1=new Promise((reject,resolve)=>{
//    reject("success")
// })
// promise1.then((mes)=>console.log(mes)).catch((mes)=>console.log(mes))


// function getData(){
//     return  new Promise((resolve,reject)=>{
//        reject("icecream");
//     })
// }
// getData().then(()=>console.log("success")).catch(()=>console.log("failure"))

// function logA(){console.log("A");}
// function logB(){
//     return new
// }



// Promise.resolve("success message").then((mes)=>console.log(mes))
// Promise.reject("failure Message").catch((mes)=>console.log(mes))

// function logA(){console.log("A")}
// setTimeout(()=>{
//     console.log("SetTimeout");
    
// },1000)
// Promise.resolve("promise").then((mes)=>console.log(mes))
// function logB(){console.log("B")}
// logA()
// logB()


function sum(val){
    return new Promise((resolve)=>{
               resolve(val+10);
    })
}
sum(10).then((sumres)=>console.log(sumres))