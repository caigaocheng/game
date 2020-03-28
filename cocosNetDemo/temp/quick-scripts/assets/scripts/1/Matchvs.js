(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/1/Matchvs.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c17e1oK2fxOmYfTT0kZbQQ/', 'Matchvs', __filename);
// scripts/1/Matchvs.js

"use strict";

/**
 * Matchvs JSB加载与Js加载
 */
var engine;
var response;
var MsMatchInfo;
var MsCreateRoomInfo;
var MsRoomFilterEx;
var LocalStore_Clear;

try {
    engine = new window.MatchvsEngine();
    response = new window.MatchvsResponse();
    MsMatchInfo = window.MsMatchInfo;
    MsCreateRoomInfo = window.MsCreateRoomInfo;
    MsRoomFilterEx = window.MsRoomFilterEx;
    LocalStore_Clear = window.LocalStore_Clear;

    console.log(undefined);
    if (typeof BK != "undefined" || typeof FBInstant != "undefined") {
        MVS.SetWss && MVS.SetWss(true);
        console.log("use wss");
    }

    console.log("load matchvs.all.js success");
} catch (error) {
    console.error("try load matchvs JS fail," + error.message);
}

module.exports = {
    engine: engine,
    response: response,
    MsMatchInfo: MsMatchInfo,
    MsCreateRoomInfo: MsCreateRoomInfo,
    MsRoomFilterEx: MsRoomFilterEx,
    LocalStore_Clear: LocalStore_Clear
};

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Matchvs.js.map
        