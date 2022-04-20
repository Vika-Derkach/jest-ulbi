const square = require("./square");

describe("square", () => {
  let mockValue;
  beforeEach(() => {
    mockValue = Math.random();
  });
  beforeAll(() => {});

  test("Correct Value", () => {
    // expect(square(2)).toBe(4);

    // expect(square(2)).toBeLessThan(5);

    // expect(square(2)).toBeGreaterThan(2);

    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("square - 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterAll(() => {});
  afterEach(() => {
    jest.clearAllMocks();
  });
});
