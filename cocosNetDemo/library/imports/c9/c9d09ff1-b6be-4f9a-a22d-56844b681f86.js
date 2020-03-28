"use strict";
cc._RF.push(module, 'c9d09/xtr5PmqItVoRLaB+G', 'Item');
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