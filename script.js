/* ============================================
   COMERCIAL CH — JavaScript
   ============================================ */

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- Scroll reveal animations ----
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ---- Animated counters ----
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);
      
      counter.textContent = current + '+';
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }
    
    requestAnimationFrame(updateCounter);
  });
}

// Trigger counters when hero stats are visible
const heroStats = document.querySelector('.hero-stats');
let countersAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      countersAnimated = true;
      animateCounters();
    }
  });
}, { threshold: 0.5 });

if (heroStats) {
  statsObserver.observe(heroStats);
}

// ---- Product category filter ----
const categoryTabs = document.querySelectorAll('.category-tab');
const productCards = document.querySelectorAll('.product-card');

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const category = tab.getAttribute('data-category');
    
    // Filter products with animation
    productCards.forEach((card, index) => {
      const cardCategory = card.getAttribute('data-category');
      
      if (category === 'todos' || cardCategory === category) {
        card.style.display = '';
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s both`;
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---- WhatsApp order function ----
function orderProduct(productName) {
  const message = encodeURIComponent(
    `Hola Comercial CH 👋\n\nMe interesa pedir: *${productName}*\n\n¿Cuál es el precio y disponibilidad?`
  );
  window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight - 10;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ---- Dynamic open/closed status ----
function updateStatus() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;
  
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Sunday
  
  const dot = badge.querySelector('.dot');
  
  if (day === 0) {
    // Sunday - closed
    badge.innerHTML = '<span class="dot" style="background:#EF4444;animation:none;"></span> Cerrado hoy · Domingos no atendemos';
  } else if (hour >= 7 && hour < 15) {
    // Open
    badge.innerHTML = '<span class="dot"></span> Abierto ahora · 7:00 AM – 3:00 PM';
  } else {
    // Closed
    badge.innerHTML = '<span class="dot" style="background:#EF4444;animation:none;"></span> Cerrado · Abrimos mañana 7:00 AM';
  }
}

updateStatus();

// ---- Add loading animation to images ----
document.querySelectorAll('.product-image img').forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
  });
  
  if (!img.complete) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  }
});

console.log('🌾 Comercial CH — Sitio web cargado correctamente');
