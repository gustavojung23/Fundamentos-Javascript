function Produto (nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, "estoque", {
        get: function(){
            return estoquePrivado;	
        },
        set: function(valor){
            if(typeof valor !== "number"){
                throw new TypeError("Invalid");
            }

            estoquePrivado = valor;
        },
        enumerable: true,
        configurable: false,
    });
}

const Produto1 = new Produto("Calça", 233.30, 3);
console.log(Produto1);