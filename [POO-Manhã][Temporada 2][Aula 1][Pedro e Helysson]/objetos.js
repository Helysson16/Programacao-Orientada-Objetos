var aluno1 = new Aluno('Pedrinho', '17', '123')
var aluno2 = new Aluno('Helysson', '18', '321')
var aluno3 = new Aluno('Wytalo gay', '16', '213')

var alunos = []

alunos.push(aluno1, aluno2, aluno3)

for (let i = 0; i < alunos.length; i++) {
    document.write31(`
        ------------------
        Nome: ${alunos[i].nome}
        idade: ${alunos[i].idade}
        matricula: ${alunos[i].matricula}
------------------------------------------

        `)
}

