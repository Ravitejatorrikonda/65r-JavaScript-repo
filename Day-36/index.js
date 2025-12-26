/**
 * 
 * BOM(Browser object model)
 * 
 * splice, map, filter, foreach
 * 
 * 
 * 
 */


//fetch Data

async function fetchData() {
    let res = await fetch("https://fakestoreapi.com/products")
    let products = await res.json()
    // console.log(products)
    // localStorage.setItem("products",JSON.stringify(products))
    // displayData(products)

}

//filterbtn

function filterbtn() {
    let products = JSON.parse(localStorage.getItem("products")) || []
    let category = products.map(product => product.category)
    let set = new Set(category)//removing dublicates
    let newArr = Array.from(set)//convert object into array
    let maincontainer = document.getElementById("container-main")
    newArr.forEach(category => {
        let btn = document.createElement("button")
        btn.textContent = category
        btn.onclick = () => {
               filterdata(category)
        }
        maincontainer.appendChild(btn)
    })



}




//filter data

function filterdata(category) {
    // let cat = window.prompt("Enter Category")
    let products = JSON.parse(localStorage.getItem("products"))
    let filterData = products.filter(product => product.category == category )
    //   console.log(filterData)
    displayData(filterData)
}

//display data

function displayData(products) {
    // let products=JSON.parse(localStorage.getItem("products")) || []
    if (products.length == 0) {
        console.log("Data not found")
    } else {
        let container = document.getElementById("container")
        container.innerText = " ";
        products.forEach((product, index) => {
            let item = document.createElement("div")
            item.innerHTML = `
            <img src=${product.image}>
            <h3>Id : ${product.id}</h3>
            <p>Price : ${product.price}</p>
            <p>Description : ${product.description}</p>
            <p><b>category :</b> ${product.category}</p>
            <button onclick=deleteData(${index})>Delete</button>
            `
            container.appendChild(item)
        });
    }
}

//Delete Data
function deleteData(index) {
    let products = JSON.parse(localStorage.getItem("products")) || []
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    displayData(products)
}



// fetchData()
window.onload = () => {
    let products = JSON.parse(localStorage.getItem("products")) || []
    if (products.length == 0) {
        fetchData()
    } else {
        displayData(products)
        filterbtn()
    }
}


