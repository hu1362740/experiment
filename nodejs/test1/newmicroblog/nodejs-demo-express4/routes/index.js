var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express',user: {username:"mark"} });
});

router.post('/doLogin', function(req, res, next) {
    var user = {
        username: 'admin',
        password: 'admin'
    }
    if (req.body.username === user.username && req.body.password === user.password) {
        res.redirect('/home');
    }
    res.redirect('/login');
});

// exports.doLogin = function(req, res){
// var user={
// username:'admin',
// password:'admin'
// }
// if(req.body.username===user.username && req.body.password===user.password){
// res.redirect('/home');
// }
// res.redirect('/login');
// };

module.exports = router;
