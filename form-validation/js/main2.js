Validator({
    form: '#register-form',
    rules: [
        Validator.isRequired('#fullname'),
        // Validator.isEmail('#email'),
    ]
})