"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.register=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var register=function(r){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.post("api/register",r,{headers:{"Content-Type":"application/json"}}));case 3:return t=e.sent,e.abrupt("return",console.log(t));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 10:case"end":return e.stop()}},null,null,[[0,7]])};exports.register=register;