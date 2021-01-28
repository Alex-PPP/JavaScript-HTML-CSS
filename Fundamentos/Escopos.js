
function usuario() {
    let nome = 'Alexandre'
    return function() {
        let sobreNome = 'Pereira'
        console.log(nome, sobreNome);
    }
}

let user = usuario();
user();




if (true) {
    var youtube = 'Programador a bordo'
    let autor = 'Ayrton'
    console.log(youtube);
    console.log(autor);
} else {
    console.log(youtube);
    console.log(autor);
}


//Closures
function imprimeNome() {
    let nome = 'Alexandre';
    return function() {
        return nome;
    }
}

let func = imprimeNome();
console.log(func());

function minhaBiblioteca() {
    function auxiliar(valor) {
        return valor + 10;
    }

    return {
        add5() {
            return auxiliar(5);
        },
        add7() {
            return auxiliar(7);
        }
    }
};

let result = minhaBiblioteca();
console.log(result.add5());
console.log(result.add7());


function nomeCompleto(nome) {
    return function() {
        console.log(nome, 'Pereira');
    }
}

function inicializa() {
    let nome = 'Alexandre';
    setTimeout(nomeCompleto(nome), 1000);
}

inicializa();


//Const

const anoNascimento = 1991;
console.log(anoNascimento)


if (true) {
    const autor = 'Ayrton'
    console.log(autor);
}





