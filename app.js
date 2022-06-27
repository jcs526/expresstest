var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function() {
    console.log("__dirname" + __dirname);
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/main.html");
})

app.post('/email_post', function(req, res) {
    //get : req.param('email')
    console.log(req.body.email);
    res.render('email.ejs',{'email':req.body.email})
})

app.post('/ajax_send_email',function(req,res) {
    console.log(req.body.email);    
    console.log('why?');
    var responseData  = {'result':'ok','email':req.body.email};
    res.json(responseData);
})