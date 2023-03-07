// Ini adalah javascript untuk membuka dan menutup menu hamburger atau toggle

const button = document.getElementById("openMenu");
const close = document.getElementById("closeMenu");

button.addEventListener("click", function () {
  document.getElementById("listMenu").style.width = "60%";
  document.getElementById("backgroundOpacity").style.width = "40%";
} );

close.addEventListener("click", function() {
  document.getElementById("listMenu").style.width = "0px";
  document.getElementById("backgroundOpacity").style.width = "0px";
} );

// Akhir sebuah kode buka menu dan tutup kode

const menuToggle = document.querySelector('#openMenu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
