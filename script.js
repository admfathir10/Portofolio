// ============================================================
//  ARUMA STUDIO — script.js
// ============================================================

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
const spotlight = document.getElementById('spotlight');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  spotlight.style.setProperty('--mx', mx + 'px');
  spotlight.style.setProperty('--my', my + 'px');
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .filter-btn, .t-dot, .side-dot, .hobby-tag, .skill-card, .portfolio-item').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hovered'); ring.classList.add('hovered'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hovered'); ring.classList.remove('hovered'); });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.15 });
reveals.forEach(r => observer.observe(r));

// PORTFOLIO FILTER
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// SERVICE PICKER
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const layanan = card.dataset.service;
    const hidden = document.getElementById('layanan-hidden');
    if (hidden) hidden.value = layanan;
  });
});

// SECTION NAV DOTS
const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];
const dots = document.querySelectorAll('.side-dot');
const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight * 0.4;
  let activeIdx = 0;
  sectionEls.forEach((el, i) => { if (el && el.offsetTop <= scrollY) activeIdx = i; });
  dots.forEach((d, i) => { d.classList.toggle('active', i === activeIdx); });
});

// TESTIMONIAL DOTS
const tDots = document.querySelectorAll('.t-dot');
tDots.forEach((d, i) => {
  d.addEventListener('click', () => {
    tDots.forEach(t => t.classList.remove('active'));
    d.classList.add('active');
  });
});

// HERO LENS PARALLAX
window.addEventListener('mousemove', e => {
  const lens = document.querySelector('.hero-lens');
  if (!lens) return;
  const rx2 = (e.clientX / window.innerWidth - 0.5) * 20;
  const ry2 = (e.clientY / window.innerHeight - 0.5) * 20;
  lens.style.transform = `translateY(-50%) translate(${rx2}px, ${ry2}px)`;
});
