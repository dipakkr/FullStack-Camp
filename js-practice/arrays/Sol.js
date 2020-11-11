//1. Remove element from specific location in array.
var arr = [20, 12, 34, 54, 2, 7, 1];
for( var i = 0; i < arr.length; i++)
{ if ( arr[i] === 34) 
{ arr.splice(i, 1); i--; }

}
console.log(arr); 

//
function reverse(str)
{
           var result = [];
           for (var i = str.length - 1; i >= 0; i--) 
{
result.push(str.charAt(i));
           }
           return result.join("");
}
console.log(reverse("hgfhsgfsgf"));

//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
var last = function last(array, n) {
           if (array == null) return void 0;
           if (n == null) return array[array.length - 1];
           return array.slice(Math.max(array.length - n, 0));
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));

//5. Write a JS program to remove duplicate items from an array.
function fd(data) {

           let result = [];
           data.forEach(function(element, index) {
if (data.indexOf(element) === index) {
result.push(element)
}
           });
b 
           return result;
}
console.log(fd([1, 4, 5, 30, 2, 22, 22, 30]))
console.log(fd(['frontbench', 'FRontbench', 'web', 5, true, false, 'WEB']))
