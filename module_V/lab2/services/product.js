var Promise = require('bluebird');
var product = require('../mock/product.json') 

var error = {"error": "Bad Request"};

const getAllProductService = async function() {
    return new Promise(function(resolve, reject) {
      resolve(product); //ToDo: remove when the DB implemented
      reject(error);
    });
  };

const createProductService = async function (productParam) {
  return new Promise(function(resolve, reject) {
    console.log(productParam);
    resolve({message: `the user create is: ${JSON.stringify(product[5])}`}); //ToDo: remove when the DB implemented
    reject(error);
  });
};  

const getDetailProductService = async function (sku) {
  return new Promise(function(resolve, reject) {
    resolve(users[100]); //ToDo: remove when the DB implemented
    reject(error);
  });
};

const updateProductBySkuService = async function (sku, productParam) {
  return new Promise(function(resolve, reject) {
    //ToDo: remove when the DB implemented
    var userUpdate = {...users[120], ...userParam};
    resolve(userUpdate);
    reject(error);
  });
};

const deleteByskuService = async function (sku) {
  return new Promise(function(resolve, reject) {
    resolve();
    reject(error);
  });
};



module.exports = {
    getAllProductService,
    createProductService,
    getDetailProductService,
    updateProductBySkuService,
    deleteByskuService
}  