/**
 * 
 * Fetch methods:-
 * Get POST PUT PATCH DELETE
 * 
 * 
 * 
 * 
 */

// fetch("http://localhost:5000/data/3",{"method":"DELETE"})
// .then(
//     res=>{
//         if(res.ok){
//             console.log(res.status,res.statusText);

//         }else{
//             console.log("Data not Deleted");

//         }
//     }
// ).catch(data=>console.log(data))

// let options = {
//     "method": "GET"
// }

// fetch("http://localhost:5000/data", options)
//     .then(res => res.json())
//     .then(res => {
//         for (i = 0; i < res.length; i++) {
//             fetch(`http://localhost:5000/data/${res[i].id}`, { "method": "DELETE" })
//                 .then(data => {
//                     if (data.ok) {
//                         console.log(data.status, data.statusText);

//                     } else {
//                         console.log("Data not Deleted");

//                     }
//                 }).catch(res => console.log(res))

//         }

//     })





let data = [
    {
        "id": "1",
        "name": "suresh"
    },
    {
        "id": "2",
        "name": "Rajesh"
    },
    {
        "id": "3",
        "name": "ramesh"
    },
    {
        "id": "4",
        "name": "Mahesh"
    }
]

let options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
}

for (i = 0; i < data.length; i++) {
    let obj = data[i]


    options.body=JSON.stringify(obj)
    fetch("http://localhost:5000/data",options)
    .then(res=>{
        if(res.ok){
            console.log(res.status,res.statusText);
            
        }else{
            console.log("Data Not Posted");
            
        }
    }).catch(data=>console.log(data))

}

/**
 * 
 * Delete all
 * post all
 * 
 */