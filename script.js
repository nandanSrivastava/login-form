document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('button');
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.querySelectorAll('input[type="text"]')[4]; // Second password input

    signUpButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form from submitting traditionally

        // Simple validation to check if fields are filled
        if (!fname.value || !email.value || !phone.value || !password.value || !confirmPassword.value) {
            alert('Please fill out all fields.');
            return;
        }

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match.');
            return;
        }

        // For demonstration: log the data to the console
        console.log(`Full Name: ${fname.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Phone: ${phone.value}`);
        console.log(`Password: ${password.value}`);

        // Here you would typically send the data to a server
        alert('Sign Up Successful!');
    });
});