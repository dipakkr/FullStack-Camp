let arr=[20, 12, 34, 54, 2, 7, 1];
let remove=34;
let i;
for( i=0;i<arr.length;i++)
    {
        if(arr[i]==remove)
            break;
    }
i++;
for(;i<arr.length;i++)
    {
        arr[i-1]=arr[i];
    }
arr.length=arr.length-1;//now decreasing the length of array by 1
console.log(arr);

