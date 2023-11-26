const formElement = document.querySelector('#register-form');

// khong dung onblur trong html , dung cach trong js 
document.querySelector('#register-form input[name="fullname"]').addEventListener('blur', validateNameInput);

document.querySelector('#register-form input[name="email"]').addEventListener('blur', validateEmailInput);

document.querySelector('#register-form input[name="password"]').addEventListener('blur', validatePasswordInput);

document.querySelector('#register-form input[name="password_confirmation"]').addEventListener('blur', validatePasswordConfirmationInput);


function validateNameInput() {
    // cach 1 
    // const formElement = document.getElementById('register-form');
    // console.log(formElement); 

    
    // const nameInput = formElement.elements['fullname'];
    // console.log(nameInput);

    // cach 2
    // console.log(formElement);

    // const nameInput = formElement.querySelector('input[name="fullname"]');
    // console.log(nameInput);

    //cach 3

    // const nameInput = document.querySelector('#register-form input[name="fullname"]');
    // console.log(nameInput);

    const nameInput = formElement.querySelector('input[name="fullname"]');
    console.log(nameInput.value);

    if (!nameInput.value) {
        // // Them class invalid vao the cha cua o input
        // nameInput.parentElement.classList.add('invalid');

        // // tim element chua message loi va chen doan message vao
        // nameInput.parentElement.querySelector('.form-message').innerText = 'Trường name là trường bắt buộc';
        handleError(nameInput, 'Name là trường bắt buộc');
        return false;
    }
    return true;
}

function validateEmailInput() {
    const emailInput = formElement.querySelector('input[name="email"]');

    if (!emailInput.value) {
        handleError(emailInput, 'Email là trường bắt buộc');
        return false;
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    if (!regex.test(emailInput.value)) {
        handleError(emailInput, 'Email không hợp lệ');
        return false;
    }
    return true;
}

function handleError(formInput, message) {
    formInput.parentElement.classList.add('invalid');

    formInput.parentElement.querySelector('.form-message').innerText = message;
}

function validatePasswordInput() {
    const passwordInput = formElement.querySelector('input[name="password"]');

    if (!passwordInput.value) {
        handleError(passwordInput, 'Mật khẩu là trường bắt buộc');
        return false;
    }

    if (passwordInput.value.length < 6) {
        handleError(passwordInput, 'Mật khẩu phải nhỏ hơn 6 kí tự');
        return false;
    } 
    return true;
}

function validatePasswordConfirmationInput() {
    const confirmPasswordInput = formElement.querySelector('input[name="password_confirmation"]');

    if (!confirmPasswordInput.value) {
        handleError(confirmPasswordInput, 'Nhập lại mật khẩu là trường bắt buộc');
        return false;
    }

    if (confirmPasswordInput.value.length < 6) {
        handleError(confirmPasswordInput, 'Nhập lại mật khẩu nhỏ hơn 6 kí tự');
        return false;
    } 
    
    const passwordInput  = formElement.querySelector('input[name="password"]');
    if (passwordInput.value !== confirmPasswordInput.value) {
        handleError(confirmPasswordInput, 'Mật khẩu không trùng khớp');
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
    if (!validatePasswordConfirmationInput()) {
        isvalid = false;
    }

    if (!isvalid) {
        return;
    }

    console.log('Submit form');
}


