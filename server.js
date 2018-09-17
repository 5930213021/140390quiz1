var express = require('express');

var app = express();




app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('pages/home');
});

app.get('/home',function(req,res){
    res.render('pages/index');
});

console.log('App is running at http://localhost:8080');
app.listen(8080); //8080 ไว้สำหรับtest app