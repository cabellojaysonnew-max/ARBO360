
const API="https://script.google.com/macros/s/AKfycbwIRpvQezzXayJ8N3S_gpvz6yZxtLTmZp6RXrN-u7w7M4UfzqVfvLz-DPIpqNTKedK17Q/exec"

async function loadARBOS(){

const r=await fetch(API+"?action=getARBOS")
const data=await r.json()

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

}

if(document.getElementById("arboGrid")) loadARBOS()

async function loadTour(){

const params=new URLSearchParams(location.search)
const arbo=params.get("arbo")

const r=await fetch(API+"?action=getScenes&arbo="+arbo)
const scenes=await r.json()

const config={default:{firstScene:scenes[0].id},scenes:{}}

scenes.forEach(s=>{
config.scenes[s.id]={

title:s.name,
type:"equirectangular",
panorama:"tours/"+s.panorama,
hotSpots:[]

}
})

const viewer=pannellum.viewer("panorama",config)

}

if(document.getElementById("panorama")) loadTour()
