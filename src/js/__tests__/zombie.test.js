import Zombie from "../zombie"

test ("create Zombie", () => {
    const Zombie2 = new Zombie("Hello", "Zombie");
    const result = {
        name: "Hello",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(Zombie2).toEqual(result);
});