var celular0 = new Celular("Xiaomi", "Redmi Note 12", "6 GB", "128 GB", "Snapdragon 685", 3, "note 12s pro.jpg", 12)
var celular1 = new Celular("Motorola", "Moto E40", "4 GB", "64 GB", "Unisoc T700", 4, "motoe40.jpg", 13)
var celular2 = new Celular("Motorola", "Moto E6+", "4 GB", "64 GB", "Media Tek Helio P22", 2, "motoe6+.jpg", 14)
var celular3 = new Celular("Apple", "Iphone 11", "4 GB", "128 GB", "Apple 13 Bionic", 3, "iphone 11.jpg", 15)
var celular4 = new Celular("Samsung", "Samsung m12", "4 GB", "64 GB", "Exynos 850", 5, "m12.jpg", 16)

listaDeCelular = [celular0, celular1, celular2, celular3, celular4]

//for (i = 0; i < listaDeCelular.length; i++) {
//   document.write(`
//<div class = 'card'>
// <img src='img/${listaDeCelular[i].foto}' />
// <div class='info'>
//  <h3 class ='modelo'>${listaDeCelular[i].modelo}</h3>
//  <p class ='marca'>${listaDeCelular[i].marca}</p>
//  <span class ='outros'>${listaDeCelular[i].processador}</span>
//  <span class ='separador'> | </span>
//  <span class ='outros'>${listaDeCelular[i].armazenamento}</span>
//  <span class ='separdor'> | </span>
//   <span class ='outros'>${listaDeCelular[i].ram}</span>
//  <span class ='separdor'>  | </span>
//  <span class ='outros'>${listaDeCelular[i].qtdDeCameras}</span>

// </div>
//</div>

//`)
//}
var tv0 = new Tv("Samsung", "Samsung s70", "70 polegadas", "s70.jpg", 1)
var tv1 = new Tv("LG", "Jual Led", "55 polegadas", "jual.jpg", 2)
var tv2 = new Tv("Philco", "Philco 4K", "65 polegadas", "Philco.jpg", 3)
var tv3 = new Tv("TCL", "TCL smart tv", "32 polegadas", "Tcl.jpg", 4)
var tv4 = new Tv("Sony", "Sony X75 smart tv", "75 polegadas", "sony.jpg", 5)

listaDeTv = [tv0, tv1, tv2, tv3, tv4]

//for (i = 0; i < listaDeTv.length; i++) {
//   document.write(`
//<div class = 'card'>
// <img src='img/${listaDeTv[i].foto}' />
// <div class='info'>
//<h3 class ='modelo'>${listaDeTv[i].modelo}</h3>
//<p class ='marca'>${listaDeTv[i].marca}</p>
//<span class ='outros'>${listaDeTv[i].tamanho}</span>

//</div>
//</div>
// `)
//}

var meusProdutosTop = new Favoritos();

meusProdutosTop.adicionarProdutos(celular1);
meusProdutosTop.adicionarProdutos(tv1);

console.log(meusProdutosTop)

meusProdutosTop.removerProduto(2)

console.log(meusProdutosTop)