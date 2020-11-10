function reverse(arr) {
    let start=0,end=arr.length-1;
    while(start<end)
        {let temp=arr[start];
         arr[start]=arr[end];
         arr[end]=temp;
         start++;
         end--;

        }
        return arr;
    
}
reverse(['system', 'fb', 5, 'true'])