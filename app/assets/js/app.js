

// $('.navbar-brand').on('click'), function (f) {
//   f.preventDefault();
//   $('.side-nav').css( "width", "100%");
// });

// $('.side-nav').on('click', function (e) {
//   e.preventDefault();
//   $( this ).css( "width", "25%" );
//   $( '.side-nav>li>a' ).css( {"width": "500px",
//   "text-align": "left"});
//
// });

$('.side-nav').on('click', function (e) {
  e.preventDefault();
  $( this ).css( "width", "300px" );
  $( ".side-nav>li>a" ).animate({
      width: "300px",
      "text-align": "left"
    },250 );
  $( "#wrapper" ).animate({
      "padding-left": "325px"
    },250 );



});
