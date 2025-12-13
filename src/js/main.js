(() => {
  // Find all feature carousels (safe for future multiple instances)
  const roots = document.querySelectorAll(".features-carousel__swiper");
  if (!roots.length) return;

  // Ensure Swiper library is available
  if (typeof Swiper !== "function") return;

  // Check if user prefers reduced motion (OS accessibility setting)
  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  )?.matches;

  // Keep references so we can update on resize (Firefox stability)
  const instances = [];

  // Small debounce helper (no external deps)
  const debounce = (fn, delay = 150) => {
    let t;
    return (...args) => {
      window.clearTimeout(t);
      t = window.setTimeout(() => fn(...args), delay);
    };
  };

  roots.forEach((root) => {
    // Prevent double initialization on the same element
    if (root.swiper) return;

    const prevBtn = root.querySelector(".features-carousel__control--prev");
    const nextBtn = root.querySelector(".features-carousel__control--next");

    // Guard: if navigation buttons are missing, do nothing
    if (!prevBtn || !nextBtn) return;

    const swiper = new Swiper(root, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,

      // Respect reduced motion preference
      speed: prefersReducedMotion ? 0 : 650,
      effect: prefersReducedMotion ? "slide" : "fade",
      fadeEffect: { crossFade: true },

      // Basic UX enhancements
      grabCursor: true,
      watchOverflow: true,

      // Οbserve layout changes (helps when flex row -> column)
      observer: true,
      observeParents: true,
      resizeObserver: true,

      // Enable keyboard navigation
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // Accessibility messages for screen readers
      a11y: {
        enabled: true,
        containerMessage: "Feature carousel",
        slideLabelMessage: "{{index}} of {{slidesLength}}",
        prevSlideMessage: "Previous feature",
        nextSlideMessage: "Next feature",
      },

      // Custom navigation controls
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });

    instances.push(swiper);
  });

  // Οn resize, force Swiper to recalc sizes (Firefox huge-width bug)
  const onResize = debounce(() => {
    instances.forEach((swiper) => {
      if (!swiper || swiper.destroyed) return;

      swiper.update();

      // settle the active slide without animation (prevents weird transforms)
      swiper.slideTo(swiper.activeIndex, 0);
    });
  }, 150);

  window.addEventListener("resize", onResize, { passive: true });
})();
