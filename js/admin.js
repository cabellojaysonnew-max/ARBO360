
function addProduct(){
const n=document.getElementById("name").value
const p=document.getElementById("price").value
const i=document.getElementById("image").value

products.push({name:n,price:p,image:i})
alert("Product added (demo mode)")
}
