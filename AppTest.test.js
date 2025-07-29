const StringCalc = require("./StringCalc");
describe("StringCalc", () => {
  let res;
  beforeEach(() => {
    res = new StringCalc();
  });
  test("check for empty string", () => {
    expect(res.add("")).toBe(0);
  });
  test("check for single number", () => {
    expect(res.add("1")).toBe(1);
  });
  test("check for 2 comma separated numbers", () => {
    expect(res.add("1,5")).toBe(6);
  });
  test("check for many comma separated numbers", () => {
    expect(res.add("1,2,3")).toBe(6);
  });
  test("check for newlines between numbers", () => {
    expect(res.add("1\n2,3")).toBe(6);
  });
  test("check for custom delimiters", () => {
    expect(res.add("//;\n1;2")).toBe(3);
  });
});
