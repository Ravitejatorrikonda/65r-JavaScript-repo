/**
 * 
 * Async and Await:-
 * -------------------
 * asyn rturn the proimise object, It is a ES8 feture updated
 * 
 * 
 */

// function getData(){
//     return new Promise(resolve=>{resolve("success")})
// }
// // console.log(getData())
// getData().then(res=>console.log(res))


// async function getData(){
//     return "Hello There";
// }
// console.log(getData())
// getData().then(res=>console.log(res))

// console.log(Promise.resolve("hello").then(res=>console.log(res)))

// let promise1=new Promise(resolve=>{
//     resolve("success")
// })

// async function getData(){
//    let res= await promise1
//    console.log(res)

// }
// getData()
// getData().then(res=>console.log("success"))


// fetch("http://localhost:3000/Data")

// .then(res=>res.json())

// .then(data=>console.log(data))

async function getData() {
   let res= (await fetch("http://localhost:3000/Data"))
  let data=await res.json()
  console.log(data)
}
getData()