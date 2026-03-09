
let arbos = JSON.parse(localStorage.getItem("arbos")) || [
{
name:"San Isidro ARBO",
location:"Camarines Sur",
experience:"Rice Farming",
image:"assets/images/sample.jpg",
lat:13.61,
lng:123.18
}
]

function saveDB(){
localStorage.setItem("arbos",JSON.stringify(arbos))
}
