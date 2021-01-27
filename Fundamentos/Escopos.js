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