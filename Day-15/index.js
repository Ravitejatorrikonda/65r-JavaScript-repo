/**
 * 
 * 
 * 
 * 
 */


// console.log("Start");

// setTimeout(()=>{
// console.log("First");

// })
// for(i=1;i<=50000;i++){
//     console.log("i");

// }
// setTimeout(() => {
//     console.log("Second");

// });





// function sum(val, callback) {
//     callback(val+10)
// }


// function sub(val, callback) {
//     callback(val-5)
// }
// function mul(val, callback) {
//     callback(val*5)
// }
// function div(val, callback) {
//     callback(val/5)
// }







// sum(10, (sumVal) => {
//     // console.log(sumVal + 10)//20

//     sub(sumVal, (subVal) => {
//         // console.log(subVal - 5);//5

//         mul(subVal, (mulVal) => {
//             // console.log(mulVal * 2);//20
//             div(mulVal, (divVal) => {
//                 console.log(divVal / 2)
//             })
//         })

//     })
// }

// )




// sum(10,(sumval)=>{
//     sub(sumval,(subval)=>{
//         mul(subval,(mulval)=>{
//             div(mulval,(divval)=>{
//                 console.log(divval)
//             })
//         })
//     })
// })




// function sub(a,b){
//    console.log(a-b)
// }
// function mul(a,b){
//    console.log(a*b)
// }
// function div(a,b){
//  console.log(a/b)
// }
// sum(10,20)
// // sub(10,20)
// mul(2,5)
// div(10,5)


function addtocart(dispatch) {
    console.log("order placed");
    dispatch("dispatch success")

}
function shipping(placed) {
    console.log("shipping success");

    placed("order placed successfully")
}
addtocart((msg1) => {
    console.log(msg1);
    shipping(() => {
        console.log(msg2);

    })

})
