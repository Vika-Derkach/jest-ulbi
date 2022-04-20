const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
  test("Correct Value", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Different Value", () => {
    expect(mapArrToString([1, 2, null, undefined, "gdg", 3])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Empty Array", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Empty Array", () => {
    expect(mapArrToString([1, 2])).not.toEqual([1, 2]);
  });
});
