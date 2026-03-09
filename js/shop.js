
const shop=document.getElementById("shop")

products.forEach(p=>{
shop.innerHTML+=`
<div class="bg-white shadow rounded">
<img src="${p.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${p.name}</h3>
<p class="text-green-700 font-bold">₱${p.price}</p>
<button class="bg-green-600 text-white px-3 py-1 mt-2 rounded">Add to Cart</button>
</div>
</div>`
})
