(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/1/ExamplesData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f46c6jxDk1Mj7MfJ9xB1aRp', 'ExamplesData', __filename);
// scripts/1/ExamplesData.js

'use strict';

/**
 * 体验地址的游戏信息
 * @type {{gameID: number, channel: string, platform: string, gameVersion: number, appKey: string, userName: string, mxaNumer: number, userID: string, token: string, host: string}}
 */

var GameData = {
    gameID: 214415,
    channel: 'Matchvs',
    platform: 'alpha',
    gameVersion: 1,
    appKey: '479d25236a274961bd2fea127c277027#C',
    userName: '',
    mxaNumer: 3,
    userID: "",
    token: "",
    host: "",
    isPAAS: false,
    reset: function reset() {
        GameData.gameID = "";
        GameData.appKey = "";
        GameData.userID = "";
        GameData.token = "";
    }
};

module.exports = GameData;

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
        //# sourceMappingURL=ExamplesData.js.map
        