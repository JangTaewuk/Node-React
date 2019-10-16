var express = require('express');
var models = require('../models');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(models.todo);
  models.todo.findAll()
    .then((todos) => {
      res.json(todos);
    })
});

router.get('/list/:page', function(req, res, next) {
  res.send('todo list....');
  console.log(req.params)
});

module.exports = router;
