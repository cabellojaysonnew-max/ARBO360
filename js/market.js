
const grid=document.getElementById("productGrid")

products.forEach(p=>{

grid.innerHTML+=`
<div class="bg-white shadow rounded">
<img src="${p.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${p.name}</h3>
<p class="text-green-700 font-bold">₱${p.price}</p>
<button class="bg-yellow-500 text-white px-4 py-2 mt-3 rounded">
Buy
</button>
</div>
</div>
`
})
