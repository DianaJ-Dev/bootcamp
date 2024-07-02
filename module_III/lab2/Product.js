class Product {
    constructor(name, productId, quantity, price){
        this._name = name;
        this._productId = productId;
        this._quantity = quantity;
        this._price = price; 
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    } 

    get productId(){
        return this._productId;
    }

    set productId(value){
        this._productId = value;
    }

    get quantity(){
        return this._quantity
    }

    set quantity(value){
        this._quantity = value
    }

    get price(){
        return this._price
    }

    set price(value){
        this._price = value
    }

}

module.exports = Product;