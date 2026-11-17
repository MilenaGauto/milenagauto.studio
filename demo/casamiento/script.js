const g = i => document.getElementById(i);

/* Nombres animados letra por letra */
[['n1', 'Sofía'], ['n2', 'Mateo']].forEach(([id, nombre], k) => {
  [...nombre].forEach((c, i) => {
    const b = document.createElement('b');
    b.textContent = c; b.style.transitionDelay = (0.5 + k * 0.5 + i * 0.09) + 's';
    g(id).appendChild(b);
  });
});

/* Pétalos que caen */
for (let i = 0; i < 16; i++) {
  const p = document.createElement('i');
  p.style.cssText = 'left:' + Math.random() * 100 + '%;--x:' + (Math.random() * 120 - 60) + 'px;animation-duration:' + (9 + Math.random() * 9) + 's;animation-delay:-' + Math.random() * 12 + 's;opacity:' + (.4 + Math.random() * .5);
  g('petals').appendChild(p);
}

/* Invitación cerrada: al abrir, entra el contenido y suena la música */
document.body.classList.add('lock');
const au = g('au'), mb = g('mb');
g('open').onclick = () => {
  g('intro').classList.add('gone');
  document.body.classList.remove('lock');
  document.body.classList.add('opened');
  au.play().then(() => mb.textContent = '❚❚').catch(() => aviso(SIN_MUSICA));
};
mb.onclick = () => {
  if (au.paused) au.play().then(() => mb.textContent = '❚❚').catch(() => { aviso(SIN_MUSICA); });
  else { au.pause(); mb.textContent = '♪'; }
};

/* Cuenta regresiva */
const fecha = new Date('2027-10-09T17:00:00-03:00');
function tick() {
  const x = Math.max(0, fecha - new Date());
  g('d').textContent = Math.floor(x / 864e5);
  g('h').textContent = Math.floor(x / 36e5) % 24;
  g('m').textContent = Math.floor(x / 6e4) % 60;
  g('s').textContent = Math.floor(x / 1e3) % 60;
}
tick(); setInterval(tick, 1000);

/* Aparición al hacer scroll */
const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('on')), { threshold: .15 });
document.querySelectorAll('.rv').forEach(e => io.observe(e));

/* Copiar alias */
g('cp').onclick = () => {
  try { navigator.clipboard.writeText(g('al').textContent); } catch (e) {}
  g('cok').style.display = 'block';
};

/* Formulario de asistencia → WhatsApp */
g('f').onsubmit = e => {
  e.preventDefault();
  const f = new FormData(g('f'));
  const txt = 'Nombre: ' + f.get('n') + '\nPersonas: ' + f.get('c') + '\nMenú: ' + f.get('m') + (f.get('g') ? '\nMensaje: ' + f.get('g') : '');
  window.open('https://wa.me/5493624000000?text=' + encodeURIComponent('Hola! Confirmo asistencia al casamiento de Sofía y Mateo.\n' + txt), '_blank', 'noopener');
};

/* Aviso visible si la música no puede reproducirse */
function aviso(t) {
  const n = document.createElement('div');
  n.textContent = t; n.setAttribute('role', 'status');
  n.style.cssText = 'position:fixed;left:12px;right:70px;bottom:calc(env(safe-area-inset-bottom,0px) + 14px);z-index:40;background:#fbf6f1;color:#7d3a52;border:1px solid #c9a25a;border-radius:14px;padding:10px 14px;font:500 .85rem/1.3 system-ui,sans-serif';
  document.body.appendChild(n); setTimeout(() => n.remove(), 5000);
}
const SIN_MUSICA = 'No se pudo reproducir la música. Verificá que musica.mp3 esté subido en esta misma carpeta.';
