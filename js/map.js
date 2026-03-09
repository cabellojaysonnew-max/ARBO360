
const map=L.map('map').setView([13.65,123.25],10)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

tours.forEach(t=>{
L.marker([t.lat,t.lng]).addTo(map).bindPopup(`<b>${t.name}</b><br>${t.experience}`)
})
