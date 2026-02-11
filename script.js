// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-[#8B7355]', 'text-white');
      b.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    // Add active class to clicked button
    btn.classList.add('active', 'bg-[#8B7355]', 'text-white');
    btn.classList.remove('bg-gray-200', 'text-gray-700');
    
    const category = btn.getAttribute('data-category');
    
    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Initialize first button as active
filterBtns[0].classList.add('active', 'bg-[#8B7355]', 'text-white');
filterBtns.forEach((btn, index) => {
  if (index !== 0) {
    btn.classList.add('bg-gray-200', 'text-gray-700');
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  
  // Show success message (in a real app, you'd send this to a server)
  alert('Thank you for your message! I will get back to you within 24 hours.');
  
  // Reset form
  contactForm.reset();
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.classList.add('shadow-md');
  } else {
    nav.classList.remove('shadow-md');
  }
  
  lastScroll = currentScroll;
});

// Add transition to portfolio items
portfolioItems.forEach(item => {
  item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});