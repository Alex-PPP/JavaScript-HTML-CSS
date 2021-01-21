//Game car game comands
let car = [
    {
        comand: 'Turn on'
    },
    {
        comand: 'Speed up'
    },
    {
        comand: 'Break'
    },
    {
        comand: 'Right'
    },
    {
        comand: 'Left'
    }
];

let carComand = {
    position: 0,
    get current() {
        return car[this.position]
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

console.log(carComand.current);
carComand.next();
console.log(carComand.current);
carComand.current = 4;
console.log(carComand.current);
carComand.current = 3;
console.log(carComand.current);
carComand.current = 1;
console.log(carComand.current);
carComand.next();
console.log(carComand.current);