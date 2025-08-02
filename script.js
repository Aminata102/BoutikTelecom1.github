// MENU BURGER (responsive)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Accessibilité clavier
menuToggle.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menu.classList.toggle('open');
  }
});

// DÉFILEMENT FLUIDE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Fermer le menu après clic (mobile)
      menu.classList.remove('open');
    }
  });
});

// VALIDATION DU FORMULAIRE DE COMMANDE
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const nom = document.getElementById('nom').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const produit = document.getElementById('produit').value;

  if (nom === "" || contact === "" || produit === "") {
    e.preventDefault();
    alert("Veuillez remplir tous les champs du formulaire.");
  } else {
    alert("Commande envoyée avec succès !");
  }
});
