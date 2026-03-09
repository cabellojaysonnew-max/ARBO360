
function doPost(e){

var data=JSON.parse(e.postData.contents)
var action=data.action

var ss=SpreadsheetApp.getActive()

if(action=="getProducts"){

var sheet=ss.getSheetByName("products")
return json(sheet.getDataRange().getValues())

}

if(action=="createOrder"){

var sheet=ss.getSheetByName("orders")
sheet.appendRow([new Date(),data.product,data.qty,"Pending"])
return json({status:"ok"})

}

if(action=="salesAnalytics"){

var sheet=ss.getSheetByName("orders")
var rows=sheet.getDataRange().getValues()

var totals={}

rows.forEach(r=>{

var p=r[1]

totals[p]=(totals[p]||0)+1

})

return json({
labels:Object.keys(totals),
values:Object.values(totals)
})

}

}

function json(d){
return ContentService.createTextOutput(JSON.stringify(d))
.setMimeType(ContentService.MimeType.JSON)
}
