
//es5定义函数的方法
//1函数声明
function run() {
    return 'run';
}
//2匿名函数
var run2 = function () {

    return 'run2';
}

//ts 定义函数的方法:同上
function runTS(): string {
    return 'runTS';
}
var runTS2 = function (): number {
    return 123;
}


function getInfo(name: string, age: number): string {
    /**
     *
     * 字符串模板
     * ts里支持在字符串中插入变量，格式为${}，注意字符串必须用``包裹
     */
    return `${name} ---- ${age}`;//模板字符串
}
// alert(getInfo('zhangsan', 20));
console.log(getInfo('zhangsan', 20));

var getInfo2 = function (name: string, age: number): string {
    return `${name} === ${age}`;
}
console.log(getInfo2('匿名函数', 3));

//没有返回值
function runTS3(): void {

}
//可选参数
//ts 参数可传可不传 ?表示可选参数
//可选参数必须配置到参数的最后面
function getInfo3(name: string, age?: number): string {

    if (age) {
        return name + age;
    } else {
        return name + 'age保密';
    }
}

console.log(getInfo3('zhangsan', 30));
console.log(getInfo3('lisi'));

//默认参数  用法类似可选参数
function getInfo4(age: number = 20, name: string, adress: string = 'beijing'): string {

    // return name+age+adress;
    return `${name}--${age}--${adress}--`
}
console.log(getInfo4(20, 'zhangsan'));

//剩余参数  三点运算符...   
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}

//三点运算符
function sumArr(a: number, b: number, ...result: number[]): number {
    let sum = a + b;
    for (let i = 0; i < result.length; i++) {
        sum = sum + result[i];
    }
    return sum;
}

console.log(sumArr(1, 2, 3, 4, 5, 6, 7, 8, 9));

/** 
 * 重载 面向对象的编程，方法名相同，参数数量不同或者类型不同
 * 
 * es5出现同名方法，下面的会替换上面的方法
*/

/**
 * 
 * ts的重载 先定义，后实现
 * */
function getInfo5(name: string): string;
function getInfo5(age: number): number;
function getInfo5(str: string | number): string | number {
    if (typeof str == 'string') {
        return 'name==' + str;
    } else {
        return 'age==' + str;
    }
}
console.log(getInfo5('zhangsan'));
console.log(getInfo5(10));

function getInfo6(name: string): string;
function getInfo6(name: string, age: number): string;
function getInfo6(str: string, age?: number): string {
    if (age) {
        return 'name==' + str + '  age==' + age;
    } else {
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
setTimeout(() => {
    console.log('箭头函数');
}, 1000);