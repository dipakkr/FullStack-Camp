function compare_asce(a,b) {
    return a-b;
    
}
function  compare_desc(a,b) {
    return -a+b;
    
}
let arr=[10, 1, 23, 6, 90, 5000];

    arr=arr.sort(compare_asce);
console.log(arr);
arr=arr.sort(compare_desc);
console.log(arr);
//console.log(arr.sort(compare_desc));