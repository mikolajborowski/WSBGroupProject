"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postUser = exports.getUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUser = function getUser() {
  var response;
  return regeneratorRuntime.async(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get('api/user', {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", response.data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUser = getUser;

var postUser = function postUser() {
  return regeneratorRuntime.async(function postUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.postUser = postUser;