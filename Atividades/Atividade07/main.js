//Commands platform game

let game = [
    {
        Command: 'Punch'
    },
    {
        Command: 'Jump'
    },
    {
        Command: 'Turn Down'
    },
    {
        Command: 'Interact'
    },
    {
        Command: 'Shield up/Shield down'
    },
    {
        Command: 'Sword Atack'
    },
    {
        Command: 'Cast Current Spell'
    }
];

let hero = {
    position: 0,
    get current() {
        return game[this.position]
    },
    set current(position) {
        this.position = position
    },
    next() {
        ++this.position
    },
    previous() {
        --this.position
    }
};






console.log(hero.current);

hero.next();
console.log(hero.current);

hero.next();
console.log(hero.current);

hero.previous();
console.log(hero.current);

hero.position = 5;
console.log(hero.current);