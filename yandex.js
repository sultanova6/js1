// Какая строка встречается чаще всего
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

// Найти первое(левое) вхождение положительноо числа Х в нее или вывести -1,
// если число Х не встречалось

// function findLeft(arr, x) {
//     for(let i = 0; i < arr.length; i++) {
//         let now = arr[i]
//         if(now == x) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(findLeft([1, 6, 5, 3 ,7, 4, 9, 0, 5], 5))
// console.log(findLeft([1, 6, 3 ,7, 4, 5, 9, 0], 13))

// -----------------------------------------------------------//

// Найти последнее(правое) вхождение положительноо числа Х в нее или вывести -1,
// если число Х не встречалось

// function findRight(arr, x) {
//     for(let i = arr.length - 1; i > 0; i--) {
//         let now = arr[i]
//         if(now == x) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(findRight([1, 6, 5, 3 ,7, 4, 9, 0, 5], 5))
// console.log(findRight([1, 6, 3 ,7, 4, 5, 9, 0], 13))

// -----------------------------------------------------------//

// Найти максимальное число в последовательности

// function maxNum(arr) {
//     let maxCount = arr[0]

//     for(let i = 1; i < arr.length; i++) {
//             let now = arr[i]
//             if(now > maxCount) {
//                 maxCount = now
//             }
//         }
//     return maxCount
// }

// console.log(maxNum([1, 6, 5, 3, 7, 4, 9, 0, 5]))
// console.log(maxNum([1, 6, 3, 7, 4, 5, 9, 0, 13]))

// -----------------------------------------------------------//

// Найти самую длинную строку в массиве

// function maxStr(arr) {
//     let maxCount = arr[0].length
//     let maxStr = ''
//     for(let i = 1; i < arr.length; i++) {
//         let now = arr[i].length
//         if(now > maxCount) {
//             maxCount = now // получаем размер
//             maxStr = arr[i]
//         }
//     }
//     return maxStr
// }

// console.log(maxStr(['aaa', 'bbbb', 'cc', 'c', 'ddddd', 'ee'])) // -> ddddd
// console.log(maxStr(['abcc', 'defef', 'abcabc', 'defeeee', 'abcas'])) // -> defeeee

// -----------------------------------------------------------//

// Найти максимальное число в последовательности и второе по величине число

// function maxPlusNext(arr) {
//     let maxNum = arr[0] // значение числа
//     let postMax

//     for(let i = 1; i < arr.length; i++) {
//         let now = arr[i]
//         if(now > maxNum) {
//             postMax = maxNum
//             maxNum = now
//         }
//     }
//     return [maxNum, postMax].join(' ')
// }

// console.log(maxPlusNext([1, 6, 5, 3, 7, 4, 9, 0, 5]))
// console.log(maxPlusNext([1, 6, 3, 7, 4, 5, 9, 0, 13]))

// -----------------------------------------------------------//
