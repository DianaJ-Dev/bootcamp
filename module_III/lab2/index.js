const Product = require ("./Product")
const Accommodation = require ("./Accommodation")
const Flight = require ("./Flight")

let accommodationProduct = new Product (
    "accommodation", 1221, 10, 1200000,
)

console.log(accommodationProduct)
console.log(accommodationProduct.name, accommodationProduct.price) 

// Herencia 

let flightProduct = new Flight (
    "flight", 1021, 100, 540000, 120223, "avianca"
)

let accommodationHerencia = new Accommodation(
    "accommodation", 1221, 10, 1200000,2,1
)

console.log(flightProduct)
console.log(accommodationHerencia)

