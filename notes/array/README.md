## JavaScript Array Notes 
---

Get Full Curriculum here : twitter.com/FrontbenchHQ



### **1.Create an Array**

```
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

### **2. Access an Array item using the index position**

```
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

### **3. Loop over an Array**

```
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

### **4. Add an item to the end of an Array**

```
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

### **5. Remove an item from the end of an Array**

```
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```


### **6. Remove an item from the beginning of an Array**

```
let first = fruits.shift() // remove Apple from the front
// ["Banana"]

```

### **7. Add an item to the beginning of an Array**

```
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

### **7. Find the index of an item in the Array**

```
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```

### **8. Remove an item by index position**

```
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]
```


### **9. Copy an Array**

```
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```