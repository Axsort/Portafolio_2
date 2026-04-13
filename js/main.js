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

//reveal on scroll
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