/* ==========================================================================
   PORTOFOLIO DATA & RENDER ENGINE
   ========================================================================== */

var PORTOFOLIO = [
  {
    kategori      : 'video',
    youtubeId     : 'bE8YqOOyi_4',
    gambar        : 'images/Azzahra.jpg', // Path gambar thumbnail Azzahra
    label         : 'Casual Video',
    judul         : 'Modelling',
    deskripsi     : 'Modelling Azzahra',
    orientation   : 'portrait',
    tampilDiSemua : true,
  }
  // Tambahkan item portofolio lainnya di sini jika diperlukan
];

function renderPortofolio(containerId, data) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var items = data || PORTOFOLIO;
  var html = '<div class="portfolio-grid">';

  items.forEach(function(item) {
    var isVideo = item.kategori === 'video';
    var itemClass = 'portfolio-item' + (isVideo ? ' portfolio-item--video' : '') + (item.kategori === 'webdev' ? ' portfolio-item--webdev' : '');
    var bgUrl = item.gambar || (isVideo && item.youtubeId ? 'https://img.youtube.com/vi/' + item.youtubeId + '/hqdefault.jpg' : '');

    html += '<div class="' + itemClass + '">';
    
    if (bgUrl) {
      html += '<img class="porto-img" src="' + bgUrl + '" alt="' + (item.judul || '') + '" loading="lazy">';
    }

    if (isVideo) {
      html += '<div class="play-button"></div>';
    }

    html += '<div class="porto-overlay">';
    if (item.label) html += '<span class="porto-label">' + item.label + '</span>';
    if (item.judul) html += '<h4 class="porto-judul">' + item.judul + '</h4>';
    if (item.deskripsi) html += '<p class="porto-deskripsi">' + item.deskripsi + '</p>';
    html += '</div>';

    html += '</div>';
  });

  html += '</div>';
  container.innerHTML = html;
}

// Inisialisasi otomatis jika DOM sudah siap
document.addEventListener('DOMContentLoaded', function() {
  renderPortofolio('portfolio-container', PORTOFOLIO);
});
