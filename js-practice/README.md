# List Of Javascript Questions 

**1. Reverse a array**

Ex : ['system', 'fb', 5, 'true']

Soln:-

function reverse(array) {
  var result = [];
  while (array.length) {
    result.push(array.pop());
  }

  return result;
}

console.log(reverse(['system', 'fb', 5, 'true']));





**2. Reverse a string**

Soln:-

function reverse(str) {
  var result = [];
  for (var i = str.length - 1; i >= 0; i--) {
    result.push(str.charAt(i));
  }
  return result.join("");
}




**3. Sort a array by ascending order**

Ex - [10, 1, 23, 6, 90, 5000]

Soln:-

function ascendingSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [10, 1, 23, 6, 90, 5000];
ascendingSort(numbers);
console.log(numbers);




**4. Sort a array by descending order**

Soln:-

function descendingSort(array) {
    for (var i = 1; i < array.length; i++) {
        var tmp = array[i];
        for (var j = i - 1; j >= 0 && (array[j] < tmp); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = tmp;
    }
    return array;
}

var numbers = [10, 1, 23, 6, 90, 5000];
descendingSort(numbers);
console.log(numbers);
