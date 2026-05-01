const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document
  .querySelectorAll('.about-inner, .products-header, .info-inner, .juice-center')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });