const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("GitHUb account is set via constructor", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Rex Huddler", 893, "test@test.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Rex Huddler", 893, "test@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

test("GitHub username returned from getGithub()", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Rex Huddler", 893, "test@test.com", testValue);
  expect(employee.getGithub()).toBe(testValue);
});

