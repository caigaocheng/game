"use strict";
//ts类 
console.log('接口:');
/*
接口是一种规范的定义，定义了某一批类所遵守的规范
*/
//属性接口 对json的约束
//无参数
function printLabel() {
    console.log('printLabel');
}
printLabel();
//传入参数
function printLabel2(label) {
    console.log('printLabel2 ' + label);
}
printLabel2('hahaha');
//传入参数,对json进行约束   key-value格式
function printLabel3(labelInfo) {
    console.log('printLabel3 ' + labelInfo.label);
}
var info = { label: 'json' };
printLabel3(info);
function printLabel4(name) {
    console.log('printLabel4  ' + name.firstName + '  ' + name.secondName);
}
//对象
printLabel4({
    firstName: 'ha',
    secondName: 'ha'
});
var obj = {
    firstName: 'ha',
    secondName: 'ha',
    age: 10
};
printLabel4(obj); //正常写法
function getStudentInfo(param) {
}
