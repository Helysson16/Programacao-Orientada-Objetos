class Passageiro {
    constructor(andarpretendido, peso) {
        this.andarpretendido = andarpretendido;
        this.peso = peso
    }
}
class Elevador {
    constructor(pesoMaximo) {
        this.andarAtual = 0
        this.pesoMaximoSuportado = pesoMaximo
        this.listaDePassageiro = []
    }
    adicionarPassageiro(passageiro) {
        let somaDePesos = 0
        for (let index = 0; index < this.listaDePassageiro.length; index++) {
            somaDePesos += this.listaDePassageiro[i].peso
        }
        if (this.pesoMaximoSuportado < somaDePesos+passageiro.peso) {
  
            this.listaDePassageiro.push(passageiro)
            console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarpretendido} ENTROU no elevador.
                    \n Agora o elevador tem ${this.listaDePassageiro.length} passageiros`)

        }
        else {
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima de pesos: 
                    ${this.pesoMaximoSuportado}`)
        }

    }

    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino;
        let pessoas = 0
        console.log(`Agora o elevador está no ANDAR ${this.andarAtual}`);
        for (var i = 0; i < this.listaDePassageiro.length; i++) {
            if (this.listaDePassageiro[i].andarpretendido == this.andarAtual) {
                this.listaDePassageiro.splice(i, 1);
                pessoas++;
            }

        }
        console.log(`${pessoas} passageiros saíram do elevador. \n
            ${this.listaDePassageiro.length} continuam no elevador`)
        for (var i = 0; i < this.listaDePassageiro.length; i++) {
            console.log(`${this.listaDePassageiro[i]}`)

        }

    }

}


