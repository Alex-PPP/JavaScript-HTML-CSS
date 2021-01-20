
let resultado = function(n) {
    if (typeof n !== 'number') {
        return 'Nao eh um numero.'
    }
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz'
    } else if (n % 3 === 0) {
        return 'Fizz'
    } else if (n % 5 === 0) {
        return 'Buzz'
    } else {
        return n
    }
}

console.log(resultado(30));