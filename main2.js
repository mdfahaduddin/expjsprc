var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var multer = multer();
/*
//make storage for file upload
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads')
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
});


var upload = multer({storage:storage}).single('myfile')

app.post('./7',function(req, res){
    upload(req,res,function (error){
        if(error){
            res.send('File upload fail')
        }else{
            res.send('File upload success')
        }
    })
})
*/
var app = express();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));


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

       //body parser
       app.post('/3', function(req, res){
          let JSONData = req.body;

         let JSONString = JSON.stringify(JSONData);
//specific data catch
//let name = JSONData['name']
         res.send(JSONString);
       })

       //multipart form data 

       app.post('/4', function(req, res){
    
        let JSONData = req.body;
        let JSONString = JSON.stringify(JSONData);
        res.send(JSONString);
         
       })


app.listen(4445, function (){
    console.log('Server running')
})