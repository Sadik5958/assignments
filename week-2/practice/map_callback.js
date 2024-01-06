// create a map function thet takes 2 inputs an array and a transformation
// callback/fn and transforms the array into a new one using the transformation fn.

const readline = require("readline");

function getInputList(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter comma separated values:", (inputValues) => {
    const inputList = inputValues.split(",").map(Number);
    
    // Closing the readline interface.
    rl.close();

    callback(inputList);
  });
}

fn map(array, transformfn) {
  return array.map(transformfn);
}

// Transformation function 
function doubleValue(i) {
  return i * 2;
}

getInputList((inputList) => {
  const result = map(inputList, doubleValue);
  console.log("transformed Array: ", result);
})
