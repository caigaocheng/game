(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/2/Item.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c9d09/xtr5PmqItVoRLaB+G', 'Item', __filename);
// scripts/2/Item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        logLable: cc.Label
    },

    onLoad: function onLoad() {
        var self = this;
    },

    updateItem: function updateItem(obj) {
        this.logLable.string = obj;
    }

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
        //# sourceMappingURL=Item.js.map
        