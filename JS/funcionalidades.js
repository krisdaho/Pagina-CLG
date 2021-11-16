document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".img-portada");
ScrollReveal().reveal(".texto-aleatorio", { delay: 500 });
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".social", { delay: 500 });
ScrollReveal().reveal(".footer", { delay: 500 });
