// Show the login options modal
function showLoginOptions() {
    document.getElementById('login-options').style.display = 'flex';
}

// Close the login modal
function closeLoginOptions() {
    document.getElementById('login-options').style.display = 'none';
}

// Redirect to the respective login page
function redirectTo(page) {
    window.location.href = page;
}
