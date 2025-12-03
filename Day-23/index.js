/**
 * 
 * Array itarative methods:-
 * ---------------------------
 * 
 * sy:-
 * ---
 *       arrref.methodName()
 * 
 * there are diff types of methods:-
 * -----------------------------------
 * ->map    ->
 * ->Filter   -()
 * ->ForEach     ()
 * ->reduce        ()
 * ->reduceRight
 * ->some
 * ->find
 *
 * 
 * 
 */

// let arr=[1, 2, 3, 4, 5,undefined,undefined, ,]

// function print(){
//     console.log("Hello There")
// }

// arr.forEach(print);

// let arr=[1,2,3,4,5,undefined,undefined, , ,]
// for(i=1;i<=arr.length;i++){
//     console.log("Hello There");

// }

// for(i=1;i<=arr.length;i++){
//     console.log(i)
// }


// arr.forEach((value,index,arr)=>{console.log(value)})

// let arr=["html","css","js"]
// let newarr=[];
// arr.forEach(val=>newarr.push(val.toUpperCase()))
// console.log(newarr)


//     let arr=["HTML","css","js"]

//    let newarr= arr.map(val=> val.toUpperCase())
//    console.log(newarr);


// let arr = [1, 2, 3, 4, 5]
// o/p:-[1,4,9,16,25]

// let newarr = [];
// for (i = 0; i < arr.length; i++) {
//     newarr.push(arr[i] ** 2)
// }
// console.log(newarr);

// let newarr=arr.map(ele=>ele**2)
// console.log(newarr);


// let newarr=[]
// arr.forEach(ele=>newarr.push(ele ** 2))
// console.log(newarr)


// let arr=[1,2,3,4,5]

// o/p:-  [odd, even,odd, even,odd]


// let newarr=[];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newarr.push("even")
//     }else{
//         newarr.push("odd")
//     }
// }
// console.log(newarr);

// let newarr=arr.map(ele=>ele%2==0?"even":"odd")
// console.log(newarr);

/**
 * 
 * Filter method:-
 * ---------------
 * let arr=[1,2,3,4,5]
 * newarr=[2,4]
 * 
 * 
 */

let arr=[1,2,3,4,5];
let newarr=arr.filter(ele=>ele%2==0)
console.log(newarr);

// ->Research->reduce->reduceright














