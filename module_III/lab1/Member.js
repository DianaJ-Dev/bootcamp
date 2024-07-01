const User = require("./User")

class Member extends User {
    constructor(name, lastName, typeDocument, document, age, email, phone, password, shopping, sales){
        super(name, lastName, typeDocument, document, age, email, phone, password)
        this._shopping = shopping;
        this._sales = sales;
    }

    get shopping() {
        return this._shopping;
    }

    set shopping(value){
        this._shopping = value
    }

    get sales() {
        return this._sales;
    }

    set sales(value){
        this._sales = value
    }

 }

module.exports= Member