function last(arr,n=-1) //using default parameter 
    {if(n==-1)
        return arr[arr.length-1];
     return arr.slice(arr.length-3,arr.length);
    
    }
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));