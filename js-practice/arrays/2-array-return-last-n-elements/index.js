/*
Problem 
----------

WAP to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

Test Data
----------
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));

Expected Output :
-2
[9, 0, -2]
*/

function last(arr, n = 1) {
  if (n === 1) return arr.pop()
  else if (n <= arr.length) return arr.slice(arr.length - n)
  return arr
}

export { last }
