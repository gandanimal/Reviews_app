
function displayDate() {
  document.getElementById("date").innerHTML = getToday();
}

function getToday() {
var date = moment().format("HH:mm")

return date
  

}


function goBack() {
  window.history.back();
}