import Magician from "../magician";

test ("create Magician", () => {
    const Magician2 = new Magician("Time2Die", "Magician");
    const result = {
        name: "Time2Die",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(Magician2).toEqual(result)
});