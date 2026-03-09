
const grid=document.getElementById("arboGrid")

arbos.forEach(a=>{

grid.innerHTML+=`
<div class="bg-white shadow rounded">
<img src="${a.image}" class="h-40 w-full object-cover">
<div class="p-4">
<h3 class="font-bold">${a.name}</h3>
<p>${a.location}</p>
<p>${a.experience}</p>
<button class="bg-green-600 text-white px-4 py-2 mt-3 rounded">
Book Tour
</button>
</div>
</div>
`
})
