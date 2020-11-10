function search(arr,n) {
    if(arr.length==0)
        return false;
    if(arr[0]==n)
        return true;
    return search (arr.slice(1),n);
    
}
arr = [2, 5, 9, 6];
console.log(search(arr,6));
console.log(search(arr,10));