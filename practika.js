// // 6.4
// const pu = (num) => {
//     for (i = 0; i < 3; i++) {
//         num = num*num;
//         console.log(num)
//     }
// }

// function pu1(num) {
//     for (i = 0; i < 3; i++) {
//         num = num*num;
//         console.log(num)
//     }
// }

// pu(2)
// pu1(2)


// 6.5
// function getNumber(data) {
//     if (typeof data !== 'string' || isNaN(data)) {
//       return 0;
//     }
//     return Number(data);
//   }
  
// // Пример вызова функции
// let data = "привет";
// let number = getNumber(data);
// console.log(number);

// // 6.6
// function getPercent(value, total) {
//     return (value*100)/total;
// }

// value = 4
// total = 80
// let number1 = getPercent(value, total);
// console.log(number1);



// var obj = { a: 1 };

// function f1(o) {
//   o.a = 5;
// }
// f1(obj);
// console.log(obj); // ???



// var obj = { a: 1 };

// function f2(o) {
//   o = { hello: 1 };
// }

// f2(obj);

// console.log(obj); // ???


// let list = ["Груша", "Яблоко"];
// list.unshift("Яблоко")
// console.log(list)

// console.log(list.pop())

// list.push("Клубника")
// console.log(list)


// function compactArray(arr) {
//   const arr2 = []
//   for(let value of arr) {
//     if(Boolean(value)) {
//       arr2.push(value)
      
//     }
//   }
//   console.log(arr2)
// }
// compactArray(['Вася', 'Петя', undefined, 'Иван'])

// function countMinMax(arr) {
//   let min
//   let max

//   for (let i = 0; i < arr.lenght; i++) {
//     min == arr[i]
//     console.log(min)
//     if(min >= arr[++i]) {
//       min == arr[++i]
//       console.log(min)
//     }
//   }
// }
// countMinMax([2, 45, 3, 23, 6])

// let objectArray = [{ name: 'Иван' }, { name: 'Петя' }, { name: 'Саша' }];
// console.log(objectArray.toString());

// let user = {
//     name: "Иван",
//     age: 25,
//   }
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
//   // доступ к свойству через переменную
//   console.log( user[key] ); // Иван (если ввели "name")

// let user = {
//   name: "Иван",
//   age: 25
// }

// let clone = Object.assign(user, {id:1});

// console.log(clone);


// var a= {};
// (function b(a) {
//   a.a = 10;
//   a = null;
// }) (a);
// console.log(a)


// const str = 'h2h40h'

// const result = str
// .split('h')
// .map(s=> s+10)
// .filter(s=> s.length < 4)

// console.log(result)

// var x=10

// function bar(funArg) {
//   var x = 30
//   funArg()
// }

// function foo() {
//   console.log(x)
// }

// foo.x = 20
// bar.x = 40

// bar(foo)

// var a = 'hello'

// function b() {
//   if(false) {
//   var a = 'world'
//   } else {
//     var b = 'man'
//   }
//   console.log(b)
//   console.log(a)
// }
// b()

// const numbers = [-2, 4, -1, 6, 8]

// // const result = numbers
// //   .findAll(n => n >0 )
// //   .map(n => n * 2)

//   const result = numbers
//   .filter(n => n > 0 )
//   .map(n => n * 2)


//   console.log(result);

// function foo() { }

// foo.x=10

// console.log(foo.x)

// const result = [5, 7, 9].slice(1)

// result.pop()
// result.push(4)

// console.log(result)

// const obj = {
//   x: 10,
//   y: 20
// }

// const prop = Object
// .keys(obj)
// .reverse()
// .join('')

// obj.xy = 30
// obj.yx = 40
// obj.x10y20 = 50
// obj.y20x10 = 60

// const result = obj[prop]

// console.log(result)

// function foo() { }

// foo.x = 10;

// console.log(foo.x)


// console.log(0 || 1 && 2 || 3)


// const map = new Map();

// map.set('0', '1');
// map.set('s2', '2s');
// map.set('3s', 's3');

// const arr = [...map.values()]
// const result = arr.map(value => parseInt(value, 10))

// console.log(result)

// class GODListener {
//   constructor() {
//     this.counter = 0;
//   }

//   handleClick() {
//     this.counter += 1;
//     console.log(this.counter);
//   }
// }

//   const element = document.getElementById('testBtn')
//   const listener = new GODListener();

//   element.addEventListener('click', listener.handleClick)

// setTimeout(function timeout() {
//   console.log('1')
// }, 0);
// Promise.resolve('2'.then(console.log);

// console.log('3')

// const obj = {
//   x: 10,
//   y: 20,
//   z: 30
// }

// const result = Object.values(obj)

// console.log(result)

// async function bar() {
//   return Promise.resolve(10);
// }

// async function foo() {}

// const res1 = foo();
// const res2 = bar();

// console.log(res1, res2);

// let a = 10;
// a.b = 10;
// console.log(a)


// const obj1 = {
//   x:10
// }

// const obj2 = Object.create(obj1)

// console.log(obj2.x)

// function generateRang(min, max, step) {
//   while(min === max) {
//     min += step
//     console.log(min)
//   }
// }

// generateRang(2,10,2)

// function filterArr(arrStr, num) {
//   for(let i of arrStr) {
//     for(let i = 0; i <= arrStr[i]; i++) {
//       if(i === num) {
//         return i
//       }
//     }
//   }
// }

// filterArr(["Коррекция", "Виток", "Воздух", "Газоанализатор", "Температура"], 6) 

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log( i + ": " + item + " (массив:" + arr + ")" );
// });

// console.log(i)
// let i = 42
// console.log(i)

// -----------------------------------------------------------//
// Уникальнсоть всех символов в строке
// function isUnique(str) {
//     let arr = []
//     for(let i = 0; i < str.length; i++) {
//         if(arr.includes(str[i])) {
//             return false
//         } else {
//             arr.push(str[i])
//         }
//     }
//     return true
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

// -----------------------------------------------------------//

// Плоский массив
// function unpackNestedArray(arr) {
//     return arr.flat(Infinity)
//   }

// function unpackNestedArray(nestedArray) {
//     let result = [];
  
//     for (let i = 0; i < nestedArray.length; i++) {
//       if (Array.isArray(nestedArray[i])) {
//         result = result.concat(unpackNestedArray(nestedArray[i]));
//       } else {
//         result.push(nestedArray[i]);
//       }
//     }
  
//     return result;
//   }
  
//   console.log(unpackNestedArray([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]

// -----------------------------------------------------------//

// Удаление всех повторяющихся значений в строке
// function removeDupes(str) {
//     const uniq = new Set(str)
//     let str2 = Array.from(uniq).join('')
//     return str2
// }

// function removeDupes(str) {
//     let arr = []
//     for(let i = 0; i < str.length; i++) {
//         if(!arr.includes(str[i])) {
//             arr.push(str[i])
//         }
//     }
//     return arr.join('')
// }

// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'

// -----------------------------------------------------------//

// Какая строка встречается чаще всего
function highestFrequency(arr) {
    let maxString = ''
    let maxCount = 0
    let count = {}

    for(let i = 0; i < arr.length; i++) {
        let nowStr = arr[i] 
        if(!count[nowStr]) { // мы завели объект, как счетчик и записываем туда кол-во повторов
            count[nowStr] = 1
        } else {
            count[nowStr]++
        }

        if(count[nowStr] > maxCount) {

        }
    }
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi