// Sélection des éléments du DOM
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu li a");

// Afficher / cacher le menu au clic sur le bouton
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  toggleBtn.classList.toggle("active");
});

// Fermer le menu après un clic sur un lien
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    toggleBtn.classList.remove("active");
  });
});

// (Optionnel) Fermer le menu si on clique en dehors
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove("show");
    toggleBtn.classList.remove("active");
  }
});
