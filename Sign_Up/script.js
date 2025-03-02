document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupPassword').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;

    document.getElementById('signupFullNameError').textContent = '';
    document.getElementById('signupEmailError').textContent = '';
    document.getElementById('signupPasswordError').textContent = '';
    document.getElementById('signupAgeError').textContent = '';
    document.getElementById('signupPhoneError').textContent = '';
    document.getElementById('signupGenderError').textContent = '';
    document.getElementById('signupAddressError').textContent = '';

    if (fullname.trim() === '') {
        document.getElementById('signupFullNameError').textContent = 'Full Name cannot be empty.';
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('signupEmailError').textContent = 'Invalid email format.';
        valid = false;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
        document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters long and contain a number and a special character.';
        valid = false;
    }

    if (age < 1 || age > 120) {
        document.getElementById('signupAgeError').textContent = 'Age must be between 1 and 120.';
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('signupPhoneError').textContent = 'Phone number must be 10 digits.';
        valid = false;
    }

    if (gender === '') {
        document.getElementById('signupGenderError').textContent = 'Gender is required.';
        valid = false;
    }

    if (address.trim() === '') {
        document.getElementById('signupAddressError').textContent = 'Address cannot be empty.';
        valid = false;
    }

    if (valid) {
        alert('Sign Up Successful!');
    }
});