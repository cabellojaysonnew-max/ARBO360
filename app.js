
const API="https://script.google.com/macros/s/AKfycbwIRpvQezzXayJ8N3S_gpvz6yZxtLTmZp6RXrN-u7w7M4UfzqVfvLz-DPIpqNTKedK17Q/exec"

fetch(API+"?action=getARBOS")
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("arboGrid")

data.forEach(a=>{

grid.innerHTML+=`
<div class="card">

<img src="tours/${a.panorama}">

<div class="card-content">

<h3>${a.name}</h3>
<p>${a.location}</p>

<a href="tour.html?arbo=${a.id}">Enter Tour</a>

</div>

</div>
`

})

})

if('serviceWorker' in navigator){
navigator.serviceWorker.register('sw.js')
}
