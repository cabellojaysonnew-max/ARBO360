
document.getElementById("orderForm").addEventListener("submit",function(e){
e.preventDefault()
alert("Order submitted. Connect to Google Apps Script.")
localStorage.removeItem("cart")
})
