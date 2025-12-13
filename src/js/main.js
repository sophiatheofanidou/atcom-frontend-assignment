
(() => {
  const root = document.querySelector(".features-carousel__swiper");
  if (!root) return;

  // Swiper loaded?
  if (typeof Swiper !== "function") return;

  const prevBtn = root.querySelector(".features-carousel__control--prev");
  const nextBtn = root.querySelector(".features-carousel__control--next");

  // Prevent accidental double init
  if (root.swiper) return;

  new Swiper(root, {
    slidesPerView: 1,
    spaceBetween: 0,

    // Wrap-around behavior (last→first, first→last)
    loop: true,

    // Smoother transition
    speed: 650,
    effect: "fade",
    fadeEffect: { crossFade: true },

    // UX
    grabCursor: true,
    watchOverflow: true,

    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
  });
})();
