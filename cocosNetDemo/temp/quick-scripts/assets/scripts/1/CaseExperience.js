(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/1/CaseExperience.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f5b13cJHMFKhLlf0K+qgxKk', 'CaseExperience', __filename);
// scripts/1/CaseExperience.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        web: cc.WebView,
        back: cc.Button,
        btnOpenWithBrowser: cc.Button
    },

    onLoad: function onLoad() {
        this.back.node.on('click', this.onBack, this);
        this.btnOpenWithBrowser.node.on('click', this.openWithBrowser, this);
    },
    onBack: function onBack() {
        cc.director.loadScene('index');
    },
    openWithBrowser: function openWithBrowser() {
        console.log("open ", this.web.url);
        window.open(this.web.url);
    }
    // start () {},

    // update (dt) {},

});

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
        //# sourceMappingURL=CaseExperience.js.map
        