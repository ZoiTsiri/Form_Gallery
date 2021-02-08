/* alt+shift+A ta kanei sxolio ola mazi*/
const form = document.getElementById('form');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
// get the values from the input and trim to remove the whitespaces from the string
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();

// PHONE
    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be blank');
    } else if (isNaN(phoneValue)) {
        setErrorFor(phone, 'Not a valid phone');
    } else {
        setSuccessFor(phone);
    }
// /PHONE

// ADDRESS
    if (addressValue === '') {
        setErrorFor(address, 'Address cannot be blank');
    } else {
        setSuccessFor(address);
    }
// /ADDRESS

// EMAIL
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (email2Value === '') {
        setErrorFor(email2, 'Confirm Email cannot be blank');
    } else if (email2Value !== emailValue) {
        setErrorFor(email2, 'Email does not match');
    } else {
        setSuccessFor(email2);
    }
}
// /EMAIL

// ICONS USE
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-fill
    const small = formControl.querySelector('small');
    //add error class
    formControl.className = 'form-fill error';
    //add error message inside small
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-fill
    //add success class
    formControl.className = 'form-fill success';
}
// /ICONS USE

// Check if email is valid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}