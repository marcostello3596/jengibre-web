/* Comportamiento compartido: scroll suave, navegación, menú, rama dibujada y panel de reserva. */
(function () {
  const cfg = window.JENGIBRE || {};
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const hasGsap = typeof window.gsap !== 'undefined';

  if (hasGsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (hasGsap && window.SplitText) gsap.registerPlugin(SplitText);

  /* ---------- Scroll suave ---------- */
  let lenis = null;
  if (!reduce && window.Lenis && hasGsap) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const irA = (destino) => {
    const el = typeof destino === 'string' ? $(destino) : destino;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6 });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };
  $$('a[href^="#"]').forEach((a) => {
    const h = a.getAttribute('href');
    if (h.length < 2 || a.hasAttribute('data-reservar')) return;
    a.addEventListener('click', (e) => {
      const el = $(h);
      if (!el) return;
      e.preventDefault();
      cerrarMenu();
      irA(el);
    });
  });

  /* ---------- Navegación: se oculta al bajar, vuelve al subir ---------- */
  const nav = $('#nav');
  let ultimo = 0;
  const alScroll = () => {
    const y = window.scrollY;
    if (!nav) return;
    nav.classList.toggle('is-solida', y > 40);
    if (y > 160 && y > ultimo + 4) nav.classList.add('is-oculta');
    else if (y < ultimo - 4 || y < 160) nav.classList.remove('is-oculta');
    ultimo = y;
  };
  window.addEventListener('scroll', alScroll, { passive: true });

  /* ---------- Menú en celular ---------- */
  const menu = $('#menu');
  const abrir = $('#menu-abrir');
  function cerrarMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    abrir && abrir.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
    lenis && lenis.start();
    abrir && abrir.focus();
  }
  if (menu && abrir) {
    abrir.addEventListener('click', () => {
      menu.hidden = false;
      abrir.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      lenis && lenis.stop();
      $('#menu-cerrar').focus();
      if (hasGsap && !reduce) gsap.from($$('li', menu), { yPercent: 40, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power3.out' });
    });
    $('#menu-cerrar').addEventListener('click', cerrarMenu);
  }

  /* ---------- Rama dibujada: arma los trazos de la máscara ---------- */
  const SVGNS = 'http://www.w3.org/2000/svg';
  function prepararRama(svg) {
    const g = $('.rama-trazos', svg);
    if (!g || g.childElementCount) return $$('path', g || svg);
    (window.RAMA_TRAZOS || []).forEach((t) => {
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', t.d);
      p.dataset.s = t.s;
      g.appendChild(p);
    });
    const paths = $$('path', g);
    paths.forEach((p) => {
      const L = p.getTotalLength() + 2;
      p.style.strokeDasharray = L + ' ' + L;
      p.style.strokeDashoffset = L;
      p.dataset.l = L;
    });
    return paths;
  }
  /* Devuelve una línea de tiempo que dibuja la rama desde la base hacia las puntas. */
  function dibujarRama(svg, duracion = 1.8) {
    const paths = prepararRama(svg);
    const tl = gsap.timeline();
    if (!paths.length) return tl;
    const fin = Math.max(...paths.map((p) => +p.dataset.s + +p.dataset.l));
    const vel = fin / duracion;
    paths.forEach((p) => {
      tl.to(p, { strokeDashoffset: 0, duration: +p.dataset.l / vel, ease: 'none' }, +p.dataset.s / vel);
    });
    tl.eventCallback('onComplete', () => mostrarRamaEntera(svg));
    return tl;
  }
  function mostrarRamaEntera(svg) {
    $$('.rama-trazos path', svg).forEach((p) => { p.style.strokeDashoffset = 0; });
  }

  /* ---------- Panel de reserva ---------- */
  const panel = $('#reserva');
  const form = $('#reserva-form');
  let origen = null;
  const fechaLegible = (v) => {
    try {
      return new Date(v + 'T12:00:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
    } catch (e) { return v; }
  };
  if (panel && form) {
    const hora = $('#r-hora');
    const ini = cfg.horaApertura || 9, fin = cfg.horaCierre || 23;
    for (let h = ini; h < fin; h++) {
      ['00', '30'].forEach((m) => {
        const o = document.createElement('option');
        o.value = o.textContent = `${h}:${m}`;
        if (h === 21 && m === '00') o.selected = true;
        hora.appendChild(o);
      });
    }
    const hoy = new Date();
    const iso = new Date(hoy.getTime() - hoy.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    $('#r-fecha').min = iso;
    $('#r-fecha').value = iso;

    const abrirReserva = (motivo) => {
      origen = document.activeElement;
      if (motivo) $('#r-motivo').value = motivo;
      $('#r-listo').hidden = true;
      form.hidden = false;
      panel.hidden = false;
      document.body.classList.add('is-locked');
      lenis && lenis.stop();
      if (hasGsap && !reduce) {
        gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        gsap.fromTo($('.reserva__caja', panel), { xPercent: 100 }, { xPercent: 0, duration: 0.8, ease: 'expo.out' });
      }
      setTimeout(() => $('#r-nombre').focus(), 60);
    };
    const cerrarReserva = () => {
      panel.hidden = true;
      document.body.classList.remove('is-locked');
      lenis && lenis.start();
      origen && origen.focus && origen.focus();
    };
    $$('[data-reservar]').forEach((b) => b.addEventListener('click', (e) => {
      e.preventDefault();
      cerrarMenu();
      abrirReserva(b.dataset.motivo);
    }));
    $$('[data-cerrar-reserva]').forEach((b) => b.addEventListener('click', cerrarReserva));
    panel.addEventListener('click', (e) => { if (e.target === panel) cerrarReserva(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) cerrarReserva();
      if (e.key === 'Escape' && menu && !menu.hidden) cerrarMenu();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const err = $('#r-error');
      const faltan = [];
      if (!d.nombre.trim()) faltan.push('tu nombre');
      if (!d.fecha) faltan.push('el día');
      if (!(+d.personas > 0)) faltan.push('cuántas personas');
      if (faltan.length) {
        err.textContent = 'Completá ' + faltan.join(', ') + '.';
        err.hidden = false;
        return;
      }
      err.hidden = true;
      const n = +d.personas;
      const quien = n === 1 ? '1 persona' : `${n} personas`;
      let msg;
      if (d.motivo === 'evento') {
        msg = `Hola Jengibre, quiero consultar por un evento privado para ${quien} el ${fechaLegible(d.fecha)} a las ${d.hora}.`;
      } else {
        msg = `Hola Jengibre, quiero reservar una mesa para ${quien} el ${fechaLegible(d.fecha)} a las ${d.hora}.`;
      }
      if (d.playroom) msg += ' Vamos con chicos y queremos usar el playroom.';
      msg += ` Mi nombre es ${d.nombre.trim()}.`;
      $('#r-mensaje').textContent = msg;
      const enviar = $('#r-enviar');
      if (cfg.whatsapp) {
        enviar.href = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(msg)}`;
        enviar.removeAttribute('aria-disabled');
        $('#r-sin-numero').hidden = true;
      } else {
        enviar.href = '#';
        enviar.setAttribute('aria-disabled', 'true');
        $('#r-sin-numero').hidden = false;
      }
      form.hidden = true;
      $('#r-listo').hidden = false;
      enviar.focus();
    });
    $('#r-enviar').addEventListener('click', (e) => { if (!cfg.whatsapp) e.preventDefault(); });
    $('#r-editar').addEventListener('click', () => { $('#r-listo').hidden = true; form.hidden = false; $('#r-nombre').focus(); });
  }

  /* ---------- Datos de contacto desde la configuración ---------- */
  if (cfg.whatsappTexto) $$('[data-wa-texto]').forEach((el) => { el.textContent = cfg.whatsappTexto; });
  if (cfg.instagram) $$('[data-instagram]').forEach((el) => { el.href = cfg.instagram; el.hidden = false; });

  /* ---------- Revelado de textos por líneas ---------- */
  function revelarLineas(el, opts = {}) {
    if (!hasGsap || reduce || !window.SplitText) return;
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'linea-split' });
    gsap.from(split.lines, {
      yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.08,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      ...opts
    });
  }

  window.JG = { $, $$, reduce, lenis: () => lenis, dibujarRama, prepararRama, mostrarRamaEntera, revelarLineas, irA, hasGsap };
})();
