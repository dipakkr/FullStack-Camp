/*
Problem 
----------

WAP to display the colors in the following way, you are provided with 2 arrays

color = ["White", "Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

list = ["th","st","nd","rd"]

RESULT : 

"Oth choice is White."
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
*/

function combineArrays(colors, list) {
  let resultArray = []
  for (let index in [...Array(list.length).keys()]) {
    if (colors[index] !== undefined)
      resultArray.push(`${index}${list[index]} choice is ${colors[index]}`)
  }
  return resultArray
}

export { combineArrays }
