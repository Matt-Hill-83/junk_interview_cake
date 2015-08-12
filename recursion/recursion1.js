function clear() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}
clear();

// '''#Problem 1: You have array of integers. Write a recursive solution to find the
// #sum of the integers.

// def sum_recur(array)
//   return 0 if array.empty?
//   sum_recur(array.drop(1)) + array.first
// end
// '''

// sum_recur = function(arr) {
//   console.log(arr.length === 0)
//   if (arr.length === 0) {
//     return 0 
//   }
//   first_el = arr.shift();
//   console.log(first_el, arr)
//   return first_el + sum_recur(arr)
// }

// arr = [1,2,3,4]
// ans = sum_recur(arr);
// console.log(ans)

// '''
// #Problem 2: You have array of integers. Write a recursive solution to determine
// #whether or not the array contains a specific value.

// def includes?(array, target)
//   return false if array.empty?
//   return true if array.first == target
//   includes?(array.drop(1), target)
// end

// find_val = function(arr, val) {
//   if (arr.length === 0) {
//     return false;
//   };
//   if (arr[0] === val) {
//     return true
//   };
//   first_el = arr.shift();
//   return find_val(arr, val);
// }

// arr = [1,2,3,4]
// val = 5
// ans = find_val(arr, val);
// console.log(ans)


// # Problem 3: You have an unsorted array of integers. Write a recursive solution
// # to count the number of occurrences of a specific value.

// def num_occur(array, target)
//   return 0 if array.empty?
//   count_update = array.first == target ? 1 : 0
//   count_update + num_occur(array.drop(1), target)
// end

// count_vals = function(arr, target) {
//   if (arr.length === 0) {
//     return 0
//   };
//   if (arr[0] === target) {
//     val = 1
//   } else {
//     val = 0 
//   }

//   console.log('arr: ', arr)
//   arr.shift()
//   return val + count_vals(arr , target);
// }

// arr = [1,2,4, 6, 7, 4, 3,4]
// val = 3

// ans = count_vals(arr, val);
// console.log(ans)


// # Problem 4: You have array of integers. Write a recursive solution to determine
// # whether or not two adjacent elements of the array add to 12.

// def add_to_twelve?(array)
//   return false if array.length <= 1
//   return true if array[0] + array[1] == 12
//   add_to_twelve?(array.drop(1))
// end

// adj_sum = function(arr) {
//   if (arr.length === 1) {
//     return false
//   };
//   if (arr[0] + arr[1] === 12) {
//     return true
//   } 

//   console.log('arr: ', arr)
//   arr.shift()
//   return adj_sum(arr);
// }

// arr = [1,2,4, 6, 7, 4, 3,4]
// ans = adj_sum(arr);
// console.log(ans)


// # Problem 5: You have array of integers. Write a recursive solution to determine
// # if the array is sorted.

// def sorted?(array)
//   return true if array.length <= 1
//   return false if array[0] > array[1]
//   sorted?(array.drop(1))
// end

// sorted = function(arr) {
//   if (arr.length === 1) {
//     return true
//   };
//   if (arr[0] > arr[1]) {
//     return false
//   } 

//   console.log('arr: ', arr)
//   arr.shift()
//   return sorted(arr);
// }

// arr = [1,2,4, 6, 7]
// ans = sorted(arr);
// console.log(ans)


// # Problem 6: Write a recursive function to reverse a string. Dont use any
// # built-in #reverse methods!

// def reverse(string)
//   return string if string.length <= 1
//   string[-1] + reverse(string.slice(1, string.length - 2)) + string[0]
// end
// '''

sorted = function(arr) {
  if (arr.length === 1) {
    return true
  };
  if (arr[0] > arr[1]) {
    return false
  } 

  console.log('arr: ', arr)
  arr.shift()
  return sorted(arr);
}

arr = [1,2,4, 6, 7]
ans = sorted(arr);
console.log(ans)

