const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();


//specifies the static folder 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/signUp.html');
})


app.post('/', (req,res)=>{

        
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

        console.log(req.body);
        res.end();
})



app.listen(3000, (req,res)=>{
    console.log('server is listening at port 3000');
})