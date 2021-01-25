//Platform game prototype;
const moves = [
    {
        pressA: 'Sword Atack'
    },
    {
        pressB: 'Jump'
    },
    {
        holdC: 'Shield up'
    },
    {
        releaseC: 'Shield down'
    },
    {
        pressD: 'Interact'
    }
];

const spells = [
    {
        pressF: 'Healing'
    },
    {
        pressG: 'FireBall'
    },
    {
        pressH: 'LightingThunder'
    },
    {
        pressJ: 'WaterBolt'
    }
];

const heroAtacks = {
    position: 0,
    get current() {
        return moves[this.position]
    },
    set current(position) {
        this.position = position;
    },
    next() {
        ++this.position;
    },
    previous() {
        --this.position;
    }
};

const heroSpells = {
    position: 0,
    get current() {
        return spells[this.position];
    },
    set current(position) {
        this.position = position;
    },
    next() {
        ++this.position;
    },
    previous() {
        --this.position;
    }
};



console.log(heroAtacks.current);

heroAtacks.next();
console.log(heroAtacks.current);

heroAtacks.previous();
console.log(heroAtacks.current);

heroAtacks.current = 2;
console.log(heroAtacks.current);

heroAtacks.current = 3;
console.log(heroAtacks.current);

console.log(heroSpells.current);

heroSpells.next();
console.log(heroSpells.current);