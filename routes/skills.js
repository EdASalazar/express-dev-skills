var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
//all actual paths start with "/todos"
//GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /todos
router.post('/', skillsCtrl.create);
// DElETE /todos/:id
router.delete('/:id', skillsCtrl.delete);
// PUT /todos/:id/ update
router.put('/:id', skillsCtrl.update);


module.exports = router;