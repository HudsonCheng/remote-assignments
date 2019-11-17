// week 2-1

function max(...numbers) {
  var result = 0;
  var input = numbers;
  for(var i = 0; i < input.length; i++) {
    if(result < input[i]) {
      result = input[i];
    }
  }
  return result;
}
console.log('max(1,2,4,5) = '+ max(1,2,4,5));
console.log('max(5,2,7,1,6) = '+ max(5,2,7,1,6));
