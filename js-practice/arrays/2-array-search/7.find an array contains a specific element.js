const findELe = (arr, n) => {
    let x = false;
    for(i in arr){
        if(arr[i] === n){
            x = true;
        }
    }
    return x;
}

let arr = [2, 5, 9, 6];
let n = 5;

console.log(findELe(arr,n));