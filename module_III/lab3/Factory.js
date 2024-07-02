const Admin = require ('./Admin')
const Member = require ('./Member')

class UserFactory{
    createUser(type,person){
        switch(type){
            case 'admin':
                return new Admin(person);
            case 'member':
                return new Member(person);
            default:
                throw new Error(`Unsupported type ${type}`);        
        }
    }
}

module.exports = UserFactory