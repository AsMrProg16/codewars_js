// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2){
  if(operation === '+'){
    return value1 + value2
  } if(operation === '-'){
    return value1 - value2
  } if(operation === '*'){
    return value1 * value2
  } if(operation === '/'){
    return value1 / value2
  }
}

//qiymatlarni aniqlab + - * / amallarni qilish