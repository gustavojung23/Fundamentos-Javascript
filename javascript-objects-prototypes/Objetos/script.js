const pessoa = {
    nome: "Gustavo",
    idade: 28,
    endereco: "Rua Pastor meyer"
}

const keyName = "nome"

console.log(pessoa);
console.log(pessoa[keyName]);

//new array.
const pessoa1 = new Object();
pessoa1.nome = "Dayane";
pessoa1.idade = 26;
pessoa1.endereco = "Rua pastor meyer";

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento());

// factory function
function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa("Gustavo", "Jung");
console.log(p1.nomeCompleto());

// constructor function
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// criar um obejto vazio {} <> this 
const p2 = new Pessoa("Dayane", "Pelissaro");
const p3 = new Pessoa("Aurora", "Pelissaro");
console.log(p2, p3)