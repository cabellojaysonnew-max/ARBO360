
fetch("data/farmers.json")
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("farmers")

data.forEach(f=>{

grid.innerHTML+=`
<div class="card">
<h3>${f.name}</h3>
<p>${f.arbo}</p>
<p>${f.story}</p>
</div>
`

})

})
