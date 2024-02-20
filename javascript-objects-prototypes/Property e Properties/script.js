// defineProperty - defineProperties;

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = `R$ ${preco}`;

    Object.defineProperty(this, "estoque", {
        value: estoque, // valor da chave
        enumerable: true, // mostra a chave
        writable: false, // alterar valor
        configurable: true, // configurável (alterar, deletar)
    })
}
const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

function Produto2(nome, preco, estoque){
    Object.defineProperties(this, {
        nome:{
            value: nome,
            enumerable: true, 
            writable: false, 
            configurable: true, 
        },
        preco:{
            value: preco, 
            enumerable: true, 
            writable: false, 
            configurable: true, 
        },
        estoque:{
            value: estoque, 
            enumerable: true, 
            writable: false, 
            configurable: true,
        }
    })
}