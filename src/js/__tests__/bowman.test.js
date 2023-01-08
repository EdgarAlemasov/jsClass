import Bowman from "../bowman";

test ("create Bowman", () => {
    const Bowman2 = new Bowman("Forever", "Bowman");
    const result = {
        name: "Forever",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(Bowman2).toEqual(result)
});