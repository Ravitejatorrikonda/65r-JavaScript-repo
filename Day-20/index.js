/**
 * 
 * Fetch()
 * 
 * 
 */

// let options={
//     "method":"GET"
// }
// fetch("http://localhost:3000/data",options)
//     .then(res=>res.json())
//     .then(data=>console.log(data))

// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"Apllication/json"
//     },
//     "body":JSON.stringify(
//         {
//         "id":"5",
//         "name":"Donkey"
//     }
//     )
// }

// fetch("http://localhost:3000/data",options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.statusText);
        
//     }else{
//         console.log("Something went wrong");
        
//     }
// }).catch(data=>console.log(data))




fetch("http://localhost:3000/data/4",{
    "method":"PUT",
    "headers":{
        "Content-Type":"applicatio/json"
    },
    "body":JSON.stringify({
          "id":"7",
       
    })
}).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText);
        
    }else{
        console.log("something went wrong");
        
    }
}).catch(data=>console.log(data))