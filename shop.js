
let products = JSON.parse(localStorage.getItem("products")) || [
{name:"Organic Rice",price:1200,image:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},
{name:"Cacao Tablea",price:250,image:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52"},
{name:"Coconut Sugar",price:180,image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5"}
]

let tours = JSON.parse(localStorage.getItem("tours")) || [
{name:"San Isidro ARBO",experience:"Rice Farming",image:"https://images.unsplash.com/photo-1598514982841-5c2c1b7c1f6d",lat:13.6,lng:123.2}
]

function saveProducts(){localStorage.setItem("products",JSON.stringify(products))}
function saveTours(){localStorage.setItem("tours",JSON.stringify(tours))}
