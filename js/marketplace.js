
api("getProducts").then(products=>{

const grid=document.getElementById("products")

products.forEach(p=>{

grid.innerHTML+=`

<div class="card">

<h3>${p.name}</h3>
<p>₱${p.price}</p>
<p>Vendor: ${p.vendor}</p>

<button onclick="order('${p.id}')">Order</button>

</div>

`

})

})

function order(id){

api("createOrder",{product:id,qty:1})

alert("Order placed")

}
