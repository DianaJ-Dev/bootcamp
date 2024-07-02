const UserFactory = require ('./Factory')

const factory = new UserFactory();
const isAdmin = factory.createUser('admin', 'Oscar');
const isMember = factory.createUser('member', 'Angie');

isAdmin.drive();
isMember.drive();