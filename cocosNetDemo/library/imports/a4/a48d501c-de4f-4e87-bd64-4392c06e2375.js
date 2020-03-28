"use strict";
cc._RF.push(module, 'a48d5Ac3k9Oh71kQ5LAbiN1', 'ExampleExplain');
// scripts/3/ExampleExplain.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        web: cc.WebView,
        back: cc.Button
    },

    onLoad: function onLoad() {
        this.back.node.on('click', this.onBack, this);
        this.web.node.on('loaded', this.callback, this);
    },
    onBack: function onBack() {
        cc.director.loadScene('index');
    },


    callback: function callback(event) {
        //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 WebView 组件
        var webview = event;
        console.log('1111111111111');
        // console.log(JSON.stringify(webview));
        //do whatever you want with webview
        //另外，注意这种方式注册的事件，也无法传递 customEventData
    },
    // start () {},

    // update (dt) {},

    onDestroy: function onDestroy() {}
});

cc._RF.pop();