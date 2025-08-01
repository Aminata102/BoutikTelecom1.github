document.getElementById("formCommande").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = this.nom.value;
  const tel = this.tel.value;
  const produit = this.produit.value;

  // Correction : utilisation des backticks (`) pour le template literal
  const message = `Merci ${nom} ! Votre commande pour le produit "${produit}" a été enregistrée. Nous vous contacterons au ${tel}.`;
  document.getElementById("confirmation").textContent = message;

  // Réinitialiser le formulaire
  this.reset();
});