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

  //query  req
  app.post('/', function(req, res){
    
   let firstName = req.query.fname;
   let lastName = req.query.lname;

   res.send(firstName + ' ' + lastName);
    
  })

    //header  req
    app.post('/2', function(req, res){
    
        let firstName =  req.header('firstName');
        let lastName =  req.header('lastName');
     
        res.send(firstName + ' ' + lastName);
         
       })



app.listen(4445, function (){
    console.log('Server running')
})