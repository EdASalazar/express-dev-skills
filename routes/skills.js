var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
