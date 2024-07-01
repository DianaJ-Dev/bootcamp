const User = require ("./User")
const Admin = require ("./Admin")
const Member = require ("./Member")

let oscarUser = new User (
    "Angie", "Olarte", "PP", 18287283792, 40, "angie34@gmail.com", 262728977, 10034
)

console.log(oscarUser)
console.log(oscarUser.name, oscarUser.age, oscarUser.phone) 

// Herencia 

const myAdmin = new Admin (
    "Oscar", "Vargas", "CC", 123473, 40, "oscar123@gmail.com", 345000002, 100035, 3
)

const myMember = new Member(
    "Martha", "Tovar", "TI", 985363, 17, "Marthav13@hotmail.com", 345454331, 100036, 15, 4
)

console.log(myAdmin)
console.log(myAdmin.name, myAdmin.level)
console.log(myMember)
console.log(myMember.name, myMember.sales, myMember.shopping)