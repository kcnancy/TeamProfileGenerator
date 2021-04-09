const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

test("can set office number", () => {
    const testValue = 1001;
    const employee = new Manager("Wade Davis", 71, "wader@email.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", ()=> {
    const testValue = "Manager";
    const employee = new Manager("Wade Davis", 71, "wader@email.com", 1001);
    expect(employee.getRole()).toBe(testValue);
});

test("getOffice() will return office number", () => {
    const testValue = 1001;
    const employee = new Manager("Wade Davis", 71, "wader@email.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});


