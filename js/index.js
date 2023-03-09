$(document).ready(function(){
    $('.multiple-slider').slick({
        infinite: true,
        arrows:true,
        centerMode: true,
        centerPadding: '0px',
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
              slidesToShow: 1 , 
              infinite: true,
              centerMode: true,
              arrows:true   
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
             centerMode:true
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
        autoplay:true,
        autoplaySpeed:1000,
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

$(document).ready(function(){
  $(".description-img-1").waypoint(function(){
    $(".description-img-1").addClass("left-slide")
  }, {offset:"30%"})
})

$(document).ready(function(){
  $(".description-overlay-img").waypoint(function(){
    $(".description-overlay-img").addClass("down-slide")
  }, {offset:"100%"})
})

$(document).ready(function(){
  $(".description-img-2").waypoint(function(){
    $(".description-img-2").addClass("right-slide")
  }, {offset:"30%"})
})

$(document).ready(function(){
  $(".description-overlay-img-2").waypoint(function(){
    $(".description-overlay-img-2").addClass("left-slide")
  }, {offset:"100%"})
})

$(document).ready(function(){
  $(".description-overlay").waypoint(function(){
    $(".description-overlay").addClass("down-slide")
  }, {offset:"100%"})
})

$(document).ready(function(){
  $(".image-box-1").waypoint(function(){
    $(".image-box-1").addClass("left-slide")
  }, {offset:"50%"})
})

$(document).ready(function(){
  $(".image-box-2").waypoint(function(){
    $(".image-box-2").addClass("right-slide")
  }, {offset:"50%"})
})
$(document).ready(function(){
  $(".image-box-3").waypoint(function(){
    $(".image-box-3").addClass("up-slide")
  }, {offset:"70%"})
})
$(document).ready(function(){
  $(".image-box-4").waypoint(function(){
    $(".image-box-4").addClass("down-slide")
  }, {offset:"70%"})
})
