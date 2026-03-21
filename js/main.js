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




// Año dinámico del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Dark / Light mode
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      // Modo oscuro activo
      themeToggleBtn.classList.remove("btn-dark");
      themeToggleBtn.classList.add("btn-light");
      themeToggleBtn.textContent = "☀️ Light mode";
    } else {
      // Modo claro (original)
      themeToggleBtn.classList.remove("btn-light");
      themeToggleBtn.classList.add("btn-dark");
      themeToggleBtn.textContent = "🌙 Dark mode";
    }
  });
}

// Inicializar EmailJS con tu clave pública
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

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tarjeta-personalizada');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform =
        'translateY(-8px) rotateX(3deg) rotateY(-3deg)';
      card.style.boxShadow =
        '0 18px 45px rgba(0, 0, 0, 0.65), 0 0 30px rgba(124, 58, 237, 0.55)';
      card.style.borderColor = 'rgba(129, 140, 248, 0.9)';
      card.style.background =
        'radial-gradient(circle at top left, #312e81, #020617)';
      card.querySelector('.card-title')?.classList.add('titulo-activo');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
      card.style.boxShadow = 'none';
      card.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      card.style.background =
        'radial-gradient(circle at top left, #1f2933, #0b0c10)';
      card.querySelector('.card-title')?.classList.remove('titulo-activo');
    });
  });
});

