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
    postion: 0,
    get current() {
        return game[this.postion]
    },
    set current(position) {
        this.postion = position
    },
    next() {
        ++this.postion
    },
    previous() {
        --this.postion
    }
};






console.log(hero.current);

hero.next();
console.log(hero.current);

hero.next();
console.log(hero.current);

hero.previous();
console.log(hero.current);

hero.postion = 5;
console.log(hero.current);