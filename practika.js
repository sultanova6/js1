// -----------------------------------------------------------//
// #1 Уникальнсоть всех символов в строке
// Напишите функцию, которая определяет уникальны ли все символы в строке. 
// Регистр должен учитываться: ‘a’ и ‘A’ разные символы.
// Input: String
// Output: Boolean

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

// #2 Плоский массив
// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. 
// В результате должны получить новый одномерный массив.
// Input: Array
// Output: Array


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

// #3 Удаление всех повторяющихся значений в строке
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
// Input: String
// Output: String


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

// #4 Какая строка встречается чаще всего
// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. 
// Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// Input: String[]
// Output: String

// function highestFrequency(arr) {
//     let maxString = '' // текущая строка, которая имеет максимальное кол-во повторений
//     let maxCount = 0 // текущее максимальное кол-во повторов
//     let count = {} // мы завели объект, как счетчик и записываем туда кол-во повторов

//     for(let i = 0; i < arr.length; i++) {
//         let nowStr = arr[i] 
//         if(!count[nowStr]) { 
//             count[nowStr] = 1
//         } else {
//             count[nowStr]++
//         }
//         // console.log(count[nowStr])
//         if(count[nowStr] > maxCount) {
//             maxCount = count[nowStr]
//             maxString = nowStr
//         }
//     }
//     return maxString
// }

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
// console.log(highestFrequency(['abc', 'def'])) // -> abc
// console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi

// -----------------------------------------------------------//

// #4 Повернута ли строка?
// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). 
// Иначе верните `false`.
// Input: String, String
// Output: Boolean

  // function isStringRotated(source, test) {
  //   // if (source.length !== test.length) {
  //   //   return false
  //   // }
  //   //
  //   // for (let i = 0; i < source.length; i++) {
  //   //   const rotate = source.slice(i, source.length) + source.slice(0, i)
  //   //
  //   //   if (rotate === test) {
  //   //     return true
  //   //   }
  //   // }
  //   //
  //   // return false
  //   return source.length === test.length && (source + source).includes(test)
  // }
  
  // console.log(isStringRotated('javascript', 'scriptjava')) // -> true
  // console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
  // console.log(isStringRotated('javascript', 'java')) // -> false

// #5 Является ли массив подмножеством другого массива
// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. 
// То есть есть ли элементы второго массива в первом.
// Input: Number[] & String[], Number[] & String[]
// Output: Boolean

// function arraySubset(src, sub) {
//   let y = sub.flat(Infinity) // лежит массив [1, 2, 3]
//   let x = src.flat(Infinity) // лежит массив [2, 1, 3]

//   if(x.length > y.length) {
//     return false
//   } else {
//       for(let i = 0; i < x.lenght; i++) {
//         if(y.every(item) == x[i]) {
//           return true
//         }
//       }
// }
// }

// console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
// console.log(arraySubset([1, 2], [1, 2, 3])) // -> false

// #6 Анаграммы
// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
// Input: String[]
// Output: Boolean

// #7 Перевернуть матрицу 3х3
// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
// Дополнительно: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.
// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]  
// [7, 8, 9]    [9, 6, 3]   
// Input: Number[][]
// Output: Number[][]

// Алгоритмы

// #8 Простой поиск
// Напишите функцию, которая принимает отсортированный массив с числами и число. 
// Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1.
// Input: Number[], Number
// Output: Number

// #9 Сбалансированные скобки
// Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), []. 
// ернуть true если они сбалансированы, иначе false.
// Input: String
// Output: Boolean

// #10 Очередь с О(1) сложностью операций
// Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, 
// удаление первого элемента и вычисление размера очереди с сложностью алгоритма `О(1)`.

// JavaScript

// #11 Deep Equal
// Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра
// Inputs: Any, Any
// Output: Boolean

// #12 Последовательность Фибоначчи
// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n, 
// которую передали как аргумент.
// Input: Number
// Output: Number[]

// #13 Своя функция bind
// Реализуйте функцию bind.
// Input: Object, arguments
// Output: Function

// #14 Универсальная сумма
// Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:
// Input: Number, Number
// Output: Number

// #15 GroupBy
// Напишите функцию groupBy.
// Input: Number[] & String[], Function & String
// Output: Object


// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
//  var canMakeArithmeticProgression = function(arr) {
//    for(let i = 0; i < arr.length; i++) {
//      let x = arr[i] - arr[i+1]
//      let y = arr[i+1] - arr[i+2]
//      if(x = y) {
//        return true
//      }
//    }
// };

// console.log(canMakeArithmeticProgression([3,5,1, -5]))
// console.log(canMakeArithmeticProgression([1,2,4]))

// Виды сортировок

// Пузырьком:
// function bubleSort(arr) {
//   const len = arr.length

//   for(let i = 0; i < len - 1; i++) {
//     for(let j = 0; j < len - 1; j++) {
//       if(arr[j] > arr[j+1]) {
//         let saveItem = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = saveItem
//       }

//     }
//   }
//   return arr
// }

// console.log(bubleSort([4, 7, 1, -4, 5, 22, -100]))

// Перемешиванием 
// function shakerSort(arr) {
//   let left = 0
//   let right = arr.length - 1

//   while(left < right) {
//     for(let i = left; i < right; i++) {
//       if(arr[i] > arr[i+1]) {
//         let saveItem = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = saveItem
//       }
//     }
//     right--
//     for(let i = right; i > left; i--) {
//       if(arr[i-1] > arr[i]) {
//         let saveItem = arr[i]
//         arr[i] = arr[i-1]
//         arr[i-1] = saveItem
//       }
//     }
//     left++
//   }
//   return arr
// }

// console.log(shakerSort([4, 7, 1, -4, 5, 22, -100]))

// Сортировка расческой

// function combSort(arr) {
//   const l = arr.length;
//   const factor = 1.247;
//   let gapFactor = l / factor;
  
//   while (gapFactor > 1) {
//       const gap = Math.round(gapFactor);
//       for (let i = 0; i+1 < l; i++) {
//           if (arr[i] > arr[i+1]) {
//             let saveItem = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = saveItem
//           }
//       }
//       gapFactor = gapFactor / factor;
//   }
//   return arr
// }

// console.log(combSort([4, 7, 1, -4, 5, 22, -100]))

// Массив целых чисел, в котором каждое число встречается 2 раза,
// и лишь одно число встречается 1 раз

// function findSingleNumber(arr) {
//   // let sortArr = arr.sort((a, b) => a - b) // отсортировали массив

//   function bubleSort(arr) {
//     const len = arr.length

//     for(let i = 0; i < len - 1; i++) {
//       for(let j = 0; j < len - 1; j++) {
//         if(arr[j] > arr[j+1]) {
//           let saveItem = arr[j]
//           arr[j] = arr[j+1]
//           arr[j+1] = saveItem
//         }

//       }
//     }
//     return arr
// }

//   let sortArr = bubleSort(arr)
  
//   for(let i = 0; i < sortArr.length; i++) {
//     let pred = sortArr[i-1]
//     let now = sortArr[i]
//     let post = sortArr[i+1]
    
//     if(pred != now && now != post) {
//       return now
//     }
//   }
// } // сложность 2N

//  function findSingleNumber(arr) {
//    for (let i = 0; i < arr.length; i++) {
//      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//        return arr[i];
//      }
//    }
//  }

//function findSingleNumber(arr) {
//  let result = 0;
//  for (let i = 0; i < arr.length; i++) {
//    result ^= arr[i];
//  }
//  return result;
//}

// console.log(findSingleNumber([1, 1, 4, 5, 56, 5, 56]))
// console.log(findSingleNumber([1, 2, 3, 4, 5, 1, 2, 3, 4]))

