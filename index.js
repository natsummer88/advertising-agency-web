const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  new WOW().init();

//drawer

$('.drawer__icon').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.drawer__content').toggleClass('is-active');
    $('.drawer__background').toggleClass('is-active');
    return false;
});


//smoothscroll

$('a[href^="#"]').on('click', function(){

   var header = $('header').innerHeight();
   var id = $(this).attr('href');
   var position = 0;

   if( id != '#'){
    var position = $(id).offset().top - header;
   }
   $('html, body').animate({
    scrollTop: position 
   },
   300);
})

//floating item

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 100){
        $('.to-top').addClass('is-show');

    } else {
        $('.to-top').removeClass('is-show');
    }
});

//header click event

$('.header__nav-item').on('click', function(){
    $('.header__nav li a').removeClass('is-active');
    $(this).addClass('is-active');
    return false;
});

//q&a

$('.qa-box__q').on('click', function(){
    $(this).next().slideToggle();
    $(this).children('.qa-box__icon').toggleClass('is-open');
})


//modal 


$('.js-close-button').on('click', function(e){
    e.preventDefault();
    var target= $(this).data('target');
    $(target).hide();
});

$('.js-open-button').on('click', function(e){
    e.preventDefault();
    var target= $(this).data('target');
    $(target).show();
});



