const validateValue = require("./validateValue");

describe("Validate Value", () => {
  test("Correct Value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Less than Value", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Higher than Value", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("High Value", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Low Value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
