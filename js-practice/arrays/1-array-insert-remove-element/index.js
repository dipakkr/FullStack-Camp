/*
Problem 
----------

WAP to Insert and Remove an element to array. Using in-built functions and without using any in-built function.

Arr = [1, 5, 3, 89, 34, 54]

- Add 900 to array
- remove 3 from array

Note - array.push() is a in-built function here.
*/

function insertElemAt(arr, index, elem) {
  arr.splice(index, 0, elem)
  return arr
}

function removeElemAt(arr, index) {
  arr.splice(index, 1)
  return arr
}

export { insertElemAt, removeElemAt }
