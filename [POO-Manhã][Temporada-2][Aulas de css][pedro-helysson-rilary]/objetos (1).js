// Crie 3 objetos da classe Aluno.
let aluno1 = new Aluno('2º ano A', 'Anthony', 'Machado', new Date("2005-8-23"), '2022uagduyad', 'https://drive.google.com/file/d/1eynFc-CNmGcYZb6b5r5QxWs_DINsmkFT');
let aluno2 = new Aluno('2º ano A', 'Catarina ', 'Silva',new Date("2007-5-29"), '2022abuble', 'https://drive.google.com/file/d/1tCJ1hVCp7445_lj-Dj4LZ0yOaTAfxwA2');
let aluno3 = new Aluno('2º ano A', 'Robert ', 'Silva',new Date("2004-2-7"), '2022pukyjpl', 'https://drive.google.com/file/d/1drscdtgDQC-LFQVWkxioz8aJAPlELlcP');
let aluno4 = new Aluno('2º ano A', 'Pedro ', 'Castela',new Date("2006-7-11"), '2022iikh', 'https://drive.google.com/file/d/1cCtjjt4-ZEv-vj37DudZXx4WTvkBCmbs');
let aluno5 = new Aluno('2º ano A', 'paulo ', 'silva',new Date("2004-9-28"), '2022erfsds', 'https://drive.google.com/file/d/1RNj7Br60Yl7oqAK3Ypo2AQXU6vF4VDAY');
let aluno6 = new Aluno('2º ano A', 'Thiago ', 'Melo', new Date("2007-2-12"), '2022awds', 'https://drive.google.com/file/d/1yK1BWGSRxuHt4gP6mmYNOIRHs4plJ8gR');
let aluno7 = new Aluno('2º ano A', 'wytalo', 'Santos',new Date("2006-8-21"), '2022ghtes', 'https://drive.google.com/file/d/1veLv6ByeW7wDjrojoeoYjeE-vIprjSLz');
let aluno8 = new Aluno('2º ano A', 'Ellen', 'Viana', new Date("2006-12-5"), '2022juuug', 'https://drive.google.com/file/d/1xkGio1rSh25XTFnKAHcwXXsFliwU22HQ');
let aluno9 = new Aluno('2º ano A', 'Fabricio', 'Costa', new Date("2006-9-6"), '2022hyjyu', 'https://drive.google.com/file/d/17jAtucgnXEUVT06_Rhm-n1xQazWmsuM5');
let aluno10 = new Aluno('2º ano A', 'Helysson ', 'Silva', new Date("2006-6-11"), '2022rikhj', 'https://drive.google.com/file/d/1IVyT8vEVgMC7UoKOcgqo3Nol9tBSmSLs');
// Crie um array, depois adicione os 3 alunos a esse array

console.log(aluno1.getIdade());


let listaDeAlunos = [];
listaDeAlunos.push(aluno1);
listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);
listaDeAlunos.push(aluno4);
listaDeAlunos.push(aluno5);
listaDeAlunos.push(aluno6);
listaDeAlunos.push(aluno7);
listaDeAlunos.push(aluno8);
listaDeAlunos.push(aluno9);
listaDeAlunos.push(aluno10);
// Percorra o array e imprima os dados de cada 
// aluno no arquivo index.html
for (let i = 0; i < listaDeAlunos.length; i++) {
    document.write(`
    <div class='card'>

        <div class='cabecalho'>
            <div>
                <p class='turma'>${listaDeAlunos[i].turma}</p>
                <h3 class='nome'>${listaDeAlunos[i].getNome()}</h3>
            </div>
            <img class='logo' src='logo/Logo-ifal.png'/>
        </div>
    
        <div class='conteudo'>
            <img class='foto' src='${listaDeAlunos[i].foto.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com')}'>
            <div class='info'>
                <div>
                    <p class='label'>Idade</p>
                    <p class='valor'>${listaDeAlunos[i].getIdade()}</p>
                </div>
                <div>
                    <p class='label'>Matrícula</p>
                    <p class='valor'>${listaDeAlunos[i].matricula}</p>
                </div>
            </div>
        </div>

    </div>`)
}








