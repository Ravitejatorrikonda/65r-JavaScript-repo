/**
 * 
 * 
 * 
 */

// function one(a,b){
//     console.log("one");
//     return a+two(a,b);

// }
// function two(a,b){
//     console.log("two");
//     return a+b;

// }
// // console.log(two(12,14), one(12,14));

// function funOne(a,b,c){
//     console.log("funOne");
//     return funTwo(a+b+c,c)


// }
// function funTwo(a,b){
//    console.log("funTwo");
//    return a+b;


// }

// console.log(funOne(10,20,30));


/**
 * 
 * 
 * function defination is always stored in as function name;
 * 
 * CallBacks in Java Script:-
 * ---------------------------
 * a function definition is passed as a argument to the another function is known as callback function
 * 
 * it can be mainly perfomed in asynchronous operations and promises and events
 * 
 * 
 * sy:-
 * 
 * 
 * function funName1(){
 * //statements
 * 
 * }
 * function funName2(){
 * 
 * }
 * funName1(funName2)
 * 
 */

// function sayHi(callback){
//     console.log(" say hi");
//     console.log(callback);
//     callback();


// }
// function sayHello(){
//     console.log("say Hello");

// }
// sayHi(sayHello)
// sayHello()

// function one(callback){
//     console.log("one");
//     console.log(callback);
//     callback(10,10);

// }
// function two(a,b){
//     console.log("two");
//     console.log(a+b);


// }
// one(two)

// function x(callback1, callback2) {
//     console.log("x function");
//     callback1(10,20);


// }
// function y(a, b) {
//     console.log("y function");
//     console.log(a + b);


// }
// function z(b, a) {
//     console.log("z function");
//     console.log(b + a);


// }
// x(y, z)

// // Note:-
// A callback function in the form of named funtions,anonymous functions and arrow functions


function sum1(callback1,callback2){
    console.log(callback1(10+20, 10));
    
    callback2(20+10,10);
    
}
function sum2(a,b){
    console.log(a+b);//40
    return a+b;
    
}
function sum3(b,a){
    console.log(b);//
    
}
sum1(sum2,sum3)
//40
//30

