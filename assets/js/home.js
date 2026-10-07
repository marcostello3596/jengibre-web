/* Home: preloader, hero, manifiesto, momentos, platos, eventos y footer. */
(function () {
  const { $, $$, reduce, dibujarRama, prepararRama, mostrarRamaEntera, revelarLineas, hasGsap } = window.JG;
  const pre = $('#pre');
  const video = $('#hero-video');
  const html = document.documentElement;

  const playVideo = (v) => { if (!v) return; v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); };

  /* Sin GSAP (CDN caído) o con movimiento reducido: todo visible y quieto. */
  if (!hasGsap || reduce) {
    if (pre) pre.hidden = true;
    $$('[data-rama]').forEach((svg) => { prepararRama(svg); mostrarRamaEntera(svg); });
    if (!reduce) playVideo(video);
    $$('video[data-autoplay]').forEach((v) => { v.preload = 'auto'; });
    return;
  }

  const mm = gsap.matchMedia();

  /* ---------- Intro del hero (después del preloader) ---------- */
  function introHero() {
    const tl = gsap.timeline();
    tl.from('.hero__titulo .l__in', { yPercent: 115, duration: 1.4, ease: 'expo.out', stagger: 0.12 })
      .from('.hero__meta .label', { opacity: 0, y: 12, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, 0.3)
      .from('.hero__media', { yPercent: 18, duration: 1.6, ease: 'expo.out' }, 0.15)
      .from('.nav', { yPercent: -100, duration: 1, ease: 'expo.out' }, 0.4)
      .add(dibujarRama($('[data-rama="hero"]'), 2.2), 0.5)
      .add(() => {
        // la rama lateral queda meciéndose apenas
        gsap.to('.hero__rama', { rotate: '+=2.5', duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    playVideo(video);
    return tl;
  }

  /* ---------- Preloader ---------- */
  function correrPreloader() {
    const lenis = window.JG.lenis();
    if (!pre || html.classList.contains('sin-pre')) {
      if (pre) pre.hidden = true;
      introHero();
      return;
    }
    lenis && lenis.stop();
    document.body.classList.add('is-locked');

    const listo = Promise.all([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      new Promise((r) => { if (!video || video.readyState >= 3) return r(); video.addEventListener('canplay', r, { once: true }); video.load(); })
    ]);
    const tope = new Promise((r) => setTimeout(r, 3600));
    const t0 = performance.now();

    const tl = gsap.timeline();
    tl.to('#pre-barra', { scaleX: 0.85, duration: 2.6, ease: 'power1.inOut' }, 0)
      .add(dibujarRama($('[data-rama="pre"]'), 1.8), 0.3)
      .to('.pre__marca', { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' }, 1.9)
      .to('.pre__bajada', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 2.4);

    tl.eventCallback('onComplete', () => {
      Promise.race([listo, tope]).then(() => {
        const espera = Math.max(0, 3000 - (performance.now() - t0)) / 1000;
        gsap.timeline({ delay: espera })
          .to('#pre-barra', { scaleX: 1, duration: 0.3, ease: 'power2.out' })
          .to('.pre__logo', { yPercent: -18, opacity: 0, duration: 0.7, ease: 'power3.in' }, 0.1)
          .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, 0.35)
          .add(introHero, 0.75)
          .add(() => {
            pre.hidden = true;
            document.body.classList.remove('is-locked');
            lenis && lenis.start();
            try { sessionStorage.setItem('jg-pre', '1'); } catch (e) {}
          });
      });
    });

    // Un clic o una tecla saltean el preloader
    const saltear = () => { tl.progress(1); window.removeEventListener('keydown', saltear); pre.removeEventListener('click', saltear); };
    window.addEventListener('keydown', saltear, { once: true });
    pre.addEventListener('click', saltear, { once: true });
  }

  /* ---------- Hero: el arco se abre hasta ocupar la pantalla ---------- */
  mm.add({ desktop: '(min-width: 901px)', mobile: '(max-width: 900px)' }, (ctx) => {
    const { desktop } = ctx.conditions;
    const desde = desktop ? 'inset(0% 28% 0% 28% round 48vw 48vw 0vw 0vw)' : 'inset(0% 8% 0% 8% round 46vw 46vw 0vw 0vw)';
    gsap.set('.hero__media', { clipPath: desde });
    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.hero__media-wrap', start: desktop ? 'top 62%' : 'top 25%', end: desktop ? 'top -40%' : 'top -30%', scrub: 1 }
    });
    tl.to('.hero__media', { clipPath: 'inset(0% 0% 0% 0% round 0vw 0vw 0vw 0vw)', ease: 'none', duration: 1 }, 0)
      .fromTo('.hero__media video', { scale: 1.18 }, { scale: 1, ease: 'none', duration: 1 }, 0)
      .to('.hero__overlay', { opacity: 1, duration: 0.3 }, 0.7);
    ScrollTrigger.create({ trigger: '.hero__media-wrap', start: 'top top', end: '+=40%', pin: desktop, pinSpacing: true });
    gsap.to('.hero__titulo', { yPercent: -25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  });

  /* ---------- Textos que entran por líneas ---------- */
  $$('[data-lineas]').forEach((el) => revelarLineas(el));

  /* ---------- Parallax de la tela de ramas y fotos ---------- */
  $$('[data-speed]').forEach((el) => {
    gsap.to(el, { yPercent: +el.dataset.speed * 3, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  $$('[data-parallax]').forEach((img) => {
    gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  $$('[data-sube]').forEach((el) => {
    gsap.from(el, { y: 90, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 45%', scrub: true } });
  });

  /* ---------- Momentos: scroll horizontal en desktop ---------- */
  mm.add('(min-width: 901px)', () => {
    const pista = $('#pista');
    const dist = () => pista.scrollWidth - window.innerWidth;
    const tween = gsap.to(pista, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: '.momentos__pin', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 }
    });
    $$('.momento__media > *', pista).forEach((m) => {
      gsap.to(m, { scale: 1, ease: 'none', scrollTrigger: { trigger: m.parentElement, containerAnimation: tween, start: 'left right', end: 'center center', scrub: true } });
    });
    $$('.momento__nombre', pista).forEach((n) => {
      gsap.from(n, { xPercent: 30, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: n, containerAnimation: tween, start: 'left right', end: 'left 55%', scrub: true } });
    });
  });
  mm.add('(max-width: 900px)', () => {
    $$('.momento__media > *').forEach((m) => {
      gsap.to(m, { scale: 1, ease: 'none', scrollTrigger: { trigger: m.parentElement, start: 'top bottom', end: 'center center', scrub: true } });
    });
  });
  // El video de la noche se reproduce solo cuando la sección está a la vista
  ScrollTrigger.create({ trigger: '#momentos', start: 'top bottom', end: 'bottom top',
    onToggle: (self) => $$('video[data-autoplay]').forEach((v) => { if (self.isActive) { v.preload = 'auto'; playVideo(v); } else v.pause(); }) });

  /* ---------- Platos: la foto sigue al cursor ---------- */
  mm.add('(min-width: 901px) and (hover: hover)', () => {
    const caja = $('.cursor-foto');
    const fotos = $$('img', caja);
    const xTo = gsap.quickTo(caja, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(caja, 'y', { duration: 0.6, ease: 'power3' });
    const mover = (e) => { xTo(e.clientX); yTo(e.clientY); };
    const lista = $('.platos__lista');
    lista.addEventListener('mousemove', mover);
    lista.addEventListener('mouseenter', () => gsap.to(caja, { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }));
    lista.addEventListener('mouseleave', () => gsap.to(caja, { opacity: 0, scale: 0.8, duration: 0.4, ease: 'power3.in' }));
    $$('.plato').forEach((pl) => pl.addEventListener('mouseenter', () => {
      fotos.forEach((f) => f.classList.toggle('is-on', f.dataset.k === pl.dataset.foto));
    }));
    return () => { lista.removeEventListener('mousemove', mover); };
  });
  gsap.from('.plato', { opacity: 0, y: 30, duration: 1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '.platos__lista', start: 'top 85%', once: true } });

  /* ---------- Eventos: la rama crece desde el borde con el scroll ---------- */
  const ramaEv = $('[data-rama="eventos"]');
  if (ramaEv) {
    const dib = dibujarRama(ramaEv, 1).pause();
    ScrollTrigger.create({ trigger: '.eventos', start: 'top 80%', end: 'center center', scrub: true, onUpdate: (s) => dib.progress(s.progress) });
  }

  /* ---------- Footer: el título entra palabra por palabra ---------- */
  gsap.from('.pie__titulo', { yPercent: 30, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.pie__panel', start: 'top 80%', once: true } });

  /* Recalcular cuando cargan fuentes e imágenes */
  if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());

  correrPreloader();
})();
