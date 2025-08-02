// ----- SCRIPT RESPONSIVE POUR MENU -----

// Sélection des éléments
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu li a");

// Toggle menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggleBtn.classList.toggle("active");
  });
}

// Fermer le menu après un clic sur un lien
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    toggleBtn.classList.remove("active");
  });
});

// Fermer si on clique en dehors du menu
window.addEventListener("click", e => {
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove("show");
    toggleBtn.classList.remove("active");
  }
});
