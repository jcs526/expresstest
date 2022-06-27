var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios');
const elastic = require('./module/connection')
;


    app.listen(3000, function () {
        console.log("__dirname" + __dirname);
    });

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/main.html");
})

app.post('/email_post', function (req, res) {
    //get : req.param('email')
    console.log(req.body.email);
    res.render('email.ejs', { 'email': req.body.email })
})

app.post('/ajax_send_email', function (req, res) {
    console.log(req.body.email);
    console.log('why?');
    // axios.get('http://localhost:19200/jcs/_doc/_search')
    //     .then((res) => {
    //         let res1 = JSON.stringify(res);
    //         console.log(res1);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    elastic.search({
        index: 'jcs',  //elastic의 index명 (index에 product가 없다면 결과값이 나오지 않음)
        body: {
          query: {
            quote: '정찬솔'   //검색할 단어 명 작성
          }
        }
      }, (err, result) => {
        if (err) console.log(err)
        console.log(result);
      })
    var responseData = { 'result': 'ok', 'email': req.body.email };
    res.json(responseData);
})



