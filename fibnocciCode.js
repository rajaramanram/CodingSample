const prompt = require("prompt-sync")({ sigint: true });

let fibnocciFunction = () => {
  let tempMemomizatinObject = { 0: 0, 1: 1 };
  let getUserValue = parseInt(prompt("Enter number to get Finocci value = "));
  //get user input as Integer
  while (!Number.isInteger(getUserValue)) {
    getUserValue = parseInt(
      prompt("Please Enter only number to get Finocci value = ")
    );
  }

  function fibMem(UserInput, MemomizatinObject) {
    // check input stored in cache object
    if (UserInput in MemomizatinObject) {
      return MemomizatinObject;
    } else {
        //Recursive Function
      fibMem(UserInput - 1, MemomizatinObject);
      MemomizatinObject[UserInput] =
        MemomizatinObject[UserInput - 1] + MemomizatinObject[UserInput - 2];
      return `Result==>${MemomizatinObject[UserInput]}`;
    }
  }

  return fibMem(getUserValue, tempMemomizatinObject);
};

console.log(fibnocciFunction());
