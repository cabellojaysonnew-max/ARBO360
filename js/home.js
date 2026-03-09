
const tourBox=document.getElementById("tours")
const prodBox=document.getElementById("products")

tours.forEach(t=>{
tourBox.innerHTML+=`
<div class="bg-white rounded shadow overflow-hidden">
<img src="${t.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${t.name}</h3>
<p>${t.experience}</p>
</div>
</div>`
})

products.forEach(p=>{
prodBox.innerHTML+=`
<div class="bg-white rounded shadow overflow-hidden">
<img src="${p.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${p.name}</h3>
<p class="text-green-700 font-bold">₱${p.price}</p>
</div>
</div>`
})
