var express = require('express');

app = express();


// call query
app.get('/', function(req, res){
    
  let firstName =  req.query.firstName;
  let lastName =  req.query.lastName;
    res.end(firstName + ' ' + lastName);
})


// call header
app.get('/hdr', function(req, res){
    
    let firstName =  req.header('first2Name');
    let lastName =  req.header('lastName');
      res.end(firstName + ' ' + lastName);
  })

  //simple post req
  app.post('/', function(req, res){
    
    res.end('Post request')
    
  })



app.listen(4445, function (){
    console.log('Server running')
})