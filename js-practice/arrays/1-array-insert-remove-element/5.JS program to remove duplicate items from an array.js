const removeDuplicates = (input) => {
    let ans = [], frequency = {};

    for(i in input){
        if(typeof(input[i]) === "string") input[i] = input[i].toLowerCase();
        frequency[input[i]] = 0;
    }

    for(i in input) frequency[input[i]]++;

    for(i in frequency) ans.push(i);

    return ans;

}

let Input1 = ['frontbench', 'FRontbench', 'web', 5, true, false, 'WEB'];
let Output1 =  ['frontbench', 'web', 5, true, false];
let Input = [1, 4, 5, 30, 2, 22, 22, 30];
let Output =  [1, 4, 5, 30, 2, 22];

let ans = removeDuplicates(Input1);
console.log(ans);