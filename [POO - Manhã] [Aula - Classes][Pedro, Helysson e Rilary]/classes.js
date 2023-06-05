class Celular {
    constructor(e1, e2, e3, e4, e5, e6, e7) {
        this.marca = e1;
        this.modelo = e2;
        this.ram = e3;
        this.armazenamento = e4;
        this.processador = e5;
        this.qtdDeCameras = e6
        this.foto = e7
    }
}
class Tv {
    constructor(e1, e2, e3, e4) {
        this.marca = e1;
        this.modelo = e2;
        this.tamanho = e3;
        this.foto = e4

    }
}
class Favoritos {
    constructor() {
        this.listaDeProdutos = []
    }
    adicionarProdutos(produto) {
        this.listaDeProdutos.push(produto)
    }

    exibirNoHTML() {
        document.getElementById('produtos').innerHTML = ""
        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            document.getElementById('produtos').innerHTML += (`
         <div class = 'card'>
               <img src='img/${this.listaDeProdutos[i].foto}' />
             <div class='info'>
               <h3 class ='modelo'>${this.listaDeProdutos[i].modelo}</h3>
               <p class ='marca'>${this.listaDeProdutos[i].marca}</p>
                <span class ='outros'>${this.listaDeProdutos[i].processador}</span>
               <span class ='separador'> | </span>
               <span class ='outros'>${this.listaDeProdutos[i].armazenamento}</span>
               <span class ='separdor'> | </span>
               <span class ='outros'>${this.listaDeProdutos[i].ram}</span>
               <span class ='separdor'>  | </span>
               <span class ='outros'>${this.listaDeProdutos[i].qtdDeCameras}</span>
             
             </div>
         </div>
            
          `)
        }
    }
}