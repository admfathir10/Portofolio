// ============================================================
//  portofolio.js — ARUMA STUDIO
//  ► Cukup edit file ini untuk tambah / hapus karya.
//  ► JANGAN ubah index.html atau script.js.
//
//  CARA TAMBAH KARYA FOTO / DESAIN GRAFIS:
//  {
//    kategori : 'foto',            // 'foto' | 'video' | 'desain'
//    gambar   : 'images/nama.jpg',
//    label    : 'Wedding Photography',
//    judul    : 'Nama Karya',
//    wide     : false,             // true = kartu lebar (2 kolom)
//  },
//
//  CARA TAMBAH KARYA VIDEO (YouTube):
//  {
//    kategori  : 'video',
//    youtubeId : 'CFcCZ8xbHtQ',
//    gambar    : '',               // kosong = thumbnail YouTube otomatis
//    label     : 'Short Movie',
//    judul     : 'Judul Video',
//    deskripsi : 'Deskripsi singkat video',
//    wide      : false,
//  },
// ============================================================

var PORTOFOLIO = [

  // ── FOTOGRAFI ─────────────────────────────────────────────
  {
    kategori : 'foto',
    gambar   : 'images/WhatsApp Image 2026-07-10 at 09.56.09.jpeg',
    label    : 'Wedding Photography',
    judul    : 'Bridemaid Clan',
    wide     : true,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Sakiva.jpg',
    label    : 'Graduation Photography',
    judul    : 'Objective Complete',
    wide     : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Salsa.jpg',
    label    : 'Product Photography',
    judul    : 'Anjukladang T-Shirt',
    wide     : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/wedding.JPG',
    label    : 'Wedding Photography',
    judul    : 'Dreamy Eternity',
    wide     : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Togetherness.jpg',
    label    : 'Graduation Photography',
    judul    : 'Graduation of Ulva & Yunia - UIN Malang',
    wide     : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Maternity.jpg',
    label    : 'Maternity Photography',
    judul    : 'Greetings',
    wide     : true,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Food.jpg',
    label    : 'Foodies Photography',
    judul    : 'Menu Artisan — Zabo Cafe Jombang',
    wide     : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/Togetherness.jpg',
    label    : 'Graduation Photography',
    judul    : 'Graduation of Ulva & Yunia - Universitas Kadiri',
    wide     : false,
  },

  // ── VIDEOGRAFI ────────────────────────────────────────────
  {
    kategori  : 'video',
    youtubeId : 'CFcCZ8xbHtQ',
    gambar    : '',
    label     : 'Short Movie',
    judul     : 'GTK Creative Camp — Laras Rilis Kediri Laris',
    deskripsi : 'GTK Creative Camp — Laras Rilis Kediri Laris',
    wide      : false,
  },
  {
    kategori  : 'video',
    youtubeId : 'bE8YqOOyi_4',
    gambar    : 'images/Azzahra.jpg',
    label     : 'Casual Video',
    judul     : 'Modelling',
    deskripsi : 'Modelling',
    wide      : false,
  },
  {
    kategori : 'foto',
    gambar   : 'images/annisaf.jpg',
    label    : 'Graduation Photography',
    judul    : 'Graduation of Annisa - UIN Malang',
    wide     : true,
  },

  // ── DIGITAL CREATIVE ──────────────────────────────────────
  // Tambah karya desain grafis di sini — cukup salin blok di bawah
  // dan ganti gambar, label, dan judul sesuai karya kamu.
  {
    kategori : 'desain',
    gambar   : 'images/wind.jpg',
    label    : 'Brand Identity',
    judul    : 'Logo & Visual — Wind',
    wide     : false,
  },
  // Contoh tambah desain baru:
  // {
  //   kategori : 'desain',
  //   gambar   : 'images/nama-file.jpg',
  //   label    : 'Social Media Design',
  //   judul    : 'Nama Brand',
  //   wide     : false,
  // },

];


// ============================================================
//  DATA PROYEK WEB DEVELOPER
//  ► Edit bagian ini untuk isi halaman webdev.html
//  ► Klik kartu "Web Development" di portofolio akan membuka
//    halaman webdev.html dengan daftar proyek ini.
// ============================================================

var WEBDEV_PROJECTS = [

  // Salin & isi blok ini untuk setiap proyek web:
  // {
  //   nama      : 'Nama Website',
  //   kategori  : 'Landing Page',        // Landing Page | Portfolio | Company Profile | App | dll
  //   deskripsi : 'Deskripsi singkat proyek, apa yang dikerjakan.',
  //   tech      : ['HTML', 'CSS', 'JS'], // teknologi yang dipakai
  //   gambar    : 'images/webdev1.jpg',  // screenshot website (kosongkan jika belum ada)
  //   link      : 'https://websiteku.id',// URL live site (kosongkan jika belum ada)
  //   tahun     : '2024',
  // },

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
//  MESIN RENDER — tidak perlu diubah
// ============================================================
(function() {
  var grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  // Tambah kartu khusus Web Development di akhir
  var semuaItem = PORTOFOLIO.concat([{
    kategori   : 'webdev-card',
    isWebdevCard: true,
  }]);

  semuaItem.forEach(function(item, i) {
    var delay = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][i % 4];

    // ── Kartu Web Dev khusus ──
    if (item.isWebdevCard) {
      var wdEl = document.createElement('div');
      wdEl.className = 'portfolio-item webdev-entry reveal ' + delay;
      wdEl.setAttribute('data-cat', 'webdev');
      wdEl.style.cssText = 'cursor:none; background:linear-gradient(135deg,#0D2B27,#1A2E4A,#0D2B27); position:relative; overflow:hidden;';
      wdEl.innerHTML =
        '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:32px;text-align:center;">' +
          '<div style="font-size:48px;">💻</div>' +
          '<div style="font-family:\'Space Mono\',monospace;font-size:9px;letter-spacing:0.2em;color:var(--amber);text-transform:uppercase;">Web Development</div>' +
          '<div style="font-family:\'Playfair Display\',serif;font-size:22px;font-weight:700;color:var(--offwhite);line-height:1.3;">Lihat Proyek<br><em>Website</em></div>' +
          '<div style="font-size:12px;color:rgba(214,239,199,0.45);line-height:1.7;max-width:220px;">Landing page, portfolio,<br>company profile & lebih</div>' +
          '<div style="margin-top:8px;padding:10px 24px;border:1px solid rgba(250,213,134,0.3);font-family:\'Space Mono\',monospace;font-size:10px;letter-spacing:0.12em;color:var(--amber);text-transform:uppercase;transition:background 0.3s;">' +
            'Buka Portofolio →' +
          '</div>' +
        '</div>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(250,213,134,0.03),transparent);pointer-events:none;"></div>';

      wdEl.addEventListener('click', function() {
        window.open('webdev.html', '_blank');
      });
      wdEl.addEventListener('mouseenter', function() {
        var btn = wdEl.querySelector('div > div:last-of-type');
        if (btn) btn.style.background = 'rgba(250,213,134,0.12)';
      });
      wdEl.addEventListener('mouseleave', function() {
        var btn = wdEl.querySelector('div > div:last-of-type');
        if (btn) btn.style.background = '';
      });
      grid.appendChild(wdEl);
      return;
    }

    var isVideo = item.kategori === 'video';
    var bgUrl = item.gambar
      ? item.gambar
      : (isVideo && item.youtubeId
          ? 'https://img.youtube.com/vi/' + item.youtubeId + '/maxresdefault.jpg'
          : '');
    var bgStyle = bgUrl
      ? 'background-image:url(\'' + bgUrl + '\'); background-size:cover; background-position:center;'
      : '';

    var classes = ['portfolio-item', 'reveal', delay];
    if (item.wide)  classes.push('wide');
    if (isVideo)    classes.push('portfolio-item--video');

    var el = document.createElement('div');
    el.className = classes.filter(Boolean).join(' ');
    el.setAttribute('data-cat', item.kategori);

    if (isVideo && item.youtubeId) {
      el.setAttribute('data-youtube', item.youtubeId);
      el.setAttribute('data-title',   item.judul    || '');
      el.setAttribute('data-desc',    item.deskripsi || '');
    }

    el.innerHTML =
      '<div class="portfolio-item-bg' + (isVideo ? ' yt-thumb' : '') + '" style="' + bgStyle + '"></div>' +
      (isVideo ? '<div class="yt-play-btn"><div class="yt-play-icon"><i class="fa-solid fa-play"></i></div></div>' : '') +
      '<div class="portfolio-overlay">' +
        '<div class="portfolio-cat">'   + (item.label || '') + '</div>' +
        '<div class="portfolio-title">' + (item.judul || '') + '</div>' +
      '</div>';

    grid.appendChild(el);

    // langsung tandai visible agar tidak perlu scroll trigger
    setTimeout(function() { el.classList.add('visible'); }, 100 * i);
  });

  // re-attach filter ke kartu baru
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-item').forEach(function(item) {
        if (filter === 'all' || item.getAttribute('data-cat') === filter) {
          item.style.display = '';
          item.classList.add('visible');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();
