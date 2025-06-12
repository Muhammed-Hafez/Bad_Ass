const heroSwiper = new Swiper(".hero-slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 500000000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const brandSlider = new Swiper(".brand-slider", {
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".brand-next",
    prevEl: ".brand-prev",
  },
});

const featuredSwiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper = new Swiper(".shopbygoal-swiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: ".shop-prev",
    nextEl: ".shop-next",
  },
  breakpoints: {
    468: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const teamSwiper = new Swiper(".team-slider", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
