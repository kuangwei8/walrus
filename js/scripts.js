$(document).ready(function(){

    $("body").click(function(event) {
  // $("h1").click(function(event) {
  //   alert("You clicked on header");
  //
  // $("p").click(function(event) {
  //   alert("You clicked on par");
  //
  // $("img").click(function(event) {
  //   alert("You clicked on pic");

  var elements = ["h1","p", "img"];
  elements.forEach(function(element){
    // $(element).click(function(){
    alert("You clicked on "+ element);


      event.preventDefault();
    });
  });
});
