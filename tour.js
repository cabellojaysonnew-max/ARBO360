<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width,initial-scale=1">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.css"/>
<script src="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.js"></script>

<style>

body{
margin:0;
font-family:Arial;
}

#panorama{
width:100%;
height:80vh;
}

.popup{
display:none;
position:fixed;
top:20%;
left:50%;
transform:translateX(-50%);
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 20px rgba(0,0,0,0.3);
max-width:400px;
}

.popup img{
width:100%;
border-radius:8px;
}

.popup button{
margin-top:10px;
}

</style>

</head>

<body>

<div id="panorama"></div>

<!-- FARMER STORY POPUP -->

<div id="storyPopup" class="popup">

<h3>Farmer Story</h3>

<p>
Mang Pedro has been cultivating rice in this ARBO for over 25 years.  
Through agrarian reform support, the cooperative now produces high-quality organic rice sold across the province.
</p>

<button onclick="closePopup()">Close</button>

</div>


<script>

function openStory(){
document.getElementById("storyPopup").style.display="block"
}

function closePopup(){
document.getElementById("storyPopup").style.display="none"
}

pannellum.viewer('panorama',{

default:{
firstScene:"ricefield",
sceneFadeDuration:1000
},

scenes:{

ricefield:{
title:"Rice Field",
type:"equirectangular",
panorama:"360/ricefield.jpg",

hotSpots:[

{
pitch:2,
yaw:40,
type:"scene",
text:"Go to Drying Area",
sceneId:"drying"
},

{
pitch:5,
yaw:120,
type:"info",
text:"Farmer Story",
clickHandlerFunc:openStory
},

{
pitch:-3,
yaw:-60,
type:"info",
text:"Buy Organic Rice",
URL:"marketplace.html?product=organic-rice"
}

]

},

drying:{
title:"Drying Facility",
type:"equirectangular",
panorama:"360/drying.jpg",

hotSpots:[

{
pitch:1,
yaw:-50,
type:"scene",
text:"Go to Product Store",
sceneId:"store"
},

{
pitch:3,
yaw:80,
type:"info",
text:"View Rice Processing Photo",
clickHandlerFunc:function(){
window.open("images/drying-process.jpg")
}
}

]

},

store:{
title:"ARBO Product Store",
type:"equirectangular",
panorama:"360/store.jpg",

hotSpots:[

{
pitch:2,
yaw:150,
type:"scene",
text:"Back to Rice Field",
sceneId:"ricefield"
},

{
pitch:5,
yaw:10,
type:"info",
text:"Buy Coconut Sugar",
URL:"marketplace.html?product=coconut-sugar"
},

{
pitch:-2,
yaw:-100,
type:"info",
text:"Buy Organic Coffee",
URL:"marketplace.html?product=arbo-coffee"
}

]

}

}

})

</script>

</body>
</html>
