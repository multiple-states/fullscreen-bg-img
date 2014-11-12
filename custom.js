// ------------------------------------------------ Set the height of the holding div

// Write the setHeight function and save as a variable
var setHeight = function () {
    
    var holderHeight = $(window).height();
    
    $(".hero-holder").css({"height": holderHeight});
    
};
 
// Call the setHeight function on window load
$( document ).ready( setHeight );
 
// Call the setHeight function on wondow resize
$(window).on( "resize", setHeight ).resize();

// ---------------------------------------------------------  Make the BG image cover the god damn screen

// This technique is pinched from: http://css-tricks.com/perfect-full-page-background-image/

$(window).load(function() {    

  var theWindow         = $(window),
      bg                = $(".hero-image"),
      aspectRatio       = bg.width() / bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {

        bg.removeClass().addClass('hero-image-height');

        var marginLeft = bg.width()/2;

        bg.css({"margin-top": "0", "margin-left": -marginLeft});

    } else {

        bg.removeClass().addClass('hero-image-width');

        var marginTop = bg.height()/2;

        bg.css({"margin-left": "0", "margin-top": -marginTop});

    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});