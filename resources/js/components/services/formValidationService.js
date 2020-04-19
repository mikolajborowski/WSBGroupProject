const FormValidationService = {
    validationMessage: {
        email: 'Please enter valid email address',
        nameLength: 'Name must contain at least 3 characters',
        password: 'Your password must contain at least 6 characters',
        passwordConfirmation: 'Passwords do not match',
        rssNameLenght: 'Please provide RSS channel name',
        rssURL: 'Please provide valid link'
    },

    validationRegex: {
        email: RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
        url: RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i)
    },

    checkEmptyFields: function(fields, state) {
        return !fields.map(field => state[field] !== "").includes(false);
    },

    checkFormErrors: function(errors) {
        let noErrors = true;
        Object.values(errors).forEach(
            val => val.length > 0 && (noErrors = false)
        );
        return noErrors;
    }
};

export default FormValidationService;
