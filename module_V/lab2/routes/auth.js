var express = require('express');
var router = express.Router();

const loginController = function (req, res) {};
const logoutController = function (req, res) {};

router.post('/login', loginController);
router.post('/logout', logoutController);

module.exports = router;