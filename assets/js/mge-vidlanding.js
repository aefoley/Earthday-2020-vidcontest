/*
*
*  Solar section mouseover animation. 
*
*/


$(document).ready(function () {
  	
  	$(".orange1").hover(function(){
    	$('img.orange1').toggleClass('orange-glow');
	});

	$(".green1").hover(function(){
    	$('img.green1').toggleClass('green-glow');
	});

	$(".orange2").hover(function(){
    	$('img.orange2').toggleClass('orange-glow');
	});
	$(".green2").hover(function(){
    	$('img.green2').toggleClass('green-glow');
	});
    $(".orange3").hover(function(){
      $('img.orange3').toggleClass('orange-glow');
  });
 
  
})

/*
*
*  popovers
*
*/


 $(document).ready(function(){
        $('[data-toggle="popover"]').popover();
        $('#nav').affix({
          offset: {
            top: $('header').height()
          }
	}); 

	$('#sidebar').affix({
	      offset: {
	        top: 500
	      }
	});
});

/*
*
*  Scroll to a target
* 
*/

$(document).ready(function(){
 
  $('a[href^="#"]').on('click', function(event) {
      
      var heroHeight = $(".hero").height();
      var navHeight = $("#navbar").height();
      var scrollPoz = $(document).scrollTop();
      var target = $(this.getAttribute('href'));
      
      if( target.length ) {
         event.preventDefault();
        if( scrollPoz < heroHeight ) {

            $('html, body').stop().animate({
                scrollTop: target.offset().top - (navHeight + 70)
            }, 1000, 'swing');

        } else {

            $('html, body').stop().animate({
              scrollTop: target.offset().top - navHeight
                }, 1000, 'swing');
            }
        }
          
  });

});


// make fancybox work for youtube video with button in header

$(document).ready(function($) {
   $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            arrows : false,
            helpers : {
                media : {},
                //buttons : {},
                overlay: {locked: false} //keeps page under fancybox from rocketing to top - http://davekiss.com/prevent-fancybox-from-jumping-to-the-top-of-the-page/
        }
    });//end media

   // animate the button
   $('#yellow-button').addClass('wiggle');

});//end ready



// $(document).ready(function(){
//   $('#yellow-button').addClass('wiggle');
// });





