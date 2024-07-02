class Admin {
    constructor(name){
        this.name = name;
    }

    drive(){
        console.log(`The user admin is: ${this.name}`)
    }
}

module.exports = Admin;