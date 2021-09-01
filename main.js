var express = require('express');

app = express();

app.get('/', function(req, res){
    res.send('Assalamualikum World')
})


app.listen(4444, function (){
    console.log('Server running')
})