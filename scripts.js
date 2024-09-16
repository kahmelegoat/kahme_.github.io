// Basculer pour le mot de passe principal
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Basculer pour le mot de passe de confirmation
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
const termsCheckbox = document.querySelector('#termsCheckbox');
const signupButton = document.querySelector('#signupButton');

// Désactive le bouton si la case n'est pas cochée
termsCheckbox.addEventListener('change', function () {
    if (termsCheckbox.checked) {
        signupButton.disabled = false;
    } else {
        signupButton.disabled = true;
    }
});
