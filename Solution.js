

//1. WAP to Insert and Remove an element to array. Using in-built functions and without using any in-built function.

function add(arr, n);
{
    arr.push(n);
    arr[arr.length] = n;
    return arr;
}

//2. Remove element from specific location in array.

function remove(arr, num) {
    let removeEle = arr.indexof(num);
    delete num;
}

//3. Write a JavaScript function to find an array contains a specific element.
function Search(arr, num) {

    for (let i = 0; i < num; i++) {
        if (num == arr[i]) {
            return num;
        }
    }
    return false;
}
//4. Write a JavaScript function to get the last element of an array. 
//Passing a parameter 'n' will return the last 'n' elements of the array
function getlastelement(arr, n) {
    if (n == 1)
        return arr[arr.length - 1];
    var newarr = arr.slice(arr.length - n, n);
    return newarr;
}

//5. Reverse a array

function Reverse(arr) {
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;

    }
    return arr;

}

//5. Reverse a string
function reverseString(arr) {
    let sp = str.split("");
    let reverse = sp.reverse.();
    var array = reverse.join("");
    return array;
}
