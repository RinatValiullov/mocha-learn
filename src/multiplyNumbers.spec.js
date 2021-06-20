const assert = require("assert");
const multiply = require("./multiplyNumbers");

describe("multiplyNumbers()", () => {
  const numbers = [
    { args: [4, 5, 6], expected: 120 },
    { args: [1, 2, 3], expected: 6 },
    { args: [5, 2], expected: 10 }
  ];

  numbers.forEach(({ args, expected }) => {
    it(`correctly multiply ${args.length} args}`, () => {
      const result = multiply(args);
      assert.strictEqual(result, expected);
    });
  });
});
