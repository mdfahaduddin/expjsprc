 var express = require('express');

 app = express();


 app.get('/', function(req, res){
     res.send('Home Page')
 })

 app.post('/about', function(req, res){
    res.send('About Page')
})

app.put('/contact', function(req, res){
    res.send('Contact Page')
})

app.delete('/portfolio', function(req, res){
    res.send('Portfolio Page')
})


 app.listen(4040, function () {
     console.log('Server run success')
 });