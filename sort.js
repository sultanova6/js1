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
        return arr;
    }
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = []
    const right = []

    for(let i = 0; i < arr.length; i++) {
        if(i === pivotIndex) {
            continue;
        }
        if(pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort([4, 7, 1, -4, 5, 22, -100]))