// ============================================================
//  portofolio.js — ARUMA STUDIO
//  ► Cukup edit file ini untuk tambah / hapus karya.
//  ► JANGAN ubah index.html atau script.js.
//
//  CARA TAMBAH KARYA BARU:
//  - Salin blok yang sesuai di bawah
//  - Ganti gambar, label, judul
//  - Karya baru HANYA muncul di tab kategorinya (foto/video/desain)
//  - Kalau ingin karya baru juga muncul di tab Semua, tambahkan:
//      tampilDiSemua : true,
// ============================================================

var PORTOFOLIO = [

  // ── FOTOGRAFI ─────────────────────────────────────────────
  {
    kategori      : 'foto',
    gambar        : 'images/WhatsApp Image 2026-07-10 at 09.56.09.jpeg',
    label         : 'Wedding Photography',
    judul         : 'Bridemaid Clan',
    wide          : true,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Sakiva.jpg',
    label         : 'Graduation Photography',
    judul         : 'Objective Complete',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Salsa.jpg',
    label         : 'Product Photography',
    judul         : 'Anjukladang T-Shirt',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/wedding.JPG',
    label         : 'Wedding Photography',
    judul         : 'Dreamy Eternity',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Togetherness.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Ulva & Yunia - UIN Malang',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Maternity.jpg',
    label         : 'Maternity Photography',
    judul         : 'Greetings',
    wide          : true,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/Food.jpg',
    label         : 'Foodies Photography',
    judul         : 'Menu Artisan — Zabo Cafe Jombang',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/annisaf.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Annisa - UIN Malang',
    wide          : true,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/zakkiyah.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Maulidah - UIN Malang',
    wide          : true,
    tampilDiSemua : false,
  },
  // Tambah foto baru di sini — tanpa tampilDiSemua maka hanya muncul di tab Fotografi:
  // {
  //   kategori : 'foto',
  //   gambar   : 'images/nama.jpg',
  //   label    : 'Wedding Photography',
  //   judul    : 'Nama Karya',
  //   wide     : false,
  // },

  // ── VIDEOGRAFI ────────────────────────────────────────────
  {
    kategori      : 'video',
    youtubeId     : 'CFcCZ8xbHtQ',
    gambar        : '',
    label         : 'Short Movie',
    judul         : 'GTK Creative Camp — Laras Rilis Kediri Laris',
    deskripsi     : 'GTK Creative Camp — Laras Rilis Kediri Laris',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'video',
    youtubeId     : 'bE8YqOOyi_4',
    gambar        : 'images/Azzahra.jpg',
    label         : 'Casual Video',
    judul         : 'Modelling',
    deskripsi     : 'Modelling',
    wide          : false,
    tampilDiSemua : true,
  },
  // Tambah video baru di sini — hanya muncul di tab Videografi:
  // {
  //   kategori  : 'video',
  //   youtubeId : 'XXXXX',
  //   gambar    : '',
  //   label     : 'Short Movie',
  //   judul     : 'Judul Video',
  //   deskripsi : 'Deskripsi singkat',
  //   wide      : false,
  // },

  // ── DIGITAL CREATIVE ──────────────────────────────────────
  {
    kategori      : 'desain',
    gambar        : 'images/wind.jpg',
    label         : 'Brand Identity',
    judul         : 'Logo & Visual — Wind',
    wide          : false,
    tampilDiSemua : true,
  },
  // Tambah desain baru di sini — hanya muncul di tab Digital Creative:
  // {
  //   kategori : 'desain',
  //   gambar   : 'images/nama.jpg',
  //   label    : 'Social Media Design',
  //   judul    : 'Nama Brand',
  //   wide     : false,
  // },

];


// ============================================================
//  DATA PROYEK WEB DEVELOPER
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
//  MESIN RENDER — tidak perlu diubah
// ============================================================
(function() {
  var grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  var semuaItem = PORTOFOLIO.concat([{
    kategori     : 'webdev-card',
    isWebdevCard : true,
    tampilDiSemua: true,
  }]);

  semuaItem.forEach(function(item, i) {
    var delay = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][i % 4];

    // ── Kartu Web Dev khusus ──
    if (item.isWebdevCard) {
      var wdEl = document.createElement('div');
      wdEl.className = 'portfolio-item webdev-entry reveal ' + delay;
      wdEl.setAttribute('data-cat', 'webdev');
      wdEl.setAttribute('data-semua', 'true');
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
      wdEl.addEventListener('click', function() { window.open('webdev.html', '_blank'); });
      wdEl.addEventListener('mouseenter', function() {
        var btn = wdEl.querySelector('div > div:last-of-type');
        if (btn) btn.style.background = 'rgba(250,213,134,0.12)';
      });
      wdEl.addEventListener('mouseleave', function() {
        var btn = wdEl.querySelector('div > div:last-of-type');
        if (btn) btn.style.background = '';
      });
      grid.appendChild(wdEl);
      setTimeout(function() { wdEl.classList.add('visible'); }, 100 * i);
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
    el.setAttribute('data-semua', item.tampilDiSemua ? 'true' : 'false');

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
    // langsung visible tanpa delay
    el.classList.add('visible');
    // paksa tinggi kartu wide agar tidak height:0
    if (item.wide) el.style.minHeight = '420px';
  });

  // ── FILTER dengan logika tampilDiSemua ──
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.portfolio-item').forEach(function(item) {
        var cat    = item.getAttribute('data-cat');
        var semua  = item.getAttribute('data-semua') === 'true';

        var tampil = false;
        if (filter === 'all') {
          tampil = semua; // tab Semua: hanya yang bertanda tampilDiSemua
        } else {
          tampil = (cat === filter); // tab lain: semua kartu kategori itu
        }

        if (tampil) {
          item.style.display = '';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          item.style.transition = 'none';
          if (item.classList.contains('wide') && !item.style.minHeight) {
            item.style.minHeight = '420px';
          }
          item.classList.remove('reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-4');
          item.classList.add('visible');
        } else {
          item.style.display = 'none';
          item.style.opacity = '';
          item.style.transform = '';
          item.style.transition = '';
        }
      });
    });
  });
})();
