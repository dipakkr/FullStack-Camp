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

 function Search (arr,num){

   for (let i=0;i<num;i++){
       if(num == arr[i])
       {
           return num;
       }
   }
 }