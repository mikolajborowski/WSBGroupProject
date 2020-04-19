"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var FormValidationService = {
  checkEmptyFields: function checkEmptyFields(fields, state) {
    !fields.map(function (field) {
      return state[field] !== "";
    }).includes(false);
  }
};
var _default = FormValidationService;
exports["default"] = _default;