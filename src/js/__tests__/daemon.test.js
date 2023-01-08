import Daemon from "../daemon";

test ("create Daemon", () => {
    const Daemon2 = new Daemon("Wegges", "Daemon");
    Daemon2.levelUp();
    Daemon2.damage(50);
    const result = {
        name: "Wegges",
        type: "Daemon",
        health: 74,
        level: 2,
        attack: 12,
        defence: 48,
    };
    expect(Daemon2).toEqual(result);
});