var express = require('express');
var router = express.Router();
const nbModel= require('../models/newbie-model');

/* GET home page. */
router.get('/', function(req, res, next) {
  let showNewbies= nbModel.find({});
    showNewbies.exec((err, data) => {
      if(err) throw err;
      else {
        // if(data.length===0)
        // res.send('Start adding newbies')
        // else
        res.json(data);
      }
    })
  
});

router.post('/add-newbie', function(req, res, next) {
  var newbieDetails= new nbModel({
    empID: req.body.empID,
    firstName: req.body.firstName,
    lastName : req.body.lastName,
    gender: req.body.gender,
    managerName : req.body.managerName,
    email : req.body.email,
    state : req.body.state

    

  })
  newbieDetails.save((err, data) =>{
    if(err) throw err;
  })
  console.log(req.body);
  res.json({name: 'add newbie' });
});

router.delete('/:id', (req, res, next)=>{
  nbModel.findByIdAndDelete({_id: req.params.id}).exec((err, data) =>{
    if(err) throw err;
    else{
      let showNewbies= nbModel.find({});
      showNewbies.exec((err, data) => {
      if(err) throw err;
      else {
        // if(data.length===0)
        // res.send('Newbie List is empty now');
        // else
        res.json(data);
      }
    })
    }
  })
})

router.get('/details/:id', (req, res, next) => {
  let getNewbie = nbModel.findById({_id: req.params.id});
  getNewbie.exec((err, data) =>{
    if(err) throw err;
    else
    res.json(data);
  })


})

router.put('/update/:id', (req, res, next) =>{
  nbModel.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName, 
                                            lastName: req.body.lastName,
                                            managerName: req.body.managerName,
                                            email: req.body.email,
                                            state: req.body.state}, (err, data) =>{
                                                                                if(err) console.log(err);
                                                                                // else
                                                                                // console.log(data);
                                                                              })
   
  
})
module.exports = router;
