"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteGroup = exports.deleteChannelFromGroup = exports.getAllGroups = exports.addChannelToGroup = exports.renameGroup = exports.addGroup = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addGroup = function addGroup(group) {
  var response;
  return regeneratorRuntime.async(function addGroup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/group/add', group, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", response);

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

exports.addGroup = addGroup;

var renameGroup = function renameGroup(group) {
  var response;
  return regeneratorRuntime.async(function renameGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/group/rename', group, {
            headers: {
              'Content-Type': 'application/json',
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
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.renameGroup = renameGroup;

var addChannelToGroup = function addChannelToGroup(channel) {
  var response;
  return regeneratorRuntime.async(function addChannelToGroup$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/group/add/channel', channel, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context3.sent;
          console.log(response);
          return _context3.abrupt("return", response);

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.addChannelToGroup = addChannelToGroup;

var getAllGroups = function getAllGroups() {
  var response;
  return regeneratorRuntime.async(function getAllGroups$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("api/group/all", {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context4.sent;
          console.log(response);
          return _context4.abrupt("return", response);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAllGroups = getAllGroups;

var deleteChannelFromGroup = function deleteChannelFromGroup(id) {
  var response;
  return regeneratorRuntime.async(function deleteChannelFromGroup$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("api/group/delete/channel/".concat(id), id, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context5.sent;
          console.log(response);
          return _context5.abrupt("return", response);

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteChannelFromGroup = deleteChannelFromGroup;

var deleteGroup = function deleteGroup(id) {
  var response;
  return regeneratorRuntime.async(function deleteGroup$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("api/group/delete/".concat(id), id, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.usertoken)
            }
          }));

        case 3:
          response = _context6.sent;
          console.log(response);
          return _context6.abrupt("return", response);

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.deleteGroup = deleteGroup;