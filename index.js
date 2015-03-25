
$( document ).ready(function(){

  //responsively fit the background heights to the window
  var windowHeight = $( window ).height();
  var headerHeight = $( 'header' ).height();
  var newBcgHeight = windowHeight - headerHeight;


  $('.parallax-container').css("height", newBcgHeight + "px" );

  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionId = $(this).attr("data-id");
    scrolltoId("#" + sectionId, 750);
    console.log('scroll?')
  });

  $('.scroll-top').on('click', function(event){
    event.preventDefault;
    $('html,body').animate({scrollTop:0}, 'slow')

  });



  //function to scroll to page chosen section
  function scrolltoId(id, scrollSpeed){
    var offset = 10;
    var targetOffset = $(id).offset().top - offset;
    $('html,body').animate({scrollTop:targetOffset}, scrollSpeed);
  };

})
