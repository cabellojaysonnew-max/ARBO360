
const API="https://script.google.com/macros/s/AKfycbwIRpvQezzXayJ8N3S_gpvz6yZxtLTmZp6RXrN-u7w7M4UfzqVfvLz-DPIpqNTKedK17Q/exec"

async function saveHotspot(){

const scene=document.getElementById("scene").value
const product=document.getElementById("product").value
const price=document.getElementById("price").value
const pitch=document.getElementById("pitch").value
const yaw=document.getElementById("yaw").value

await fetch(API,{
method:"POST",
body:JSON.stringify({
action:"addHotspot",
scene:scene,
product:product,
price:price,
pitch:pitch,
yaw:yaw
})
})

alert("Hotspot saved")

}
