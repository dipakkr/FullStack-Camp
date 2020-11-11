const element = (arr, n) => arr.slice(arr.length-n, arr.length);

let arr = [7, 9, 0, -2];
let n = 3;

let ans = element(arr, n);
console.log(ans);
