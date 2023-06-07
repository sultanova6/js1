// -----------------------------------------------------------//

// Виды сортировок

// -----------------------------------------------------------//

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

// -----------------------------------------------------------//

// Перемешиванием:
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

// -----------------------------------------------------------//

// Сортировка расческой:
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

// -----------------------------------------------------------//

// Быстрая сортировка:
function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let left = []
    let right = []

    for(let i = 0; i < arr.length; i++) {
        if(pivot === arr[i]) {
            continue
        }
        if(arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 7, 1, -4, 5, 22, -100]))

// Бинарный поиск
// function binarySearch(array, item) {
//     let start = 0
//     let end = array.length
//     let middle;
//     let found = false
//     let position = -1
//     while (found === false && start <= end) {
//         middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true
//             position = middle
//             return position;
//         }
//         if (item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// }

// console.log(binarySearch([4, 7, 1, -4, 5, 22, -100], 8))