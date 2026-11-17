(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Header border on scroll
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    return;
  }

  // Reveal on scroll
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

  // Highlight current section in nav
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var map = {};
  navAnchors.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var secObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var a = map[entry.target.id];
      if (a && entry.isIntersecting) {
        navAnchors.forEach(function (x) { x.classList.remove('active'); });
        a.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) secObs.observe(s);
  });
})();
