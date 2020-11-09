/*
Problem 
----------

WAP to join all elements of an array into a string

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
*/

function join(arr, str) {
  return arr.join(str)
}

export { join }
