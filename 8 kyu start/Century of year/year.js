function century(year) {
  let result = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }
  }
  return result;
}
// century(1);     // 1
// century(88);    // 1
// century(1988);  // 20
// century(2000);  // 20
// century(2001);  // 21
