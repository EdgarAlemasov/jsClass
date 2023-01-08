import Character from "../character";

test ("create character with invalid name", () => {
    expect(() => {new Character("QuickyRages", "Bowman")}).toThrow("Name of character mustn't contain less two and more ten symbols. Please, try again!");
});

test ("create charatcer with invalid type", () => {
    expect(() => {new Character("flexible", "Human")}).toThrow("This class is missing. Please, try again!")
});

test ("create character with valid name", () => {
    const Swordsman1 = new Character("easyRave", "Swordsman");
    expect(Swordsman1).toEqual({
        name: "easyRave",
        type: "Swordsman",
        health: 100,
        level: 1,
    });
});

test ("failed levelUp", () => {
    function upgradeLevel () {
        const Daemon1 = new Character("Mocky", "Daemon");
        Daemon1.health = 0;
        return Daemon1.levelUp()
    }
    expect(upgradeLevel).toThrow("Level up forbidden for dead character!")
});

test ("success levelUp", () => {
    const Undead1 = new Character("BladeSoul", "Undead");
    Undead1.attack = 10;
    Undead1.defence = 40;
    Undead1.levelUp();
    const result = {
        name: "BladeSoul",
        type: "Undead",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48, 
    };
    expect(Undead1).toEqual(result);
});

test ("damage can't be done", () => {
    function getDamage () {
        const Zombie1 = new Character("WalkDude", "Zombie");
        Zombie1.health = 0;
        return Zombie1.damage(50)
    }
    expect(getDamage).toThrow("Damage can't be done for dead character!");
});

test ("character get damage", () => {
    const Magician1 = new Character("Spirit", 'Magician');
    Magician1.attack = 10;
    Magician1.defence = 40;
    Magician1.damage(50);
    const result = {
        name: "Spirit",
        type: "Magician",
        health: 70,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(Magician1).toEqual(result);
});