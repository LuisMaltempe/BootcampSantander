const alunos = [
    {
        nome: 'Luis',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Ana Julia',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Felipe',
        nota: 7,
        turma: '1B'
    },
];

function alunosAprovados(array, media){
    let aprovados = [];
    
    for (let i = 0; i<array.length; i++){
        const {nome, nota} = array[i];
        if(nota>=media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}console.log(alunosAprovados(alunos, 6));