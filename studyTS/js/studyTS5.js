"use strict";
console.log('TS 泛型');
/*
ts的泛型作用:解决类 接口 方法的复用，以及对不确定行数据类型的支持
*/
// function getData(value:string):string{
//     return value;
// }
//同时返回string和number
//可以用any 但是放弃了类型检查
// 泛型：支持不特定的数据类型，传入和返回的参数一致
function getData(value) {
    return value;
}
getData(123);
getData('aaa');
/**
 *
 *最小堆算法，实现数字和字符串
 * @class MinClass
 */
// class MinClass {
//     private list: number[] = [];
//     add(num: number): void {
//         this.list.push(num);
//     }
//     min(): number {
//         let min = this.list[0];
//         for (let i = 0; i < this.list.length; i++) {
//             if (this.list[i] < min) {
//                 min = this.list[i];
//             }
//         }
//         return min;
//     }
// }
// let arr = new MinClass();
// arr.add(2);
// arr.add(22);
// arr.add(24);
// arr.add(62);
// console.log(arr.min());
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        // let returnValue:object= {max2,min2}
        var min = this.list[0];
        var max = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] < min) {
                min = this.list[i];
            }
            if (this.list[i] > max) {
                max = this.list[i];
            }
        }
        return min;
    };
    return MinClass;
}());
var arr = new MinClass(); //使用的时候限制类型
arr.add('a');
arr.add('t');
arr.add('g');
arr.add('h');
arr.add('o');
console.log(arr.min());
