class Cliente{
    constructor(nome,idade,cpf,telefone) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

class Produto{
    constructor(nome,id,preco,qtd){
        this.nome = nome;
        this.preco = preco;
        this.id = id;
        this.qtd = qtd;
    }
    getPreco(){
        return this.preco;
    }
    getQtd(){
        return this.qtd;
    }

}

class Carrinho extends Cliente{
    constructor(C1,produtos = [],total = 0)
    {
        super (C1.nome,C1.idade,C1.cpf,C1.telefone);
        
        this.produtos = produtos;
        this.total = total;
    }
    

    addProdutos(Produto){
        this.produtos.push(Produto);
    }
    removeProdutos(id){
        let flag = 0;
        
        this.produtos.forEach(i => {
            if (i.id == id){
                this.produtos.pop(i);
                flag = 1;   
            }
            }
        )
    
        if (flag==0)
            console.log("\nId: "+ id + " não encontrado!");
        else
            console.log("\nRemoção OK!");

    }

    valorTotal(){
        let total = 0
        this.produtos.forEach(i => {
            total = total + i.preco * i.qtd;
        })
        this.total = total;
        return total;
        
    }
    
    printaCarrinho(){
        console.log("========== Produtos ==========");
        this.produtos.forEach(i => {
            console.log("Nome: " + i.nome + "\nPreco: " + i.preco +  
            "\nId: " + i.id + "\nQtd: " + i.qtd );
            
        });
        console.log("\nValor total:" + this.valorTotal());


    
    }

}
let C1 = new Cliente("Gio",22,50490594054,4543534534534);
let p1 = new Produto("PS4",0,"2000.00",2);
let p2 = new Produto("GTX 1660TI",1,"2300.00",1);
let p3 = new Produto("XBOX ONE",2,"2000.00",3);

let carrinho1 = new Carrinho(C1);
carrinho1.addProdutos(p1);
carrinho1.addProdutos(p2);
carrinho1.addProdutos(p3);
//carrinho1.removeProdutos(4);
carrinho1.printaCarrinho();
console.log(carrinho1);



