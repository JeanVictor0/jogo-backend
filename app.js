var createError = require('http-errors');
var express = require('express');
var routes = require('./routes/index')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')


var app = express();

app.use(routes)

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json())

const server = app.listen(3000, ()=> {
  console.log('Servidor aberto: http://localhost:3000')
})

server.on('error', (err) => console.log(err))
