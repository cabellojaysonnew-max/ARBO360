
function openStory(){
document.getElementById("storyPopup").style.display="block"
}

pannellum.viewer('panorama',{
default:{firstScene:"ricefield"},
scenes:{
ricefield:{
title:"Rice Field",
type:"equirectangular",
panorama:"360/ricefield.jpg",
hotSpots:[
{pitch:2,yaw:30,type:"scene",text:"Drying Area",sceneId:"drying"},
{pitch:5,yaw:-60,type:"info",text:"Farmer Story",clickHandlerFunc:openStory},
{pitch:-3,yaw:120,type:"info",text:"Buy Organic Rice",URL:"product.html"}
]
},
drying:{
title:"Drying Facility",
type:"equirectangular",
panorama:"360/drying.jpg",
hotSpots:[
{pitch:0,yaw:90,type:"scene",text:"Back to Rice Field",sceneId:"ricefield"}
]
}
}
})
