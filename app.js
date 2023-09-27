const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const nocache = require('nocache');
const path = require('path');
const logger = require('morgan');
const router = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(nocache());
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: '123456789',
  resave: false,
  saveUninitialized: false
}));

app.use('/route', router);
app.use('/users', usersRouter);

app.get('/', nocache(), (req, res) => {
  if(req.session.user){
    return res.redirect('/route/home');
  } else {
    return res.render('login', { title: "Login page", text:'' });
  }
});




app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
