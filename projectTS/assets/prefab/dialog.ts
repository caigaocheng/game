// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    @property(cc.Prefab)
    PREFAB: cc.Prefab = null;
    @property(cc.Node)//预制件实例化后所在的父节点
    parent: cc.Node = null;
    @property
    autoLoad : boolean = false;  //自动加载
    
    //组件加载时检查，是否自动加载预制件
    onLoad() {
        if (this.autoLoad) {
            this.loadPrefab();
        }
    }
    
    //实例化预制件，设置父节点
    loadPrefab() {
        let node = cc.instantiate(this.PREFAB);
        //当父节点不存在时，使用当前组件为父节点
        node.parent = this.parent || this.node;
    }
    onOK(){
        console.log('ok');
        this.node.destroy();
    }
    onCancel(){
        console.log('cancel');
        this.node.destroy();
    }

    // update (dt) {}
}
