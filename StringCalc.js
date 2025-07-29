class StringCalc {
  add(numberString) {
    if (!numberString) return 0;
    let delimiters = /,|\n/;
    let actualString = numberString;
    const numArray = actualString.split(delimiters).map(Number);
    return numArray.reduce((sum, n) => sum + n, 0);
  }
}
module.exports = StringCalc;
