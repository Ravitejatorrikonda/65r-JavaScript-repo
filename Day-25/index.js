/**
 * 
 * Error handling:-
 * ---------------
 * try,catch,throw, finally
 * 
 * 
 */
// try {
//     var a=10;
//     console.log(x+a)
    
// } catch(res){
//     console.error(res.message)
// }
// console.log("completed")

// function x(val1,val2){
// try {
//     if(val2===0){
//         throw "this is not possible"
//     }
//     else{
//         console.log(val1/val2)
//     }
// } catch (error) {
//     console.error(error)
// }

// }
// // x(10,0)
// var x=function(res){
//     // console.log("hello there")
//     return "completed";
// }

// try {
//     x();
    
// } catch (error) {
//     console.error(error)
// }

// fetch("https://fakestoreapi.com/product")
// .then(res=>{
//     try {
//         if(!res.ok){
//             throw new Error("something went wrong in this api")
//         }
//         return res.json();
//     } catch (error) {
//         console.error(error.message)
//     }
// }).then(data=>console.log(data)).catch(data1=>console.error(data1))


async function getdata() {
    try {
        let result=await fetch("https://fakestoreapi.com/product")
       if(!result.ok){
        throw new Error("Api Not getting")
       }
       
        let data=await result.json();
        console.log(data);

    } catch (error) {
        console.error(error.message)
    }
    
}
getdata()