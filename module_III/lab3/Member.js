class Member {
    constructor(name){
        this.name = name;
    }

    drive(){
        console.log(`The user member is: ${this.name}`)
    }
}

module.exports = Member;