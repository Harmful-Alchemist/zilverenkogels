// Algemene lichtbak — werkt voor fotoalbums én foto's in tekst.
// Elke <a data-zoom href="grote-foto"> opent de lichtbak; navigeren gebeurt
// binnen dezelfde groep (data-zoom-group). Geen externe afhankelijkheden.
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var links = Array.prototype.slice.call(document.querySelectorAll('a[data-zoom]'));
  if (!links.length) return;

  var img = box.querySelector('.lightbox-img');
  var current = null;

  function groupOf(el) { return el.getAttribute('data-zoom-group') || 'default'; }
  function groupLinks(g) { return links.filter(function (l) { return groupOf(l) === g; }); }

  function show(link) {
    current = link;
    img.src = link.getAttribute('href');
    var inner = link.querySelector('img');
    img.alt = inner ? inner.alt : '';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function step(dir) {
    if (!current) return;
    var g = groupLinks(groupOf(current));
    var i = g.indexOf(current);
    show(g[(i + dir + g.length) % g.length]);
  }
  function hide() {
    box.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    current = null;
  }

  links.forEach(function (l) {
    l.addEventListener('click', function (e) { e.preventDefault(); show(l); });
  });
  box.querySelector('.lightbox-sluit').addEventListener('click', hide);
  box.querySelector('.lightbox-vorige').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  box.querySelector('.lightbox-volgende').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  box.addEventListener('click', function (e) { if (e.target === box) hide(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') hide();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });
})();
