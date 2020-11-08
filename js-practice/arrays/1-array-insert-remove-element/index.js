/**
 * 
Problem 
----------

WAP to Insert and Remove an element to array. Using in-built functions and without using any in-built function.

Arr = [1, 5, 3, 89, 34, 54]

- Add 900 to array
- remove 3 from array

Note - array.push() is a in-built function here.
 * 
 */

 // Write your solution
 Soln:-
  //Using in-built function :
  Arr.push(900);
for( var i = 0; i < Arr.length; i++){
 if ( Arr[i] === 3) { 
  Arr.splice(i, 1); 
 }
}

//without using in-built function :
Arr[Arr.length] = '900'; 
