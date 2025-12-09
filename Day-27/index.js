/**
 * 
 * 
 * 
 * 
//  */

// let div1=document.createElement("div")
// div1.innerText="<i>Hello There 1</i>"
// document.body.appendChild(div1)



// let div2=document.createElement("div")
// div2.innerHTML="<i>Hello There 2</i>"
// document.body.appendChild(div2)


// let arr=["kali", "gopi", "sai"]
// let container=document.createElement("div")
// arr.forEach(val=>{
//     let p=document.createElement("p");
//     p.innerHTML=`
//    <h3>Name : ${val}</h3>
//     `
//    container.appendChild(p)
// })
// document.body.appendChild(container)

// let div=document.createElement("div")
// div.id="main"
// div.className="container"
// div.setAttribute("name","grid")
// console.log(div)


let arr=[{"id":"1","name":"ravi"},{"id":"2"},{"id":"3"},{"id":"4"}]

// let div=document.getElementById("main")
// arr.forEach(obj=>{
//   let p=document.createElement("p") 
   
//   p.innerHTML=`
//    <p>ID : ${obj.id}</p>
   
//    `
//    div.appendChild(p)
   

// })

// let container=document.getElementById("main")
// console.log(container)



// arr.forEach(obj=>{
//     let container=document.createElement("div")
//     container.className="container"
//     container.innerHTML=`
//     <p>ID : ${obj.id}</p>
//     <p> Name : ${obj.name}</p>
//     `
//     document.body.appendChild(container)
   
// })

/**
 * document.cretElement("")
 * document.getElementById("main")
 * document.getElementsByClassName()
 * queryselectore()
 * queryselectoreAll()
 * 
 * 
 */





async function getData() {
    try {
        let res=await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
            throw new Error("Something went wrong");
            
        }
        let data=await res.json()
        fetchData(data)
    } catch (error) {
        console.log(error.message)
    }
    
}







function fetchData(data){
let container=document.getElementById("main")
data.forEach(obj => {
    let child=document.createElement("div")
    child.innerHTML=`
    <h3>Id : ${obj.id}</h3>
    <p>Title : ${obj.title}</p>
    <img src='${obj.image}'>

    `
    container.appendChild(child)
});

}



getData()