"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAdminList=exports.deleteAdmin=exports.setAdmin=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var setAdmin=function(t){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.post("api/admin/set/".concat(t),t,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},null,null,[[0,7]])};exports.setAdmin=setAdmin;var deleteAdmin=function(t){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.post("api/user/delete/".concat(t),t,{headers:{Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},null,null,[[0,7]])};exports.deleteAdmin=deleteAdmin;var getAdminList=function(){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.get("api/admin/list",{headers:{Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},null,null,[[0,7]])};exports.getAdminList=getAdminList;