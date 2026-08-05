// ============================================================
//  portofolio.js -- ARUMA STUDIO
//
//  CARA TAMBAH KARYA BARU (sangat mudah):
//  1. Upload foto ke folder images/
//  2. Salin blok di bawah, ganti nama file dan judul
//  3. Simpan -- otomatis muncul di tab kategorinya
//
//  tampilDiSemua: true  --> muncul di TAB SEMUA + tab kategori
//  tampilDiSemua: false --> HANYA muncul di tab kategorinya saja
//
//  Default karya baru: tidak perlu tulis tampilDiSemua
//  (otomatis false = hanya muncul di tab kategori)
// ============================================================

var PORTOFOLIO = [

  // == FOTOGRAFI =============================================
  {
    kategori      : 'foto',
    gambar        : 'images/WhatsApp Image 2026-07-10 at 09.56.09.jpeg',
    label         : 'Wedding Photography',
    judul         : 'Bridemaid Clan',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Sakiva.jpg',
    label         : 'Graduation Photography',
    judul         : 'Objective Complete',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Salsa.jpg',
    label         : 'Product Photography',
    judul         : 'Anjukladang T-Shirt',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/wedding.JPG',
    label         : 'Wedding Photography',
    judul         : 'Dreamy Eternity',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Togetherness.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Ulva & Yunia - UIN Malang',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Maternity.jpg',
    label         : 'Maternity Photography',
    judul         : 'Greetings',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Food.jpg',
    label         : 'Foodies Photography',
    judul         : 'Menu Artisan -- Zabo Cafe Jombang',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/annisaf.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Annisa - UIN Malang',
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/zakkiyah.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Maulidah - UIN Malang',
    tampilDiSemua : false,   // hanya muncul di tab Fotografi
  },
  // Tambah foto baru di sini -- otomatis hanya di tab Fotografi:
  // {
  //   kategori : 'foto',
  //   gambar   : 'images/nama.jpg',
  //   label    : 'Wedding Photography',
  //   judul    : 'Nama Karya',
  // },

  // == VIDEOGRAFI ============================================
  {
    kategori      : 'video',
    youtubeId     : 'CFcCZ8xbHtQ',
    label         : 'Short Movie',
    judul         : 'GTK Creative Camp -- Laras Rilis Kediri Laris',
    deskripsi     : 'GTK Creative Camp -- Laras Rilis Kediri Laris',
    tampilDiSemua : true,
  },
  {
    kategori      : 'video',
    youtubeId     : 'bE8YqOOyi_4',
    gambar        : 'images/Azzahra.jpg',
    label         : 'Casual Video',
    judul         : 'Modelling',
    deskripsi     : 'Modelling',
    tampilDiSemua : true,
  },

  // == DIGITAL CREATIVE ======================================
  {
    kategori      : 'desain',
    gambar        : 'images/wind.jpg',
    label         : 'Brand Identity',
    judul         : 'Logo & Visual -- Wind',
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
//  MESIN RENDER
// ============================================================
(function() {
  var grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  // Render semua item
  var semuaItem = PORTOFOLIO.concat([{
    kategori      : 'webdev',
    isWebdevCard  : true,
    tampilDiSemua : true,
  }]);

  semuaItem.forEach(function(item) {
    // -- Kartu Web Dev --
    if (item.isWebdevCard) {
      var wdEl = document.createElement('div');
      wdEl.className = 'portfolio-item portfolio-item--webdev';
      wdEl.setAttribute('data-cat', 'webdev');
      wdEl.setAttribute('data-semua', 'true');
      wdEl.innerHTML =
        '<div class="wd-inner">' +
          '<span style="font-size:40px;">&#128187;</span>' +
          '<div class="wd-label">Web Development</div>' +
          '<div class="wd-title">Lihat Proyek<br><em>Website</em></div>' +
          '<div class="wd-sub">Landing page, portfolio,<br>company profile & lebih</div>' +
          '<div class="wd-btn">Buka Portofolio &rarr;</div>' +
        '</div>';
      wdEl.addEventListener('click', function() { window.open('webdev.html', '_blank'); });
      grid.appendChild(wdEl);
      return;
    }

    var isVideo = item.kategori === 'video';
    var bgUrl = '';
    if (item.gambar) {
      bgUrl = item.gambar;
    } else if (isVideo && item.youtubeId) {
      bgUrl = 'https://img.youtube.com/vi/' + item.youtubeId + '/maxresdefault.jpg';
    }

    var el = document.createElement('div');
    el.className = 'portfolio-item' + (isVideo ? ' portfolio-item--video' : '');
    el.setAttribute('data-cat', item.kategori);
    el.setAttribute('data-semua', item.tampilDiSemua ? 'true' : 'false');

    // Background langsung di element -- tidak ada child div perantara
    if (bgUrl) {
      el.style.backgroundImage    = 'url("' + bgUrl + '")';
      el.style.backgroundSize     = 'cover';
      el.style.backgroundPosition = 'center';
    }

    if (isVideo && item.youtubeId) {
      el.setAttribute('data-youtube', item.youtubeId);
      el.setAttribute('data-title',   item.judul     || '');
      el.setAttribute('data-desc',    item.deskripsi || '');
    }

    el.innerHTML =
      (isVideo ? '<div class="yt-play-btn"><div class="yt-play-icon"><i class="fa-solid fa-play"></i></div></div>' : '') +
      '<div class="portfolio-overlay">' +
        '<div class="portfolio-cat">'   + (item.label || '') + '</div>' +
        '<div class="portfolio-title">' + (item.judul || '') + '</div>' +
      '</div>';

    grid.appendChild(el);
  });

  // -- FILTER --
  // Inisialisasi: semua item yang tampilDiSemua=true langsung tampil
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
      var cat   = item.getAttribute('data-cat');
      var semua = item.getAttribute('data-semua') === 'true';
      var show  = filter === 'all' ? semua : (cat === filter);
      item.style.display = show ? '' : 'none';
    });
  }

  // -- YouTube modal --
  document.querySelectorAll('.portfolio-item--video').forEach(function(item) {
    item.addEventListener('click', function() {
      var videoId = item.getAttribute('data-youtube');
      var title   = item.getAttribute('data-title') || '';
      var desc    = item.getAttribute('data-desc')  || '';
      var catEl   = item.querySelector('.portfolio-cat');
      var cat     = catEl ? catEl.textContent : 'Videografi';
      if (typeof openYtModal === 'function') openYtModal(videoId, title, desc, cat);
    });
  });

})();
