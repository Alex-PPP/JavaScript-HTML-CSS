
function usuario() {
    this.nome = 'Alexandre';
    this.idade = 29,
    this.soma = function(a, b) {
        return a + b; 
    }
}

let user = new usuario();
console.log(user);

console.log(user.nome);
console.log(user.idade);
console.log(user.soma(40, 2));



function heroAtack(p1, p2, p3) {
    console.log(this, p1, p2, p3);
}

let heroThis = {
    nome: 'Levi Ackerman',
    idade: 30 + ' anos',
    altura: 1.60,
    peso: 65 + 'KG',
}

//call
heroAtack.call(heroThis, 'Foda pra caralho', 'Matador de titan', 'Mto bom anime.');


//apply
heroAtack.apply(heroThis, ['Atack on titan', 'Anime mto bom', 'foda pra carai']);

//bind
let hero = heroAtack.bind(heroThis, 'Esse metodo eh o mais diferente', 'porem facil igual', 'mto bom XD')
hero();

//Arrow Functions

let soma = (a, b) => { //sintax simples de uma arrow function
    return console.log(a + b);
}

soma(40, 2);

//Arrow Functions sem return

let soma2 = (a, b) => a + b;

console.log(soma2(40, 2));

let lista = () => ({arroz: 15 + ' KG', feijao: 20 + ' KG', Macarao: 10 + ' KG'});

console.log(lista());

let usuario = (...cidade) => ({
    nome: 'Alexandre',
    idade: 29,
    cidade
})

console.log(usuario('Salvador', 'Bahia', 'Polemica', 'Brotas'));


let imprimirThis = () => { //Arrow function nao recebe o valor de this em uma chamada.
    return console.log(this);
}

imprimirThis.apply('Alexandre');