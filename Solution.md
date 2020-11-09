# List Of Javascript Questions 

**1. Reverse a array**

Ex : ['system', 'fb', 5, 'true']


//Solution

function Reverse (arr)
{
    let n = arr.length;
    for(let i=0; i<n/2; i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;

    }
    return arr;

}

//2. Reverse a string
  function reverseString(arr){
      let sp = str.split("");
      let reverse = sp.reverse.();
      var array = reverse.join("");
      return array;
  }
