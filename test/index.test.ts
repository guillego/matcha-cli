import { execSync } from "child_process";
import { describe, it, expect } from "vitest";

describe("CLI", () => {
  it("should greet the user", () => {
    const output = execSync("node dist/src/index.js greet Tester").toString();
    expect(output.trim()).toBe("Howdy, Tester!");
  });
});
