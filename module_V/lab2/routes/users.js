var express = require('express');
var router = express.Router();

var userServices = require('../services/users');
const verifyToken = require('../middlewares/authMiddleware')

/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */

const getAllUsersController = function (req, res, next) {
  userServices.getAllUsersService()
    .then(users => res.json(users))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive request HTTP POST through middleware from Node.JS and expressJS and
 * response object Request. Use method or verb POST
 * @param req
 * @param res
 * @param next
 */
const createUserController = function (req, res, next) {
  userServices.createUserService(req.body)
  .then(user => res.status(201).json(user))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive an email request HTTP GET through middleware from Node.JS and expressJS
 * and response object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
const getUserByEmailController = function (req, res, next) {
  userServices.getUserByEmailService(req.params.email)
    .then(user => res.json(user))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive an email and body request HTTP PUT through middleware
 * from Node.JS and expressJS and response object Request. Use method or verb PUT
 * @param req
 * @param res
 * @param next
 */
const updateUserByEmailController = function (req, res) {
  userServices.updateUserByEmailService(req.params.email, req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive an email by request HTTP DELETE through middleware
 * from Node.JS and expressJS and response No Content Request. Use method or verb DELETE
 * @param req
 * @param res
 * @param next
 */
const deleteUserByEmailController = function (req, res, next) {
  return userServices.deleteUserByEmailService(req.params.email)
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
};

/**
 * @description This definition section is responsible for indicating the methods or verbs that HTTP uses to receive
 * the Request and its respective Response.
 */
router.get('/', verifyToken, getAllUsersController);
router.post('/create', createUserController);
router.get('/:email/detail', verifyToken, getUserByEmailController);
router.put('/:email/update', verifyToken ,updateUserByEmailController);
router.delete('/:email/delete', verifyToken, deleteUserByEmailController);

module.exports = router;