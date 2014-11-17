
// Animates the Navbar

$('.side-nav').on('click', function (e) {
  e.preventDefault();
  $( this ).css( "width", "200px" );
  $( ".side-nav>li>a" ).animate({
      width: "200px",
      "font-size": "1em"
    },50);

  $( "#wrapper" ).animate({
      "padding-left": "225px"
    },1500 );


});
