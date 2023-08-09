// let arr = [20, 40, 60];
// let done = true;
// let count;
// function newMap(arr, func) {
//   let count = 0;
//   let newArr = [];
//   while (true) {
//     if (!arr[count]) {
//       break;
//     }
//     newArr[count] = func(arr[count]);
//     count++;
//   }
//   return newArr;
// }

// function* IterMap(arr, func) {
//   for (let a in arr) {
//     yield func(arr[a]);
//   }
// }

// for (let a of IterMap([20, 40, 60], (el) => el - true)) {
//   console.log(a);
// }

// function mySlice(arr, start, end) {
//   result = [];
//   x = 0;
//   for (let elem in arr) {
//     if (end > elem && elem >= start) {
//       result[x] = arr[elem];
//       x++;
//     }
//   }
//   return result;
// }

// let new_array = mySlice([1, 6, 8, 7, 9, 15, 25, 31, 41], 2, 6);
// console.log(new_array);

// function mySlice(arr, start, end) {
//   result = [];
//   for (let i = start; i < end; i++) {
//     result[i - start] = arr[i];
//   }
//   return result;
// }

// let new_array = mySlice([1, 6, 8, 7, 9, 15, 25, 31, 41], 1, 6);
// console.log(new_array);

// function myPush(arr, ...args) {
//   count = 0;
//   for (let i = 0; true; i++) {
//     if (!arr[i]) {
//       if (!args[count]) {
//         break;
//       } else {
//         arr[i] = args[count];
//         count++;
//       }
//     }
//   }
//   return arr;
// }

// let new_array = myPush([1, 6, 8, 7], 10, 60, 140, 230, 234, 567);
// console.log(new_array);

function MyFind(arr, elem) {
  for (let el in arr) {
    if (arr[el] === elem) {
      return el;
    }
  }
  return "Такого значения в массиве нет";
}

let find_elem = MyFind([1, 6, 8, 7, 14, 23, 44], 53);
console.log(find_elem);

function ForEach(arr, func) {
  for (let elem in arr) {
    arr[elem] = func(arr[elem]);
  }
}

let My_arr = [1, 2, 3, 4, 5, 6, 7];
ForEach(My_arr, (el) => el * 2);
console.log(My_arr);
