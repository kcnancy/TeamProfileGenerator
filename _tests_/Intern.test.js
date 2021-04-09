const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "TCU";
  const e = new Intern("Frog", 199, "frog@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Frog", 199, "frog@test.com", "TCU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "TCU";
  const e = new Intern("Frog", 199, "frog@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});