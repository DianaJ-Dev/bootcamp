const Promise = require('bluebird');
const users = require('../mocks/users.json');

const error = {error: 'User not found'};

const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    let user = {...users[100]};
    user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    console.log(user);
    resolve(user);
    reject(error);
  });
};

const logout = async (email, date) => {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
};

module.exports = {
  login,
  logout
};