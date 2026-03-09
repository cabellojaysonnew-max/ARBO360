
let cart=JSON.parse(localStorage.getItem("cart"))||[]

function addToCart(i){

cart.push(i)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}

function loadCart(){

const container=document.getElementById("cart-items")

if(!container) return

let total=0

cart.forEach(i=>{

const item=document.createElement("div")

item.innerText="Item "+i

container.appendChild(item)

total+=100

})

document.getElementById("total").innerText=total

}

window.onload=loadCart
