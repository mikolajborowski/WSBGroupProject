"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelsHTML = exports.getChannelsList = exports.deleteChannel = exports.postChannel = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postChannel = function postChannel(channels) {
  var response;
  return regeneratorRuntime.async(function postChannel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post('api/channels/save', channels, {
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

exports.postChannel = postChannel;

var deleteChannel = function deleteChannel(id) {
  var response;
  return regeneratorRuntime.async(function deleteChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("api/channels/delete/".concat(id), {
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

exports.deleteChannel = deleteChannel;

var getChannelsList = function getChannelsList() {
  var response;
  return regeneratorRuntime.async(function getChannelsList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("api/channels/list", {
            headers: {
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
          console.error(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getChannelsList = getChannelsList;

var getChannelsHTML = function getChannelsHTML() {
  var response;
  return regeneratorRuntime.async(function getChannelsHTML$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("api/channels/format", {
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

exports.getChannelsHTML = getChannelsHTML;