const Manager = require("../lib/Manager");


test("Can initiate a new manager object", () => {
    const m = new Manager();
    expect(typeof(m)).toBe("object");
});

test("Can set an office number value in a new manager object", () => {
    const officeNumber = 101;
    const m = new Manager("", 654, "", officeNumber);
    expect(m.officeNumber).toBe(officeNumber);
});

test("Can get the office number using the getOfficeNumber method", () => {
    const officeNumber = 909;
    const m = new Manager("", 444, "", officeNumber);
    expect(m.getOfficeNumber()).toBe(officeNumber);
});

test("Can get the role using the getRole method", () => {
    const m = new Manager();
    expect(m.getRole()).toBe("Manager");
});

test("Can initiate a fully functional object", () => {
    const name = "rudolf";
    const id = 879;
    const email = "slick@clik.com";
    const officeNumber = 5;
    const m = new Manager(name, id, email, officeNumber);
    expect(m.name).toBe(name);
    expect(m.id).toBe(id);
    expect(m.email).toBe(email);
    expect(m.officeNumber).toBe(officeNumber);
    expect(m.getName()).toBe(name);
    expect(m.getId()).toBe(id);
    expect(m.getEmail()).toBe(email);
    expect(m.getOfficeNumber()).toBe(officeNumber);
    expect(m.getRole()).toBe("Manager");
});