//ts类 
console.log('接口:');
/*
接口是一种规范的定义，定义了某一批类所遵守的规范
*/


//属性接口 对json的约束
//无参数
function printLabel(): void {
    console.log('printLabel');
}
printLabel();
//传入参数
function printLabel2(label:string): void {
    console.log('printLabel2 '+label);
}
printLabel2('hahaha');


//传入参数,对json进行约束   key-value格式
function printLabel3(labelInfo:{label:string}): void {
    console.log('printLabel3 '+labelInfo.label);
}
let info = {label:'json'};
printLabel3(info);

// 对批量的方法进行约束，使用接口
interface printName{
    firstName:string;
    secondName:string;
}
function printLabel4(name:printName):void{
    console.log('printLabel4  '+name.firstName+'  '+name.secondName)
}
//对象
printLabel4({
    firstName:'ha',
    secondName:'ha'
})

let obj = {
    firstName:'ha',
    secondName:'ha',
    age:10
}

printLabel4(obj)//正常写法


// 对批量的属性进行约束，使用接口
interface fullName{
    firstName:string;
    secondName:string;
    age:number
}

//属性类接口
//参数顺序不影响
//属性可选 ？表示
interface studentInfo{
    name:string;
    sex:string;
    age:number;
    class:string;
    score?:number;
}
function getStudentInfo(param:studentInfo):void{

}