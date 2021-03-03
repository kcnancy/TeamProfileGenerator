const Employee = require("../lib/Employee");

test('properly adds employee data', () => {
    const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("properly accepts name", () => {
    const name = "Nancy";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("properly sets id", () => {
    const testValue = 500;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("properly sets email",  () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
    });

test("can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    });

test("can get id via getID()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
});

test("getRole() returns \Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Nancy", 1, "test@test.com");
});

