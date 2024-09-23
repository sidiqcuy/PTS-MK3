function goToHome() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username.value == "Sigma" && password.value == "5000aura") {
        window.location.href = 'Home.html';
    } else {
        ermsg.textContent = 'Please kamu kurang sigma';
    }
}

function goToLogin() {
    if (confirm('Apakah Anda yakin ingin membuat akun?')) {
        window.location.href = 'login.html';
    }
}