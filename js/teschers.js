 function checkAllImagesLoaded() {
    if (imagesLoaded === imagesToLoad) {
      if (newsSwiper) {
        newsSwiper.destroy(true, true);
      }

      newsSwiper = new Swiper(".news-section__list", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          992: { slidesPerView: 4, spaceBetween: 30 },
        },
      });
    }
  }