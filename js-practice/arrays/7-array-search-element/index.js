/*
Problem 
----------

WAP to find if an array contains a specific element

Test data :
-------------

arr = [2, 5, 9, 6];

yourFunctionName(arr, 5);

Result:
-------------

[True]
*/

function doesElemExist(arr, elem) {
  return arr.indexOf(elem) !== -1
}
export { doesElemExist }
