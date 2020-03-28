"use strict";
cc._RF.push(module, '0c67eeDeuNCrYURpguviuko', 'Index');
// scripts/Index.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        caseExperience: cc.Button, // 联网案例体验
        networkFlow: cc.Button, //联网流程
        exampleExplain: cc.Button //范例说明
    },

    onLoad: function onLoad() {
        this.caseExperience.node.on('click', this.startScene, this);
        this.networkFlow.node.on('click', this.startScene, this);
        this.exampleExplain.node.on('click', this.startScene, this);
    },
    startScene: function startScene(event) {
        switch (event.node.name) {
            case 'caseExperience':
                cc.director.loadScene('caseExperience');
                break;
            case 'networkFlow':
                cc.director.loadScene('pass');
                break;
            case 'exampleExplain':
                cc.director.loadScene('exampleExplain');
                break;
            default:
                break;
        }
    }
}

// start () {},

// update (dt) {},
);

cc._RF.pop();