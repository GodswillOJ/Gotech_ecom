// Swiper Projects

let swiperProjects = new Swiper('.new_trends', {
    loop: true,
    spaceBetween: 24,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
  
    breakpoints: {
        1200: {
          slidesPerView: 1,
          spaceBetween: -6,
        }
      },
  
  });


  let swiperSingleCat = new Swiper('.single_swip', {
    slidesPerView: 1,  // Number of slides per view
    spaceBetween: 10, 

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },

});