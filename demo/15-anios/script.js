/* Para sumar fotos: agregá el nombre del archivo a esta lista (carpeta img/) */
const FOTOS = [
  "img/pexels-flavionascimento-39394234.jpg"
];

const g = i => document.getElementById(i);

/* Cuenta regresiva */
const fecha = new Date('2027-03-20T18:00:00-03:00');
function tick() {
  const x = Math.max(0, fecha - new Date());
  g('d').textContent = Math.floor(x / 864e5);
  g('h').textContent = Math.floor(x / 36e5) % 24;
  g('m').textContent = Math.floor(x / 6e4) % 60;
}
tick(); setInterval(tick, 30000);

/* Animaciones al hacer scroll */
const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('on')), { threshold: .15 });
document.querySelectorAll('.rv').forEach(e => io.observe(e));

/* Carrusel */
const car = g('car'), dots = g('dots');
FOTOS.forEach((src, i) => {
  const im = document.createElement('img');
  im.src = src; im.alt = 'Foto ' + (i + 1); if (!i) im.className = 'on';
  car.appendChild(im);
  if (FOTOS.length > 1) {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('aria-label', 'Ver foto ' + (i + 1)); if (!i) b.className = 'on';
    b.onclick = () => { show(i); clearInterval(tm); tm = setInterval(next, 4000); };
    dots.appendChild(b);
  }
});
let cur = 0, tm;
function show(i) {
  cur = i;
  [...car.children].forEach((m, k) => m.classList.toggle('on', k === i));
  [...dots.children].forEach((b, k) => b.classList.toggle('on', k === i));
}
function next() { show((cur + 1) % FOTOS.length); }
if (FOTOS.length > 1) tm = setInterval(next, 4000);

/* Galería con ampliación */
const lb = g('lb'), lbi = g('lbi');
FOTOS.forEach((src, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.setAttribute('aria-label', 'Ampliar foto ' + (i + 1));
  b.innerHTML = '<img src="' + src + '" alt="" loading="lazy">';
  b.onclick = () => { lbi.src = src; lb.hidden = false; g('lbx').focus(); };
  g('gal').appendChild(b);
});
g('lbx').onclick = () => lb.hidden = true;
lb.onclick = e => { if (e.target === lb) lb.hidden = true; };
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });

/* Música */
const au = g('au'), mb = g('mb');
mb.onclick = () => {
  if (au.paused) au.play().then(() => mb.textContent = '❚❚').catch(() => { mb.title = 'Agregá musica.mp3 en esta carpeta'; });
  else { au.pause(); mb.textContent = '♪'; }
};s
