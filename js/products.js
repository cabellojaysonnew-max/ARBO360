
const products=[
{name:"Organic Rice",price:55,img:"https://picsum.photos/200"},
{name:"Banana Chips",price:120,img:"https://picsum.photos/200"},
{name:"Fresh Eggs",price:8,img:"https://picsum.photos/200"}
]

function renderProducts(){
const container=document.getElementById("products")
if(!container) return
products.forEach((p,i)=>{
const card=document.createElement("div")
card.className="card"
card.innerHTML=`
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₱${p.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>`
container.appendChild(card)
})
}
window.onload=renderProducts
