document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('signinUsernameError').textContent = '';
    document.getElementById('signinPasswordError').textContent = '';

    if (username.trim() === '') {
        document.getElementById('signinUsernameError').textContent = 'Username cannot be empty.';
        valid = false;
    }

    if (password.trim() === '') {
        document.getElementById('signinPasswordError').textContent = 'Password cannot be empty.';
        valid = false;
    }

    if (valid) {
        alert('Sign In Successful!');
    }
});