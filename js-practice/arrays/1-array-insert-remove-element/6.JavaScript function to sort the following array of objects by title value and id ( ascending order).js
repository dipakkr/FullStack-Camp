const comp = (a,b) => {

    if (a.title < b.title)
        return -1;

    if (a.title > b.title)
        return 1;

    return 0;
} 

 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', id: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Hunger Games', id: 3245}
];

let ans = library.sort(comp);
console.log(ans);