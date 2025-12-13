/**
 * 
 * 
 * wrie a program to reverse a String in java script
 * 
 */
// let a="javascript";
// let res="";
// for(let i=a.length-1;i>=0;i--)
// {
//     res+=a[i];
// }
// console.log(res);

//  checking given words are Anagram or not

// function anagramCheck(a,b){
//     for(let i=0;i<a.length;i++){
//         let found=false;
//         for(let j=0;j<b.length;j++){    
//             if(a[i]==b[j]){
//                 found=true;
//                 break;
//             }
//         }
//         if(found==false){
//                return false
//             }
//     }
//      return true;
// }
// console.log(anagramCheck("listen","silent"));

//Finding largest element in an array,also finding sec largest or third largest
// function findMax(arr){
//     let first=arr[0]
//     let second=arr[0]
//     let third=arr[0]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>first){
//             third=second
//             second=first
//             first=arr[i]
//         }
//         if(arr[i]>second && arr[i]!==first){
//             third=second
//             second=arr[i]
//         }
//         if(arr[i]>third && arr[i]!==first && arr[i]!==second){
//                third=arr[i]
//         }
//     }
//     return third
// }
// let numbers=[1,2,3,4,5]
// console.log(findMax(numbers))


//Write a function to remove duplicates in an array and print resulted array

// function removeDuplicates(arr){
//     var arr1=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr1.includes(arr[i])){
//             continue;
//         }
//         arr1.push(arr[i])
//     }
//     return arr1;
// }

// console.log(removeDuplicates([1,3,2,4,3,5,5]));


// write a program to print fizz,buzz or fizzbuzz within the range of 1 to 20

// for(let i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
        
//     }
//     else if(i % 3==0){
//         console.log("Fizz");
        
//     }
//     else if(i%5==0){
//         console.log("Buzz");
        
//     }
//     else{
//         console.log(i);
        
//     }
// }




// write a program to print fibnocci series

var a=0;
var b=1;
var c=0;
for(i=1;i<10;i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c;
    
}