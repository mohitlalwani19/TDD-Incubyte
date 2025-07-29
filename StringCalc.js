class StringCalc {
  add(numberString) {
    if (!numberString) return 0;
    let delimiters = /,|\n/;
    let actualString = numberString;
    if (numberString.startsWith("//")) {
      const delimiterIndex = numberString.indexOf("\n");
      if (delimiterIndex !== -1) {
        const customDelimiter = numberString.substring(2, delimiterIndex);
        delimiters = [customDelimiter];
      }
      actualString = numberString.substring(delimiterIndex + 1);
    }
    const numArray = actualString.split(delimiters).map(Number);
    if (numArray.some((num) => num < 0)) {
      throw new Error(
        "negative numbers not allowed " +
          numArray.filter((num) => num < 0).join(",")
      );
    }
    return numArray.reduce((sum, n) => sum + n, 0);
  }
}
module.exports = StringCalc;
