/**
 * 
 * What is promise?
 * ---------------
 * promises is used to perform asynchronus operation
 * 
 * 
 * 
 * 
//  */
// let promise1=new Promise((resolve,reject)=>{
//     //   resolve("success");
//     reject("failure")
// })
// promise1.then(res=>console.log(res)).catch(res=>console.warn(res))

// function data(){
//     return new Promise (resolve=>{
//         resolve("success")
//     })
// }
// data().then(res=>console.log(res))

// const URL="https://fakestoreapi.com/products";
// // console.log(fetch(URL))
// fetch(URL).then((res)=>{return res.json()}).then(data=>console.log(data))


const URL = "https://fakestoreapi.com/products"

fetch(URL).then((res) => res.json())
           .then(data => {
            for(i=1; i<=data.length;i++){
                console.log(data[i].rating.rate)
            }
           })



