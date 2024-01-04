//arrow functions.
const sum = function sum(a, b){
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

const arrowSum2 = (a, b) => a + b 

console.log(sum(10, 10));
console.log(arrowSum(10, 10));
console.log(arrowSum2(10, 20));


const greeting = (name) => {
    if(name){
        return "Olá " + name + "!"
    }else{
        return "Olá"
    }
}

console.log(greeting("Gustavo"));
console.log(greeting());


//arrow functions sem argumentos.
const arrowNoArgs = () => console.log("Teste Arrow sem argumentos");

arrowNoArgs();


//setTimeout sem arrowfunctions, o this é a window.
const user = {
    name: "Gustavo",
    sayUserName(){
        setTimeout(function(){
            console.log(this);
            console.log("Username: " + this);
        }, 500);
    },
    
    //o this agora é o user.
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.name);
        }, 700);
    }
}

user.sayUserName();
user.sayUserNameArrow();