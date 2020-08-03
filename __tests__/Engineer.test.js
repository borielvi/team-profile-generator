const Engineer = require("../lib/Engineer");


test("Can initiate a new Engineer object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Can set a github username for a new Engineer object", () => {
    const github = "MartinW";
    const e = new Engineer("", 1, "", github);
    expect(e.github).toBe(github);
});

test("Can return role from getRole method", () => {
    const e = new Engineer();
    expect(e.getRole()).toBe("Engineer");
});

test("Can return a github username from the getGithub method", () => {
    const github = "MariaN";
    const e = new Engineer("", 10, "", github);
    expect(e.getGithub()).toBe(github);
});

test("Can initiate a fully functional object", () => {
    const name = "Stasia";
    const id = 6;
    const email = "marcus@pollos.com";
    const github = "StamiaP";
    const e = new Engineer(name, id, email, github);
    expect(e.name).toBe(name);
    expect(e.id).toBe(id);
    expect(e.email).toBe(email);
    expect(e.github).toBe(github);
    expect(e.getName()).toBe(name);
    expect(e.getId()).toBe(id);
    expect(e.getEmail()).toBe(email);
    expect(e.getGithub()).toBe(github);
    expect(e.getRole()).toBe("Engineer");
});