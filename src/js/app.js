import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default class Character {
    constructor (name, type) {

        //check that name is correct
        if (name.length < 2 || name.length > 10) {
            throw new Error ("Name of character mustn't contain less two and more ten symbols. Please, try again!");
        } else {
            this.name = name;
        };

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
        };

        this.health = 100;
        this.level = 1;
    };
};
