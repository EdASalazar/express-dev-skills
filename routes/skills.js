var express = require('express');
//factory function. Used to create something
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
//all actual paths start with "/todos"
//GET /todos
router.get('/', skillsCtrl.index);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;