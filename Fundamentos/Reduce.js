const numeros = [2, 3, 6, 5, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

//console.log(soma);

let somaReduce = numeros.reduce((valorAcumulador, valorArray) => { //valorArray eh representado por "numeros" acima, eh o valor a sere iterado.
    return valorAcumulador + valorArray; // nao neceessita neste caso de += entree os valores, eh feito automaticamente esse processo.
}, 0) //o paramentro valorAcumulador tem esse valor inicialmente tal como "soma" citada acima.

//console.log(somaReduce);


const pessoas = [
    {
        nome: 'Alexandre',
        idade: 29
    },
    {
        nome: 'Ines',
        idade: 67
    },
    {
        nome: 'Adriana',
        idade: 38
    },
    {
        nome: 'Railda',
        idade: 35
    },
    {
        nome: 'Samuel',
        idade: 14
    },
    {
        nome: 'Miguel',
        idade: 12
    },
    {
        nome: 'Adsson',
        idade: 15
    },
    {
        nome: 'Geovana',
        idade: 10
    },
    {
        nome: 'Rayane',
        idade: 17
    }
];


const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
    const propMaiorOuMenor = valorArray.idade >= 18? 'maiores' : 'menores';

    valorAcumulador[propMaiorOuMenor].push(valorArray);

    return valorAcumulador;

}, { maiores: [], menores: []});    

console.log(pessoasAgrupadas);



const numbers = [1, 2, 3];

const sum = numbers.reduce((sumValue, numbersValue) => {
    return sumValue + numbersValue;
    
}, 0);

//console.log(sum);




const rockets = [
    {
        country: 'Russia',
        launches: 32
    },
    {
        country: 'US',
        launches: 23
    },
    {
        country: 'Chine',
        launches: 16
    },
    {
        country: 'EU',
        launches: 7
    },
    {
        country: 'India',
        launches: 4
    },
    {
        country: 'Japan',
        launches: 3
    }
];



let totalLaunches = rockets.reduce((counter, launchesValue) => {
    return counter + launchesValue.launches;
}, 0);

console.log(totalLaunches);







