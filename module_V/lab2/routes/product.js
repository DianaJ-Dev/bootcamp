var express = require('express');
var router = express.Router();

var productServices = require('../services/product')
const verifyToken = require('../middlewares/authMiddleware')

const getAllProductController = function (req, res, next) {
    productServices.getAllProductService()
      .then(product => res.json(product))
      .catch(err => next(err));
  };

const createProductController = function (req, res, next){
  productServices.createProductService(req.body)
  .then(product => res.status(201).json(product))
    .catch(err => next(err))
}

const getDetailProductController = function(req, res, next){
  productServices.getDetailProductService(req.params.sku)
    .then(product => res.json(product))
    .catch(err => next(err));
}

const updateUserByProductController = function(req,res){
  productServices.updateProductBySkuService(req.params.sku,req.body)
    .then(product => res.json(product))
    .catch(err => next(err));
}

const deleteByskuController = function( req, res){
  return productServices.deleteByskuService(req.params.sku)
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
}


router.get('/', verifyToken, getAllProductController);
router.post('/create', verifyToken,createProductController);
router.get('/:sku/detail', verifyToken, getDetailProductController);
router.put('/:sku/update', verifyToken, updateUserByProductController);
router.delete('/:sku/delete', verifyToken, deleteByskuController)

module.exports = router;