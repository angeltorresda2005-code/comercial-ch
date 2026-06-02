/* ============================================
   COMERCIAL CH — JavaScript
   Catálogo completo de productos reales
   ============================================ */

// ---- PRODUCT DATA (from PRODUCTOS COMERCIAL CHONON) ----
const PRODUCTS = [
  // === HARINAS ===
  { name: "Harina de Cañihua", category: "harinas", img: "images/harinas.png", badge: "Andino" },
  { name: "Harina de Yuca", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Centeno", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Cacao", category: "harinas", img: "images/cafe.png" },
  { name: "Harina de Coca", category: "harinas", img: "images/harinas.png", badge: "Especial" },
  { name: "Harina de Tocosh", category: "harinas", img: "images/harinas.png", badge: "Medicinal" },
  { name: "Harina de Tarwi", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Mashua Negra", category: "harinas", img: "images/harinas.png", badge: "Andino" },
  { name: "Harina de Maíz Morado", category: "harinas", img: "images/maiz.png" },
  { name: "Harina para Tamales", category: "harinas", img: "images/maiz.png", badge: "Popular" },
  { name: "Harina de Kiwicha", category: "harinas", img: "images/cereales.png" },
  { name: "Harina de Quinua", category: "harinas", img: "images/quinua.png", badge: "⭐ Premium" },
  { name: "Harina de Arroz", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Almendras", category: "harinas", img: "images/semillas.png", badge: "Premium" },
  { name: "Harina de Algarrobo", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Siete Semillas", category: "harinas", img: "images/semillas.png", badge: "⭐ Premium" },
  { name: "Harina de Enamorados", category: "harinas", img: "images/harinas.png" },
  { name: "Harina para Ponche de Habas", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Soya", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Chufla", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Chochoca", category: "harinas", img: "images/maiz.png" },
  { name: "Harina de Alverja", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Papa Seca", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Frejoles", category: "harinas", img: "images/frejoles.png" },
  { name: "Harina de Garbanzos", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Lentejas", category: "harinas", img: "images/lentejas.png" },
  { name: "Harina de Pallares", category: "harinas", img: "images/menestras.png" },
  { name: "Harina de Linaza Cruda", category: "harinas", img: "images/semillas.png" },
  { name: "Harina de Linaza Tostada", category: "harinas", img: "images/semillas.png" },
  { name: "Harina de Alpiste", category: "harinas", img: "images/semillas.png" },
  { name: "Harina de Kión", category: "harinas", img: "images/especias.png" },
  { name: "Harina de Cúrcuma", category: "harinas", img: "images/especias.png" },
  { name: "Harina de Maca Amarilla", category: "harinas", img: "images/maca.png", badge: "Andino" },
  { name: "Harina de Maca Roja", category: "harinas", img: "images/maca.png", badge: "Andino" },
  { name: "Harina de Maca Negra", category: "harinas", img: "images/maca.png", badge: "⭐ Premium" },
  { name: "Harina de Ajonjolí", category: "harinas", img: "images/semillas.png" },
  { name: "Harina de Camote", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Maicena", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Avena", category: "harinas", img: "images/avena.png" },
  { name: "Harina del Norte", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Aguaje", category: "harinas", img: "images/harinas.png" },
  { name: "Harina de Camu Camu", category: "harinas", img: "images/harinas.png", badge: "Especial" },

  // === MENESTRAS ===
  { name: "Frejol Canario", category: "menestras", img: "images/frejoles.png", badge: "Popular" },
  { name: "Frejol Panamito", category: "menestras", img: "images/frejoles.png" },
  { name: "Frejol Caballero", category: "menestras", img: "images/frejoles.png" },
  { name: "Frejol Mantequilla Rojo", category: "menestras", img: "images/frejoles.png" },
  { name: "Frejol Mantequilla Marrón", category: "menestras", img: "images/frejoles.png" },
  { name: "Frejol Bayo", category: "menestras", img: "images/frejoles.png" },
  { name: "Frejol Negro", category: "menestras", img: "images/frejoles.png" },
  { name: "Pallares", category: "menestras", img: "images/menestras.png" },
  { name: "Garbanzos", category: "menestras", img: "images/menestras.png" },
  { name: "Lenteja BB", category: "menestras", img: "images/lentejas.png", badge: "Popular" },
  { name: "Lenteja Serrana", category: "menestras", img: "images/lentejas.png" },
  { name: "Alverjita Partida", category: "menestras", img: "images/menestras.png" },
  { name: "Habas Enteras", category: "menestras", img: "images/menestras.png" },

  // === GRANOS Y MAÍCES ===
  { name: "Quinua Perlada", category: "granos", img: "images/quinua.png", badge: "⭐ Premium" },
  { name: "Maíz Paccho (Chulpe)", category: "granos", img: "images/maiz.png" },
  { name: "Maíz Galleta", category: "granos", img: "images/maiz.png" },
  { name: "Maíz Canchero", category: "granos", img: "images/maiz.png", badge: "Popular" },
  { name: "Maíz Lorito Suavecito", category: "granos", img: "images/maiz.png" },
  { name: "Maíz Grande Imperial", category: "granos", img: "images/maiz.png" },
  { name: "Mote Grande Imperial", category: "granos", img: "images/maiz.png" },
  { name: "Maíz Perla", category: "granos", img: "images/maiz.png" },
  { name: "Trigo Shambar", category: "granos", img: "images/cereales.png" },
  { name: "Trigo para Hacer Arroz", category: "granos", img: "images/cereales.png" },
  { name: "Chía", category: "granos", img: "images/semillas.png", badge: "Superfood" },
  { name: "Ajonjolí Entero Crudo", category: "granos", img: "images/semillas.png" },
  { name: "Ajonjolí Entero Tostado", category: "granos", img: "images/semillas.png" },
  { name: "Linaza Entera", category: "granos", img: "images/semillas.png" },
  { name: "Cañihua Entera", category: "granos", img: "images/cereales.png", badge: "Andino" },
  { name: "Kiwicha Entera", category: "granos", img: "images/cereales.png", badge: "Andino" },
  { name: "Ñuña Pava", category: "granos", img: "images/frejoles.png" },
  { name: "Ñuña Negra", category: "granos", img: "images/frejoles.png" },

  // === HOJUELAS Y POP ===
  { name: "Hojuelas de Quinua", category: "hojuelas", img: "images/avena.png", badge: "Andino" },
  { name: "Hojuelas de Kiwicha", category: "hojuelas", img: "images/avena.png" },
  { name: "Hojuelas de Cañihua", category: "hojuelas", img: "images/avena.png" },
  { name: "Hojuelas de Avena", category: "hojuelas", img: "images/avena.png", badge: "Popular" },
  { name: "Quaker Grano de Oro", category: "hojuelas", img: "images/avena.png" },
  { name: "Kiwicha Pop", category: "hojuelas", img: "images/pop.png" },
  { name: "Cañihua Pop", category: "hojuelas", img: "images/pop.png" },
  { name: "Quinua Pop", category: "hojuelas", img: "images/pop.png" },
  { name: "Soya Pop", category: "hojuelas", img: "images/pop.png" },
  { name: "Trigo Pop con Azúcar", category: "hojuelas", img: "images/pop.png" },
  { name: "Trigo Pop sin Azúcar", category: "hojuelas", img: "images/pop.png" },
  { name: "Sémola", category: "hojuelas", img: "images/harinas.png" },

  // === CAFÉ Y ESPECIAS ===
  { name: "Cebada Tostada para Refresco", category: "cafe", img: "images/cafe.png" },
  { name: "Cebada Tostada para Café", category: "cafe", img: "images/cafe.png" },
  { name: "Café Entero Selecto Caracolillo", category: "cafe", img: "images/cafe.png", badge: "⭐ Selecto" },
  { name: "Café Tostado Entero", category: "cafe", img: "images/cafe.png" },
  { name: "Café Molido Puro de San Ignacio", category: "cafe", img: "images/cafe.png", badge: "⭐ Premium" },
  { name: "Café Puro de Jaén", category: "cafe", img: "images/cafe.png", badge: "Premium" },
  { name: "Canela Entera", category: "cafe", img: "images/especias.png" },
  { name: "Canela Molida", category: "cafe", img: "images/especias.png" },
  { name: "Clavo de Olor", category: "cafe", img: "images/especias.png" },

  // === OTROS ===
  { name: "Suplemento Infantil", category: "otros", img: "images/harinas.png", badge: "Especial" },
  { name: "Carapulcra", category: "otros", img: "images/harinas.png" },
  { name: "Chuño Inglés", category: "otros", img: "images/harinas.png" },
  { name: "Gelatina Fresa", category: "otros", img: "images/gelatina.png" },
  { name: "Gelatina Naranja", category: "otros", img: "images/gelatina.png" },
  { name: "Gelatina Piña", category: "otros", img: "images/gelatina.png" },
];

const CATEGORY_LABELS = {
  harinas: "🌾 Harinas",
  menestras: "🫘 Menestras",
  granos: "🌽 Granos y Maíces",
  hojuelas: "🥣 Hojuelas y Pop",
  cafe: "☕ Café y Especias",
  otros: "🧺 Otros",
};

// ---- Render products ----
const productsGrid = document.getElementById('productsGrid');
const productCountEl = document.getElementById('productCount');

function renderProducts(filter = 'todos', searchTerm = '') {
  const search = searchTerm.toLowerCase().trim();

  const filtered = PRODUCTS.filter(p => {
    const matchCategory = filter === 'todos' || p.category === filter;
    const matchSearch = !search || p.name.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  productCountEl.textContent = `Mostrando ${filtered.length} de ${PRODUCTS.length} productos`;

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results">
        <span class="no-results-icon">🔍</span>
        <h3>No se encontraron productos</h3>
        <p>Intenta con otro término de búsqueda o categoría</p>
      </div>`;
    return;
  }

  productsGrid.innerHTML = filtered.map((product, index) => {
    const catLabel = CATEGORY_LABELS[product.category] || product.category;
    const delay = Math.min(index * 0.03, 0.5);
    const badgeHTML = product.badge
      ? `<span class="product-badge">${product.badge}</span>`
      : '';

    return `
      <div class="product-card" data-category="${product.category}" style="animation: fadeInUp 0.5s ease ${delay}s both">
        <div class="product-image">
          <img src="${product.img}" alt="${product.name}" loading="lazy">
          ${badgeHTML}
        </div>
        <div class="product-info">
          <span class="product-category">${catLabel}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-footer">
            <span class="product-price-label">Consultar precio</span>
            <button class="product-order-btn" onclick="orderProduct('${product.name.replace(/'/g, "\\'")}')" aria-label="Pedir ${product.name} por WhatsApp">💬</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// Initial render
renderProducts();

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

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
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      counter.textContent = current + '+';
      if (progress < 1) requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
  });
}

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

if (heroStats) statsObserver.observe(heroStats);

// ---- Product category filter ----
let currentCategory = 'todos';
let currentSearch = '';

const categoryTabs = document.querySelectorAll('.category-tab');

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.getAttribute('data-category');
    renderProducts(currentCategory, currentSearch);
  });
});

// ---- Search functionality ----
const searchInput = document.getElementById('productSearch');

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderProducts(currentCategory, currentSearch);
});

// ---- WhatsApp order function ----
function orderProduct(productName) {
  const message = encodeURIComponent(
    `Hola Comercial CH 👋\n\nMe interesa pedir: *${productName}*\n\n¿Cuál es el precio y disponibilidad?`
  );
  window.open(`https://wa.me/51936999239?text=${message}`, '_blank');
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
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// ---- Dynamic open/closed status ----
function updateStatus() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;

  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  if (day === 0) {
    badge.innerHTML = '<span class="dot" style="background:#EF4444;animation:none;"></span> Cerrado hoy · Domingos no atendemos';
  } else if (hour >= 7 && hour < 15) {
    badge.innerHTML = '<span class="dot"></span> Abierto ahora · 7:00 AM – 3:00 PM';
  } else {
    badge.innerHTML = '<span class="dot" style="background:#EF4444;animation:none;"></span> Cerrado · Abrimos mañana 7:00 AM';
  }
}

updateStatus();

console.log(`🌾 Comercial CH — ${PRODUCTS.length} productos cargados`);
