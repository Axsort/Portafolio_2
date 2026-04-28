// ============================================================
//  EmailJS
// ============================================================
emailjs.init('ZBE-Geyt5dY4D8tk_');

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('service_56qkuv2', 'template_8a3ijwf', form)
    .then(function () {
      document.getElementById('status').innerHTML =
        '<div class="alert alert-success">¡Mensaje enviado!</div>';
      form.reset();
    }, function (error) {
      document.getElementById('status').innerHTML =
        '<div class="alert alert-danger">Error: ' + error.text + '</div>';
    });
});

// ============================================================
//  Utilidades
// ============================================================

function onDomReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

function smoothScrollTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  const headerOffset = document.querySelector('.navbar-head')?.offsetHeight || 0;
  const offsetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

// ============================================================
//  TERMINAL TYPEWRITER — secuencia de comandos
// ============================================================

/**
 * Escribe texto carácter a carácter en un elemento span.
 * Devuelve una Promise que resuelve cuando termina.
 */
function typeInto(el, text, speed = 45) {
  return new Promise((resolve) => {
    let i = 0;
    function tick() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed + Math.random() * 10); // ligera variación natural
      } else {
        resolve();
      }
    }
    tick();
  });
}

/**
 * Pausa X milisegundos.
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Ejecuta la secuencia completa del terminal:
 *   1. ls -la        → muestra output del ls
 *   2. git status    → muestra output del git
 *   3. cat README.md → tipea la descripción
 *   4. prompt final  con cursor
 */
async function runTerminalSequence() {
  const README_TEXT =
    `// Nombre  : Gabriel Adrian Castro Pérez 
// Rol     : Java Full Stack Developer Jr.
// Stack   : Java · Spring Boot · JS · Bootstrap · MySQL · REST APIs
// Estado  : disponible_para_contratacion = true

Construyo aplicaciones completas: frontend con JavaScript y Bootstrap,
backend con Java, Spring Boot y MySQL, APIs REST integradas y listas para producción. 
Proyectos reales entregados. código que otros desarrolladores pueden mantener sin sufrir. Listo para contribuir.`;

  // ── BLOQUE 1: ls -la ──────────────────────────────────────
  const lineLsCmd   = document.getElementById('line-ls-cmd');
  const cmdLs       = document.getElementById('cmd-ls');
  const outputLs    = document.getElementById('output-ls');

  if (!lineLsCmd) return; // si no existe el terminal, no hacer nada

  await wait(400);
  await typeInto(cmdLs, ' ls -la', 60);
  await wait(120);
  outputLs.style.display = 'block';

  // ── BLOQUE 2: git status ──────────────────────────────────
  const lineGitCmd  = document.getElementById('line-git-cmd');
  const cmdGit      = document.getElementById('cmd-git');
  const outputGit   = document.getElementById('output-git');

  await wait(500);
  lineGitCmd.style.display = 'flex';
  await typeInto(cmdGit, ' git status', 60);
  await wait(120);
  outputGit.style.display = 'block';

  // ── BLOQUE 3: cat README.md ───────────────────────────────
  const lineCatCmd  = document.getElementById('line-cat-cmd');
  const cmdCat      = document.getElementById('cmd-cat');
  const twTarget    = document.getElementById('typewriter-target');

  await wait(500);
  lineCatCmd.style.display = 'flex';
  await typeInto(cmdCat, ' cat README.md', 60);
  await wait(150);

  // Mostrar el párrafo y empezar a tipear
  twTarget.style.display = 'block';
  await typeInto(twTarget, README_TEXT, 14);

  // Quitar cursor parpadeante del párrafo al terminar
  twTarget.classList.add('done');

  // ── PROMPT FINAL ─────────────────────────────────────────
  await wait(200);
  const finalPrompt = document.getElementById('final-prompt');
  if (finalPrompt) finalPrompt.style.display = 'flex';
}

// ============================================================
//  Animaciones con IntersectionObserver
// ============================================================

function initRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

// ============================================================
//  Navegación: scroll suave + estado activo
// ============================================================

function initSmoothNav() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      event.preventDefault();
      smoothScrollTo(hash);

      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse?.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
      }
    });
  });
}

function initActiveSectionHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos    = window.scrollY;
    const headerOffset = document.querySelector('.navbar-head')?.offsetHeight || 0;
    let currentId = null;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop - headerOffset - 60) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const hash = link.getAttribute('href')?.replace('#', '');
      if (hash === currentId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================================
//  Navbar: fondo dinámico al hacer scroll
// ============================================================

function initNavbarScrollStyle() {
  const navbar = document.querySelector('.navbar-head');
  if (!navbar) return;

  const toggle = () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

// ============================================================
//  Micro-interacciones: cards del stack
// ============================================================

function initStackCardsHover() {
  const cards = document.querySelectorAll('.cards .card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform  = 'translateY(-6px) scale(1.01)';
      card.style.transition = 'transform 0.2s ease-out, box-shadow 0.2s ease-out';
      card.style.boxShadow  = '0 12px 30px rgba(0,0,0,0.6), 0 0 18px rgba(148,92,216,0.7)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = 'none';
    });
  });
}

// ============================================================
//  Inicialización
// ============================================================

onDomReady(() => {
  initRevealOnScroll();
  initSmoothNav();
  initActiveSectionHighlight();
  initNavbarScrollStyle();
  initStackCardsHover();
  runTerminalSequence();
});
