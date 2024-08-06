var express = require('express');
var router = express.Router();

var productServices = require('../services/product')

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


router.get('/', getAllProductController);
router.post('/create', createProductController);
router.get('/:sku/detail', getDetailProductController);
router.put('/:sku/update', updateUserByProductController);
router.delete('/:sku/delete', deleteByskuController)

module.exports = router;