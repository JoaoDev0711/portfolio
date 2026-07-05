// Lógica principal da página: animações, navegação, lightbox e formulário
document.addEventListener('DOMContentLoaded', () => {
  // encolher o cabeçalho ao rolar a página
  const header = document.querySelector('.site-header');
  const toggleHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', toggleHeader, { passive: true });

  // texto digitado no subtítulo
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const phrases = ['JavaScript', 'Frontend', 'FastAPI', 'SQL', 'C#', 'C++', 'C', 'SQL', 'BackEnd'];
    let pi = 0, ci = 0, forward = true;
    const speed = 80, pause = 1200;
    (function tick(){
      const full = phrases[pi];
      if (forward) {
        ci++; typedEl.textContent = full.slice(0,ci);
        if (ci === full.length) { forward = false; setTimeout(tick, pause); return; }
      } else {
        ci--; typedEl.textContent = full.slice(0,ci);
        if (ci === 0) { forward = true; pi = (pi+1)%phrases.length; }
      }
      setTimeout(tick, speed);
    })();
  }

  // revelar elementos ao rolar com a classe .reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add('visible'); o.unobserve(e.target);} });
    },{threshold:0.18});
    reveals.forEach(r=>obs.observe(r));
  }

  // pausar animação da correia ao passar o mouse
  document.querySelectorAll('.tech-belt').forEach(b=>{
    b.addEventListener('mouseenter', ()=> b.querySelectorAll('.belt').forEach(bb=>bb.style.animationPlayState='paused'));
    b.addEventListener('mouseleave', ()=> b.querySelectorAll('.belt').forEach(bb=>bb.style.animationPlayState='running'));
  });

  // galeria lightbox
  const galleryImgs = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('siteLightbox');
  const lbImg = lightbox?.querySelector('.lb-img');
  const lbClose = lightbox?.querySelector('.lb-close');
  const lbPrev = lightbox?.querySelector('.lb-prev');
  const lbNext = lightbox?.querySelector('.lb-next');
  let current = 0;
  const images = galleryImgs.map(i=>i.src);
  function open(idx){ if (!lightbox) return; current = (idx+images.length)%images.length; lbImg.src = images[current]; lightbox.hidden = false; }
  function close(){ if (!lightbox) return; lightbox.hidden = true; }
  function showNext(dir=1){ open(current+dir); }
  galleryImgs.forEach((img, i)=> img.addEventListener('click', ()=>open(i)));
  lbClose?.addEventListener('click', close);
  lbPrev?.addEventListener('click', ()=>showNext(-1));
  lbNext?.addEventListener('click', ()=>showNext(1));
  window.addEventListener('keydown', (e)=>{ if (lightbox && !lightbox.hidden){ if (e.key==='Escape') close(); if (e.key==='ArrowLeft') showNext(-1); if (e.key==='ArrowRight') showNext(1);} });

  // alternar menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    const toggleNav = () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    };

    menuToggle.addEventListener('click', toggleNav);
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      if (nav.classList.contains('open')) toggleNav();
    }));

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('open')) {
        toggleNav();
      }
    });
  }

  // animação de navegação entre páginas internas
  document.querySelectorAll('a[href]').forEach(anchor=>{
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || anchor.target === '_blank') return;
    const isExternal = href.startsWith('http') && !href.includes(location.host);
    if (isExternal) return;
    anchor.addEventListener('click', (ev)=>{
      ev.preventDefault();
      document.body.classList.add('is-loading');
      window.setTimeout(()=>{ window.location.href = href; }, 520);
    });
  });

  // transição inicial: remove a classe de carregamento quando a página terminar de carregar
  window.setTimeout(()=> document.body.classList.remove('is-loading'), 80);

  // correia de tecnologia contínua: clona os itens originais para manter o loop suave
  document.querySelectorAll('.tech-belt').forEach(container=>{
    const belt = container.querySelector('.belt');
    if (!belt) return;
    const originalItems = Array.from(belt.children).map(node => node.cloneNode(true));
    const baseWidth = belt.scrollWidth;
    const targetWidth = container.clientWidth + baseWidth;

    while (belt.scrollWidth < targetWidth) {
      originalItems.forEach(item => belt.appendChild(item.cloneNode(true)));
    }

    let pos = 0;
    let speed = 0.4; // px per frame
    let raf;
    const step = ()=>{
      pos += speed;
      if (pos >= baseWidth) pos = 0;
      belt.style.transform = `translateX(${-pos}px)`;
      raf = requestAnimationFrame(step);
    };
    step();
    container.addEventListener('mouseenter', ()=>{ speed = 0; });
    container.addEventListener('mouseleave', ()=>{ speed = 0.4; });
    window.addEventListener('resize', ()=>{ cancelAnimationFrame(raf); belt.style.transform = 'translateX(0)'; pos = 0; while (belt.scrollWidth < container.clientWidth + baseWidth) { originalItems.forEach(item => belt.appendChild(item.cloneNode(true))); } step(); });
  });

  // validação simples do formulário de contato
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const msg = form.querySelector('[name="message"]').value.trim();
      const feedback = form.querySelector('.form-message');
      const ok = name.length>1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && msg.length>6;
      if (feedback) feedback.textContent = ok? 'Mensagem enviada — obrigado!' : 'Preencha nome, e‑mail válido e mensagem.';
      if (ok) form.reset();
    });
  }
});
