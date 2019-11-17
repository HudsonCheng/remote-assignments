//week 2-2

function calculate(args){
  let result;
  if(args.op === "+") {
      result = args.n1 + args.n2;
  } else if (args.op === "-") {
      result = args.n1 - args.n2;
  } else {
      result = "Not supported";
  }
  return result;
}

function askQuestion(order) {
  do {
  var input = '';
  if(order === 1) {
    input = parseFloat(prompt("It's a simple calculator, please type in a number."));
  } else if(order === 2) {
    input = parseFloat(prompt("Please type in the other number."));
  } else {
    input = prompt('Please enter the arithmetic symbol between these two numbers.');
  }
  if(order < 3 && isNaN(input)) {
    alert('You have to type in numbers.');
  }
  } while (order < 3 && isNaN(input))
  
  return input;
}

var args = {
  n1: askQuestion(1),
  n2: askQuestion(2),
  op: askQuestion(3)
};

var calculateResult = calculate(args);
console.log(args.n1 + args.op + args.n2 + ' = ' + calculateResult);
