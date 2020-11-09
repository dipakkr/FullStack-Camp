/*
Problem 
----------

WAP to remove duplicate items from an array

Test Case #1
-------------

Input : [1, 4, 5, 30, 2, 22, 22, 30];
Output :  [1, 4, 5, 30, 2, 22];


Test Case #2
-------------
Input : ['frontbench', 'FRontbench', 'web', 5, true, false, 'WEB'];
Output :  ['frontbench', 'web', 5, true, false];
*/

function removeDuplicates(array) {
  let repArray = array.map((item) => {
    if (typeof item === 'string') return item.toLowerCase()
    else return item
  })
  let uniqueItems = array.filter((item, index) => {
    return repArray.indexOf(item) === index
  })
  return uniqueItems
}

export { removeDuplicates }
