// EmailJS
emailjs.init('ZBE-Geyt5dY4D8tk_');

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_56qkuv2', 'template_8a3ijwf', form)
    .then(function(response) {
      document.getElementById('status').innerHTML = '<div class="alert alert-success">¡Mensaje enviado!</div>';
      form.reset(); 
    }, function(error) {
      document.getElementById('status').innerHTML = '<div class="alert alert-danger">Error: ' + error.text + '</div>';
    });
});

// =============================
//  Utilidades generales
// =============================

/**
 * Ejecuta un callback cuando el DOM está listo.
 */
function onDomReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

/**
 * Scroll suave a una sección.
 */
function smoothScrollTo(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  const headerOffset = document.querySelector(".navbar-head")?.offsetHeight || 0;
  const elementPosition = target.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// =============================
//  Animaciones con IntersectionObserver
// =============================

/**
 * Aplica clases de animación a elementos con .reveal-on-scroll
 * usando IntersectionObserver para animaciones suaves y performantes.
 */
function initRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  const options = {
    threshold: 0.15,
  };

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, options);

  elements.forEach((el) => {
    observer.observe(el);
  });
}

// =============================
//  Navegación: scroll suave y estado activo
// =============================

/**
 * Inicializa el scroll suave en los enlaces del navbar.
 */
function initSmoothNav() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();
      smoothScrollTo(hash);

      // Cerrar el menú colapsable en mobile si está abierto
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse?.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse?.hide();
      }
    });
  });
}

/**
 * Marca el link activo según la sección visible.
 */
function initActiveSectionHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const sectionById = {};
  sections.forEach((section) => (sectionById[section.id] = section));

  const onScroll = () => {
    const scrollPos = window.scrollY;
    const headerOffset =
      document.querySelector(".navbar-head")?.offsetHeight || 0;

    let currentId = null;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - headerOffset - 60;
      if (scrollPos >= offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const hash = link.getAttribute("href")?.replace("#", "");
      if (hash === currentId) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// =============================
//  Navbar: fondo dinámico al hacer scroll
// =============================

function initNavbarScrollStyle() {
  const navbar = document.querySelector(".navbar-head");
  if (!navbar) return;

  const toggleClass = () => {
    if (window.scrollY > 10) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", toggleClass, { passive: true });
  toggleClass();
}

// =============================
//  Micro-interacciones extra
// =============================

/**
 * Efecto sutil al pasar sobre las cards del stack.
 */
function initStackCardsHover() {
  const cards = document.querySelectorAll(".cards .card");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px) scale(1.01)";
      card.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
      card.style.boxShadow =
        "0 12px 30px rgba(0, 0, 0, 0.6), 0 0 18px rgba(148, 92, 216, 0.7)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "none";
    });
  });
}

// =============================
//  Inicialización
// =============================

onDomReady(() => {
  initRevealOnScroll();
  initSmoothNav();
  initActiveSectionHighlight();
  initNavbarScrollStyle();
  initStackCardsHover();
});