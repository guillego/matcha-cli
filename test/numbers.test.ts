import { describe, it, expect } from "vitest";
import { getRandomNumber } from "../src/numbers";

describe("getRandomNumber", () => {
  it("should generate a number between 0 and 10 by default", () => {
    const num = getRandomNumber();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(10);
  });

  it("should generate a number between given min and max", () => {
    const min = 5;
    const max = 15;
    const num = getRandomNumber(min, max);
    expect(num).toBeGreaterThanOrEqual(min);
    expect(num).toBeLessThanOrEqual(max);
  });

  it("should generate a number equal to min when min and max are the same", () => {
    const minMax = 7;
    const num = getRandomNumber(minMax, minMax);
    expect(num).toBe(minMax);
  });
});
