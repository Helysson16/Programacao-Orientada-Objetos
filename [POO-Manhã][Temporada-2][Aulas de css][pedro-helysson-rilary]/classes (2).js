// Crie a classe Aluno.
// Ela deverá ter 3 atributos:
// nome;
// idade;
// matricula.

class Aluno {
    constructor(turma, primeiroNome, ultimoNome, dataDeNascimento, matricula, foto) {
        this.turma = turma;

        this.primeiroNome = primeiroNome
        this.ultimoNome = ultimoNome
        this.dataDeNascimento = dataDeNascimento


        this.matricula = matricula;
        this.foto = foto;

    }

    getIdade() {
        let hoje = new Date()
        return (hoje.getFullYear() - this.dataDeNascimento.getFullYear())
    }


    getNome() {
        return `${this.ultimoNome}, ${this.primeiroNome} `;
    }
}

