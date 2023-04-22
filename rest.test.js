const rest = require("./rest");

test("rest two numbers", () => {
  expect(rest(10, 5)).toBe(5);
});
