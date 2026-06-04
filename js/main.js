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
    p5Title:         'Sistema de inventarios',
    p5Desc:          'Aplicación fullstack para control de inventario empresarial con autenticación JWT, roles de usuario, gestión de productos, categorías, proveedores y movimientos de stock.',
    p6Title:         'Panel de automatización de tareas',
    p6Desc:          'AutoPanel es un panel web de automatización orientado a PYMEs. Define reglas "si X, entonces Y", ejecuta flujos de trabajo y monitorea la actividad del equipo desde un panel centralizado con auditoría de seguridad.',

    // Contacto
    contactTitle:    'Hablemos de tu proyecto',
    contactSubtitle: '¿Tienes un proyecto en mente, necesitas un portafolio, o quieres que te ayude a desarrollar alguna idea? Escríbeme y en breve te respondo.',
    labelName:       'Tu nombre:',
    labelEmail:      'Correo electrónico:',
    labelMessage:    'Mensaje:',
    placeholderName: 'Ejemplo: Adrián Castro',
    placeholderMessage: 'Cuéntame un poco sobre tu proyecto, idea o necesidad (web, app, portafolio, etc.) y con gusto te ayudo a planearlo. ¡Recuerda, si lo puedes imaginar, lo podemos crear!',
    btnSend:         'Enviar mensaje',

    // Proyectos — botones
    btnViewDemo:     '↗ Ver demo',
    btnViewCode:     '⌥ Ver código',

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

    // Terminal — comandos
    termCmd1:        ' ls -la',
    termCmd2:        ' git status',
    termCmd3:        ' cat README.md',

    // Terminal — output ls
    lsProjects:      'projects/',

    // Descripción (typewriter)
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
    p5Title:         'Inventory Management System',
    p5Desc:          'Full-stack application for enterprise inventory control with JWT authentication, user roles, and management of products, categories, suppliers and stock movements.',
    p6Title:         'Task Automation Panel',
    p6Desc:          'AutoPanel is a web-based task automation platform for SMEs. Define "if X, then Y" rules, execute internal workflows, and monitor team activity from a centralized dashboard with security auditing.',

    // Contacto
    contactTitle:    "Let's talk about your project",
    contactSubtitle: "Do you have a project in mind, need a portfolio, or want help developing an idea? Write to me and I'll get back to you shortly.",
    labelName:       'Your name:',
    labelEmail:      'Email address:',
    labelMessage:    'Message:',
    placeholderName: 'Example: John Smith',
    placeholderMessage: "Tell me a bit about your project, idea, or need (web, app, portfolio, etc.) and I'll be happy to help you plan it. Remember, if you can imagine it, we can create it!",
    btnSend:         'Send message',

    // Proyectos — botones
    btnViewDemo:     '↗ View demo',
    btnViewCode:     '⌥ View code',

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
//  Utilidades
// ============================================================

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

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
//  Terminal typewriter
// ============================================================

let typewriterToken = null;

function typeInto(el, text, speed = 45) {
  typewriterToken = {};
  const myToken = typewriterToken;

  return new Promise((resolve) => {
    let i = 0;
    function tick() {
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

  const lineLsCmd = document.getElementById('line-ls-cmd');
  const cmdLs     = document.getElementById('cmd-ls');
  const outputLs  = document.getElementById('output-ls');

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
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
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

  window.addEventListener('scroll', debounce(onScroll, 80), { passive: true });
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
//  Back to top button
// ============================================================

function initBackToTop() {
  const btn = document.getElementById('btn-back-top');
  if (!btn) return;

  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
  window.addEventListener('scroll', debounce(onScroll, 100), { passive: true });
  onScroll();
}

// ============================================================
//  Stack tabs — switching entre Técnicas y Blandas
// ============================================================

function initStackTabs() {
  const tabs  = document.querySelectorAll('.stack-tab');
  const panes = document.querySelectorAll('.stack-pane');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tab === target);
        t.setAttribute('aria-selected', t.dataset.tab === target);
      });
      panes.forEach(p => {
        p.classList.toggle('active', p.id === 'pane-' + target);
      });

      if (target === 'tech') {
        const canvas = document.getElementById('constellation-canvas');
        if (canvas) window.dispatchEvent(new Event('resize'));
      }
    });
  });
}

// ============================================================
//  EmailJS — inicializado dentro del DOMReady
// ============================================================

function initEmailJS() {
  if (typeof emailjs === 'undefined') {
    console.warn('EmailJS no está disponible');
    return;
  }

  emailjs.init('ZBE-Geyt5dY4D8tk_');

  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const statusEl = document.getElementById('status');

    emailjs.sendForm('service_56qkuv2', 'template_8a3ijwf', form)
      .then(function () {
        const t = TRANSLATIONS[currentLang];
        if (statusEl) statusEl.innerHTML =
          `<div class="alert alert-success">${t.msgSuccess}</div>`;
        form.reset();
      }, function (error) {
        const t = TRANSLATIONS[currentLang];
        if (statusEl) statusEl.innerHTML =
          `<div class="alert alert-danger">${t.msgError}${error.text ?? 'desconocido'}</div>`;
      });
  });
}

// ============================================================
//  Inicialización
// ============================================================

onDomReady(() => {
  // Aplicar idioma por defecto (ES)
  applyTranslation('es');

  // Conectar botón de idioma
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);

  initRevealOnScroll();
  initSmoothNav();
  initActiveSectionHighlight();
  initNavbarScrollStyle();
  initStackTabs();
  initBackToTop();
  initEmailJS();
  runTerminalSequence();
  initConstellation();
  initGears();
});

// ============================================================
//  TECH CONSTELLATION — Canvas interactivo
// ============================================================

function initConstellation() {
  const TECHS = [
    { id: 'html5',    label: 'HTML5',        cat: 'frontend', emoji: '🌐', color: '#58a6ff' },
    { id: 'css',      label: 'CSS',          cat: 'frontend', emoji: '🎨', color: '#58a6ff' },
    { id: 'bootstrap',label: 'Bootstrap',    cat: 'frontend', emoji: '🅱', color: '#58a6ff' },
    { id: 'js',       label: 'JavaScript',   cat: 'frontend', emoji: '⚡', color: '#58a6ff' },
    { id: 'resp',     label: 'Responsive',   cat: 'frontend', emoji: '📱', color: '#58a6ff' },
    { id: 'java',     label: 'Java',         cat: 'lang',     emoji: '☕', color: '#f78166' },
    { id: 'python',   label: 'Python',       cat: 'lang',     emoji: '🐍', color: '#f78166' },
    { id: 'spring',   label: 'Spring Boot',  cat: 'backend',  emoji: '🌿', color: '#3fb950' },
    { id: 'mvc',      label: 'MVC',          cat: 'backend',  emoji: '🏗', color: '#3fb950' },
    { id: 'micro',    label: 'Microservices',cat: 'backend',  emoji: '🔬', color: '#3fb950' },
    { id: 'api',      label: 'APIs REST',    cat: 'test',     emoji: '🔗', color: '#79c0ff' },
    { id: 'postman',  label: 'Postman',      cat: 'test',     emoji: '📬', color: '#79c0ff' },
    { id: 'unit',     label: 'Unit Test',    cat: 'test',     emoji: '✅', color: '#79c0ff' },
    { id: 'integ',    label: 'Integ. Test',  cat: 'test',     emoji: '🔄', color: '#79c0ff' },
    { id: 'mysql',    label: 'MySQL',        cat: 'db',       emoji: '🗄', color: '#d2a8ff' },
    { id: 'sql',      label: 'SQL',          cat: 'db',       emoji: '📊', color: '#d2a8ff' },
    { id: 'gradle',   label: 'Gradle/Maven', cat: 'devops',   emoji: '🛠', color: '#ffa657' },
    { id: 'git',      label: 'Git/GitHub',   cat: 'devops',   emoji: '🐙', color: '#ffa657' },
    { id: 'gitflow',  label: 'GitFlow',      cat: 'devops',   emoji: '🌊', color: '#ffa657' },
    { id: 'docker',   label: 'Docker',       cat: 'devops',   emoji: '🐳', color: '#ffa657' },
    { id: 'aws',      label: 'AWS',          cat: 'devops',   emoji: '☁️', color: '#ffa657' },
  ];

  const EDGES = [
    ['html5','css'],['css','bootstrap'],['bootstrap','js'],['js','resp'],
    ['java','spring'],['java','mvc'],['java','python'],['spring','gradle'],
    ['spring','mvc'],['mvc','micro'],['spring','api'],['api','postman'],
    ['api','unit'],['unit','integ'],['mysql','sql'],['sql','spring'],
    ['gradle','docker'],['git','gitflow'],['docker','aws'],['git','spring'],
    ['js','api'],['java','unit'],['spring','micro'],['aws','micro'],
  ];

  const STARS = Array.from({ length: 70 }, (_, i) => ({
    x: ((i * 2654435769 >>> 0) % 10000) / 10000,
    y: ((i * 2246822519 >>> 0) % 10000) / 10000,
    r: 0.4 + ((i * 1234567891 >>> 0) % 10) / 10 * 0.8,
    a: 0.08 + ((i * 987654321 >>> 0) % 10) / 10 * 0.25,
  }));

  const canvas = document.getElementById('constellation-canvas');
  const tip    = document.getElementById('constellation-tip');
  const wrap   = document.getElementById('constellation-wrap');
  if (!canvas || !wrap) return;

  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, nodes = [], hoverId = null;
  let rafId = null;

  function buildNodes(w, h) {
    const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.38;
    const cats = [...new Set(TECHS.map(t => t.cat))];
    return TECHS.map((t, ri) => {
      const sc = TECHS.filter(x => x.cat === t.cat), ci = sc.indexOf(t);
      const base = cats.indexOf(t.cat) * (Math.PI * 2 / cats.length);
      const a = base + (ci - (sc.length - 1) / 2) * 0.3;
      const rv = 0.72 + ((ri * 3141592653 >>> 0) % 1000) / 1000 * 0.26;
      return { ...t, ox: cx + Math.cos(a) * R * rv, oy: cy + Math.sin(a) * R * rv, x: 0, y: 0, nr: w < 480 ? 16 : 20 };
    });
  }

  function setSize() {
    const nw = Math.round(wrap.getBoundingClientRect().width);
    const nh = canvas.offsetHeight || 260;
    if (nw === W && nh === H) return false;
    W = nw; H = nh;
    const dpr = devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = buildNodes(W, H);
    return true;
  }

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, W, H);

    // Estrellas
    STARS.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${s.a})`;
      ctx.fill();
    });

    // Flotación suave de nodos
    nodes.forEach(n => {
      n.x = n.ox + Math.sin(ts / 1800 + n.ox * 0.01) * 5;
      n.y = n.oy + Math.cos(ts / 2200 + n.oy * 0.01) * 4;
    });

    const nMap = Object.fromEntries(nodes.map(n => [n.id, n]));

    // Aristas
    EDGES.forEach(([a, b]) => {
      const na = nMap[a], nb = nMap[b];
      if (!na || !nb) return;
      const isHov  = hoverId && (na.id === hoverId || nb.id === hoverId);
      const pulse  = Math.sin(ts / 900 + na.ox + nb.ox) * 0.5 + 0.5;
      ctx.save();
      ctx.globalAlpha  = isHov ? 0.75 : 0.09 + pulse * 0.06;
      ctx.strokeStyle  = isHov ? na.color : '#58a6ff';
      ctx.lineWidth    = isHov ? 1.5 : 0.6;
      ctx.setLineDash(isHov ? [] : [3, 4]);
      ctx.beginPath(); ctx.moveTo(na.x, na.y); ctx.lineTo(nb.x, nb.y); ctx.stroke();
      ctx.restore();

      if (isHov) {
        const t2 = (ts / 700) % 1;
        ctx.save(); ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(na.x + (nb.x - na.x) * t2, na.y + (nb.y - na.y) * t2, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = na.color; ctx.fill(); ctx.restore();
      }
    });

    // Nodos
    nodes.forEach(n => {
      const isHov = n.id === hoverId, r = n.nr * (isHov ? 1.18 : 1);
      ctx.save(); ctx.translate(n.x, n.y);
      if (isHov) {
        const g = ctx.createRadialGradient(0, 0, r * 0.5, 0, 0, r * 2.5);
        g.addColorStop(0, n.color + '33'); g.addColorStop(1, n.color + '00');
        ctx.beginPath(); ctx.arc(0, 0, r * 2.5, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = '#161b22'; ctx.fill();
      ctx.strokeStyle = n.color; ctx.lineWidth = isHov ? 1.8 : 0.9;
      ctx.globalAlpha = isHov ? 1 : 0.85; ctx.stroke();
      ctx.font = `${r * 0.9}px serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.globalAlpha = 1; ctx.fillText(n.emoji, 0, 1);
      ctx.font = `${W < 480 ? 9 : 10}px monospace`;
      ctx.fillStyle = isHov ? n.color : '#8b949e';
      ctx.globalAlpha = isHov ? 1 : 0.8;
      ctx.fillText(n.label, 0, r + 11);
      ctx.restore();
    });

    rafId = requestAnimationFrame(draw);
  }

  setSize();
  rafId = requestAnimationFrame(draw);

  let rsz = null;
  new ResizeObserver(() => {
    clearTimeout(rsz);
    rsz = setTimeout(() => setSize(), 120);
  }).observe(wrap);

  // Interacción mouse
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    let found = null;
    nodes.forEach(n => {
      const dx = n.x - mx, dy = n.y - my;
      if (Math.sqrt(dx * dx + dy * dy) < n.nr + 8) found = n;
    });
    hoverId = found ? found.id : null;
    if (found) {
      tip.style.opacity = '1';
      const lx = found.x + found.nr + 6;
      tip.style.left = (lx + 180 > W ? found.x - found.nr - 130 : lx) + 'px';
      tip.style.top  = (found.y - 16) + 'px';
      const nb = EDGES.filter(([a, b]) => a === found.id || b === found.id).length;
      tip.innerHTML = `<strong style="color:${found.color}">${found.label}</strong><br>conexiones: ${nb}`;
    } else {
      tip.style.opacity = '0';
    }
  });

  canvas.addEventListener('mouseleave', () => { hoverId = null; tip.style.opacity = '0'; });
}

// ============================================================
//  GEARS SOFT SKILLS — SVG animado
// ============================================================

function initGears() {
  const SKILLS = [
    { name: 'Comunicación clara y efectiva',       desc: 'Expreso ideas técnicas y no técnicas de forma precisa en cualquier contexto.',              color: '#3fb950' },
    { name: 'Trabajo colaborativo y en equipo',    desc: 'Contribuyo activamente en entornos ágiles y colaborativos, adaptándome al ritmo del grupo.', color: '#58a6ff' },
    { name: 'Resolución de problemas',             desc: 'Analizo, descompongo y resuelvo desafíos técnicos de forma sistemática y creativa.',         color: '#ffa657' },
    { name: 'Adaptabilidad y flexibilidad',        desc: 'Me ajusto rápido a nuevos stacks, metodologías y cambios de prioridad sin perder el foco.',  color: '#d2a8ff' },
    { name: 'Confiabilidad y compromiso',          desc: 'Cumplo los acuerdos, tiempos y entregables. Mi código llega cuando se espera.',              color: '#f78166' },
    { name: 'Actitud proactiva y de ayuda',        desc: 'Anticipo problemas, propongo mejoras y apoyo activamente a mis compañeros de equipo.',       color: '#f0728f' },
    { name: 'Inglés B1 — lectura técnica avanzada',desc: 'Consumo documentación técnica, RFCs y papers en inglés sin fricción.',                       color: '#7ee787' },
  ];

  function gearPath(teeth, R, r) {
    const step = Math.PI * 2 / teeth, half = step * 0.38;
    let d = '';
    for (let i = 0; i < teeth; i++) {
      const a0 = i * step - half, a1 = i * step + half;
      const a2 = a1 + step * 0.08, a3 = (i + 1) * step - half - step * 0.08;
      if (i === 0) d += `M${r * Math.cos(a0)},${r * Math.sin(a0)}`;
      d += ` L${R * Math.cos(a0)},${R * Math.sin(a0)}`;
      d += ` L${R * Math.cos(a1)},${R * Math.sin(a1)}`;
      d += ` L${r * Math.cos(a2)},${r * Math.sin(a2)}`;
      d += ` L${r * Math.cos(a3)},${r * Math.sin(a3)}`;
    }
    return d + 'Z';
  }

  [[16, 64, 56], [10, 44, 38], [10, 44, 38], [10, 44, 38], [10, 44, 38], [10, 44, 38], [10, 44, 38]]
    .forEach(([t, R, r], i) => {
      const el = document.getElementById('gp' + i);
      if (el) el.setAttribute('d', gearPath(t, R, r));
    });

  const angles  = [0, 0, 0, 0, 0, 0, 0];
  const dirs    = [1, -1, 1, -1, 1, -1, 1];
  const speeds  = [0.3, 0.54, 0.54, 0.54, 0.54, 0.54, 0.54];
  const centers = [[340, 198], [340, 84], [468, 136], [468, 260], [340, 312], [212, 260], [212, 136]];

  let hovered = null, lastTs = null;

  const nameEl = document.getElementById('gears-name');
  const descEl = document.getElementById('gears-desc');

  document.querySelectorAll('.gear-grp').forEach(g => {
    const i = +g.dataset.idx;
    g.addEventListener('mouseenter', () => {
      hovered = i;
      if (nameEl) { nameEl.textContent = '▶ ' + SKILLS[i].name; nameEl.style.color = SKILLS[i].color; }
      if (descEl) descEl.textContent = SKILLS[i].desc;
    });
    g.addEventListener('mouseleave', () => {
      hovered = null;
      if (nameEl) { nameEl.textContent = '▶ Selecciona un engranaje'; nameEl.style.color = '#e6edf3'; }
      if (descEl) descEl.textContent = '';
    });
  });

  function tick(ts) {
    if (!lastTs) lastTs = ts;
    const dt = Math.min((ts - lastTs) / 1000, 0.05);
    lastTs = ts;

    angles.forEach((_, i) => {
      angles[i] += dirs[i] * speeds[i] * dt * (hovered !== null ? 0.12 : 1) * 60;
    });

    angles.forEach((a, i) => {
      const el = document.getElementById('gr' + i);
      if (el) el.setAttribute('transform', `translate(${centers[i][0]},${centers[i][1]}) rotate(${a})`);
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
