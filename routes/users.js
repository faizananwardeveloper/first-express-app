var express = require('express');
var router = express.Router();
const usersController = require('../controllers/userController');

// GET all users
router.get('/', usersController.getAllUsers);

// POST create user
router.post('/', usersController.createUser);

module.exports = router;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
