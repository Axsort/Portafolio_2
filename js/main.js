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
