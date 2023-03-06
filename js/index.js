$(document).ready(function(){
    $('.multiple-slider').slick({
        infinite: true,
        arrows:true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2,
        prevArrow:'<i class="fa-solid fa-arrow-left prev-arrow arrow"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right next-arrow arrow"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              infinite: true,
              centerMode: true,
              arrows:true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2 ,    
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
             centerMode:false
            }
          }
        ]
      });
})

$(document).ready(function(){
    $('.slider-box-col').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              infinite: true,
              centerMode: true,
              arrows:true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})