const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Cibler le lien et la section
const forgotPasswordLink = document.getElementById('forgot-password-link');
const forgotPasswordSection = document.getElementById('forgot-password');
const toggleContainer = document.getElementById('toggle-container');

// Ajouter un gestionnaire d'événement pour le clic
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    // Activer l'animation de la section "Mot de passe oublié"
    forgotPasswordSection.classList.add('active'); 

    // Déplacer le panneau bleu vers le haut
    toggleContainer.classList.add('move-up');
});
