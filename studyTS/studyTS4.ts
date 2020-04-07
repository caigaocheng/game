//ts类 
console.log('函数类型的接口:');
/*
接口是一种规范的定义，定义了某一批类所遵守的规范
*/

//函数类型的接口：对方法传入的参数 以及返回值进行约束

//加密的函数类型接口
interface encrypt {
    (key: string, value: string): string;
}
var md5: encrypt = function (key: string, value: string): string {
    return key + value;
}

var sha1: encrypt = function (key: string, value: string): string {
    return key + '---' + value;
}
// function md5(key:string,value:string):string{
//     return key+value;
// }
console.log(md5('name', 'zhangsan'));
console.log(sha1('name', 'zhangsan'));

console.log('可索引的接口:数组，对象的约束');

interface userArr {
    [index: number]: string;
}
interface userObj {
    //    name:string;
    //    age:number;
    [index: string]: string;
}
let arr1: userArr = ['123', 'aaa'];
let userObj1: userObj = { name: 'zhangsan' };

interface Animal {
    name: string;
    eat(str: string): string;
}
class Dog implements Animal {
    name: string;
    eat(str: string): string {
        return str;
    }
    constructor(name: string) {
        this.name = name;
    }
}

let d = new Dog('xiaohei');
d.eat('eat骨头');

class fish implements Animal {
    name: string;
    eat(): string {
        console.log('eat---');
        return '';
    }
    constructor(name: string) {
        this.name = name;
    }
}

let f = new fish('xiaohei');
console.log(f.eat());


//接口扩展
interface Animal2{
    eat():void;
}
interface Person extends Animal2{
    work():void;
}

class progress{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    code(str:string){
        console.log(this.name+str);
    }
    
}
class web extends progress implements Person{
    constructor(name:string){
        super(name);
    }
    work(): void {
        
    }
    eat(): void {
        
    }
    
}

let w = new web('哈哈');
w.code('写代码');