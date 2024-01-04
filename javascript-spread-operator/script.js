//spread operator
const arrayOne = [0, 1, 2, 3]
const arrayTwo = [4, 5, 6, 7]

console.log(arrayOne);
console.log(arrayTwo);

const arraySpread = [...arrayOne, ...arrayTwo];

console.log(arraySpread);

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const carKm = { km: 10000 }
const carPrice = { price: 49000 }

const carSpread = {...carName, ...carBrand, ...carKm, ...carPrice}

console.log(carSpread);