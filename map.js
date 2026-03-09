
const grid=document.getElementById("tourGrid")

tours.forEach(t=>{

grid.innerHTML+=`
<div class="bg-white shadow rounded">

<img src="${t.image}" class="h-40 w-full object-cover">

<div class="p-4">

<h3 class="font-bold">${t.name}</h3>
<p>${t.experience}</p>

<a href="viewer.html" class="text-green-700 font-bold">
Enter 360 Tour
</a>

</div>

</div>`

})
