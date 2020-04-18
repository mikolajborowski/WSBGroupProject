"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getChannelsHTML=exports.getChannelsList=exports.deleteChannel=exports.postChannel=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var postChannel=function(t){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.post("api/channels/save",t,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},null,null,[[0,8]])};exports.postChannel=postChannel;var deleteChannel=function(t){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.delete("api/channels/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},null,null,[[0,8]])};exports.deleteChannel=deleteChannel;var getChannelsList=function(){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.get("api/channels/list",{headers:{Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return t=e.sent,console.log(t),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},null,null,[[0,8]])};exports.getChannelsList=getChannelsList;var getChannelsHTML=function(){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(_axios.default.get("api/channels/format",{headers:{Authorization:"Bearer ".concat(localStorage.usertoken)}}));case 3:return t=e.sent,console.log(t),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},null,null,[[0,8]])};exports.getChannelsHTML=getChannelsHTML;