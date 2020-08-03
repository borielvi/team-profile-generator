const Employee = require("../lib/Employee");


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructer arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set an id for a specific object", () => {
    const id = 232;
    const e = new Employee("", id);
    expect(e.id).toBe(id);
});

test("Can set an email for a specific object", () => {
    const email = "elvinb@elvin.com";
    const e = new Employee("", 1, email);
    expect(e.email).toBe(email);
});

test("Can return name from getName method", () => {
    const name = "dave";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Can return id from getId method", () => {
    const id = 535;
    const e = new Employee("", id);
    expect(e.getId()).toBe(id);
});

test("Can return email from getEmail method", () => {
    const email = "boring@boring.com";
    const e = new Employee("", 1, email);
    expect(e.getEmail()).toBe(email);
});

test("Can return role from getRole method", () => {
    const e = new Employee();
    expect(e.getRole()).toBe("Employee");
});

test("Can initiate a fully functional object", () => {
    const name = "Stacy";
    const id = 3;
    const email = "marc@pollo.com";
    const e = new Employee(name, id, email);
    expect(e.name).toBe(name);
    expect(e.id).toBe(id);
    expect(e.email).toBe(email);
    expect(e.getName()).toBe(name);
    expect(e.getId()).toBe(id);
    expect(e.getEmail()).toBe(email);
    expect(e.getRole()).toBe("Employee");
});

