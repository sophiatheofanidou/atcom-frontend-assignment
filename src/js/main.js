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

  roots.forEach((root) => {
    // Prevent double initialization on the same element
    if (root.swiper) return;

    const prevBtn = root.querySelector(
      ".features-carousel__control--prev"
    );
    const nextBtn = root.querySelector(
      ".features-carousel__control--next"
    );

    // Guard: if navigation buttons are missing, do nothing
    if (!prevBtn || !nextBtn) return;

    new Swiper(root, {
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
  });
})();
