// let mySymb = Symbol();
// let mySymb2 = Symbol();

// console.log(mySymb === mySymb2);

// let worker = {
//   name: "John",
//   lastname: "Coner",
//   [mySymb]: "hello",
// };

// console.log(worker);

// for (let w in worker) {
//   console.log(w, worker[w]);
// }

// worker.sayHello = function (name = null) {
//   if (!name) {
//     name = this.name;
//   }
//   console.log(`Hello! My name is ${name}`);
// };

// worker.sayHello("Sanya");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (true) {
//   if (!arr[i]) {
//     break;
//   }
//   console.log(arr[i]);
//   i++;
// }

// for (let elem of arr) {
//   console.log(elem);
// }

// let DimObj = {
//   name: "Дмитрий",
//   lastname: "Такойтов",
//   old: 21,
//   psevdonim: "тренер",
//   sayHello: function (name) {
//     if (!name) {
//       string = `С Димой никто не поздоровался. ${this.name} растроен`;
//     } else {
//       string = `С Димой поздоровался ${name}. ${this.name} счастлив`;
//     }
//     console.log(string);
//   },
//   sayDmitiy: function () {
//     console.log(`${this.name} любит, когда его называют ${this.psevdonim}ом`);
//   },
// };

// DimObj.sayHello("Валерий");
// DimObj.sayDmitiy();

let fibb = {
  name: "Fibbanachi",
  fib: function (n) {
    let count = 0;
    let name = this.name;
    func = function (n) {
      count++;
      if ((n === 1) | (n === 2)) {
        console.log(`${name}. Прокрутка номер ${count}`);
        return 1;
      } else {
        console.log(`${name}. Прокрутка номер ${count}`);
        return func(n - 1) + func(n - 2);
      }
    };
    return func(n);
  },
};

let res = fibb.fib(3);
console.log(res);
let res1 = fibb.fib(5);
console.log(res1);

let n = 1;
n >= 3
  ? console.log("больше или равно 3")
  : n === 2
  ? console.log("равно 2")
  : n === 1
  ? console.log("равно 1")
  : console.log("меньше 1");

let func1 = (a, b) => a + b;
console.log(func1(4, 5));

let fun = function (a, b) {
  return a + b;
};

let Arifmetika = (num, a, b) => num * fun(a, b) - 24;
console.log(Arifmetika(6, 3, 4));

let obj = {};
console.log(Boolean(obj));
