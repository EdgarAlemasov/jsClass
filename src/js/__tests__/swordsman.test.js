import Swordsman from "../swordsman";

test ("create Swordsman", () => {
    const Swordsman2 = new Swordsman("ppZeus", "Swordsman");
    const result = {
        name: "ppZeus",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(Swordsman2).toEqual(result);
});