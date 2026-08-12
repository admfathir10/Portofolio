// ============================================================
//  portofolio.js — ARUMA STUDIO
//
//  CARA TAMBAH KARYA BARU:
//  1. Upload foto ke folder images/
//  2. Salin blok, ganti gambar/label/judul
//  3. Simpan — otomatis muncul di tab kategorinya
//
//  orientation : 'landscape'  → gambar horizontal (5:4, 2 kolom di mobile)
//  orientation : 'portrait'   → gambar vertikal   (4:5, default)
//  Kalau tidak ditulis: otomatis portrait
//
//  tampilDiSemua : true   → muncul di tab SEMUA + tab kategori
//  tampilDiSemua : false  → HANYA di tab kategorinya saja (default)
// ============================================================

var PORTOFOLIO = [

  // == FOTOGRAFI =============================================
  {
    kategori      : 'foto',
    gambar        : 'images/WhatsApp Image 2026-07-10 at 09.56.09.jpeg',
    label         : 'Wedding Photography',
    judul         : 'Bridemaid Clan',
    orientation   : 'landscape',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Sakiva.jpg',
    label         : 'Graduation Photography',
    judul         : 'Objective Complete',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Salsa.jpg',
    label         : 'Product Photography',
    judul         : 'Anjukladang T-Shirt',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/wedding.JPG',
    label         : 'Wedding Photography',
    judul         : 'Dreamy Eternity',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Togetherness.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Ulva & Yunia - UIN Malang',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Maternity.jpg',
    label         : 'Maternity Photography',
    judul         : 'Greetings',
    orientation   : 'landscape',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Food.jpg',
    label         : 'Foodies Photography',
    judul         : 'Menu Artisan - Zabo Cafe Jombang',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/annisaf.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Annisa - UIN Malang',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },
  // ---- foto di bawah ini HANYA di tab Fotografi ----
  {
    kategori      : 'foto',
    gambar        : 'images/zakkiyah.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Maulidah - UIN Malang',
    orientation   : 'portrait',
    tampilDiSemua : false,
  },
  // Tambah foto baru di sini:
  // {
  //   kategori    : 'foto',
  //   gambar      : 'images/nama.jpg',
  //   label       : 'Wedding Photography',
  //   judul       : 'Nama Karya',
  //   orientation : 'portrait',
  // },

  // == VIDEOGRAFI ============================================
  {
    kategori      : 'video',
    youtubeId     : 'CFcCZ8xbHtQ',
    gambar        : '',
    label         : 'Short Movie',
    judul         : 'GTK Creative Camp - Laras Rilis Kediri Laris',
    deskripsi     : 'GTK Creative Camp - Laras Rilis Kediri Laris',
    orientation   : 'landscape',
    tampilDiSemua : true,
  },
  {
    kategori      : 'video',
    youtubeId     : 'bE8YqOOyi_4',
    gambar        : 'images/Azzahra.jpg',
    label         : 'Casual Video',
    judul         : 'Modelling',
    deskripsi     : 'Modelling',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },

  // == DIGITAL CREATIVE ======================================
  {
    kategori      : 'desain',
    gambar        : 'images/wind.jpg',
    label         : 'Brand Identity',
    judul         : 'Logo & Visual - Wind',
    orientation   : 'portrait',
    tampilDiSemua : true,
  },

];

// ============================================================
//  DATA WEB DEVELOPMENT
// ============================================================
var WEBDEV_PROJECTS = [
  {
    nama      : 'ZonaPAI',
    kategori  : 'Web App',
    deskripsi : 'Aplikasi ZonaPAI Berbasis Website untuk Integrasi Pembelajaran PAI antara Murid dan Guru.',
    tech      : ['HTML', 'CSS', 'JavaScript'],
    gambar    : 'images/zonapai.jpg',
    link      : 'https://zonapai.infinityfree.me',
    tahun     : '2026',
  },
];

// ============================================================
//  MESIN RENDER — ARUMA STUDIO
//  Menggunakan CSS Grid masonry (grid-auto-rows: 8px + span)
//  agar filter display:none tidak meninggalkan gap kosong.
// ============================================================
(function() {
  var grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  // grid-auto-rows: 1px — span = clientHeight (exact pixels, tanpa rounding error)
  // padding-bottom: 3px di .portfolio-item = gap vertikal antar item

  function setSpans() {
    var items = grid.querySelectorAll('.portfolio-item');
    items.forEach(function(item) {
      if (item.style.display === 'none') {
        item.style.gridRowEnd = '';
        return;
      }
      // Reset dulu agar clientHeight bisa dihitung ulang dengan benar
      item.style.gridRowEnd = 'span 1';
      // scrollHeight lebih andal dari getBoundingClientRect saat ada transform
      var h = item.scrollHeight;
      // span = tinggi px + 3px gap bawah (dari padding-bottom)
      item.style.gridRowEnd = 'span ' + Math.max(1, h + 3);
    });
  }

  // ── Render semua item dari data array ──
  var semuaItem = PORTOFOLIO.concat([{
    kategori      : 'webdev',
    isWebdevCard  : true,
    orientation   : 'portrait',
    tampilDiSemua : true,
  }]);

  var imgLoadCount  = 0;
  var imgTotalCount = 0;

  semuaItem.forEach(function(item) {

    // -- Kartu Web Dev --
    if (item.isWebdevCard) {
      var wdEl = document.createElement('div');
      wdEl.className = 'portfolio-item portfolio-item--webdev';
      wdEl.setAttribute('data-cat', 'webdev');
      wdEl.setAttribute('data-semua', 'true');
      // Tinggi dari padding-top trick agar proporsional 4:5
      // JS span akan set berdasarkan clientHeight setelah render
      wdEl.style.paddingTop = '125%'; /* 5/4 = 125% → rasio 4:5 */
      // wd-inner harus absolute karena parent pakai padding-top trick
      wdEl.style.position = 'relative';
      wdEl.innerHTML =
        '<div class="wd-inner" style="position:absolute;inset:0;">' +
          '<div class="wd-label">Web Development</div>' +
          '<div class="wd-title">Proyek<br><em>Website</em></div>' +
          '<div class="wd-sub">Landing page, Portfolio<br>Company profile & lebih</div>' +
          '<div class="wd-btn">Lihat Semua &rarr;</div>' +
        '</div>';
      wdEl.addEventListener('click', function() { window.open('webdev.html', '_blank'); });
      grid.appendChild(wdEl);
      return;
    }

    var isVideo     = item.kategori === 'video';
    var isLandscape = item.orientation === 'landscape';

    // URL gambar: gambar eksplisit > thumbnail YouTube > kosong
    var bgUrl = item.gambar
      ? item.gambar
      : (isVideo && item.youtubeId
          ? 'https://img.youtube.com/vi/' + item.youtubeId + '/maxresdefault.jpg'
          : '');

    var cls = ['portfolio-item'];
    if (isVideo)     cls.push('portfolio-item--video');
    if (isLandscape) cls.push('landscape');

    var el = document.createElement('div');
    el.className = cls.join(' ');
    el.setAttribute('data-cat', item.kategori);
    el.setAttribute('data-semua', item.tampilDiSemua === true ? 'true' : 'false');
    // Landscape: set tinggi lewat padding-top (5:4 = 80%) agar proporsional
    // bahkan sebelum gambar load; img absolute mengisi area ini
    if (isLandscape) {
      el.style.paddingTop = '80%'; /* 4/5 = 80% → rasio 5:4 */
    }
    // Video portrait tanpa gambar: fallback padding 16:9
    if (isVideo && !item.gambar && !isLandscape) {
      el.style.paddingTop = '56.25%'; /* 9/16 = 56.25% */
    }

    if (isVideo && item.youtubeId) {
      el.setAttribute('data-youtube', item.youtubeId);
      el.setAttribute('data-title',   item.judul     || '');
      el.setAttribute('data-desc',    item.deskripsi || '');
    }

    // Gambar
    // Portrait (foto/video): img natural → tinggi dari konten gambar
    // Landscape (foto/video): img absolute → tinggi dari padding-top (rasio 5:4)
    var imgHtml = '';
    if (bgUrl) {
      imgTotalCount++;
      if (isLandscape) {
        // Landscape: parent pakai padding-top trick, img absolute
        imgHtml = '<img class="porto-img" src="' + bgUrl + '" alt="' + (item.judul || '') + '" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">';
      } else {
        // Portrait (foto maupun video): img natural height
        imgHtml = '<img class="porto-img" src="' + bgUrl + '" alt="' + (item.judul || '') + '" loading="lazy">';
      }
    }

    var playHtml = isVideo
      ? '<div class="yt-play-btn"><div class="yt-play-icon"><i class="fa-solid fa-play"></i></div></div>'
      : '';

    el.innerHTML =
      imgHtml +
      playHtml +
      '<div class="portfolio-overlay">' +
        '<div class="portfolio-cat">'   + (item.label || '') + '</div>' +
        '<div class="portfolio-title">' + (item.judul || '') + '</div>' +
      '</div>';

    // Set span setelah gambar load agar tinggi sudah benar
    var img = el.querySelector('img.porto-img');
    if (img) {
      img.addEventListener('load',  function() { setSpans(); imgLoadCount++; });
      img.addEventListener('error', function() { setSpans(); imgLoadCount++; });
    } else {
      // Item tanpa gambar (webdev, video fallback): span langsung saat DOM siap
      requestAnimationFrame(setSpans);
    }

    grid.appendChild(el);
  });

  // Fallback: set spans setelah semua konten diparse (tanpa menunggu gambar)
  requestAnimationFrame(function() {
    setSpans();
    // Ulangi sekali lagi setelah layout stabil
    setTimeout(setSpans, 300);
    setTimeout(setSpans, 800);
  });

  // Re-hitung span saat resize window
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setSpans, 150);
  });

  // ── Filter ──────────────────────────────────────────────────
  // Gunakan visibility:hidden + grid-row:0 / grid-column:0 alih-alih
  // display:none agar grid tidak collapse/gap aneh. Tapi karena kita
  // pakai grid-auto-rows dengan span, display:none sudah aman —
  // item yang hilang tidak meninggalkan baris kosong.
  filterGrid('all');

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterGrid(btn.getAttribute('data-filter'));
    });
  });

  function filterGrid(filter) {
    document.querySelectorAll('#portfolioGrid .portfolio-item').forEach(function(item) {
      var cat   = item.getAttribute('data-cat')   || '';
      var semua = item.getAttribute('data-semua') === 'true';
      var show  = (filter === 'all') ? semua : (cat === filter);
      if (show) {
        item.style.display  = '';
        item.style.opacity  = '';
        item.style.pointerEvents = '';
      } else {
        item.style.display  = 'none';
        item.style.gridRowEnd = '';
      }
    });
    // Recalculate spans after filter change
    requestAnimationFrame(function() {
      setSpans();
      setTimeout(setSpans, 200);
    });
  }

  // ── YouTube modal ──────────────────────────────────────────
  grid.addEventListener('click', function(e) {
    var item = e.target.closest('.portfolio-item--video');
    if (!item) return;
    var videoId = item.getAttribute('data-youtube');
    var title   = item.getAttribute('data-title') || '';
    var desc    = item.getAttribute('data-desc')  || '';
    var catEl   = item.querySelector('.portfolio-cat');
    var cat     = catEl ? catEl.textContent : 'Videografi';
    if (typeof openYtModal === 'function') openYtModal(videoId, title, desc, cat);
  });

  // ── Touch overlay mobile ───────────────────────────────────
  grid.addEventListener('touchend', function(e) {
    var item = e.target.closest('.portfolio-item:not(.portfolio-item--video):not(.portfolio-item--webdev)');
    if (!item) {
      grid.querySelectorAll('.portfolio-item.touched').forEach(function(o) { o.classList.remove('touched'); });
      return;
    }
    if (!item.classList.contains('touched')) {
      e.preventDefault();
      grid.querySelectorAll('.portfolio-item.touched').forEach(function(o) { o.classList.remove('touched'); });
      item.classList.add('touched');
    }
  }, { passive: false });

  document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.portfolio-item')) {
      grid.querySelectorAll('.portfolio-item.touched').forEach(function(i) { i.classList.remove('touched'); });
    }
  }, { passive: true });

})();
