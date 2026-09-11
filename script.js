// Número de WhatsApp ficticio (demo) + mensaje precargado
  const WA_NUMBER = '5492215550198';
  const WA_MESSAGE = encodeURIComponent('Hola, vi la página de Nórdica Construcciones y quisiera solicitar información para realizar un presupuesto.');
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
  document.querySelectorAll('.wa-link').forEach(el => el.setAttribute('href', WA_URL));

  // Header sticky con cambio de estilo al scrollear
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Menú mobile
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Slider Antes/Después
  const baRange = document.getElementById('baRange');
  const baAfter = document.querySelector('.ba-after');
  const baHandle = document.getElementById('baHandle');
  function updateBa(val){
    baAfter.style.clipPath = `inset(0 0 0 ${val}%)`;
    baHandle.style.left = `${val}%`;
  }
  baRange.addEventListener('input', (e) => updateBa(e.target.value));
  updateBa(50);

  // Formulario de contacto (demo — no envía datos reales)
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    formMsg.classList.add('show');
    contactForm.reset();
    formMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
