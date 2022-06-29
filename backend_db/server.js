var express = require('express')
var app = express()
var PouchDB = require('pouchdb')
app.use('/', require('express-pouchdb')(PouchDB))
app.listen(5000)
var db = new PouchDB('mydb')
db.changes({live: true}).on('change', console.log)


// var express = require('express');
// var app = express();
// var PouchDB = require('pouchdb');

// app.use('/db', require('pouchdb-express-router')(PouchDB));

// app.listen(5000);