var createError = require('http-errors');
var express = require('express');
var routes = require('./routes/index')

var app = express();

app.use(routes)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = app.listen(3000, ()=> {
  console.log('Servidor aberto: http://localhost:3000')
})

server.on('error', (err) => console.log(err))
