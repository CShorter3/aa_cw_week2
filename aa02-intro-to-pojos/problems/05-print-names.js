/*
Write a function called printNames that takes in an array of objects. It should 
loop through all of the objects and print the "name" key from each object.

// Approach: Iterate over through loop. Print value of name property for each object.

*/

function printNames(objArr) { //arr of objects
  for (const obj of objArr) {
    console.log(obj.name);
  }
}

//Example:
printNames([
  { name: "Joey", likes: ["sandwiches"] },
  { hobby: "tells jokes", name: "Chandler" },
]); // prints 'Joey' then 'Chandler'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
