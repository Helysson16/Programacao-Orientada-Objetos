var aluno1 = new Aluno("Helysson", "17", "56789")
var aluno2 = new Aluno("Pedro", "17", "45678")
var aluno3 = new Aluno("Rilary", "17", "34567")
var aluno4 = new Aluno("Jubiscleuson", "17", "23456")
var aluno5 = new Aluno("Irineu", "17", "123456")

var alunos = []

var segundoAno = new Turma()
var terceiroAno = new Turma()


segundoAno.adicionarAluno(aluno1)
segundoAno.adicionarAluno(aluno2)
segundoAno.adicionarAluno(aluno3)

terceiroAno.adicionarAluno(aluno4)
terceiroAno.adicionarAluno(aluno5)

segundoAno.removerAluno("45678")