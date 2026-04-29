// ============================================================
//  i18n — Diccionario de traducciones
// ============================================================

const TRANSLATIONS = {
  es: {
    // Navbar
    navAbout:        'Sobre mí',
    navStack:        'Stack',
    navProjects:     'Proyectos',
    navContact:      'Contacto',
    btnCV:           'Descargar CV',

    // Lang toggle
    langFlag:        '🇺🇸',
    langLabel:       'EN',

    // Terminal — comandos
    termCmd1:        ' ls -la',
    termCmd2:        ' git status',
    termCmd3:        ' cat README.md',

    // Terminal — output ls
    lsProjects:      'proyectos/',

    // Descripción (typewriter)
    description:
      '// Nombre  : Gabriel Adrian Castro Pérez\n' +
      '// Rol     : Java Full Stack Developer Jr.\n' +
      '// Stack   : Java · Spring Boot · JS · Bootstrap · MySQL · REST APIs\n' +
      '// Estado  : disponible_para_contratacion = true\n\n' +
      'Construyo aplicaciones completas: frontend con JavaScript y Bootstrap,\n' +
      'backend con Java, Spring Boot y MySQL, APIs REST integradas y listas para producción.\n' +
      'Proyectos reales entregados. Código que otros desarrolladores pueden mantener sin sufrir.\n' +
      'Listo para contribuir.',

    // Stack
    stackTitle:      'Stack',
    cardTechTitle:   'Habilidades Técnicas',
    cardSoftTitle:   'Habilidades Blandas',
    liResponsive:    'Responsive Design',
    readMore:        'Leer más',
    soft1:           'Comunicación clara y efectiva',
    soft2:           'Trabajo colaborativo y en equipo',
    soft3:           'Resolución de problemas',
    soft4:           'Adaptabilidad y flexibilidad ante cambios',
    soft5:           'Confiabilidad y compromiso profesional',
    soft6:           'Disposición y actitud proactiva de ayuda',
    soft7:           'Inglés B1 (Letura técnica de documentación avanzado)',

    // Proyectos
    projectsTitle:   'Proyectos',
    p1Title:         'E-Commerce Mano A Mano',
    p1Desc:          'Proyecto integrador colaborativo en Generation México. HTML, CSS, Bootstrap y JavaScript con catálogo de productos y carrito funcional.',
    p2Title:         'Landing Page SportX',
    p2Desc:          'Landing page colaborativa entregada en un Hackathon de 7 horas. HTML, CSS, Bootstrap y JavaScript.',
    p3Title:         'Sistema Agenda Telefónica — Java',
    p3Desc:          'Aplicación 100% Java con gestión de contactos, detección de duplicados y arquitectura orientada a objetos.',
    p4Title:         'API REST — Java 17 + Spring Boot + Gradle',
    p4Desc:          'API RESTful completa con arquitectura MVC en capas (Controller, Service, Repository). Java 17 y Gradle como sistema de build moderno.',
    p5Title:         'ReactApp — Tic-Tac-Toe',
    p5Desc:          'Juego clásico del gato con React, gestión de estado con hooks y lógica de victoria.',

    // Contacto
    contactTitle:    'Hablemos de tu proyecto',
    contactSubtitle: '¿Tienes un proyecto en mente, necesitas un portafolio, o quieres que te ayude a desarrollar alguna idea? Escríbeme y en breve te respondo.',
    labelName:       'Tu nombre:',
    labelEmail:      'Correo electrónico:',
    labelMessage:    'Mensaje:',
    placeholderName: 'Ejemplo: Adrián Castro',
    placeholderMessage: 'Cuéntame un poco sobre tu proyecto, idea o necesidad (web, app, portafolio, etc.) y con gusto te ayudo a planearlo. ¡Recuerda, si lo puedes imaginar, lo podemos crear!',
    btnSend:         'Enviar mensaje',

    // Footer
    footerRole:      'Desarrollador Full Stack',

    // EmailJS feedback
    msgSuccess:      '¡Mensaje enviado!',
    msgError:        'Error: ',
  },

  en: {
    // Navbar
    navAbout:        'About me',
    navStack:        'Stack',
    navProjects:     'Projects',
    navContact:      'Contact',
    btnCV:           'Download CV',

    // Lang toggle
    langFlag:        '🇲🇽',
    langLabel:       'ES',

    // Terminal — comandos (se mantienen en inglés porque son comandos reales)
    termCmd1:        ' ls -la',
    termCmd2:        ' git status',
    termCmd3:        ' cat README.md',

    // Terminal — output ls
    lsProjects:      'projects/',

    // Descripción (typewriter) — traducción fiel al original
    description:
      '// Name   : Gabriel Adrian Castro Pérez\n' +
      '// Role   : Java Full Stack Developer Jr.\n' +
      '// Stack  : Java · Spring Boot · JS · Bootstrap · MySQL · REST APIs\n' +
      '// Status : available_for_hire = true\n\n' +
      'I build complete applications: frontend with JavaScript and Bootstrap,\n' +
      'backend with Java, Spring Boot and MySQL, REST APIs integrated and production-ready.\n' +
      'Real projects delivered. Code that other developers can maintain without suffering.\n' +
      'Ready to contribute.',

    // Stack
    stackTitle:      'Stack',
    cardTechTitle:   'Technical Skills',
    cardSoftTitle:   'Soft Skills',
    liResponsive:    'Responsive Design',
    readMore:        'Read more',
    soft1:           'Clear and effective communication',
    soft2:           'Collaborative teamwork',
    soft3:           'Problem-solving',
    soft4:           'Adaptability and flexibility to change',
    soft5:           'Reliability and professional commitment',
    soft6:           'Proactive and helpful attitude',
    soft7:           'English B1 (Advanced technical reading of documentation)',

    // Proyectos
    projectsTitle:   'Projects',
    p1Title:         'E-Commerce Mano A Mano',
    p1Desc:          'Collaborative integrating project at Generation México. HTML, CSS, Bootstrap, and JavaScript with a product catalog and functional shopping cart.',
    p2Title:         'Landing Page SportX',
    p2Desc:          'Collaborative landing page delivered at a 7-hour Hackathon. HTML, CSS, Bootstrap, and JavaScript.',
    p3Title:         'Phone Book System — Java',
    p3Desc:          '100% Java application for contact management, duplicate detection, and object-oriented architecture.',
    p4Title:         'REST API — Java 17 + Spring Boot + Gradle',
    p4Desc:          'Full RESTful API with layered MVC architecture (Controller, Service, Repository). Java 17 and Gradle as a modern build system.',
    p5Title:         'ReactApp — Tic-Tac-Toe',
    p5Desc:          'Classic Tic-Tac-Toe game built with React, state management using hooks, and win detection logic.',

    // Contacto
    contactTitle:    "Let's talk about your project",
    contactSubtitle: 'Do you have a project in mind, need a portfolio, or want help developing an idea? Write to me and I\'ll get back to you shortly.',
    labelName:       'Your name:',
    labelEmail:      'Email address:',
    labelMessage:    'Message:',
    placeholderName: 'Example: John Smith',
    placeholderMessage: 'Tell me a bit about your project, idea, or need (web, app, portfolio, etc.) and I\'ll be happy to help you plan it. Remember, if you can imagine it, we can create it!',
    btnSend:         'Send message',

    // Footer
    footerRole:      'Full Stack Developer',

    // EmailJS feedback
    msgSuccess:      'Message sent!',
    msgError:        'Error: ',
  }
};

// ============================================================
//  Estado del idioma actual
// ============================================================

let currentLang = 'es';

// ============================================================
//  applyTranslation — aplica el idioma a todo el DOM
// ============================================================

function applyTranslation(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // 1. Elementos con data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // 2. Elementos con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // 3. Botón de idioma — muestra la OPCIÓN CONTRARIA (hacia donde vas)
  const flagEl  = document.getElementById('lang-flag');
  const labelEl = document.getElementById('lang-label');
  if (flagEl)  flagEl.textContent  = t.langFlag;
  if (labelEl) labelEl.textContent = t.langLabel;

  // 4. Atributo lang del <html>
  document.getElementById('html-root')?.setAttribute('lang', lang);

  currentLang = lang;
}

// ============================================================
//  toggleLang — cambia entre ES y EN
// ============================================================

function toggleLang() {
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  const btn      = document.getElementById('lang-toggle');

  // Animación de flip
  btn?.classList.add('switching');
  setTimeout(() => btn?.classList.remove('switching'), 350);

  applyTranslation(nextLang);

  // Re-ejecutar el typewriter con el nuevo texto si ya estaba visible
  const twTarget = document.getElementById('typewriter-target');
  if (twTarget && twTarget.style.display !== 'none') {
    // Limpiamos el elemento primero; typeInto invalidará el token viejo al arrancar
    twTarget.classList.remove('done');
    twTarget.textContent = '';
    const finalPrompt = document.getElementById('final-prompt');
    if (finalPrompt) finalPrompt.style.display = 'none';

    typeInto(twTarget, TRANSLATIONS[nextLang].description, 12).then(() => {
      twTarget.classList.add('done');
      if (finalPrompt) finalPrompt.style.display = 'flex';
    });
  }
}

// ============================================================
//  EmailJS
// ============================================================

emailjs.init('ZBE-Geyt5dY4D8tk_');

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('service_56qkuv2', 'template_8a3ijwf', form)
    .then(function () {
      const t = TRANSLATIONS[currentLang];
      document.getElementById('status').innerHTML =
        `<div class="alert alert-success">${t.msgSuccess}</div>`;
      form.reset();
    }, function (error) {
      const t = TRANSLATIONS[currentLang];
      document.getElementById('status').innerHTML =
        `<div class="alert alert-danger">${t.msgError}${error.text}</div>`;
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
  const headerOffset   = document.querySelector('.navbar-head')?.offsetHeight || 0;
  const offsetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

// ============================================================
//  Terminal typewriter
// ============================================================

// Token global — al crear uno nuevo, el anterior queda invalidado automáticamente
let typewriterToken = null;

function typeInto(el, text, speed = 45) {
  // Genera un nuevo token; cualquier tick() previo que siga vivo lo detectará y se detendrá
  typewriterToken = {};
  const myToken = typewriterToken;

  return new Promise((resolve) => {
    let i = 0;
    function tick() {
      // Si ya no soy el typewriter activo → paro sin escribir nada más
      if (myToken !== typewriterToken) { resolve(); return; }

      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed + Math.random() * 18);
      } else {
        resolve();
      }
    }
    tick();
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTerminalSequence() {
  const t = TRANSLATIONS[currentLang];

  const lineLsCmd  = document.getElementById('line-ls-cmd');
  const cmdLs      = document.getElementById('cmd-ls');
  const outputLs   = document.getElementById('output-ls');

  if (!lineLsCmd) return;

  // BLOQUE 1: ls -la
  await wait(400);
  await typeInto(cmdLs, t.termCmd1, 60);
  await wait(120);
  outputLs.style.display = 'block';

  // BLOQUE 2: git status
  const lineGitCmd = document.getElementById('line-git-cmd');
  const cmdGit     = document.getElementById('cmd-git');
  const outputGit  = document.getElementById('output-git');

  await wait(500);
  lineGitCmd.style.display = 'flex';
  await typeInto(cmdGit, t.termCmd2, 60);
  await wait(120);
  outputGit.style.display = 'block';

  // BLOQUE 3: cat README.md
  const lineCatCmd = document.getElementById('line-cat-cmd');
  const cmdCat     = document.getElementById('cmd-cat');
  const twTarget   = document.getElementById('typewriter-target');

  await wait(500);
  lineCatCmd.style.display = 'flex';
  await typeInto(cmdCat, t.termCmd3, 60);
  await wait(150);

  twTarget.style.display = 'block';
  await typeInto(twTarget, t.description, 14);
  twTarget.classList.add('done');

  // Prompt final
  await wait(200);
  const finalPrompt = document.getElementById('final-prompt');
  if (finalPrompt) finalPrompt.style.display = 'flex';
}

// ============================================================
//  Reveal on scroll
// ============================================================

function initRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

// ============================================================
//  Smooth nav + sección activa
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
      if (scrollPos >= section.offsetTop - headerOffset - 60) currentId = section.id;
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
//  Navbar scroll style
// ============================================================

function initNavbarScrollStyle() {
  const navbar = document.querySelector('.navbar-head');
  if (!navbar) return;

  const toggle = () => navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

// ============================================================
//  Stack cards hover
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
  // Conectar botón de idioma
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);

  // Aplicar idioma por defecto (ES)
  applyTranslation('es');

  initRevealOnScroll();
  initSmoothNav();
  initActiveSectionHighlight();
  initNavbarScrollStyle();
  initStackCardsHover();
  runTerminalSequence();
});