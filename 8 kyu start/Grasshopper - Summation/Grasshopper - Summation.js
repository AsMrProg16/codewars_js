// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {
  let number = 0;
  for(let i = num; i>=1; i--){
    number +=i
  }
  return number;
}


//1 dan songacha bo'lgan har bir sonning yig'indisini topadigan function
//Raqam har doim 0 dan katta musbat butun son bo'ladi