"use strict";
//es5定义函数的方法
//1函数声明
function run() {
    return 'run';
}
//2匿名函数
var run2 = function () {
    return 'run2';
};
//ts 定义函数的方法:同上
function runTS() {
    return 'runTS';
}
var runTS2 = function () {
    return 123;
};
function getInfo(name, age) {
    /**
     *
     * 字符串模板
     * ts里支持在字符串中插入变量，格式为${}，注意字符串必须用``包裹
     */
    return name + " ---- " + age; //模板字符串
}
// alert(getInfo('zhangsan', 20));
console.log(getInfo('zhangsan', 20));
var getInfo2 = function (name, age) {
    return name + " === " + age;
};
console.log(getInfo2('匿名函数', 3));
//没有返回值
function runTS3() {
}
//可选参数
//ts 参数可传可不传 ?表示可选参数
//可选参数必须配置到参数的最后面
function getInfo3(name, age) {
    if (age) {
        return name + age;
    }
    else {
        return name + 'age保密';
    }
}
console.log(getInfo3('zhangsan', 30));
console.log(getInfo3('lisi'));
//默认参数  用法类似可选参数
function getInfo4(age, name, adress) {
    if (age === void 0) { age = 20; }
    if (adress === void 0) { adress = 'beijing'; }
    // return name+age+adress;
    return name + "--" + age + "--" + adress + "--";
}
console.log(getInfo4(20, 'zhangsan'));
//剩余参数  三点运算符...   
function sum(a, b, c) {
    return a + b + c;
}
//三点运算符
function sumArr(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum = sum + result[i];
    }
    return sum;
}
console.log(sumArr(1, 2, 3, 4, 5, 6, 7, 8, 9));
function getInfo5(str) {
    if (typeof str == 'string') {
        return 'name==' + str;
    }
    else {
        return 'age==' + str;
    }
}
console.log(getInfo5('zhangsan'));
console.log(getInfo5(10));
function getInfo6(str, age) {
    if (age) {
        return 'name==' + str + '  age==' + age;
    }
    else {
        return 'age==' + str;
    }
}
console.log(getInfo6('lisi'));
console.log(getInfo6('lisi', 30));
//箭头函数 es6的语法
setTimeout(function () {
    console.log('fucntion');
}, 1000);
//箭头函数的this指向上下文
setTimeout(function () {
    console.log('箭头函数');
}, 1000);
