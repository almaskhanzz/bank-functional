//login form
document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;

    if (userEmail == 'almas@gmail.com' && userPassword == 'secretthing') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Failed to login!!!');
    }
})