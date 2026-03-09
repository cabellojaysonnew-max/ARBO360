
const API="https://script.google.com/macros/s/AKfycbwIRpvQezzXayJ8N3S_gpvz6yZxtLTmZp6RXrN-u7w7M4UfzqVfvLz-DPIpqNTKedK17Q/exec"

const params=new URLSearchParams(location.search)
const arbo=params.get("arbo")

fetch(API+"?action=getScenes&arbo="+arbo)
.then(r=>r.json())
.then(scenes=>{

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

viewer.on('mousedown',function(e){
const pitch=e.pitch
const yaw=e.yaw
if(confirm("Create hotspot here?")){
alert("Pitch:"+pitch+" Yaw:"+yaw+"\nUse this in admin panel.")
}
})

})
