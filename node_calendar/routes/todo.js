var express = require('express');
var sequelize = require('sequelize');

var todo = require('../models').tbl_todo;


var router = express.Router();
var moment = require('moment');


/* GET All List*/
router.get('/', function(req, res, next) {
  console.log(todo);
  todo.findAll()
    .then((todos) => {
      res.json(todos);
    })
});

router.get('/list/week/:date_moment', function(req, res, next) {
  inputDate = moment(req.params.date_moment);
  var Fday = inputDate.startOf('week').format("YYYY-MM-DD HH:mm:ss")
  var LDay = inputDate.endOf('week').format("YYYY-MM-DD HH:mm:ss")
  console.log("그주의 첫날과 마지막날", Fday, LDay)
})

/* GET List Month*/
router.get('/list/:year/:month', function(req, res, next) {
 
  const year = req.params.year
  const month = req.params.month -1

  var Fday = new moment([year, month]).startOf('week').format("YYYY-MM-DD HH:mm:ss")
  var Lday = new moment([year, month]).endOf('month').endOf('week').format("YYYY-MM-DD HH:mm:ss")
  console.log("그달의 첫날과 마지막날.." , Fday ,Lday)

  const Op = sequelize.Op
  todo.findAll({
    where:{
      startDate:{
        [Op.lte]: Lday
      },
      endDate:{
        [Op.gte]: Fday
      },
    },
    order: [
      ['startDate', 'ASC']
    ]
  }).then((todos) => {
      res.json(todos);
    }).catch((err) => {
      console.error(err);
      next(err);
    });

});

/* GET List Day*/
router.get('/list/:date_moment', function(req, res, next) {
  targetDate = moment(req.params.date_moment);
  console.log("해당되는 날의 일정",targetDate)

  const Op = sequelize.Op
  todo.findAll({
    where:{
      startDate:{
        [Op.lte]: targetDate
      },
      endDate:{
        [Op.gte]: targetDate
      },
    }
  }).then((todos) => {
      res.json(todos);
    }).catch((err) => {
      console.error(err);
      next(err);
    });
})


// router.get('/list/:year/:month/:day', function(req, res, next) {
 
//   const year = req.params.year
//   const month = req.params.month -1
//   const day = req.params.day

//   var Dday = new moment([year, month, day]).format("YYYY-MM-DD HH:mm:ss")
//   console.log("해당되는 날의 일정",Dday)

//   const Op = sequelize.Op
//   todo.findAll({
//     where:{
//       startDate:{
//         [Op.lte]: Dday
//       },
//       endDate:{
//         [Op.gte]: Dday
//       },
//     }
//   }).then((todos) => {
//       res.json(todos);
//     }).catch((err) => {
//       console.error(err);
//       next(err);
//     });

// });


/* Post Add New Todo*/
router.post('/new',function(req,res,next){
  console.log("Register todo ...")
  console.log("req.body.." , req.body)
  todo.create({
    title: req.body.title,
    content: req.body.content,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    dayTime: req.body.dayTime,
    rotationMonth : req.body.rotationMonth,
    allDay : req.body.allDay
  })
    .then((result) => {
      //console.log(result);
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
