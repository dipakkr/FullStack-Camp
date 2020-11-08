# Array Problems
EDITED BY RIYA AGRAWAL


### 1. Remove element from specific location in array. 
```
Test Data
----------
arr = [20, 12, 34, 54, 2, 7, 1]

Remove 34 from array
```

Soln :-  

function remove(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }
console.log(remove([20, 12, 34, 54, 2, 7, 1],2));



### 2. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

```
Test Data
----------
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));

Expected Output :
-2
[9, 0, -2]
```

Soln:-

var end =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };
console.log(end([7, 9, 0, -2]));
console.log(end([7, 9, 0, -2],3));




### 3. Write a to function that join all elements of the following array into a string.

Function takes two input first is array and string with which you have to join all the elements of array. 


```
Test Case #1
----------
arr = ["Red", "Green", "White", "Black"] 
string = ","

Output : "Red,Green,White,Black"



Test Case #2
----------
arr = ["Red", "Green", "White", "Black"] 
string = "+"

Output : "Red+Green+White+Black"



Test Case #3
----------
arr = ["Red", "Green", "White", "Black"] 
string = " "

Output : "Red Green White Black"

```

Soln:-

arr = ["Red", "Green", "White", "Black"];
console.log(arr.toString());
console.log(arr.join('+'));
console.log(arr.join());



### 4. Write a JS Program to write following data. 

```
You have the two arrays 

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

list = ["th","st","nd","rd"]

Write a JavaScript program to display the colors in the following way :

RESULT : 

"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."

```

soln:-

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
function Ord(n)
 {
 var list = ["th","st","nd","rd"],
 x = n%100;
 return x+(list[(x-20)%10]||list[x]||list[0]);
 }
for(n = 0; n < color.length; n++){
 var ordinal = n + 1;
 var output = (Ord(ordinal) + " choice is " + color[n] + ".");
console.log(output);
}



### 5. Write a JS  program to remove duplicate items from an array.

```
Test Case #1
-------------

Input : [1, 4, 5, 30, 2, 22, 22, 30];
Output :  [1, 4, 5, 30, 2, 22];


Test Case #2
-------------
Input : ['frontbench', 'FRontbench', 'web', 5, true, false, 'WEB'];
Output :  ['frontbench', 'web', 5, true, false];

```

soln:-

function duplicates(n) {
  var x,
      len=n.length,
      out=[],
      object={}; 
  for (x=0; x<len; x++) {
    obj[n[x]]=0;
  }
  for (x in object) {
    out.push(x);
  }
  return out;
}
var num = [1, 4, 5, 30, 2, 22, 22, 30];
res = duplicates(num);
console.log(num);
console.log(res);



### 6. Write a JavaScript function to sort the following array of objects by title value and id ( ascending order)

```
Test Data
------------

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', id: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Hunger Games', id: 3245}
   ];

```

soln:-


function sortbytitle(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }
console.log(library.sortbytitle(sort));

function sortbyid(x,y) 
 {
  if (x.id < y.id)
    return -1;
  if (x.id > y.id)
    return 1;
  return 0;
 }
console.log(library.sortbyid(sort));



### 7. Write a JavaScript function to find an array contains a specific element.

```
Test data :
-------------
arr = [2, 5, 9, 6];

yourFunctionName(arr, 5);

[True]

```
Soln:-

function contain(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
