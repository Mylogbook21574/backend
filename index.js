// 1. dot env
require('dotenv').config()

var express = require('express')
var cors = require('cors')

// 1. mysql2 >> start here
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
// 1. mysql2 >> end here

var app = express()

app.use(cors())

// app.get('/products/:id', function (req, res, next) {
  app.get('/thongpoon', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// 2. mysql2 >> end here
// simple query
app.get('/users', function(req, res, next){
  connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
      res.json(results);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
})
// 2. mysql2 >> end here

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})