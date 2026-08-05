// ============================================================
//  portofolio.js -- ARUMA STUDIO
//  CARA TAMBAH KARYA BARU:
//  - Salin blok sesuai kategori
//  - Ganti gambar, label, judul
//  - tampilDiSemua: true  -> muncul di tab Semua + tab kategori
//  - tampilDiSemua: false -> hanya muncul di tab kategorinya saja
//  - wide: true           -> kartu lebar 2 kolom (landscape)
//  - wide: false          -> kartu normal 1 kolom (portrait)
// ============================================================

var PORTOFOLIO = [

  // FOTOGRAFI
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
    judul         : 'Menu Artisan -- Zabo Cafe Jombang',
    wide          : false,
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/annisaf.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Annisa - UIN Malang',
    wide          : true,          // LANDSCAPE -- span 2 kolom
    tampilDiSemua : true,
  },
  {
    kategori      : 'foto',
    gambar        : 'images/zakkiyah.jpg',
    label         : 'Graduation Photography',
    judul         : 'Graduation of Maulidah - UIN Malang',
    wide          : false,
    tampilDiSemua : false,         // TIDAK muncul di tab Semua
  },

  // VIDEOGRAFI
  {
    kategori      : 'video',
    youtubeId     : 'CFcCZ8xbHtQ',
    gambar        : '',
    label         : 'Short Movie',
    judul         : 'GTK Creative Camp -- Laras Rilis Kediri Laris',
    deskripsi     : 'GTK Creative Camp -- Laras Rilis Kediri Laris',
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

  // DIGITAL CREATIVE
  {
    kategori      : 'desain',
    gambar        : 'images/wind.jpg',
    label         : 'Brand Identity',
    judul         : 'Logo & Visual -- Wind',
    wide          : false,
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
    kategori     : 'webdev-card',
    isWebdevCard : true,
    tampilDiSemua: true,
  }]);

  semuaItem.forEach(function(item, i) {
    var delay = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][i % 4];

    // Kartu Web Dev khusus
    if (item.isWebdevCard) {
      var wdEl = document.createElement('div');
      wdEl.className = 'portfolio-item webdev-entry reveal ' + delay;
      wdEl.setAttribute('data-cat', 'webdev');
      wdEl.setAttribute('data-semua', 'true');
      wdEl.style.cssText = 'cursor:none;background:linear-gradient(135deg,#0D2B27,#1A2E4A,#0D2B27);position:relative;overflow:hidden;';
      wdEl.innerHTML =
        '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:32px;text-align:center;">' +
          '<div style="font-size:48px;">&#128187;</div>' +
          '<div style="font-family:\'Space Mono\',monospace;font-size:9px;letter-spacing:0.2em;color:var(--amber);text-transform:uppercase;">Web Development</div>' +
          '<div style="font-family:\'Playfair Display\',serif;font-size:22px;font-weight:700;color:var(--offwhite);line-height:1.3;">Lihat Proyek<br><em>Website</em></div>' +
          '<div style="font-size:12px;color:rgba(214,239,199,0.45);line-height:1.7;max-width:220px;">Landing page, portfolio,<br>company profile & lebih</div>' +
          '<div id="wdBtn" style="margin-top:8px;padding:10px 24px;border:1px solid rgba(250,213,134,0.3);font-family:\'Space Mono\',monospace;font-size:10px;letter-spacing:0.12em;color:var(--amber);text-transform:uppercase;transition:background 0.3s;">Buka Portofolio &rarr;</div>' +
        '</div>';
      wdEl.addEventListener('click', function() { window.open('webdev.html', '_blank'); });
      wdEl.addEventListener('mouseenter', function() {
        var btn = wdEl.querySelector('#wdBtn');
        if (btn) btn.style.background = 'rgba(250,213,134,0.12)';
      });
      wdEl.addEventListener('mouseleave', function() {
        var btn = wdEl.querySelector('#wdBtn');
        if (btn) btn.style.background = '';
      });
      grid.appendChild(wdEl);
      wdEl.classList.add('visible');
      return;
    }

    var isVideo = item.kategori === 'video';
    var bgUrl = item.gambar
      ? item.gambar
      : (isVideo && item.youtubeId
          ? 'https://img.youtube.com/vi/' + item.youtubeId + '/maxresdefault.jpg'
          : '');

    var classes = ['portfolio-item', 'reveal', delay];
    if (item.wide)  classes.push('wide');
    if (isVideo)    classes.push('portfolio-item--video');

    var el = document.createElement('div');
    el.className = classes.filter(Boolean).join(' ');
    el.setAttribute('data-cat', item.kategori);
    el.setAttribute('data-semua', item.tampilDiSemua ? 'true' : 'false');

    if (isVideo && item.youtubeId) {
      el.setAttribute('data-youtube',  item.youtubeId);
      el.setAttribute('data-title',    item.judul     || '');
      el.setAttribute('data-desc',     item.deskripsi || '');
    }

    // Background langsung di .portfolio-item -- tidak ada child div perantara
    if (bgUrl && !isVideo) {
      el.style.backgroundImage    = 'url(\'' + bgUrl + '\')';
      el.style.backgroundSize     = 'cover';
      el.style.backgroundPosition = 'center';
    }

    el.innerHTML =
      (isVideo
        ? '<div class="portfolio-item-bg yt-thumb" style="background-image:url(\'' + bgUrl + '\');background-size:cover;background-position:center;"></div>' +
          '<div class="yt-play-btn"><div class="yt-play-icon"><i class="fa-solid fa-play"></i></div></div>'
        : ''
      ) +
      '<div class="portfolio-overlay">' +
        '<div class="portfolio-cat">'   + (item.label || '') + '</div>' +
        '<div class="portfolio-title">' + (item.judul || '') + '</div>' +
      '</div>';

    grid.appendChild(el);
    el.classList.add('visible');
  });

  // FILTER
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.portfolio-item').forEach(function(item) {
        var cat   = item.getAttribute('data-cat');
        var semua = item.getAttribute('data-semua') === 'true';
        var tampil = filter === 'all' ? semua : (cat === filter);

        if (tampil) {
          item.style.display    = '';
          item.style.opacity    = '1';
          item.style.transform  = 'translateY(0)';
          item.style.transition = 'none';
          item.classList.add('visible');
        } else {
          item.style.display    = 'none';
          item.style.opacity    = '';
          item.style.transform  = '';
          item.style.transition = '';
        }
      });
    });
  });
})();
