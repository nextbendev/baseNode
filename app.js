var express =  require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join (__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000);

console.log('Server is runing on port 3000')
