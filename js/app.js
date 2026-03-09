
const products=[
{name:"Organic Rice",price:55,image:"https://picsum.photos/200"},
{name:"Banana Chips",price:120,image:"https://picsum.photos/200"},
{name:"Fresh Eggs",price:8,image:"https://picsum.photos/200"}
]

function loadProducts(){

const container=document.getElementById("products")

if(!container) return

products.forEach((p,i)=>{

const div=document.createElement("div")

div.innerHTML=`
<img src="${p.image}" width="150">
<h3>${p.name}</h3>
<p>₱${p.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>
`

container.appendChild(div)

})

}

window.onload=loadProducts
