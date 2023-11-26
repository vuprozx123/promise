const formElement = document.querySelector('#register-form'); 

function validateNameInput() {
    const nameInput = formElement.querySelector('input[name="fullname"]');
    console.log(nameInput.value);

    if (!nameInput.value) {
        handleError(nameInput, 'Ten la truong bat buoc');
        return false;
    }
    return true;

}

function handleError(formInput, message) {
    formInput.parentElement.classList.add('invalid');

    formInput.parentElement.querySelector('.form-message').innerText = message;
}

function validateEmailInput() {
    const emailInput = formElement.querySelector('input[name="email"]');
    console.log(emailInput);

    if (!emailInput.value) {
        handleError(emailInput, 'Email la truong bat buoc');
        return false;
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!regex.test(emailInput.value)) {
        handleError(emailInput, 'Email khong hop le');
        return false;
    }
    return true;
}

function validatePasswordInput() {
    const passwordInput = formElement.querySelector('input[name="password"]');
    console.log(passwordInput.value);

    if (!passwordInput.value) {
        handleError(passwordInput, 'Password la truong bat buoc');
        return false;
    }

    if(passwordInput.value.length < 6 ) {
        handleError(passwordInput, 'Password nho hon 6 ki tu');
        return false;
    }

    return true;
}

function validatePasswordConfirmInput() {
    const passwordConfirmInput = formElement.querySelector('input[name="password_confirmation"]');
    console.log(passwordConfirmInput);

    if (!passwordConfirmInput.value) {
        handleError(passwordConfirmInput, 'Password_confirmation la truong bat buoc');
        return false;
    }

    if (passwordConfirmInput.value.length < 6 ) {
        handleError(passwordConfirmInput, 'Password_confirmation nho hon 6 ki tu');
        return false;
    }
    
    const passwordInput = formElement.querySelector('input[name="password"]');
    if (passwordConfirmInput.value !== passwordInput.value) {
        handleError(passwordConfirmInput, 'Password khong trung khop');
        return false;
    }
    
    return true;
}

formElement.onsubmit = (event) => {
    event.preventDefault();

    let isvalid = true;

    if (!validateNameInput()) {
        isvalid = false; 
    }

    if (!validateEmailInput()) {
        isvalid = false;
    }

    if (!validatePasswordInput()) {
        isvalid = false;
    }

    if (!validatePasswordConfirmInput()) {
        isvalid = false;
    }

    if (!isvalid) {
        return;
    }

    console.log('Submit form');
}