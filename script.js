// Fonction pour basculer l'affichage du menu responsive
function toggleMenu() {
  const menuList = document.getElementById('menu-list');
  menuList.classList.toggle('open');
}

// Fermer le menu quand on clique sur un lien dans le menu (utile sur mobile)
document.querySelectorAll('#menu-list a').forEach(link => {
  link.addEventListener('click', () => {
    const menuList = document.getElementById('menu-list');
    if (menuList.classList.contains('open')) {
      menuList.classList.remove('open');
    }
  });
});

// Scroll doux vers la section ciblée pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


