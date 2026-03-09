
const container=document.getElementById("products")||document.getElementById("shopGrid")

if(container){

products.forEach((p,i)=>{

container.innerHTML+=`
<div class="bg-white shadow rounded">

<img src="${p.image}" class="h-40 w-full object-cover">

<div class="p-4">

<h3 class="font-bold">${p.name}</h3>
<p class="text-green-700 font-bold">₱${p.price}</p>

<button onclick="addToCart(${i})" class="bg-green-600 text-white px-4 py-2 mt-2 rounded">
Add to Cart
</button>

</div>
</div>`

})

}

function addToCart(i){

let cart=JSON.parse(localStorage.getItem("cart"))||[]
cart.push(products[i])
localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}
