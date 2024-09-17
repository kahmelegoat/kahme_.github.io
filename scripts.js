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

// Ajouter un gestionnaire d'événement pour le clic
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    // Activer l'animation de la section "Mot de passe oublié"
    forgotPasswordSection.classList.add('active'); 

    // Déplacer le panneau bleu vers le haut
    document.getElementById('container').classList.add('move-up');
});

document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche la redirection immédiate
    if (confirm("Voulez-vous enregistrer vos informations de connexion ?")) {
        window.location.href = 'home.html'; // Redirige après confirmation
    }
});

document.getElementById('register-button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche la redirection immédiate
    if (confirm("Voulez-vous enregistrer vos informations de connexion ?")) {
        window.location.href = 'register.html'; // Redirige après confirmation
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');

    if (!email.value || !password.value) {
        event.preventDefault(); // Empêche la soumission si les champs ne sont pas remplis
        alert('Veuillez entrer votre email et votre mot de passe pour vous connecter.');
    }
});







