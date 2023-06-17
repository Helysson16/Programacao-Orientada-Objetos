class Cliente{
    constructor(nome2,cpf, end, telefone){
        this.nomeDoCliente = nome2
        this.cpf = cpf
        this.endereco = end
        this.telefone = telefone
    }
}

class Loja {
    constructor(nome3, cnpj){
        this.nome = nome3
        this.cnpj = cnpj
    }

}


class Pedido{
    constructor(qntd, np, dt, frete,lista, cL, lJ){
        this.quantidade = qntd
        this.numeroDoPedido = np
        this.data = dt
        this.frete  = frete
        this.cliente = cL
        this.loja = lJ
        this.listaDeProdutos = lista
        
    }
    calcularSubTotal(){
 
        for (let index = 0; index < this.listaDeProdutos.length; index++) {
            return calcularSubTotal =+this.listaDeProdutos[index].calcularTotalItem();
            
        }
    }
    calcularTotal(){
    return this.calcularTotalItem() + this.frete
    }
}

class ItemPedido{
    constructor(produto, quantidade){
        this.produto = produto;
        this.quantidade = quantidade
    }
    calcularTotalItem(){
        return this.produto.precoUnitario * this.quantidade;
    }
}
class Produto {
    constructor(preco, nome) {
        this.precoUnitario = preco
        this.nomeDoProduto = nome
    }
}




