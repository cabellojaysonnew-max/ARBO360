
function doPost(e){
var sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders")
var data=JSON.parse(e.postData.contents)
sheet.appendRow([new Date(),data.name,data.phone,data.address,data.total])
return ContentService.createTextOutput("success")
}
