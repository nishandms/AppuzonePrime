
$(document).ready(function() {
  $("#basic-form").validate();
});


function myFunction() {
  var x = document.getElementById("id1").value;
  var y = "14321";
  if (x==y) {
    window.open("list.html")
  } else {
    alert("Poi ticket edukkeda naari")
  } 
} 