const write = (color, list) => {
    let arr = [];
    for(i in color){
        let index = ++i;
        if(index%10 == 1){
            arr.push(`${i}${list[1]} choice is ${color[i]}`);
        } else if(index%10 == 2){
            arr.push(`${i}${list[2]} choice is ${color[i]}`);
        } else if(index%10 == 3){
            arr.push(`${i}${list[3]} choice is ${color[i]}`);
        } else {
            arr.push(`${i}${list[0]} choice is ${color[i]}`);
        }
    }

    return arr;
}

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
list = ["th","st","nd","rd"]

let arr = write(color, list);
console.log(arr);