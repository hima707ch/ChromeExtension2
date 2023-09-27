const createUser = require('../Controller/user');

const createRouter = require('express').Router();

createRouter.route('/create').post(createUser);

module.exports = createRouter;