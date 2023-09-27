document.addEventListener('DOMContentLoaded', function() {
    var emailField = document.getElementById('form2Example11');
    var passwordField = document.getElementById('form2Example22');
    var validationStatus = document.getElementById('validationStatus');

    emailField.addEventListener('blur', function() {
        var email = emailField.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationStatus.innerText = 'Please provide a valid email address';
            validationStatus.style.color = 'red';
        } else {
            validationStatus.innerText = '';
        }
    });

    passwordField.addEventListener('blur', function() {
        var email = emailField.value;
        var password = passwordField.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '' || !emailRegex.test(email)) {
            validationStatus.innerText = 'Please provide a valid email address first';
            validationStatus.style.color = 'red';
        } else if (password === '') {
            validationStatus.innerText = 'Please provide a password';
            validationStatus.style.color = 'red';
        } else {
            validationStatus.innerText = '';
        }
    });
});

//validation register page

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registerForm');
    var rnameField = document.getElementById('form2Example22');
    var remailField = document.getElementById('form2Example11');
    var rpasswordField = document.getElementById('form2Example33');
    var rcpasswordField = document.getElementById('form2Example44');
    var validationStatus = document.getElementById('validationStatus');

    form.addEventListener('submit', function(event) {
        var rname = rnameField.value;
        var remail = remailField.value;
        var rpassword = rpasswordField.value;
        var rcpassword = rcpasswordField.value;

        var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

        if (specialCharacters.test(rname)) {
            validationStatus.innerText = 'Name should not contain special characters.';
            validationStatus.style.color = 'red';
            event.preventDefault();
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(remail)) {
            validationStatus.innerText = 'Please provide a valid email address.';
            validationStatus.style.color = 'red';
            event.preventDefault();
            return;
        }

        if (rpassword !== rcpassword) {
            validationStatus.innerText = 'Passwords do not match.';
            validationStatus.style.color = 'red';
            event.preventDefault();
            return;
        }

        validationStatus.innerText = '';
        validationStatus.style.color = '';
    });
});
