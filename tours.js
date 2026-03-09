
let cart=JSON.parse(localStorage.getItem("cart"))||[]
let total=0

const container=document.getElementById("cartItems")

cart.forEach(p=>{

container.innerHTML+=`
<div class="bg-white p-4 mb-3 shadow">

<h3 class="font-bold">${p.name}</h3>
<p>₱${p.price}</p>

</div>`

total+=p.price

})

document.getElementById("total").innerText=total

function checkout(){

alert("Connect this to GCash or PayMongo payment API.")

localStorage.removeItem("cart")

location.reload()

}
