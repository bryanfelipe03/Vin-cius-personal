// Navegação com scroll
const nav = document.querySelector('nav');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Adicionar classe quando scrollar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Toggle menu mobile
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('span');
    if (icon) {
      icon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    }
  });
}

// Função para scroll suave
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Fechar menu mobile se estiver aberto
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
  }
}

// Adicionar event listeners para todos os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// Adicionar event listeners para botões de navegação
document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-scroll');
    scrollToSection(targetId);
  });
});

// Função para abrir WhatsApp
function openWhatsApp(message) {
  const phoneNumber = '5518981678963'; // Substituir pelo número real
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Event listeners para botões de consultoria
document.querySelectorAll('[data-consultation]').forEach(button => {
  button.addEventListener('click', function() {
    const message = this.getAttribute('data-consultation');
    openWhatsApp(message);
  });
});

// Event listener para botão de contato principal
const mainContactBtn = document.querySelector('[data-main-contact]');
if (mainContactBtn) {
  mainContactBtn.addEventListener('click', function() {
    const message = 'Olá! Quero transformar minha vida com seus treinos!';
    openWhatsApp(message);
  });
}

// Animação de scroll reveal
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos com animação
document.querySelectorAll('.benefit-card, .consultation-card, .testimonial-card, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Log para debug
console.log('Script carregado com sucesso!');
