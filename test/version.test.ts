import { describe, it, expect } from "vitest";
import { version as versionFromTS } from "../src/version";
import { readFileSync } from "fs";
import { join } from "path";

describe("Version Consistency", () => {
  it("version in version.ts should match version in package.json", () => {
    const packageJsonPath = join(__dirname, "..", "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
    const versionFromPackageJson = packageJson.version;

    expect(versionFromTS).toBe(versionFromPackageJson);
  });
});
