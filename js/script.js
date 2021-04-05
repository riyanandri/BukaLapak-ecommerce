// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code



    
    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if

   /////////////////  items slider. /plugins/slickslider/
   if ($('.slider-items-slick').length > 0) { // check if element exists
    $('.slider-items-slick').slick({
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  } // end if
    
}); 
// jquery end

// Scroll To Top
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50){
      $('#back-to-top').fadeIn();
    }else {
      $('#back-to-top').fadeOut();
    }
  });
  
  $('#back-to-top').click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});