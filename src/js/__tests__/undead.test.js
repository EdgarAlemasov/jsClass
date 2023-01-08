import Undead from "../undead";

test ("create Undead", () => {
    const Undead2 = new Undead("guard", "Undead");
    const result = {
        name: "guard",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(Undead2).toEqual(result);
})