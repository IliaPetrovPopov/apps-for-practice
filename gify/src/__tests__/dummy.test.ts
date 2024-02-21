import { add } from "../dummy"

describe("Hello, mom!", () => {
  it("should do hard math", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should fail math exam", () => {
    expect(add(2, 4)).not.toBe(5);
  });
});

// V obuvkite na intervuirashtiq
