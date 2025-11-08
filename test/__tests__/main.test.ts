import { countBytes } from "../..";

describe("sample test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("Returns number of bytes in a file", () => {
  it("should return 0 for an empty file", () => {
    const result = countBytes("./test/fixtures/empty.txt");
    expect(result).toBe(0);
  });
  it("should return number of bytes for an non-empty file", () => {
    const result = countBytes("./test/fixtures/test.txt");
    expect(result).toBe(342190);
  });
  it("should throw error for a non-existent file", () => {
    expect(() => {
      countBytes("./test/fixtures/nonexistent.txt");
    }).toThrow();
  });
  it("should throw error for a invalid file path", () => {
    expect(() => {
      countBytes("./test/fixtures");
    }).toThrow();
  });
});
