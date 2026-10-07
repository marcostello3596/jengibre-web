/* Página de carta: arma las secciones desde carta-data.js y filtra por grupo. */
(function () {
  const { $, $$, reduce, dibujarRama, prepararRama, mostrarRamaEntera, revelarLineas, hasGsap } = window.JG;
  const carta = window.CARTA || [];
  const filtros = window.CARTA_FILTROS || [];
  const pesos = (n) => '$' + n.toLocaleString('es-AR');
  const cont = $('#carta');
  const barra = $('#filtros');

  // Secciones
  carta.forEach((sec) => {
    const el = document.createElement('section');
    el.className = 'seccion-carta';
    el.id = sec.id;
    el.dataset.grupo = sec.grupo;
    el.setAttribute('aria-labelledby', 't-' + sec.id);
    const cabeza = document.createElement('div');
    cabeza.className = 'seccion-carta__cabeza';
    cabeza.innerHTML = `<span class="label">${sec.items.length} opciones</span><h2 id="t-${sec.id}"></h2>${sec.nota ? '<p></p>' : ''}`;
    cabeza.querySelector('h2').textContent = sec.titulo;
    if (sec.nota) cabeza.querySelector('p').textContent = sec.nota;
    const ul = document.createElement('ul');
    ul.className = 'seccion-carta__items';
    sec.items.forEach((it) => {
      const li = document.createElement('li');
      li.className = 'item';
      const h3 = document.createElement('h3');
      h3.className = 'item__nombre';
      h3.textContent = it.n;
      li.appendChild(h3);
      const precio = document.createElement('span');
      precio.className = 'item__precio';
      precio.textContent = it.p ? pesos(it.p) : '';
      li.appendChild(precio);
      if (it.d) {
        const p = document.createElement('p');
        p.className = 'item__desc';
        p.textContent = it.d;
        li.appendChild(p);
      }
      ul.appendChild(li);
    });
    el.append(cabeza, ul);
    cont.appendChild(el);
  });

  // Filtros
  const secciones = $$('.seccion-carta', cont);
  const aplicar = (id, desplazar) => {
    $$('button', barra).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === id)));
    secciones.forEach((s) => { s.hidden = id !== 'todo' && s.dataset.grupo !== id; });
    if (hasGsap && !reduce) {
      gsap.fromTo(secciones.filter((s) => !s.hidden), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.06 });
      window.ScrollTrigger && ScrollTrigger.refresh();
    }
    if (desplazar) window.JG.irA('#carta-inicio');
    try { history.replaceState(null, '', id === 'todo' ? location.pathname : '#' + id); } catch (e) {}
  };
  const inner = document.createElement('div');
  inner.className = 'filtros__in';
  inner.setAttribute('role', 'group');
  inner.setAttribute('aria-label', 'Filtrar la carta');
  filtros.forEach((f) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.f = f.id;
    b.textContent = f.t;
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => aplicar(f.id, true));
    inner.appendChild(b);
  });
  barra.appendChild(inner);
  const inicial = (location.hash || '').slice(1);
  aplicar(filtros.some((f) => f.id === inicial) ? inicial : 'todo', false);

  // Rama y animaciones
  const rama = $('[data-rama="carta"]');
  if (!hasGsap || reduce) {
    if (rama) { prepararRama(rama); mostrarRamaEntera(rama); }
    return;
  }
  const tl = gsap.timeline({ delay: 0.15 });
  tl.from('.carta-hero h1 .l__in', { yPercent: 115, duration: 1.4, ease: 'expo.out', stagger: 0.12 })
    .from('.carta-hero p, .carta-hero .label', { opacity: 0, y: 14, duration: 0.9, ease: 'power2.out', stagger: 0.08 }, 0.4)
    .add(dibujarRama(rama, 2.2), 0.4);
  $$('.item').forEach((it) => {
    gsap.from(it, { opacity: 0, y: 18, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: it, start: 'top 92%', once: true } });
  });
  $$('[data-lineas]').forEach((el) => revelarLineas(el));
})();
