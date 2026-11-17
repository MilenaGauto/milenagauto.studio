/* Etiqueta de plan + panel "Qué incluye" (compartido por las 3 demos) */
(function () {
  var PLANES = {
    esencial: { nombre: "Esencial", precio: "$55.000",
      items: ["Invitación web personalizada", "Cuenta regresiva", "Ubicación y confirmación por WhatsApp", "Diseño adaptable a celulares"],
      sigTitulo: "Con el plan Interactiva ($79.000) sumás",
      sig: ["Animaciones y transiciones", "Carrusel de fotografías", "Música y galería", "Secciones personalizadas"] },
    interactiva: { nombre: "Interactiva", precio: "$79.000",
      items: ["Todo lo del plan Esencial", "Animaciones y transiciones", "Carrusel de fotografías", "Música y galería", "Secciones personalizadas"],
      sigTitulo: "Con el plan Premium Experience ($115.000) sumás",
      sig: ["Diseño exclusivo desde cero", "Animaciones avanzadas", "Formulario de asistencia", "Cronograma, regalos y dress code", "Experiencia web personalizada"] },
    premium: { nombre: "Premium Experience", precio: "$115.000",
      items: ["Diseño exclusivo desde cero", "Animaciones avanzadas", "Formulario de asistencia", "Cronograma, regalos y dress code", "Experiencia web personalizada"],
      sigTitulo: "Proyectos exclusivos",
      sig: ["Muro de fotos en vivo", "Funcionalidades especiales (consultá por presupuesto)"] }
  };

  var tag = document.querySelector(".tag[data-plan]");
  if (!tag) return;
  var p = PLANES[tag.dataset.plan];
  if (!p) return;

  tag.setAttribute("role", "button");
  tag.setAttribute("tabindex", "0");
  tag.setAttribute("aria-haspopup", "dialog");
  tag.textContent = "Plan " + p.nombre;

  var li = function (a) { return a.map(function (t) { return "<li>" + t + "</li>"; }).join(""); };
  var ov = document.createElement("div");
  ov.className = "pb-ov";
  ov.innerHTML =
    '<div class="pb" role="dialog" aria-modal="true" aria-label="Qué incluye el plan ' + p.nombre + '">' +
    "<h3>Plan " + p.nombre + "</h3>" +
    '<div class="pr">' + p.precio + "</div>" +
    "<h4>Qué incluye</h4><ul>" + li(p.items) + "</ul>" +
    "<h4>" + p.sigTitulo + '</h4><ul class="up">' + li(p.sig) + "</ul>" +
    '<button type="button">Cerrar</button></div>';
  document.body.appendChild(ov);

  var close = ov.querySelector("button");
  function open() { ov.classList.add("open"); close.focus(); }
  function shut() { ov.classList.remove("open"); tag.focus(); }

  tag.addEventListener("click", open);
  tag.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  close.addEventListener("click", shut);
  ov.addEventListener("click", function (e) { if (e.target === ov) shut(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && ov.classList.contains("open")) shut(); });
})();
