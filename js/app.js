
const container=document.getElementById("arboCards")

arbos.forEach(a=>{

container.innerHTML+=`
<div class="bg-white rounded shadow">
<img src="${a.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${a.name}</h3>
<p>${a.experience}</p>
<p class="text-green-700 font-bold">₱${a.price}</p>
</div>
</div>
`
})
