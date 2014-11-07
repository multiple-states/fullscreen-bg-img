// ------------------------------------------------ Set the height of the holding div

// Write the setHeight function and save as a variable
var setHeight = function () {
    
    var holderHeight = $(window).height();
    
    $(".hero-holder").css({"height": holderHeight});
    
};
 
// Call the setHeight function on window load
$( window ).load( setHeight );
 
// Call the setHeight function on wondow resize
$(window).on( "resize", setHeight ).resize();