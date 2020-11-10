color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

list = ["th","st","nd","rd"];
let i=0;
while(i<list.length && i <color.length)
    {let str="\""+i+list[i]+" choice is "+color[i]+" .\"";
     console.log(str);
i++;
    }