// Funcionalidades principais do portfólio
// - menu mobile
// - efeito de digitação
// - animações ao rolar
// - transição entre páginas
// - validação do formulário

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initTypedText();
  initRevealOnScroll();
  initMobileMenu();
  initPageTransition();
  initTechBelt();
  initLightbox();
  initContactForm();
});

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initTypedText() {
  const typedEl = document.getElementById('typed');
  if (!typedEl) return;

  const words = ['JavaScript', 'Frontend', 'FastAPI', 'SQL', 'C#', 'C++', 'C', 'BackEnd'];
  const typingSpeed = 80;
  const pauseTime = 1200;

  let wordIndex = 0;
  let letterIndex = 0;
  let deleting = false;

  const type = () => {
    const currentWord = words[wordIndex];

    typedEl.textContent = currentWord.slice(0, letterIndex);

    if (!deleting && letterIndex < currentWord.length) {
      letterIndex += 1;
      setTimeout(type, typingSpeed);
      return;
    }

    if (!deleting && letterIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, pauseTime);
      return;
    }

    if (deleting && letterIndex > 0) {
      letterIndex -= 1;
      setTimeout(type, typingSpeed);
      return;
    }

    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  };

  type();
}

function initRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  elements.forEach((element) => observer.observe(element));
}

function initMobileMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('open');
    button.classList.remove('active');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menu');
  };

  const openMenu = () => {
    nav.classList.add('open');
    button.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Fechar menu');
  };

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = nav.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  nav.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(event.target) || button.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function initPageTransition() {
  const internalLinks = document.querySelectorAll('a[href]');

  internalLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || isIgnoredLink(link, href)) return;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.add('is-loading');

      setTimeout(() => {
        window.location.href = href;
      }, 520);
    });
  });

  setTimeout(() => document.body.classList.remove('is-loading'), 80);
}

function isIgnoredLink(link, href) {
  const external = href.startsWith('http') && !href.includes(location.host);
  return (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    link.target === '_blank' ||
    external
  );
}

function initTechBelt() {
  document.querySelectorAll('.tech-belt').forEach((container) => {
    const belt = container.querySelector('.belt');
    if (!belt) return;

    const originalItems = Array.from(belt.children).map((item) => item.cloneNode(true));
    const baseWidth = belt.scrollWidth;
    let position = 0;
    let speed = 0.4;
    let animationFrame;

    const fillBelt = () => {
      while (belt.scrollWidth < container.clientWidth + baseWidth) {
        originalItems.forEach((item) => belt.appendChild(item.cloneNode(true)));
      }
    };

    const animate = () => {
      position += speed;
      if (position >= baseWidth) position = 0;
      belt.style.transform = `translateX(${-position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    fillBelt();
    animate();

    container.addEventListener('mouseenter', () => { speed = 0; });
    container.addEventListener('mouseleave', () => { speed = 0.4; });

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationFrame);
      position = 0;
      belt.style.transform = 'translateX(0)';
      fillBelt();
      animate();
    });
  });
}

function initLightbox() {
  const images = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('siteLightbox');
  if (!images.length || !lightbox) return;

  const preview = lightbox.querySelector('.lb-img');
  const closeBtn = lightbox.querySelector('.lb-close');
  const prevBtn = lightbox.querySelector('.lb-prev');
  const nextBtn = lightbox.querySelector('.lb-next');

  let currentIndex = 0;

  const open = (index) => {
    currentIndex = (index + images.length) % images.length;
    preview.src = images[currentIndex].src;
    preview.alt = images[currentIndex].alt || 'Imagem ampliada';
    lightbox.hidden = false;
  };

  const close = () => {
    lightbox.hidden = true;
  };

  const navigate = (direction) => {
    open(currentIndex + direction);
  };

  images.forEach((image, index) => {
    image.addEventListener('click', () => open(index));
  });

  closeBtn?.addEventListener('click', close);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));

  window.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') navigate(-1);
    if (event.key === 'ArrowRight') navigate(1);
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const feedback = form.querySelector('.form-message');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const isValid = name.length > 1 && emailRegex.test(email) && message.length > 6;

    if (feedback) {
      feedback.textContent = isValid
        ? 'Mensagem enviada — obrigado!'
        : 'Preencha nome, e-mail válido e mensagem.';
    }

    if (isValid) form.reset();
  });
}
