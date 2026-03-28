// Cerrar el menú colapsable al hacer clic en un enlace del navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Scroll suave para todos los enlaces que empiezan con #
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

//Hero
const hero = document.querySelector('.hero');
const heroTexto = document.getElementById('heroContenido');
const heroTitulo = document.getElementById('heroTitulo');
const heroDescripcion = document.getElementById('heroDescripcion');
const heroDetalle = document.getElementById('heroDetalle');
const heroPaso = document.getElementById('heroPaso');

const pasos = [
  {
    titulo: 'Desarrollador Java Full Stack Junior',
    descripcion: 'Construyo aplicaciones web responsivas con HTML, CSS, JavaScript, Java y DBases.',
    detalle: '***Haz click en este banner para ver cómo está construido este sitio.***',
    etiqueta: ''
  },
  {
    titulo: 'Animaciones y microinteracciones',
    descripcion: 'Este banner usa transiciones CSS y animaciones suaves para guiar tu atención.',
    detalle: 'Implementado con @keyframes, transitions y clases que se activan al hacer click.',
    etiqueta: ''
  },
  {
    titulo: 'Interacciones controladas por JavaScript',
    descripcion: 'Cada click cambia el contenido usando un arreglo de pasos y manejo de eventos.',
    detalle: 'Uso addEventListener, manipulación del DOM y un índice de estado en JS.',
    etiqueta: ''
  },
  {
    titulo: 'Diseño responsivo',
    descripcion: 'El layout se adapta con flexbox/grid y media queries para móvil y escritorio.',
    detalle: 'Probado en diferentes breakpoints para asegurar legibilidad y buena jerarquía visual.',
    etiqueta: ''
  },
  {
    titulo: 'Integración full stack',
    descripcion: 'Combino frontend moderno con backend en Java y bases de datos SQL.',
    detalle: 'Experiencia en e‑commerce, CRUD y consumo de APIs REST.',
    etiqueta: ''
  }
];

let indicePaso = 0;

function actualizarHero() {
  const paso = pasos[indicePaso];
  heroTitulo.textContent = paso.titulo;
  heroDescripcion.textContent = paso.descripcion;
  heroDetalle.textContent = paso.detalle;
  heroPaso.textContent = paso.etiqueta;
}

actualizarHero();

hero.addEventListener('click', () => {
  heroTexto.classList.add('cambiando');

  setTimeout(() => {
    indicePaso = (indicePaso + 1) % pasos.length; 
    actualizarHero();
    heroTexto.classList.remove('cambiando');
  }, 250);
});

  const cards = document.querySelectorAll('.apt-card');

  cards.forEach(card => {
    const glow = card.querySelector('.apt-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top  = `${y}px`;
      glow.style.opacity = '1';

      // opcional: tilt 3D
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `
        translateY(-6px)
        scale(1.03)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    card.addEventListener('mouseleave', () => {
      if (glow) glow.style.opacity = '0';
      card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.15,
    root: null,
    rootMargin: '0px 0px -5%'
  });

  revealItems.forEach(el => observer.observe(el));
});


// Año dinámico del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Dark / Light mode
const themeToggleBtn = document.getElementById("theme-toggle");
const logoGitHub = document.getElementById("logo-github");
const logoLinkedIn = document.getElementById("logo-linkedin");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      themeToggleBtn.classList.remove("btn-dark");
      themeToggleBtn.classList.add("btn-light");
      logoGitHub.src = "./media/logo_github-copia.png";
      logoLinkedIn.src = "./media/linkedin_logo-copia.png";
      themeToggleBtn.textContent = "☀️ Light mode";
    } else {
      themeToggleBtn.classList.remove("btn-light");
      themeToggleBtn.classList.add("btn-dark");
      logoGitHub.src = "./media/logo_github.png";
      logoLinkedIn.src = "./media/linkedin_logo.png";
      themeToggleBtn.textContent = "🌙 Dark mode";
    }
  });
}



// EmailJS
emailjs.init('ZBE-Geyt5dY4D8tk_');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_56qkuv2', 'template_8a3ijwf', this)
    .then(function(response) {
      document.getElementById('status').innerHTML = '<div class="alert alert-success">¡Mensaje enviado!</div>';
      this.reset();
    }, function(error) {
      document.getElementById('status').innerHTML = '<div class="alert alert-danger">Error: ' + error.text + '</div>';
    });
});


