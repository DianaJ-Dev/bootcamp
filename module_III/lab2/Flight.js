const Product = require("./Product")

class Flight extends Product {
    constructor(name, productId, quantity, price, travelDate, airLine ){
        super(name, productId, quantity, price);
        this._travelDate = travelDate,
        this._airLine = airLine
    }

    get travelDate() {
        return this._travelDate
    }

    set travelDate(value) {
        this._travelDate = value
    }

    get airLine() {
        return this._airLine
    }

    set airLine(value) {
        this._airLine = value
    }
 }  

 module.exports = Flight;