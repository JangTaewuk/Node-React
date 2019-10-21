var express = require('express');
var todo = require('../models').tbl_todo;

var router = express.Router();


/* GET All List*/
router.get('/', function(req, res, next) {
  console.log(todo);
  todo.findAll()
    .then((todos) => {
      res.json(todos);
    })
});
/* GET List Page*/
router.get('/list/:page', function(req, res, next) {
  res.send('todo list....');
  console.log(req.params)
});


/* Post Add New Todo*/
router.post('/new',function(req,res,next){
  console.log("Register todo ...")
  console.log("req.body.." , req.body)
  todo.create({
    title: req.body.title
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
  
})

/* update Todo*/
router.patch('/:tno', function(req, res, next) {
  todo.update({ title: req.body.title }, { where: { id: req.params.tno } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});


/* Delete Todo*/
router.delete('/:tno', function(req, res, next) {
  console.log("Delete tno :"+req.param.tno)
  todo.destroy({ where: { id: req.params.tno } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});


module.exports = router;
