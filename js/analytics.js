
api("salesAnalytics").then(data=>{

const ctx=document.getElementById("salesChart")

new Chart(ctx,{
type:"bar",
data:{
labels:data.labels,
datasets:[{label:"Sales",data:data.values}]
}
})

})
