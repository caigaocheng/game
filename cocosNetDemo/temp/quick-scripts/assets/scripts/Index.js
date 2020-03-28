(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c67eeDeuNCrYURpguviuko', 'Index', __filename);
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
        //# sourceMappingURL=Index.js.map
        