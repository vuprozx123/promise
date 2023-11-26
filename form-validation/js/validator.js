// thu vien validator
function Validator(options) {

    const formElement = document.querySelector(options.form);
    console.log(formElement);

    if (formElement) {
        options.rules.forEach(rule => {
            //rule.selector để tìm ra đúng ô input cần validate
            console.log(rule);
            const inputElement = formElement.querySelector(rule.selector);

            inputElement.onblur = () => {
                const errorMessage = rule.test(inputElement.value);
                if (errorMessage) {
                    inputElement.parentElement.classList.add('invalid');
                    inputElement.parentElement.querySelector('.form-message').innerText = errorMessage;
                }
            }
        });
    }
}

Validator.isRequired = (selector, message = 'Trường này là trường bắt buộc') => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message;
        }
    }

}

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (regex.test(value)) {
                return undefined;
            }
            return 'Email không hợp lệ';
        }
    }
}

Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : `Truong phai it nhat  ${min} ky tu`;
        }
    }
}

