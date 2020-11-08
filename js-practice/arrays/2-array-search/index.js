/**
 *

 3.   Given an element, How to search the element in an array ?

Test Data
----------
num = 20;
arr = [10, 20, 50, 1, 90];


* 
 * 
 */

 // Write your solutions
Soln:-
 
 function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [10, 20, 50, 1, 90];
console.log(binary_Search(items, 20));   
