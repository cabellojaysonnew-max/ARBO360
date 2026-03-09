
const grid=document.getElementById("grid")

arbos.forEach(a=>{

grid.innerHTML+=`
<div class="bg-white rounded shadow">

<img src="${a.image}" class="h-40 w-full object-cover">

<div class="p-4">

<h3 class="font-bold">${a.name}</h3>

<p>${a.location}</p>

<p>${a.experience}</p>

<a href="viewer.html" class="text-green-700 font-bold">
View 360 Tour
</a>

</div>

</div>
`

})
