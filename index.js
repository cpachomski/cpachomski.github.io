// 1 get window height
// 2 subtract header height from it
// 3 set parallax background heights to be that difference
// 4 set section heighs to be that difference


$( document ).ready(function(){

  //responsively fit the background heights to the window
  var windowHeight = $( window ).height();
  var headerHeight = $( 'header' ).height();
  var newBcgHeight = windowHeight - headerHeight;


  $('.parallax-container').css("height", newBcgHeight + "px" );

})
