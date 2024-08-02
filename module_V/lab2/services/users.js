var Promise = require('bluebird');
var users = require('../mock/users.json');

/**
 * @type {{error: string}}
 */
var error = {"error": "Bad Request"};

/**
 * @method
 * @description This method use for get all list of users
 * @returns {Promise<*>}
 */
const getAllUsersService = async function() {
  return new Promise(function(resolve, reject) {
    resolve(users); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @param userParam
 * @description This method use for create user, and receive userParam object
 * @returns {Promise}
 */
const createUserService = async function (userParam) {
  return new Promise(function(resolve, reject) {
    console.log(userParam);
    resolve({message: `the user create is: ${JSON.stringify(users[5])}`}); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @description This method use for get user by email, and receive email object
 * @param email
 * @returns {Promise<*>}
 */
const getUserByEmailService = async function (email) {
  return new Promise(function(resolve, reject) {
    resolve(users[100]); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @description This method use for update user by email, and receive email object
 * @param email
 * @param userParam
 * @returns {Promise<*>}
 */
const updateUserByEmailService = async function (email, userParam) {
  return new Promise(function(resolve, reject) {
    //ToDo: remove when the DB implemented
    var userUpdate = {...users[120], ...userParam};
    resolve(userUpdate);
    reject(error);
  });
};

/**
 * @method
 * @description This method use for delete user by email
 * @param email
 * @returns {Promise<*>}
 */
const deleteUserByEmailService = async function (email) {
  return new Promise(function(resolve, reject) {
    resolve();
    reject(error);
  });
};

/**
 * @description Export services for use in the controller or routes * @type {{getUserByEmail: (function(*): Promise),
 * getAllUsersService: (function(): Promise),
 * createUserService: (function(*): Promise),
 * deleteUserByEmailService: (function(*): Promise),
 * updateUserByEmailService: (function(*, *): Promise)}}
 */
module.exports = {
  getAllUsersService,
  createUserService,
  getUserByEmailService,
  updateUserByEmailService,
  deleteUserByEmailService
};