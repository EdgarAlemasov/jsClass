export default class Character {
    constructor (name, type) {

        //check that name is correct
        if (name.length < 2 || name.length > 10 || name === undefined) {
            throw new Error ("Name of character mustn't contain less two and more ten symbols. Please, try again!");
        } else {
            this.name = name;
        }

        //available characters
        const types = [
            "Bowman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];

        //check that character is correct
        if (types.indexOf(type) === -1) {
            throw new Error ("This class is missing. Please, try again!");
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
    }

    levelUp () {
        if (this.health <= 0) {
            throw new Error ("Level up forbidden for dead character!");
        } else {
            this.level += 1;
            this.health = 100;
            this.attack *= 1.2;
            this.defence *= 1.2;
        }
    }

    damage (points) {
        if (this.health === 0) {
            throw new Error ("Damage can't be done for dead character!");
        } else {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}