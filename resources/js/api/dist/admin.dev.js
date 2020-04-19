"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdminList = exports.deleteAdmin = exports.setAdmin = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setAdmin = function setAdmin(id) {
  var response;
  return regeneratorRuntime.async(function setAdmin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("api/admin/set/".concat(id), id, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.setAdmin = setAdmin;

var deleteAdmin = function deleteAdmin(id) {
  var response;
  return regeneratorRuntime.async(function deleteAdmin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("api/user/delete/".concat(id), id, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context2.sent;
          console.log(response);
          return _context2.abrupt("return", response);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteAdmin = deleteAdmin;

var getAdminList = function getAdminList() {
  var response;
  return regeneratorRuntime.async(function getAdminList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("api/admin/list", {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context3.sent;
          console.log(response.data);
          return _context3.abrupt("return", response.data);

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAdminList = getAdminList;