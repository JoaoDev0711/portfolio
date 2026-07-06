// Funções principais do portfólio: animações, menu, lightbox e formulário.
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initTypedText();
  initRevealOnScroll();
  initLightbox();
  initMobileMenu();
  initPageTransition();
  initTechBelt();
  initContactForm();
});

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const toggleHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };

  toggleHeader();
  window.addEventListener('scroll', toggleHeader, { passive: true });
}

function initTypedText() {
  const typedEl = document.getElementById('typed');
  if (!typedEl) return;

  const phrases = ['JavaScript', 'Frontend', 'FastAPI', 'SQL', 'C#', 'C++', 'C', 'SQL', 'BackEnd'];
  const speed = 80;
  const pause = 1200;

  let phraseIndex = 0;
  let charIndex = 0;
  let forward = true;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (forward) {
      charIndex += 1;
      typedEl.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === currentPhrase.length) {
        forward = false;
        setTimeout(typeLoop, pause);
        return;
      }
    } else {
      charIndex -= 1;
      typedEl.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === 0) {
        forward = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

function initRevealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));
}

function initLightbox() {
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('siteLightbox');

  if (!galleryImages.length || !lightbox) return;

  const imageElement = lightbox.querySelector('.lb-img');
  const closeButton = lightbox.querySelector('.lb-close');
  const prevButton = lightbox.querySelector('.lb-prev');
  const nextButton = lightbox.querySelector('.lb-next');
  const imageSources = galleryImages.map((image) => image.src);

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = (index + imageSources.length) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
  }

  function showImage(direction) {
    openLightbox(currentIndex + direction);
  }

  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
  });

  closeButton?.addEventListener('click', closeLightbox);
  prevButton?.addEventListener('click', () => showImage(-1));
  nextButton?.addEventListener('click', () => showImage(1));

  window.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;

    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showImage(-1);
    if (event.key === 'ArrowRight') showImage(1);
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initPageTransition() {
  window.setTimeout(() => {
    document.body.classList.remove('is-loading');
  }, 80);

  document.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href');

    if (!href) return;
    if (href.startsWith('#')) return;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (anchor.target === '_blank') return;

    const isExternal = href.startsWith('http') && !href.includes(location.host);
    if (isExternal) return;

    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.add('is-loading');

      window.setTimeout(() => {
        window.location.href = href;
      }, 520);
    });
  });
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

    function fillBelt() {
      const targetWidth = container.clientWidth + baseWidth;

      while (belt.scrollWidth < targetWidth) {
        originalItems.forEach((item) => belt.appendChild(item.cloneNode(true)));
      }
    }

    function animate() {
      position += speed;

      if (position >= baseWidth) {
        position = 0;
      }

      belt.style.transform = `translateX(${-position}px)`;
      animationFrame = requestAnimationFrame(animate);
    }

    fillBelt();
    animate();

    container.addEventListener('mouseenter', () => { speed = 0; });
    container.addEventListener('mouseleave', () => { speed = 0.4; });

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationFrame);
      belt.style.transform = 'translateX(0)';
      position = 0;
      fillBelt();
      animate();
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const feedback = form.querySelector('.form-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValid = name.length > 1 && validEmail && message.length > 6;

    if (feedback) {
      feedback.textContent = isValid
        ? 'Mensagem enviada — obrigado!'
        : 'Preencha nome, e-mail válido e mensagem.';
    }

    if (isValid) {
      form.reset();
    }
  });
}
