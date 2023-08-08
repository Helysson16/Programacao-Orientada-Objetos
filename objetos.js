let aluno1 = new Aluno(
    'Jorginho',
    '19',
    '101010'
    )
let aluno2 = new Aluno (
    'Haaland',
    '17', 
    '111111'
    )
let aluno3 = new Aluno (
    'Messi', 
    '36', 
    '303030'
    )
    let alunos = []
     alunos.push(aluno1, aluno2, aluno3)
    for(let i = 0; i < alunos.length; i++){
        console.log(`
        ---------------------
        Nome: ${alunos[i].nome}
        Idade: ${alunos[i].idade}
        Matricula: ${alunos[i].matricula}
        ----------------------`)
    }
    //for(let i = 0; i<alunos.length; i++){
    //    console.log(alunos[i])}