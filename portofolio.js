// ============================================================
//  portofolio.js -- ARUMA STUDIO
//
//  CARA TAMBAH KARYA BARU:
//  1. Upload foto ke folder images/
//  2. Salin blok, ganti gambar/label/judul
//  3. Simpan -- otomatis muncul di tab kategorinya
//
//  orientation : 'portrait'   --> grid 9:16 (1 kolom, tinggi)
//  orientation : 'landscape'  --> grid 16:9 (2 kolom, lebar)
//  Kalau tidak ditulis: default portrait
//
//  tampilDiSemua : true   --> muncul di TAB SEMUA + tab kategori
//  tampilDiSemua : false  --> HANYA di tab kategorinya saja
//  Kalau tidak ditulis: default FALSE (hanya di tab kategori)
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
    orientation   : 'landscape',
    tampilDiSemua : true,
  },
  // ---- BATAS TAB SEMUA: foto di bawah ini hanya di tab Fotografi ----
  {
    kategori      : 'foto',
    gambar        : 'images/zakkiyah.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Maulidah - UIN Malang',
    orientation   : 'portrait',
    tampilDiSemua : false,
  },
  // Tambah foto baru di sini (default: hanya di tab Fotografi):
  // {
  //   kategori    : 'foto',
  //   gambar      : 'images/nama.jpg',
  //   label       : 'Wedding Photography',
  //   judul       : 'Nama Karya',
  //   orientation : 'portrait',   // atau 'landscape'
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
//  MESIN RENDER
// ============================================================
(function() {
  var grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  var semuaItem = PORTOFOLIO.concat([{
    kategori      : 'webdev',
    isWebdevCard  : true,
    orientation   : 'portrait',
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
          '<div class="wd-label">Web Development</div>' +
          '<div class="wd-title">Proyek<br><em>Website</em></div>' +
          '<div class="wd-sub">Landing page, Portfolio<br>Company profile & lebih</div>' +
          '<div class="wd-btn">Lihat Semua &rarr;</div>' +
        '</div>';
      wdEl.addEventListener('click', function() { window.open('webdev.html', '_blank'); });
      grid.appendChild(wdEl);
      return;
    }

    var isVideo  = item.kategori === 'video';
    var isLandscape = item.orientation === 'landscape';

    var bgUrl = '';
    if (item.gambar) {
      bgUrl = item.gambar;
    } else if (isVideo && item.youtubeId) {
      bgUrl = 'https://img.youtube.com/vi/' + item.youtubeId + '/maxresdefault.jpg';
    }

    // Bangun class list
    var cls = ['portfolio-item'];
    if (isVideo)     cls.push('portfolio-item--video');
    if (isLandscape) cls.push('landscape');

    var el = document.createElement('div');
    el.className = cls.join(' ');
    el.setAttribute('data-cat', item.kategori);
    el.setAttribute('data-semua', item.tampilDiSemua === true ? 'true' : 'false');

    // Set background langsung di element (bukan child div)
    if (bgUrl) {
      el.style.backgroundImage    = 'url("' + bgUrl + '")';
      el.style.backgroundSize     = 'cover';
      el.style.backgroundPosition = 'center';
    }

    // Untuk video: set attribute dan buat child thumbnail
    if (isVideo && item.youtubeId) {
      el.setAttribute('data-youtube', item.youtubeId);
      el.setAttribute('data-title',   item.judul     || '');
      el.setAttribute('data-desc',    item.deskripsi || '');
    }

    el.innerHTML =
      '<div class="portfolio-overlay">' +
        '<div class="portfolio-cat">'   + (item.label || '') + '</div>' +
        '<div class="portfolio-title">' + (item.judul || '') + '</div>' +
      '</div>';

    // Tombol play untuk video
    if (isVideo) {
      var playBtn = document.createElement('div');
      playBtn.className = 'yt-play-btn';
      playBtn.innerHTML = '<div class="yt-play-icon"><i class="fa-solid fa-play"></i></div>';
      el.appendChild(playBtn);
    }

    grid.appendChild(el);
  });

  // -- FILTER --
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
      // CSS columns: gunakan visibility+height=0 agar kolom tidak collapse aneh
      if (show) {
        item.style.display    = '';
        item.style.visibility = '';
        item.style.position   = '';
        item.style.padding    = '';
        item.style.margin     = '';
        item.style.overflow   = '';
      } else {
        item.style.display = 'none';
      }
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

  // -- Touch toggle overlay untuk mobile --
  // Di mobile (hover:none), tap pertama tampilkan overlay, tap kedua aksi
  document.querySelectorAll('.portfolio-item:not(.portfolio-item--video)').forEach(function(item) {
    item.addEventListener('touchend', function(e) {
      // Kalau belum touched: tampilkan overlay dulu
      if (!item.classList.contains('touched')) {
        e.preventDefault();
        // Hapus touched dari semua item lain
        document.querySelectorAll('.portfolio-item.touched').forEach(function(other) {
          if (other !== item) other.classList.remove('touched');
        });
        item.classList.add('touched');
      }
      // Kedua tap: biarkan default (tidak ada aksi khusus untuk foto)
    }, { passive: false });
  });

  // Tap di luar -> tutup semua overlay
  document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.portfolio-item')) {
      document.querySelectorAll('.portfolio-item.touched').forEach(function(item) {
        item.classList.remove('touched');
      });
    }
  }, { passive: true });

})();
