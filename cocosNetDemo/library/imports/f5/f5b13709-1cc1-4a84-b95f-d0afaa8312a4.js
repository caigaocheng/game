"use strict";
cc._RF.push(module, 'f5b13cJHMFKhLlf0K+qgxKk', 'CaseExperience');
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