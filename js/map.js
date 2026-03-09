
const map=L.map('map').setView([13.7,123.3],10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

fetch("data/arbos.json")
.then(r=>r.json())
.then(data=>{

data.forEach(a=>{

L.marker([a.lat,a.lng])
.addTo(map)
.bindPopup(`<b>${a.name}</b><br><a href="tour.html">360 Tour</a>`)

})

})
