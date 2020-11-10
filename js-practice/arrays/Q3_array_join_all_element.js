function concatenate(arr,ch) {
    
    let str="",i;
    for( i=0;i<arr.length-1;i++)
        {
            str=str+arr[i]+ch;

        
        }
    str+=arr[i];
    return str;
    
}
let arr = ["Red", "Green", "White", "Black"] ;
console.log(concatenate(arr,","));
console.log(concatenate(arr,"+"));