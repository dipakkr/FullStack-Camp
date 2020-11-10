
//not giving correct output
function compare(a,b) {
    if(a.title==b.title)
    return a.id-b.id;
 return a.title>b.title;
    
}
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', id: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Hunger Games', id: 3245}
    ];
library.sort(compare);
console.log(library);
