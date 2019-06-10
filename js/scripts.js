$(document).ready(function(){
  $("h1").click(function(event) {
    alert("You clicked on header");

    event.preventDefault();
  });
});
