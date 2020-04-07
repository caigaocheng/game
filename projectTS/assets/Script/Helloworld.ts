const { ccclass, property } = cc._decorator;


@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.SceneAsset)
    scene: cc.SceneAsset = null;

    @property
    text: string = 'hello';

    start() {
        // init logic
        this.label.string = this.text;
        console.log('boy', sex.boy)
    }
    change() {
        cc.director.loadScene(this.scene.name);
    }
}

export class HelloTS {
    /**
     * 
     * 写ts必须指定类型
     */
    flag: boolean = true;
    /**
     * 数组
     */
    arr: number[] = [];
    arr2: [number, string] = [1, 'a'];//元组

    ss:undefined | number

    run():void{

    }

    onNum():number{

        return 1;
    }


    
}

//枚举类型，下标默认从0开始
enum sex {
    boy,
    girl
}

enum color {
    read= -1,
    blue,
    yello = 4,
    gray
}