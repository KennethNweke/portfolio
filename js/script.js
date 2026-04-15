/* ============================================
   Kenneth Nweke Portfolio — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Theme Toggle ──────────────────────────────
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('kn-theme') || 'dark';
  if (savedTheme === 'light') body.classList.add('light');
  updateThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      const theme = body.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('kn-theme', theme);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    const isLight = body.classList.contains('light');
    themeBtn.innerHTML = isLight
      ? '<span>🌙</span> Dark'
      : '<span>☀️</span> Light';
  }

  // ── Mobile Nav ────────────────────────────────
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ── Active nav link ───────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll fade-in ────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  // ── Smooth internal anchor scroll ─────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Typewriter effect for hero title ──────────
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    const roles = [
      'Network & Cybersecurity Engineer',
      'Lecturer in Computing',
      'CCNA | AWS | Security+ Certified',
      'Penetration Testing & VAPT',
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pause = false;

    function type() {
      if (pause) {
        setTimeout(type, 1500);
        pause = false;
        return;
      }

      const current = roles[roleIdx];

      if (!deleting) {
        charIdx++;
        typewriterEl.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          pause = true;
          deleting = true;
        }
        setTimeout(type, 70);
      } else {
        charIdx--;
        typewriterEl.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
        setTimeout(type, 35);
      }
    }

    type();
  }

});
