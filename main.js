var express = require('express');

app = express();

//application level middleware
/*
app.use(function(req, res, next) {

    console.log('I am Application level middleware');
    next();
})
*/

app.use('/about', function(req, res, next) {
    console.log('I am About  middleware');
    next();
})

app.use('/', function(req, res, next) {
    console.log('I am Home  middleware');
    next();
})

app.use('/contact', function(req, res, next) {
    console.log('I am Contact  middleware');
    next();
})

app.get('/', function(req, res){
    res.send('Home Page')
})

app.get('/about', function(req, res){
    res.send('About Page')
})

app.get('/contact', function(req, res){
    res.send('Contact Page')
})


app.listen(4444, function (){
    console.log('Server running')
})