// script.js - ARUMA STUDIO Portfolio
// 1. Custom Cursor
// 2. Scroll Reveal
// 3. Portfolio Filter
// 4. Service Picker
// 5. Side Nav Dots
// 6. Testimonial Dots
// 7. Hero Lens Parallax
// 8. YouTube Modal Player

// ---- 1. CUSTOM CURSOR ----
var cursor    = document.getElementById('cursor');
var ring      = document.getElementById('cursorRing');
var spotlight = document.getElementById('spotlight');
var mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  spotlight.style.setProperty('--mx', mx + 'px');
  spotlight.style.setProperty('--my', my + 'px');
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Elemen yang perbesar cursor saat hover
var hoverTargets = document.querySelectorAll(
  'a, button, .filter-btn, .t-dot, .side-dot, .hobby-tag, .skill-card, .portfolio-item, .service-card, .yt-modal-close'
);
hoverTargets.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursor.classList.add('hovered');
    ring.classList.add('hovered');
  });
  el.addEventListener('mouseleave', function() {
    cursor.classList.remove('hovered');
    ring.classList.remove('hovered');
  });
});


// ---- 2. SCROLL REVEAL ----
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function(r) {
  revealObs.observe(r);
});


// ---- 3. PORTFOLIO FILTER ----
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.portfolio-item').forEach(function(item) {
      if (filter === 'all' || item.getAttribute('data-cat') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// ---- 4. SERVICE PICKER ----
document.querySelectorAll('.service-card').forEach(function(card) {
  card.addEventListener('click', function() {
    document.querySelectorAll('.service-card').forEach(function(c) {
      c.classList.remove('active');
    });
    card.classList.add('active');
    var layanan = card.getAttribute('data-service');
    var hidden  = document.getElementById('layanan-hidden');
    if (hidden) hidden.value = layanan;
  });
});


// ---- 5. SIDE NAV DOTS ----
var sections   = ['hero', 'about', 'skills', 'portfolio', 'contact'];
var sideDots   = document.querySelectorAll('.side-dot');
var sectionEls = sections.map(function(id) {
  return document.getElementById(id);
}).filter(Boolean);

window.addEventListener('scroll', function() {
  var scrollY   = window.scrollY + window.innerHeight * 0.4;
  var activeIdx = 0;
  sectionEls.forEach(function(el, i) {
    if (el && el.offsetTop <= scrollY) activeIdx = i;
  });
  sideDots.forEach(function(d, i) {
    d.classList.toggle('active', i === activeIdx);
  });
});


// ---- 6. TESTIMONIAL AUTO-SLIDER ----
(function() {
  var slides      = document.querySelectorAll('.t-slide');
  var dots        = document.querySelectorAll('.t-dot');
  var prevBtn     = document.getElementById('tPrev');
  var nextBtn     = document.getElementById('tNext');
  var progressBar = document.getElementById('tProgressBar');
  if (!slides.length) return;

  var current  = 0;
  var total    = slides.length;
  var timer    = null;
  var DURATION = 5000;

  function goTo(index) {
    var direction = index > current ? 'next' : 'prev';

    slides[current].classList.remove('active');
    slides[current].classList.add('leaving-' + direction);
    dots[current].classList.remove('active');

    current = (index + total) % total;

    slides[current].classList.add('entering-' + direction);
    slides[current].offsetHeight; // force reflow
    slides[current].classList.add('active');
    slides[current].classList.remove('entering-' + direction);
    dots[current].classList.add('active');

    setTimeout(function() {
      slides.forEach(function(s) {
        s.classList.remove('leaving-next', 'leaving-prev');
      });
    }, 600);

    resetProgress();
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() { goTo(current + 1); }, DURATION);
  }

  function resetProgress() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    progressBar.offsetHeight; // force reflow
    progressBar.style.transition = 'width ' + DURATION + 'ms linear';
    progressBar.style.width = '100%';
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var idx = parseInt(dot.getAttribute('data-index'));
      if (idx !== current) { goTo(idx); startTimer(); }
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { goTo(current + 1); startTimer(); });

  // Pause saat hover
  var section = document.querySelector('.testimonial');
  if (section) {
    section.addEventListener('mouseenter', function() { clearInterval(timer); });
    section.addEventListener('mouseleave', function() { startTimer(); });
  }

  // Swipe mobile
  var touchStartX = 0;
  var slider = document.getElementById('tSlider');
  if (slider) {
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    slider.addEventListener('touchend', function(e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); startTimer(); }
    }, { passive: true });
  }

  resetProgress();
  startTimer();
})();


// ---- 7. HERO LENS PARALLAX ----
window.addEventListener('mousemove', function(e) {
  var lens = document.querySelector('.hero-lens');
  if (!lens) return;
  var px = (e.clientX / window.innerWidth  - 0.5) * 20;
  var py = (e.clientY / window.innerHeight - 0.5) * 20;
  lens.style.transform = 'translateY(-50%) translate(' + px + 'px, ' + py + 'px)';
});


// ---- 8. YOUTUBE MODAL PLAYER ----
var ytModal    = document.getElementById('ytModal');
var ytIframe   = document.getElementById('ytIframe');
var ytBackdrop = document.getElementById('ytBackdrop');
var ytClose    = document.getElementById('ytModalClose');
var ytTitle    = document.getElementById('ytModalTitle');
var ytDesc     = document.getElementById('ytModalDesc');
var ytCat      = document.getElementById('ytModalCat');

function openYtModal(videoId, title, desc, cat) {
  if (!ytModal || !videoId) return;
  if (ytCat)   ytCat.textContent   = cat   || '';
  if (ytTitle) ytTitle.textContent = title || '';
  if (ytDesc)  ytDesc.textContent  = desc  || '';
  ytIframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
  ytModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeYtModal() {
  if (!ytModal) return;
  ytModal.classList.remove('open');
  ytIframe.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.portfolio-item--video').forEach(function(item) {
  item.addEventListener('click', function() {
    var videoId = item.getAttribute('data-youtube');
    var title   = item.getAttribute('data-title') || '';
    var desc    = item.getAttribute('data-desc')  || '';
    var catEl   = item.querySelector('.portfolio-cat');
    var cat     = catEl ? catEl.textContent : 'Videografi';
    openYtModal(videoId, title, desc, cat);
  });
});

if (ytBackdrop) ytBackdrop.addEventListener('click', closeYtModal);
if (ytClose)    ytClose.addEventListener('click',    closeYtModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && ytModal && ytModal.classList.contains('open')) {
    closeYtModal();
  }
});


// ---- 9. KIRIM PESAN VIA WHATSAPP ----
// GANTI NOMOR WA DI BAWAH INI (format: 62 + nomor tanpa 0 di depan)
var WA_NUMBER = '6281249232255';

function kirimWA() {
  var nama    = document.getElementById('inputNama');
  var email   = document.getElementById('inputEmail');
  var pesan   = document.getElementById('inputPesan');
  var layanan = document.getElementById('layanan-hidden');

  // Validasi field wajib
  if (!nama || !nama.value.trim()) {
    alert('Mohon isi nama Anda terlebih dahulu.');
    if (nama) nama.focus();
    return;
  }
  if (!pesan || !pesan.value.trim()) {
    alert('Mohon ceritakan proyek atau kebutuhan Anda.');
    if (pesan) pesan.focus();
    return;
  }

  // Ambil layanan yang dipilih dari service picker
  var layananDipilih = layanan ? layanan.value : '';
  var labelLayanan   = '';
  if (layananDipilih === 'fotografi')       labelLayanan = 'Fotografi';
  else if (layananDipilih === 'videografi') labelLayanan = 'Videografi';
  else if (layananDipilih === 'digital-creative') labelLayanan = 'Digital Creative';
  else if (layananDipilih === 'web-development')  labelLayanan = 'Web Development';
  else labelLayanan = 'Belum dipilih';

  // Susun teks pesan WhatsApp
  var teks =
    'Halo Aruma Studio! Saya tertarik dengan layanan Anda.' +
    '\n\n*Nama:* ' + nama.value.trim() +
    '\n*Email:* ' + (email && email.value.trim() ? email.value.trim() : '-') +
    '\n*Layanan:* ' + labelLayanan +
    '\n\n*Pesan:*\n' + pesan.value.trim();

  // Buka WhatsApp
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(teks), '_blank');
}
