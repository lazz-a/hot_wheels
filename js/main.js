

$(document).ready(function(){

  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  };




  $(".owl-carousel").owlCarousel({
    items: 1
  });

  const scrollBtn = $('.scroll-to-top-btn');

  

  $(window).scroll(function(){
    if( $(this).scrollTop() > 400 ) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }

  })

  scrollBtn.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 350);
    return false;
  })

  // MixItUp
  var mixer = mixitup('.products__row');


});