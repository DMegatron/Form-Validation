var email;
var password;
var errorMessages = [];

function validate(event) {
    email = document.querySelector('.email');
    password = document.querySelector('.password');
    errorMessages = [];


    // removeErrorMessages(email);
    // removeErrorMessages(password);

    if (!(email.value.includes('@') && email.value.includes('.'))) {
        errorMessages.push("Email is not valid.");
        email.focus();
    }

    if (password.value.length < 8) {
        errorMessages.push("Password should be at least 8 characters long.");
    }

    if (!/[A-Z]/.test(password.value)) {
        errorMessages.push("Password should contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password.value)) {
        errorMessages.push("Password should contain at least one lowercase letter.");
    }

    if (!/[0-9]/.test(password.value)) {
        errorMessages.push("Password should contain at least one digit.");
    }

    if (!/[^a-zA-Z0-9]/.test(password.value)) {
        errorMessages.push("Password should contain at least one special character.");
    }

    if (errorMessages.length > 0) {
        password.focus();
        showError(errorMessages.join('\n'));
        errorMessages = [];
        return false;
    }

    return true;

}

function showError(errorMessage) {
    alert(errorMessage);
    // input.style.borderWidth = "2px";
    // input.style.borderColor = "red";
    // input.style.borderStyle = "solid";
    
    // var errorMsg = document.createElement('div');
    // errorMsg.innerText = errorMessage;
    // errorMsg.classList.add('error-message');
    // errorMsg.style.color = "red";
    // errorMsg.style.fontFamily = "Arial";
    // errorMsg.style.width = "81%";
    // errorMsg.style.marginTop = "5px";
    // errorMsg.style.textAlign = "left";
    // input.insertAdjacentElement('afterend', errorMsg);
    // input.focus();
}

// function removeErrorMessages(input) {
//     if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
//         input.nextElementSibling.remove();
//     }
// }
