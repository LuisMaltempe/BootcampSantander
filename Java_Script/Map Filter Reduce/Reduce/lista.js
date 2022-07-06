const lista = [
    {
        name: 'sabao',
        preco: 12
    },
    {
        name: 'cafe',
        preco: 10
    },
    {
        name: 'leite',
        preco: 6
    },
];

const saldoDisponivel = 40;


function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista) );