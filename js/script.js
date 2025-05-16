
// Fungsi animasi on-scroll
function onScrollAnimate() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); // opsional, bisa dihapus kalau mau animasi sekali saja
    }
  });
}

// Event listener scroll untuk jalankan animasi
window.addEventListener('scroll', onScrollAnimate);

document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in');

  // Fungsi cek apakah elemen muncul di viewport
  function checkFadeIn() {
    fadeElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Jika elemen terlihat setidaknya 100px dari bawah viewport
      if (rect.top <= windowHeight - 100) {
        elem.classList.add('visible');
      }
    });
  }

  // Jalankan cek pertama kali
  checkFadeIn();

  // Event scroll untuk cek
  window.addEventListener('scroll', checkFadeIn);
});
