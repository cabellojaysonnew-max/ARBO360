
const map=L.map('map').setView([13.13,123.73],9)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

fetch("https://script.google.com/macros/s/AKfycbwIRpvQezzXayJ8N3S_gpvz6yZxtLTmZp6RXrN-u7w7M4UfzqVfvLz-DPIpqNTKedK17Q/exec?action=getARBOS")
.then(r=>r.json())
.then(data=>{

data.forEach(a=>{

L.marker([a.lat,a.lng]).addTo(map)
.bindPopup("<b>"+a.name+"</b><br><a href='tour.html?arbo="+a.id+"'>Open Tour</a>")

})

})
