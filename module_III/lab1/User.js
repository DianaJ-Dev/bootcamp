class User {
    constructor(name, lastName, typeDocument, document, age, email, phone, password) {
        this._name = name;
        this._lastName = lastName;
        this._typeDocument = typeDocument;
        this._document = document;
        this._age = age;
        this._email = email;
        this._phone = phone;
        this._password = password;
    }

    get name(){
        return this._name;
    }

    set name(value) {
        this_name = value
    }

    get lastName(){
        return this._lastName
    }

    set lastName(value){
        this_lastName = value
    }

    get typeDocument(){
        return this._lastName
    }

    set typeDocument(value){
        this_typeDocument = value
    }

    get document(){
        return this._document
    }

    set document(value){
        this_document = value
    }

    get age(){
        return this._age
    }

    set age(value){
        this_document = value
    }

    get email(){
        return this._email
    }

    set email(value){
        this_email = value
    }

    get phone(){
        return this._phone
    }

    set phone(value){
        this_phone = value
    }
    
    get password(){
        return this._password
    }

    set password(value){
        this_password = value
    }
}

module.exports = User;