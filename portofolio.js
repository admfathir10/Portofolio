/* ==========================================================================
   PORTOFOLIO DATA & ENGINE (ARUMA STUDIO)
   ========================================================================== */

var PORTOFOLIO = [
  {
    kategori      : 'video',
    youtubeId     : 'bE8YqOOyi_4',
    gambar        : 'images/Azzahra.jpg',
    label         : 'Casual Video',
    judul         : 'Modelling Azzahra',
    deskripsi     : 'Casual Video Modelling',
    orientation   : 'portrait',
    tampilDiSemua : true,
  }
  // Masukkan kembali item foto / video Anda yang lain di sini
];

function renderPortofolio(kategoriAktif) {
  var grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  var items = PORTOFOLIO.filter(function(item) {
    if (kategoriAktif === 'semua' || !kategoriAktif) {
      return item.tampilDiSemua !== false;
    }
    return item.kategori === kategoriAktif;
  });

  var html = '';

  items.forEach(function(item) {
    var isVideo = item.kategori === 'video';
    var itemClass = 'portfolio-item' + (isVideo ? ' portfolio-item--video' : '');
    var bgUrl = item.gambar || (isVideo && item.youtubeId ? 'https://img.youtube.com/vi/' + item.youtubeId + '/hqdefault.jpg' : '');

    html += '<div class="' + itemClass + '" data-kategori="' + item.kategori + '">';
    
    if (bgUrl) {
      html += '<img class="porto-img" src="' + bgUrl + '" alt="' + (item.judul || '') + '" loading="lazy">';
    }

    if (isVideo) {
      html += '<div class="play-button"></div>';
    }

    /* OVERLAY TEKS BERADA DI DALAM DENGAN HOVER */
    html += '<div class="porto-overlay">';
    if (item.label) html += '<span class="porto-label">' + item.label + '</span>';
    if (item.judul) html += '<h4 class="porto-judul">' + item.judul + '</h4>';
    if (item.deskripsi) html += '<p class="porto-deskripsi">' + item.deskripsi + '</p>';
    html += '</div>';

    html += '</div>';
  });

  grid.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  renderPortofolio('semua');
});
