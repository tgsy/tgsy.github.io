// Scroll-triggered reveals
(function () {
  const sections = document.querySelectorAll('.section, .sidebar-section, .exp-item');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((el, i) => {
    // Only apply to elements below the fold
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity 0.55s ${i * 0.04}s ease, transform 0.55s ${i * 0.04}s ease`;
      observer.observe(el);
    }
  });
})();
