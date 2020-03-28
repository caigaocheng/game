"use strict";
cc._RF.push(module, 'f46c6jxDk1Mj7MfJ9xB1aRp', 'ExamplesData');
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