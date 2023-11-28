const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const passwordError = document.getElementById('password-error');

togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️‍🗨️';
    }
});

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = passwordInput.value;

    const lengthCondition = password.length <= 16;
    const specialCharacterCondition = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);
    const uppercaseCondition = /[A-Z]/.test(password);

    if (lengthCondition && specialCharacterCondition && uppercaseCondition) {
        window.location.href = `main.html?name=${encodeURIComponent(name)}`;
    } else {
        passwordError.textContent = '⚠️Пароль должен быть не длинее 16 символов и содержать цифры,спец символы и заглавные буквы ';
passwordError.parentNode.appendChild(additionalText);
    }
});