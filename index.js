 var express = require('express');

 app = express();

 //simple string response

 app.get('/one', function(req, res){
     res.end('This is simple string response')
 })

 app.post('/two', function(req, res){
    res.send('This is simple string response')
})

//response status code
app.get('/three', function(req, res){
    res.status(202).end();
})

//redirect
app.get('/bd', function(req, res){
    res.send('This is Bangladesh');
})

app.get('/pakistan', function(req, res){
    
    res.redirect('http://localhost:4040/bd');
})

//header
app.get('/six', function(req, res){
    
    res.append('name','Md Fahad Uddin');
    res.append('city','Dhaka');
    res.append('age','22');
   
    res.status(201).end('Hey World');
})

//cookies save

app.get('/seven', function(req, res){
    
    res.cookie('name','Md Fahad Uddin');
    res.cookie('city','Noakhali');
    res.cookie('age','21');
   
   res.end('Save Success')
})

//cookies clear

app.get('/eight', function(req, res){
    
    res.clearCookie('name');
    res.clearCookie('age');
    res.clearCookie('city');
   
   res.end('Clear Success')
})

//JSON response
app.get('/four', function(req, res){

    let MyJSONArray = [
        {
        name: 'Md Fahad Uddin',
        city: 'Noakhali',
        phnNumber: '01609671003'
        },
        {
            name: 'Md Shuvo Uddin',
            city: 'Dhaka',
            phnNumber: '01609671004'
        },
        {
            name: 'Md ABDULLAH',
            city: 'Dhaka',
            phnNumber: '01734018625'
        }
]
    res.json(MyJSONArray);
})

//download file popup
app.get('/five', function(req, res){
    res.download("./uploads/swot.png");
})

/*
 app.post('/about', function(req, res){
    res.send('About Page')
})

app.put('/contact', function(req, res){
    res.send('Contact Page')
})

app.delete('/portfolio', function(req, res){
    res.send('Portfolio Page')
})
*/

 app.listen(4040, function () {
     console.log('Server run success')
 });