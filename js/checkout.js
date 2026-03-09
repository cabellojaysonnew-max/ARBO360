
document.getElementById("checkoutForm").addEventListener("submit",function(e){

e.preventDefault()

alert("Order submitted (connect to Google Sheets API here)")

localStorage.removeItem("cart")

})
