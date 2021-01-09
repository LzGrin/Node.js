const { Router } = require('express');
const usersController = require('./users.controller');

const router = new Router();

router.use('/products', usersController);

module.exports = router;