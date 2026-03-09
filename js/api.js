
const API="YOUR_GOOGLE_SCRIPT_WEBAPP_URL"

async function api(action,data={}){

const res=await fetch(API,{
method:"POST",
body:JSON.stringify({action,...data})
})

return await res.json()

}
