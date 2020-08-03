const Intern = require("../lib/Intern");


test("Can create a new Intern object", () => {
    const i = new Intern();
    expect(typeof(i)).toBe("object");
});

test("Can set a school for a new Intern object", () => {
    const school = "arizona";
    const i = new Intern("", 56, "", school);
    expect(i.school).toBe(school);
});

test("Can return a school using the getSchool method", () => {
    const school = "ASU";
    const i = new Intern("", 43, "", school);
    expect(i.getSchool()).toBe(school);
});

test("Can return the role using the getRole method", () => {
    const i = new Intern();
    expect(i.getRole()).toBe("Intern");
});

test("Can initiate a fully functional object", () => {
    const name = "Steve";
    const id = 5;
    const email = "michal@polos.com";
    const school = "havacomcol";
    const i = new Intern(name, id, email, school);
    expect(i.name).toBe(name);
    expect(i.id).toBe(id);
    expect(i.email).toBe(email);
    expect(i.school).toBe(school);
    expect(i.getName()).toBe(name);
    expect(i.getId()).toBe(id);
    expect(i.getEmail()).toBe(email);
    expect(i.getRole()).toBe("Intern");
    expect(i.getSchool()).toBe(school);
});