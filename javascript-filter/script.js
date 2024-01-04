//filter.
const array = [1, 2, 3, 4, 5];

console.log(array);

//filtrar os números maiores que 3.
const highNumber = array.filter((numberHigh) => {
    if(numberHigh >= 3){
        return numberHigh;
    }
});

console.log(highNumber);


const users = [
    {name: "Gustavo", available: true},
    {name: "João", available: false},
    {name: "Dayane", available: true},
    {name: "Matheus", available: false},
];

//usuários True
const availableUsers = users.filter((user) => user.available);

//usuários False
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);