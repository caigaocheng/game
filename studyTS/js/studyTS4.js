"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ts类 
console.log('函数类型的接口:');
var md5 = function (key, value) {
    return key + value;
};
var sha1 = function (key, value) {
    return key + '---' + value;
};
// function md5(key:string,value:string):string{
//     return key+value;
// }
console.log(md5('name', 'zhangsan'));
console.log(sha1('name', 'zhangsan'));
console.log('可索引的接口:数组，对象的约束');
var arr1 = ['123', 'aaa'];
var userObj1 = { name: 'zhangsan' };
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        return str;
    };
    return Dog;
}());
var d = new Dog('xiaohei');
d.eat('eat骨头');
var fish = /** @class */ (function () {
    function fish(name) {
        this.name = name;
    }
    fish.prototype.eat = function () {
        console.log('eat---');
        return '';
    };
    return fish;
}());
var f = new fish('xiaohei');
console.log(f.eat());
var progress = /** @class */ (function () {
    function progress(name) {
        this.name = name;
    }
    progress.prototype.code = function (str) {
        console.log(this.name + str);
    };
    return progress;
}());
var web = /** @class */ (function (_super) {
    __extends(web, _super);
    function web(name) {
        return _super.call(this, name) || this;
    }
    web.prototype.work = function () {
    };
    web.prototype.eat = function () {
    };
    return web;
}(progress));
var w = new web('哈哈');
w.code('写代码');
