
const map=L.map("map").setView([13.6,123.2],9)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

arbos.forEach(a=>{

L.marker([a.lat,a.lng])
.addTo(map)
.bindPopup(`<b>${a.name}</b><br>${a.experience}`)

})
