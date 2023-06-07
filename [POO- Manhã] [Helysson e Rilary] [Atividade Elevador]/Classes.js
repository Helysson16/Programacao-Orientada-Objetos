class Passageiro {
    constructor(andarpretendido) {
        this.andarpretendido = andarpretendido;
    }
}
class Elevador {
    constructor() {
        this.andarAtual = 0
        this.quantidadeMaximaDePassageiro = 9
        this.listaDePassageiro = []
    }
    adicionarPassageiro(passageiro) {
        if (this.listaDePassageiro.length < this.quantidadeMaximaDePassageiro) {
            this.listaDePassageiro.push(passageiro)
            console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarpretendido} ENTROU no elevador.
            \n Agora o elevador tem ${this.listaDePassageiro.length} passageiros`)

        }
        else {
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this.quantidadeMaximaDePassageiro}`)
        }

    }
    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino;
        console.log(`Agora o elevador está no ANDAR ${this.andarAtual}`);
        for (var i = 0; i < this.listaDePassageiro.length; i++) {
            if (this.listaDePassageiro[i].andarpretendido == this.andarAtual) {
                this.listaDePassageiro.splice(i, 1)
            }

        }
        console.log(`${i} passageiros saíram do elevador. \n
            ${this.listaDePassageiro.length} continuam no elevador`)
        for (var i = 0; i < this.listaDePassageiro.length; i++) {
            console.log(`${this.listaDePassageiro[i]}`)

        }

    }
}

