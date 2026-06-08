// Eenvoudige lichtbak voor de fotoalbums — geen externe afhankelijkheden.
(function () {
  var gallery = document.querySelector('[data-lightbox]');
  var box = document.getElementById('lightbox');
  if (!gallery || !box) return;

  var img = box.querySelector('.lightbox-img');
  var links = Array.prototype.slice.call(gallery.querySelectorAll('a.foto'));
  var current = 0;

  function show(i) {
    current = (i + links.length) % links.length;
    img.src = links[current].getAttribute('href');
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function hide() {
    box.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
  }

  links.forEach(function (link, i) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      show(i);
    });
  });

  box.querySelector('.lightbox-sluit').addEventListener('click', hide);
  box.querySelector('.lightbox-vorige').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current - 1);
  });
  box.querySelector('.lightbox-volgende').addEventListener('click', function (e) {
    e.stopPropagation();
    show(current + 1);
  });
  box.addEventListener('click', function (e) {
    if (e.target === box) hide();
  });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') hide();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();
