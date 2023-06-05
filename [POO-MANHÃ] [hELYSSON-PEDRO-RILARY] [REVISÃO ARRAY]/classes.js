class Aluno {
    constructor(e1, e2, e3) {
        this.nome = e1
        this.idade = e2
        this.matricula = e3
    }
}

class Turma{
    constructor(){
        this.listaDeAlunos = []
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno)
    }
    removerAluno(matricula){
        //for para pecorrer o array
        for (let i = 0; i < this.listaDeAlunos.length; i++) {
        //if para encontrar a matricula pretendida
        if(this.listaDeAlunos[i].matricula == matricula){
        //splice para deletar o elemento no array
            this.listaDeAlunos.splice(i, 1);
           
            }

        }
    }
}
// exibirNoHtml(){
//     document.getElementById('alunos').innerHTML = ""
//     for (let i = 0; i< listaDeAlunos.length; i++) {
//         document.getElementById('alunos').innerHTML +=(` <div class = 'card'>
//         <img src='img/${this.listaDeProdutos[i].foto}' />
//       <div class='info'>
//         <h3 class ='modelo'>${this.listaDeAlunos[i].modelo}</h3>
//         <p class ='marca'>${this.listaDeProdutos[i].marca}</p>
//          <span class ='outros'>${this.listaDeProdutos[i].processador}</span>
//         <span class ='separador'> | </span>
//         <span class ='outros'>${this.listaDeProdutos[i].armazenamento}</span>
//         <span class ='separdor'> | </span>
//         <span class ='outros'>${this.listaDeProdutos[i].ram}</span>
//         <span class ='separdor'>  | </span>
//         <span class ='outros'>${this.listaDeProdutos[i].qtdDeCameras}</span>
      
//       </div>
//   </div> 
//   `)
        
//     }
// }