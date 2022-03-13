/**
 * Let's make a calculator 🧮
 */
// {
// function calculate(operator: string, num1: number, num2: number): number {
//   let result: number = 0;

//   switch (operator) {
//     case "add":
//       result = num1 + num2;
//       break;
//     case "substract":
//       result = num1 - num2;
//       break;
//     case "multiply":
//       result = num1 * num2;
//       break;
//     case "divide":
//       result = num1 / num2;
//       break;
//     case "remainder":
//       result = num1 % num2;
//       break;
//     default:
//       console.log(`${operator} is not defined`);
//     // thorw Error("unknown command")
//   }

//   return result;
// }

type Operator = "add" | "substract" | "multiply" | "divide" | "remainder"; // 정해져있기 떄문에. union types

function calculate(Operator: Operator, num1: number, num2: number): number {
  let result: number = 0;

  switch (Operator) {
    case "add":
      result = num1 + num2;
      break;
    case "substract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "remainder":
      result = num1 % num2;
      break;
    default:
      console.log(`${Operator} is not defined`);
    // thorw Error("unknown command")
  }

  return result;
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
