// let btn1=document.getElementById("btn1")
// let btn2=document.getElementById("btn2")

// btn1.onclick=()=>{
//     // alert("this is 65r")
//     document.body.style.background="red";
//     btn2.remove()
// }

// let btn=document.getElementById("btn");
// // let container=document.getElementById("container")
// btn.onclick=()=>{
// container.style.opacity="0"

// }

// let btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     container.style.opacity="0"
// })

let btn=document.getElementById("btn")
btn.addEventListener("click",async ()=>{
    let res=await fetch("http://localhost:3000/data")
    try {
        if(!res.ok){
            throw new Error("Something went wrong");
            
        }
        let data=await res.json()
       showData(data)
    } catch (error) {
        console.log(error.message)
    }
})
function showData(data){
    let container=document.getElementsByClassName("container")[0]
    data.forEach((obj,index) => {
        let item=document.createElement("div")
        item.innerHTML=`
        <h3>ID : ${obj.id}</h3>
        <p>ID : ${obj.title}</p>

        <button class='btnR'>Remove</button>
        `
     let btn=item.querySelector(".btnR")
     btn.addEventListener("click",()=>{
        item.remove();
     })

        // let button=document.createElement("button")
        // button.innerText="remove"
        // button.addEventListener("click",()=>{
        //        item.remove()
        // })
        // item.appendChild(button)
        container.appendChild(item)
    });
}