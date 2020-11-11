const remove = (arr, target) => {
    for(let i=0; i < arr.length; i++){
        if(arr[i] == target){
            let k = arr.splice(i,1);
        }
    }
}

let arr = [20, 12, 34, 54, 2, 7, 1]
let target = 34;

remove(arr, target);
console.log(arr);