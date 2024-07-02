const Product = require("./Product")

class Accommodation extends Product {
    constructor(name, productId, quantity, price, numberPeople, numberBeds ){
        super(name, productId, quantity, price);
        this._numberPeople = numberPeople,
        this._numberBeds = numberBeds
    }

    get numberPeople() {
        return this._numberPeople
    }

    set numberPeople(value) {
        this._numberPeople = value
    }

    get numberBeds() {
        return this._numberBeds
    }

    set numberBeds(value) {
        this._numberBeds = value
    }
 }  

 module.exports = Accommodation;