function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome : 'Luis Felipe',
    idade: 25,
};

const pessoa2 ={
    nome: 'Francisco',
    idade: 26,
};
console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(pessoa2, [15]));