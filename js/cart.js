
let cart=JSON.parse(localStorage.getItem("cart"))||[]
function addToCart(i){
cart.push(i)
localStorage.setItem("cart",JSON.stringify(cart))
alert("Added to cart")
}
function loadCart(){
const container=document.getElementById("cart")
if(!container) return
let total=0
cart.forEach(()=>{
const div=document.createElement("div")
div.innerText="Product item"
container.appendChild(div)
total+=100
})
const t=document.getElementById("total")
if(t) t.innerText=total
}
window.onload=loadCart
