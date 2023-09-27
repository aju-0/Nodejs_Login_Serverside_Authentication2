const express = require('express');
const router = express.Router();

const credential = {
  email: "ajunair0@gmail.com",
  password: "1234",
};


router.post('/login', function(req, res, next) {
  if (req.body.email == credential.email && req.body.password == credential.password) {
    req.session.user = req.body.email;
    res.redirect('/route/home');
  } else {
    res.render('login', { title: 'failedlogin', text: 'incorrect password or username' });
  }
});

router.get('/home', (req, res) => {
  if (req.session.user) {
    res.render('home', { user: req.session.user });
  } else {
    res.render('login');
  }
});
router
router.post('/logout',(req,res)=>{
  req.session.destroy(function(err){
    if(err){
      console.log(err);
      res.send("Error");
    }
    else{
      res.render('login',{title:'login',text:'logout Successfully...!'});
    }
  });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
