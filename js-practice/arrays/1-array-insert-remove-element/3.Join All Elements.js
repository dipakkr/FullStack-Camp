const allElement = (arr, str) => {
    let string = "";
    for(i in arr){
        string =  arr + str;
    }
    string = string.slice(0, string.length-1);
    return string;

};

let arr = ["Red", "Green", "White", "Black"];
let str = ",";

let ans = allElement(arr, str);

console.log(ans);