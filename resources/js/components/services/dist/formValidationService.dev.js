"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var FormValidationService = {
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
    url: RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i)
  },
  checkEmptyFields: function checkEmptyFields(fields, state) {
    return !fields.map(function (field) {
      return state[field] !== "";
    }).includes(false);
  },
  checkFormErrors: function checkFormErrors(errors) {
    var noErrors = true;
    Object.values(errors).forEach(function (val) {
      return val.length > 0 && (noErrors = false);
    });
    return noErrors;
  }
};
var _default = FormValidationService;
exports["default"] = _default;