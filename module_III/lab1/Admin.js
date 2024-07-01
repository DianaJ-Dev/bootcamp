const User = require("./User")

class Admin extends User {
    constructor(name, lastName, typeDocument, document, age, email, phone, password, level ){
        super(name, lastName, typeDocument, document, age, email, phone, password);
        this._level = level
    }

    get level() {
        return this._level
    }

    set level(value) {
        this._level = value
    }
 }  

 module.exports = Admin;