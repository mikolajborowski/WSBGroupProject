"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(user) {
  var response;
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/register', user, {
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 3:
          response = _context.sent;
          localStorage.setItem('usertoken', response.data.token); // return console.log(response);

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.error(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.register = register;

var login = function login(user) {
  var response;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/login', {
            email: user.email,
            password: user.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 3:
          response = _context2.sent;
          localStorage.setItem('usertoken', response.data.token); // return console.log(response);

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", console.error(_context2.t0));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.login = login;