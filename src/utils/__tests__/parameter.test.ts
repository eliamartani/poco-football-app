import { setIndex } from "../";

describe("parameter.js", () => {
  it("should return parsed value", () => {
    const result1 = setIndex(0);
    const result2 = setIndex(10);

    expect(result1).toBe(-1);
    expect(result2).toBe(9);
  });

  it("should return 0", () => {
    const result1 = setIndex(1);
    const result2 = setIndex();
    const result3 = setIndex("a");

    expect(result1).toBe(0);
    expect(result2).toBe(0);
    expect(result3).toBe(0);
  });
});
