// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mouse: [cc.Node],
        hammer: cc.Node,
        txtCount: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.count = 0;
        this.txtCount.string = this.count;
    },

    start() {
        cc.director.getScheduler().schedule(this.logic, this, 0.5, false);
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
            for (let i = 0; i < this.mouse.length; i++) {
                if (this.mouse[i].opacity == 0) {
                    continue;
                }

                let parent = this.mouse[i].parent;
                let maskPos = parent.parent.convertToWorldSpaceAR(parent.position);
                let maskRect = cc.rect(maskPos.x - parent.width / 2, maskPos.y, parent.width, parent.height);

                let mouse = this.mouse[i];
                let mousePos = parent.convertToWorldSpaceAR(mouse.position);
                let mousRect = cc.rect(mousePos.x - mouse.width / 2, mousePos.y - mouse.height / 2, mouse.width, mouse.height);

                let mixRect = new cc.Rect();
                maskRect.intersection(mixRect, mousRect);

                if (mixRect.contains(event.getLocation())) {
                    this.hammer.position = parent.position;
                    this.hammer.active = true;

                    this.count++;
                    this.txtCount.string = this.count;
                    break;
                }
            }
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
            this.hammer.active = false;
        }, this);
    },

    logic() {
        let index = Math.floor(Math.random() * 9);
        cc.log(`index:${index}`);
        if (index < 0 || index >= this.mouse.length) {
            return;
        }

        this.mouse[index].getComponent('mouse').appear();
    },

    // update (dt) {},
});