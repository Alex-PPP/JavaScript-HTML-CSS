/*
let novoUsuario = {
    nome: 'Alexandre',
    idade: 29,
    pais: 'Brasil'
};

let nome = novonome;
let pais = novopais;
console.log(nome, pais, novoidade); //forma antiga de se extrair propriedades de um objeto.


const novoUsuario = {
    nome: 'Ines',
    idade: 67,
    pais: 'Brasil',
    cidade: 'Salvador',
    estado: 'Bahia',
    regiao: 'Nordeste'
};

const {nome, idade, pais} = novoUsuario; //Forma moderna de se extrair propriedades do object e armazenar em variaveis.

console.log(nome, idade, pais);


let novoUsuario2 = {
    nome: {
        primeiro: 'Alexandre',
        ultimo: 'Pereira'
    },
    idade: 29,
    afiliacao: {
        pai: 'Argileu',
        mae: 'Ines',
        etc: {
            madrinha: 'Railda',
            irmas: {
                maisVelha: 'Adriana',
                maisNova: 'Adriele'   
            }
        }
    }
};

let { afiliacao: { etc: { irmas: { maisVelha: irma1, maisNova: irma2 } } }} = novoUsuario2
console.log(irma1);
console.log(irma2);


let usuario = function({ nome, idade = 90, sexo = 'F' }) {
    console.log(`nome: ${nome}`)
    console.log(`sexo: ${sexo}`)
    console.log(`idade: ${idade} anos`)
}


let usuarioFunction = {
    nome: 'Jesus',
    idade: 33,
    sexo: 'M'
};

console.log(Object.keys(usuarioFunction));
console.log(Object.values(usuarioFunction));

//Formas de imprimir valores e propriedades de um objeto.

let usuarioFunction = {
    nome: 'Alexandre',
    idade: 29,
    sexo: 'M',
    pais: 'Brasil'
};

let props = Object.keys(usuarioFunction);
console.log(props);
let val = Object.values(usuarioFunction);

for (let i = 0; i < props.length; i++) {
    console.log(props[i]);
    console.log(usuarioFunction[props[i]]);
}

for (let prop of props) {
    console.log(prop + ' = ' + usuarioFunction[prop])
}

for (let prop2 in usuarioFunction) {
    console.log(prop2 + ' = ' + usuarioFunction[prop2]);
}
*/

let user = {
    id: 42,
    nome: 'Alexandre',
    idade: 29,
    sexo: 'M',
    profissao: 'Programador',
};

for (let i in user) {
    if (user.hasOwnProperty(i)) {
        console.log(i + ' = ' + user[i]);
    }
};


 
