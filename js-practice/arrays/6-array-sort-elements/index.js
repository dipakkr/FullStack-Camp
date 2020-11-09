/*
Problem 
----------

WAP to sort the following array of objects by title value and id (ascending order)

Test Data
------------

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', id: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Hunger Games', id: 3245}
];
*/

function sortByKeys(arr, firstKey, secondKey) {
  arr.sort((a, b) => {
    if (a[firstKey] > b[firstKey]) {
      return 1
    } else if (a[firstKey] < b[firstKey]) {
      return -1
    } else if (secondKey !== undefined) {
      if (a[secondKey] > b[secondKey]) {
        return 1
      } else if (a[secondKey] < b[secondKey]) {
        return -1
      } else {
        return 0
      }
    }
  })
  return arr
}

export { sortByKeys }
