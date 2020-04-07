// // //ts类 
// // class Person {
// //     private name: string;

// //     // protected adress: string = 'beijing';
// //     private adress: string = 'beijing';
// //     /**
// //      *Creates an instance of Persoon.
// //      构造函数 实例化类的时候触发的方法
// //      * @memberof Persoon
// //      */
// //     constructor(name: string) {
// //         console.log('constructor--Person');
// //         this.name = name;
// //     }
// //     run(): void {
// //         console.log(this.name + ' run');
// //     }
// //     // getName(): string {
// //     //     return this.name;
// //     // }
// //     // setName(name: string): void {
// //     //     this.name = name;
// //     // }
    
    
// // }
// // var p = new Person('zhangsan');
// // p.run();


// // //ts 继承 extends super

// // // class Person2 extends Person {
// // //     private age:number;
// // //     constructor(name: string, age: number) {
// // //         super(name);
// // //         console.log('constructor--Person2');
// // //         this.age = age;
// // //     }
// // //     getAge(): number {
// // //         return this.age;
// // //     }
// // //     setAge(age: number): void {
// // //         this.age = age;
// // //     }
// // //     work(): void {
// // //         console.log(this.name + '  work');
// // //     }
// // // }

// // // var p2 = new Person2('王五', 40);
// // // p2.work();


// // // 类里面的修饰符 属性不加修饰符默认是public
// // /*
// // public  所有
// // private 私有 只在当前类
// // protected   当前类和子类
// // */

// class Animal {
//     private name:string;
//     public constructor(name:string) {
//         this.name = name;
//     }
//     public run():void{
//         console.log('run '+this.name);
//     }
// }

// let a = new Animal('Jack');
// // console.log(a.name); // Jack
// // a.name = 'Tom';
// a.run();

// class Dog  extends Animal {
//    adress:string;
//     public constructor(name:string,adress:string) {
//         super(name)
//         this.adress = adress;
        
//     }
//     public run():void{
//         console.log('run '+this.adress);
//     }
// }



