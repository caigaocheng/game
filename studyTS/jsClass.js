// //es5的类
// //最简单的类
// // function Person() {
// //     this.name = 'zhangsan';
// //     this.age = 20;
// // }
// // let p = new Person();
// // console.log(p.name);
// // 2构造函数和原型链里面的方法
// //注意：原型链的属性会被多个实例共享，构造函数不会
// function Person2() {
//     this.name = '李四';
//     this.age = 20;
//     this.run = function() {
//         console.log('run');
//     }
// }
// Person2.prototype.sex = 'boy';
// Person2.prototype.work = function() {
//     console.log(this.name + ' work');
// };

// // let p2 = new Person2();
// // p2.run();
// // p2.work();

// //3 类里面的静态方法
// // Person.getInfo = function() {
// //         console.log('类里面的静态方法');
// //     }
// //     //调用静态方法
// // Person.getInfo();

// // es5里面年的继承  原型链+对象冒充的组合继承
// //web类继承Person2
// function Web() {
//     // Person2.call(this); /* 对象冒充实现继承 */
// }
// //对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链里面的属性和方法
// // let w = new Web();
// // console.log(w.age);
// // console.log(w.run());
// // // console.log(w.work());//错误
// /** 
//  * 原型链既能继承构造函数的属性和方法，又能继承原型链的属性和方法
//  * 实例化子类不能给父类传参
//  */
// Web.prototype = new Person2();
// let w = new Web();
// console.log('原型链继承  ' + w.age);
// console.log('原型链继承  ' + w.run());
// console.log('原型链继承  ' + w.work());



// // function Person3(name, age) {
// //     this.name = name;
// //     this.age = age;
// //     this.run = function() {
// //         console.log(this.name + 'run');
// //     }
// // }

// // Web3.prototype = new Person3();
// // w3 = new Web3('哈哈哈', 20);
// // w3.run();

//原型链+对象冒充实现继承
function Person4(name, age) {
    this.name = name;
    this.age = age;
    this.run = function() {
        console.log(this.name + 'run');
    }
}
Person4.prototype.sex = 'boy';
Person4.prototype.work = function() {
    console.log(this.name + ' work');
};

function Web4(name, age) {
    Person4.call(this, name, age);
}
//两种写法 
//1
// Web4.prototype = new Person4();
//2
Web4.prototype = Person4.prototype;
var w4 = new Web4('赵四', 50);
console.log(w4.name);
w4.run();
w4.work();